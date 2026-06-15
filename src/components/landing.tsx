import { useMemo } from "react"
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
import { LangToggle } from "@/components/ui/lang-toggle"
import { WhatsAppButton } from "@/components/ui/whatsapp-button"
import { FeaturesGrid, BeforeAfter, Results } from "@/components/ui/features"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { CrmDashboard } from "@/components/ui/crm-dashboard"
import { Reveal, SectionHeading, stagger, rise, viewport } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"
import { waUrl } from "@/lib/whatsapp"
import { useT } from "@/lib/i18n"
import logoFooter from "@/assets/amply-logo.png"

// ícones fixos por índice — os textos vêm do dicionário
const stepIcons = [MessagesSquare, LayoutGrid, CalendarCheck, ClipboardList]

export default function Landing() {
  const { t, lang } = useT()

  // memoizado por idioma: evita o scrollspy da navbar re-assinar a cada render
  const navItems = useMemo(
    () => [
      { name: t("nav.home"), url: "#inicio", icon: Home },
      { name: t("nav.product"), url: "#produto", icon: LayoutGrid },
      { name: t("nav.about"), url: "#quem-somos", icon: Users },
      { name: t("nav.contact"), url: "#contato", icon: Phone },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang],
  )

  const steps = t("product.steps") as { title: string; desc: string }[]

  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground antialiased">
      <AmplyLogo />
      <LangToggle />
      <NavBar items={navItems} />
      <WhatsAppButton />

      {/* HERO */}
      <section id="inicio" className="scroll-mt-24">
        <Hero />
      </section>

      {/* O PRODUTO */}
      <section id="produto" className="container mx-auto px-4 pb-16 scroll-mt-24">
        <SectionHeading
          kicker={t("product.kicker")}
          title={t("product.title")}
          desc={t("product.subtitle")}
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((p, i) => {
            const Icon = stepIcons[i]
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
          kicker={t("demo.kicker")}
          title={t("demo.title")}
          desc={t("demo.subtitle")}
        />
        <AmplyChat />
      </section>

      {/* RECURSOS */}
      <section id="recursos" className="container mx-auto px-4 pb-8 scroll-mt-24">
        <SectionHeading
          kicker={t("features.kicker")}
          title={t("features.title")}
          desc={t("features.subtitle")}
        />
        <FeaturesGrid />
      </section>

      {/* CRM com scroll 3D */}
      <section id="crm" className="overflow-hidden">
        <ContainerScroll
          titleComponent={
            <div className="mb-4">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {t("crmSection.label")}
              </p>
              <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tighter md:text-5xl">
                {t("crmSection.title")}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
                {t("crmSection.subtitle")}
              </p>
            </div>
          }
        >
          <CrmDashboard />
        </ContainerScroll>
      </section>

      {/* ANTES x COM AMPLY */}
      <section className="container mx-auto px-4 pb-16">
        <SectionHeading kicker={t("before.kicker")} title={t("before.title")} />
        <BeforeAfter />
      </section>

      {/* RESULTADO */}
      <section className="container mx-auto px-4 pb-16">
        <SectionHeading kicker={t("results.kicker")} title={t("results.title")} />
        <Results />
      </section>

      {/* QUEM SOMOS */}
      <section id="quem-somos" className="border-y border-border bg-muted/40 py-20 scroll-mt-24">
        <div className="container mx-auto grid max-w-5xl gap-10 px-4 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {t("about.label")}
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tighter md:text-5xl">
              {t("about.title")}
            </h2>
          </Reveal>
          <Reveal delay={0.12} className="space-y-4 text-muted-foreground">
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p className="font-medium text-foreground">{t("about.p3")}</p>
          </Reveal>
        </div>
      </section>

      {/* FALE CONOSCO */}
      <section id="contato" className="container mx-auto px-4 py-20 scroll-mt-24">
        <Reveal className="mx-auto max-w-3xl rounded-[2.5rem] bg-foreground px-6 py-20 text-center text-background md:px-14">
          <p className="font-mono text-xs uppercase tracking-[0.25em] opacity-60">
            {t("contact.label")}
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tighter md:text-6xl">
            {t("contact.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl opacity-70 md:text-lg">{t("contact.subtitle")}</p>
          <Button size="lg" className="mt-9 gap-3" asChild>
            <a href={waUrl(t("contact.waText"))} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              {t("contact.button")}
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
            aria-label={t("footer.nav")}
            className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground"
          >
            {navItems.map((i) => (
              <a key={i.name} href={i.url} className="transition-colors hover:text-foreground">
                {i.name}
              </a>
            ))}
          </nav>
          <div className="space-y-1.5 text-sm text-muted-foreground">
            <p>{t("footer.tagline")}</p>
            <p className="text-xs opacity-70">{t("footer.legal")}</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
