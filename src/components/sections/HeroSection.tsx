'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Sophisticated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-magic-dark to-stone-800" />
      
      {/* Asymmetric layout container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-8 lg:px-12">
          
          {/* Grid-based asymmetric layout */}
          <div className="grid grid-cols-12 gap-8 items-center min-h-screen py-24">
            
            {/* Main content - offset for sophistication */}
            <div className="col-span-12 lg:col-span-10 lg:col-start-1">
              
              {/* Brand name with elegant typography */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mb-16"
              >
                <div className="mb-4">
                  <span className="text-warm-400 text-sm font-medium tracking-[0.2em] uppercase">
                    Cognitive Enhancement Platform
                  </span>
                </div>
                
                <h1 className="font-display font-light text-7xl md:text-8xl lg:text-9xl leading-[0.85] text-stone-50 mb-8">
                  <span 
                    className="block"
                    style={{ 
                      letterSpacing: '-0.02em',
                      textShadow: '0 1px 3px rgba(0,0,0,0.3)'
                    }}
                  >
                    MAGIC
                  </span>
                  <span 
                    className="block text-warm-300"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    SYSTEM
                  </span>
                </h1>
              </motion.div>

              {/* Content grid */}
              <div className="grid grid-cols-12 gap-8 lg:gap-12">
                
                {/* Main message */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="col-span-12 lg:col-span-7"
                >
                  <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-stone-100 leading-tight mb-8">
                    Ever feel like you're capable of so much more?
                  </h2>
                  
                  <div className="space-y-6 text-lg md:text-xl text-stone-300 leading-relaxed">
                    <p>
                      Most people spend years stuck doing things the hard way. 
                      What if there was a different approach?
                    </p>
                    
                    <p className="text-stone-400">
                      I used to think I'd hit my limits. Then I discovered how to multiply 
                      what I was already good at.
                    </p>
                  </div>
                </motion.div>

                {/* Side content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="col-span-12 lg:col-span-5"
                >
                  <div className="space-y-8">
                    <div className="border-l border-warm-400/30 pl-6">
                      <p className="text-stone-400 text-sm leading-relaxed">
                        Now I help others do the same. It's not about working harder — 
                        it's about working with precision.
                      </p>
                    </div>
                    
                    {/* Refined CTA */}
                    <div className="space-y-4">
                      <button className="group relative bg-stone-50 text-stone-900 font-medium px-8 py-4 rounded-sm transition-all duration-300 hover:bg-warm-50 hover:shadow-lg">
                        <span className="relative z-10">Start the conversation</span>
                        <div className="absolute inset-0 bg-warm-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" />
                      </button>
                      
                      <p className="text-warm-400 text-sm">
                        Currently working with 5 clients this month
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Refined scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-8 z-10"
      >
        <div className="flex items-center space-x-3 text-stone-500">
          <div className="w-px h-12 bg-warm-400/30" />
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-xs uppercase tracking-wider"
          >
            Scroll
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}