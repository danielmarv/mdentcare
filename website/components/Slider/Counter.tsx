"use client"

import { useState, useEffect, useRef } from "react"
import { animate } from "framer-motion"

interface CounterProps {
  from: number
  to: number
  duration?: number
}

export function Counter({ from, to, duration = 2 }: CounterProps) {
  const [value, setValue] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const controls = animate(from, to, {
            duration,
            onUpdate(value) {
              setValue(value)
            },
          })
          return () => controls.stop()
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [from, to, duration])

  return <span ref={countRef}>{Math.round(value)}</span>
}

