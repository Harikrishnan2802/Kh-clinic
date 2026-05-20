import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import nurseImage from "../../assets/nurse.png";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Clock3,
  HousePlus,
  Star,
} from "lucide-react";

// ─── Structured Data (JSON-LD) ────────────────────────────────────────────────
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://khclinicalcare/#business",          // ← replace with your URL
  name: "Your Business Name",                          // ← replace
  description:
    "Professional home healthcare services in Puducherry. Certified nurses providing 24/7 compassionate medical care, post-surgery support, and elderly care at your doorstep.",
  url: "https://khclinicalcare",                       // ← replace
  telephone: "+919486894678",
  image: "https://khclinicalcare/og-image.jpg",        // ← replace with absolute OG image URL
  address: {
    "@type": "PostalAddress",
    addressLocality: "Puducherry",
    addressRegion: "Puducherry",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.9416,
    longitude: 79.8083,
  },
  areaServed: {
    "@type": "City",
    name: "Puducherry",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "₹₹",
  serviceType: [
    "Home Nursing Care",
    "Post-Surgery Care",
    "Elderly Care",
    "Physiotherapy at Home",
    "IV Therapy at Home",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you provide home healthcare services in Puducherry?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide certified home healthcare services across all areas of Puducherry, including nursing care, post-surgery support, and elderly care.",
      },
    },
    {
      "@type": "Question",
      name: "Are your nurses certified and experienced?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All our nurses are certified healthcare professionals with extensive experience in home-based medical care.",
      },
    },
    {
      "@type": "Question",
      name: "Is 24/7 home healthcare support available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we offer round-the-clock support for home healthcare needs across Puducherry.",
      },
    },
  ],
};
// ─────────────────────────────────────────────────────────────────────────────

export default function HeroSection() {
  return (
    <>
      {/* ── SEO HEAD ──────────────────────────────────────────────────────── */}
      <Helmet>
        {/* Primary Meta */}
        <title>Home Healthcare Services in Puducherry | Certified Nurses at Your Doorstep</title>
        <meta
          name="description"
          content="Trusted home healthcare in Puducherry. Certified nurses providing 24/7 compassionate care — nursing, post-surgery support & elderly care at your home. Book a visit today."
        />
        <meta
          name="keywords"
          content="home healthcare Puducherry, home nursing care Puducherry, nurse at home Puducherry, elderly care Puducherry, post surgery care Puducherry, 24/7 home nurse Pondicherry"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Your Business Name" />       {/* ← replace */}
        <link rel="canonical" href="https://khclinicalcare/" />   {/* ← replace */}

        {/* Open Graph (Facebook, WhatsApp, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://khclinicalcare/" />
        <meta
          property="og:title"
          content="Home Healthcare Services in Puducherry | Certified Nurses at Your Doorstep"
        />
        <meta
          property="og:description"
          content="Trusted home healthcare in Puducherry. 500+ families trust our certified nurses for 24/7 compassionate care. Book a home visit today."
        />
        <meta property="og:image" content="https://khclinicalcare/og-image.jpg" />  {/* ← replace */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Your Business Name" />             {/* ← replace */}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Home Healthcare Services in Puducherry | Certified Nurses"
        />
        <meta
          name="twitter:description"
          content="Professional home healthcare in Puducherry. Certified nurses, 24/7 support, and 500+ families served. Book a visit now."
        />
        <meta name="twitter:image" content="https://khclinicalcare/og-image.jpg" /> {/* ← replace */}

        {/* Geo Tags (helps local SEO) */}
        <meta name="geo.region" content="IN-PY" />
        <meta name="geo.placename" content="Puducherry" />
        <meta name="geo.position" content="11.9416;79.8083" />
        <meta name="ICBM" content="11.9416, 79.8083" />

        {/* Language */}
        <meta httpEquiv="content-language" content="en-IN" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* ── HERO SECTION (unchanged) ──────────────────────────────────────── */}
      <section
        id="home"
        aria-label="Home Healthcare Services in Puducherry"
        className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50 min-h-[85vh] flex items-center pt-28 pb-20"
      >
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-300/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[120px]" />
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* TRUST BADGE */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-cyan-100 mb-6">
                <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-cyan-700">
                  Trusted Home Healthcare in Puducherry
                </span>
              </div>

              {/* HEADING — h1 with semantic keyword */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Compassionate{" "}
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  Healthcare
                </span>
                <br />
                at Your{" "}
                <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                  Doorstep
                </span>
              </h1>

              {/* DESCRIPTION — p tag with keyword-rich copy */}
              <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-xl">
                Professional medical care, personalized for your loved ones in
                the comfort of your home. Compassionate support from experienced
                healthcare professionals across Puducherry.
              </p>

              {/* FEATURE CARDS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {[
                  { icon: ShieldCheck, title: "Experienced Professionals" },
                  { icon: Clock3, title: "24/7 Support" },
                  { icon: HousePlus, title: "Home Visit Care" },
                ].map((item, index) => (
                  <motion.div
                    whileHover={{ y: -5 }}
                    key={index}
                    className="bg-white/80 backdrop-blur-md border border-white shadow-lg rounded-2xl p-4 flex flex-col items-center text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white mb-3">
                      <item.icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <p className="text-sm font-semibold text-slate-700">{item.title}</p>
                  </motion.div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 mt-10">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="#contact"
                  aria-label="Book a home healthcare visit in Puducherry"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold shadow-xl shadow-cyan-500/20"
                >
                  Book a Visit
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  href="tel:+919486894678"
                  aria-label="Call our home healthcare team in Puducherry"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-emerald-300 bg-white/70 backdrop-blur-md text-emerald-600 font-semibold shadow-lg"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call Now
                </motion.a>
              </div>

              {/* REVIEW CARD */}
              <div
                className="mt-10 inline-flex items-center gap-4 bg-white shadow-xl border border-slate-100 rounded-2xl px-5 py-4"
                aria-label="500+ families trust our home healthcare services — 5 star rating"
              >
                <div className="flex -space-x-3">
                  {[
                    "https://randomuser.me/api/portraits/women/44.jpg",
                    "https://randomuser.me/api/portraits/men/32.jpg",
                    "https://randomuser.me/api/portraits/women/68.jpg",
                    "https://randomuser.me/api/portraits/men/75.jpg",
                  ].map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Happy home healthcare patient ${i + 1}`}
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      loading="lazy"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1" aria-label="5 star rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 font-medium mt-1">
                    Trusted by 500+ families across Puducherry
                  </p>
                </div>
              </div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 blur-3xl rounded-full" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-[40px] overflow-hidden shadow-2xl border border-white/40 h-[600px]"
              >
                <img
                  src={nurseImage}
                  alt="Certified nurse providing compassionate home healthcare to elderly patient in Puducherry"
                  className="w-full h-full object-cover object-center"
                  loading="eager"       // above-the-fold — load immediately
                  fetchpriority="high"  // LCP hint
                  width={600}
                  height={600}
                />
              </motion.div>

              {/* FLOATING CARD TOP */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute top-6 right-6 bg-white/80 backdrop-blur-md rounded-2xl px-5 py-4 shadow-xl border border-white"
                aria-label="500 plus home visits completed"
              >
                <p className="text-2xl font-bold text-slate-900">500+</p>
                <p className="text-sm text-slate-500">Home Visits</p>
              </motion.div>

              {/* FLOATING CARD BOTTOM */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md rounded-2xl px-5 py-4 shadow-xl border border-white"
                aria-label="Certified nurses — professional healthcare team"
              >
                <p className="text-lg font-bold text-slate-900">Certified Nurses</p>
                <p className="text-sm text-slate-500">Professional Healthcare Team</p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}