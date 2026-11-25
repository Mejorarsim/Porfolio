"use client"

import type React from "react"

import { useState } from "react"
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
      value: "United Kingdom",
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
    <section id="contact" className="hero-backdrop py-12 md:py-16 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight"><span className="text-brand-bright">Get in touch</span></h2>
            <p className="mt-3 text-lg leading-relaxed text-slate-300 max-w-xl">
              If you'd like to talk through a project, a data engineering role or a platform problem you're working
              on, I'd be glad to hear from you.
            </p>

            <ul className="mt-6 border-t border-white/10">
              {contactInfo.map((info) => {
                const IconComponent = info.icon
                const row = (
                  <span className="flex items-center gap-4 py-3">
                    <IconComponent className="h-5 w-5 text-cyan-300 shrink-0" />
                    <span>
                      <span className="block text-sm text-slate-400">{info.label}</span>
                      <span className="block text-base font-medium text-white">{info.value}</span>
                    </span>
                  </span>
                )
                return (
                  <li key={info.label} className="border-b border-white/10">
                    {info.href ? (
                      <a href={info.href} target="_blank" rel="noopener noreferrer" className="block transition-colors hover:bg-white/5">
                        {row}
                      </a>
                    ) : (
                      row
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-background text-foreground p-6 md:p-8 space-y-4 self-start shadow-2xl shadow-violet-950/50">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">Send a message</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <Input id="contact-name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <Input id="contact-email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
              <Input id="contact-subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <Textarea id="contact-message" name="message" rows={3} value={formData.message} onChange={handleChange} required />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 bg-brand rounded-md px-5 py-3 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" />
              Open contact form
            </button>
            <p className="text-sm text-muted-foreground">
              This opens a Google Form in a new tab with your details filled in.
            </p>
            {submitStatus === "success" && (
              <p role="status" className="rounded-md border border-border bg-accent px-3 py-2 text-sm text-accent-foreground">
                Contact form opened. Submit it in the new tab to send your message.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
