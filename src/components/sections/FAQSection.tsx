'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const faqs = [
  {
    id: 1,
    question: "How is this different from ChatGPT?",
    answer: "ChatGPT is a single assistant that gives you answers. MagicSystem AI creates an evolving ecosystem of specialized AI that learns your unique style, grows with your needs, and works together to multiply your capabilities. It's the difference between hiring one generalist versus building a world-class specialized team that knows exactly how you work."
  },
  {
    id: 2, 
    question: "What does 100x actually mean?",
    answer: "100x isn't about working 100 times faster—it's about multiplicative capability expansion. Where you could handle 1 project before, you can now orchestrate 10+ simultaneously. Where you needed months for research, it happens in hours. Where you hit bottlenecks, specialists emerge to remove them. It's exponential capability growth, not linear speed increase."
  },
  {
    id: 3,
    question: "Who is this for?",
    answer: "Ambitious visionaries who are currently the bottleneck in their own success. If you have big ideas but find yourself constantly limited by time, expertise, or bandwidth—if you dream of building but spend most time executing—then you're exactly who this is for. This isn't for people who want simple tools; it's for those ready to become cyborg entrepreneurs."
  },
  {
    id: 4,
    question: "Why only 5 partners?",
    answer: "True transformation requires deep personalization. Each founding partner gets their own custom ecosystem designed specifically for their unique vision and working style. We limit to 5 to ensure each receives the intensive attention required for successful multiplication. This isn't a mass product—it's bespoke intelligence enhancement."
  },
  {
    id: 5,
    question: "What's the time commitment?",
    answer: "Initially, 2-4 hours weekly as we design your first specialist and you learn to work together. As your ecosystem grows, the system becomes more autonomous, often requiring just minutes of direction for hours of output. The goal is less time working IN your business, more time working ON your vision."
  },
  {
    id: 6,
    question: "How do I know if I'm ready?",
    answer: "You're ready if you: 1) Have a clear vision bigger than what you can execute alone, 2) Are willing to think differently about how work gets done, 3) Want to multiply your impact, not just optimize your productivity, 4) Are excited by the possibility of human-AI collaboration. If you're curious but unsure, the discovery call will reveal everything."
  }
]

export default function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section ref={ref} className="py-24 px-6 bg-magic-gray">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="magic-text-glow">Intelligent</span> Answers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The most important questions, answered with clarity and depth.
          </p>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-magic-dark/80 rounded-2xl border border-gray-700 overflow-hidden hover:border-magic-cyan/50 transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-magic-gray/30 transition-colors duration-200"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openFAQ === faq.id ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-magic-cyan to-magic-purple rounded-full flex items-center justify-center"
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </motion.div>
              </button>

              {/* Answer */}
              <motion.div
                initial={false}
                animate={{
                  height: openFAQ === faq.id ? 'auto' : 0,
                  opacity: openFAQ === faq.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-700 pt-6">
                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-magic-purple/20 to-magic-cyan/20 rounded-2xl p-8 border border-magic-cyan/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Every question reveals readiness. The discovery call will answer everything 
              specific to your situation and vision.
            </p>
            <button
              onClick={() => document.getElementById('calendar-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-magic-cyan to-magic-purple text-white font-semibold px-8 py-3 rounded-lg hover:shadow-magic-glow transform hover:scale-105 transition-all duration-300"
            >
              Get Your Questions Answered →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}