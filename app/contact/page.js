'use client'

import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, Building2, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const Page = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <Image
          src="/bgImage/b2.avif"
          alt="Contact Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#3d180885]"></div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-10 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Let&apos;s Connect</h1>
            <p className="text-white text-lg">
              Ready to transform your ideas into reality? We&apos;re here to help bring your vision to life.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10 -mt-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
            <Phone className="text-[#3D1808] w-8 h-8 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
            <p className="text-gray-600">+1 (555) 987-6543</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
            <Mail className="text-[#3D1808] w-8 h-8 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Email</h3>
            <p className="text-gray-600">info@company.com</p>
            <p className="text-gray-600">support@company.com</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
            <MapPin className="text-[#3D1808] w-8 h-8 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Location</h3>
            <p className="text-gray-600">123 Business Street</p>
            <p className="text-gray-600">New York, NY 10001</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">
            <Clock className="text-[#3D1808] w-8 h-8 mb-4" />
            <h3 className="font-semibold text-lg mb-2">Hours</h3>
            <p className="text-gray-600">Mon - Fri: 9AM - 6PM</p>
            <p className="text-gray-600">Sat - Sun: Closed</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Let&apos;s discuss your project</h2>
              <p className="text-lg text-gray-600">
                Share your vision with us, and we&apos;ll help bring it to life. Our team is ready to collaborate and create something extraordinary together.
              </p>
            </div>

            <div className="bg-[#3D1808] text-white rounded-xl p-6">
              <Building2 className="w-8 h-8 mb-4" />
              <h3 className="font-semibold text-xl mb-3">Visit Our Office</h3>
              <p className="mb-4 text-white/90">
                Come by for a coffee and let&apos;s discuss your project in person. We&apos;d love to show you around our creative space.
              </p>
              <button className="inline-flex items-center gap-2 bg-white text-[#3D1808] px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                Get directions <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#3D1808] text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page