import { useT } from "@/lib/i18n"

export function LangToggle() {
  const { lang, setLang, t } = useT()
  return (
    <button
      onClick={() => setLang(lang === "pt" ? "en" : "pt")}
      aria-label={t("lang.toggle")}
      className="fixed right-5 top-5 z-[60] flex h-11 items-center justify-center rounded-full border border-border bg-background/70 px-4 font-mono text-xs font-semibold uppercase tracking-widest backdrop-blur transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {lang === "pt" ? "EN" : "PT"}
    </button>
  )
}
