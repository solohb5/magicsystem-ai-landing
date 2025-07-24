'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-magic-dark to-stone-800" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-stone-800/10" />
      
      {/* Subtle texture */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px, 30px 30px'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16">
        
        {/* Hero Section */}
        <div className="pt-24 pb-32">
          
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left mb-16"
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

          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-stone-100 leading-tight mb-16">
              Ever feel like you're capable of so much more?
            </h2>
            
            <div className="space-y-8 mb-16">
              <p className="text-xl md:text-2xl text-stone-300 leading-relaxed">
                Most people spend years stuck doing things the hard way. 
                What if there was a different approach?
              </p>
              
              <p className="text-lg text-stone-400 leading-relaxed">
                I used to think I'd hit my limits. Then I discovered how to multiply 
                what I was already good at.
              </p>
              
              <p className="text-lg text-stone-300 leading-relaxed">
                Now I help others do the same. It's not about working harder — 
                it's about working with precision.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-start space-y-6">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-stone-50 text-stone-900 font-medium px-8 py-4 rounded-sm transition-all duration-300 hover:bg-warm-50 hover:shadow-xl"
              >
                <span className="relative z-10">Start the conversation</span>
                <div className="absolute inset-0 bg-warm-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" />
              </motion.button>
              
              <p className="text-warm-400 text-sm font-medium">
                Currently working with 5 clients this month
              </p>
            </div>
          </motion.div>
        </div>

        {/* Productivity Claim Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center py-32"
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-stone-100 leading-tight max-w-5xl mx-auto">
            This system will tend to{' '}
            <span 
              className="text-magic-cyan font-semibold"
              style={{ 
                textShadow: '0 0 30px rgba(0, 217, 255, 0.4)' 
              }}
            >
              100x your productivity
            </span>{' '}
            within a week.
          </h2>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center py-32"
        >
          <h3 className="font-display text-4xl md:text-5xl font-medium text-stone-200 leading-tight mb-12">
            Don't believe me?
          </h3>
          
          <div className="space-y-8">
            <p className="text-2xl text-stone-300 font-light">
              I'll show you.
            </p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-magic-cyan text-magic-dark font-semibold px-12 py-6 rounded-sm text-xl transition-all duration-300 hover:shadow-magic-glow-lg"
            >
              <span className="relative z-10">Book a call</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-sm" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center space-y-3 text-stone-400">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-xs uppercase tracking-widest font-medium"
          >
            Scroll to explore
          </motion.div>
          <motion.div 
            className="w-px h-12 bg-gradient-to-b from-warm-400/60 to-transparent"
            animate={{ scaleY: [1, 1.2, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  )
}