"use client"

// import { useState } from "react"
// import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import type { BookingFormData, TimeSlot } from "@/types/booking"

interface DateTimeSelectionProps {
  formData: BookingFormData
  setFormData: (data: BookingFormData) => void
  onNext: () => void
  onBack: () => void
}

const timeSlots: TimeSlot[] = [
  { start: "8:30", end: "8:45", available: true },
  { start: "8:45", end: "9:00", available: true },
  { start: "9:00", end: "9:15", available: true },
  { start: "9:15", end: "9:30", available: true },
  { start: "9:30", end: "9:45", available: true },
  { start: "9:45", end: "10:00", available: true },
  // Add more time slots as needed
]

export function DateTimeSelection({ formData, setFormData, onNext, onBack }: DateTimeSelectionProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Select Date</h2>
          <Calendar
            mode="single"
            selected={formData.date || undefined}
            // onSelect={(date: Date) => setFormData({ ...formData, date: date || null })}
            onSelect={(date) => setFormData({ ...formData, date: date || null })}
            className="rounded-md border"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Select Time</h2>
          <div className="space-y-2">
            {timeSlots.map((slot) => (
              <Button
                key={`${slot.start}-${slot.end}`}
                variant={formData.timeSlot?.start === slot.start ? "default" : "outline"}
                className="w-full justify-start"
                onClick={() => setFormData({ ...formData, timeSlot: slot })}
              >
                {slot.start} - {slot.end}
                <span className="ml-2 text-xs">{slot.available ? "Available" : "Booked"}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext} disabled={!formData.date || !formData.timeSlot}>
          Next: Basic Details
        </Button>
      </div>
    </div>
  )
}

