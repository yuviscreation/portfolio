'use client';

import { useState } from 'react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { CONTACT_INFO } from './contact-data';

/**
 * ContactSection - Contact form with glowing input fields.
 * Data extracted to contact-data.js for maintainability.
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission (e.g., send email)
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-3">Get In Touch</h2>
        <p className="text-center text-teal-400 mb-12">Let's work together on your next project</p>

        {/* Contact Info Cards with Glowing Effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {CONTACT_INFO.map((info, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative border border-white/20 rounded-lg p-8 bg-black/50 backdrop-blur-sm overflow-hidden hover:border-white/40 transition-all duration-300">
                <GlowingEffect 
                  disabled={false} 
                  variant="default" 
                  glow={true}
                  blur={15}
                  spread={40}
                  proximity={100}
                />
                <div className="relative z-10 text-center">
                  <div className="text-4xl mb-3">{info.icon}</div>
                  <p className="text-gray-400 text-sm mb-2">{info.label}</p>
                  <p className="text-white font-semibold">{info.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium mb-2">Your Name</label>
              <div className="relative group">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
                <div className="relative border border-white/20 rounded-lg overflow-hidden hover:border-white/40 transition-all duration-300">
                  <GlowingEffect 
                    disabled={false}
                    variant="default"
                    glow={true}
                    blur={12}
                    spread={25}
                    proximity={80}
                  />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="relative z-10 w-full px-4 py-3 bg-black/50 border-0 rounded-lg text-white placeholder-gray-500 focus:outline-none transition"
                  />
                </div>
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium mb-2">Your Email</label>
              <div className="relative group">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
                <div className="relative border border-white/20 rounded-lg overflow-hidden hover:border-white/40 transition-all duration-300">
                  <GlowingEffect 
                    disabled={false}
                    variant="default"
                    glow={true}
                    blur={12}
                    spread={25}
                    proximity={80}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yuvraj9c@gmail.com"
                    className="relative z-10 w-full px-4 py-3 bg-black/50 border-0 rounded-lg text-white placeholder-gray-500 focus:outline-none transition"
                  />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <div className="relative group">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/10 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
                <div className="relative border border-white/20 rounded-lg overflow-hidden hover:border-white/40 transition-all duration-300">
                  <GlowingEffect 
                    disabled={false}
                    variant="default"
                    glow={true}
                    blur={12}
                    spread={25}
                    proximity={80}
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows="6"
                    className="relative z-10 w-full px-4 py-3 bg-black/50 border-0 rounded-lg text-white placeholder-gray-500 focus:outline-none transition resize-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-teal-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative border border-teal-500/50 rounded-lg overflow-hidden hover:border-teal-500 transition-all duration-300">
                <GlowingEffect 
                  disabled={false}
                  variant="default"
                  glow={true}
                  blur={15}
                  spread={30}
                  proximity={100}
                />
                <button
                  type="submit"
                  className="relative z-10 w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
