'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Button from '../ui/Button'

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleBookCall = () => {
    document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-bg">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-magic-dark via-magic-gray to-magic-dark" />
      
      {/* Interactive background elements */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 217, 255, 0.05), transparent 40%)`
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Main logo/brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-white via-magic-cyan to-magic-purple bg-clip-text text-transparent">
            MAGICSYSTEM AI
          </h1>
        </motion.div>

        {/* Main headline with typewriter effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Stop being the{' '}
            <motion.span
              className="relative inline-block"
              initial={{ scale: 1 }}
              animate={{ scale: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <span className="text-red-400">bottleneck</span>
              <motion.div
                className="absolute inset-0 border-2 border-red-400 rounded"
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
              />
            </motion.span>
            .
            <br />
            Start being{' '}
            <span className="magic-text-glow text-magic-cyan">superhuman</span>.
          </h2>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <Button 
            onClick={handleBookCall}
            size="lg"
            className="text-xl px-12 py-6 transform hover:scale-105 transition-all duration-300"
          >
            Book Your Transformation Call →
          </Button>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-4 text-sm text-gray-400"
          >
            <span className="text-magic-cyan font-semibold">5 partnerships remaining</span>
          </motion.p>
        </motion.div>

        {/* Subtle value proposition */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            While others build robots to replace humans, we build the{' '}
            <span className="text-magic-purple font-semibold">cyborg enhancement system</span>{' '}
            that makes humans unstoppable.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-magic-cyan rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-magic-cyan rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}