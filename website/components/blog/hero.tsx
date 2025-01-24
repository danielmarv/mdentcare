"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <div className="relative h-[500px] bg-gradient-to-r from-orange-50 to-orange-100">
      <motion.div
        className="container mx-auto px-4 pt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col gap-2">
          <motion.h1
            className="text-6xl font-bold text-orange-300"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Creating Beautiful
            <br />
            Smiles Everyday
          </motion.h1>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
      >
        <ChevronDown className="h-8 w-8 text-gray-400" />
      </motion.div>
    </div>
  )
}

