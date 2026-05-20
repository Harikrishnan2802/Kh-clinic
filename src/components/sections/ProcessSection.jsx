import { motion } from 'framer-motion'
import { Phone, FileText, CalendarCheck, Home } from 'lucide-react'

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Call Us',
    description: 'Reach out to us via phone or WhatsApp to discuss your healthcare needs and schedule your preferred time.',
    color: 'from-medical-500 to-medical-600',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Share Details',
    description: 'Provide patient information, medical history, and specific care requirements for personalized service.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: CalendarCheck,
    number: '03',
    title: 'Confirm Appointment',
    description: 'Receive confirmation with assigned healthcare professional details and visit schedule.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Home,
    number: '04',
    title: 'Home Visit',
    description: 'Our trained healthcare professional arrives at your doorstep with all necessary equipment and care.',
    color: 'from-violet-500 to-violet-600',
  },
]

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-medical-100/30 dark:bg-medical-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-100/30 dark:bg-teal-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative section-padding mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Simple <span className="text-gradient">4-Step Process</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
            Getting quality healthcare at home has never been easier. Follow these simple steps to get started.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5">
            <div className="relative h-full mx-24">
              <div className="absolute inset-0 bg-gradient-to-r from-medical-200 via-teal-200 to-cyan-200 dark:from-medical-800 dark:via-teal-800 dark:to-cyan-800" />
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-r from-medical-500 via-teal-500 to-cyan-500"
              />
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="text-center">
                    {/* Icon Circle */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative inline-flex mb-6"
                    >
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl shadow-medical-500/20`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-2 border-medical-200 dark:border-medical-700 flex items-center justify-center">
                        <span className="text-xs font-bold text-medical-600 dark:text-medical-400">{step.number}</span>
                      </div>
                      {/* Pulse Effect */}
                      <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-20`}
                      />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile Connector */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-6">
                      <div className="w-0.5 h-12 bg-gradient-to-b from-medical-300 to-teal-300 dark:from-medical-700 dark:to-teal-700" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
