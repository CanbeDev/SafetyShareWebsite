"use client"

import { useState, useEffect } from 'react'

interface UseCounterProps {
  end: number
  start?: number
  duration?: number
  suffix?: string
}

export function useCounter({ end, start = 0, duration = 2000, suffix = '' }: UseCounterProps) {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const startValue = start
    const endValue = end

    const timer = setInterval(() => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
      setCount(currentValue)

      if (progress === 1) {
        clearInterval(timer)
      }
    }, 16) // ~60fps

    return () => clearInterval(timer)
  }, [isVisible, start, end, duration])

  const formattedCount = count.toLocaleString() + suffix

  return { count: formattedCount, setIsVisible }
}
