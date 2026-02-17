import { NextRequest, NextResponse } from "next/server";

function getPublicOrigin(req: NextRequest) {
  const envOrigin = process.env.PUBLIC_ORIGIN;
  if (envOrigin) return envOrigin.replace(/\/$/, "");

  const xfProto = req.headers.get("x-forwarded-proto") || "https";
  const xfHost = req.headers.get("x-forwarded-host");
  if (xfHost) return `${xfProto}://${xfHost}`;

  const host = req.headers.get("host");
  if (host) return `${xfProto}://${host}`;

  return new URL(req.url).origin;
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const error = url.searchParams.get("error");

  const publicOrigin = getPublicOrigin(req);

  // デバッグ
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

  const apiBase = process.env.API_BASE_URL;       // 例: http://api:8000
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

  return NextResponse.redirect(new URL(`/rso/success`, publicOrigin));
}
