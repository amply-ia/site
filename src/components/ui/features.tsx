import { motion } from "framer-motion"
import { stagger as container, rise as item, viewport } from "@/components/ui/reveal"
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

const features = [
  {
    icon: MessageCircle,
    title: "Atendimento 24/7",
    desc: "Responde na hora, de madrugada e fim de semana, de forma natural — e passa pro humano quando precisa.",
  },
  {
    icon: Car,
    title: "Mostra o estoque",
    desc: "Filtra por marca, ano e preço, manda foto e vídeo do carro e sugere parecidos.",
  },
  {
    icon: CalendarCheck,
    title: "Agenda sozinho",
    desc: "Respeita seu horário, evita choque de agenda e confirma com o cliente.",
  },
  {
    icon: UserPlus,
    title: "Captura todo contato",
    desc: "Cada conversa vira lead cadastrado, com histórico salvo pra sempre.",
  },
  {
    icon: Clock,
    title: "Lista de espera",
    desc: "Anota o carro que faltou e avisa o cliente assim que um parecido entra.",
  },
  {
    icon: Cake,
    title: "Aniversário automático",
    desc: "Parabeniza a base sozinho, com o nome e a identidade da sua loja.",
  },
  {
    icon: Megaphone,
    title: "Campanhas em massa",
    desc: "Dispara ofertas segmentadas com templates aprovados pela Meta.",
  },
  {
    icon: RefreshCw,
    title: "Reativa leads parados",
    desc: "Identifica quem sumiu e reabre a conversa, sem trabalho manual.",
  },
  {
    icon: BarChart3,
    title: "Painel em tempo real",
    desc: "Leads, visitas e conversões do dia, da semana e do mês num lugar só.",
  },
  {
    icon: Boxes,
    title: "Estoque fácil",
    desc: "Cadastra com foto e vídeo, marca vendido/reservado e edita em segundos.",
  },
  {
    icon: Users,
    title: "Equipe toda junta",
    desc: "Login por vendedor, histórico de quem atendeu, nada se perde.",
  },
  {
    icon: Shield,
    title: "Seguro e oficial",
    desc: "Criptografia, LGPD, isolamento por loja e WhatsApp oficial da Meta.",
  },
]

export function FeaturesGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3"
    >
      {features.map((f) => {
        const Icon = f.icon
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

const rows: [string, string][] = [
  ["Cliente manda WhatsApp 23h, só responde de manhã", "Resposta na hora, mesmo de madrugada"],
  ['Vendedor passa o dia respondendo "tem esse carro?"', "Bot responde, vendedor foca em fechar"],
  ["Cliente que queria o carro X foi embora", "Lista de espera avisa quando o carro chega"],
  ["Aniversário do cliente esquecido", "Mensagem automática parabenizando"],
  ["Sem como mandar promoção pra base", "Campanha em massa em 2 cliques"],
  ["Vendedor sai e leva os contatos", "Tudo fica no sistema, da empresa"],
]

export function BeforeAfter() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="mx-auto max-w-4xl space-y-3"
    >
      <div className="grid grid-cols-2 gap-3 px-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <span>Antes</span>
        <span>Com Amply</span>
      </div>
      {rows.map(([antes, depois]) => (
        <motion.div key={depois} variants={item} className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="flex items-start gap-2 rounded-xl border border-border bg-muted/40 p-4 text-sm text-muted-foreground">
            <X className="mt-0.5 h-4 w-4 shrink-0 opacity-60" aria-hidden="true" /> {antes}
          </div>
          <div className="flex items-start gap-2 rounded-xl border border-foreground bg-foreground p-4 text-sm font-medium text-background">
            <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {depois}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

const results = [
  "Mais atendimentos sem contratar vendedor",
  "Menos cliente perdido por demora",
  "Mais visitas agendadas no fim de semana",
  "Mais vendas recuperadas com a lista de espera",
  "Relacionamento contínuo com a base",
  "Equipe focada em vender, não em digitar",
]

export function Results() {
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
