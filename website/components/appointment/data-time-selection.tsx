"use client"

import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { BookingFormData, TimeSlot } from "@/types/booking"

interface DateTimeSelectionProps {
  formData: BookingFormData
  setFormData: (data: BookingFormData) => void
  onNext: () => void
  onBack: () => void
}

const timeSlots: TimeSlot[] = [
  // Morning slots
  { start: "8:30 am", end: "9:00 am", available: 1, period: "Morning" },
  { start: "9:00 am", end: "9:30 am", available: 1, period: "Morning" },
  { start: "9:30 am", end: "10:00 am", available: 1, period: "Morning" },
  { start: "10:00 am", end: "10:30 am", available: 1, period: "Morning" },
  { start: "10:30 am", end: "11:00 am", available: 1, period: "Morning" },
  { start: "11:00 am", end: "11:30 am", available: 1, period: "Morning" },
  { start: "11:30 am", end: "12:00 pm", available: 1, period: "Morning" },
  // Afternoon slots
  { start: "12:00 pm", end: "12:30 pm", available: 1, period: "Afternoon" },
  { start: "12:30 pm", end: "1:00 pm", available: 1, period: "Afternoon" },
  { start: "1:00 pm", end: "1:30 pm", available: 1, period: "Afternoon" },
  { start: "1:30 pm", end: "2:00 pm", available: 1, period: "Afternoon" },
  { start: "2:00 pm", end: "2:30 pm", available: 1, period: "Afternoon" },
  { start: "2:30 pm", end: "3:00 pm", available: 1, period: "Afternoon" },
  { start: "3:00 pm", end: "3:30 pm", available: 1, period: "Afternoon" },
]

export function DateTimeSelection({ formData, setFormData, onNext, onBack }: DateTimeSelectionProps) {
  const morningSlots = timeSlots.filter((slot) => slot.period === "Morning")
  const afternoonSlots = timeSlots.filter((slot) => slot.period === "Afternoon")

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Date & Time</h2>
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <Calendar
            mode="single"
            selected={formData.date || undefined}
            onSelect={(date) => setFormData({ ...formData, date: date || null })}
            className="rounded-lg p-0"
            classNames={{
              months: "space-y-4",
              month: "space-y-4",
              caption: "flex justify-center pt-1 relative items-center",
              caption_label: "text-sm font-medium",
              nav: "flex items-center",
              nav_button: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
              nav_button_previous: "absolute left-1",
              nav_button_next: "absolute right-1",
              table: "w-full border-collapse",
              head_row: "flex",
              head_cell: "text-muted-foreground rounded-md w-9 font-normal text-xs",
              row: "flex w-full mt-2",
              cell: "text-center text-sm relative p-0 hover:bg-gray-100 rounded-md focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-[#38217F]",
              day: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 hover:bg-gray-100 rounded-md",
              day_selected:
                "bg-[#38217F] text-white hover:bg-[#38217F] hover:text-white focus:bg-[#38217F] focus:text-white",
              day_today: "bg-accent text-accent-foreground",
              day_outside: "text-muted-foreground opacity-50",
              day_disabled: "text-muted-foreground opacity-50",
              day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
              day_hidden: "invisible",
            }}
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Time Slot</h3>
          <ScrollArea className="h-[400px] pr-4">
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-sm text-gray-600">Morning</h4>
                <div className="grid grid-cols-2 gap-2">
                  {morningSlots.map((slot) => (
                    <button
                      key={`${slot.start}-${slot.end}`}
                      onClick={() => setFormData({ ...formData, timeSlot: slot })}
                      className={`flex flex-col items-start p-3 text-left border rounded-md hover:border-[#38217F] transition-colors
                        ${
                          formData.timeSlot?.start === slot.start
                            ? "border-[#38217F] bg-[#38217F]/5"
                            : "border-gray-200"
                        }`}
                    >
                      <span className="text-sm">{`${slot.start} - ${slot.end}`}</span>
                      <span className="text-xs text-gray-500">{slot.available} Slots left</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm text-gray-600">Afternoon</h4>
                <div className="grid grid-cols-2 gap-2">
                  {afternoonSlots.map((slot) => (
                    <button
                      key={`${slot.start}-${slot.end}`}
                      onClick={() => setFormData({ ...formData, timeSlot: slot })}
                      className={`flex flex-col items-start p-3 text-left border rounded-md hover:border-[#38217F] transition-colors
                        ${
                          formData.timeSlot?.start === slot.start
                            ? "border-[#38217F] bg-[#38217F]/5"
                            : "border-gray-200"
                        }`}
                    >
                      <span className="text-sm">{`${slot.start} - ${slot.end}`}</span>
                      <span className="text-xs text-gray-500">{slot.available} Slots left</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button variant="ghost" onClick={onBack} className="flex items-center gap-2 text-gray-600">
          <ChevronLeft className="w-4 h-4" />
          GO BACK
        </Button>
        <Button
          onClick={onNext}
          disabled={!formData.date || !formData.timeSlot}
          className="flex items-center gap-2 bg-[#38217F] hover:bg-[#38217F]/90 text-white px-6"
        >
          NEXT: BASIC DETAILS
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

