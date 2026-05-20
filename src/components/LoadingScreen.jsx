import { motion, AnimatePresence } from 'framer-motion'
import { Activity } from 'lucide-react'
import khLogo from "../assets/logo-circle.jpg";

export default function LoadingScreen({ isLoading }) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] bg-white dark:bg-slate-950 flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6">

            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-center"
            >
              {/* Pulse ring behind the logo */}
              <motion.div
                animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute w-28 h-28 rounded-full bg-gradient-to-br from-teal-400 to-blue-500"
                style={{ zIndex: 0 }}
              />

              {/* KH Logo — circular */}
              <motion.div
                animate={{ scale: [1, 1.07, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl"
                style={{ zIndex: 1 }}
              >
                <img
                  src={khLogo}
                  alt="KH Clinical Care"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">KH Clinical Care</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Loading your healthcare experience...</p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="w-48 h-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full"
            />

            {/* Heartbeat Animation */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Activity className="w-6 h-6 text-teal-500" />
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}