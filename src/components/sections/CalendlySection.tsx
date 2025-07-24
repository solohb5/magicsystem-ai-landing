'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CalendlySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="calendar-section" ref={ref} className="py-32 px-6 bg-gradient-to-b from-magic-gray to-magic-dark">
      <div className="max-w-5xl mx-auto">
        {/* Exclusive header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-magic-purple/20 to-magic-cyan/20 rounded-full px-6 py-2 border border-magic-cyan/50 mb-8">
            <span className="w-2 h-2 bg-magic-cyan rounded-full mr-3 animate-pulse"></span>
            <span className="text-magic-cyan font-semibold">EXCLUSIVE DISCOVERY</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            This Isn't for <span className="text-red-400">Everyone</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Only 5 spots available for the next cohort. This conversation will determine if you're ready 
            for what others have discovered.
          </p>
          
          {/* Scarcity indicator */}
          <div className="bg-red-900/20 rounded-2xl p-6 border border-red-500/30 inline-block mb-12">
            <div className="text-red-400 font-bold text-lg mb-2">⚠️ Limited Availability</div>
            <div className="text-white">
              <span className="text-red-400 font-bold text-2xl">3 spots remaining</span> in the current cohort
            </div>
            <div className="text-gray-400 text-sm mt-2">
              Next opportunity: 2025
            </div>
          </div>
        </motion.div>

        {/* What to expect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-magic-dark/80 rounded-3xl p-12 border border-magic-cyan/30 shadow-magic-glow/30 mb-12"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-8">
            What You'll Discover in Your Call:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-magic-cyan to-magic-purple rounded-2xl flex items-center justify-center text-2xl">
                🧠
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Your Potential</h4>
              <p className="text-gray-400 text-sm">Identify your unique multiplication opportunity</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-magic-purple to-magic-cyan rounded-2xl flex items-center justify-center text-2xl">
                🎯
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">The Secret</h4>
              <p className="text-gray-400 text-sm">Learn what others have discovered</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-magic-cyan to-magic-purple rounded-2xl flex items-center justify-center text-2xl">
                🚀
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Your Path</h4>
              <p className="text-gray-400 text-sm">Whether you're ready for transformation</p>
            </div>
          </div>
        </motion.div>

        {/* Calendar embed container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-3xl overflow-hidden shadow-magic-glow-lg border-4 border-magic-cyan/30"
        >
          {/* Calendly widget placeholder */}
          <div className="min-h-[600px] flex items-center justify-center bg-gray-50">
            <div className="text-center text-gray-600">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-magic-cyan to-magic-purple rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Discovery Call Booking</h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                Replace this with your Calendly embed to enable exclusive booking access.
              </p>
              <div className="bg-gray-100 rounded-lg p-4 text-left text-sm font-mono text-gray-700 max-w-lg mx-auto">
                <div>Add your Calendly URL here</div>
                <div className="mt-2 text-xs text-gray-500">
                  30-minute discovery sessions only
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            This call will determine if you're ready for what others have discovered.
          </p>
          <p className="text-lg">
            <span className="text-magic-cyan font-semibold">No commitment required</span> • 
            Just an exploration of what's possible
          </p>
        </motion.div>
      </div>
    </section>
  )
}