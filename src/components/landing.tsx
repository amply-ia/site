import { motion } from "framer-motion"
import {
  Home,
  LayoutGrid,
  Users,
  Phone,
  MessageCircle,
  MessagesSquare,
  CalendarCheck,
  ClipboardList,
} from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { Hero } from "@/components/ui/animated-hero"
import { AmplyChat } from "@/components/ui/amply-chat"
import { AmplyLogo } from "@/components/ui/amply-logo"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { FeaturesGrid, BeforeAfter, Results } from "@/components/ui/features"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { CrmDashboard } from "@/components/ui/crm-dashboard"
import { Reveal, SectionHeading, stagger, rise, viewport } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"
import { WHATSAPP_URL } from "@/lib/whatsapp"
import logoFooter from "@/assets/amply-logo.png"

const navItems = [
  { name: "Início", url: "#inicio", icon: Home },
  { name: "Produto", url: "#produto", icon: LayoutGrid },
  { name: "Quem somos", url: "#quem-somos", icon: Users },
  { name: "Contato", url: "#contato", icon: Phone },
]

const passos = [
  {
    icon: MessagesSquare,
    title: "Atende",
    desc: "O lead chama no WhatsApp e o bot responde na hora, com o tom da sua loja.",
  },
  {
    icon: LayoutGrid,
    title: "Qualifica",
    desc: "Entende o que a pessoa procura e mostra os carros do estoque, com foto e vídeo.",
  },
  {
    icon: CalendarCheck,
    title: "Agenda",
    desc: "Marca a visita na agenda da equipe e confirma o horário com o cliente.",
  },
  {
    icon: ClipboardList,
    title: "Organiza",
    desc: "Tudo cai no CRM: histórico, status e lembretes. Nada se perde.",
  },
]

export default function Landing() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground antialiased">
      <AmplyLogo />
      <NavBar items={navItems} />
      <WhatsAppButton />

      {/* HERO */}
      <section id="inicio" className="scroll-mt-24">
        <Hero />
      </section>

      {/* O PRODUTO */}
      <section id="produto" className="container mx-auto px-4 pb-16 scroll-mt-24">
        <SectionHeading
          kicker="O produto"
          title="Um sistema só pra vender mais carro"
          desc='O bot na linha de frente, o CRM por trás. Do primeiro "oi" até a visita marcada, tudo automático e organizado.'
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {passos.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
                variants={rise}
                className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-foreground/40"
              >
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
                <Icon className="mt-3 h-6 w-6" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* DEMO DO BOT */}
      <section id="demo" className="container mx-auto px-4 pb-16 scroll-mt-24">
        <SectionHeading
          kicker="Demo"
          title="Veja o bot em ação"
          desc='Do primeiro "oi" até a visita marcada — com a vitrine de carros e tudo salvo no CRM.'
        />
        <AmplyChat />
      </section>

      {/* RECURSOS */}
      <section id="recursos" className="container mx-auto px-4 pb-8 scroll-mt-24">
        <SectionHeading
          kicker="Recursos"
          title="Tudo que o Amply faz pela sua loja"
          desc="Atendimento, estoque, agenda, campanhas e relacionamento — num sistema só."
        />
        <FeaturesGrid />
      </section>

      {/* CRM com scroll 3D */}
      <section id="crm" className="overflow-hidden">
        <ContainerScroll
          titleComponent={
            <div className="mb-4">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                O CRM por trás do bot
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tighter md:text-5xl">
                Seu negócio inteiro num painel
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
                Leads, estoque, agenda, conversas e faturamento — tudo organizado e em tempo real.
              </p>
            </div>
          }
        >
          <CrmDashboard />
        </ContainerScroll>
      </section>

      {/* ANTES x COM AMPLY */}
      <section className="container mx-auto px-4 pb-16">
        <SectionHeading kicker="Comparativo" title="O que muda no seu dia a dia" />
        <BeforeAfter />
      </section>

      {/* RESULTADO */}
      <section className="container mx-auto px-4 pb-16">
        <SectionHeading kicker="Resultados" title="Resultado pra sua loja" />
        <Results />
      </section>

      {/* QUEM SOMOS */}
      <section id="quem-somos" className="border-y border-border bg-muted/40 py-20 scroll-mt-24">
        <div className="container mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Quem somos
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tighter md:text-5xl">
              Tecnologia feita pra vender carro, não pra complicar.
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="space-y-4 text-muted-foreground">
            <p>
              A Amply nasceu da prática de quem vive o dia a dia de vendas. A gente viu o lead
              esfriar por demora na resposta e resolveu mudar isso.
            </p>
            <p>
              Construímos uma ferramenta que atende na hora, organiza cada conversa e deixa a
              operação profissional — sem a loja precisar de uma equipe gigante pra dar conta do
              WhatsApp.
            </p>
            <p className="font-medium text-foreground">
              Atendimento instantâneo, no número oficial da sua loja, com tudo registrado pra sua
              equipe fechar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FALE CONOSCO */}
      <section id="contato" className="container mx-auto px-4 py-20 scroll-mt-24">
        <Reveal className="mx-auto max-w-3xl rounded-[2.5rem] bg-foreground px-6 py-20 text-center text-background md:px-14">
          <p className="font-mono text-xs uppercase tracking-[0.25em] opacity-60">Fale conosco</p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tighter md:text-6xl">
            Bora colocar seu showroom pra atender 24h?
          </h2>
          <p className="mx-auto mt-4 max-w-xl opacity-70 md:text-lg">
            Fala com a gente no WhatsApp. A gente te mostra a Amply funcionando e monta tudo pra
            sua loja.
          </p>
          <Button size="lg" className="mt-9 gap-3" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Fale conosco no WhatsApp
            </a>
          </Button>
        </Reveal>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t border-border">
        <div className="container mx-auto flex flex-col items-center gap-6 px-4 py-14 pb-32 text-center sm:pb-14">
          <div className="flex items-center gap-3">
            <img
              src={logoFooter}
              alt=""
              width={32}
              height={32}
              className="h-8 w-8 invert dark:invert-0"
            />
            <p className="font-display text-2xl font-semibold">Amply</p>
          </div>
          <nav
            aria-label="Links do rodapé"
            className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground"
          >
            {navItems.map((i) => (
              <a key={i.name} href={i.url} className="transition-colors hover:text-foreground">
                {i.name}
              </a>
            ))}
          </nav>
          <div className="space-y-1.5 text-sm text-muted-foreground">
            <p>CRM e bot com IA para concessionárias · amply.ia.br</p>
            <p className="text-xs opacity-70">
              © 2026 · WhatsApp é marca da Meta Platforms, sem vínculo com a Amply.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
