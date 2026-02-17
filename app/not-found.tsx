// app/not-found.tsx
"use client";

import Link from "next/link";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

export default function NotFoundPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      {/* 背景エフェクト（他ページと統一） */}
      <div className="pointer-events-none absolute -top-28 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-br from-rose-200 via-fuchsia-200 to-sky-200 blur-3xl opacity-60 motion-safe:animate-[float_9s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-52 right-[-160px] h-[560px] w-[560px] rounded-full bg-gradient-to-br from-amber-100 via-rose-200 to-indigo-200 blur-3xl opacity-55 motion-safe:animate-[float2_11s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-56 left-[-180px] h-[560px] w-[560px] rounded-full bg-gradient-to-br from-emerald-100 via-sky-100 to-violet-100 blur-3xl opacity-45 motion-safe:animate-[float3_13s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="relative flex min-h-screen flex-col">
        <SiteHeader rightLabel="404" />

        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-16 pt-12 md:pt-16">
          <section className="mx-auto w-full max-w-2xl rounded-3xl border border-slate-200 bg-white/80 p-8 text-center shadow-sm backdrop-blur">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-500">
              ERROR
            </p>

            <h1 className="mt-3 text-4xl font-extrabold tracking-[0.06em] text-slate-900">
              404
            </h1>

            <div className="mx-auto mt-4 h-[3px] w-40 rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-sky-500" />

            <p className="mt-6 text-sm leading-relaxed text-slate-700">
              お探しのページは存在しないか、
              <br />
              移動または削除された可能性があります。
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-sky-500 px-7 py-3 text-[11px] font-semibold tracking-[0.16em] text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                HOMEに戻る
              </Link>

              <button
                onClick={() => history.back()}
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-[11px] font-semibold tracking-[0.14em] text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                前のページに戻る
              </button>
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
