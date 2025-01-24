"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TiTick } from "react-icons/ti";

export function ContactForm() {
        const[sending, setsending] = useState(false)
        const [Alert, setAlert] = useState(false)
  const [formData, setFormData] = useState({

    email: "",
    subject:"",
    message: "",
  })

  const sendEmail = async (fromEmail: any,subject: any,message: any,) => {
        setsending(true)
    try {
      const response = await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'eliatranquil@gmail.com',
          subject: subject,
          text:  ` This Message is from ${fromEmail}  \n  ${message}`
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setsending(false)
        setAlert(true)
        setTimeout(() => {
                setAlert(false)
                }, 5000);
        console.log(data.message);
      } else {
        setsending(false)
        console.log(`Error: ${data.message}`);
      }
     
    } catch (error) {
      console.error('An error occurred while sending the email.');
      console.error(error);
    }
  };
  


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    const { email, subject, message } = formData
    sendEmail(email,subject, message)
    setFormData({
        email: "",
        subject:"",
        message: "",
      })
    console.log("Form submitted:", formData)
  }

  return (
        
    <Card className="bg-indigo-900 text-white">
      <CardHeader>
        <div className="flex gap-[10%]">
        <div className=" flex text-2xl font-bold">Contact</div>
        <div className="flex"> { Alert?( <h1 className=" text-inline font-semi-bold flex text-green-500"> Your message has been sent we will reply ASAP  <TiTick className=" mt-1 text-xl text-green-500"/> </h1>):(<h1></h1>)} </div>

        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* <div className="space-y-2">
            <Label htmlFor="name" className="text-white">
              Name <span className="text-red-400">*</span>
            </Label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  id="firstName"
                  placeholder="First"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
          
              </div>
              <div>
                <Input
                  id="lastName"
                  placeholder="Last"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              
              </div>
            </div>
          </div> */}

          <div className="space-y-2">
            
            <div className="grid grid-cols-2 gap-4">
              <div>
              <Label htmlFor="name" className="text-white">
              Email <span className="text-red-400">*</span>
            </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
          
              </div>
              <div>
              <Label htmlFor="name" className="text-white">
              Subject <span className="text-red-400">*</span>
            </Label>
                <Input
                  id="subject"
                  placeholder="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                />
              
              </div>
            </div>
          </div>

          

          <div className="space-y-2">
            <Label htmlFor="message" className="text-white">
              Message <span className="text-red-400">*</span>
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[150px]"
            />
          </div>

          <Button type="submit" className="w-full bg-white text-indigo-900 hover:bg-white/90">
            {sending? ("Sending Message"):("Send Message")}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

