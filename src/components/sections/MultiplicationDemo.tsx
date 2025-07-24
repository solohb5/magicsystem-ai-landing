'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const specialists = [
  { name: "Content Strategist", icon: "📝", multiplier: 10 },
  { name: "Research Analyst", icon: "🔍", multiplier: 20 },
  { name: "Project Manager", icon: "📊", multiplier: 30 },
  { name: "Marketing Expert", icon: "📈", multiplier: 40 },
  { name: "Technical Writer", icon: "⚙️", multiplier: 50 },
  { name: "Data Scientist", icon: "📉", multiplier: 60 },
  { name: "Design Specialist", icon: "🎨", multiplier: 70 },
  { name: "Sales Strategist", icon: "💼", multiplier: 80 },
  { name: "Operations Manager", icon: "🔧", multiplier: 90 },
  { name: "Innovation Lead", icon: "💡", multiplier: 100 },
]

export default function MultiplicationDemo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [multiplier, setMultiplier] = useState(1)

  const activeSpecialists = specialists.filter(s => s.multiplier <= multiplier)

  return (
    <section ref={ref} className="py-24 px-6 bg-magic-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The <span className="magic-purple-glow">Multiplication</span> Effect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch your capabilities expand as adaptive specialists emerge to handle your specific needs.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Capability Multiplier Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center space-x-4 bg-magic-dark/50 rounded-2xl p-8 border border-magic-cyan/30">
              <span className="text-2xl">Solo Entrepreneur</span>
              <span className="text-4xl">→</span>
              <span className="text-6xl font-bold magic-text-glow">{multiplier}x</span>
              <span className="text-4xl">→</span>
              <span className="text-2xl">Cyborg Entrepreneur</span>
            </div>
          </motion.div>

          {/* Interactive Slider */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <div className="relative">
              <input
                type="range"
                min="1"
                max="100"
                value={multiplier}
                onChange={(e) => setMultiplier(parseInt(e.target.value))}
                className="w-full h-3 bg-magic-dark rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #00D9FF 0%, #7C3AED ${multiplier}%, #1A1A1A ${multiplier}%, #1A1A1A 100%)`
                }}
              />
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>1x Capability</span>
                <span>100x Superhuman</span>
              </div>
            </div>
          </motion.div>

          {/* Specialists Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12"
          >
            {specialists.map((specialist, index) => {
              const isActive = specialist.multiplier <= multiplier
              const shouldAnimate = isActive && specialist.multiplier > multiplier - 10

              return (
                <motion.div
                  key={specialist.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isActive ? 1 : 0.3,
                    scale: isActive ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3, delay: shouldAnimate ? index * 0.1 : 0 }}
                  className={`relative p-4 rounded-xl text-center border-2 transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-br from-magic-cyan/20 to-magic-purple/20 border-magic-cyan/50 shadow-magic-glow'
                      : 'bg-magic-dark/30 border-gray-600'
                  }`}
                >
                  <div className="text-3xl mb-2">{specialist.icon}</div>
                  <div className="text-sm font-semibold text-white">{specialist.name}</div>
                  {shouldAnimate && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-magic-cyan rounded-full flex items-center justify-center text-xs font-bold text-black"
                    >
                      ✨
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </motion.div>

          {/* Real Examples */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="bg-magic-dark/50 rounded-2xl p-8 border border-magic-purple/30"
          >
            <h3 className="text-2xl font-bold text-center mb-6">
              Real Multiplication Examples
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-magic-cyan text-3xl font-bold">1x → 10x</div>
                <div className="text-sm text-gray-300 mt-2">
                  "First specialist handles your biggest bottleneck"
                </div>
              </div>
              <div className="p-4">
                <div className="text-magic-purple text-3xl font-bold">10x → 50x</div>
                <div className="text-sm text-gray-300 mt-2">
                  "Multiple specialists compound each other's work"
                </div>
              </div>
              <div className="p-4">
                <div className="text-white text-3xl font-bold">50x → 100x</div>
                <div className="text-sm text-gray-300 mt-2">
                  "Full ecosystem emerges naturally"
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 25px;
          width: 25px;
          border-radius: 50%;
          background: linear-gradient(45deg, #00D9FF, #7C3AED);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
        }

        .slider::-moz-range-thumb {
          height: 25px;
          width: 25px;
          border-radius: 50%;
          background: linear-gradient(45deg, #00D9FF, #7C3AED);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(0, 217, 255, 0.5);
        }
      `}</style>
    </section>
  )
}