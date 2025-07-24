'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  href?: string
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '',
  href
}: ButtonProps) {
  const baseClasses = "cta-magnetic relative font-semibold rounded-lg transition-all duration-300 cursor-pointer inline-flex items-center justify-center"
  
  const variants = {
    primary: "bg-gradient-to-r from-magic-cyan to-magic-purple text-white shadow-magic-glow hover:shadow-magic-glow-lg hover:scale-105",
    secondary: "border-2 border-magic-cyan text-magic-cyan hover:bg-magic-cyan hover:text-magic-dark hover:shadow-magic-glow"
  }
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="relative z-10"
    >
      {children}
    </motion.span>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
      >
        {buttonContent}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      className={classes}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {buttonContent}
    </motion.button>
  )
}