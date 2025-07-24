'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Button from '../ui/Button'

export default function FinalChoiceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleBookCall = () => {
    document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center py-24 px-6 bg-gradient-to-b from-magic-dark via-black to-magic-dark relative overflow-hidden">
      {/* Dramatic background effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-magic-cyan/20 via-transparent to-magic-purple/20 blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Two Paths <span className="magic-text-glow">Forward</span>
          </h2>
        </motion.div>

        {/* Path choices */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Path 1 - Status Quo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-900 to-red-900/30 rounded-3xl p-8 border-2 border-red-500/30 h-full">
              <div className="text-center mb-6">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-gray-600 to-red-600 rounded-full flex items-center justify-center text-3xl">
                  ⏳
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Continue as the Bottleneck
                </h3>
              </div>
              
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300">Watch your competitors become superhuman while you stay limited</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300">Keep being the constraint in your own success story</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300">Miss the transformation window while others multiply</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-300">Wonder "what if" as the future passes you by</span>
                </div>
              </div>

              <div className="mt-8 text-center">
                <div className="text-red-400 font-bold text-xl mb-2">Result:</div>
                <div className="text-gray-400">Same limitations, shrinking opportunities</div>
              </div>
            </div>
          </motion.div>

          {/* Path 2 - Transformation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-magic-cyan/20 to-magic-purple/20 rounded-3xl p-8 border-2 border-magic-cyan/50 shadow-magic-glow h-full">
              {/* Glow effect */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-magic-cyan/10 to-magic-purple/10 rounded-3xl pointer-events-none"
              />

              <div className="text-center mb-6 relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-magic-cyan to-magic-purple rounded-full flex items-center justify-center text-3xl">
                  🚀
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  Become Superhuman
                </h3>
              </div>
              
              <div className="space-y-4 text-left relative z-10">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-magic-cyan rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-200">Transform into a cyborg entrepreneur with 100x capabilities</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-magic-cyan rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-200">Build your personal AI ecosystem that grows with your vision</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-magic-cyan rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-200">Become the entrepreneur others study and emulate</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-magic-cyan rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-200">Shape the future as a founding partner in the revolution</span>
                </div>
              </div>

              <div className="mt-8 text-center relative z-10">
                <div className="text-magic-cyan font-bold text-xl mb-2">Result:</div>
                <div className="text-white">Unlimited potential, exponential growth</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Arrow pointing to choice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-12"
        >
          <div className="text-2xl md:text-3xl font-bold text-white mb-8">
            The choice is yours. But choose now.
          </div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl"
          >
            ↓
          </motion.div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="relative"
        >
          <Button 
            onClick={handleBookCall}
            size="lg"
            className="text-2xl px-16 py-8 mb-8 transform hover:scale-110 transition-all duration-500 relative z-10"
          >
            Book Your Call Now →
          </Button>

          {/* Magical effects around button */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-32 h-32 border-2 border-magic-cyan/30 rounded-full"></div>
          </motion.div>
          
          <motion.div
            animate={{ 
              scale: [1.1, 1, 1.1],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-40 h-40 border border-magic-purple/20 rounded-full"></div>
          </motion.div>
        </motion.div>

        {/* Wisdom quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16"
        >
          <blockquote className="text-xl md:text-2xl italic text-gray-300 mb-4">
            "The best time to plant a tree was 20 years ago.<br />
            The second best time is now."
          </blockquote>
          <cite className="text-magic-cyan">— Chinese Proverb</cite>
        </motion.div>

        {/* Final urgency */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
          className="mt-12"
        >
          <div className="bg-red-900/20 rounded-2xl p-6 border border-red-500/30 inline-block">
            <div className="text-red-400 font-bold mb-2">⚠️ Limited Window</div>
            <div className="text-gray-300">3 founding partner spots remaining</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}