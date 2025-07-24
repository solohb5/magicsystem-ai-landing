'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ParadigmShiftSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleBookCall = () => {
    document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="py-24 px-8 bg-gradient-to-b from-magic-dark/50 to-magic-gray/50">
      <div className="max-w-4xl mx-auto space-y-16">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            This Isn't for <span className="text-red-400">Everyone</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Only 5 spots available for the next cohort. This conversation will determine if you're ready for what others have discovered.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center space-y-8"
        >
          <div className="bg-red-900/20 rounded-xl p-6 border border-red-500/30 inline-block">
            <div className="text-red-400 font-bold mb-2">⚠️ Limited Availability</div>
            <div className="text-white">
              <span className="text-red-400 font-bold text-xl">3 spots remaining</span> in current cohort
            </div>
            <div className="text-gray-400 text-sm mt-2">
              Next opportunity: 2025
            </div>
          </div>
          
          <button
            onClick={handleBookCall}
            className="bg-gradient-to-r from-magic-cyan to-magic-purple text-white font-semibold px-8 py-4 rounded-lg hover:shadow-magic-glow transform hover:scale-105 transition-all duration-300 text-lg"
          >
            See If You Qualify →
          </button>
        </motion.div>

      </div>
    </section>
  )
}