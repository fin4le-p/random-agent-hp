// components/SiteFooter.tsx
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-8 border-t border-slate-200/70 pt-5 text-[11px] text-slate-500">
      {/* ===================== */}
      {/* Mobile (1 column) */}
      {/* コピーライトは必ず最後 */}
      {/* ===================== */}
      <div className="space-y-2 sm:hidden">
        <Link
          href="/privacy"
          className="block font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-600"
        >
          プライバシーポリシー
        </Link>

        <Link
          href="/terms"
          className="block font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-600"
        >
          利用規約
        </Link>

        <p className="text-[10px] leading-relaxed">
          このサービスはRiot Games APIを使用しています。プレイヤーデータは、RSO経由で明示的にオプトインされた場合にのみ表示されます。本サービスはRiot Gamesと一切関係ありません。

        </p>

        <p className="text-[10px] leading-relaxed">
          This service uses the Riot Games API.
          Player data is only displayed after explicit opt-in via Riot Sign-On.
          This product is not endorsed by Riot Games.
        </p>

        <div>© VALO Random Agent</div>
      </div>

      {/* ===================== */}
      {/* Desktop (2 columns / 4 rows aligned) */}
      {/* ===================== */}
      <div className="hidden sm:grid sm:grid-cols-[220px_1fr] sm:gap-x-10">
        {/* Row1: 左=Privacy / 右=空 */}
        <div>
          <Link
            href="/privacy"
            className="inline font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-600"
          >
            プライバシーポリシー
          </Link>
        </div>
        <div />

        {/* Row2: 左=Terms / 右=空 */}
        <div>
          <Link
            href="/terms"
            className="inline font-semibold text-sky-700 underline decoration-sky-300 underline-offset-4 hover:text-sky-600"
          >
            利用規約
          </Link>
        </div>
        <div />

        {/* Row3: 左=空 / 右=日本語 */}
        <div />
        <p className="text-[10px] leading-relaxed">
          このサービスはRiot Games APIを使用しています。プレイヤーデータは、RSO経由で明示的にオプトインされた場合にのみ表示されます。本サービスはRiot Gamesと一切関係ありません。

        </p>

        {/* Row4: 左=コピーライト / 右=英語 */}
        <div>© VALO Random Agent</div>
        <p className="text-[10px] leading-relaxed">
          This service uses the Riot Games API.
          Player data is only displayed after explicit opt-in via Riot Sign-On.
          This product is not endorsed by Riot Games.
        </p>
      </div>
    </footer>
  );
}
