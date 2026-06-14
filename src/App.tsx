import { MotionConfig } from "framer-motion"
import Landing from "@/components/landing"

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Landing />
    </MotionConfig>
  )
}
