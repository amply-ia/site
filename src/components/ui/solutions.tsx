import { motion } from "framer-motion"
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  FlaskConical,
  Gauge,
  Globe,
  KeyRound,
  MapPin,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  Palette,
  Repeat,
  Search,
  SearchCheck,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react"
import { stagger, rise, viewport } from "@/components/ui/reveal"
import { useT } from "@/lib/i18n"

// ícones fixos por índice — os textos vêm do dicionário
const solutionIcons = [Bot, Globe, Megaphone, TrendingUp]
const siteIcons = [Palette, Zap, MousePointerClick, SearchCheck]
const platformIcons = [Target, Search]
const trafficIcons = [Repeat, FlaskConical, BarChart3]
const seoIcons = [Gauge, KeyRound, MapPin, TrendingUp]

/* Visão geral: 4 cards numerados, cada um leva à sua seção */
export function SolutionsGrid() {
  const { t } = useT()
  const items = t("solutions.items") as { title: string; desc: string; href: string }[]
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2"
    >
      {items.map((s, i) => {
        const Icon = solutionIcons[i]
        return (
          <motion.a
            key={s.title}
            href={s.href}
            variants={rise}
            className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-foreground/40"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              <ArrowUpRight
                className="h-4 w-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                aria-hidden="true"
              />
            </div>
            <div className="mt-5 flex h-11 w-11 items-center justify-center rounded-xl bg-foreground text-background transition group-hover:scale-105">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-xl font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
            <span className="mt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground transition group-hover:text-foreground">
              {t("solutions.more")}
            </span>
          </motion.a>
        )
      })}
    </motion.div>
  )
}

/* Mockup de navegador em esqueleto — o "site" se monta ao entrar na tela */
function BrowserMock() {
  const { t } = useT()
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="overflow-hidden rounded-2xl border border-border bg-card"
      aria-hidden="true"
    >
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-2.5 w-2.5 rounded-full bg-muted-foreground/25" />
        ))}
        <span className="ml-3 flex-1 rounded-full bg-muted px-3 py-1 font-mono text-[10px] text-muted-foreground">
          {t("sites.mock.url")}
        </span>
      </div>
      <div className="space-y-4 p-6">
        <motion.div variants={rise} className="h-2 w-16 rounded bg-muted" />
        <motion.div variants={rise} className="space-y-2">
          <div className="h-5 w-4/5 rounded bg-foreground/80" />
          <div className="h-5 w-3/5 rounded bg-foreground/80" />
        </motion.div>
        <motion.div variants={rise} className="space-y-1.5">
          <div className="h-2 w-full rounded bg-muted" />
          <div className="h-2 w-5/6 rounded bg-muted" />
        </motion.div>
        <motion.div
          variants={rise}
          className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-xs font-medium text-background"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          {t("sites.mock.cta")}
        </motion.div>
        <motion.div variants={rise} className="grid grid-cols-3 gap-3 pt-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="space-y-2 rounded-xl border border-border p-3">
              <div className="h-8 rounded bg-muted" />
              <div className="h-2 w-3/4 rounded bg-muted" />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export function SitesShowcase() {
  const { t } = useT()
  const items = t("sites.items") as { title: string; desc: string }[]
  return (
    <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
      <BrowserMock />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="space-y-6"
      >
        {items.map((f, i) => {
          const Icon = siteIcons[i]
          return (
            <motion.div key={f.title} variants={rise} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground text-background">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export function TrafficShowcase() {
  const { t } = useT()
  const platforms = t("traffic.platforms") as { name: string; tag: string; desc: string }[]
  const items = t("traffic.items") as { title: string; desc: string }[]
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="mx-auto max-w-5xl space-y-5"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {platforms.map((p, i) => {
          const Icon = platformIcons[i]
          return (
            <motion.div
              key={p.name}
              variants={rise}
              className="rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-foreground/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground text-background">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {p.tag}
              </p>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          )
        })}
      </div>
      <div className="grid gap-5 sm:grid-cols-3">
        {items.map((f, i) => {
          const Icon = trafficIcons[i]
          return (
            <motion.div
              key={f.title}
              variants={rise}
              className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-foreground/40"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              <h3 className="mt-3 font-semibold">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

/* Mockup de busca do Google — sua empresa em 1º, concorrentes em esqueleto */
function GoogleMock() {
  const { t } = useT()
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="rounded-2xl border border-border bg-card p-6"
      aria-hidden="true"
    >
      <motion.div
        variants={rise}
        className="flex items-center gap-3 rounded-full border border-border bg-background px-4 py-2.5"
      >
        <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
        <span className="truncate text-sm text-muted-foreground">{t("seo.mock.query")}</span>
      </motion.div>
      <div className="mt-5 space-y-3">
        <motion.div variants={rise} className="rounded-xl bg-foreground p-4 text-background">
          <div className="flex items-center justify-between gap-3">
            <p className="truncate font-mono text-[10px] uppercase tracking-widest opacity-70">
              {t("seo.mock.url")}
            </p>
            <span className="shrink-0 rounded-full bg-background px-2.5 py-0.5 font-mono text-[10px] font-medium text-foreground">
              {t("seo.mock.badge")}
            </span>
          </div>
          <p className="mt-1.5 text-sm font-semibold">{t("seo.mock.result")}</p>
        </motion.div>
        {[0, 1].map((i) => (
          <motion.div key={i} variants={rise} className="space-y-2 rounded-xl border border-border p-4">
            <div className="h-2 w-24 rounded bg-muted" />
            <div className="h-3 w-3/4 rounded bg-muted" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export function SeoShowcase() {
  const { t } = useT()
  const items = t("seo.items") as { title: string; desc: string }[]
  return (
    <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="space-y-6"
      >
        {items.map((f, i) => {
          const Icon = seoIcons[i]
          return (
            <motion.div key={f.title} variants={rise} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground text-background">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
      <GoogleMock />
    </div>
  )
}
