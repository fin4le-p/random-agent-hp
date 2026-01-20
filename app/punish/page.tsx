// app/punish/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "罰ゲーム一覧 | VALO Random Agent",
  description:
    "VALORANT用Discord Bot「VALO Random Agent」で使用される罰ゲーム一覧。カスタムやフルパを盛り上げるための罰ゲームルールをまとめています。",
};

const punishItems: string[] = [
  "この試合は【歩き縛り】です（Shift 歩きのみ）。",
  "この試合は【ジャンプ禁止】です。",
  "この試合は【しゃがみ多用縛り】です（撃つときは必ずしゃがむ）。",
  "この試合は【腰撃ち縛り】です（ADS 禁止）。",
  "この試合は【ADS縛り】です（ADSできない武器は使用禁止、クラシックは右クリックのみ可能）。",
  "この試合は【スキル封印】です（Ult含むスキルすべて禁止）。",
  "この試合は【銃のリロード禁止】です（残弾0になった後の自動リロードは可能）。",
  "この試合は【走り撃ち禁止】です（撃つときは止まる）。",
  "この試合は【左右ストレイフ必須】です（撃つ前に左右どちらかに1回動く）。",
  "この試合は【一度見た角（クリアリングした場所）を5秒見続ける】です。",
  "この試合は【ファーストキル禁止】です。",
  "この試合は【最後の1v1は絶対にピークする】です。",
  "この試合は【最初に見た敵には必ず撃つ】です。",
  "この試合は【毎回敵を撃つ前に「行くぞ！諸君！」と言う】です。",
  "この試合は【設置後は走らない】です（歩きで移動）。",
  "この試合は【スパイク視認後は必ず ping を刺す】です。",
  "この試合は【敵を見つけたら「発見！ボス！」と言う】です。",
  "この試合は【キルを取ったらキャラボイスの真似をする】です。",
  "この試合は【デスしたら深呼吸する】です。",
  "この試合は【撃ち負けたら言い訳禁止】です。",
  "この試合は【毎ラウンド開始時に自分の気合いを宣言する】です。（同じの禁止）",
  "この試合は【必ず味方の誰かと同じサイトに行く】です。（一人決めたら変更不可）",
  "この試合は【試合中は暴言禁止】です。",
  "この試合は【必ずスパイク設置位置をコールする】です。（攻め守りどちらも）",
  "この試合は【味方のキルログが出たら「ナイス！」と言う】です。",
  "この試合は【味方のデスログが出たら「ドンマイ！」と言う】です。",
  "この試合は【敵をを見たらエージェント名を言う】です。（例：ジェットだ！）",
  "この試合は【撃つ前に1回左右に揺れる】です。",
  "この試合は【倒されたらポジションに感謝する】です。（例：Aメイン様感謝）",
  "この試合は【銃声聞こえたら毎回一度しゃがむ】です。",
  "この試合は【ピークする時必ず宣言する】です。",
  "この試合は【必ず味方の後ろについていく】です。",
  "この試合は【最初の接敵は絶対に譲る】です。",
  "この試合は【被弾したら5秒守りに徹する】です。（待ちの姿勢）",
  "この試合は【Ultを使わない】です。",
  "この試合は【Ultが溜まったら「溜まった！」、あと一ポイントの時に「UNO!」と宣言する】です。",
  "この試合は【味方のカバー優先】です。（つめ待ちしてても必ずカバーに行く）",
  "この試合は【敵を見つけても即撃たず1秒耐える】です。",
  "この試合は【毎ラウンド違うポジションやルートで攻める】です。",
  "この試合は【同じ場所を2回続けて覗かない】です。",
  "この試合は【ラウンド開始前に目を閉じて3秒間集中して「集中！」と発言する】です。",
  "この試合は【決め撃ち縛りで行く】です。（決め打ちしなかった場所に敵がいたり出てきた場合は発砲禁止）",
  "この試合は【撃つときに必ず止まる】です。",
  "この試合は【敵を倒したらその場で1回ジャンプ】です。",
  "この試合は【勝ったラウンドは自画自賛する】です。",
  "この試合は【開幕5秒は銃を撃たない】です。",
  "この試合は【壁抜き禁止】です。",
  "この試合は【毎ラウンド必ず1回スプレーし「スプレーします！」と発言する】です。",
  "この試合は【毎ラウンド開始時に武器を見るを行い「武器見ます！」と発言する】です。",
  "この試合は【武器を買うときは必ず一言言う】です。",
  "この試合は【一つ前のラウンドで死んだポジションには行かない】です。",
  "この試合は【毎ラウンド開始時にキャラボイス風の挨拶をする】です。",
  "この試合は【毎ラウンド別のサイトを攻め・守る】です。",
  "この試合は【エイムは必ずヘッドラインより下であること】です。",
  "この試合は【エイムは必ずヘッドラインより上であること】です。",
  "この試合は【エイムは必ずヘッドラインであること】です。",
  "この試合は【裏取り禁止】です。",
  "この試合は【ヘッドショット縛り】です。",
  "この試合は【ラウンドを取ったら（勝ったら）必ず指揮を上げる発言をする】です。",
  "この試合は【敵を倒したら「やった！」と言う】です。",
  "この試合は【死んだら味方のプレイを見て褒める】です。",
  "この試合は【毎ラウンド開始時に武器を変更する】です（購入限定）。",
  "この試合は【スパイク持ちに常に寄り添う】です。",
  "この試合は【味方のコールに必ず返事する】です。",
  "この試合は【撃ち合い勝ったとき「ナイス自分」と言う】です。（一人称は自分の名前にすること）",
  "この試合は【逆に撃ち負けたら「ドンマイ自分」と言う】です。（一人称は自分の名前にすること）",
  "この試合は【アビリティをラウンド内で1度は使う】です。",
  "この試合は【アビリティをラウンド内ですべて使う】です。",
  "この試合は【買い物時間を10秒以内に終わらせ「買い物した！」と発言する】です。（時間が経ったあとは味方に購入も禁止）",
  "この試合は【敵を倒したらスプレーする】です。",
  "この試合は【味方が倒された時は1回ジャンプする】です。",
  "この試合は【スパイク設置後は1回だけ移動して停滞する】です。（設置者じゃなくても対象）",
  "この試合は【解除チャレンジは絶対に行う】です（解除触ったら絶対に離さない）。",
  "この試合は【解除音聞こえたら必ずコールする】です。",
  "この試合は【必ず最後まで諦めない】です。",
];

export default function PunishPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <header className="border-b border-white/5 bg-gradient-to-b from-black/60 to-black/20 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 text-[11px] uppercase tracking-[0.18em] text-slate-300">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-7 w-7 overflow-hidden rounded-md border border-rose-500/70 bg-[conic-gradient(from_200deg,#ff4655,#f97373,#38bdf8,#ff4655)]">
              <div className="absolute inset-[2px] rounded-[4px] bg-[radial-gradient(circle_at_30%_0,#020617_0,#020617_70%)]" />
            </div>
            <span className="font-semibold">VALO RANDOM AGENT</span>
          </Link>
          <span className="hidden rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] text-slate-300 md:inline-flex">
            PUNISH LIST
          </span>
        </div>
      </header>

      {/* コンテンツ */}
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 pb-10 pt-6 md:pt-10">
        {/* ヒーロー / 説明 */}
        <section className="mb-8 rounded-3xl border border-white/10 bg-black/50 px-5 py-6 shadow-[0_18px_70px_rgba(0,0,0,0.85)] md:px-8 md:py-8">
          <p className="text-[10px] font-semibold tracking-[0.2em] text-rose-300/85">
            PUNISH LIST
          </p>
          <h1 className="mt-1 text-2xl font-semibold tracking-[0.12em] text-slate-50 md:text-[1.6rem]">
            罰ゲーム一覧
          </h1>
          <div className="mt-2 h-[2px] w-40 rounded-full bg-gradient-to-r from-rose-500 via-rose-400 to-sky-400" />
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200">
            VALO Random Agent の{" "}
            <span className="font-mono text-[11px]">/va punish</span>{" "}
            コマンドで使われる罰ゲーム一覧です。
            Bot はこの中からランダムに1つ選び、試合全体のルールとして提示します。
          </p>
          <p className="mt-2 text-xs text-slate-400">
            ※ Bot のアップデートに応じて、ここに掲載されている内容は今後追加・変更される可能性があります。
          </p>
        </section>

        {/* リスト本体 */}
        <section className="mb-6 rounded-3xl border border-white/8 bg-black/40 px-5 py-5 md:px-6 md:py-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 className="text-sm font-semibold tracking-[0.12em] text-slate-50">
              罰ゲーム（{punishItems.length} 件）
            </h2>
            <span className="inline-flex items-center rounded-full border border-sky-400/60 bg-sky-400/10 px-2.5 py-0.5 text-[10px] tracking-[0.16em] text-sky-200">
              RANDOM PICKED BY BOT
            </span>
          </div>

          <ol className="space-y-2 text-sm text-slate-100">
            {punishItems.map((text, index) => (
              <li
                key={`${index}-${text.slice(0, 10)}`}
                className="flex gap-3 rounded-2xl border border-white/10 bg-black/60 px-3 py-2"
              >
                <span className="mt-0.5 min-w-[2rem] text-right text-[11px] font-mono text-slate-400">
                  #{String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-[13px] leading-relaxed text-slate-100">
                  {text}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-4 rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-[11px] text-slate-300">
          <p>
            カスタムの雰囲気やメンバー構成によっては、一部の罰ゲームが合わない場合があります。
            そのときは「ゆるめのやつだけでお願い」など、Botの出目に対して入れ替えなどをしてOKです。
          </p>
        </section>

        {/* フッター */}
        <footer className="mt-8 border-t border-white/5 pt-4 text-[11px] text-slate-500">
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
