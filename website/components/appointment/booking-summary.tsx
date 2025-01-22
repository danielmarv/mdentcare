"use client"

import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import type { BookingFormData } from "@/types/booking"

interface BookingSummaryProps {
  formData: BookingFormData
  onBack: () => void
}

export function BookingSummary({ formData, onBack }: BookingSummaryProps) {
  const handleConfirm = async () => {
    // Here you would typically submit the booking to your backend
    console.log("Booking confirmed:", formData)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Booking Summary</h2>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4 p-4 border rounded-lg">
          <div>
            <h3 className="font-medium">Service</h3>
            <p className="text-muted-foreground">{formData.service?.title}</p>
          </div>
          <div>
            <h3 className="font-medium">Price</h3>
            <p className="text-muted-foreground">UGX {formData.service?.price.toLocaleString()}</p>
          </div>
          <div>
            <h3 className="font-medium">Date</h3>
            <p className="text-muted-foreground">
              {formData.date ? format(formData.date, "MMMM d, yyyy") : "Not selected"}
            </p>
          </div>
          <div>
            <h3 className="font-medium">Time</h3>
            <p className="text-muted-foreground">
              {formData.timeSlot ? `${formData.timeSlot.start} - ${formData.timeSlot.end}` : "Not selected"}
            </p>
          </div>
        </div>

        <div className="p-4 border rounded-lg">
          <h3 className="font-medium mb-2">Personal Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Name</p>
              <p>
                {formData.firstName} {formData.lastName}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p>{formData.email}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p>{formData.phone}</p>
            </div>
            {formData.note && (
              <div className="col-span-2">
                <p className="text-sm text-muted-foreground">Note</p>
                <p>{formData.note}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={handleConfirm}>Confirm Booking</Button>
      </div>
    </div>
  )
}

