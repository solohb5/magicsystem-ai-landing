'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Button from './Button'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollTop / docHeight

      setScrollProgress(progress)
      
      // Show CTA after 30s or 50% scroll
      const pageLoadTime = sessionStorage.getItem('pageLoadTime')
      const timeThreshold = pageLoadTime ? Date.now() - parseInt(pageLoadTime) > 30000 : false
      const scrollThreshold = progress > 0.5
      
      setIsVisible(timeThreshold || scrollThreshold)
    }

    // Store page load time
    sessionStorage.setItem('pageLoadTime', Date.now().toString())

    window.addEventListener('scroll', handleScroll)
    
    // Also show after 30 seconds
    const timer = setTimeout(() => setIsVisible(true), 30000)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const handleBookCall = () => {
    document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const getCTAText = () => {
    if (scrollProgress < 0.2) return "Book Your Transformation Call"
    if (scrollProgress < 0.4) return "See Your Multiplication Potential"
    if (scrollProgress < 0.6) return "Join the Cyborg Revolution" 
    if (scrollProgress < 0.8) return "Claim Your Partnership Call"
    return "Book Your Call Now"
  }

  return (
    <>
      {/* Scroll progress indicator */}
      <motion.div
        className="scroll-indicator fixed top-0 left-0 h-1 bg-gradient-to-r from-magic-cyan to-magic-purple z-50"
        style={{ 
          width: `${scrollProgress * 100}%`,
          transformOrigin: 'left'
        }}
      />

      {/* Mobile sticky bottom CTA */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-0 left-0 right-0 z-40 p-4 bg-gradient-to-t from-magic-dark via-magic-dark/95 to-transparent backdrop-blur-sm md:hidden"
          >
            <Button 
              onClick={handleBookCall}
              className="w-full py-4 text-lg font-bold"
            >
              {getCTAText()} →
            </Button>
            <div className="text-center mt-2 text-xs text-gray-400">
              <span className="text-magic-cyan">3 spots remaining</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop floating CTA */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block"
          >
            <div className="bg-magic-dark/90 backdrop-blur-sm rounded-2xl p-6 border border-magic-cyan/30 shadow-magic-glow max-w-xs">
              <div className="text-center mb-4">
                <div className="text-sm text-gray-400 mb-2">Ready to transform?</div>
                <div className="text-lg font-bold text-white mb-2">{getCTAText()}</div>
                <div className="text-xs text-magic-cyan">3 partnership spots left</div>
              </div>
              <Button 
                onClick={handleBookCall}
                size="sm"
                className="w-full"
              >
                Book Now →
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}