"use client"

import { useEffect } from 'react'
import { useCounter } from '@/hooks/use-counter'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

interface AnimatedCounterProps {
  end: number
  start?: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function AnimatedCounter({ 
  end, 
  start = 0, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  className = '' 
}: AnimatedCounterProps) {
  const { count, setIsVisible } = useCounter({ end, start, duration, suffix })
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 })

  useEffect(() => {
    if (isIntersecting) {
      setIsVisible(true)
    }
  }, [isIntersecting, setIsVisible])

  return (
    <div ref={ref} className={className}>
      {prefix}{count}
    </div>
  )
}
