import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import ima from "../../public/images/doct.jpg"

export default function WhyChooseSpecialistD() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">
          Full Dentures
          </h2>
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={ima}
              alt="Woman with headphones smiling"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="space-y-4">
            <p className="text-gray-700">
            Full, or complete, dentures restore the teeth in a single arch. They restore the appearance and function of the missing teeth so you can eat and speak normally. Full dentures are designed to give you a natural smile and remain securely in place without slipping or shifting.
            </p>
            <h2 className="text-3xl font-bold">
            Partial Dentures
          </h2>
            <p className="text-gray-700">
            Partial dentures are used to replace one or more missing teeth. They are designed to fit comfortably, blend in with your natural teeth, and stay securely in place while you eat or talk. Like full dentures, partials come in a variety of styles and types to meet your needs.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin className="h-5 w-5 text-green-500" />
                <span>Equatorial Mall, Next to Bank of Africa</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="h-5 w-5 text-green-500" />
                <span>+256 704 021 094</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="h-5 w-5 text-green-500" />
                <span>info@identalcare.ug</span>
              </div>
            </div>
          </div>

          <div className="h-[300px] relative rounded-lg overflow-hidden">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7573216774917!2d32.6167!3d0.3167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMTknMDAuMCJOIDMywrAzNycwMC4wIkU!5e0!3m2!1sen!2sug!4v1635787234567!5m2!1sen!2sug"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            /> */}
          </div>

          <Button size="lg" className="w-full bg-green-500 hover:bg-green-600 text-white">
            BOOK AN APPOINTMENT
          </Button>
        </div>
      </div>
    </div>
  )
}

