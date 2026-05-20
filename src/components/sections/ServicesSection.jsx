import { motion } from 'framer-motion'
import { 
  Stethoscope, 
  Heart, 
  Users, 
  Hospital, 
  FlaskConical, 
  Activity,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Doctor Home Visits',
    description: 'Experienced physicians visit your home for consultations, check-ups, and treatment plans tailored to your needs.',
    color: 'from-medical-500 to-medical-600',
    bgColor: 'bg-medical-50 dark:bg-medical-900/20',
  },
  {
    icon: Heart,
    title: 'Nursing Care at Home',
    description: 'Professional nursing services including wound care, medication administration, and health monitoring.',
    color: 'from-rose-500 to-rose-600',
    bgColor: 'bg-rose-50 dark:bg-rose-900/20',
  },
  {
    icon: Users,
    title: 'Elderly Care',
    description: 'Compassionate care for seniors including assistance with daily activities, companionship, and health management.',
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50 dark:bg-teal-900/20',
  },
  {
    icon: Hospital,
    title: 'Post-Hospitalization Care',
    description: 'Seamless transition from hospital to home with continuous monitoring and rehabilitation support.',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
  },
  {
    icon: FlaskConical,
    title: 'Diagnostic Services at Home',
    description: 'Blood tests, ECG, and other diagnostic services performed in the comfort of your home by trained technicians.',
    color: 'from-violet-500 to-violet-600',
    bgColor: 'bg-violet-50 dark:bg-violet-900/20',
  },
  {
    icon: Activity,
    title: 'Physiotherapy at Home',
    description: 'Expert physiotherapy sessions for recovery, pain management, and improved mobility at your doorstep.',
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50 dark:bg-amber-900/20',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 bg-white dark:bg-slate-950 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative section-padding mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-medical-100 dark:bg-medical-900/30 text-medical-700 dark:text-medical-300 text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Comprehensive <span className="text-gradient">Home Healthcare</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
            From routine check-ups to specialized care, we bring a full spectrum of medical services to your doorstep
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                <div className="glass-card p-8 h-full hover-lift relative overflow-hidden">
                  {/* Hover Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-medical-600 dark:group-hover:text-medical-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-medical-600 dark:text-medical-400 font-medium group/link cursor-pointer">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </div>

                  {/* Corner Decoration */}
                  <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br from-medical-100/50 to-teal-100/50 dark:from-medical-900/20 dark:to-teal-900/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
