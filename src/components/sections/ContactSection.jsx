import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle2, ArrowRight, Sparkles, Heart } from 'lucide-react'

const WHATSAPP_NUMBER = '919486894678'

function buildWhatsAppMessage(formData) {
  return encodeURIComponent(
    `🏥 *New Appointment Request - KH Clinical Care*\n\n` +
    `👤 *Name:* ${formData.name}\n` +
    `📞 *Phone:* ${formData.phone}\n` +
    `📧 *Email:* ${formData.email || 'Not provided'}\n` +
    `🩺 *Service Required:* ${formData.service}\n` +
    `📍 *Address:* ${formData.address || 'Not provided'}\n` +
    `💬 *Message:* ${formData.message || 'No additional message'}\n\n` +
    `_Sent via KH Clinical Care Website_`
  )
}

const services = [
  { value: 'doctor-visit', label: '🩺 Doctor Home Visit' },
  { value: 'nursing', label: '💉 Nursing Care at Home' },
  { value: 'elderly', label: '👴 Elderly Care' },
  { value: 'post-hospital', label: '🏥 Post-Hospitalization Care' },
  { value: 'diagnostic', label: '🔬 Diagnostic Services' },
  { value: 'physiotherapy', label: '🤸 Physiotherapy' },
]

const contactCards = [
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 94868 94678',
    sub: 'Available 24/7',
    href: 'tel:+919486894678',
    gradient: 'from-rose-400 to-pink-500',
    glow: 'shadow-pink-500/30',
    bg: 'hover:bg-pink-50 dark:hover:bg-pink-900/10',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Chat with us',
    sub: 'Instant response',
    href: `https://wa.me/${WHATSAPP_NUMBER}`,
    gradient: 'from-emerald-400 to-green-500',
    glow: 'shadow-green-500/30',
    bg: 'hover:bg-green-50 dark:hover:bg-green-900/10',
    external: true,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'khclinicalcare@gmail.com',
    sub: 'Reply within 2hrs',
    href: 'mailto:khclinicalcare@gmail.com',
    gradient: 'from-sky-400 to-blue-500',
    glow: 'shadow-blue-500/30',
    bg: 'hover:bg-blue-50 dark:hover:bg-blue-900/10',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Puducherry, India',
    sub: 'Home visits available',
    href: '#',
    gradient: 'from-violet-400 to-purple-500',
    glow: 'shadow-purple-500/30',
    bg: 'hover:bg-purple-50 dark:hover:bg-purple-900/10',
  },
]

function FloatingParticle({ delay, x, y, size }) {
  return (
    <motion.div
      className="absolute rounded-full bg-teal-400/10 dark:bg-teal-300/5 pointer-events-none"
      style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
      animate={{ y: [-10, 10, -10], opacity: [0.3, 0.6, 0.3] }}
      transition={{ duration: 4 + delay, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  )
}

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', address: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)
  const [step, setStep] = useState(1) // 2-step form

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = () => {
    const msg = buildWhatsAppMessage(formData)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`
    window.open(url, '_blank')
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setStep(1)
      setFormData({ name: '', phone: '', email: '', service: '', address: '', message: '' })
    }, 5000)
  }

  const canProceedStep1 = formData.name.trim() && formData.phone.trim() && formData.service

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Clash+Display:wght@400;500;600;700&family=Satoshi:wght@400;500;600;700&display=swap');

        .contact-section {
          font-family: 'Satoshi', sans-serif;
        }
        .display-font { font-family: 'Clash Display', sans-serif; }

        .glass-premium {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(255,255,255,0.5);
          box-shadow: 0 20px 60px rgba(0,0,0,0.08), 0 1px 0 rgba(255,255,255,0.8) inset;
        }
        .dark .glass-premium {
          background: rgba(15,23,42,0.7);
          border-color: rgba(255,255,255,0.07);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05) inset;
        }

        .input-field {
          width: 100%;
          padding: 14px 16px;
          border-radius: 14px;
          border: 2px solid #e2e8f0;
          background: rgba(255,255,255,0.8);
          color: #0f172a;
          font-size: 15px;
          font-family: 'Satoshi', sans-serif;
          transition: all 0.2s;
          outline: none;
        }
        .dark .input-field {
          background: rgba(30,41,59,0.8);
          border-color: rgba(255,255,255,0.08);
          color: #f1f5f9;
        }
        .input-field:focus {
          border-color: #0d9488;
          box-shadow: 0 0 0 4px rgba(13,148,136,0.12);
        }
        .input-field::placeholder { color: #94a3b8; }

        .select-field {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%2394a3b8' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 42px;
          cursor: pointer;
        }

        .submit-btn {
          width: 100%;
          padding: 16px;
          border-radius: 14px;
          background: linear-gradient(135deg, #0d9488, #14b8a6, #06b6d4);
          background-size: 200% 200%;
          color: white;
          font-weight: 700;
          font-size: 16px;
          font-family: 'Satoshi', sans-serif;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          transition: all 0.3s;
          box-shadow: 0 8px 24px rgba(13,148,136,0.35);
          position: relative;
          overflow: hidden;
          letter-spacing: 0.01em;
        }
        .submit-btn:hover {
          box-shadow: 0 12px 32px rgba(13,148,136,0.5);
          transform: translateY(-1px);
        }
        .submit-btn:active { transform: translateY(0); }
        .submit-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent, rgba(255,255,255,0.15), transparent);
          transform: translateX(-100%);
          transition: transform 0.6s;
        }
        .submit-btn:hover::before { transform: translateX(100%); }

        .next-btn {
          width: 100%;
          padding: 14px;
          border-radius: 14px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          font-weight: 700;
          font-size: 15px;
          font-family: 'Satoshi', sans-serif;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s;
          box-shadow: 0 8px 20px rgba(99,102,241,0.3);
        }
        .next-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          transform: none !important;
          box-shadow: none;
        }
        .next-btn:not(:disabled):hover {
          box-shadow: 0 12px 28px rgba(99,102,241,0.45);
          transform: translateY(-1px);
        }

        .step-indicator {
          display: flex;
          gap: 8px;
          align-items: center;
          margin-bottom: 24px;
        }
        .step-dot {
          height: 6px;
          border-radius: 3px;
          transition: all 0.4s;
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          border-radius: 16px;
          text-decoration: none;
          transition: all 0.25s;
          border: 1.5px solid transparent;
        }
        .contact-card:hover {
          border-color: rgba(13,148,136,0.2);
          transform: translateX(4px);
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border-radius: 100px;
          background: linear-gradient(135deg, rgba(13,148,136,0.12), rgba(6,182,212,0.08));
          border: 1px solid rgba(13,148,136,0.2);
          color: #0d9488;
          font-size: 13px;
          font-weight: 600;
          font-family: 'Satoshi', sans-serif;
          letter-spacing: 0.02em;
        }
        .dark .badge { color: #2dd4bf; border-color: rgba(45,212,191,0.2); }

        .wa-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          border-radius: 100px;
          color: white;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .mesh-bg {
          background:
            radial-gradient(ellipse 80% 60% at 80% 10%, rgba(13,148,136,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 60% at 10% 80%, rgba(6,182,212,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 50% 50%, rgba(99,102,241,0.03) 0%, transparent 70%);
        }
        .dark .mesh-bg {
          background:
            radial-gradient(ellipse 80% 60% at 80% 10%, rgba(13,148,136,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 60% 60% at 10% 80%, rgba(6,182,212,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 50% 50%, rgba(99,102,241,0.04) 0%, transparent 70%);
        }

        .info-strip {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          background: linear-gradient(135deg, rgba(34,197,94,0.1), rgba(13,148,136,0.06));
          border: 1px solid rgba(34,197,94,0.2);
          border-radius: 12px;
          font-size: 13px;
          color: #15803d;
          font-weight: 500;
        }
        .dark .info-strip { color: #4ade80; border-color: rgba(74,222,128,0.2); }
      `}</style>

      <section id="contact" className="contact-section relative py-24 overflow-hidden mesh-bg bg-slate-50 dark:bg-slate-950">

        {/* Decorative blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-teal-300/10 dark:bg-teal-500/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-300/10 dark:bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-200/5 dark:bg-violet-500/3 rounded-full blur-3xl" />
          {[
            { x: 20, y: 15, size: 40, delay: 0 },
            { x: 75, y: 30, size: 24, delay: 1.5 },
            { x: 45, y: 70, size: 32, delay: 0.8 },
            { x: 85, y: 75, size: 20, delay: 2.2 },
          ].map((p, i) => <FloatingParticle key={i} {...p} />)}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="badge mx-auto mb-5">
              <Heart className="w-3.5 h-3.5" />
              Compassionate Care Awaits
            </div>
            <h2 className="display-font text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white mb-5 leading-tight">
              Let's Get You{' '}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  Cared For
                </span>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
              Book a home visit in under 2 minutes — we'll contact you within 30 minutes of your request.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 xl:gap-12">

            {/* LEFT — Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 flex flex-col gap-5"
            >
              <div className="glass-premium rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="display-font text-xl font-bold text-slate-900 dark:text-white">Reach Us Directly</h3>
                  <div className="wa-pill">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    Live
                  </div>
                </div>

                <div className="space-y-2">
                  {contactCards.map((card, i) => (
                    <motion.a
                      key={i}
                      href={card.href}
                      target={card.external ? '_blank' : undefined}
                      rel={card.external ? 'noopener noreferrer' : undefined}
                      className={`contact-card bg-white/60 dark:bg-slate-800/60 ${card.bg}`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      whileHover={{ x: 6 }}
                    >
                      <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-lg ${card.glow} flex-shrink-0`}>
                        <card.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-slate-400 font-medium mb-0.5">{card.label}</p>
                        <p className="font-semibold text-slate-900 dark:text-white text-sm truncate">{card.value}</p>
                        <p className="text-xs text-slate-400">{card.sub}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 ml-auto flex-shrink-0" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Hours */}
              <div className="glass-premium rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
                    <Clock className="w-4.5 h-4.5 text-white w-5 h-5" />
                  </div>
                  <h4 className="display-font font-bold text-slate-900 dark:text-white">Availability</h4>
                </div>
                {[
                  { day: 'Mon – Fri', time: '24 Hours', badge: 'Doctors' },
                  { day: 'Sat – Sun', time: '24 Hours', badge: 'Nurses' },
                  { day: 'Emergency', time: 'Always', badge: '🚨' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between py-2.5 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <span className="text-sm text-slate-500 dark:text-slate-400">{row.day}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">{row.time}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300">{row.badge}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust */}
              <div className="flex items-center gap-4 p-4 glass-premium rounded-2xl">
                <div className="flex -space-x-2">
                  {['👨‍⚕️', '👩‍⚕️', '🧑‍⚕️'].map((e, i) => (
                    <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-900 dark:to-cyan-900 flex items-center justify-center border-2 border-white dark:border-slate-900 text-base">
                      {e}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">500+ Patients Served</p>
                  <p className="text-xs text-slate-400">Trusted across Puducherry</p>
                </div>
                <div className="ml-auto flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="glass-premium rounded-2xl p-8 lg:p-10">

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center mb-6 shadow-2xl shadow-green-500/30"
                      >
                        <CheckCircle2 className="w-12 h-12 text-white" />
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <h4 className="display-font text-3xl font-bold text-slate-900 dark:text-white mb-2">Redirecting to WhatsApp!</h4>
                        <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed">
                          Your details have been pre-filled in WhatsApp. Just hit send and we'll confirm your appointment shortly.
                        </p>
                        <div className="info-strip justify-center">
                          <MessageCircle className="w-4 h-4" />
                          Opening WhatsApp with your booking details...
                        </div>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="display-font text-2xl font-bold text-slate-900 dark:text-white">Book a Home Visit</h3>
                          <div className="info-strip text-xs py-1.5">
                            <MessageCircle className="w-3.5 h-3.5" />
                            Sends via WhatsApp
                          </div>
                        </div>
                        <p className="text-slate-400 text-sm">Fill in your details — we'll reach out within 30 minutes.</p>
                      </div>

                      {/* Step indicator */}
                      <div className="step-indicator">
                        <div className="step-dot bg-gradient-to-r from-teal-500 to-cyan-500" style={{ width: step === 1 ? 28 : 12 }} />
                        <div className="step-dot" style={{ width: step === 2 ? 28 : 12, background: step === 2 ? 'linear-gradient(to right, #6366f1, #8b5cf6)' : '#e2e8f0' }} />
                        <span className="text-xs text-slate-400 ml-1">Step {step} of 2</span>
                      </div>

                      <AnimatePresence mode="wait">
                        {step === 1 ? (
                          <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-4"
                          >
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">📋 Basic Information</p>
                            <div className="grid sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Full Name *</label>
                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ravi Kumar" className="input-field" required />
                              </div>
                              <div>
                                <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Phone Number *</label>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" className="input-field" required />
                              </div>
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Email Address</label>
                              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com (optional)" className="input-field" />
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Service Required *</label>
                              <select name="service" value={formData.service} onChange={handleChange} required className="input-field select-field">
                                <option value="">Choose a service…</option>
                                {services.map(s => (
                                  <option key={s.value} value={s.label}>{s.label}</option>
                                ))}
                              </select>
                            </div>

                            <button
                              className="next-btn"
                              disabled={!canProceedStep1}
                              onClick={() => canProceedStep1 && setStep(2)}
                            >
                              Next: Address & Details
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="space-y-4"
                          >
                            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">📍 Visit Details</p>

                            <div>
                              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Home Address</label>
                              <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Door No., Street, Area, Puducherry" className="input-field" />
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">Additional Notes</label>
                              <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Describe symptoms, preferred time, or any special requirements…"
                                className="input-field resize-none"
                              />
                            </div>

                            <div className="info-strip">
                              <MessageCircle className="w-4 h-4 flex-shrink-0" />
                              <span>Tapping <strong>"Book via WhatsApp"</strong> will open WhatsApp with your details pre-filled — just hit send!</span>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                              <button
                                onClick={() => setStep(1)}
                                className="py-3.5 rounded-xl border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-semibold text-sm hover:border-teal-400 transition-colors"
                              >
                                ← Back
                              </button>
                              <button className="submit-btn" style={{ width: '100%' }} onClick={handleSubmit}>
                                <MessageCircle className="w-5 h-5" />
                                Book via WhatsApp
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Quick WhatsApp CTA */}
                      <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                        <p className="text-xs text-slate-400">Prefer to call directly?</p>
                        <a
                          href="tel:+919486894678"
                          className="flex items-center gap-1.5 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5" />
                          +91 94868 94678
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}