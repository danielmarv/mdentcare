
import BenefitsSection from "@/components/dental-care/benefits-section"
import EmergencyBanner from "@/components/dental-care/emergency-banner"
import Hero from "@/components/dental-care/hero"
import TreatmentSidebar from "@/components/dental-care/treatment-sidebar"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import ima1 from "../../public/images/do.jpg"

export default function DentalImplantPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold mb-6">The Perfect Solution to Replace Missing Teeth</h2>
              <p className="text-gray-600 mb-8">
                Form, function and aesthetics are at the forefront of our dental implant solutions. Single, multiple or
                full mouth dental implants are the best solution to replace damaged or missing teeth with an artificial
                fixture that look and feel exactly like a real tooth.
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

      <EmergencyBanner />
    </div>
  )
}

