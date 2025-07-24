'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 py-24 relative">
      <div className="max-w-4xl mx-auto text-center z-10 space-y-12 flex-1 flex flex-col justify-center">
        
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
          
          <button className="bg-gradient-to-r from-magic-cyan to-magic-purple text-white font-semibold px-8 py-4 rounded-lg hover:shadow-magic-glow transform hover:scale-105 transition-all duration-300 text-lg">
            Discover What They Know →
          </button>

          <p className="text-magic-cyan/80 text-sm uppercase tracking-wider">
            5 founding partners only
          </p>
        </motion.div>

      </div>

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-2 text-magic-cyan/60"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}