"use client"

import { useState } from "react"
import type { BookingFormData } from "@/types/booking"
import { Card } from "@/components/ui/card"
import { ServiceSelection } from "@/components/appointment/service-selection"
import { DateTimeSelection } from "@/components/appointment/data-time-selection"
import { BasicDetails } from "@/components/appointment/basic-details"
import { BookingSummary } from "@/components/appointment/booking-summary"

const steps = ["Service", "Date & Time", "Basic Details", "Summary"]

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<BookingFormData>({
    service: null,
    date: null,
    timeSlot: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    note: "",
  })

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0))

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8 text-primary">Dental Appointment Booking</h1>

      <div className="flex gap-8">
        <Card className="w-48 p-4 space-y-2">
          {steps.map((step, index) => (
            <div
              key={step}
              className={`p-2 rounded-lg ${
                currentStep === index ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              {step}
            </div>
          ))}
        </Card>

        <Card className="flex-1 p-6">
          {currentStep === 0 && <ServiceSelection formData={formData} setFormData={setFormData} onNext={nextStep} />}
          {currentStep === 1 && (
            <DateTimeSelection formData={formData} setFormData={setFormData} onNext={nextStep} onBack={prevStep} />
          )}
          {currentStep === 2 && (
            <BasicDetails formData={formData} setFormData={setFormData} onNext={nextStep} onBack={prevStep} />
          )}
          {currentStep === 3 && <BookingSummary formData={formData} onBack={prevStep} />}
        </Card>
      </div>
    </div>
  )
}

