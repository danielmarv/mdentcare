"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import sendEmail from "@/lib/email"
import { CreateEmail } from "@/lib/utils"

export function Newsletter() {
        const[formData,setformData] = useState({email: ""})
        const[notification,setnotification] = useState(false)
        const [error, seterror ] = useState(false)
        const handleSubmit = async (e: React.FormEvent) => {
                e.preventDefault()
                // Handle form submission
                const { email } = formData
                const Res = await CreateEmail(email)
                if (Res?.success) {
                        seterror(true)
                        setTimeout(() => {
                                seterror(false)
                                }, 5000);
                                setformData({
                                        email: "",
                                        })
                
                }else{
                        const response = await sendEmail(email)
                        if (response && response.success) {
                                setnotification(true)
                                setTimeout(() => {
                                        setnotification(false)
                                        }, 5000);
                                } else {
                                alert("Error sending email")
                                }
                        setformData({
                        email: "",
                        })
                       
                }
                
                  
                console.log("Form submitted:", formData)
                
              }
  return (
    <motion.div
      className="bg-gradient-to-r from-green-900  to-blue-900 text-white py-16 -mb-5 mx-10 rounded-3xl"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="-mt-10">{ notification?(<h1 className="text-green-500">Thanks for Subscribing to Our News Letter check your email for confirmation</h1>):(<h1></h1>)}{error?(<h1 className="text-red-500 text-2xl font-bold">Email Already Exists</h1>):(<h1></h1>)}</div>
        <motion.h2
          className="md-text-3xl font-bold mb-2 "
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Subscribe to our News Letter to stay updated with us
        </motion.h2>
        <motion.p
          className="text-sm text-gray-300 mb-8"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          You'll Receive an email from us every week
        </motion.p>
        <motion.div
          className="max-w-md mx-auto flex gap-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
        <form className="flex gap-5 " onSubmit={handleSubmit}>
                <Input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setformData({ ...formData, email: e.target.value })}
            className="bg-white/10 border-white/20  text-white placeholder:text-gray-400"
          />
          <Button type="submit"  variant="secondary">Subscribe</Button>
        </form>
          
        </motion.div>
      </div>
    </motion.div>
  )
}

