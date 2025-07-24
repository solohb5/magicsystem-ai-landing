'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Sophisticated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-magic-dark to-stone-800" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-stone-800/10" />
      
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px, 30px 30px'
        }}
      />
      
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
                
                <h1 className="font-display font-light text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-[0.85] text-stone-50 mb-12">
                  <span 
                    className="block mb-2"
                    style={{ 
                      letterSpacing: '-0.02em',
                      textShadow: '0 1px 3px rgba(0,0,0,0.3)'
                    }}
                  >
                    MAGIC
                  </span>
                  <span 
                    className="block mb-2 text-warm-300"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    SYSTEMS
                  </span>
                  <span 
                    className="block text-magic-cyan font-normal"
                    style={{ 
                      letterSpacing: '0.05em',
                      fontSize: '0.6em',
                      textShadow: '0 0 20px rgba(0, 217, 255, 0.4)'
                    }}
                  >
                    AI
                  </span>
                </h1>
              </motion.div>

              {/* Content section with better spacing */}
              <div className="space-y-16">
                
                {/* Main message */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-4xl"
                >
                  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-stone-100 leading-tight mb-12">
                    Ever feel like you're capable of so much more?
                  </h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    <div className="space-y-8">
                      <p className="text-xl md:text-2xl text-stone-300 leading-relaxed">
                        Most people spend years stuck doing things the hard way. 
                        What if there was a different approach?
                      </p>
                      
                      <p className="text-lg text-stone-400 leading-relaxed">
                        I used to think I'd hit my limits. Then I discovered how to multiply 
                        what I was already good at.
                      </p>
                    </div>

                    {/* Side content with better positioning */}
                    <div className="space-y-8 lg:pt-8">
                      <div className="border-l-2 border-warm-400/40 pl-8">
                        <p className="text-stone-300 leading-relaxed mb-6">
                          Now I help others do the same. It's not about working harder — 
                          it's about working with precision.
                        </p>
                        
                        {/* Refined CTA */}
                        <div className="space-y-6">
                          <motion.button 
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative bg-stone-50 text-stone-900 font-medium px-10 py-4 rounded-sm transition-all duration-300 hover:bg-warm-50 hover:shadow-xl"
                          >
                            <span className="relative z-10">Start the conversation</span>
                            <div className="absolute inset-0 bg-warm-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" />
                          </motion.button>
                          
                          <p className="text-warm-400 text-sm font-medium">
                            Currently working with 5 clients this month
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-12 left-12 z-10"
      >
        <div className="flex items-center space-x-4 text-stone-400">
          <motion.div 
            className="w-px h-16 bg-gradient-to-b from-warm-400/60 to-transparent"
            animate={{ scaleY: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-xs uppercase tracking-widest font-medium"
          >
            Scroll to explore
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}