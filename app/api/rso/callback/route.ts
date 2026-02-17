// app/api/rso/callback/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);

  // 外向きにリダイレクトしたい origin を固定（これがないと 85fc...:3000 とかに飛びがち）
  const origin = process.env.PUBLIC_ORIGIN ?? url.origin;

  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const error = url.searchParams.get("error");

  const redirectError = (err: string) =>
    NextResponse.redirect(new URL(`/rso/error?error=${encodeURIComponent(err)}`, origin));

  if (error) {
    return redirectError(error);
  }
  if (!code || !state) {
    return redirectError("missing_code_or_state");
  }

  // Django の内部エンドポイントへ（svc-net 経由で到達できるURL）
  const apiBase = process.env.API_BASE_URL; // 例: http://api:8000
  const internalKey = process.env.INTERNAL_API_KEY;

  if (!apiBase || !internalKey) {
    return redirectError("server_misconfigured");
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
      console.error("RSO exchange failed:", resp.status, text);
      return redirectError("exchange_failed");
    }

    // 成功：ユーザーに「連携完了」ページへ
    return NextResponse.redirect(new URL(`/rso/success`, origin));
  } catch (e) {
    console.error("RSO exchange exception:", e);
    return redirectError("exchange_exception");
  }
}
