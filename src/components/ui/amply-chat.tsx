import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Check, RotateCcw } from "lucide-react"
import { Conversation, ConversationContent } from "@/components/ui/conversation"
import { EASE } from "@/components/ui/reveal"
import { useT } from "@/lib/i18n"
import { cn } from "@/lib/utils"

// fotos reais do estoque (arquivos em public/) — fixas, zipadas com t("chat.cars")
const CAR_IMAGES = ["/carro-1.jpg", "/carro-2.jpg", "/carro-3.jpg"]

type Msg =
  | { role: "them" | "me"; text: string; time: string }
  | { role: "catalog"; time: string }
  | { role: "booked"; time: string }

type Shown = { m: Msg; k: number }

export function AmplyChat() {
  const { t, lang } = useT()
  const script = t("chat.script") as Msg[]

  const containerRef = useRef<HTMLDivElement>(null)
  const inView = useInView(containerRef, { once: true, amount: 0.35 })
  const [visible, setVisible] = useState<Shown[]>([])
  const [typing, setTyping] = useState(false)
  const [done, setDone] = useState(false)
  const [runId, setRunId] = useState(0)

  useEffect(() => {
    if (!inView) return
    let i = 0
    let key = 0
    const timers: ReturnType<typeof setTimeout>[] = []
    setVisible([])
    setDone(false)
    const run = () => {
      if (i >= script.length) {
        setDone(true)
        return
      }
      const msg = script[i++]
      if (msg.role === "me" || msg.role === "catalog") {
        setTyping(true)
        timers.push(
          setTimeout(() => {
            setTyping(false)
            setVisible((v) => [...v, { m: msg, k: key++ }])
            timers.push(setTimeout(run, 600))
          }, 1100),
        )
      } else {
        setVisible((v) => [...v, { m: msg, k: key++ }])
        timers.push(setTimeout(run, 800))
      }
    }
    timers.push(setTimeout(run, 500))
    return () => timers.forEach(clearTimeout)
  }, [inView, runId, lang, script])

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className="mx-auto w-full max-w-sm rounded-[28px] bg-zinc-900 p-3 shadow-2xl ring-1 ring-white/10"
    >
      {/* cabeçalho */}
      <div className="flex items-center gap-3 rounded-t-2xl bg-zinc-800 px-4 py-3 text-zinc-50">
        <div
          aria-hidden="true"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white font-bold text-zinc-900"
        >
          A
        </div>
        <div>
          <p className="text-sm font-semibold">{t("chat.storeName")}</p>
          <p className="flex items-center gap-1 text-xs text-zinc-300">
            <span className="h-1.5 w-1.5 rounded-full bg-white" /> {t("chat.online")}
          </p>
        </div>
      </div>

      {/* corpo com auto-scroll */}
      <Conversation
        className="h-[520px] rounded-b-2xl bg-zinc-950"
        aria-label="Amply bot demo conversation"
      >
        <ConversationContent className="flex flex-col gap-2">
          <AnimatePresence>
            {visible.map(({ m, k }) => (
              <Bubble key={k} msg={m} />
            ))}
          </AnimatePresence>
          {typing && <Typing />}
        </ConversationContent>
      </Conversation>

      {/* área reservada pro replay — altura fixa pra não deslocar o layout */}
      <div className="flex h-11 items-center justify-center">
        {done && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => setRunId((n) => n + 1)}
            className="flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest text-zinc-400 transition-colors hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" /> {t("chat.replay")}
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}

function Bubble({ msg }: { msg: Msg }) {
  const { t } = useT()
  const anim = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.3 },
  }

  if (msg.role === "catalog") {
    const cars = t("chat.cars") as { title: string; price: string }[]
    return (
      <motion.div
        {...anim}
        className="max-w-[88%] self-start rounded-2xl rounded-bl-sm bg-zinc-800 p-2"
      >
        <p className="px-1 pb-2 pt-1 text-xs text-zinc-400">{t("chat.catalogHeader")}</p>
        <div className="flex flex-col gap-2">
          {cars.map((c, i) => (
            <div key={c.title} className="flex items-center gap-3 rounded-xl bg-zinc-900/70 p-2">
              <div className="h-12 w-16 shrink-0 overflow-hidden rounded-lg bg-zinc-700">
                <img
                  src={CAR_IMAGES[i]}
                  alt={c.title}
                  width={64}
                  height={48}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale"
                  onError={(e) => {
                    e.currentTarget.style.visibility = "hidden"
                  }}
                />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-zinc-100">{c.title}</p>
                <p className="font-mono text-xs text-zinc-400">{c.price}</p>
              </div>
            </div>
          ))}
        </div>
        <span className="mt-1 block px-1 font-mono text-[10px] text-zinc-500">{msg.time}</span>
      </motion.div>
    )
  }

  if (msg.role === "booked") {
    return (
      <motion.div
        {...anim}
        className="mt-1 flex items-center gap-1.5 self-center rounded-full border border-white/25 bg-white/10 px-3 py-1.5 font-mono text-xs text-zinc-200"
      >
        <Check className="h-3.5 w-3.5" aria-hidden="true" /> {t("chat.booked")}
      </motion.div>
    )
  }

  const mine = msg.role === "me"
  return (
    <motion.div
      {...anim}
      className={cn(
        "max-w-[80%] rounded-2xl px-3 py-2 text-sm",
        mine
          ? "self-end rounded-br-sm bg-white font-medium text-zinc-900"
          : "self-start rounded-bl-sm bg-zinc-800 text-zinc-100",
      )}
    >
      {msg.text}
      <span className="mt-1 block font-mono text-[10px] opacity-60">{msg.time}</span>
    </motion.div>
  )
}

function Typing() {
  const { t } = useT()
  return (
    <div className="flex gap-1 self-start rounded-2xl bg-zinc-800 px-3 py-3" aria-label={t("chat.typing")}>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-zinc-300"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  )
}
