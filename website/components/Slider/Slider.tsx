"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { animate } from "framer-motion"
import imag from "../../public/images/do.jpg"
import imag1 from "../../public/images/do.jpg"
import imag2 from "../../public/images/do.jpg"

const slides = [
  {
    image: imag,
    title: "Holding you through the crucial times",
    description: "We are a centre for patients, we are always with you through the most crucial times of your health",
  },
  {
    image: imag1,
    title: "Holding you through the crucial times",
    description: "We are a centre for patients, we are always with you through the most crucial times of your health",
  },
  {
    image: imag2,
    title: "Holding you through the crucial times",
    description: "We are a centre for patients, we are always with you through the most crucial times of your health",
  },
  // Add more slides as needed
]

const stats = [
  {
    icon: () => (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19 8.71429V20H5V8.71429M21 5H3L12 2L21 5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    value: 25,
    suffix: "+",
    label: "Patients Beds",
  },
  {
    icon: () => (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21M9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7C13 9.20914 11.2091 11 9 11ZM23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13M16 3.13C17.7699 3.58317 19.0078 5.17799 19.0078 7C19.0078 8.82201 17.7699 10.4168 16 10.87"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    value: 10000,
    suffix: "+",
    label: "Dialysis",
  },
  {
    icon: () => (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.5 13.5L21 12M19.5 10.5L21 12M21 12H3M12 15.5V14.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 19H15.5M10.5 19V22M13.5 19V22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    value: 100,
    suffix: "+",
    label: "Doctors & Nurses",
  },
  {
    icon: () => (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    value: 12,
    suffix: "+",
    label: "Years of Experience",
  },
]

function Counter({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) {
  const [value, setValue] = useState(from)

  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        setValue(value)
      },
    })

    return () => controls.stop()
  }, [from, to, duration])

  return Math.round(value)
}

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="relative h-[600px] overflow-hidden group">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="relative h-full">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40">
              <div className="container mx-auto h-full flex flex-col justify-center px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white max-w-3xl">{slide.title}</h1>
                <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">{slide.description}</p>
                <div className="flex flex-wrap gap-4">
                  {/* Get Appointment Button */}
                  <button className="px-6 py-3 text-lg font-medium bg-white text-primary hover:bg-white/90 rounded-lg">
                    Get Appointment
                  </button>

                  {/* Learn More Button */}
                  <button className="px-6 py-3 text-lg font-medium text-white border border-white hover:bg-white/20 rounded-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm py-8">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-primary mb-2">
                <stat.icon />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-primary">
                <Counter from={0} to={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-12 w-12 text-white" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))}
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Next slide"
      >
        <ChevronRight className="h-12 w-12 text-white" />
      </button>

      <div className="absolute bottom-32 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

