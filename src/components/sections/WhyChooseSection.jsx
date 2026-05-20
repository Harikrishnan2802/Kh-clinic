import { motion } from 'framer-motion'
import { CheckCircle2, Star, Clock, Shield, Wallet, HeadphonesIcon } from 'lucide-react'

const features = [
  {
    icon: Star,
    title: 'Experienced Healthcare Professionals',
    description: 'Our team consists of certified doctors, nurses, and caregivers with years of hands-on experience in home healthcare.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Personalized Care Plans',
    description: 'Every patient receives a customized care plan designed around their unique medical needs, lifestyle, and recovery goals.',
    color: 'from-medical-500 to-cyan-500',
  },
  {
    icon: Clock,
    title: 'Timely and Reliable Service',
    description: 'We value your time. Our professionals arrive punctually and complete services efficiently without compromising quality.',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    icon: Wallet,
    title: 'Affordable Pricing',
    description: 'Quality healthcare shouldnt break the bank. We offer transparent, competitive pricing with no hidden charges.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: CheckCircle2,
    title: 'Safe and Hygienic Practices',
    description: 'Strict adherence to medical protocols, sterilization standards, and hygiene practices to ensure patient safety.',
    color: 'from-rose-500 to-pink-500',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Our dedicated support team is available round the clock to address your concerns and coordinate emergency care.',
    color: 'from-cyan-500 to-blue-500',
  },
]

export default function WhyChooseSection() {
  return (
    <section id="why-us" className="relative py-24 bg-gradient-to-b from-medical-50/50 to-white dark:from-slate-900/50 dark:to-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-medical-200/20 dark:bg-medical-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-teal-200/20 dark:bg-teal-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative section-padding mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            What Makes Us <span className="text-gradient">Different</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
            We go beyond standard care to deliver an exceptional healthcare experience right at your home
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="glass-card p-8 h-full border-l-4 border-l-transparent hover:border-l-medical-500 transition-all duration-300">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Check Mark */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, type: 'spring', stiffness: 200 }}
                    className="absolute top-6 right-6"
                  >
                    <div className="w-8 h-8 rounded-full bg-medical-100 dark:bg-medical-900/30 flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 text-medical-600 dark:text-medical-400" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
