import { Phone } from "lucide-react"

export default function EmergencyBanner() {
  return (
    <div className="bg-[#0D1B3B] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-4">
            <p className="text-lg">If you have any emergency Doctors need, simply call our 24 hour emergency</p>
            <h2 className="text-3xl font-bold">
              Your personal case manager will ensure that
              <br />
              you receive the best possible care.
            </h2>
          </div>
          <div className="text-right">
            <p className="text-lg mb-2">Call Now (toll free)</p>
            <p className="text-4xl font-bold flex items-center gap-2">
              <Phone className="w-8 h-8" />
              +256 704 201 094
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

