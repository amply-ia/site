import { useEffect, useRef, useState } from "react"
import {
  Eye,
  EyeOff,
  LayoutGrid,
  Car,
  ShoppingCart,
  Users,
  Calendar,
  MessageSquare,
  Bookmark,
  FileText,
  Megaphone,
  Bot,
  Settings,
  Sun,
  LogOut,
} from "lucide-react"

// O painel é desenhado neste tamanho "desktop" e depois é ESCALADO pra caber
// no espaço disponível. Assim, no celular ele fica IDÊNTICO ao do computador,
// só que menor (tipo um zoom-out da tela real) — barra lateral e tudo.
const DESIGN_W = 1040
const DESIGN_H = 660

const menu = [
  { icon: LayoutGrid, label: "Início", active: true },
  { icon: Car, label: "Estoque" },
  { icon: ShoppingCart, label: "Vendidos" },
  { icon: Users, label: "Leads" },
  { icon: Calendar, label: "Agenda" },
  { icon: MessageSquare, label: "Conversas" },
  { icon: Bookmark, label: "Lista de Espera" },
  { icon: FileText, label: "Templates" },
  { icon: Megaphone, label: "Campanhas" },
  { icon: Bot, label: "Assistente" },
  { icon: Settings, label: "Configurações" },
]

export function CrmDashboard() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const update = () => {
      // offsetWidth/Height = tamanho de LAYOUT (não é afetado pelo transform
      // de escala/rotação do mockup que gira, ao contrário do getBoundingClientRect)
      const w = el.offsetWidth
      const h = el.offsetHeight
      if (w && h) setScale(Math.min(w / DESIGN_W, h / DESIGN_H))
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  return (
    <div
      ref={wrapRef}
      className="flex h-full w-full items-center justify-center overflow-hidden bg-zinc-950"
    >
      <div
        style={{ width: DESIGN_W, height: DESIGN_H, transform: `scale(${scale})` }}
        className="shrink-0 origin-center"
      >
        <Panel />
      </div>
    </div>
  )
}

function Panel() {
  const [showValues, setShowValues] = useState(false)
  return (
    <div className="flex h-full w-full overflow-hidden bg-zinc-950 text-left text-zinc-100">
      {/* SIDEBAR — sempre visível (no mobile aparece igual, só menor) */}
      <aside className="flex w-56 shrink-0 flex-col border-r border-white/10 bg-zinc-900/60 p-4">
        <div className="mb-5 flex items-center gap-2 px-1">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-base font-bold text-zinc-900">
            A
          </div>
          <div>
            <p className="text-base font-semibold leading-none">Amply</p>
            <p className="text-xs text-zinc-500">Administrador</p>
          </div>
        </div>
        <nav className="flex flex-1 flex-col gap-1">
          {menu.map((m) => {
            const Icon = m.icon
            return (
              <span
                key={m.label}
                className={
                  "flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm " +
                  (m.active ? "bg-white/10 font-medium text-white" : "text-zinc-400")
                }
              >
                <Icon className="h-4 w-4" aria-hidden="true" /> {m.label}
              </span>
            )
          })}
        </nav>
        <div className="mt-2 flex flex-col gap-1 border-t border-white/10 pt-2">
          <span className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-zinc-400">
            <Sun className="h-4 w-4" aria-hidden="true" /> Modo Claro
          </span>
          <span className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-red-400/80">
            <LogOut className="h-4 w-4" aria-hidden="true" /> Sair
          </span>
        </div>
      </aside>

      {/* CONTEÚDO */}
      <div className="flex flex-1 flex-col gap-4 overflow-hidden p-5">
        {/* cards de topo */}
        <div className="grid grid-cols-5 gap-3">
          {[
            { n: "0", l: "Leads hoje" },
            { n: "0", l: "Visitas" },
            { n: "0", l: "Conversas" },
            { n: "0", l: "Aguardando" },
            { n: "2", l: "Em negociação" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <p className="text-2xl font-bold leading-none">{s.n}</p>
              <p className="mt-1.5 text-xs text-zinc-500">{s.l}</p>
            </div>
          ))}
        </div>

        {/* dois gráficos */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-zinc-500">Captação</p>
                <p className="text-base font-semibold">Leads · últimos 7 dias</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-400">2</p>
                <p className="text-[10px] text-zinc-500">leads captados</p>
              </div>
            </div>
            <AreaChart color="#3b82f6" variant="plateau" />
            <Days />
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-zinc-500">Pipeline</p>
                <p className="text-base font-semibold">Funil por Status</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">2</p>
                <p className="text-[10px] text-zinc-500">total de leads</p>
              </div>
            </div>
            <div className="mt-8 flex items-end justify-around gap-4 px-6">
              <Bar h="h-20" label="Em aberto" v="1" />
              <Bar h="h-12" label="Negociação" v="1" />
            </div>
          </div>
        </div>

        {/* faturamento com "Conferir valores" */}
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-zinc-500">Faturamento</p>
              <p className="text-base font-semibold">Últimos 7 dias</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <p
                  className={
                    "text-xl font-bold text-emerald-400 transition " +
                    (showValues ? "" : "select-none blur-sm")
                  }
                >
                  R$ 1.500.000
                </p>
                <p className="text-[10px] text-zinc-500">receita no período</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">1</p>
                <p className="text-[10px] text-zinc-500">venda</p>
              </div>
              <button
                onClick={() => setShowValues((v) => !v)}
                className="flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-xs text-zinc-300 transition hover:bg-white/10"
              >
                {showValues ? (
                  <EyeOff className="h-3.5 w-3.5" aria-hidden="true" />
                ) : (
                  <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                {showValues ? "Ocultar" : "Conferir valores"}
              </button>
            </div>
          </div>
          <AreaChart color="#10b981" variant="bell" tall />
          <Days />
        </div>
      </div>
    </div>
  )
}

function AreaChart({
  color,
  variant = "bell",
  tall,
}: {
  color: string
  variant?: "plateau" | "bell"
  tall?: boolean
}) {
  const line = {
    plateau: "M0,28 C40,28 60,28 90,30 C120,34 140,70 175,72 C210,74 260,74 300,74",
    bell: "M0,74 C50,74 70,28 150,26 C230,24 250,74 300,74",
  }
  const area = line[variant] + " L300,80 L0,80 Z"
  const id = "grad" + color.replace("#", "") + variant
  return (
    <svg
      viewBox="0 0 300 80"
      preserveAspectRatio="none"
      className={"mt-4 w-full " + (tall ? "h-28" : "h-20")}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#${id})`} />
      <path
        d={line[variant]}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

function Days() {
  return (
    <div className="mt-1.5 flex justify-between text-[10px] text-zinc-500">
      {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Hoje"].map((d) => (
        <span key={d}>{d}</span>
      ))}
    </div>
  )
}

function Bar({ h, label, v }: { h: string; label: string; v: string }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-1.5">
      <span className="text-xs text-zinc-400">{v}</span>
      <div className={"w-full max-w-[80px] rounded-t bg-blue-500/70 " + h} />
      <span className="text-[10px] text-zinc-500">{label}</span>
    </div>
  )
}
