"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { CalendarDays } from "lucide-react"

interface BlogPostCardProps {
  title: string
  date: string
  excerpt: string
  image: string
  href: string
}

export function BlogPostCard({ title, date, excerpt, image, href }: BlogPostCardProps) {
  return (
    <motion.div
      className="flex gap-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={href} className="w-1/3">
        <motion.img
          src={image}
          alt={title}
          className="rounded-lg object-cover w-full h-48"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-2/3">
        <Link href={href}>
          <h2 className="text-xl font-semibold text-[#2E2B7C] hover:text-blue-600 transition-colors mb-2">{title}</h2>
        </Link>
        <div className="flex items-center gap-2 text-gray-500 mb-3">
          <CalendarDays className="h-4 w-4" />
          <span className="text-sm">{date}</span>
        </div>
        <p className="text-gray-600 line-clamp-3">{excerpt}</p>
      </div>
    </motion.div>
  )
}

