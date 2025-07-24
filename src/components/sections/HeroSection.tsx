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
          <h1 className="text-6xl md:text-8xl font-black mb-4">
            <span className="bg-gradient-to-r from-white to-magic-cyan bg-clip-text text-transparent">
              MAGICSYSTEM{' '}
            </span>
            <span className="text-magic-cyan magic-text-glow">
              AI
            </span>
          </h1>
        </motion.div>

        {/* Main headline with mystery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            The secret enhancement{' '}
            <span className="text-red-400">others</span>{' '}
            don't want you to know about
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A select few have discovered something that multiplies their capabilities beyond what seems possible. 
            They're not just working differently—they're operating at a completely different level.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <Button 
            onClick={handleBookCall}
            size="lg"
            className="text-xl px-12 py-6 transform hover:scale-105 transition-all duration-300"
          >
            Discover What This Is →
          </Button>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-6 text-sm text-gray-400"
          >
            <span className="text-magic-cyan font-semibold">Only 5 spots available</span> for the next cohort
          </motion.p>
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