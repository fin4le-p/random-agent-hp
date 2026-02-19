import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

function mapErrorMessage(error?: string) {
  switch (error) {
    case "missing_code_or_state":
      return "認証情報が不足しています。認証を最初からやり直してください。";
    case "exchange_failed":
      return "サーバー側で認証情報の交換に失敗しました。時間を空けて再度お試しください。";
    case "server_misconfigured":
      return "サーバー設定エラーが発生しています。管理者にお問い合わせください。";
    default:
      return "認証処理中にエラーが発生しました。";
  }
}

export default async function RsoErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const message = mapErrorMessage(error);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader rightLabel="RSO" />

        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-4 pb-16 pt-12 md:pt-16">
          <section className="mx-auto w-full max-w-2xl rounded-3xl border border-rose-200 bg-white/85 p-8 text-center shadow-sm backdrop-blur">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-rose-500">
              ERROR
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-[0.06em] text-slate-900 md:text-4xl">
              連携に失敗しました
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-slate-700">{message}</p>
            {error ? (
              <p className="mt-3 text-xs text-slate-500">Error code: {error}</p>
            ) : null}

            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3 text-[11px] font-semibold tracking-[0.16em] text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50"
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
