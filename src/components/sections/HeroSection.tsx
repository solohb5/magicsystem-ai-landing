'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 py-24 relative">
      
      <div className="max-w-4xl mx-auto text-center z-10 space-y-12 flex-1 flex flex-col justify-center">
        
        {/* Clean, visible headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 
            className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 text-white"
            style={{
              textShadow: '0 0 30px rgba(0, 217, 255, 0.4), 0 0 60px rgba(0, 217, 255, 0.2)',
            }}
          >
            MAGICSYSTEM AI
          </h1>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-gray-200 leading-relaxed">
              Ever feel like you're capable of so much more?
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Most people spend years stuck doing things the hard way.<br />
              What if there was a different approach?
            </p>
          </div>
        </motion.div>

        {/* Human, conversational content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              I used to think I'd hit my limits. Then I discovered how to multiply what I was already good at.
            </p>
            
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Now I help others do the same.
            </p>
          </div>
          
          {/* Simple, honest CTA */}
          <button className="bg-gradient-to-r from-magic-cyan to-magic-purple text-white font-semibold px-8 py-4 rounded-lg hover:shadow-magic-glow transform hover:scale-105 transition-all duration-300 text-lg">
            Let's talk about it →
          </button>

          {/* Honest availability */}
          <p className="text-magic-cyan/80 text-sm">
            Currently taking on 5 new clients this month
          </p>
        </motion.div>

      </div>

      {/* Clean scroll indicator */}
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