'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const mysteryStories = [
  {
    quote: "I transformed 10 dormant projects into active revenue streams. The shift in capability was instant and profound.",
    author: "Hans, Creator"
  },
  {
    quote: "I'm accomplishing in days what took months before. It's like having capabilities I never thought possible.",
    author: "Founding Partner"
  },
  {
    quote: "This isn't just productivity—it's operating at a completely different level of human potential.",
    author: "Early Adopter"
  }
]

export default function CaseStudiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleBookCall = () => {
    document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="py-32 px-6 bg-magic-gray">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            What Others Have <span className="magic-text-glow">Discovered</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real transformations from those who found the secret. Their results speak for themselves.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mysteryStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-magic-dark/80 rounded-2xl p-8 border border-gray-700 hover:border-magic-cyan/50 transition-all duration-500 hover:shadow-magic-glow/30 h-full">
                <div className="flex flex-col h-full">
                  <div className="text-6xl text-magic-cyan/20 mb-4">"</div>
                  
                  <blockquote className="text-lg text-gray-200 leading-relaxed flex-grow mb-6">
                    {story.quote}
                  </blockquote>
                  
                  <div className="border-t border-gray-700 pt-4">
                    <cite className="text-magic-cyan font-semibold not-italic">
                      — {story.author}
                    </cite>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8">
            Are you ready to discover what's possible?
          </h3>
          <button
            onClick={handleBookCall}
            className="bg-gradient-to-r from-magic-cyan to-magic-purple text-white font-semibold px-10 py-4 rounded-lg hover:shadow-magic-glow transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Book Your Discovery Call →
          </button>
        </motion.div>
      </div>
    </section>
  )
}