'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Button from '../ui/Button'

const callBenefits = [
  "Your personal multiplication opportunity analysis",
  "Custom specialist ecosystem design for your unique needs", 
  "Exact roadmap to 10-100x output in your field",
  "Investment details and exclusive equity options",
  "Assessment of your readiness for transformation"
]

export default function FoundingPartnerSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleBookCall = () => {
    document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-magic-gray to-magic-dark relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-magic-purple/10 via-transparent to-magic-cyan/10" />
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-magic-cyan/5 to-magic-purple/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Exclusive badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-magic-cyan/20 to-magic-purple/20 rounded-full px-6 py-2 border border-magic-cyan/50">
            <span className="w-2 h-2 bg-magic-cyan rounded-full mr-3 animate-pulse"></span>
            <span className="text-magic-cyan font-semibold">EXCLUSIVE OPPORTUNITY</span>
          </div>
        </motion.div>

        {/* Main header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-magic-cyan to-magic-purple bg-clip-text text-transparent">
            FOUNDING PARTNER
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            OPPORTUNITY
          </h3>
          <div className="flex items-center justify-center space-x-8 text-lg">
            <div className="text-center">
              <div className="text-magic-cyan font-bold text-2xl">5 Spots Only</div>
              <div className="text-gray-400">Exclusive Access</div>
            </div>
            <div className="w-1 h-12 bg-gradient-to-b from-magic-cyan to-magic-purple"></div>
            <div className="text-center">
              <div className="text-magic-purple font-bold text-2xl">Lifetime Access</div>
              <div className="text-gray-400">No Recurring Fees</div>
            </div>
            <div className="w-1 h-12 bg-gradient-to-b from-magic-cyan to-magic-purple"></div>
            <div className="text-center">
              <div className="text-white font-bold text-2xl">Shape the Future</div>
              <div className="text-gray-400">Co-Creator Status</div>
            </div>
          </div>
        </motion.div>

        {/* Value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-magic-dark/80 rounded-3xl p-12 border-2 border-magic-cyan/30 shadow-magic-glow-lg mb-12"
        >
          <h3 className="text-3xl font-bold text-center text-white mb-8">
            What You'll Discover on Your Call:
          </h3>
          
          <div className="space-y-6">
            {callBenefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-magic-cyan to-magic-purple rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-lg text-gray-200 leading-relaxed">{benefit}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Urgency and scarcity */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-12"
        >
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/30 mb-8">
            <h4 className="text-2xl font-bold text-white mb-4">
              ⚠️ Limited Time Opportunity
            </h4>
            <p className="text-gray-300 mb-4">
              We're only accepting 5 founding partners to ensure each receives the personalized attention 
              required for successful transformation.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-red-400 font-bold">3 spots remaining</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">Next cohort opens 2025</span>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <Button 
            onClick={handleBookCall}
            size="lg"
            className="text-2xl px-16 py-6 mb-6 transform hover:scale-105 transition-all duration-300"
          >
            Book Your Partnership Call →
          </Button>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.5 }}
            className="text-xl text-gray-300 font-semibold"
          >
            30 minutes that could change everything
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 2 }}
            className="mt-4 text-sm text-gray-400"
          >
            No commitment required • Just an exploration of what's possible
          </motion.div>
        </motion.div>

        {/* Social proof testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="bg-magic-gray/50 rounded-2xl p-8 border border-gray-700">
            <blockquote className="text-lg text-gray-300 mb-4 italic">
              "This isn't just another AI tool. It's a fundamental shift in how ambitious people can operate. 
              The multiplication effect is real, and the potential is unlimited."
            </blockquote>
            <cite className="text-magic-cyan font-semibold">— Early Alpha Tester</cite>
          </div>
        </motion.div>
      </div>
    </section>
  )
}