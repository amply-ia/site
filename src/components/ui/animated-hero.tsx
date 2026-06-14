import { lazy, Suspense, useEffect, useMemo, useState } from "react"
import { motion, type Variants } from "framer-motion"
import { MoveRight, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EASE } from "@/components/ui/reveal"
import { WHATSAPP_URL } from "@/lib/whatsapp"

// three.js é pesado: carrega o shader separado pra não atrasar o primeiro paint
const SpeedLinesShader = lazy(() =>
  import("@/components/ui/speed-lines-shader").then((m) => ({ default: m.SpeedLinesShader })),
)

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])
  return reduced
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0)
  const reducedMotion = usePrefersReducedMotion()
  const titles = useMemo(
    () => ["incansável", "instantâneo", "atencioso", "inteligente", "24 horas"],
    [],
  )

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTitleNumber(titleNumber === titles.length - 1 ? 0 : titleNumber + 1)
    }, 2200)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <div className="relative w-full overflow-hidden">
      {/* fundo: shader de "speed lines" (desligado em reduced-motion) */}
      {!reducedMotion && (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Suspense fallback={null}>
            <SpeedLinesShader className="opacity-60" />
          </Suspense>
          {/* camada de leitura: escurece e funde o fundo nas bordas pro texto respirar */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.6)_60%,hsl(var(--background))_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
        </div>
      )}

      <div className="container relative mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center justify-center gap-8 py-20 lg:py-28"
        >
          <motion.div variants={item}>
            <a
              href="#produto"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
            >
              Bot + CRM para concessionárias <MoveRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div variants={item} className="flex flex-col gap-5">
            <h1 className="mx-auto max-w-4xl text-center text-5xl font-semibold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="text-foreground">O vendedor</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute bg-gradient-to-r from-primary to-[hsl(210_100%_72%)] bg-clip-text font-semibold text-transparent"
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed tracking-tight text-muted-foreground md:text-xl">
              A Amply junta bot com IA e CRM num lugar só. Ele conversa com o lead
              na hora, manda foto e vídeo do carro, agenda a visita e organiza tudo
              pra sua equipe entrar só pra fechar.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="flex w-full flex-col gap-3 px-4 sm:w-auto sm:flex-row sm:px-0"
          >
            <Button size="lg" className="gap-4" variant="outline" asChild>
              <a href="#demo">
                Ver como funciona <PhoneCall className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button size="lg" className="gap-4" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Agendar demonstração <MoveRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </motion.div>

          <motion.p
            variants={item}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground"
          >
            <span>Resposta em segundos</span>
            <span aria-hidden="true">·</span>
            <span>Atendimento 24/7</span>
            <span aria-hidden="true">·</span>
            <span>WhatsApp oficial Meta</span>
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export { Hero }
