// app/terms/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約 | VALO Random Agent",
  description:
    "VALO Random Agent の利用規約。サービス内容、アカウント連携、禁止事項、免責事項などを記載しています。",
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      {/* LPと合わせた背景 */}
      <div className="pointer-events-none absolute -top-28 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-br from-rose-200 via-fuchsia-200 to-sky-200 blur-3xl opacity-60 motion-safe:animate-[float_9s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-52 right-[-160px] h-[560px] w-[560px] rounded-full bg-gradient-to-br from-amber-100 via-rose-200 to-indigo-200 blur-3xl opacity-55 motion-safe:animate-[float2_11s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-56 left-[-180px] h-[560px] w-[560px] rounded-full bg-gradient-to-br from-emerald-100 via-sky-100 to-violet-100 blur-3xl opacity-45 motion-safe:animate-[float3_13s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="relative flex min-h-screen flex-col">
        {/* ===== HEADER ===== */}
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <Image
                  src="/favicon.png"
                  alt="VALO Random Agent icon"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-xl object-cover"
                  priority
                />
              </div>

              <div className="leading-tight">
                <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-700">
                  VALO RANDOM AGENT
                </p>
                <p className="text-[11px] text-slate-500">TERMS</p>
              </div>
            </Link>

            <div className="hidden items-center gap-2 md:flex">
              <Link
                href="/"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                トップへ戻る
              </Link>
            </div>
          </div>
        </header>

        {/* ===== CONTENT ===== */}
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-16 pt-10 md:pt-16">
          {/* HERO */}
          <section className="rounded-3xl border border-slate-200/70 bg-white/70 px-6 py-10 shadow-sm backdrop-blur md:px-10 md:py-12">
            <p className="text-[10px] font-semibold tracking-[0.22em] text-slate-500">
              TERMS
            </p>
            <h1 className="mt-2 text-balance text-2xl font-extrabold tracking-[0.06em] text-slate-900 md:text-3xl">
              利用規約
            </h1>
            <div className="mt-3 h-[3px] w-40 rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-sky-500" />

            <p className="mt-5 text-sm leading-7 text-slate-700">
              本利用規約（以下、「本規約」）は、本サービスの利用条件を定めるものです。
              ユーザーは、本サービスを利用することにより、本規約に同意したものとみなされます。
            </p>
          </section>

          {/* BODY */}
          <div className="mt-10 space-y-6">
            <PolicyCard title="第1条（サービス内容）">
              <p>
                本サービスは、Riot Games APIおよびその他の外部サービスを利用し、
                ゲーム関連情報の表示や機能を提供する非公式サービスです。
              </p>
            </PolicyCard>

            <PolicyCard title="第2条（アカウント連携）">
              <ul className="list-disc space-y-1 pl-5">
                <li>
                  本サービスの一部機能は、RiotアカウントおよびDiscordアカウントとの連携が必要です。
                </li>
                <li>
                  ゲームデータは、ユーザー本人がRiotアカウントで認証を行った場合のみ表示されます。
                </li>
              </ul>
            </PolicyCard>

            <PolicyCard title="第3条（禁止事項）">
              <ul className="list-disc space-y-1 pl-5">
                <li>法令または公序良俗に違反する行為</li>
                <li>サービスの運営を妨害する行為</li>
                <li>不正アクセス、リバースエンジニアリング等の行為</li>
                <li>他人のアカウントを不正に利用する行為</li>
                <li>本サービスのバグや不具合を悪用する行為</li>
              </ul>
            </PolicyCard>

            <PolicyCard title="第4条（サービスの変更・停止）">
              <p>
                本サービスは、予告なく内容の変更または提供の停止を行う場合があります。
              </p>
            </PolicyCard>

            <PolicyCard title="第5条（免責事項）">
              <ul className="list-disc space-y-1 pl-5">
                <li>本サービスは、正確性や完全性を保証するものではありません。</li>
                <li>
                  本サービスの利用により発生した損害について、運営者は一切の責任を負いません。
                </li>
                <li>
                  本サービスはRiot Gamesによって承認または後援されたものではありません。
                </li>
              </ul>
            </PolicyCard>

            <PolicyCard title="第6条（外部サービス）">
              <p>
                本サービスは、Riot GamesおよびDiscordなどの外部サービスを利用しています。
                これらのサービスの利用には、それぞれの規約が適用されます。
              </p>
            </PolicyCard>

            <PolicyCard title="第7条（規約の変更）">
              <p>
                本規約は、必要に応じて変更される場合があります。
                変更後の規約は、本サービス上に掲載した時点で効力を生じます。
              </p>
            </PolicyCard>

            <PolicyCard title="第8条（お問い合わせ）">
              <p>
                本規約に関するお問い合わせは、X（Twitter）@nakano06_ までご連絡ください。
              </p>
            </PolicyCard>
          </div>

          {/* FOOTER */}
          <footer className="mt-8 border-t border-slate-200/70 pt-5 text-[11px] text-slate-500">
            <a
              href="privacy"
              rel="noopener noreferrer"
              className="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-600"
            >
              プライバシーポリシー
            </a>
            <br />
            <a
              href="terms"
              rel="noopener noreferrer"
              className="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-600"
            >
              利用規約
            </a>
            <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
              <span></span>
              <span className="text-[10px]">
                このサービスはRiot Games APIを使用しています。プレイヤーデータは、RSO経由で明示的にオプトインされた場合にのみ表示されます。本サービスはRiot Gamesと一切関係ありません。
              </span>
            </div>
            <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
              <span>© VALO Random Agent</span>
              <span className="text-[10px]">
                This service uses the Riot Games API.
                Player data is only displayed after explicit opt-in via Riot Sign-On.
                This product is not endorsed by Riot Games.
              </span>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}

function PolicyCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-slate-200/70 bg-white/70 px-6 py-7 text-sm leading-7 text-slate-700 shadow-sm backdrop-blur md:px-10">
      <h2 className="text-base font-semibold tracking-[0.04em] text-slate-900">
        {title}
      </h2>
      <div className="mt-3 h-px w-full bg-slate-200/80" />
      <div className="mt-4">{children}</div>
    </section>
  );
}
