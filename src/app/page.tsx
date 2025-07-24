'use client'

import HeroSection from '../components/sections/HeroSection'
import ParticleField from '../components/animations/ParticleField'
import Analytics from '../components/analytics/Analytics'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-magic-dark text-white overflow-x-hidden">
      <Analytics />
      <ParticleField />
      
      <HeroSection />
    </main>
  )
}
