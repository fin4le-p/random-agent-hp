// app/privacy-policy/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | VALO Random Agent",
  description:
    "VALO Random Agent のプライバシーポリシー。収集する情報、利用目的、Riot APIの利用、第三者提供、削除申請等について。",
};

export default function PrivacyPolicyPage() {
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
                <p className="text-[11px] text-slate-500">PRIVACY POLICY</p>
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
              PRIVACY POLICY
            </p>
            <h1 className="mt-2 text-balance text-2xl font-extrabold tracking-[0.06em] text-slate-900 md:text-3xl">
              プライバシーポリシー
            </h1>
            <div className="mt-3 h-[3px] w-40 rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-sky-500" />

            <p className="mt-5 text-sm leading-7 text-slate-700">
              random-agent（以下、「本サービス」）では、ユーザーのプライバシーを尊重し、
              以下の方針に基づいて情報を取り扱います。
            </p>
          </section>

          {/* BODY */}
          <div className="mt-10 space-y-6">
            <PolicyCard title="1. 収集する情報">
              <ul className="list-disc space-y-1 pl-5">
                <li>アクセス解析による匿名データ</li>
                <li>お問い合わせ時にユーザーが入力した情報</li>
                <li>Riotアカウント連携時に取得される識別情報（puuidなど）</li>
                <li>DiscordアカウントのユーザーID（連携機能利用時）</li>
              </ul>
              <p className="mt-3">
                氏名、住所など、本サービスの提供に不要な個人情報を強制的に取得することはありません。
              </p>
            </PolicyCard>

            <PolicyCard title="2. 利用目的">
              <ul className="list-disc space-y-1 pl-5">
                <li>サービスの提供および機能実現</li>
                <li>ユーザー認証およびアカウント連携</li>
                <li>サービス改善および不具合対応</li>
                <li>お問い合わせへの返信</li>
              </ul>
              <p className="mt-3">これら以外の目的で利用することはありません。</p>
            </PolicyCard>

            <PolicyCard title="3. Riot APIの利用について">
              <p>
                本サービスは、Riot Games APIを利用しています。ユーザーのゲーム関連データは、
                ユーザー本人がRiotアカウントでログインし、明示的に同意（Opt-in）した場合のみ取得・表示されます。
              </p>
              <p className="mt-3">
                ユーザーが連携を行っていない場合、そのユーザーのゲームデータが他者に表示されることはありません。
              </p>
            </PolicyCard>

            <PolicyCard title="4. アクセス解析ツール">
              <p>
                本サービスでは、Google Analytics などのアクセス解析ツールを利用する場合があります。
                これらのツールは匿名データを収集し、個人を特定することはありません。
              </p>
            </PolicyCard>

            <PolicyCard title="5. 情報の第三者提供">
              <p>
                法令に基づく場合を除き、取得した情報を第三者に提供することはありません。
              </p>
            </PolicyCard>

            <PolicyCard title="6. データの削除・連携解除">
              <p>
                ユーザーは、Discordコマンドまたはお問い合わせにより、
                Riotアカウント連携の解除およびデータ削除を申請できます。
              </p>
            </PolicyCard>

            <PolicyCard title="7. お問い合わせ">
              <p>
                プライバシーポリシーに関するお問い合わせは、X（Twitter）@nakano06_ までご連絡ください。
              </p>
            </PolicyCard>

            <PolicyCard title="8. ポリシーの変更">
              <p>
                必要に応じて、本ポリシーの内容を変更する場合があります。
                最新の内容は本ページに掲載します。
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
