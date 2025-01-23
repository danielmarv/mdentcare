import { Phone } from "lucide-react"

export function EmergencyContact() {
  return (
    <div className="mt-6 p-8 bg-[#0f1b4c] text-white rounded-lg">
      <p className="text-sm mb-4">If you have any emergency Doctors need, simply call our 24 hour emergency</p>
      <h3 className="text-xl font-bold mb-4">
        Your personal case manager will ensure that you receive the best possible care.
      </h3>
      <div className="flex items-center gap-2">
        <Phone className="h-5 w-5" />
        <span className="text-2xl font-bold">+256 704 021 094</span>
      </div>
    </div>
  )
}

