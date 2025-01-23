import { ContactSidebar } from "@/components/root-canal-treatment/contact-sidebar";
import { EmergencyContact } from "@/components/root-canal-treatment/emergency-contact";
import { FloatingContact } from "@/components/root-canal-treatment/floating-contact";
import { TreatmentsSidebar } from "@/components/root-canal-treatment/treatment-sidebar";
import { TreatmentSteps } from "@/components/root-canal-treatment/treatment-steps";
import { UnderstandingSection } from "@/components/root-canal-treatment/understanding-section";


export default function RootCanalPage() {
  return (
    <div className="min-h-screen bg-white">

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="prose max-w-none">
              <UnderstandingSection />
              <TreatmentSteps />
            </div>
          </div>

          <div className="md:col-span-1">
            <TreatmentsSidebar />
            <ContactSidebar />
            <EmergencyContact />
          </div>
        </div>
      </main>

      <FloatingContact />
    </div>
  )
}

