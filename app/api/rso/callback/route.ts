import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const error = url.searchParams.get("error");

  if (error) {
    return NextResponse.redirect(new URL(`/rso/error?error=${encodeURIComponent(error)}`, url.origin));
  }
  if (!code || !state) {
    return NextResponse.redirect(new URL(`/rso/error?error=missing_code_or_state`, url.origin));
  }

  // Djangoの内部エンドポイントに渡す（svc-net経由で到達できるURL）
  const apiBase = process.env.API_BASE_URL; // 例: http://api:8000
  const internalKey = process.env.INTERNAL_API_KEY;

  if (!apiBase || !internalKey) {
    return NextResponse.redirect(new URL(`/rso/error?error=server_misconfigured`, url.origin));
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
    console.error("RSO exchange failed:", resp.status, text);
    return NextResponse.redirect(new URL(`/rso/error?error=exchange_failed`, url.origin));
  }

  // 成功：ユーザーに「連携完了」ページへ
  return NextResponse.redirect(new URL(`/rso/success`, url.origin));
}
