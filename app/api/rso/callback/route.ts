import { NextRequest, NextResponse } from "next/server";

function stripTrailingSlash(s: string) {
  return s.replace(/\/$/, "");
}

function getPublicOrigin(req: NextRequest) {
  // 1) 明示指定が最強
  const envOrigin = process.env.PUBLIC_ORIGIN;
  if (envOrigin) return stripTrailingSlash(envOrigin);

  // 2) 逆プロキシの forwarded を信用（Traefik/Cloudflareで普通に入る）
  const xfProto = req.headers.get("x-forwarded-proto") || "https";
  const xfHost = req.headers.get("x-forwarded-host");
  if (xfHost) return `${xfProto}://${xfHost}`;

  // 3) 最後に Host ヘッダ（これがコンテナ名になると事故る）
  const host = req.headers.get("host");
  if (host) return `${xfProto}://${host}`;

  // 4) ダメなら req.url
  return new URL(req.url).origin;
}

function redirectTo(publicOrigin: string, path: string) {
  return NextResponse.redirect(new URL(path, publicOrigin));
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);

  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const error = url.searchParams.get("error");

  const publicOrigin = getPublicOrigin(req);

  // デバッグ（いま何が来てるか確実に見る）
  console.log("[rso/callback] req.url=", req.url);
  console.log("[rso/callback] host=", req.headers.get("host"));
  console.log("[rso/callback] x-forwarded-host=", req.headers.get("x-forwarded-host"));
  console.log("[rso/callback] x-forwarded-proto=", req.headers.get("x-forwarded-proto"));
  console.log("[rso/callback] code?", !!code, "state?", !!state, "error=", error);
  console.log("[rso/callback] publicOrigin=", publicOrigin);

  // Riot側から error が返ってきた
  if (error) {
    return redirectTo(publicOrigin, `/rso/error?error=${encodeURIComponent(error)}`);
  }

  // 直打ちなどで code/state が無い
  if (!code || !state) {
    return redirectTo(publicOrigin, `/rso/error?error=missing_code_or_state`);
  }

  // Djangoの内部エンドポイントへ（svc-net で api:8000 が引ける前提）
  const apiBase = process.env.API_BASE_URL; // 例: http://api:8000
  const internalKey = process.env.INTERNAL_API_KEY;

  if (!apiBase || !internalKey) {
    console.error("[rso/callback] server_misconfigured", {
      apiBase: !!apiBase,
      internalKey: !!internalKey,
    });
    return redirectTo(publicOrigin, `/rso/error?error=server_misconfigured`);
  }

  // fetch タイムアウト（ハング防止）
  const controller = new AbortController();
  const timeoutMs = 8000;
  const t = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const resp = await fetch(`${stripTrailingSlash(apiBase)}/internal/rso/exchange`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Internal-API-Key": internalKey,
      },
      body: JSON.stringify({ code, state }),
      cache: "no-store",
      signal: controller.signal,
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => "");
      console.error("[rso/callback] exchange failed:", resp.status, text);
      return redirectTo(publicOrigin, `/rso/error?error=exchange_failed`);
    }

    // 成功：ユーザーに「連携完了」ページへ
    return redirectTo(publicOrigin, `/rso/success`);
  } catch (e: any) {
    // タイムアウト or ネットワーク断
    console.error("[rso/callback] exchange exception:", e?.name, e?.message || e);
    const err = e?.name === "AbortError" ? "exchange_timeout" : "exchange_exception";
    return redirectTo(publicOrigin, `/rso/error?error=${err}`);
  } finally {
    clearTimeout(t);
  }
}
