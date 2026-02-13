// components/SiteHeader.tsx
import Image from "next/image";
import Link from "next/link";

const DISCORD_INVITE =
  "https://discord.com/oauth2/authorize?client_id=1308611315878858762&permissions=2147601408&integration_type=0&scope=bot+applications.commands";

export default function SiteHeader({
  rightLabel,
  rightHref,
}: {
  rightLabel?: string;
  rightHref?: string;
}) {
  return (
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
            {rightLabel && (
              <p className="text-[11px] text-slate-500">{rightLabel}</p>
            )}
          </div>
        </Link>

        {/* rightLabel があるときだけボタン表示 */}
        {rightLabel ? (
          <div className="hidden items-center gap-2 md:flex">
            <Link
              href={rightHref || "/"}
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
            >
              トップへ戻る
            </Link>
          </div>
        ) : (
          <div className="hidden items-center gap-2 md:flex">
            <Link
              href={DISCORD_INVITE}
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-sky-500 px-4 py-2 text-[11px] font-semibold tracking-[0.16em] text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              BOTを追加
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
