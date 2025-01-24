import Link from "next/link"
import { Check } from "lucide-react"

const treatments = [
  "Invisible Braces",
  "Teeth Cleaning",
  "Dental Dentures",
  "Teeth Scaling & Polishing",
  "Teeth Fillings",
  "Surgical Tooth Extraction",
  "Dental Implants",
  "Crowns & Bridges",
]

export default function TreatmentSidebar() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-xl font-bold bg-[#0D47A1] text-white p-4 -mx-6 -mt-6 rounded-t-lg">TREATMENTS</h2>
      <ul className="mt-6 space-y-4">
        {treatments.map((treatment) => (
          <li key={treatment} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            <Link href={`/treatments/${treatment.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-blue-600">
              {treatment}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

