"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "recharts"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <SiteHeader />

      {/* Hero Section */}
      <section
        className="relative py-32 text-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 8, 112, 0.8), rgba(15, 8, 112, 0.8)), url('/images/contact.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact Us</h1>
          <p className="text-2xl md:text-3xl font-light mb-8">We're here to answer your questions and provide support. Reach out to us through any of the channels
          below.</p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl mx-auto px-4">
          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Phone Card */}
            <Card className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
              <div className="h-2 bg-indigo-900" />
              <div className="p-6 text-center">
                <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-8 w-8 text-indigo-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600 mb-4">Call us directly for immediate assistance</p>
                <p className="font-medium text-gray-800">+234 (0) 123-4567890</p>
              </div>
            </Card>

            {/* Email Card */}
            <Card className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
              <div className="h-2 bg-indigo-900" />
              <div className="p-6 text-center">
                <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-8 w-8 text-indigo-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours</p>
                <p className="font-medium text-gray-800">hello@acefoundation.com.ng</p>
              </div>
            </Card>

          </div>

          {/* Contact Form Section */}
          <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="h-2 bg-indigo-900" />
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="First name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Last name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter eamil" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" type="tel" placeholder="Enter phone number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" required />
                </div>

                <Button type="submit" className="w-full bg-indigo-900 hover:bg-indigo-800">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

        </div>
      </section>


      {/* Footer */}
      <SiteFooter />
    </div>
  )
}