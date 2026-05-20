import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, CheckCircle2, Star, ShieldCheck, HeartPulse } from 'lucide-react'

const areasData = [
  { name: 'Puducherry City', top: '48%', left: '72%', visits: '240+', availability: ['Home Visits', 'Nursing Care', 'Emergency Support'] },
  { name: 'Ariyankuppam', top: '68%', left: '64%', visits: '110+', availability: ['Home Visits', 'Nursing Care'] },
  { name: 'Villianur', top: '52%', left: '42%', visits: '95+', availability: ['Home Visits', 'Elderly Care'] },
  { name: 'Oulgaret', top: '35%', left: '58%', visits: '130+', availability: ['Home Visits', 'Nursing Care', 'Emergency Support'] },
  { name: 'Bahour', top: '82%', left: '50%', visits: '60+', availability: ['Home Visits', 'Physiotherapy'] },
  { name: 'Thirubuvanai', top: '46%', left: '18%', visits: '45+', availability: ['Home Visits', 'Sample Collection'] },
  { name: 'Nettapakkam', top: '64%', left: '26%', visits: '50+', availability: ['Home Visits', 'Elderly Care'] },
  { name: 'Thirukkanur', top: '24%', left: '22%', visits: '40+', availability: ['Home Visits', 'Nursing Care'] },
]

export default function ServiceAreaSection() {
  const [hoveredPin, setHoveredPin] = useState(null)

  return (
    <section className="relative py-20 lg:py-28 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      
      {/* Premium Visual Effects: Background Mesh & Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-500/5 rounded-full blur-[100px] animate-pulse duration-[8s]" />
        <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] bg-teal-500/5 dark:bg-teal-500/5 rounded-full blur-[100px]" />
        
        {/* Fine background grid line accent */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgNjBWMGg2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIHN0cm9rZS1vcGFjaXR5PSIwLjAxIi8+PC9zdmc+')] " />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* ==================== LEFT SIDE: INTERACTIVE MAP VISUALIZATION ==================== */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full aspect-square max-w-[480px] mx-auto bg-slate-100/70 dark:bg-slate-900/40 border border-slate-200/60 dark:border-slate-800/50 rounded-3xl p-4 shadow-inner backdrop-blur-sm group"
            >
              {/* Glowing Backdrop Mesh behind image */}
              <div className="absolute inset-8 rounded-[40px] bg-gradient-to-tr from-blue-500/10 via-teal-400/5 to-transparent filter blur-md" />
              
              {/* Authentic Vector Shape of the Puducherry Region */}
              <div className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none">
                <svg 
                  className="w-full h-full text-blue-500/20 dark:text-blue-400/10 transition-all duration-500 drop-shadow-[0_12px_24px_rgba(14,165,233,0.15)]" 
                  viewBox="0 0 320 320" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    animate={{ 
                      scale: [1, 1.01, 1],
                      y: [0, -2, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    d="M 120 40 
                       C 115 55, 95 65, 80 70 
                       C 65 75, 45 95, 60 115 
                       C 75 135, 115 125, 125 140 
                       C 135 155, 110 175, 100 195 
                       C 90 215, 130 230, 150 250 
                       C 170 270, 160 300, 185 295
                       C 210 290, 195 240, 215 220 
                       C 235 200, 260 210, 275 180 
                       C 290 150, 255 130, 245 105 
                       C 235 80, 250 65, 220 50
                       C 190 35, 175 60, 155 55 
                       Z"
                    fill="url(#puduMapGradient)"
                    stroke="url(#puduStrokeGradient)"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <defs>
                    <linearGradient id="puduMapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(14, 165, 233, 0.45)" />
                      <stop offset="50%" stopColor="rgba(20, 184, 166, 0.25)" />
                      <stop offset="100%" stopColor="rgba(14, 165, 233, 0.05)" />
                    </linearGradient>
                    <linearGradient id="puduStrokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* INTERACTIVE PINS */}
              {areasData.map((area) => {
                const isSelected = hoveredPin === area.name
                return (
                  <div
                    key={area.name}
                    className="absolute z-30 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    style={{ top: area.top, left: area.left }}
                    onMouseEnter={() => setHoveredPin(area.name)}
                    onMouseLeave={() => setHoveredPin(null)}
                  >
                    {/* Pulsing Outer Rings */}
                    <div className="relative flex items-center justify-center">
                      <span className={`absolute inline-flex h-8 w-8 rounded-full bg-teal-400/40 transition-transform duration-300 ${isSelected ? 'scale-150 opacity-100' : 'scale-100 opacity-0'}`} />
                      <span className="animate-ping absolute inline-flex h-5 w-5 rounded-full bg-blue-400 opacity-40" />
                      
                      {/* Central Core Pin */}
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        className={`w-5 h-5 rounded-full shadow-md flex items-center justify-center border-2 border-white dark:border-slate-950 transition-all ${
                          isSelected 
                            ? 'bg-gradient-to-r from-blue-600 to-teal-500 scale-110 shadow-blue-500/50' 
                            : 'bg-white dark:bg-slate-900 border-teal-500'
                        }`}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-teal-500'}`} />
                      </motion.div>
                    </div>

                    {/* INTERACTIVE POPUP TOOLTIP */}
                    <AnimatePresence>
                      {isSelected && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: -8, scale: 1 }}
                          exit={{ opacity: 0, y: 5, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3 rounded-xl shadow-xl border border-slate-200/80 dark:border-slate-800/80 pointer-events-none"
                        >
                          <div className="text-xs font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-1.5 mb-1.5 flex items-center justify-between">
                            <span>{area.name}</span>
                            <span className="text-[10px] text-teal-600 dark:text-teal-400 font-normal">{area.visits} visits</span>
                          </div>
                          <div className="space-y-1">
                            {area.availability.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-1 text-[10px] text-slate-600 dark:text-slate-300 font-medium">
                                <CheckCircle2 className="w-3 h-3 text-teal-500 flex-shrink-0" />
                                {item}
                              </div>
                            ))}
                          </div>
                          {/* Triangle Pointer */}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white dark:bg-slate-900 rotate-45 border-r border-b border-slate-200/80 dark:border-slate-800/80" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}

              {/* BOTTOM FLOATING INFO STATS CARD */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-2 sm:right-4 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 p-3.5 rounded-2xl shadow-xl border border-white/40 dark:border-slate-800/60 z-30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-slate-900 dark:text-white leading-none">8+ Regions</div>
                    <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">Covered Across UT</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ==================== RIGHT SIDE: TEXT & GLASS CARDS GRID ==================== */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-500" />
                Regional Presence
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-5 tracking-tight leading-tight">
                Serving Across <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">
                  Puducherry
                </span>
              </h2>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg font-light leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                Our medical teams are localized across key coastal and inland sectors. By positioning clinicians directly within your neighborhood, we ensure rapid arrivals and uninterrupted care standard compliance.
              </p>
            </motion.div>

            {/* Areas Glassmorphism Cards Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {areasData.map((area, index) => {
                const isSelected = hoveredPin === area.name
                return (
                  <motion.div
                    key={area.name}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    onMouseEnter={() => setHoveredPin(area.name)}
                    onMouseLeave={() => setHoveredPin(null)}
                    className={`relative p-3.5 sm:p-4 rounded-xl border transition-all duration-300 text-left cursor-pointer group/card overflow-hidden ${
                      isSelected
                        ? 'bg-white dark:bg-slate-900 shadow-xl -translate-y-1 border-teal-500/50 dark:border-teal-500/40'
                        : 'bg-white/60 dark:bg-slate-900/40 shadow-sm hover:shadow-md border-slate-200/60 dark:border-slate-800/60'
                    }`}
                  >
                    {/* Glowing card background hover filter */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/5 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected 
                          ? 'bg-gradient-to-br from-blue-500 to-teal-500 text-white' 
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                      }`}>
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-semibold text-slate-800 dark:text-slate-200 text-sm tracking-tight leading-snug">
                          {area.name}
                        </div>
                        <div className="text-[10px] text-slate-400 dark:text-slate-500 font-medium mt-0.5 flex items-center gap-1">
                          <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                          Premium Home Care
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}