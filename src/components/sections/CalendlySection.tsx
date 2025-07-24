'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CalendlySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="calendar-section" ref={ref} className="py-24 px-8">
      <div className="max-w-4xl mx-auto space-y-16">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-magic-purple/20 to-magic-cyan/20 rounded-full px-4 py-2 border border-magic-cyan/50">
            <span className="w-2 h-2 bg-magic-cyan rounded-full mr-2 animate-pulse"></span>
            <span className="text-magic-cyan font-medium text-sm">EXCLUSIVE DISCOVERY</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold">
            What You'll Discover in Your Call
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="text-center space-y-3">
            <div className="w-12 h-12 mx-auto bg-gradient-to-br from-magic-cyan to-magic-purple rounded-lg flex items-center justify-center text-xl">
              🧠
            </div>
            <h4 className="font-semibold">Your Potential</h4>
            <p className="text-gray-400 text-sm">Identify your unique multiplication opportunity</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 mx-auto bg-gradient-to-br from-magic-purple to-magic-cyan rounded-lg flex items-center justify-center text-xl">
              🎯
            </div>
            <h4 className="font-semibold">The Secret</h4>
            <p className="text-gray-400 text-sm">Learn what others have discovered</p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 mx-auto bg-gradient-to-br from-magic-cyan to-magic-purple rounded-lg flex items-center justify-center text-xl">
              🚀
            </div>
            <h4 className="font-semibold">Your Path</h4>
            <p className="text-gray-400 text-sm">Whether you're ready for transformation</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl overflow-hidden border border-magic-cyan/30"
        >
          <div className="min-h-[500px] flex items-center justify-center bg-gray-50">
            <div className="text-center text-gray-600 space-y-4">
              <div className="w-12 h-12 mx-auto bg-gradient-to-r from-magic-cyan to-magic-purple rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">Discovery Call Booking</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Replace this with your Calendly embed to enable exclusive booking access.
              </p>
              <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-700 max-w-lg mx-auto">
                <div>Add your Calendly URL here</div>
                <div className="text-xs text-gray-500 mt-1">
                  30-minute discovery sessions only
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center space-y-3"
        >
          <p className="text-gray-400">
            This call will determine if you're ready for what others have discovered.
          </p>
          <p className="text-lg">
            <span className="text-magic-cyan font-medium">No commitment required</span> • 
            Just an exploration of what's possible
          </p>
        </motion.div>

      </div>
    </section>
  )
}