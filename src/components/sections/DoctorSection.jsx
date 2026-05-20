import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import doctorImg from "../../assets/doctor.png";
import {
  Award, Heart, Stethoscope, GraduationCap, Star,
  ChevronRight, Phone, MessageCircle, Shield, Zap,
  BookOpen, Users, Clock, CheckCircle, ArrowRight, Sparkles
} from 'lucide-react'

// ─── Data ───────────────────────────────────────────────────────────────────

const credentials = [
  { icon: GraduationCap, label: 'MBBS', sub: 'Bachelor of Medicine & Surgery', color: 'from-sky-400 to-blue-600' },
  { icon: BookOpen,      label: 'MD',   sub: 'Doctor of Medicine – JIPMER',    color: 'from-teal-400 to-emerald-600' },
  { icon: Heart,         label: 'FCC',  sub: 'Fellowship – Clinical Cardiology', color: 'from-teal-500 to-cyan-600' },
]

const stats = [
  { value: '10+',   label: 'Years Experience',  icon: Clock },
  { value: '5000+', label: 'Patients Treated',  icon: Users },
  { value: '98%',   label: 'Recovery Rate',     icon: Shield },
  { value: '24/7',  label: 'Always Available',  icon: Zap },
]

const expertise = [
  'General Medicine & Diagnostics',
  'Cardiac Health & Heart Care',
  'Chronic Disease Management',
  'Home-Based Critical Care',
  'Post-Surgery Recovery',
  'Preventive & Lifestyle Medicine',
]

const timeline = [
  { year: '2010',  title: 'MBBS – JIPMER',              desc: "Graduated from Jawaharlal Institute of Postgraduate Medical Education & Research — India's premier medical institution." },
  { year: '2014',  title: 'MD – Internal Medicine',      desc: 'Post-graduation from JIPMER with specialisation in Internal Medicine and advanced diagnostics.' },
  { year: '2016',  title: 'Fellowship – Clinical Cardiology', desc: 'Completed fellowship training in Clinical Cardiology, mastering ECG interpretation, cardiac emergencies, and heart disease management.' },
  { year: '2016+', title: 'KH Clinical Care – Founder', desc: "Launched KH Clinical Care to bring JIPMER-grade expertise directly to patients' homes across Puducherry." },
]

// ─── Count-up hook ───────────────────────────────────────────────────────────

function useCountUp(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    const num = parseInt(target.replace(/\D/g, ''))
    if (!num) return
    let startTime = null
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * num))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return count
}

function StatCard({ stat, index, inView }) {
  // Only animate values that are purely numeric with a simple suffix (e.g. "10+", "5000+", "98%")
  // Skip animation for values like "24/7" that can't be cleanly split
  const isAnimatable = /^\d+[^/]*$/.test(stat.value)
  const count = useCountUp(stat.value, 1600, isAnimatable ? inView : false)
  const suffix = stat.value.replace(/[0-9]/g, '')
  const displayValue = isAnimatable ? `${count}${suffix}` : stat.value

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      className="stat-card group"
    >
      <div className="stat-icon-wrap">
        <stat.icon className="w-5 h-5 text-white" />
      </div>
      <div className="stat-value">{displayValue}</div>
      <div className="stat-label">{stat.label}</div>
    </motion.div>
  )
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function DoctorSection() {
  const sectionRef = useRef(null)
  const statsRef   = useRef(null)
  const inView      = useInView(sectionRef, { once: true, margin: '-80px' })
  const statsInView = useInView(statsRef,   { once: true, margin: '-60px' })
  const [activeTab,   setActiveTab]   = useState('about')
  const [hoveredCred, setHoveredCred] = useState(null)

  const tabs = ['about', 'journey', 'expertise']

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        /* ── Theme tokens — matching the site's teal-to-white palette ── */
        :root {
          --site-teal-deep:   #0a6e6e;
          --site-teal-mid:    #0d9488;
          --site-teal-bright: #14b8a6;
          --site-cyan:        #22d3ee;
          --site-bg-start:    #e6f7f6;
          --site-bg-mid:      #f0fafa;
          --site-bg-end:      #ffffff;
          --site-card-bg:     rgba(255,255,255,0.85);
          --site-card-border: rgba(13,148,136,0.14);
          --site-text-head:   #0c2340;
          --site-text-body:   #374151;
          --site-text-muted:  #6b7280;
        }

        .doctor-section {
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(
            120deg,
            var(--site-bg-start) 0%,
            var(--site-bg-mid)   45%,
            var(--site-bg-end)   100%
          );
          position: relative;
        }
        .dark .doctor-section {
          background: linear-gradient(120deg, #071a1a 0%, #0a1f2e 50%, #06101a 100%);
        }

        .playfair { font-family: 'Playfair Display', serif; }

        /* ── Decorative background ── */
        .section-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }
        .bg-blob-tl {
          position: absolute;
          top: -80px; left: -80px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 70%);
          border-radius: 50%;
        }
        .bg-blob-br {
          position: absolute;
          bottom: -80px; right: -60px;
          width: 420px; height: 420px;
          background: radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%);
          border-radius: 50%;
        }
        .dark .bg-blob-tl {
          background: radial-gradient(circle, rgba(20,184,166,0.10) 0%, transparent 70%);
        }
        .dark .bg-blob-br {
          background: radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%);
        }
        .bg-grid-doc {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(13,148,136,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13,148,136,0.04) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        /* ── Doctor card ── */
        .doctor-card {
          background: var(--site-card-bg);
          border: 1px solid var(--site-card-border);
          border-radius: 24px;
          box-shadow:
            0 4px 24px rgba(13,148,136,0.07),
            0 1px 0 rgba(255,255,255,1) inset;
          overflow: hidden;
          position: relative;
          backdrop-filter: blur(12px);
        }
        .dark .doctor-card {
          background: rgba(10,28,40,0.80);
          border-color: rgba(20,184,166,0.15);
          box-shadow: 0 4px 32px rgba(0,0,0,0.35);
        }

        /* ── Left doctor profile card top ribbon ── */
        .jipmer-ribbon {
          background: linear-gradient(90deg, var(--site-teal-deep), var(--site-teal-mid), var(--site-teal-bright));
          color: rgba(255,255,255,0.95);
          padding: 10px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
        }

        /* ── Doctor photo frame — stable rectangular, no rotation, no circular crop ── */
        .avatar-frame {
          width: 200px;
          height: 240px;
          border-radius: 20px;
          padding: 4px;
          background: linear-gradient(
            145deg,
            var(--site-teal-deep),
            var(--site-teal-mid),
            var(--site-teal-bright),
            var(--site-cyan)
          );
          box-shadow:
            0 8px 32px rgba(20,184,166,0.30),
            0 2px 8px rgba(34,211,238,0.14);
          flex-shrink: 0;
        }
        .avatar-inner {
          width: 100%;
          height: 100%;
          border-radius: 17px;
          background: linear-gradient(145deg, #e6f7f6, #cef5f1);
          overflow: hidden;
          border: 3px solid #f0fafa;
          display: flex;
          align-items: flex-end;
          justify-content: center;
        }
        .dark .avatar-inner {
          background: linear-gradient(145deg, #0a2828, #0d3838);
          border-color: #071a1a;
        }
        .avatar-inner img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        /* ── Verified badge ── */
        .verified-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 12px;
          background: linear-gradient(135deg, rgba(20,184,166,0.12), rgba(34,211,238,0.08));
          border: 1px solid rgba(20,184,166,0.25);
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          color: var(--site-teal-deep);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .dark .verified-badge { color: var(--site-teal-bright); }

        /* ── Doctor quote ── */
        .quote-card {
          background: linear-gradient(135deg, rgba(20,184,166,0.06), rgba(34,211,238,0.04));
          border: 1px solid rgba(20,184,166,0.15);
          border-left: 3px solid var(--site-teal-bright);
          border-radius: 12px;
          padding: 14px 18px;
        }

        /* ── Section badge ── */
        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 16px;
          background: linear-gradient(135deg, rgba(20,184,166,0.12), rgba(34,211,238,0.06));
          border: 1px solid rgba(20,184,166,0.2);
          border-radius: 100px;
          color: var(--site-teal-deep);
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .dark .section-badge { color: var(--site-teal-bright); border-color: rgba(20,184,166,0.25); }

        /* ── Credential pills ── */
        .cred-pill {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(230,247,246,0.9), rgba(255,255,255,0.9));
          border: 1px solid rgba(20,184,166,0.12);
          cursor: default;
          transition: all 0.28s;
        }
        .dark .cred-pill {
          background: rgba(20,184,166,0.07);
          border-color: rgba(20,184,166,0.15);
        }
        .cred-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(20,184,166,0.14);
          border-color: rgba(20,184,166,0.3);
        }
        .cred-icon {
          width: 38px; height: 38px;
          border-radius: 11px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .cred-abbr {
          font-family: 'Playfair Display', serif;
          font-weight: 800;
          font-size: 17px;
          color: var(--site-teal-deep);
          line-height: 1;
        }
        .dark .cred-abbr { color: var(--site-teal-bright); }
        .cred-sub { font-size: 11px; color: var(--site-text-muted); margin-top: 1px; }
        .dark .cred-sub { color: #94a3b8; }

        /* ── Tab bar ── */
        .tab-bar {
          display: flex;
          gap: 3px;
          padding: 4px;
          background: rgba(20,184,166,0.08);
          border-radius: 14px;
          border: 1px solid rgba(20,184,166,0.1);
        }
        .dark .tab-bar { background: rgba(20,184,166,0.06); border-color: rgba(20,184,166,0.15); }
        .tab-btn {
          flex: 1;
          padding: 10px 14px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 13px;
          border: none;
          cursor: pointer;
          transition: all 0.22s;
          background: transparent;
          color: var(--site-text-muted);
          font-family: 'DM Sans', sans-serif;
        }
        .dark .tab-btn { color: #94a3b8; }
        .tab-btn.active {
          background: white;
          color: var(--site-teal-deep);
          box-shadow: 0 3px 10px rgba(13,148,136,0.14);
        }
        .dark .tab-btn.active {
          background: rgba(20,184,166,0.14);
          color: var(--site-teal-bright);
        }
        .tab-btn:not(.active):hover { color: var(--site-teal-mid); }

        /* ── Stat cards ── */
        .stat-card {
          padding: 18px 12px;
          border-radius: 18px;
          background: rgba(255,255,255,0.88);
          border: 1px solid rgba(20,184,166,0.1);
          text-align: center;
          transition: all 0.28s;
          backdrop-filter: blur(8px);
        }
        .dark .stat-card {
          background: rgba(10,40,40,0.6);
          border-color: rgba(20,184,166,0.14);
        }
        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(20,184,166,0.14);
          border-color: rgba(20,184,166,0.28);
        }
        .stat-icon-wrap {
          width: 38px; height: 38px;
          border-radius: 11px;
          background: linear-gradient(135deg, var(--site-teal-mid), var(--site-teal-bright));
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 9px;
          box-shadow: 0 4px 12px rgba(13,148,136,0.28);
        }
        .stat-value {
          font-family: 'Playfair Display', serif;
          font-weight: 800;
          font-size: 26px;
          color: var(--site-teal-deep);
          line-height: 1;
          margin-bottom: 4px;
        }
        .dark .stat-value { color: var(--site-teal-bright); }
        .stat-label {
          font-size: 10.5px;
          font-weight: 600;
          color: var(--site-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        /* ── Expertise chips ── */
        .expertise-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: 11px;
          background: linear-gradient(135deg, rgba(230,247,246,0.7), rgba(255,255,255,0.8));
          border: 1px solid rgba(20,184,166,0.1);
          font-size: 13.5px;
          font-weight: 500;
          color: var(--site-text-body);
          transition: all 0.22s;
        }
        .dark .expertise-chip {
          background: rgba(20,184,166,0.05);
          border-color: rgba(20,184,166,0.14);
          color: #cbd5e1;
        }
        .expertise-chip:hover {
          background: linear-gradient(135deg, rgba(20,184,166,0.09), rgba(34,211,238,0.05));
          border-color: rgba(20,184,166,0.28);
          transform: translateX(5px);
          color: var(--site-teal-deep);
        }
        .dark .expertise-chip:hover { color: var(--site-teal-bright); }
        .chip-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--site-teal-mid), var(--site-teal-bright));
          flex-shrink: 0;
        }

        /* ── Timeline ── */
        .timeline-item {
          display: grid;
          grid-template-columns: 76px 1fr;
          gap: 18px;
          position: relative;
        }
        .timeline-item:not(:last-child)::after {
          content: '';
          position: absolute;
          left: 37px; top: 50px; bottom: -20px;
          width: 1px;
          background: linear-gradient(to bottom, rgba(20,184,166,0.35), rgba(20,184,166,0.05));
        }
        .timeline-year {
          font-family: 'Playfair Display', serif;
          font-weight: 800;
          font-size: 12.5px;
          color: var(--site-teal-mid);
          text-align: right;
          padding-right: 14px;
          border-right: 2px solid rgba(20,184,166,0.22);
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          padding-top: 4px;
          line-height: 1.5;
        }
        .timeline-year::after {
          content: '';
          position: absolute;
          right: -6px; top: 8px;
          width: 9px; height: 9px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--site-teal-mid), var(--site-teal-bright));
          box-shadow: 0 0 0 3px rgba(20,184,166,0.2);
        }
        .timeline-content { padding-bottom: 20px; }
        .timeline-title {
          font-weight: 700;
          font-size: 14.5px;
          color: var(--site-text-head);
          margin-bottom: 4px;
        }
        .dark .timeline-title { color: #f1f5f9; }
        .timeline-desc { font-size: 13px; color: var(--site-text-muted); line-height: 1.6; }
        .dark .timeline-desc { color: #94a3b8; }

        /* ── CTA buttons ── */
        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px;
          border-radius: 13px;
          background: linear-gradient(135deg, var(--site-teal-deep), var(--site-teal-mid), var(--site-teal-bright));
          color: white;
          font-weight: 700;
          font-size: 14.5px;
          font-family: 'DM Sans', sans-serif;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.28s;
          box-shadow: 0 6px 20px rgba(13,148,136,0.32);
          position: relative;
          overflow: hidden;
        }
        .cta-primary::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, transparent, rgba(255,255,255,0.16), transparent);
          transform: translateX(-100%);
          transition: transform 0.5s;
        }
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(13,148,136,0.42); }
        .cta-primary:hover::before { transform: translateX(100%); }

        .cta-wa {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 26px;
          border-radius: 13px;
          background: linear-gradient(135deg, #15803d, #22c55e);
          color: white;
          font-weight: 700;
          font-size: 14.5px;
          font-family: 'DM Sans', sans-serif;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.28s;
          box-shadow: 0 6px 20px rgba(34,197,94,0.28);
        }
        .cta-wa:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(34,197,94,0.4); }

        /* ── Highlight mini cards ── */
        .highlight-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(230,247,246,0.8), rgba(255,255,255,0.9));
          border: 1px solid rgba(20,184,166,0.1);
          transition: all 0.25s;
        }
        .dark .highlight-card {
          background: rgba(10,40,40,0.5);
          border-color: rgba(20,184,166,0.14);
        }
        .highlight-card:hover {
          border-color: rgba(20,184,166,0.28);
          box-shadow: 0 6px 20px rgba(20,184,166,0.1);
          transform: translateY(-2px);
        }

        /* ── CTA bottom strip ── */
        .cta-strip {
          background: linear-gradient(135deg, rgba(230,247,246,0.9), rgba(255,255,255,0.95));
          border: 1px solid rgba(20,184,166,0.15);
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }
        .dark .cta-strip {
          background: rgba(10,35,35,0.7);
          border-color: rgba(20,184,166,0.18);
        }
      `}</style>

      <section id="doctor" className="doctor-section relative py-24 overflow-hidden" ref={sectionRef}>

        {/* Background decorations */}
        <div className="section-bg">
          <div className="bg-blob-tl" />
          <div className="bg-blob-br" />
          <div className="bg-grid-doc" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

          {/* ── Section Header ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <div className="section-badge mx-auto mb-5">
              <Star className="w-3.5 h-3.5 fill-current" />
              Meet Your Doctor
            </div>
            <h2 className="playfair text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight" style={{ color: 'var(--site-text-head)' }}>
              Expertise You Can{' '}
              <span className="italic" style={{ color: 'var(--site-teal-deep)' }}>Trust,</span>
              <br />
              Care You Can{' '}
              <span className="italic" style={{ color: 'var(--site-teal-mid)' }}>Feel</span>
            </h2>
            <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--site-text-muted)' }}>
              JIPMER-trained. Fellowship-certified. Bringing world-class medicine to your doorstep.
            </p>
          </motion.div>

          {/* ── Main Grid ── */}
          <div className="grid lg:grid-cols-5 gap-8 xl:gap-12 items-start">

            {/* ── LEFT: Doctor Profile Card ── */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="doctor-card">
                {/* Teal ribbon */}
                <div className="jipmer-ribbon">
                  <span>✦</span>
                  JIPMER Alumnus — India's #1 Medical Institute
                  <span>✦</span>
                </div>

                {/* Avatar + name */}
                <div className="p-8 text-center">
                  {/* Rectangular stable photo frame */}
                  <div className="flex justify-center mb-6">
                    <div className="avatar-frame">
                      <div className="avatar-inner">
                        <img
                          src={doctorImg}
                          alt="Dr. R. Hariprasad"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="verified-badge mx-auto mb-3">
                    <CheckCircle className="w-3 h-3" />
                    Verified Physician
                  </div>

                  <h3 className="playfair text-[22px] font-bold mb-1" style={{ color: 'var(--site-text-head)' }}>
                    Dr. R. Hariprasad
                  </h3>
                  <p className="text-sm font-medium" style={{ color: 'var(--site-teal-mid)' }}>
                    MBBS., MD., (JIPMER) · Fellowship in Clinical Cardiology
                  </p>

                  {/* Doctor quote */}
                  <div className="quote-card mt-5 text-left">
                    <p className="text-sm italic leading-relaxed" style={{ color: 'var(--site-text-body)' }}>
                      "Every patient deserves the same quality of care I'd give my own family — delivered with compassion, precision, and dignity."
                    </p>
                    <p className="text-xs font-semibold mt-2" style={{ color: 'var(--site-teal-mid)' }}>
                      — Dr. Hariprasad
                    </p>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center justify-center gap-1 mt-5">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.8 + i * 0.08, type: 'spring' }}
                        className="text-xl"
                        style={{ color: 'var(--site-teal-mid)' }}
                      >
                        ★
                      </motion.span>
                    ))}
                    <span className="text-sm ml-2" style={{ color: 'var(--site-text-muted)' }}>5.0 / 5</span>
                  </div>
                </div>

                {/* Credentials */}
                <div className="px-6 pb-6 space-y-2.5">
                  <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--site-text-muted)' }}>
                    Qualifications
                  </p>
                  {credentials.map((c, i) => (
                    <motion.div
                      key={i}
                      className="cred-pill"
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.14 }}
                      onMouseEnter={() => setHoveredCred(i)}
                      onMouseLeave={() => setHoveredCred(null)}
                    >
                      <div className={`cred-icon bg-gradient-to-br ${c.color}`}>
                        <c.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="cred-abbr">{c.label}</div>
                        <div className="cred-sub">{c.sub}</div>
                      </div>
                      <motion.div className="ml-auto" animate={{ x: hoveredCred === i ? 4 : 0 }}>
                        <ChevronRight className="w-4 h-4" style={{ color: 'var(--site-text-muted)' }} />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Card CTAs */}
                <div className="px-6 pb-6 grid grid-cols-2 gap-3">
                  <a href="tel:+919486894678" className="cta-primary justify-center text-sm py-3 px-4">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/919486894678?text=Hello%20Dr.%20Hariprasad%2C%20I%20would%20like%20to%20consult%20with%20you."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-wa justify-center text-sm py-3 px-4"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT: Content Panel ── */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="lg:col-span-3 space-y-5"
            >
              {/* Stats */}
              <div className="grid grid-cols-4 gap-3" ref={statsRef}>
                {stats.map((s, i) => (
                  <StatCard key={i} stat={s} index={i} inView={statsInView} />
                ))}
              </div>

              {/* Tabs */}
              <div className="tab-bar">
                {tabs.map(tab => (
                  <button
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab === 'about' ? '👤 About' : tab === 'journey' ? '📍 Journey' : '🩺 Expertise'}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <AnimatePresence mode="wait">

                {/* ABOUT */}
                {activeTab === 'about' && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.32 }}
                    className="space-y-4"
                  >
                    <div className="doctor-card p-6">
                      <h4 className="playfair text-xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--site-text-head)' }}>
                        <Stethoscope className="w-5 h-5" style={{ color: 'var(--site-teal-mid)' }} />
                        Who is Dr. Hariprasad?
                      </h4>
                      <div className="space-y-3 leading-relaxed text-[14.5px]" style={{ color: 'var(--site-text-body)' }}>
                        <p>
                          Dr. R. Hariprasad is a distinguished physician trained at{' '}
                          <strong style={{ color: 'var(--site-text-head)' }}>JIPMER (Jawaharlal Institute of Postgraduate Medical Education & Research)</strong>{' '}
                          — ranked India's #1 medical institution — holding both his MBBS and MD from this premier institution.
                        </p>
                        <p>
                          With over{' '}
                          <strong style={{ color: 'var(--site-text-head)' }}>10 years of clinical experience</strong>{' '}
                          and a specialized{' '}
                          <strong style={{ color: 'var(--site-text-head)' }}>Fellowship in Clinical Cardiology</strong>,
                          he brings rare expertise in cardiac care, internal medicine, and complex diagnostics — typically found only in top hospitals — directly to patients' homes.
                        </p>
                        <p>
                          As the founder of{' '}
                          <strong style={{ color: 'var(--site-text-head)' }}>KH Clinical Care</strong>,
                          Dr. Hariprasad's mission is simple: no patient should have to travel to receive expert, compassionate medical attention.
                        </p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        { icon: '🏛️', title: 'JIPMER Trained',     desc: "India's #1 ranked medical institution" },
                        { icon: '❤️', title: 'Cardiology Fellow', desc: 'Specialized cardiac care expertise' },
                        { icon: '🏠', title: 'Home Visits',        desc: 'Brings expert care to your doorstep' },
                        { icon: '📋', title: 'Holistic Care',      desc: 'From diagnosis to full recovery support' },
                      ].map((h, i) => (
                        <motion.div
                          key={i}
                          className="highlight-card"
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.09 }}
                        >
                          <span className="text-2xl">{h.icon}</span>
                          <div>
                            <p className="font-semibold text-sm" style={{ color: 'var(--site-text-head)' }}>{h.title}</p>
                            <p className="text-xs mt-0.5" style={{ color: 'var(--site-text-muted)' }}>{h.desc}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* JOURNEY */}
                {activeTab === 'journey' && (
                  <motion.div
                    key="journey"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.32 }}
                  >
                    <div className="doctor-card p-6">
                      <h4 className="playfair text-xl font-bold mb-6 flex items-center gap-2" style={{ color: 'var(--site-text-head)' }}>
                        <BookOpen className="w-5 h-5" style={{ color: 'var(--site-teal-mid)' }} />
                        A Decade of Dedication
                      </h4>
                      <div className="space-y-5">
                        {timeline.map((item, i) => (
                          <motion.div
                            key={i}
                            className="timeline-item"
                            initial={{ opacity: 0, x: -18 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.13 }}
                          >
                            <div className="timeline-year">{item.year}</div>
                            <div className="timeline-content">
                              <div className="timeline-title">{item.title}</div>
                              <div className="timeline-desc">{item.desc}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* EXPERTISE */}
                {activeTab === 'expertise' && (
                  <motion.div
                    key="expertise"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.32 }}
                    className="space-y-3"
                  >
                    <div className="doctor-card p-6">
                      <h4 className="playfair text-xl font-bold mb-1" style={{ color: 'var(--site-text-head)' }}>
                        Areas of Clinical Expertise
                      </h4>
                      <p className="text-sm mb-5" style={{ color: 'var(--site-text-muted)' }}>
                        Comprehensive care across a wide spectrum of medical specialties.
                      </p>
                      <div className="space-y-2">
                        {expertise.map((item, i) => (
                          <motion.div
                            key={i}
                            className="expertise-chip"
                            initial={{ opacity: 0, x: -14 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.07 }}
                          >
                            <div className="chip-dot" />
                            {item}
                            <ArrowRight className="w-3.5 h-3.5 ml-auto opacity-25" />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="doctor-card p-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
                             style={{ background: 'linear-gradient(135deg, var(--site-teal-mid), var(--site-teal-bright))' }}>
                          <Heart className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-sm" style={{ color: 'var(--site-text-head)' }}>Cardiac Specialist On Call</p>
                          <p className="text-xs mt-0.5" style={{ color: 'var(--site-text-muted)' }}>
                            Fellowship in Clinical Cardiology — advanced ECG, cardiac emergencies, heart disease management available at home.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom CTA strip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="cta-strip p-5 flex flex-col sm:flex-row items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-wide">
                      Available Now
                    </span>
                  </div>
                  <p className="font-bold" style={{ color: 'var(--site-text-head)' }}>
                    Book a home consultation with Dr. Hariprasad
                  </p>
                  <p className="text-sm" style={{ color: 'var(--site-text-muted)' }}>
                    Response guaranteed within 30 minutes
                  </p>
                </div>
                <div className="flex gap-3 flex-shrink-0">
                  <a href="tel:+919486894678" className="cta-primary text-sm py-3 px-5">
                    <Phone className="w-4 h-4" />
                    Call
                  </a>
                  <a
                    href="https://wa.me/919486894678?text=Hello%20Dr.%20Hariprasad%2C%20I%20would%20like%20to%20book%20a%20home%20consultation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-wa text-sm py-3 px-5"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}