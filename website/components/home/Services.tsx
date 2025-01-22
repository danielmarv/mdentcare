"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import Image from "next/image"
import ima from "../../public/images/doct.jpg"
import ima1 from "../../public/images/do.jpg"

const services = [
  {
    title: "Root Canal Treatment",
    description:
      "Root canals are common procedures and can help save your tooth from extraction. Dentists at Aspen Dental practices have been safely and expertly performing root canal procedures for over two decades.",
    image: ima,
    doctor: {
      name: "Dr. Sarah Johnson",
      image: "/placeholder.svg",
    },
  },
  {
    title: "Dental Crowns",
    description:
      "Crown is a fixed, natural-like, tooth-shaped covering-cap that completely encases over the top of a damaged tooth such as misshapen tooth, or unsightly tooth, to regain the properties of a natural.",
    image: ima1,
    doctor: {
      name: "Dr. Michael Chen",
      image: "/placeholder.svg",
    },
  },
  {
    title: "Dental Bridges",
    description:
      "A dental bridge is a great option if you're looking to replace one or more missing teeth. It mimics your natural teeth, providing both oral health and cosmetic benefits. If you're needing support with a missing tooth or teeth, visit iDental Care Clinic to see if dental bridges are right for you.",
    image: ima1,
    doctor: {
      name: "Dr. Emily Wilson",
      image: "/placeholder.svg",
    },
  },
]

export default function Services() {
  return (
    <div className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900">SERVICES</h2>
          <button className="px-6 py-2 bg-indigo-900 text-white rounded-full hover:bg-indigo-800 transition-colors">
            ALL TREATMENTS
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full aspect-video object-cover"
                  width={100}
                  height={100}

                />
                <span className="absolute top-4 left-4 px-4 py-1 bg-indigo-900 text-white text-sm font-medium rounded">
                  DENTIST
                </span>
                <button className="absolute top-4 right-4 p-2 bg-white/90 rounded-full hover:bg-white transition-colors group">
                  <Heart className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition-colors" />
                </button>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="flex items-center">
                  <Image
                    src={service.doctor.image}
                    alt={service.doctor.name}
                    className="w-12 h-12 rounded-full object-cover"
                    width={100}
                  height={100}
                  />
                  <span className="ml-4 text-sm font-medium text-gray-900">{service.doctor.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

