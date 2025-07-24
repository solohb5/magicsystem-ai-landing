'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Button from '../ui/Button'

export default function VideoDemo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isPlaying, setIsPlaying] = useState(false)

  const handleBookCall = () => {
    document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="py-24 px-6 bg-magic-gray">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            The <span className="magic-text-glow">Writer's Room</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Watch Hans directing his AI specialists in real-time. See how authentic creativity 
            meets superhuman speed in the ultimate creative collaboration.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mb-12"
        >
          <div className="relative aspect-video bg-magic-dark rounded-3xl overflow-hidden border-4 border-magic-cyan/30 shadow-magic-glow-lg">
            {!isPlaying ? (
              // Video Thumbnail/Placeholder
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-magic-dark via-magic-gray to-magic-dark">
                <div className="text-center">
                  {/* Play Button */}
                  <motion.button
                    onClick={() => setIsPlaying(true)}
                    className="relative w-24 h-24 mb-8 mx-auto"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-magic-cyan to-magic-purple rounded-full flex items-center justify-center shadow-magic-glow">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 border-4 border-magic-cyan rounded-full opacity-50"
                    />
                  </motion.button>

                  {/* Preview Text */}
                  <h3 className="text-2xl font-bold text-white mb-4">
                    "My Voice, My Vision, 100x Output"
                  </h3>
                  <p className="text-gray-300 mb-6">
                    See how Hans transforms 10 dormant scripts into active projects using his specialist network
                  </p>
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <span>🎬 2:30 minutes</span>
                    <span>🧠 Real AI collaboration</span>
                    <span>✨ Authentic creativity</span>
                  </div>
                </div>

                {/* Background animation */}
                <motion.div
                  animate={{ 
                    opacity: [0.1, 0.3, 0.1],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-magic-cyan/10 to-magic-purple/10 pointer-events-none"
                />
              </div>
            ) : (
              // Embedded Video (Vimeo placeholder)
              <div className="absolute inset-0 bg-magic-dark flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-magic-cyan to-magic-purple rounded-full flex items-center justify-center animate-spin">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <p>Loading video...</p>
                  <p className="text-sm text-gray-400 mt-2">
                    (Vimeo embed would be integrated here)
                  </p>
                </div>
              </div>
            )}

            {/* Video overlay elements */}
            <div className="absolute top-4 left-4">
              <div className="bg-black/50 rounded-lg px-3 py-1 text-sm text-white">
                🔴 LIVE: Writer's Room
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4">
              <div className="bg-black/50 rounded-lg px-3 py-1 text-sm text-white">
                13 Specialists Active
              </div>
            </div>
          </div>

          {/* Video Stats/Features */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-8 bg-magic-dark rounded-2xl px-8 py-4 border border-magic-cyan/30">
            <div className="text-center">
              <div className="text-magic-cyan font-bold">10x</div>
              <div className="text-xs text-gray-400">Speed</div>
            </div>
            <div className="text-center">
              <div className="text-magic-purple font-bold">100%</div>
              <div className="text-xs text-gray-400">Authentic</div>
            </div>
            <div className="text-center">
              <div className="text-white font-bold">∞</div>
              <div className="text-xs text-gray-400">Potential</div>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-12 mt-16"
        >
          <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
            "I'm not just working faster—I'm thinking at a completely different level. 
            It's like having a <span className="magic-text-glow">world-class creative team</span> that never sleeps."
          </blockquote>
          <cite className="text-magic-cyan font-semibold text-lg">— Hans Brofeldt, Creator of MagicSystem AI</cite>
        </motion.div>

        {/* Video highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl">
              ⚡
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Real-Time Direction</h4>
            <p className="text-gray-400">Watch Hans give natural language instructions to his specialists</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl">
              🧬
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Organic Collaboration</h4>
            <p className="text-gray-400">See how specialists build on each other's work naturally</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl">
              🎭
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Authentic Voice</h4>
            <p className="text-gray-400">Every output maintains Hans's unique creative signature</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-6">
            See how this could <span className="magic-text-glow">transform your work</span>?
          </h3>
          <Button 
            onClick={handleBookCall}
            size="lg"
            className="px-10 py-4"
          >
            Schedule Your Breakthrough Call →
          </Button>
        </motion.div>
      </div>
    </section>
  )
}