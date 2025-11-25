// app/page.tsx
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const DISCORD_INVITE =
  "https://discord.com/oauth2/authorize?client_id=1308611315878858762&permissions=2147601408&integration_type=0&scope=bot+applications.commands";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* ===== NAV ===== */}
      <header className="border-b border-white/5 bg-gradient-to-b from-black/60 to-black/20 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 text-[11px] uppercase tracking-[0.18em] text-slate-300">
          <div className="flex items-center gap-2">
            <div className="relative h-7 w-7 overflow-hidden rounded-md border border-rose-500/70 bg-[conic-gradient(from_200deg,#ff4655,#f97373,#38bdf8,#ff4655)]">
              <div className="absolute inset-[2px] rounded-[4px] bg-[radial-gradient(circle_at_30%_0,#020617_0,#020617_70%)]" />
            </div>
            <span className="font-semibold">VALO RANDOM AGENT</span>
          </div>
          <span className="hidden rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] text-slate-300 md:inline-flex">
            Discord Bot for VALORANT
          </span>
        </div>
      </header>

      {/* ===== CONTENT WRAPPER ===== */}
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 pb-10 pt-6 md:pt-10">
        {/* ===== HERO BLOCK ===== */}
        <section className="relative mb-10 grid gap-8 md:grid-cols-[minmax(0,1.35fr),minmax(0,1fr)]">
          {/* 左：メインコピー */}
          <div className="relative space-y-6 rounded-3xl border border-white/10 bg-black/50 px-5 py-6 shadow-[0_18px_70px_rgba(0,0,0,0.85)] md:px-8 md:py-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/80 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
              <span className="text-[11px] tracking-[0.18em] text-slate-200">
                VALORANT CUSTOM / FULL PARTY
              </span>
            </div>

            <div className="space-y-3">
              <h1 className="text-balance text-3xl font-extrabold tracking-[0.16em] text-slate-50 md:text-[2.3rem]">
                <span className="text-rose-400">VALO</span> Random Agent
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-200">
                カスタムの「決めごと」を Bot が全部担当。
                エージェント構成 / マップ / BAN / 罰ゲーム / 役職 / チーム分けまでワンコマンドで決定。
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={DISCORD_INVITE}
                target="_blank"
                className="inline-flex items-center justify-center rounded-full border border-rose-500 bg-gradient-to-r from-rose-500 via-rose-400 to-sky-400 px-7 py-2.5 text-[11px] font-semibold tracking-[0.2em] text-black shadow-[0_18px_45px_rgba(248,113,113,0.7)] transition hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_26px_70px_rgba(248,113,113,0.9)]"
              >
                ADD TO DISCORD
              </Link>
              <p className="text-[11px] leading-relaxed text-slate-400">
                フルパ・身内カスタム向け
              </p>
            </div>

            {/* ミニメトリクス */}
            <dl className="grid gap-3 text-[11px] text-slate-300 sm:grid-cols-3">
              <Metric label="自動で決められるもの" value="構成 / マップ / BAN / 罰ゲーム / 役職 / チーム" />
              <Metric label="対応人数" value="VC人数に対応（構成は最大5人）" />
              <Metric label="操作方法" value="スラッシュコマンドのみ（/va 系）" />
            </dl>
          </div>

          {/* 右：コマンドパネル */}
          <div className="relative flex items-stretch">
            <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#050816] via-black to-slate-900/90 p-4 shadow-[0_18px_70px_rgba(0,0,0,0.9)]">
              <div className="relative z-[1] space-y-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  SLASH COMMANDS
                </p>

                <div className="space-y-2 text-[11px]">
                  <CommandRow command="/va random" label="AGENT" desc="VCメンバーに構成を自動割り当て（3モード対応）。" />
                  <CommandRow command="/va random_map" label="MAP" desc="今から行くマップをランダムに決定。" />
                  <CommandRow command="/va ban" label="BAN" desc="ランダムでエージェントをBAN。" />
                  <CommandRow command="/va punish" label="PUNISH" desc="試合全体の罰ゲームルールをランダム選出。" />
                  <CommandRow command="/va role_shuffle" label="ROLE" desc="役職（IGL等）をランダムに割り当て。" />
                  <CommandRow command="/va teams" label="TEAMS" desc="2チームに自動チーム分け。" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION: 6 FEATURES ===== */}
        <section className="mb-12 rounded-3xl border border-white/5 bg-black/40 px-5 py-8 md:px-8">
          <SectionHeader
            kicker="FULL FEATURE LIST"
            title="このBotでできる6つのこと"
            description="実際の出力イメージと一緒に、6つの機能を直感的に確認できます。"
          />

          <div className="mt-8 space-y-8">
            <FeatureImageCard
              image="/media/random.jpg"
              command="/va random"
              title="エージェント構成ランダム"
              text={<>VCのメンバーから構成を自動生成。</>}
              tag="AGENT"
            />

            <FeatureImageCard
              image="/media/map.jpg"
              command="/va random_map"
              title="マップランダム"
              text={<>行くマップを自動で1つ選択。</>}
              tag="MAP"
            />

            <FeatureImageCard
              image="/media/ban.jpg"
              command="/va ban"
              title="ピック禁止（BANルーレット）"
              text={<>縛りプレイにぴったりなランダムBAN。</>}
              tag="BAN"
            />

            {/* ★ ここがリンク入りの PUNISH */}
            <FeatureImageCard
              image="/media/punish.jpg"
              command="/va punish"
              title="罰ゲームルーレット"
              text={
                <>
                  VCにいる全員へ1つずつ罰ゲームを割り当て。
                  罰ゲーム一覧ページと連携してカオス発生。
                  <br />
                  <Link
                    href="/punish"
                    className="underline decoration-dotted decoration-rose-400/70 underline-offset-2 hover:text-rose-300"
                  >
                    → 罰ゲーム一覧はこちら
                  </Link>
                </>
              }
              tag="PUNISH"
            />

            <FeatureImageCard
              image="/media/roles.jpg"
              command="/va role_shuffle"
              title="役職シャッフル"
              text={<>IGL / エントリー / 情報係などをランダム割り当て。</>}
              tag="ROLE"
            />

            <FeatureImageCard
              image="/media/teams.jpg"
              command="/va teams"
              title="チーム分けランダム"
              text={<>VCのメンバーを2チームに自動で振り分け。</>}
              tag="TEAMS"
            />
          </div>
        </section>

        {/* ===== SECTION: PROBLEM ===== */}
        <section className="mb-10 rounded-3xl border border-white/5 bg-black/40 px-5 py-7 md:px-8">
          <SectionHeader
            kicker="PROBLEM → SOLUTION"
            title="このBotが消してくれる “グダりポイント”"
            description="カスタム開始前の面倒な時間をすべてショートカット。"
          />

          <div className="mt-5 grid gap-4 text-sm md:grid-cols-3">
            <ProblemCard title="構成会議が長い" text="ランダム構成で即決。" tag="AGENT RANDOM" />
            <ProblemCard title="マップ選びで譲り合い" text="ランダムマップで即決。" tag="MAP RANDOM" />
            <ProblemCard title="罰ゲーム決めが毎回グダる" text="Botが毎回ランダム選出。" tag="PUNISH" />
          </div>
        </section>

        {/* ===== SECTION: SETUP ===== */}
        <section className="mb-10 rounded-3xl border border-white/5 bg-black/40 px-5 py-7 md:px-8">
          <SectionHeader title="導入方法" />

          <ol className="mt-5 space-y-4 text-sm text-slate-100">
            <TimelineItem
              step={1}
              title="Botをサーバーに招待"
              body={
                <>
                  上の「ADD TO DISCORD」から Bot を招待します。
                </>
              }
            />

            <TimelineItem
              step={2}
              title="/va help が通るか確認"
              body={
                <>
                  <Kbd>/va help</Kbd> を実行して動作確認。
                </>
              }
            />

            <TimelineItem
              step={3}
              title="VCに入ってコマンドを試す"
              body={
                <>
                  <Kbd>/va random</Kbd> や <Kbd>/va punish</Kbd> を実行。
                </>
              }
            />
          </ol>
        </section>

        {/* ===== SECTION: TARGET ===== */}
        <section className="mb-6 rounded-3xl border border-white/5 bg-black/40 px-5 py-7 md:px-8">
          <SectionHeader title="こんなサーバーに刺さります" />
          <ul className="mt-4 space-y-2 pl-4 text-sm text-slate-100">
            <li>フルパや身内カスタムが多いコミュニティ</li>
            <li>構成やマップ決めで毎回時間が溶ける人</li>
            <li>罰ゲーム付きカスタムが好きなエンジョイ勢</li>
          </ul>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="border-t border-white/5 pt-4 text-[11px] text-slate-500">
          <a
            href="https://github.com/fin4le-p/random-agent-hp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300"
          >github-hp</a>
          <br />
          <a
              href="https://github.com/fin4le-p/random-agent-bot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >github-bot</a>
          <div className="flex flex-col items-start justify-between gap-2 pb-4 sm:flex-row sm:items-center">
            <span>© VALO Random Agent</span>
            <span className="text-[10px]">
              非公式ツールです。Riot Games とは一切関係ありません。
            </span>
          </div>
        </footer>
      </div>
    </main>
  );
}

/* ========== Components ========== */

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/60 px-3 py-2">
      <dt className="text-[10px] tracking-[0.18em] text-slate-400">{label}</dt>
      <dd className="mt-0.5 text-[11px] text-slate-100">{value}</dd>
    </div>
  );
}

function CommandRow({ command, label, desc }: { command: string; label: string; desc: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-xl border border-white/10 bg-black/70 px-3 py-2">
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[11px] text-slate-50">{command}</span>
        <span className="rounded-full border border-sky-400/50 bg-sky-400/10 px-2 py-0.5 text-[10px] tracking-[0.16em] text-sky-200">
          {label}
        </span>
      </div>
      <p className="text-[11px] text-slate-200/90">{desc}</p>
    </div>
  );
}

function SectionHeader({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description?: ReactNode;
}) {
  return (
    <div>
      {kicker && (
        <p className="text-[10px] font-semibold tracking-[0.2em] text-rose-300/85">
          {kicker}
        </p>
      )}
      <h2 className="mt-1 text-lg font-semibold tracking-[0.12em] text-slate-50">
        {title}
      </h2>
      <div className="mt-2 h-[2px] w-40 rounded-full bg-gradient-to-r from-rose-500 via-rose-400 to-sky-400" />
      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200">
          {description}
        </p>
      )}
    </div>
  );
}

function ProblemCard({
  title,
  text,
  tag,
}: {
  title: string;
  text: string;
  tag: string;
}) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/60 p-4 shadow-[0_16px_45px_rgba(0,0,0,0.8)]">
      <span className="inline-flex items-center rounded-full border border-rose-500/60 bg-rose-500/10 px-2.5 py-0.5 text-[10px] tracking-[0.16em] text-rose-200">
        {tag}
      </span>
      <h3 className="mt-2 text-sm font-semibold text-slate-50">{title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-slate-200">{text}</p>
    </article>
  );
}

function TimelineItem({
  step,
  title,
  body,
}: {
  step: number;
  title: string;
  body: ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="flex h-7 w-7 items-center justify-center rounded-full border border-sky-400/70 bg-sky-400/10 text-[11px] font-semibold text-sky-200">
          {step}
        </div>
        {step !== 3 && <div className="mt-1 h-10 w-px bg-gradient-to-b from-sky-400/60 to-transparent" />}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-slate-200">{body}</p>
      </div>
    </li>
  );
}

function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="rounded border border-sky-400/70 bg-black/80 px-1.5 py-0.5 font-mono text-[11px] text-sky-100">
      {children}
    </kbd>
  );
}

function FeatureImageCard({
  image,
  command,
  title,
  text,
  tag,
}: {
  image: string;
  command: string;
  title: string;
  text: ReactNode; // ← ここを ReactNode にしている
  tag: string;
}) {
  return (
    <article className="group grid gap-5 rounded-2xl border border-white/10 bg-black/60 p-4 shadow-[0_16px_45px_rgba(0,0,0,0.7)] transition hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(0,0,0,0.85)] md:grid-cols-2">
      <div className="relative overflow-hidden rounded-xl border border-white/10">
        <Image
          src={image}
          alt={title}
          width={800}
          height={450}
          className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-col justify-center space-y-2">
        <span className="inline-flex w-fit items-center rounded-full border border-sky-400/60 bg-sky-400/10 px-2 py-0.5 text-[10px] tracking-[0.14em] text-sky-200">
          {tag}
        </span>

        <div className="font-mono text-[11px] text-slate-300">{command}</div>

        <h3 className="text-lg font-semibold text-slate-50">{title}</h3>

        <p className="text-sm leading-relaxed text-slate-200">{text}</p>
      </div>
    </article>
  );
}
