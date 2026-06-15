import { MotionConfig } from "framer-motion"
import { LanguageProvider } from "@/lib/i18n"
import Landing from "@/components/landing"

export default function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <Landing />
      </MotionConfig>
    </LanguageProvider>
  )
}
