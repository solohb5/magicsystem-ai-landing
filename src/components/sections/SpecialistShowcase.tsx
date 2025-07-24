'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const specialists = [
  {
    id: 1,
    name: "Content Strategist",
    role: "Transforms ideas into compelling narratives",
    icon: "📝",
    specialties: ["Blog Posts", "Scripts", "Copy", "Social Media"],
    connections: [2, 5, 8],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Research Analyst", 
    role: "Uncovers insights and validates assumptions",
    icon: "🔍",
    specialties: ["Market Research", "Data Analysis", "Trend Spotting", "Competitive Intelligence"],
    connections: [1, 3, 6],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    name: "Project Manager",
    role: "Orchestrates workflows and ensures delivery",
    icon: "📊",
    specialties: ["Planning", "Coordination", "Timeline Management", "Resource Allocation"],
    connections: [2, 4, 7],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    name: "Marketing Expert",
    role: "Amplifies reach and drives growth",
    icon: "📈", 
    specialties: ["Campaign Strategy", "SEO", "Social Media", "Growth Hacking"],
    connections: [3, 5, 9],
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    name: "Technical Writer",
    role: "Translates complex concepts into clarity",
    icon: "⚙️",
    specialties: ["Documentation", "Tutorials", "API Docs", "User Guides"],
    connections: [1, 4, 6],
    color: "from-indigo-500 to-blue-500"
  },
  {
    id: 6,
    name: "Data Scientist",
    role: "Extracts patterns and predicts outcomes",
    icon: "📉",
    specialties: ["Analytics", "Modeling", "Predictions", "Optimization"],
    connections: [2, 5, 8],
    color: "from-teal-500 to-green-500"
  },
  {
    id: 7,
    name: "Design Specialist",
    role: "Creates visual experiences that captivate",
    icon: "🎨",
    specialties: ["UI/UX", "Branding", "Graphics", "Prototyping"],
    connections: [3, 8, 9],
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 8,
    name: "Sales Strategist",
    role: "Converts prospects into loyal customers",
    icon: "💼",
    specialties: ["Lead Generation", "Conversion", "Customer Success", "Revenue Growth"],
    connections: [1, 6, 7],
    color: "from-yellow-500 to-orange-500"
  },
  {
    id: 9,
    name: "Innovation Lead",
    role: "Identifies opportunities and drives breakthroughs",
    icon: "💡",
    specialties: ["Ideation", "Product Development", "Strategy", "Future Planning"],
    connections: [4, 7, 8],
    color: "from-violet-500 to-purple-500"
  }
]

export default function SpecialistShowcase() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hoveredSpecialist, setHoveredSpecialist] = useState<number | null>(null)
  const [selectedSpecialist, setSelectedSpecialist] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-24 px-6 bg-gradient-to-b from-magic-dark to-magic-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Your <span className="magic-purple-glow">Living</span> Specialist Network
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Each specialist breathes with intelligence, connected to others in an ever-evolving ecosystem. 
            Hover to see them come alive.
          </p>
        </motion.div>

        {/* Specialist Grid */}
        <div className="relative">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ zIndex: 0 }}>
            {specialists.map(specialist => 
              specialist.connections.map(connectionId => {
                const connectedSpecialist = specialists.find(s => s.id === connectionId)
                if (!connectedSpecialist) return null
                
                const showConnection = hoveredSpecialist === specialist.id || hoveredSpecialist === connectionId
                
                return (
                  <motion.line
                    key={`${specialist.id}-${connectionId}`}
                    x1={`${((specialist.id - 1) % 3) * 33.33 + 16.66}%`}
                    y1={`${Math.floor((specialist.id - 1) / 3) * 33.33 + 16.66}%`}
                    x2={`${((connectionId - 1) % 3) * 33.33 + 16.66}%`}
                    y2={`${Math.floor((connectionId - 1) / 3) * 33.33 + 16.66}%`}
                    stroke="#00D9FF"
                    strokeWidth="2"
                    opacity={showConnection ? 0.6 : 0.1}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: specialist.id * 0.1 }}
                  />
                )
              })
            )}
          </svg>

          <div className="grid grid-cols-3 gap-8 relative z-10">
            {specialists.map((specialist, index) => (
              <motion.div
                key={specialist.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredSpecialist(specialist.id)}
                onMouseLeave={() => setHoveredSpecialist(null)}
                onClick={() => setSelectedSpecialist(selectedSpecialist === specialist.id ? null : specialist.id)}
              >
                {/* Breathing animation container */}
                <motion.div
                  animate={{ 
                    scale: hoveredSpecialist === specialist.id ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  {/* Specialist Card */}
                  <div className={`bg-magic-dark/80 rounded-2xl p-6 border-2 transition-all duration-500 ${
                    hoveredSpecialist === specialist.id 
                      ? 'border-magic-cyan shadow-magic-glow' 
                      : 'border-gray-700'
                  }`}>
                    {/* Breathing effect */}
                    <motion.div
                      animate={{ 
                        opacity: [0.5, 1, 0.5],
                        scale: [0.95, 1, 0.95]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${specialist.color} opacity-10 pointer-events-none`}
                    />

                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${specialist.color} rounded-2xl flex items-center justify-center text-2xl transform group-hover:rotate-12 transition-transform duration-300`}>
                      {specialist.icon}
                    </div>

                    {/* Name and Role */}
                    <h3 className="text-lg font-bold text-white text-center mb-2">
                      {specialist.name}
                    </h3>
                    <p className="text-sm text-gray-400 text-center mb-4">
                      {specialist.role}
                    </p>

                    {/* Specialties - Show on hover or select */}
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: (hoveredSpecialist === specialist.id || selectedSpecialist === specialist.id) ? 'auto' : 0,
                        opacity: (hoveredSpecialist === specialist.id || selectedSpecialist === specialist.id) ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-gray-700 pt-4">
                        <div className="grid grid-cols-2 gap-2">
                          {specialist.specialties.map((specialty, i) => (
                            <motion.div
                              key={specialty}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="text-xs bg-magic-gray/50 rounded-full px-2 py-1 text-center text-magic-cyan"
                            >
                              {specialty}
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* Active indicator */}
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-2 right-2 w-3 h-3 bg-magic-cyan rounded-full"
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-4">
            This is just the beginning. Your ecosystem grows and evolves based on your unique needs.
          </p>
          <p className="text-2xl font-bold">
            <span className="magic-text-glow">9 specialists shown</span> • <span className="text-magic-purple">∞ potential</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}