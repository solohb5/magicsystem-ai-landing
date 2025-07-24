'use client'

import { useEffect } from 'react'

// Custom analytics events
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, properties)
  }
  
  // Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, properties)
  }
  
  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, properties)
  }
}

// Funnel tracking
export const trackFunnelStep = (step: string, section?: string) => {
  trackEvent('funnel_progress', {
    step,
    section,
    timestamp: new Date().toISOString()
  })
}

// CTA click tracking
export const trackCTAClick = (ctaText: string, location: string) => {
  trackEvent('cta_click', {
    cta_text: ctaText,
    location,
    timestamp: new Date().toISOString()
  })
}

// Video interaction tracking
export const trackVideoInteraction = (action: string, video_id?: string) => {
  trackEvent('video_interaction', {
    action,
    video_id,
    timestamp: new Date().toISOString()
  })
}

// Scroll depth tracking
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    depth_percentage: Math.round(depth * 100),
    timestamp: new Date().toISOString()
  })
}

export default function Analytics() {
  useEffect(() => {
    // Track page view
    trackEvent('page_view', {
      page: '/',
      timestamp: new Date().toISOString()
    })

    // Track scroll depth
    let maxDepth = 0
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const depth = scrollTop / docHeight
      
      // Track scroll milestones
      if (depth > maxDepth) {
        maxDepth = depth
        if (depth > 0.25 && maxDepth <= 0.25) trackScrollDepth(0.25)
        if (depth > 0.5 && maxDepth <= 0.5) trackScrollDepth(0.5)
        if (depth > 0.75 && maxDepth <= 0.75) trackScrollDepth(0.75)
        if (depth > 0.9 && maxDepth <= 0.9) trackScrollDepth(0.9)
      }
    }

    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}

// Hook for section visibility tracking
export const useInViewTracking = (sectionName: string) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackFunnelStep('section_view', sectionName)
          }
        })
      },
      { threshold: 0.5 }
    )

    const element = document.getElementById(sectionName)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [sectionName])
}

// A/B Testing utilities
export const getVariant = (testName: string, variants: string[]): string => {
  // Simple hash-based variant assignment
  const userId = localStorage.getItem('user_id') || Math.random().toString(36)
  localStorage.setItem('user_id', userId)
  
  const hash = userId.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0)
    return a & a
  }, 0)
  
  const variantIndex = Math.abs(hash) % variants.length
  const variant = variants[variantIndex]
  
  // Track variant assignment
  trackEvent('ab_test_assignment', {
    test_name: testName,
    variant,
    user_id: userId
  })
  
  return variant
}