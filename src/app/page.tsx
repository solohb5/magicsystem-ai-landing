'use client'

import HeroSection from '../components/sections/HeroSection'
import ParadigmShiftSection from '../components/sections/ParadigmShiftSection'
import CaseStudiesSection from '../components/sections/CaseStudiesSection'
import CalendlySection from '../components/sections/CalendlySection'
import ParticleField from '../components/animations/ParticleField'
import Analytics from '../components/analytics/Analytics'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-magic-dark text-white overflow-x-hidden">
      <Analytics />
      <ParticleField />
      
      <HeroSection />
      <ParadigmShiftSection />
      <CaseStudiesSection />
      <CalendlySection />
    </main>
  )
}
