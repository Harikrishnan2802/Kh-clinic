import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Activity } from 'lucide-react'

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
              className="relative"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-medical-500 to-teal-500 flex items-center justify-center shadow-xl shadow-medical-500/30"
              >
                <Heart className="w-10 h-10 text-white" />
              </motion.div>

              {/* Pulse Ring */}
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-medical-500 to-teal-500"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">KH Clinical</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">Loading your healthcare experience...</p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="w-48 h-1 bg-gradient-to-r from-medical-500 to-teal-500 rounded-full"
            />

            {/* Heartbeat Animation */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Activity className="w-6 h-6 text-medical-500" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
