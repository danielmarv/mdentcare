"use client"

import { Check } from "lucide-react"
import Link from "next/link"

const treatments = [
  "Invisible Braces",
  "Teeth Cleaning",
  "Instant Teeth Cleaning",
  "Dental Dentures",
  "Scaling and Polishing",
  "Teeth Fillings",
  "Surgical Tooth Extraction",
]

export default function TreatmentsSidebar() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 bg-[#2E2B6B] text-white p-3">TREATMENTS</h2>
      <ul className="space-y-4">
        {treatments.map((treatment) => (
          <li key={treatment} className="flex items-center gap-3">
            <Check className="h-5 w-5 text-[#2E2B6B]" />
            <Link href={`/treatment/${treatment.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-[#2E2B6B]">
              {treatment}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

