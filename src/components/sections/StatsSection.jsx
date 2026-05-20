import { motion } from 'framer-motion'
import { useCountUp } from '../../hooks/useScrollAnimation'
import { Home, Clock, Users, Wallet } from 'lucide-react'

const stats = [
  { icon: Home, value: 500, suffix: '+', label: 'Home Visits', description: 'Successful care deliveries' },
  { icon: Clock, value: 24, suffix: '/7', label: 'Support', description: 'Round the clock assistance' },
  { icon: Users, value: 50, suffix: '+', label: 'Professionals', description: 'Expert healthcare staff' },
  { icon: Wallet, value: 100, suffix: '%', label: 'Affordable', description: 'Quality care within reach' },
]

function StatCard({ stat, index }) {
  const [ref, count] = useCountUp(stat.value, 2500)
  const Icon = stat.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="relative group"
    >
      <div className="glass-card p-8 h-full hover-lift glow-medical">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-medical-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-medical-500 to-teal-500 flex items-center justify-center mb-6 shadow-lg shadow-medical-500/20 group-hover:shadow-medical-500/40 transition-shadow">
            <Icon className="w-7 h-7 text-white" />
          </div>

          <div className="flex items-baseline gap-1 mb-2">
            <span className="text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
              {count}
            </span>
            <span className="text-2xl lg:text-3xl font-bold text-medical-500">
              {stat.suffix}
            </span>
          </div>

          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-1">
            {stat.label}
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {stat.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function StatsSection() {
  return (
    <section className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-medical-100/50 dark:bg-medical-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-teal-100/50 dark:bg-teal-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative section-padding mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-medical-100 dark:bg-medical-900/30 text-medical-700 dark:text-medical-300 text-sm font-medium mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Numbers That Speak <span className="text-gradient">Trust</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Delivering exceptional healthcare services with proven results and unwavering commitment
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
