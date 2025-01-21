"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import ima from "../../public/images/doct.jpg"
import ima1 from "../../public/images/do.jpg"

export default function Welcome() {
  return (
    <div className="relative overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-900">
              Welcome to
              <br />
              <span className="text-indigo-600">iDental Care</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Taking care of your health includes taking care of your smile. Oral health is essential for your
              well-being. Dental checkups and cleanings are important for healthy teeth and gums and for diagnosing and
              treating dental problems. Our friendly, high quality dental team is here to help you keep your teeth
              healthy.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
            >
              LEARN MORE
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10"
            >
              <Image
                src={ima}
                alt="Dental care"
                className="w-full rounded-2xl shadow-xl"
                width={100}
                height={100}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-1/2 -right-12 w-2/3"
            >
              <div className="relative">
                <div className="absolute inset-0 border-8 border-indigo-600 rounded-2xl transform translate-x-4 translate-y-4" />
                <Image
                  src={ima1}
                  alt="Dental procedure"
                  className="relative z-10 w-full rounded-2xl shadow-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

