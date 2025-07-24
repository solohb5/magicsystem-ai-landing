'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import Button from '../ui/Button'

const caseStudies = [
  {
    title: "I AM ACTOR",
    subtitle: "From Struggling Actor to Platform Builder",
    before: "Struggling actor with just an idea",
    after: "Platform builder with 13+ specialists",
    timeline: "6 months",
    result: "Complete transformation",
    icon: "🎭",
    gradient: "from-purple-600 to-pink-600"
  },
  {
    title: "Magic Write",
    subtitle: "From Dormant Scripts to Active Production", 
    before: "10 scripts gathering dust",
    after: "Full act completed in one morning",
    timeline: "1 session",
    result: "100% authentic, 10x speed",
    icon: "✍️",
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    title: "Magic Money",
    subtitle: "From Knowledge Gaps to Strategic Empire",
    before: "Business knowledge gaps holding back growth",
    after: "Strategic empire builder with expert insights",
    timeline: "3 months", 
    result: "50x business capability",
    icon: "💰",
    gradient: "from-green-600 to-emerald-600"
  }
]

export default function CaseStudiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleBookCall = () => {
    document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-magic-gray to-magic-dark">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="magic-text-glow">Transformation</span> Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real people, real results. See how MagicSystem AI multiplied their capabilities beyond what they thought possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative bg-magic-dark/80 rounded-2xl p-8 border border-gray-700 hover:border-magic-cyan/50 transition-all duration-500 hover:shadow-magic-glow transform hover:-translate-y-2">
                {/* Icon and title */}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${study.gradient} rounded-2xl flex items-center justify-center text-2xl transform group-hover:scale-110 transition-transform duration-300`}>
                    {study.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-magic-cyan font-semibold">{study.subtitle}</p>
                </div>

                {/* Before/After */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Before:</div>
                      <div className="text-gray-200">{study.before}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-magic-cyan rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">After:</div>
                      <div className="text-white font-semibold">{study.after}</div>
                    </div>
                  </div>
                </div>

                {/* Timeline and result */}
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-400">Timeline</div>
                      <div className="text-magic-purple font-semibold">{study.timeline}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Result</div>
                      <div className="text-magic-cyan font-semibold">{study.result}</div>
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-magic-cyan/5 to-magic-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
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
          <h3 className="text-3xl font-bold mb-6">
            Ready to write your <span className="magic-text-glow">transformation story</span>?
          </h3>
          <Button 
            onClick={handleBookCall}
            size="lg"
            className="px-10 py-4"
          >
            Book Your Discovery Call →
          </Button>
        </motion.div>
      </div>
    </section>
  )
}