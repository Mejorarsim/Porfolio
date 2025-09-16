"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Linkedin, Github, Send, Youtube, Instagram } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
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
      value: "linkedin.com/in/simran-g-97002291",
      href: "https://linkedin.com/in/simran-g-97002291",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Mejorarsim",
      href: "https://github.com/Mejorarsim",
    },
    {
      icon: Youtube,
      label: "YouTube",
      value: "Evolving Simran",
      href: "https://www.youtube.com/@EvolvingSimran",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "evolvingsimran",
      href: "https://instagram.com/evolvingsimran",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-muted/30 via-primary/5 to-secondary/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            I'm always excited to collaborate on projects that are technically robust and purpose-driven. Let's connect
            if you're building something meaningful with data!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up delay-200">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  const content = (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-background/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                    >
                      <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
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

            <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border border-primary/20 transform hover:scale-105 transition-all duration-300">
              <h4 className="font-semibold text-foreground mb-2">Open to Opportunities</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Currently seeking Data Engineer, Data Analyst, Data Scientist, and Data Science Specialist roles. Open
                to relocation and remote opportunities.
              </p>
            </div>

            <div className="p-6 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-lg border border-red-500/20 transform hover:scale-105 transition-all duration-300">
              <h4 className="font-semibold text-foreground mb-2 flex items-center">
                <Youtube className="h-5 w-5 text-red-600 mr-2" />
                Content Creator
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Follow my journey on "Evolving Simran" where I share insights about data science, student life, and the
                vibrant culture of Glasgow.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="animate-slide-up delay-300 transform hover:scale-105 transition-all duration-300 shadow-xl">
            <CardHeader>
              <CardTitle className="font-[family-name:var(--font-space-grotesk)] bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Send a Message
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
                      className="focus:ring-2 focus:ring-primary/50"
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
                      className="focus:ring-2 focus:ring-primary/50"
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
                    className="focus:ring-2 focus:ring-primary/50"
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
                    className="focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 transform hover:scale-105 transition-all duration-300"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
