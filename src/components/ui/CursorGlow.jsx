import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [isVisible])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999] hidden lg:block"
      animate={{
        x: mousePosition.x - 150,
        y: mousePosition.y - 150,
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 200 }}
    >
      <div className="w-[300px] h-[300px] rounded-full bg-gradient-to-r from-medical-400/20 to-teal-400/20 blur-3xl" />
    </motion.div>
  )
}
