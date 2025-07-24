'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
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
    <section ref={ref} className="py-24 px-8">
      <div className="max-w-5xl mx-auto space-y-16">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            What Others Have <span className="text-magic-cyan">Discovered</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real transformations from those who found the secret
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-magic-dark/60 rounded-xl p-6 border border-gray-700/50 hover:border-magic-cyan/30 transition-all duration-300 h-full">
                <div className="space-y-4">
                  <div className="text-4xl text-magic-cyan/30">"</div>
                  
                  <blockquote className="text-gray-200 leading-relaxed">
                    {testimonial.quote}
                  </blockquote>
                  
                  <div className="border-t border-gray-700/50 pt-4">
                    <cite className="text-magic-cyan font-medium not-italic text-sm">
                      — {testimonial.author}
                    </cite>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center space-y-6"
        >
          <h3 className="text-2xl md:text-3xl font-bold">
            Are you ready to discover what's possible?
          </h3>
          <button
            onClick={handleBookCall}
            className="bg-gradient-to-r from-magic-cyan to-magic-purple text-white font-semibold px-8 py-4 rounded-lg hover:shadow-magic-glow transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Book Your Discovery Call →
          </button>
        </motion.div>

      </div>
    </section>
  )
}