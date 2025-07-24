'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-8 py-24 relative overflow-hidden">
      
      {/* Premium animated background */}
      <div className="absolute inset-0 bg-mesh-gradient opacity-20 animate-gradient-shift" />
      <div 
        className="absolute inset-0 bg-energy-gradient opacity-30 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 217, 255, 0.1), rgba(124, 58, 237, 0.05), transparent 70%)`
        }}
      />

      <div className="max-w-5xl mx-auto text-center z-10 space-y-16 flex-1 flex flex-col justify-center animate-breathe">
        
        {/* Premium headline with advanced effects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[0.85] mb-8 tracking-tight">
            <span className="relative inline-block">
              <span 
                className="bg-premium-text bg-clip-text text-transparent animate-premium-glow font-display"
                style={{
                  backgroundSize: '200% 200%',
                  filter: 'drop-shadow(0 0 30px rgba(0, 217, 255, 0.3)) drop-shadow(0 0 60px rgba(124, 58, 237, 0.2))'
                }}
              >
                MAGICSYSTEM
              </span>
              <div className="absolute inset-0 bg-shimmer bg-clip-text text-transparent animate-text-shimmer opacity-40" />
            </span>
            <br />
            <span className="relative inline-block">
              <span className="bg-holographic-text bg-clip-text text-transparent animate-holographic font-display">
                AI
              </span>
            </span>
          </h1>
          
          <div className="relative">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-200 leading-relaxed max-w-4xl mx-auto mb-4">
              The <span className="font-semibold text-white">$100M Capability Multiplier</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Reserved for visionaries who refuse to settle for{' '}
              <span className="relative">
                <span className="text-red-400 font-medium">human limitations</span>
                <span className="absolute -inset-1 bg-red-500/20 blur-sm animate-pulse-soft rounded" />
              </span>
            </p>
          </div>
        </motion.div>

        {/* Premium content section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-12"
        >
          {/* Exclusive positioning */}
          <div className="relative">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
              While others struggle with <span className="text-gray-500 line-through">productivity hacks</span>,
              <br />
              <span className="text-white font-medium">elite performers access exponential capabilities</span>
            </p>
            
            <div className="inline-flex items-center bg-gradient-to-r from-magic-cyan/10 to-magic-purple/10 rounded-full px-6 py-3 border border-magic-cyan/30 backdrop-blur-sm">
              <div className="w-2 h-2 bg-magic-cyan rounded-full mr-3 animate-energy-pulse" />
              <span className="text-magic-cyan font-semibold text-sm uppercase tracking-wider">
                Invitation Only • 10x Minimum ROI Guaranteed
              </span>
            </div>
          </div>
          
          {/* Premium CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-gradient-to-r from-magic-cyan via-magic-purple to-magic-cyan text-white font-bold px-12 py-5 rounded-xl shadow-holographic hover:shadow-premium-glow transition-all duration-500 text-xl animate-gradient-shift overflow-hidden"
            style={{ backgroundSize: '200% 200%' }}
          >
            <span className="relative z-10">Access The Breakthrough →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </motion.button>

          {/* Scarcity indicator */}
          <div className="relative">
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-xl p-4 border border-red-500/30 backdrop-blur-sm inline-block animate-pulse-soft">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-ping" />
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '0.4s' }} />
                </div>
                <span className="text-red-300 font-semibold">
                  Only <span className="text-red-400 font-bold text-lg">3 founding positions</span> remaining
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Enhanced scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center space-y-3 text-magic-cyan/70"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Discover More</span>
          <div className="relative">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <div className="absolute inset-0 bg-magic-cyan/20 rounded-full blur-md animate-energy-pulse" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}