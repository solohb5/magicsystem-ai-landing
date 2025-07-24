'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  life: number
  maxLife: number
  color: string
  pulsePhase: number
  trail: { x: number; y: number; opacity: number }[]
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const particles: Particle[] = []
    const maxParticles = 8

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const colors = ['#00D9FF', '#7C3AED', '#FFFFFF', '#FF6B6B']
    
    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 3 + 1.5,
      opacity: Math.random() * 0.6 + 0.3,
      life: 0,
      maxLife: Math.random() * 400 + 300,
      color: colors[Math.floor(Math.random() * colors.length)],
      pulsePhase: Math.random() * Math.PI * 2,
      trail: []
    })

    const updateParticle = (particle: Particle) => {
      // Update trail
      particle.trail.push({ x: particle.x, y: particle.y, opacity: particle.opacity })
      if (particle.trail.length > 8) {
        particle.trail.shift()
      }
      
      // Update trail opacity
      particle.trail.forEach((point, index) => {
        point.opacity = (index / particle.trail.length) * particle.opacity * 0.5
      })

      particle.x += particle.vx
      particle.y += particle.vy
      particle.life++
      particle.pulsePhase += 0.05

      // Enhanced fade in and out with pulsing
      const baseOpacity = 0.8
      if (particle.life < particle.maxLife * 0.1) {
        particle.opacity = (particle.life / (particle.maxLife * 0.1)) * baseOpacity
      } else if (particle.life > particle.maxLife * 0.9) {
        particle.opacity = (1 - (particle.life - particle.maxLife * 0.9) / (particle.maxLife * 0.1)) * baseOpacity
      } else {
        // Add subtle pulsing effect
        particle.opacity = baseOpacity + Math.sin(particle.pulsePhase) * 0.2
      }

      // Wrap around edges
      if (particle.x < 0) particle.x = canvas.width
      if (particle.x > canvas.width) particle.x = 0
      if (particle.y < 0) particle.y = canvas.height
      if (particle.y > canvas.height) particle.y = 0

      return particle.life < particle.maxLife
    }

    const drawParticle = (particle: Particle) => {
      ctx.save()
      
      // Draw trail
      particle.trail.forEach((point, index) => {
        if (index > 0) {
          ctx.globalAlpha = point.opacity * 0.3
          ctx.strokeStyle = particle.color
          ctx.lineWidth = particle.size * 0.3
          ctx.lineCap = 'round'
          ctx.beginPath()
          ctx.moveTo(particle.trail[index - 1].x, particle.trail[index - 1].y)
          ctx.lineTo(point.x, point.y)
          ctx.stroke()
        }
      })
      
      // Draw main particle with enhanced glow
      ctx.globalAlpha = particle.opacity
      ctx.fillStyle = particle.color
      ctx.shadowBlur = 20 + Math.sin(particle.pulsePhase) * 10
      ctx.shadowColor = particle.color
      
      // Create gradient for particle
      const gradient = ctx.createRadialGradient(
        particle.x, particle.y, 0,
        particle.x, particle.y, particle.size * 2
      )
      gradient.addColorStop(0, particle.color)
      gradient.addColorStop(0.5, particle.color + '80')
      gradient.addColorStop(1, 'transparent')
      
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
      ctx.fill()
      
      // Draw core particle
      ctx.fillStyle = particle.color
      ctx.shadowBlur = 30
      ctx.beginPath()
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
      ctx.fill()
      
      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Add new particles
      while (particles.length < maxParticles) {
        particles.push(createParticle())
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        if (updateParticle(particles[i])) {
          drawParticle(particles[i])
        } else {
          particles.splice(i, 1)
        }
      }

      // Draw premium connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.save()
            const connectionOpacity = (1 - distance / 150) * 0.15
            ctx.globalAlpha = connectionOpacity
            
            // Create gradient for connection line
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            )
            gradient.addColorStop(0, particles[i].color)
            gradient.addColorStop(1, particles[j].color)
            
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1 + (1 - distance / 150) * 1.5
            ctx.lineCap = 'round'
            ctx.shadowBlur = 5
            ctx.shadowColor = particles[i].color
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.restore()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  )
}