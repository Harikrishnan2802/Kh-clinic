import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ui/ScrollProgress'
import BackToTop from './components/ui/BackToTop'
import FloatingEmergency from './components/ui/FloatingEmergency'
import WhatsAppButton from './components/ui/WhatsAppButton'
import CursorGlow from './components/ui/CursorGlow'
import HeroSection from './components/sections/HeroSection'
import StatsSection from './components/sections/StatsSection'
import AboutSection from './components/sections/AboutSection'
import DoctorSection from './components/sections/DoctorSection'
import ServicesSection from './components/sections/ServicesSection'
import WhyChooseSection from './components/sections/WhyChooseSection'
import ProcessSection from './components/sections/ProcessSection'
import TestimonialsSection from './components/sections/TestimonialsSection'
import ServiceAreaSection from './components/sections/ServiceAreaSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      {!isLoading && (
        <div className="relative">
          <CursorGlow />
          <ScrollProgress />
          <Navbar />

          <main>
            <HeroSection />
            <StatsSection />
            <AboutSection />
            <DoctorSection />       {/* ← NEW: Doctor Bio Section */}
            <ServicesSection />
            <WhyChooseSection />
            <ProcessSection />
            <TestimonialsSection />
            <ServiceAreaSection />
            <ContactSection />
          </main>

          <Footer />
          <BackToTop />
          <FloatingEmergency />
          <WhatsAppButton />
        </div>
      )}
    </>
  )
}

export default App