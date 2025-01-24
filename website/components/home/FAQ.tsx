"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import ima1 from "../../public/images/do.jpg"
import Image from "next/image"

const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "It is recommended to visit the dentist every six months for a routine check-up and cleaning. However, the frequency may vary depending on your oral health needs. Your dentist can provide personalized recommendations.",
  },
  {
    question: "What should I do if I have a toothache?",
    answer:
      "If you experience a toothache, rinse your mouth with warm water, use dental floss to remove any food caught between teeth, and take over-the-counter pain relievers. If pain persists, contact our office immediately for an emergency appointment.",
  },
  {
    question: "Do you take my insurance?",
    answer:
      "We accept most major dental insurance plans. Please contact our office with your insurance information, and our staff will be happy to verify your coverage and benefits.",
  },
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start p-6 md:p-8 lg:p-12 bg-blue-400 text-white rounded-2xl">
      <div className="space-y-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-indigo-800">
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="flex justify-between items-center w-full py-4 text-left hover:text-indigo-200 transition-colors"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="flex-shrink-0 ml-4">
                  {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 text-indigo-200">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
      <div className="relative aspect-video rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-indigo-900/20" />
        <Image
          src={ima1}
          alt="Dental procedure"
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
        <button className="absolute inset-0 flex items-center justify-center group">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/90 group-hover:bg-white transition-colors">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-indigo-900 border-b-8 border-b-transparent ml-1" />
          </div>
        </button>
      </div>
    </div>
  )
}

