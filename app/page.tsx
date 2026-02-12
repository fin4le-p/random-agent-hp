"use client";

import { useEffect, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

const DISCORD_INVITE =
  "https://discord.com/oauth2/authorize?client_id=1308611315878858762&permissions=2147601408&integration_type=0&scope=bot+applications.commands";

/**
 * data-reveal + CSS変数で遅延をつける（細かいFadeIn用）
 */
function revealDelay(ms: number) {
  return { ["--reveal-delay" as any]: `${ms}ms` } as React.CSSProperties;
}

export default function HomePage() {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      {/* soft blobs */}
      <div className="pointer-events-none absolute -top-28 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-br from-rose-200 via-fuchsia-200 to-sky-200 blur-3xl opacity-60 motion-safe:animate-[float_9s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-52 right-[-160px] h-[560px] w-[560px] rounded-full bg-gradient-to-br from-amber-100 via-rose-200 to-indigo-200 blur-3xl opacity-55 motion-safe:animate-[float2_11s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-56 left-[-180px] h-[560px] w-[560px] rounded-full bg-gradient-to-br from-emerald-100 via-sky-100 to-violet-100 blur-3xl opacity-45 motion-safe:animate-[float3_13s_ease-in-out_infinite]" />

      {/* subtle grid pattern (mediaっぽい下地) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="relative flex min-h-screen flex-col">
        {/* ===== NAV ===== */}
        <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <div className="flex items-center gap-3">
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
                <p className="text-[11px] text-slate-500">
                  Discord Bot for VALORANT
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <Link
                href={DISCORD_INVITE}
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-sky-500 px-4 py-2 text-[11px] font-semibold tracking-[0.16em] text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                BOTを追加
              </Link>
            </div>
          </div>
        </header>

        {/* ===== CONTENT WRAPPER ===== */}
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 pb-16 pt-10 md:pt-16">
          {/* ===== 1) HERO BLOCK ===== */}
          <section className="grid gap-10 md:grid-cols-[minmax(0,1.25fr),minmax(0,0.95fr)]">
            {/* 左：メインコピー */}
            <div
              data-reveal
              style={revealDelay(0)}
              className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 p-7 shadow-sm backdrop-blur md:p-10"
            >
              <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full bg-gradient-to-br from-rose-200 via-fuchsia-200 to-sky-200 blur-2xl opacity-60" />

              <div className="relative space-y-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-semibold tracking-[0.18em] text-slate-600">
                    VALORANT CUSTOM / FULL PARTY
                  </span>
                </div>

                <div className="space-y-3">
                  <h1 className="text-balance text-3xl font-extrabold tracking-[0.04em] text-slate-900 md:text-[2.75rem]">
                    <span className="bg-gradient-to-r from-rose-600 via-fuchsia-600 to-sky-600 bg-clip-text text-transparent">
                      VALO
                    </span>{" "}
                    Random Agent
                  </h1>

                  {/* mediaっぽく：本文は読みやすい幅と行間 */}
                  <p className="max-w-[52ch] text-sm leading-7 text-slate-700 md:text-[15px]">
                    カスタムの「決めごと」を Bot が全部担当。
                    エージェント構成 / マップ / BAN / 罰ゲーム / 役職 / チーム分けまでワンコマンドで決定。
                  </p>
                  <p className="text-xs font-semibold text-emerald-700/90">
                    AIで戦術/罰ゲームの自動生成も可能。
                  </p>
                </div>

                {/* ミニメトリクス */}
                <dl className="grid gap-3 text-[11px] sm:grid-cols-3">
                  <Metric
                    label="自動で決められるもの"
                    value="構成 / マップ / BAN / 罰ゲーム / 役職 / チーム"
                  />
                  <Metric label="対応人数" value="VC人数に対応（構成は最大5人）" />
                  <Metric label="操作方法" value="スラッシュコマンドのみ（/va 系）" />
                </dl>
              </div>
            </div>

            <section id="invite" className="mt-10">
              <div
                data-reveal
                style={revealDelay(0)}
                className="relative overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/70 px-6 py-14 shadow-sm backdrop-blur md:px-12 md:py-20"
              >
                <div className="absolute -left-10 -top-16 h-52 w-52 rounded-full bg-gradient-to-br from-sky-200 via-fuchsia-200 to-rose-200 blur-2xl opacity-55" />
                <div className="absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-gradient-to-br from-emerald-200 via-sky-200 to-violet-200 blur-2xl opacity-45" />

                <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                  <p className="text-[10px] font-semibold tracking-[0.24em] text-slate-500">
                    INVITE
                  </p>
                  <h2 className="mt-3 text-balance text-2xl font-extrabold tracking-[0.06em] text-slate-900 md:text-3xl">
                    DiscordにBotを招待するなら、ここ
                  </h2>
                  <p className="mt-4 max-w-[60ch] text-sm leading-7 text-slate-700">
                    このボタンから Discord の招待画面に飛びます。
                  </p>

                  <div className="mt-9 flex flex-col items-center gap-4">
                    <Link
                      href={DISCORD_INVITE}
                      target="_blank"
                      className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-sky-500 px-10 py-4 text-[12px] font-extrabold tracking-[0.22em] text-white shadow-[0_14px_40px_rgba(217,70,239,0.25)] transition hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(14,165,233,0.28)] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    >
                      <span className="absolute inset-0 rounded-full opacity-0 blur-md transition group-hover:opacity-100 motion-safe:animate-[ctaPulse_2.2s_ease-in-out_infinite]" />
                      DISCORDにBOTを追加！
                    </Link>

                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[11px] text-slate-500">
                      <span className="inline-flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        フルパ・身内カスタム向け
                      </span>
                      <span className="hidden h-3 w-px bg-slate-300 md:inline-block" />
                      <span className="inline-flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                        招待リンク：上記ボタンから追加のみ
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div data-reveal style={revealDelay(90)} className="relative mt-12">
              <div className="h-full overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur md:p-7">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-600">
                    SLASH COMMANDS
                  </p>
                  <span className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[10px] font-semibold tracking-[0.18em] text-slate-500">
                    /va
                  </span>
                </div>

                <div className="space-y-2 text-[11px]">
                  <CommandRow
                    command="/va random"
                    label="AGENT"
                    desc="VCメンバーに構成を自動割り当て（3モード対応）。"
                    delay={0}
                  />
                  <CommandRow
                    command="/va random_map"
                    label="MAP"
                    desc="今から行くマップをランダムに決定。"
                    delay={60}
                  />
                  <CommandRow
                    command="/va ban"
                    label="BAN"
                    desc="ランダムでエージェントをBAN。"
                    delay={120}
                  />
                  <CommandRow
                    command="/va punish"
                    label="PUNISH"
                    desc="試合全体の罰ゲームルールをランダム選出。"
                    delay={180}
                  />
                  <CommandRow
                    command="/va role_shuffle"
                    label="ROLE"
                    desc="役職（IGL等）をランダムに割り当て。"
                    delay={240}
                  />
                  <CommandRow
                    command="/va teams"
                    label="TEAMS"
                    desc="2チームに自動チーム分け。"
                    delay={300}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div
              data-reveal
              style={revealDelay(0)}
              className="rounded-3xl border border-slate-200/70 bg-white/70 px-6 py-10 shadow-sm backdrop-blur md:px-10 md:py-12"
            >
              <SectionHeader
                kicker="FULL FEATURE LIST"
                title="このBotでできる6つのこと"
                description="実際の出力イメージと一緒に、6つの機能を直感的に確認できます。"
              />

              <div className="mt-10 space-y-7">
                <FeatureImageCard
                  delay={0}
                  image="/media/random.jpg"
                  command="/va random"
                  title="エージェント構成ランダム"
                  text={<>VCのメンバーから構成を自動生成。</>}
                  tag="AGENT"
                />

                <FeatureImageCard
                  delay={80}
                  image="/media/map.jpg"
                  command="/va random_map"
                  title="マップランダム"
                  text={<>行くマップを自動で1つ選択。</>}
                  tag="MAP"
                />

                <FeatureImageCard
                  delay={160}
                  image="/media/ban.jpg"
                  command="/va ban"
                  title="ピック禁止（BANルーレット）"
                  text={<>縛りプレイにぴったりなランダムBAN。</>}
                  tag="BAN"
                />

                <FeatureImageCard
                  delay={240}
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
                        className="font-semibold text-rose-600 underline decoration-rose-300 underline-offset-4 hover:text-rose-500"
                      >
                        → 罰ゲーム一覧はこちら
                      </Link>
                    </>
                  }
                  tag="PUNISH"
                />

                <FeatureImageCard
                  delay={320}
                  image="/media/roles.jpg"
                  command="/va role_shuffle"
                  title="役職シャッフル"
                  text={<>IGL / エントリー / 情報係などをランダム割り当て。</>}
                  tag="ROLE"
                />

                <FeatureImageCard
                  delay={400}
                  image="/media/teams.jpg"
                  command="/va teams"
                  title="チーム分けランダム"
                  text={<>VCのメンバーを2チームに自動で振り分け。</>}
                  tag="TEAMS"
                />
              </div>
            </div>
          </section>

          {/* ===== SECTION: AI ===== */}
          <section className="mt-16">
            <div
              data-reveal
              style={revealDelay(0)}
              className="rounded-3xl border border-emerald-200 bg-white/70 px-6 py-10 shadow-sm backdrop-blur md:px-10 md:py-12"
            >
              <SectionHeader
                kicker="AI COMMANDS"
                title="AIで戦術/罰ゲームを自動生成"
                description="Discord上で、AIに戦術と罰ゲームの両方を一発で作ってもらえます。"
              />

              <div className="mt-10 space-y-8">
                <AiFeatureImageCard
                  delay={0}
                  image="/media/ai.jpg"
                  command="/ai tactic / /ai punish"
                  title="AIランダム生成"
                  text={
                    <>
                      戦術と罰ゲームをAIに任せて、試合の流れを一気に作るモード。
                      難易度は通常/ハードから選べます。
                    </>
                  }
                  tag="AI"
                />

                <div className="grid gap-7 md:grid-cols-[1.2fr,0.8fr]">
                  <div className="space-y-3">
                    <AiCommandRow
                      delay={60}
                      command="/ai tactic <id> <内容> （/ai tactic 2 バインド攻めで、相手にオペが出てきてから連敗中）"
                      label="TACTIC"
                      desc="1ラウンド完結の戦術を1件生成。内容に状況/要望を書く。"
                    />
                    <AiCommandRow
                      delay={120}
                      command="/ai tactic_hard <id> <内容>"
                      label="TACTIC HARD"
                      desc="難しめ・濃いめの作戦を生成。"
                    />
                    <AiCommandRow
                      delay={180}
                      command="/ai punish <id> <内容> （/ai punish 2 ファーストデスして、相手にオペ拾われました）"
                      label="PUNISH"
                      desc="1ラウンド完結の罰ゲームを1件生成。"
                    />
                    <AiCommandRow
                      delay={240}
                      command="/ai punish_hard <id> <内容>"
                      label="PUNISH HARD"
                      desc="難しめ・濃いめの罰ゲームを生成。"
                    />
                    <p
                      data-reveal
                      style={revealDelay(280)}
                      className="text-[11px] text-emerald-800/80"
                    >
                      IDは以下のモデルを切り替えて使用できます。
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p
                      data-reveal
                      style={revealDelay(60)}
                      className="text-[11px] font-semibold tracking-[0.18em] text-emerald-800/80"
                    >
                      MODELS
                    </p>
                    <div className="space-y-2 text-[11px]">
                      <AiModelCard
                        delay={110}
                        title="【1】 llama（llama-3.1-8b-instant）※推論なし"
                        desc="早いがワケワカラン作戦が出る可能性あり"
                      />
                      <AiModelCard
                        delay={160}
                        title="【2】 gpt-oss（gpt-oss-120b）※推論なし"
                        desc="速度も早くちょっとだけ優秀"
                      />
                      <AiModelCard
                        delay={210}
                        title="【3】 gpt（gpt-5-mini）※若干推論してくれる"
                        desc="遅いが必ず動作し比較的正確"
                      />
                    </div>

                    <p
                      data-reveal
                      style={revealDelay(260)}
                      className="text-[11px] text-emerald-800/75"
                    >
                      味変でいろいろ試してみるのもあり！<br />
                      ※複数のサーバーで連続使用される場合に一時的に利用できなくなる可能性があります。モデルを変更するか、1分後にリセットされるので少し待ってからもう一度実行してください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div
              data-reveal
              style={revealDelay(0)}
              className="rounded-3xl border border-slate-200/70 bg-white/70 px-6 py-10 shadow-sm backdrop-blur md:px-10 md:py-12"
            >
              <SectionHeader
                kicker="PROBLEM → SOLUTION"
                title="このBotが消してくれる “グダりポイント”"
                description="カスタム開始前の面倒な時間をすべてショートカット。"
              />

              <div className="mt-10 grid gap-4 text-sm md:grid-cols-3">
                <ProblemCard
                  delay={0}
                  title="構成会議が長い"
                  text="ランダム構成で即決。"
                  tag="AGENT RANDOM"
                />
                <ProblemCard
                  delay={120}
                  title="マップ選びで譲り合い"
                  text="ランダムマップで即決。"
                  tag="MAP RANDOM"
                />
                <ProblemCard
                  delay={240}
                  title="罰ゲーム決めが毎回グダる"
                  text="Botが毎回ランダム選出。"
                  tag="PUNISH"
                />
              </div>
            </div>
          </section>

          <section className="mt-16">
            <div
              data-reveal
              style={revealDelay(0)}
              className="rounded-3xl border border-slate-200/70 bg-white/70 px-6 py-10 shadow-sm backdrop-blur md:px-10 md:py-12"
            >
              <SectionHeader title="導入方法" />

              {/* “ここでも招待” */}
              <div
                data-reveal
                style={revealDelay(80)}
                className="mt-8 flex flex-col items-center justify-between gap-4 rounded-3xl border border-slate-200 bg-white/80 px-6 py-7 shadow-sm md:flex-row md:px-8"
              >
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.22em] text-slate-500">
                    QUICK START
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    まずは招待 → /va help → VCで実行
                  </p>
                  <p className="mt-1 text-[12px] text-slate-600">
                    迷ったらこのボタンから招待できます。
                  </p>
                </div>

                <Link
                  href={DISCORD_INVITE}
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-sky-500 px-7 py-3 text-[11px] font-extrabold tracking-[0.22em] text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  DISCORDにBOTを追加！
                </Link>
              </div>

              <ol className="mt-10 space-y-6 text-sm">
                <TimelineItem
                  delay={0}
                  step={1}
                  title="Botをサーバーに招待"
                  body={
                    <>
                      「
                      <Link
                        href={DISCORD_INVITE}
                        target="_blank"
                        className="font-semibold text-rose-600 underline decoration-rose-300 underline-offset-4 hover:text-rose-500"
                      >
                        DISCORDにBOTを追加！
                      </Link>
                      」から Bot を招待します。
                    </>
                  }
                />

                <TimelineItem
                  delay={120}
                  step={2}
                  title="/va help が通るか確認"
                  body={
                    <>
                      <Kbd>/va help</Kbd> を実行して動作確認。
                    </>
                  }
                />

                <TimelineItem
                  delay={240}
                  step={3}
                  title="VCに入ってコマンドを試す"
                  body={
                    <>
                      <Kbd>/va random</Kbd> や <Kbd>/va punish</Kbd> を実行。
                    </>
                  }
                />
              </ol>
            </div>
          </section>

          <section className="mt-16">
            <div
              data-reveal
              style={revealDelay(0)}
              className="rounded-3xl border border-slate-200/70 bg-white/70 px-6 py-10 shadow-sm backdrop-blur md:px-10 md:py-12"
            >
              <SectionHeader title="こんなサーバーに刺さります" />
              <ul
                data-reveal
                style={revealDelay(90)}
                className="mt-6 space-y-3 pl-4 text-sm leading-7 text-slate-700"
              >
                <li>フルパや身内カスタムが多いコミュニティ</li>
                <li>構成やマップ決めで毎回時間が溶ける人</li>
                <li>罰ゲーム付きカスタムが好きなエンジョイ勢</li>
              </ul>
            </div>
          </section>

          {/* ===== FOOTER ===== */}
          <footer className="mt-16 border-t border-slate-200/70 pt-7 text-[11px] text-slate-500">
            <a
              href="https://nakano6.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-600"
            >
              プライバシーポリシー
            </a>
            <div className="mt-3 flex flex-col items-start justify-between gap-2 pb-6 sm:flex-row sm:items-center">
              <span>© VALO Random Agent</span>
              <span className="text-[10px]">
                非公式ツールです。Riot Games とは一切関係ありません。
              </span>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}

/* ========== Components ========== */

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div
      data-reveal
      style={revealDelay(120)}
      className="rounded-2xl border border-slate-200 bg-white/80 px-3 py-2 shadow-sm"
    >
      <dt className="text-[10px] font-semibold tracking-[0.18em] text-slate-500">
        {label}
      </dt>
      <dd className="mt-1 text-[11px] text-slate-800">{value}</dd>
    </div>
  );
}

function CommandRow({
  command,
  label,
  desc,
  delay = 0,
}: {
  command: string;
  label: string;
  desc: string;
  delay?: number;
}) {
  return (
    <div
      data-reveal
      style={revealDelay(delay)}
      className="rounded-2xl border border-slate-200 bg-white/80 px-3 py-2 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[11px] text-slate-900">{command}</span>
        <span className="rounded-full bg-gradient-to-r from-rose-100 via-fuchsia-100 to-sky-100 px-2 py-0.5 text-[10px] font-semibold tracking-[0.16em] text-slate-700">
          {label}
        </span>
      </div>
      <p className="mt-1 text-[11px] text-slate-600">{desc}</p>
    </div>
  );
}

function AiCommandRow({
  command,
  label,
  desc,
  delay = 0,
}: {
  command: string;
  label: string;
  desc: string;
  delay?: number;
}) {
  return (
    <div
      data-reveal
      style={revealDelay(delay)}
      className="rounded-2xl border border-emerald-200 bg-white/80 px-3 py-2 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-mono text-[11px] text-slate-900">{command}</span>
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold tracking-[0.16em] text-emerald-900/80">
          {label}
        </span>
      </div>
      <p className="mt-1 text-[11px] text-slate-600">{desc}</p>
    </div>
  );
}

function AiModelCard({
  title,
  desc,
  delay = 0,
}: {
  title: string;
  desc: string;
  delay?: number;
}) {
  return (
    <div
      data-reveal
      style={revealDelay(delay)}
      className="rounded-2xl border border-emerald-200 bg-white/80 px-3 py-2 text-slate-700 shadow-sm"
    >
      <p className="font-mono text-[11px] font-semibold text-slate-900">
        {title}
      </p>
      <p className="mt-1 text-[11px] text-slate-600">{desc}</p>
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
        <p className="text-[10px] font-semibold tracking-[0.22em] text-slate-500">
          {kicker}
        </p>
      )}
      <h2 className="mt-2 text-lg font-semibold tracking-[0.06em] text-slate-900 md:text-xl">
        {title}
      </h2>
      <div className="mt-3 h-[3px] w-40 rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-sky-500" />
      {description && (
        <p className="mt-4 max-w-[70ch] text-sm leading-7 text-slate-700">
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
  delay = 0,
}: {
  title: string;
  text: string;
  tag: string;
  delay?: number;
}) {
  return (
    <article
      data-reveal
      style={revealDelay(delay)}
      className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
    >
      <span className="inline-flex items-center rounded-full bg-gradient-to-r from-rose-100 via-fuchsia-100 to-sky-100 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-slate-700">
        {tag}
      </span>
      <h3 className="mt-3 text-sm font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-slate-600">{text}</p>
    </article>
  );
}

function TimelineItem({
  step,
  title,
  body,
  delay = 0,
}: {
  step: number;
  title: string;
  body: ReactNode;
  delay?: number;
}) {
  return (
    <li data-reveal style={revealDelay(delay)} className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-sky-500 text-[11px] font-bold text-white shadow-md">
          {step}
        </div>
        {step !== 3 && (
          <div className="mt-2 h-10 w-px bg-gradient-to-b from-slate-300 to-transparent" />
        )}
      </div>
      <div>
        <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-slate-700">{body}</p>
      </div>
    </li>
  );
}

function Kbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="rounded-lg border border-slate-200 bg-white px-2 py-1 font-mono text-[11px] text-slate-700 shadow-sm">
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
  delay = 0,
}: {
  image: string;
  command: string;
  title: string;
  text: ReactNode;
  tag: string;
  delay?: number;
}) {
  return (
    <article
      data-reveal
      style={revealDelay(delay)}
      className="group grid gap-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-white md:grid-cols-2 md:p-7"
    >
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
        <Image
          src={image}
          alt={title}
          width={800}
          height={450}
          className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-col justify-center space-y-2">
        <span className="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-rose-100 via-fuchsia-100 to-sky-100 px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-slate-700">
          {tag}
        </span>

        <div className="font-mono text-[11px] text-slate-500">{command}</div>

        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

        <p className="text-sm leading-7 text-slate-700">{text}</p>
      </div>
    </article>
  );
}

function AiFeatureImageCard({
  image,
  command,
  title,
  text,
  tag,
  delay = 0,
}: {
  image: string;
  command: string;
  title: string;
  text: ReactNode;
  tag: string;
  delay?: number;
}) {
  return (
    <article
      data-reveal
      style={revealDelay(delay)}
      className="group grid gap-6 rounded-3xl border border-emerald-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-0.5 hover:bg-white md:grid-cols-2 md:p-7"
    >
      <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50">
        <Image
          src={image}
          alt={title}
          width={800}
          height={450}
          className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-col justify-center space-y-2">
        <span className="inline-flex w-fit items-center rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-semibold tracking-[0.14em] text-emerald-900/80">
          {tag}
        </span>

        <div className="font-mono text-[11px] text-emerald-900/70">{command}</div>

        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>

        <p className="text-sm leading-7 text-slate-700">{text}</p>
      </div>
    </article>
  );
}
