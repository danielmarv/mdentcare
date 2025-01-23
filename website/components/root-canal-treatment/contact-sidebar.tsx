import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export function ContactSidebar() {
  return (
    <Card className="p-6 mt-6">
      <h3 className="text-xl font-bold mb-6">Contact Us</h3>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="h-5 w-5 text-[#31c77f] mt-1" />
          <p>Equatorial Mall, Next to Bank of Africa, Bombo Road - Kampala</p>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-[#31c77f]" />
          <p>+256 704 021 094</p>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-[#31c77f]" />
          <p>info@identalcare.ug</p>
        </div>
      </div>
    </Card>
  )
}

