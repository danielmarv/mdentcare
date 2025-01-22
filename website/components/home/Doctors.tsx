"use client"

import { motion } from "framer-motion"
import { Heart, Calendar, Clock } from "lucide-react"
import ima from "../../public/images/doct.jpg"
import ima1 from "../../public/images/do.jpg"
import Image from "next/image"

const doctors = [
  {
    name: "Dr. John Smith",
    image: {ima},
    schedule: {
      days: "Mon - Sunday",
      hours: "08AM - 07.00 PM",
    },
  },
  {
    name: "Dr. Sarah Johnson",
    image: {ima},
    schedule: {
      days: "Mon - Sunday",
      hours: "08AM - 07.00 PM",
    },
  },
  {
    name: "Dr. Michael Chen",
    image: {ima1},
    schedule: {
      days: "Mon - Sunday",
      hours: "08AM - 07.00 PM",
    },
  },
]

export default function Doctors() {
  return (
    <div className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900">DOCTOR</h2>
          <button className="px-6 py-2 bg-indigo-900 text-white rounded-full hover:bg-indigo-800 transition-colors">
            ALL DOCTOR
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <Image
                  // src={doctor.image}
                  src={doctor.image.ima ?? doctor.image.ima1}
                  alt={doctor.name}
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
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{doctor.schedule.days}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{doctor.schedule.hours}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                >
                  Book Appointment
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

