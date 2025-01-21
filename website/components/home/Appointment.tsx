"use client"

import { Calendar } from "lucide-react"
import { motion } from "framer-motion"

const hours = [
  { days: "Monday - Friday", time: "08:30AM - 07:00PM" },
  { days: "Saturday - Sunday", time: "09:30AM - 05:00PM" },
]

export default function Appointment() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-emerald-800" />
      <div className="relative grid lg:grid-cols-2 gap-8 p-6 md:p-8 lg:p-12">
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            >
              Make an Appointment
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-white/90"
            >
              We are always open from Monday to Sunday. Ready to receive our patients at anytime.
            </motion.p>
          </div>

          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl md:text-3xl font-bold text-white"
            >
              Opening Hours
            </motion.h3>
            <div className="space-y-4">
              {hours.map((schedule, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex justify-between items-center border-b border-white/20 pb-2"
                >
                  <span className="text-white/90">{schedule.days}</span>
                  <span className="text-white font-medium">{schedule.time}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="inline-flex items-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
          >
            <Calendar className="w-5 h-5 mr-2" />
            SCHEDULE APPOINTMENT
          </motion.button>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">How to Book Appointment</h3>
          <div className="relative aspect-video rounded-xl overflow-hidden bg-black/20">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/G07V0aOmWTI?si=T_Yb2LV3zQPAbAe1"
              title="How to Book Appointment"
              className="absolute inset-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  )
}

