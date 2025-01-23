import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function FloatingContact() {
  return (
    <div className="fixed bottom-4 right-4">
      <Button size="lg" className="bg-[#7c3aed] hover:bg-[#6d28d9]">
        <MessageCircle className="mr-2 h-5 w-5" />
        Contact us
      </Button>
    </div>
  )
}

