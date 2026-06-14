import { motion, type Variants } from "framer-motion"
import type { ReactNode } from "react"

// tokens de movimento compartilhados — todas as animações do site usam o mesmo ritmo
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
}

export const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export const viewport = { once: true, margin: "-80px" } as const

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.55, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  kicker,
  title,
  desc,
}: {
  kicker: string
  title: string
  desc?: string
}) {
  return (
    <Reveal className="mx-auto mb-10 max-w-2xl text-center">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">{kicker}</p>
      <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tighter md:text-5xl">
        {title}
      </h2>
      {desc && <p className="mt-4 text-pretty text-base text-muted-foreground md:text-lg">{desc}</p>}
    </Reveal>
  )
}
