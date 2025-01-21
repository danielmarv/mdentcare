import { Mail, Phone } from "lucide-react"
// import { Button } from "@/components/ui/button"

export default function TopBar() {
  return (
    <div className="w-full bg-white text-sm py-2 px-4 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>Call : +256-200 907 766</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>info@example.com</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="default">
            Request Appointment
          </button>
          <button className="outline">
            Careers
          </button>
          <button className="secondary">
            English
          </button>
        </div>
      </div>
    </div>
  )
}

