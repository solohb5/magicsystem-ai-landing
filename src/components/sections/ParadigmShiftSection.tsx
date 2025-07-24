'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ParadigmShiftSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-magic-dark to-magic-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The Great <span className="magic-text-glow">Paradigm Shift</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            While everyone else builds tools to replace you, we build the enhancement that makes you unstoppable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Traditional AI - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-300 mb-2">Traditional AI</h3>
                <p className="text-red-400 font-semibold">Replacement Model</p>
              </div>
              
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  Removes human from the process
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  Generic, one-size-fits-all solutions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  Static capabilities that don't evolve
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
                  Disconnected tools and workflows
                </li>
              </ul>
            </div>
          </motion.div>

          {/* VS indicator */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 z-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-magic-dark border-4 border-magic-cyan rounded-full w-16 h-16 flex items-center justify-center font-bold text-magic-cyan"
            >
              VS
            </motion.div>
          </div>

          {/* MagicSystem AI - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-magic-purple/20 to-magic-cyan/20 rounded-2xl p-8 border border-magic-cyan/50 shadow-magic-glow">
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-magic-cyan to-magic-purple rounded-full flex items-center justify-center">
                  <span className="text-3xl">🧠⚡</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">MagicSystem AI</h3>
                <p className="text-magic-cyan font-semibold">Enhancement Model</p>
              </div>
              
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-magic-cyan rounded-full mr-3"></span>
                  Amplifies human intelligence and creativity
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-magic-cyan rounded-full mr-3"></span>
                  Adaptive specialists that learn your style
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-magic-cyan rounded-full mr-3"></span>
                  Evolving ecosystem that grows with you
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-magic-cyan rounded-full mr-3"></span>
                  Seamlessly connected intelligence network
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-2xl md:text-3xl font-bold">
            Everyone else is building robots to <span className="text-red-400">replace</span> you.
            <br />
            We're building the enhancement that makes you{' '}
            <span className="magic-text-glow">unstoppable</span>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}