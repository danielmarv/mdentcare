import Image from "next/image"
import { MapPin, Mail, Phone } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="w-48">
        <Image src="/placeholder.svg" alt="iDental Care" width={200} height={80} className="w-full" />
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-indigo-900 mb-2">Main Branch</h3>
          <div className="flex items-start gap-3 text-gray-600">
            <MapPin className="w-5 h-5 mt-1 text-indigo-900" />
            <div>
              <p>Equatoria Mall Shop No4, Kampala, Uganda.</p>
              <p>Ntinda, Opposite Kampala Hospital</p>
              <p>Bwaise, Next to Former Turskys</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-indigo-900 mb-2">E-MAIL</h3>
          <div className="flex items-center gap-3 text-gray-600">
            <Mail className="w-5 h-5 text-indigo-900" />
            <a href="mailto:info@identalcare.ug" className="hover:text-indigo-900">
              info@identalcare.ug
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-indigo-900 mb-2">PHONE</h3>
          <div className="flex items-center gap-3 text-gray-600">
            <Phone className="w-5 h-5 text-indigo-900" />
            <a href="tel:+256701999907" className="hover:text-indigo-900">
              +256 701 999907
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

