import Image from "next/image"
import ima from "../../public/images/doct.jpg"

export default function WhyOrthodonticsD() {
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
          <h2 className="text-3xl font-bold text-[#1e3a8a]">About Dentures</h2>
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
            Dentures may be a solution for you if you are missing multiple teeth. We provide full and partial dentures to restore the function and appearance of your smile.
            </p>
            <h2 className="text-3xl font-bold text-[#1e3a8a]">Why Wear Dentures?</h2>

            <p className="text-gray-700">
            Dentists have used dentures to replace missing teeth for centuries. Today’s modern dentures are made from advanced composite materials, but they serve the same function: to restore the appearance and function of missing teeth. Dentures also restore the appearance of your cheeks and mouth by reducing the “sunken” look that can happen after tooth loss.
 
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

