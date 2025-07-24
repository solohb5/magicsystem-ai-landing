'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  const handleBookCall = () => {
    document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-8 py-24 relative">
      <div className="max-w-4xl mx-auto text-center z-10 space-y-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-white to-magic-cyan bg-clip-text text-transparent">
              MAGICSYSTEM AI
            </span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed max-w-3xl mx-auto">
            While others build robots to replace humans, we build the cyborg enhancement system that makes humans{' '}
            <span className="text-magic-cyan font-medium">unstoppable</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Something extraordinary is happening. A few have discovered it. Most haven't.
          </p>
          
          <button
            onClick={handleBookCall}
            className="bg-gradient-to-r from-magic-cyan to-magic-purple text-white font-semibold px-8 py-4 rounded-lg hover:shadow-magic-glow transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Discover What They Know →
          </button>

          <p className="text-magic-cyan/80 text-sm uppercase tracking-wider">
            5 founding partners only
          </p>
        </motion.div>

      </div>
    </section>
  )
}