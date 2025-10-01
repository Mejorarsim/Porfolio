"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // Your Google Form URL
  const GOOGLE_FORM_URL = "https://forms.gle/KmFy3s31C8TANci5A"

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create the prefilled Google Form URL with the user's data
    const baseUrl = "https://docs.google.com/forms/d/e/1FAIpQLScYYDy7AzQKHbUlQek2zpL0hwyBPkhYQX9n8wgLbxT-VEngJg/viewform"
    // Real entry IDs from your Google Form
    const params = new URLSearchParams({
      'usp': 'pp_url',
      'entry.2005620554': formData.name,     // Name field (corrected)
      'entry.1045781291': formData.email,    // Email field
      'entry.1166974658': formData.subject,  // Subject field
      'entry.839337160': formData.message    // Message field
    })
    
    // Open Google Form in a new tab
    window.open(`${baseUrl}?${params.toString()}`, '_blank')
    
    // Show success message and reset form
    setSubmitStatus("success")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setSubmitStatus("idle")
    }, 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "simranpggw@gmail.com",
      href: "mailto:simranpggw@gmail.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "England, UK",
      href: null,
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://linkedin.com/in/simran-g-97002291",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my projects",
      href: "https://github.com/Mejorarsim",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-50 via-teal-50/20 to-cyan-50/30 dark:from-slate-950 dark:via-teal-950/20 dark:to-cyan-950/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-60 h-60 bg-teal-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always excited to collaborate on projects that are technically robust and purpose-driven. 
            Let's connect if you're building something meaningful with data!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                const content = (
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg backdrop-blur-sm">
                    <div className="p-3 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg">
                      <IconComponent className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{info.label}</p>
                      <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                    </div>
                  </div>
                )

                return info.href ? (
                  <a key={index} href={info.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                )
              })}
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl">
            <CardHeader>
              <CardTitle className="text-xl font-bold">
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Send a Message
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="focus:ring-2 focus:ring-teal-500/50 border-gray-200 dark:border-gray-700"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="focus:ring-2 focus:ring-teal-500/50 border-gray-200 dark:border-gray-700"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="focus:ring-2 focus:ring-teal-500/50 border-gray-200 dark:border-gray-700"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="focus:ring-2 focus:ring-teal-500/50 border-gray-200 dark:border-gray-700"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white transform hover:scale-105 transition-all duration-300"
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Open Contact Form
                </Button>
                
                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 dark:text-green-400 text-sm text-center">
                    Contact form opened! Please fill it out in the new tab.
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
