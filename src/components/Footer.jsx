import { motion } from 'framer-motion'
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Why Choose Us', href: '#why-us' },
  { name: 'Process', href: '#process' },
  { name: 'Testimonials', href: '#testimonials' },
]

const services = [
  { name: 'Doctor Home Visits', href: '#services' },
  { name: 'Nursing Care', href: '#services' },
  { name: 'Elderly Care', href: '#services' },
  { name: 'Post-Hospitalization', href: '#services' },
  { name: 'Diagnostic Services', href: '#services' },
  { name: 'Physiotherapy', href: '#services' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="relative bg-slate-900 dark:bg-slate-950 text-white overflow-hidden">
      {/* Top Gradient Border */}
      <div className="h-1 bg-gradient-to-r from-medical-500 via-teal-500 to-cyan-500" />

      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-medical-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-900/20 rounded-full blur-3xl" />
      </div>

      <div className="relative section-padding mx-auto max-w-7xl py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-medical-500 to-teal-500 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">KH Clinical</span>
                <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">Home Visit Care</span>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Bringing compassionate, professional healthcare to your doorstep. Your health, our priority.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-medical-600 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-medical-400 transition-colors text-sm flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-slate-400 hover:text-medical-400 transition-colors text-sm flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919952200808" className="flex items-start gap-3 text-slate-400 hover:text-medical-400 transition-colors">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">+91 99522 00808</span>
                </a>
              </li>
              <li>
                <a href="mailto:khclinicalcare@gmail.com" className="flex items-start gap-3 text-slate-400 hover:text-medical-400 transition-colors">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">khclinicalcare@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Puducherry, India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} KH Clinical Home Visit Care. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-slate-500 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>for better healthcare</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
