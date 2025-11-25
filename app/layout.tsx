// app/layout.tsx
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { GA4 } from "./ga4";

const GA_ID = "G-HHRY2VC4XR";

export const metadata: Metadata = {
  title: "VALO Random Agent | VALORANT用DiscordパーティBot",
  description:
    "VALORANTのカスタムやフルパを盛り上げるDiscord Bot。エージェント構成、マップランダム、BANルーレット、罰ゲーム、役職シャッフル、チーム分けまでこれ1つで完結。",
  metadataBase: new URL("https://random-agent.nakano6.com"),
  openGraph: {
    title: "VALO Random Agent | VALORANT用DiscordパーティBot",
    description:
      "VALORANTのカスタム・フルパを一瞬で盛り上げるDiscord Bot。構成決め・マップ決め・罰ゲーム・役職・チーム分けまで全部おまかせ。",
    url: "https://random-agent.nakano6.com",
    siteName: "VALO Random Agent",
    type: "website",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "VALO Random Agent",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VALO Random Agent | VALORANT用DiscordパーティBot",
    description:
      "VALORANTのカスタムや身内フルパに。構成・マップ・BAN・罰ゲーム・役職・チーム分けを自動で決めるDiscord Bot。",
    images: ["/ogp.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="bg-slate-950 text-slate-50">
      <body className="min-h-screen antialiased">
        {/* GA4 スニペット（初期化） */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = window.gtag || gtag;
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>

        {/* ルート変化トラッキング用（クライアントコンポーネント） */}
        <GA4 />

        {/* 背景レイヤー */}
        <div className="fixed inset-0 -z-10 bg-[#050816]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0,#1f2937_0,#050816_55%),radial-gradient(circle_at_90%_100%,#0f172a_0,#050816_60%)] opacity-90" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.8)_0,rgba(15,23,42,0.8)_1px,transparent_1px,transparent_3px)] opacity-50" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0_100%,rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_100%_0,rgba(248,113,113,0.28),transparent_55%)] opacity-60 mix-blend-screen" />
        </div>

        {children}
      </body>
    </html>
  );
}
