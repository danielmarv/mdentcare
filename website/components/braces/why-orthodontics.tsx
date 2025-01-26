import Image from "next/image"
import ima from "../../public/images/doct.jpg"

export default function WhyOrthodontics() {
  const treatments = [
    "Invisible Braces",
    "Teeth Cleaning",
    "Instant Teeth Cleaning",
    "Dental Dentures",
    "Teeth Scaling & Polishing",
    "Teeth Fillings",
    "Dental Implant",
    "Root Canal Treatment",
    "Crowns & Bridges",
    "Full Mouth Rehabilitation",
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#1e3a8a]">Why Orthodontics</h2>
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={ima}
              alt="Close up of teeth with clear braces"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="space-y-4">
            <p className="text-gray-700">
              Everyone wants a beautiful smile and everyone should have a healthy one and the orthodontists goal is to
              achieve both for the patient.
            </p>
            <p className="text-gray-700">
              Crooked and crowded teeth are hard to clean and maintain. This may contribute to conditions that cause
              tooth decay, eventual gum disease and tooth loss, abnormal wear of tooth surfaces, excess stress on
              supporting bone and gum tissue, or undue stress on the jaw joints with resultant chronic headaches or pain
              in the face or neck. When left untreated, many orthodontic problems become worse.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <h3 className="text-xl font-semibold bg-[#1e3a8a] text-white p-4">Treatments</h3>
          <ul className="divide-y">
            {treatments.map((treatment, index) => (
              <li key={index} className="flex items-center gap-3 p-4 hover:bg-gray-50">
                <div className="h-2 w-2 rounded-full bg-[#1e3a8a]" />
                <span>{treatment}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

