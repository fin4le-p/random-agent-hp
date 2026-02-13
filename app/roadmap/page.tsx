import type { Metadata } from "next";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Roadmap | VALO Random Agent",
  description:
    "Riot API承認に伴う VALO Random Agent の機能追加予定。カスタム運営、ハイライト生成、相性レコメンドなどのロードマップ。",
};

export default function RoadmapPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      {/* LPと合わせた背景 */}
      <div className="pointer-events-none absolute -top-28 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-br from-rose-200 via-fuchsia-200 to-sky-200 blur-3xl opacity-60 motion-safe:animate-[float_9s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-52 right-[-160px] h-[560px] w-[560px] rounded-full bg-gradient-to-br from-amber-100 via-rose-200 to-indigo-200 blur-3xl opacity-55 motion-safe:animate-[float2_11s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-56 left-[-180px] h-[560px] w-[560px] rounded-full bg-gradient-to-br from-emerald-100 via-sky-100 to-violet-100 blur-3xl opacity-45 motion-safe:animate-[float3_13s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="relative flex min-h-screen flex-col">
        {/* ===== HEADER ===== */}
        <SiteHeader rightLabel="ROADMAP" />

        {/* ★ここが重要：横幅を制限する “器” */}
        <div className="mx-auto w-full max-w-6xl flex-1 px-4 pb-4 pt-10 md:pt-14">
          {/* タイトル */}
          <section className="mb-12 rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm backdrop-blur">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-slate-500">
              UPDATE ROADMAP
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-[0.04em] text-slate-900">
              Riot API承認に伴う新機能について
            </h1>
            <div className="mt-4 h-[3px] w-48 rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-sky-500" />

            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-slate-700">
              Riot APIの正式承認に伴い、VALO Random Agentではゲームデータを活用した新機能の実装を予定しています。
              カスタムの運営から個人の振り返りまで、より“遊びやすく・盛り上がる”機能を順次追加していきます。
            </p>
          </section>

          <div className="space-y-8">
            {/* A */}
            <RoadmapCard
              title="A. カスタム運営機能"
              items={[
                "ACS・HS率・K/DをもとにしたAIオートバランス",
                "各指標ごとの簡易オートバランス",
                "マップ投票 / BAN 機能",
                "エージェント事前ドラフト（LoLのPick&Ban風）",
              ]}
              description="大会のような感覚でカスタムを運営できる機能を追加予定です。"
            />

            {/* B */}
            <RoadmapCard
              title="B. “今日のハイライト”自動生成"
              description="その日の対戦履歴から、個人のプレイ傾向やハイライトを自動生成します。"
              items={[
                "ACS平均 / HS率平均 / 勝率の表示",
                "プレイスタイル分類（エントリー / トレーダー / サポート / アンカー / クラッチ）",
                "得意ロールの自動推定",
                "今日の最速デス / 最長生存などの珍プレイ表示",
                "各種指標による総合スコア生成",
                "総括コメントの自動生成",
              ]}
            />

            {/* C */}
            <RoadmapCard
              title="C. 練習メニュー提案（※実装未定）"
              description="AIが課題を分析し、“次に何を練習すべきか”を具体的な行動レベルで提案します。"
              items={[
                "トレード率が低い → 2人組での詰め練習を提案",
                "守りのリテイクが弱い → 情報取り→人数有利で取り返す手順を提示",
              ]}
              note="※AIによる課題→処方箋の機能は検証中のため、実装時期は未定です。"
            />

            {/* D */}
            <RoadmapCard
              title="D. 相性レコメンド"
              description="一緒にプレイするメンバーとの相性を分析し、身内カスタムをさらに盛り上げます。"
              items={[
                "この人と組むと勝率が高い",
                "役割が被っている組み合わせの検出",
              ]}
              note="※煽りにならないUI設計を前提に実装予定です。"
            />

            {/* E */}
            <RoadmapCard
              title="E. フルパコンペ / プレミア / カスタム大会の簡易運営（※実装未定）"
              description="リンク済みメンバーを前提に、簡易トーナメント運営機能を追加予定です。"
              items={[
                "対戦表の自動生成",
                "試合結果入力",
                "MVP選出",
                "大会全体の統計まとめ",
              ]}
              note="※仕様確認が必要なため、実装時期は未定です。"
            />
          </div>

          {/* フッター */}
          <SiteFooter />
        </div>
      </div>
    </main>
  );
}

function RoadmapCard({
  title,
  description,
  items,
  note,
}: {
  title: string;
  description?: string;
  items: string[];
  note?: string;
}) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>

      {description && (
        <p className="mt-2 text-sm leading-relaxed text-slate-700">
          {description}
        </p>
      )}

      <ul className="mt-4 space-y-2 text-sm text-slate-800">
        {items.map((item, i) => (
          <li
            key={i}
            className="rounded-xl border border-slate-200 bg-white/70 px-3 py-2"
          >
            {item}
          </li>
        ))}
      </ul>

      {note && <p className="mt-4 text-xs text-slate-500">{note}</p>}
    </section>
  );
}
