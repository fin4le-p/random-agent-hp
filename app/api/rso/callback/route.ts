import { NextRequest, NextResponse } from "next/server";

function splitCsv(value: string | undefined) {
  return (value ?? "")
    .split(",")
    .map((v) => v.trim())
    .filter(Boolean);
}

function normalizeForwardedHost(value: string | null) {
  return value?.split(",")[0]?.trim() ?? "";
}

function normalizeProto(value: string | null) {
  return value === "http" || value === "https" ? value : "https";
}

function getPublicOrigin(req: NextRequest) {
  const requestOrigin = new URL(req.url).origin;

  // 1) 明示指定が最強
  const envOrigin = process.env.PUBLIC_ORIGIN;
  if (envOrigin) {
    try {
      return new URL(envOrigin).origin;
    } catch {
      console.error("[rso/callback] invalid PUBLIC_ORIGIN:", envOrigin);
      return requestOrigin;
    }
  }

  const allowlist = new Set<string>([
    ...splitCsv(process.env.REDIRECT_HOST_ALLOWLIST),
    new URL(requestOrigin).host,
  ]);

  // 2) 逆プロキシの forwarded を信用（Traefik/Cloudflareで普通に入る）
  const xfProto = normalizeProto(req.headers.get("x-forwarded-proto"));
  const xfHost = normalizeForwardedHost(req.headers.get("x-forwarded-host"));
  if (xfHost && allowlist.has(xfHost)) {
    return `${xfProto}://${xfHost}`;
  }

  // 3) 最後に Host ヘッダ
  const host = normalizeForwardedHost(req.headers.get("host"));
  if (host && allowlist.has(host)) {
    return `${xfProto}://${host}`;
  }

  // 4) ダメなら req.url
  return requestOrigin;
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const error = url.searchParams.get("error");

  const publicOrigin = getPublicOrigin(req);

  console.log("[rso/callback] req.url=", req.url);
  console.log("[rso/callback] host=", req.headers.get("host"));
  console.log("[rso/callback] x-forwarded-host=", req.headers.get("x-forwarded-host"));
  console.log("[rso/callback] x-forwarded-proto=", req.headers.get("x-forwarded-proto"));
  console.log("[rso/callback] code?", !!code, "state?", !!state, "error=", error);
  console.log("[rso/callback] publicOrigin=", publicOrigin);

  if (error) {
    return NextResponse.redirect(
      new URL(`/rso/error?error=${encodeURIComponent(error)}`, publicOrigin)
    );
  }

  if (!code || !state) {
    return NextResponse.redirect(
      new URL(`/rso/error?error=missing_code_or_state`, publicOrigin)
    );
  }

  const apiBase = process.env.API_BASE_URL;        // 例: http://api:8000
  const internalKey = process.env.INTERNAL_API_KEY;

  if (!apiBase || !internalKey) {
    console.error("[rso/callback] server_misconfigured", {
      apiBase: !!apiBase,
      internalKey: !!internalKey,
    });
    return NextResponse.redirect(
      new URL(`/rso/error?error=server_misconfigured`, publicOrigin)
    );
  }

  try {
    const resp = await fetch(`${apiBase}/internal/rso/exchange`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Internal-API-Key": internalKey,
      },
      body: JSON.stringify({ code, state }),
      cache: "no-store",
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => "");
      console.error("[rso/callback] exchange failed:", resp.status, text);
      return NextResponse.redirect(
        new URL(`/rso/error?error=exchange_failed`, publicOrigin)
      );
    }
  } catch (e) {
    console.error("[rso/callback] exchange exception:", e);
    return NextResponse.redirect(
      new URL(`/rso/error?error=exchange_failed`, publicOrigin)
    );
  }

  return NextResponse.redirect(new URL(`/rso/success`, publicOrigin));
}
