import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'

export default function FloatingEmergency() {
  return (
    <motion.a
      href="tel:+919486894678"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-shadow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
      >
        <Phone className="w-5 h-5" />
      </motion.div>
      <span className="font-semibold text-sm hidden sm:inline">Emergency</span>
    </motion.a>
  )
}
