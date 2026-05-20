import { motion } from "framer-motion";
import nurseImage from "../../assets/nurse.png";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  Clock3,
  HousePlus,
  Star,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50 min-h-[85vh] flex items-center pt-28 pb-20"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-300/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[120px]" />

        {/* GRID */}
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

            {/* HEADING */}
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

            {/* DESCRIPTION */}
            <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-xl">
              Professional medical care, personalized for your loved ones in
              the comfort of your home. Compassionate support from experienced
              healthcare professionals across Puducherry.
            </p>

            {/* FEATURE CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "Experienced Professionals",
                },
                {
                  icon: Clock3,
                  title: "24/7 Support",
                },
                {
                  icon: HousePlus,
                  title: "Home Visit Care",
                },
              ].map((item, index) => (
                <motion.div
                  whileHover={{ y: -5 }}
                  key={index}
                  className="bg-white/80 backdrop-blur-md border border-white shadow-lg rounded-2xl p-4 flex flex-col items-center text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center text-white mb-3">
                    <item.icon className="w-5 h-5" />
                  </div>

                  <p className="text-sm font-semibold text-slate-700">
                    {item.title}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold shadow-xl shadow-cyan-500/20"
              >
                Book a Visit
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="tel:+919486894678"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border border-emerald-300 bg-white/70 backdrop-blur-md text-emerald-600 font-semibold shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
            </div>

            {/* REVIEW CARD */}
            <div className="mt-10 inline-flex items-center gap-4 bg-white shadow-xl border border-slate-100 rounded-2xl px-5 py-4">
              {/* AVATARS */}
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
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>

              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
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
            {/* GLOW */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 blur-3xl rounded-full" />

            {/* IMAGE */}
            <motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative rounded-[40px] overflow-hidden shadow-2xl border border-white/40 h-[600px]"
>
  <img
    src={nurseImage}
    alt="Nurse helping elderly patient"
    className="w-full h-full object-cover object-center"
  />
</motion.div>

            {/* FLOATING CARD TOP */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-6 right-6 bg-white/80 backdrop-blur-md rounded-2xl px-5 py-4 shadow-xl border border-white"
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
            >
              <p className="text-lg font-bold text-slate-900">
                Certified Nurses
              </p>
              <p className="text-sm text-slate-500">
                Professional Healthcare Team
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}