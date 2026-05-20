import { motion } from 'framer-motion'
import { Heart, Shield, Clock, Award } from 'lucide-react'
import healthcareImage from "../../assets/caring.png";

const features = [
  { icon: Heart, text: 'Compassionate Care' },
  { icon: Shield, text: 'Certified Professionals' },
  { icon: Clock, text: 'Timely Service' },
  { icon: Award, text: 'Quality Assured' },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-950 dark:to-slate-900/50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-teal-200/20 dark:bg-teal-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl" />

      <div className="relative px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left - Image Area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative pr-4 pb-4 sm:pr-8 sm:pb-8"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-2 border border-slate-100 dark:border-slate-800">
                <div className="aspect-[4/5] rounded-[2.2rem] overflow-hidden relative">
                  <img
  src={healthcareImage}
  alt="Professional home healthcare service providing clinical assistance to patient"
  className="w-full h-full object-cover object-[center_22%]"
/>
                  {/* Subtle Gradient Overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating Experience Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-4 -right-4 sm:-right-6 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 p-5 rounded-2xl shadow-xl border border-white/40 dark:border-slate-800/60 max-w-[200px] sm:max-w-xs flex items-center gap-4"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-none">10+</p>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-1">Years Experience</p>
                </div>
              </motion.div>

              {/* Decorative Dashed Border Frame Accent */}
              <div className="absolute -inset-3 sm:-inset-4 rounded-[2.8rem] border-2 border-dashed border-cyan-200/60 dark:border-slate-800 -z-10" />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-semibold mb-4 border border-teal-100/50 dark:border-teal-900/50">
              About Us
            </span>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-[1.15] tracking-tight">
              Bringing{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                Quality Care
              </span>{' '}
              to Your Home
            </h2>

            <div className="space-y-4 text-slate-500 dark:text-slate-400 text-base sm:text-lg leading-relaxed mb-8">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                We provide reliable, personalized medical care in the comfort of your home. Our trained healthcare professionals ensure that patients receive high-quality treatment, monitoring, and support without the stress of hospital travel.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Founded with a vision to make healthcare accessible and comfortable, KH Clinical has grown to become Puducherry's most trusted home healthcare provider. We understand that healing happens best in familiar surroundings.
              </motion.p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.08, duration: 0.5 }}
                    whileHover={{ y: -2 }}
                    className="flex items-center gap-3.5 p-4 rounded-xl bg-white/80 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm"
                  >
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800/50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600 dark:text-cyan-400 stroke-[2.2]" />
                    </div>
                    <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">
                      {feature.text}
                    </span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}