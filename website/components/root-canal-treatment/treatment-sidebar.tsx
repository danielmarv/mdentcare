import { Card } from "@/components/ui/card"

export function TreatmentsSidebar() {
  const treatments = [
    "Invicible Braces",
    "Teeth Cleaning",
    "Instant Teeth Cleaning",
    "Teeth Scaaling and Polishing",
    "Teeth Fillings",
    "Sugical Tooth Extraction",
    "Dental Implant",
    "Root Canal Treatment",
    "Crowns & Bridges",
    "Full Mouth Rehabilitation",
  ]

  return (
    <Card className="p-6">
      <h3 className="text-xl font-bold mb-6 bg-[#31c77f] text-white p-3">TREATMENTS</h3>
      <div className="space-y-4">
        {treatments.map((treatment) => (
          <div key={treatment} className="flex items-center gap-2 p-3 border-b">
            <div className="h-2 w-2 rounded-full bg-[#31c77f]" />
            <span>{treatment}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}

