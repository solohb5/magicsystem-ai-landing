'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const steps = [
  {
    number: 1,
    title: "Identify",
    subtitle: "Your core bottleneck revealed",
    description: "We analyze your workflow to find the one constraint limiting your entire system.",
    icon: "🔍",
    color: "from-red-500 to-orange-500"
  },
  {
    number: 2,
    title: "Design", 
    subtitle: "First specialist emerges",
    description: "A custom AI specialist materializes, specifically trained to handle your unique bottleneck.",
    icon: "🧬",
    color: "from-orange-500 to-yellow-500"
  },
  {
    number: 3,
    title: "Multiply",
    subtitle: "System recognizes needs",
    description: "As you work, the system identifies new opportunities and spawns additional specialists.",
    icon: "⚡",
    color: "from-yellow-500 to-green-500"
  },
  {
    number: 4,
    title: "Evolve",
    subtitle: "New specialists spawn",
    description: "Your ecosystem grows organically, with each specialist triggering the emergence of others.",
    icon: "🌱",
    color: "from-green-500 to-blue-500"
  },
  {
    number: 5,
    title: "Compound",
    subtitle: "Exponential growth",
    description: "Specialists work together in symphony, creating multiplication effects beyond linear scaling.",
    icon: "🚀",
    color: "from-blue-500 to-purple-500"
  }
]

export default function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section ref={ref} className="py-24 px-6 bg-magic-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 neural-bg opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            How It <span className="magic-text-glow">Works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch your personal AI ecosystem emerge through our 5-step transformation process.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-magic-cyan via-magic-purple to-magic-cyan opacity-50 hidden md:block" />

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
                onViewportEnter={() => setActiveStep(index)}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} mb-8 md:mb-0`}>
                  <div className="bg-magic-gray/50 rounded-2xl p-8 border border-gray-700 hover:border-magic-cyan/50 transition-all duration-500 transform hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-2xl mr-4`}>
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                        <p className="text-magic-cyan font-semibold">{step.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Step Number Circle */}
                <div className="relative z-20 flex-shrink-0">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-magic-cyan to-magic-purple flex items-center justify-center text-2xl font-bold text-white shadow-magic-glow"
                    animate={activeStep === index ? { scale: 1.2 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.number}
                  </motion.div>
                  {activeStep === index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute inset-0 rounded-full border-4 border-magic-cyan animate-ping"
                    />
                  )}
                </div>

                {/* Specialist Cards Animation */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} mt-8 md:mt-0`}>
                  <div className="grid grid-cols-2 gap-4 opacity-70">
                    {Array.from({ length: Math.min(step.number * 2, 8) }, (_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                        className="bg-magic-gray/30 rounded-lg p-3 border border-gray-600 text-center"
                      >
                        <div className="text-sm text-magic-cyan font-semibold">Specialist {i + 1}</div>
                        <div className="text-xs text-gray-400 mt-1">Active</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Result Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-magic-cyan/20 to-magic-purple/20 rounded-3xl p-12 border border-magic-cyan/30">
            <h3 className="text-3xl font-bold mb-4">
              The Result: <span className="magic-text-glow">Your Personal AI Ecosystem</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A living, breathing network of AI specialists that evolve with your needs, 
              multiply your capabilities, and transform you into a cyborg entrepreneur.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-magic-cyan mb-2">100x</div>
                <div className="text-gray-300">Capability Multiplication</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-magic-purple mb-2">24/7</div>
                <div className="text-gray-300">Always-On Intelligence</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">∞</div>
                <div className="text-gray-300">Endless Evolution</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}