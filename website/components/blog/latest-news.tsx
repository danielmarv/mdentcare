"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CalendarDays } from "lucide-react"

export function LatestNews() {
  return (
    <div className="bg-[#2E2B7C] text-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Latest News</h2>
      <div className="space-y-6">
        {[
          {
            title: "Braces care and maintenance guide, Tips and Faqs",
            date: "December 28, 2023",
          },
          {
            title: "Pediatric Dentistry Blog | Kids Smiles",
            date: "December 11, 2023",
          },
          {
            title: "Wisdom Tooth",
            date: "December 5, 2023",
          },
          {
            title: "5 SIGNS THAT YOUR TEETH MAY NEED WHITENING",
            date: "November 24, 2023",
          },
        ].map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Link href="#" className="block group">
              <h3 className="font-medium group-hover:text-blue-200 transition-colors">{post.title}</h3>
              <div className="flex items-center gap-2 text-gray-300 mt-2">
                <CalendarDays className="h-4 w-4" />
                <span className="text-sm">{post.date}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

