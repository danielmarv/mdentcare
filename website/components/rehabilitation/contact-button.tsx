"use client"

import { MessageCircle } from "lucide-react"

export default function ContactButton() {
  return (
    <button
      className="fixed bottom-6 right-6 bg-[#7E59E7] hover:bg-[#6549C7] text-white rounded-full p-4 shadow-lg"
      onClick={() => (window.location.href = "mailto:contact@identalcare.ug")}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">Contact us</span>
    </button>
  )
}

