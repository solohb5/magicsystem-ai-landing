'use client'

import HeroSection from '../components/sections/HeroSection'
import ParadigmShiftSection from '../components/sections/ParadigmShiftSection'
import MultiplicationDemo from '../components/sections/MultiplicationDemo'
import CaseStudiesSection from '../components/sections/CaseStudiesSection'
import HowItWorksSection from '../components/sections/HowItWorksSection'
import SpecialistShowcase from '../components/sections/SpecialistShowcase'
import VideoDemo from '../components/sections/VideoDemo'
import FoundingPartnerSection from '../components/sections/FoundingPartnerSection'
import FAQSection from '../components/sections/FAQSection'
import FinalChoiceSection from '../components/sections/FinalChoiceSection'
import CalendlySection from '../components/sections/CalendlySection'
import ParticleField from '../components/animations/ParticleField'
import FloatingCTA from '../components/ui/FloatingCTA'
import ExitIntentPopup from '../components/ui/ExitIntentPopup'
import Analytics from '../components/analytics/Analytics'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-magic-dark text-white overflow-x-hidden">
      <Analytics />
      <ParticleField />
      <FloatingCTA />
      <ExitIntentPopup />
      
      <HeroSection />
      <ParadigmShiftSection />
      <MultiplicationDemo />
      <CaseStudiesSection />
      <HowItWorksSection />
      <SpecialistShowcase />
      <VideoDemo />
      <FoundingPartnerSection />
      <FAQSection />
      <FinalChoiceSection />
      <CalendlySection />
    </main>
  )
}
