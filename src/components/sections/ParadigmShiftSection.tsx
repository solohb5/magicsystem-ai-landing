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
    <section ref={ref} className="py-32 px-6 bg-gradient-to-b from-magic-dark to-magic-gray">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            While others struggle with <span className="text-red-400">limitations</span>...
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A select few have discovered something different. They're not just working faster—they're operating at a completely different level of capability.
          </p>
        </motion.div>

        {/* Simple reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto mb-12">
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              What if the solution isn't replacing human intelligence, but enhancing it beyond what you thought possible?
            </p>
            
            <div className="bg-gradient-to-br from-magic-purple/10 to-magic-cyan/10 rounded-2xl p-8 border border-magic-cyan/20 shadow-magic-glow/50">
              <p className="text-xl md:text-2xl font-semibold text-white mb-4">
                "I'm not just working faster—I'm thinking at a completely different level."
              </p>
              <p className="text-magic-cyan">— Someone who discovered this</p>
            </div>
          </div>
          
          <button
            onClick={handleBookCall}
            className="bg-gradient-to-r from-magic-cyan to-magic-purple text-white font-semibold px-8 py-4 rounded-lg hover:shadow-magic-glow transform hover:scale-105 transition-all duration-300"
          >
            See What They Discovered →
          </button>
        </motion.div>
      </div>
    </section>
  )
}