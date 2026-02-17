// app/logout/page.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export default function LogoutPage() {
  useEffect(() => {
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    const id = window.setTimeout(() => {
      // replace にして「戻る」でログアウト画面に戻りにくくする
      window.location.replace("/");
    }, prefersReduced ? 0 : 5000);

    return () => window.clearTimeout(id);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      {/* LPと合わせた背景 */}
      <div className="pointer-events-none absolute -top-28 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-br from-rose-200 via-fuchsia-200 to-sky-200 blur-3xl opacity-60 motion-safe:animate-[float_9s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-52 right-[-160px] h-[560px] w-[560px] rounded-full bg-gradient-to-br from-amber-100 via-rose-200 to-indigo-200 blur-3xl opacity-55 motion-safe:animate-[float2_11s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-56 left-[-180px] h-[560px] w-[560px] rounded-full bg-gradient-to-br from-emerald-100 via-sky-100 to-violet-100 blur-3xl opacity-45 motion-safe:animate-[float3_13s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="relative flex min-h-screen flex-col">
        <SiteHeader rightLabel="LOGOUT" />

        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-16 pt-12 md:pt-16">
          <section className="mx-auto w-full max-w-2xl rounded-3xl border border-slate-200 bg-white/80 p-8 text-center shadow-sm backdrop-blur">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-500">
              LOGOUT
            </p>

            <h1 className="mt-3 text-2xl font-bold tracking-[0.04em] text-slate-900">
              ログアウトしました
            </h1>

            <div className="mx-auto mt-4 h-[3px] w-40 rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-sky-500" />

            <p className="mt-5 text-sm leading-relaxed text-slate-700">
              5秒後にトップページへ戻ります。
              <br />
              自動で戻らない場合は、下のボタンから移動できます。
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-sky-500 px-6 py-3 text-[11px] font-semibold tracking-[0.16em] text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                HOMEに戻る
              </Link>
            </div>
          </section>

          <div className="mt-10">
            <SiteFooter />
          </div>
        </div>
      </div>
    </main>
  );
}
