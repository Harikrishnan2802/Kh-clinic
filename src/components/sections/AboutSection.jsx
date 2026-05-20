import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Heart, Shield, Clock, Award } from 'lucide-react'
import healthcareImage from "../../assets/caring.png";

const features = [
  { icon: Heart, text: 'Compassionate Care' },
  { icon: Shield, text: 'Certified Professionals' },
  { icon: Clock, text: 'Timely Service' },
  { icon: Award, text: 'Quality Assured' },
]

// ─── Structured Data (JSON-LD) ────────────────────────────────────────────────
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://khclinicalcare/#about",           // ← replace
  url: "https://khclinicalcare/#about",             // ← replace
  name: "About KH Clinical – Home Healthcare in Puducherry",
  description:
    "KH Clinical is Puducherry's most trusted home healthcare provider with 10+ years of experience. Certified nurses and healthcare professionals delivering compassionate, quality care at your doorstep.",
  inLanguage: "en-IN",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://khclinicalcare/#website",       // ← replace
    url: "https://khclinicalcare",                  // ← replace
    name: "KH Clinical",                            // ← replace
  },
  about: {
    "@type": "MedicalOrganization",
    name: "KH Clinical",                            // ← replace
    foundingDate: "2014",                           // ← replace if different
    description:
      "KH Clinical provides reliable, personalized home medical care across Puducherry. Our trained healthcare professionals deliver high-quality treatment, monitoring, and support.",
    areaServed: {
      "@type": "City",
      name: "Puducherry",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Certified Home Healthcare Provider",
      },
    ],
    knowsAbout: [
      "Home Nursing Care",
      "Post-Surgery Care",
      "Elderly Care at Home",
      "Physiotherapy at Home",
      "Palliative Care",
    ],
  },
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "@id": "https://khclinicalcare/#organization",   // ← replace
  name: "KH Clinical",                             // ← replace
  url: "https://khclinicalcare",                   // ← replace
  logo: "https://khclinicalcare/logo.png",         // ← replace
  image: "https://khclinicalcare/og-image.jpg",    // ← replace
  telephone: "+919486894678",
  description:
    "Puducherry's most trusted home healthcare provider with 10+ years of experience offering certified nursing care, post-surgery support, and elderly care.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Puducherry",
    addressRegion: "Puducherry",
    addressCountry: "IN",
  },
  foundingDate: "2014",                            // ← replace if different
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    minValue: 10,
  },
  slogan: "Bringing Quality Care to Your Home",
  serviceArea: {
    "@type": "City",
    name: "Puducherry",
  },
}
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutSection() {
  return (
    <>
      {/* ── SEO HEAD ──────────────────────────────────────────────────────── */}
      <Helmet>
        {/* Only add these if this is a standalone /about page.
            If it's a section on the homepage, the HeroSection Helmet already
            covers the primary meta — these will enhance/override for the about
            anchor when shared directly. */}
        <title>About KH Clinical | Trusted Home Healthcare Provider in Puducherry</title>
        <meta
          name="description"
          content="KH Clinical — Puducherry's most trusted home healthcare provider with 10+ years experience. Certified nurses delivering compassionate, personalized care at your home."
        />
        <link rel="canonical" href="https://khclinicalcare/#about" />  {/* ← replace */}

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://khclinicalcare/#about" />
        <meta
          property="og:title"
          content="About KH Clinical | Trusted Home Healthcare in Puducherry"
        />
        <meta
          property="og:description"
          content="10+ years of trusted home healthcare in Puducherry. Compassionate care, certified professionals, and quality-assured service at your doorstep."
        />
        <meta property="og:image" content="https://khclinicalcare/og-image.jpg" /> {/* ← replace */}

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(aboutPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>

      {/* ── ABOUT SECTION ─────────────────────────────────────────────────── */}
      <section
        id="about"
        aria-labelledby="about-heading"
        className="relative py-24 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-950 dark:to-slate-900/50 overflow-hidden"
      >
        {/* Decorative Elements */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-teal-200/20 dark:bg-teal-900/10 rounded-full blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-20 left-0 w-72 h-72 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl" aria-hidden="true" />

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
                      alt="KH Clinical certified nurse providing compassionate home healthcare assistance to a patient in Puducherry"
                      className="w-full h-full object-cover object-[center_22%]"
                      loading="lazy"
                      width={600}
                      height={750}
                    />
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
                  </div>
                </div>

                {/* Floating Experience Card */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-4 -right-4 sm:-right-6 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 p-5 rounded-2xl shadow-xl border border-white/40 dark:border-slate-800/60 max-w-[200px] sm:max-w-xs flex items-center gap-4"
                  aria-label="10 plus years of home healthcare experience"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-md">
                    <Award className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white leading-none">10+</p>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-1">Years Experience</p>
                  </div>
                </motion.div>

                {/* Decorative Dashed Border */}
                <div className="absolute -inset-3 sm:-inset-4 rounded-[2.8rem] border-2 border-dashed border-cyan-200/60 dark:border-slate-800 -z-10" aria-hidden="true" />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Section label — visible but not the h2 */}
              <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 text-sm font-semibold mb-4 border border-teal-100/50 dark:border-teal-900/50">
                About Us
              </span>

              {/* h2 with id for aria-labelledby on <section> */}
              <h2
                id="about-heading"
                className="text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-[1.15] tracking-tight"
              >
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

              {/* Feature Grid — use <ul> for semantic list of services */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0" aria-label="Our key strengths">
                {features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <motion.li
                      key={feature.text}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.08, duration: 0.5 }}
                      whileHover={{ y: -2 }}
                      className="flex items-center gap-3.5 p-4 rounded-xl bg-white/80 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm"
                    >
                      <div className="w-10 h-10 shrink-0 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800/50 flex items-center justify-center" aria-hidden="true">
                        <Icon className="w-5 h-5 text-blue-600 dark:text-cyan-400 stroke-[2.2]" aria-hidden="true" />
                      </div>
                      <span className="font-bold text-slate-800 dark:text-slate-200 text-sm">
                        {feature.text}
                      </span>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}