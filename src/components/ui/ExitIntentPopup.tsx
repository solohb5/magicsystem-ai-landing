'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Button from './Button'

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if cursor leaves from the top of the page and hasn't been shown before
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true)
        setHasShown(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown])

  const handleBookCall = () => {
    setShowPopup(false)
    document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleClose = () => {
    setShowPopup(false)
  }

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative bg-magic-dark border-2 border-magic-cyan rounded-3xl p-8 max-w-lg w-full mx-4 shadow-magic-glow-lg"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="text-center">
              {/* Icon */}
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: 3 }}
                className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-magic-cyan to-magic-purple rounded-full flex items-center justify-center text-3xl"
              >
                ⚠️
              </motion.div>

              {/* Headline */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Wait! Don't Miss Your <span className="magic-text-glow">Transformation</span>
              </h3>

              {/* Subtext */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                You were just moments away from discovering how to multiply your capabilities by 100x. 
                The cyborg revolution is happening now—don't watch from the sidelines.
              </p>

              {/* Urgency */}
              <div className="bg-red-900/20 rounded-2xl p-4 border border-red-500/30 mb-6">
                <div className="text-red-400 font-bold mb-2">🔥 Limited Time</div>
                <div className="text-sm text-gray-300">
                  Only 3 founding partner spots remain. Once they're gone, 
                  the next opportunity won't be until 2025.
                </div>
              </div>

              {/* Benefits reminder */}
              <div className="text-left mb-6 space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-magic-cyan rounded-full flex-shrink-0"></span>
                  <span className="text-gray-300 text-sm">30-minute discovery call (no commitment)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-magic-cyan rounded-full flex-shrink-0"></span>
                  <span className="text-gray-300 text-sm">Personal multiplication analysis worth $500</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-magic-cyan rounded-full flex-shrink-0"></span>
                  <span className="text-gray-300 text-sm">Custom specialist ecosystem design</span>
                </div>
              </div>

              {/* CTA */}
              <Button 
                onClick={handleBookCall}
                size="lg"
                className="w-full mb-4 text-lg py-4"
              >
                Yes, Book My Transformation Call →
              </Button>

              {/* Alternative */}
              <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-300 text-sm underline transition-colors"
              >
                No thanks, I'll stay limited
              </button>
            </div>

            {/* Magical border animation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-magic-cyan via-magic-purple to-magic-cyan p-0.5 pointer-events-none"
            >
              <div className="bg-magic-dark rounded-3xl w-full h-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}