import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Patient Family Member',
    image: 'R',
    rating: 5,
    text: 'Excellent care and professional staff. The doctor visited my father regularly after his surgery and the recovery was remarkable. Truly grateful for their compassionate service.',
    color: 'from-medical-500 to-teal-500',
  },
  {
    id: 2,
    name: 'Lakshmi Devi',
    role: 'Senior Citizen',
    image: 'L',
    rating: 5,
    text: 'Very helpful for elderly patients like me. I dont have to travel to the hospital anymore. The nurses are so kind and patient. Highly recommend their elderly care services.',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    id: 3,
    name: 'Priya Sundaram',
    role: 'Working Professional',
    image: 'P',
    rating: 5,
    text: 'Affordable and trustworthy service. As a working woman, having healthcare come to my home is a blessing. The diagnostic services at home saved me so much time.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 4,
    name: 'Dr. Arun Victor',
    role: 'Referring Physician',
    image: 'A',
    rating: 5,
    text: 'As a doctor, I confidently refer my patients to KH Clinical. Their post-hospitalization care is exceptional and they maintain excellent communication with referring physicians.',
    color: 'from-violet-500 to-purple-500',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-white to-medical-50/50 dark:from-slate-950 dark:to-slate-900/50 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-medical-200/20 dark:bg-medical-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-teal-200/20 dark:bg-teal-900/10 rounded-full blur-3xl" />
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-medical-100 dark:bg-medical-900/30 text-medical-700 dark:text-medical-300 text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            What Our <span className="text-gradient">Patients Say</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
            Real stories from real people who experienced the difference of home healthcare
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-card p-8 lg:p-12 glow-medical"
            >
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    className={`w-24 h-24 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white text-3xl font-bold shadow-xl`}
                  >
                    {testimonials[current].image}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <Quote className="w-10 h-10 text-medical-200 dark:text-medical-800 mb-4 mx-auto lg:mx-0" />
                  <p className="text-lg lg:text-xl text-slate-700 dark:text-slate-200 leading-relaxed mb-6 italic">
                    {testimonials[current].text}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 justify-center lg:justify-start mb-3">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="p-3 rounded-full glass hover:bg-medical-100 dark:hover:bg-medical-900/30 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-slate-700 dark:text-slate-200" />
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === current
                      ? 'w-8 h-3 bg-gradient-to-r from-medical-500 to-teal-500'
                      : 'w-3 h-3 bg-slate-300 dark:bg-slate-700 hover:bg-medical-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="p-3 rounded-full glass hover:bg-medical-100 dark:hover:bg-medical-900/30 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-slate-700 dark:text-slate-200" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}
