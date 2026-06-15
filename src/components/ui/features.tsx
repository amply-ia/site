import { motion } from "framer-motion"
import { stagger as container, rise as item, viewport } from "@/components/ui/reveal"
import { useT } from "@/lib/i18n"
import {
  MessageCircle,
  Car,
  CalendarCheck,
  UserPlus,
  Clock,
  Cake,
  Megaphone,
  RefreshCw,
  BarChart3,
  Boxes,
  Users,
  Shield,
  Check,
  X,
} from "lucide-react"

// ícones fixos por índice — os textos vêm do dicionário (t("features.items"))
const featureIcons = [
  MessageCircle,
  Car,
  CalendarCheck,
  UserPlus,
  Clock,
  Cake,
  Megaphone,
  RefreshCw,
  BarChart3,
  Boxes,
  Users,
  Shield,
]

export function FeaturesGrid() {
  const { t } = useT()
  const items = t("features.items") as { title: string; desc: string }[]
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((f, i) => {
        const Icon = featureIcons[i]
        return (
          <motion.div
            key={f.title}
            variants={item}
            className="group rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-foreground/40"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-background transition group-hover:scale-105">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export function BeforeAfter() {
  const { t } = useT()
  const rows = t("before.rows") as { before: string; after: string }[]
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="mx-auto max-w-4xl space-y-3"
    >
      <div className="grid grid-cols-2 gap-3 px-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <span>{t("before.colBefore")}</span>
        <span>{t("before.colAfter")}</span>
      </div>
      {rows.map((row) => (
        <motion.div
          key={row.after}
          variants={item}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          <div className="flex items-start gap-2 rounded-xl border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
            <X className="mt-0.5 h-4 w-4 shrink-0 opacity-60" aria-hidden="true" /> {row.before}
          </div>
          <div className="flex items-start gap-2 rounded-xl border border-foreground bg-foreground p-4 text-sm font-medium text-background">
            <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {row.after}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export function Results() {
  const { t } = useT()
  const results = t("results.items") as string[]
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3"
    >
      {results.map((r) => (
        <motion.div
          key={r}
          variants={item}
          className="flex items-center gap-3 rounded-xl border border-border p-4"
        >
          <Check className="h-5 w-5 shrink-0" aria-hidden="true" />
          <span className="text-sm font-medium">{r}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}
