import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Phone } from 'lucide-react'
import { useTheme } from '../hooks/useTheme'
import khLogo from "../assets/logo.jpeg";

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Doctors', href: '#doctor' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-strong shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="section-padding mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="relative">
                {/* Clinic logo image — circular, replaces Heart icon */}
                <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg shadow-medical-500/20 group-hover:shadow-medical-500/40 transition-shadow">
                  <img
                    src={khLogo}
                    alt="KH Clinical Care"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                  KH Clinical
                </span>
                <span className="text-[10px] text-medical-600 dark:text-medical-400 font-medium tracking-wider uppercase">
                  Home Visit Care
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-medical-600 dark:hover:text-medical-400 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-medical-500 to-teal-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-slate-600" />
                ) : (
                  <Sun className="w-5 h-5 text-slate-300" />
                )}
              </button>

              <a
                href="tel:+919486894678"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-medical-600 to-teal-500 text-white text-sm font-semibold shadow-lg shadow-medical-500/20 hover:shadow-medical-500/40 transition-shadow"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-600 dark:text-slate-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 max-w-full bg-white dark:bg-slate-900 shadow-2xl"
            >
              <div className="p-6 pt-24">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-4 py-3 rounded-xl text-slate-700 dark:text-slate-200 font-medium hover:bg-medical-50 dark:hover:bg-slate-800 hover:text-medical-600 dark:hover:text-medical-400 transition-colors"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                  <a
                    href="tel:+919486894678"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-gradient-to-r from-medical-600 to-teal-500 text-white font-semibold shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+91 94868 94678</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}