"use client"

import { useState } from "react"
import { SmileIcon as Tooth } from "lucide-react"
import { Button } from "@/components/ui/button"
import { dentalServices } from "@/data/services"
import type { BookingFormData } from "@/types/booking"

interface ServiceSelectionProps {
  formData: BookingFormData
  setFormData: (data: BookingFormData) => void
  onNext: () => void
}

export function ServiceSelection({ formData, setFormData, onNext }: ServiceSelectionProps) {
  const [category, setCategory] = useState("All")
  const categories = ["All", "Cosmetic Dentistry", "Endodontics"]

  const filteredServices = dentalServices.filter((service) => category === "All" || service.category === category)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Select Category</h2>
        <div className="flex gap-2">
          {categories.map((cat) => (
            <Button key={cat} variant={category === cat ? "default" : "outline"} onClick={() => setCategory(cat)}>
              {cat}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Select Service</h2>
        <div className="grid grid-cols-2 gap-4">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`p-4 border rounded-lg cursor-pointer ${
                formData.service?.id === service.id ? "border-primary bg-primary/5" : "border-border"
              }`}
              onClick={() => setFormData({ ...formData, service })}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Tooth className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{service.title}</h3>
                  <div className="text-sm text-muted-foreground mt-1">
                    <div>Duration: {service.duration}</div>
                    <div>Price: UGX {service.price.toLocaleString()}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={onNext} disabled={!formData.service}>
          Next: Date & Time
        </Button>
      </div>
    </div>
  )
}

