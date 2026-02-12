// app/punish/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
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
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      {/* 背景：LPと合わせたblob */}
      <div className="pointer-events-none absolute -top-28 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-br from-rose-200 via-fuchsia-200 to-sky-200 blur-3xl opacity-60 motion-safe:animate-[float_9s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-52 right-[-160px] h-[560px] w-[560px] rounded-full bg-gradient-to-br from-amber-100 via-rose-200 to-indigo-200 blur-3xl opacity-55 motion-safe:animate-[float2_11s_ease-in-out_infinite]" />
      <div className="pointer-events-none absolute -bottom-56 left-[-180px] h-[560px] w-[560px] rounded-full bg-gradient-to-br from-emerald-100 via-sky-100 to-violet-100 blur-3xl opacity-45 motion-safe:animate-[float3_13s_ease-in-out_infinite]" />

      {/* 背景：薄いグリッド */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.22] [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="relative flex min-h-screen flex-col">
        {/* ===== HEADER (LPと合わせた白いsticky) ===== */}
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
                <p className="text-[11px] text-slate-500">PUNISH LIST</p>
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
          {/* ===== HERO ===== */}
          <section className="rounded-3xl border border-slate-200/70 bg-white/70 px-6 py-10 shadow-sm backdrop-blur md:px-10 md:py-12">
            <p className="text-[10px] font-semibold tracking-[0.22em] text-slate-500">
              PUNISH LIST
            </p>
            <h1 className="mt-2 text-balance text-2xl font-extrabold tracking-[0.06em] text-slate-900 md:text-3xl">
              罰ゲーム一覧
            </h1>
            <div className="mt-3 h-[3px] w-40 rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-sky-500" />

            <p className="mt-5 max-w-[70ch] text-sm leading-7 text-slate-700">
              VALO Random Agent の{" "}
              <span className="rounded-md border border-slate-200 bg-white px-2 py-1 font-mono text-[11px] text-slate-700 shadow-sm">
                /va punish
              </span>{" "}
              コマンドで使われる罰ゲーム一覧です。Bot はこの中からランダムに1つ選び、試合全体のルールとして提示します。
            </p>

            <p className="mt-3 text-[12px] text-slate-500">
              ※ Bot のアップデートに応じて、ここに掲載されている内容は今後追加・変更される可能性があります。
            </p>

            {/* ミニ情報（メディアっぽい情報帯） */}
            <div className="mt-8 grid gap-3 text-[11px] sm:grid-cols-3">
              <InfoPill label="件数" value={`${punishItems.length} 件`} />
              <InfoPill label="用途" value="カスタム / フルパ向け" />
              <InfoPill label="選び方" value="BOTがランダム選出" />
            </div>
          </section>

          {/* ===== LIST HEADER ===== */}
          <section className="mt-10 md:mt-14">
            <div className="flex flex-col gap-4 rounded-3xl border border-slate-200/70 bg-white/70 px-6 py-7 shadow-sm backdrop-blur md:flex-row md:items-center md:justify-between md:px-10">
              <div>
                <h2 className="text-sm font-semibold tracking-[0.06em] text-slate-900">
                  罰ゲーム（{punishItems.length} 件）
                </h2>
                <p className="mt-1 text-[12px] text-slate-600">
                  そのままでも、雰囲気に合わせて入れ替えでもOK。
                </p>
              </div>

              <span className="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-rose-100 via-fuchsia-100 to-sky-100 px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-slate-700">
                RANDOM PICKED BY BOT
              </span>
            </div>

            {/* ===== LIST BODY ===== */}
            <ol className="mt-6 space-y-2">
              {punishItems.map((text, index) => (
                <li
                  key={`${index}-${text.slice(0, 10)}`}
                  className="group rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 min-w-[2.6rem] text-right font-mono text-[11px] text-slate-400">
                      #{String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-[13px] leading-7 text-slate-800">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* ===== NOTE ===== */}
          <section className="mt-10 rounded-3xl border border-slate-200/70 bg-white/70 px-6 py-7 shadow-sm backdrop-blur md:px-10">
            <p className="text-[12px] leading-7 text-slate-700">
              カスタムの雰囲気やメンバー構成によっては、一部の罰ゲームが合わない場合があります。
              そのときは「ゆるめのやつだけでお願い」など、Botの出目に対して入れ替えなどをしてOKです。
            </p>
          </section>

          {/* ===== FOOTER ===== */}
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

function InfoPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 px-3 py-2 shadow-sm">
      <dt className="text-[10px] font-semibold tracking-[0.18em] text-slate-500">
        {label}
      </dt>
      <dd className="mt-1 text-[11px] text-slate-800">{value}</dd>
    </div>
  );
}
