import ContactButton from "@/components/rehabilitation/contact-button";
import TreatmentsSidebar from "@/components/rehabilitation/treatments-sidebar";
import image from "../../public/images/doct.jpg"
import Image from "next/image";


export default function FullMouthRehabilitation() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Image
              src={image}
              alt="Dental procedure being performed"
              className="w-full rounded-lg"
            />
            <h2 className="text-3xl font-bold">Full Mouth Reconstruction</h2>
            <p className="text-gray-600">
              Full mouth reconstruction, also known as full mouth rehabilitation or restoration, is a comprehensive
              treatment approach that involves rebuilding or simultaneously restoring all of the teeth in both the upper
              and lower jaws. This complex procedure combines esthetics with the science of restorative dentistry to
              improve the health, function, and beauty of your mouth.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What does it involve?</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Detailed examination and treatment planning</li>
                <li>Restoration of damaged or decayed teeth</li>
                <li>Replacement of missing teeth</li>
                <li>Correction of bite issues</li>
                <li>Treatment of gum disease if present</li>
                <li>Improvement of overall oral health and aesthetics</li>
              </ul>
            </div>
          </div>
          <div>
            <TreatmentsSidebar />
          </div>
        </div>
      </main>
      <ContactButton />
    </div>
  )
}

