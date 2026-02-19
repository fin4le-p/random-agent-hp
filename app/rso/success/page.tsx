import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export default function RsoSuccessPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      <div className="relative flex min-h-screen flex-col">
        <SiteHeader rightLabel="RSO" />

        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-4 pb-16 pt-12 md:pt-16">
          <section className="mx-auto w-full max-w-2xl rounded-3xl border border-slate-200 bg-white/85 p-8 text-center shadow-sm backdrop-blur">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-500">
              CONNECTED
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-[0.06em] text-slate-900 md:text-4xl">
              連携が完了しました
            </h1>
            <p className="mt-6 text-sm leading-relaxed text-slate-700">
              認証は正常に処理されました。
              <br />
              このタブを閉じて Discord に戻ってください。
            </p>

            <div className="mt-8">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-sky-500 px-7 py-3 text-[11px] font-semibold tracking-[0.16em] text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
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
