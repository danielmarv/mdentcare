
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ima1 from "../../public/images/do.jpg"
import Hero from "@/components/crowns-bridges/hero"
import BenefitsSection from "@/components/crowns-bridges/benefits-section"
import TreatmentSidebar from "@/components/crowns-bridges/treatment-sidebar"
import EmergencyBanner from "@/components/crowns-bridges/emergency-banner"
import CrownBridgeProcess from "@/components/crowns-bridges/crown-process"

export default function CrownsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">Dental Crowns and Bridges</h2>
              <p className="text-gray-600 mb-8">
              A dental crown is a tooth-shaped “cap” that is placed over a tooth – covering the tooth to restore its shape and size, strength, and/or to improve its appearance.The crowns, when cemented into place, fully encase the entire visible portion of a tooth that lies at and above the gum line.
              </p>
              <p className="text-gray-600 mb-8">
              A crown may also refer to a specific type of dental restoration that covers the entire anatomical crown of a tooth. A dental crown typically covers the exposed portion of a tooth (we call this full coverage) and replaces all of its enamel.
              </p>
              <div className="relative aspect-[2/1] mb-8">
                <Image
                  src={ima1}
                  alt="Before and after dental implant procedure"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <BenefitsSection />
              <div className="mt-8">
                <Button size="lg">BOOK AN APPOINTMENT</Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div>
            <TreatmentSidebar />
          </div>
        </div>
      </main>
      <CrownBridgeProcess/>

      <EmergencyBanner />
    </div>
  )
}

