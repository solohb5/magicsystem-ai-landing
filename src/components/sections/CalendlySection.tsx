'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CalendlySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="calendar-section" ref={ref} className="py-24 px-6 bg-magic-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="magic-text-glow">Book</span> Your Transformation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Choose a time that works for you. This 30-minute conversation could be the catalyst 
            for your 100x multiplication.
          </p>
          
          {/* Booking benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-magic-gray/50 rounded-2xl p-6 border border-gray-700"
            >
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-lg font-semibold text-white mb-2">Deep Analysis</h3>
              <p className="text-gray-400 text-sm">Identify your unique multiplication opportunity</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-magic-gray/50 rounded-2xl p-6 border border-gray-700"
            >
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-white mb-2">Custom Design</h3>
              <p className="text-gray-400 text-sm">Get your personalized specialist ecosystem plan</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-magic-gray/50 rounded-2xl p-6 border border-gray-700"
            >
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-2">Clear Roadmap</h3>
              <p className="text-gray-400 text-sm">Leave with exact steps to 10-100x capability</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Calendly embed container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white rounded-3xl overflow-hidden shadow-magic-glow-lg border-4 border-magic-cyan/30"
        >
          {/* Calendly widget placeholder */}
          <div className="min-h-[700px] flex items-center justify-center bg-gray-50">
            <div className="text-center text-gray-600">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-magic-cyan to-magic-purple rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Calendly Integration Ready</h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                Replace this placeholder with your actual Calendly embed code to enable booking.
              </p>
              <div className="bg-gray-100 rounded-lg p-4 text-left text-sm font-mono text-gray-700 max-w-lg mx-auto">
                <div>Calendly inline widget code goes here</div>
                <div className="mt-2 text-xs text-gray-500">
                  Visit calendly.com for embed instructions
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional trust signals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-magic-cyan font-bold text-lg">30 Minutes</div>
              <div className="text-gray-400 text-sm">Focused conversation</div>
            </div>
            <div className="text-center">
              <div className="text-magic-purple font-bold text-lg">No Commitment</div>
              <div className="text-gray-400 text-sm">Just exploration</div>
            </div>
            <div className="text-center">
              <div className="text-white font-bold text-lg">High Value</div>
              <div className="text-gray-400 text-sm">Actionable insights guaranteed</div>
            </div>
          </div>
        </motion.div>

        {/* Final reminder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            Still have questions? This call will answer everything specific to your situation.
          </p>
          <div className="inline-flex items-center bg-red-900/20 rounded-full px-6 py-2 border border-red-500/30">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse"></span>
            <span className="text-red-400 font-semibold">Only 3 founding partner spots remaining</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}