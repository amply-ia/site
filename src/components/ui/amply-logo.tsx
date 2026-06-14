import { motion } from "framer-motion"
import { EASE } from "@/components/ui/reveal"
import logo from "@/assets/amply-logo.png"

export function AmplyLogo() {
  return (
    <motion.a
      href="#inicio"
      aria-label="Amply — voltar ao início"
      initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
      whileHover={{ scale: 1.08, rotate: 4 }}
      whileTap={{ scale: 0.95 }}
      className="fixed left-5 top-5 z-[60] flex h-11 w-11 items-center justify-center rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <img
        src={logo}
        alt=""
        width={44}
        height={44}
        className="h-11 w-11 invert dark:invert-0"
      />
    </motion.a>
  )
}
