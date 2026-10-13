// app/contact/page.tsx


'use client';

import { useState, FormEvent } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Development',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "35e367be-0079-4b02-8e89-a7e3c18d89a3",
          subject: `New Inquiry: ${formData.service} from ${formData.name}`,
          from_name: "Hiloster Website",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        alert("Failed to send message. Please try again or reach us via WhatsApp.");
      }
    } catch (error) {
      alert("An error occurred. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Hiloster Technologies, I am interested in ${formData.service || 'your ICT services'}. My name is ${formData.name || 'a client'}.`
  );

  return (
    <main className="py-20 bg-slate-950 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3 block">
            Get In Touch
          </span>
          <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight">
            Let's Discuss Your Project
          </h1>
          <p className="mt-4 text-slate-400 text-lg">
            Have a question, need a quote for web development, CCTV installation, or institutional software? Reach out to us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Details & Direct WhatsApp */}
          <div className="space-y-8">
            <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 space-y-6">
              <h2 className="text-2xl font-bold text-white">Contact Information</h2>
              
              <div className="space-y-4 text-slate-300 text-sm">
                <div className="flex items-start gap-4">
                  <span className="text-blue-400 font-bold">📍</span>
                  <div>
                    <h3 className="font-semibold text-white">Office Location</h3>
                    <p className="text-slate-400">Nairobi / Kiambu / Western Kenya Operations</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-blue-400 font-bold">✉️</span>
                  <div>
                    <h3 className="font-semibold text-white">Email Address</h3>
                    <p className="text-slate-400">hilostertechnologies@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-blue-400 font-bold">🛠️</span>
                  <div>
                    <h3 className="font-semibold text-white">Core Services</h3>
                    <p className="text-slate-400">Web Portals, School Systems, CCTV & Network Infrastructure</p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-6 border-t border-slate-800">
                <h3 className="text-sm font-semibold text-slate-300 mb-3">Prefer quick chat?</h3>
                <a
                  href={`https://wa.me/254745389833?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm transition-colors shadow-lg shadow-emerald-600/20"
                >
                  <span>Chat with Us on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h2 className="text-2xl font-bold text-white">Message Received!</h2>
                <p className="text-slate-300 text-sm">
                  Thank you for contacting Hiloster Technologies. Our technical team will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-slate-800 text-slate-200 rounded-lg text-sm hover:bg-slate-700"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-blue-500"
                    placeholder="e.g. John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-blue-500"
                      placeholder="+254 745 389 833"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Required Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-blue-500"
                  >
                    <option value="Web Development">Web Design & Development</option>
                    <option value="School Systems">School & Institutional Management System</option>
                    <option value="E-commerce Solutions">E-commerce Development</option>
                    <option value="CCTV Installation">CCTV & Physical Security Setup</option>
                    <option value="ICT Support">General ICT & Network Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Project / Inquiry Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 text-sm focus:outline-none focus:border-blue-500"
                    placeholder="Briefly describe your requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-blue-500 hover:bg-blue-400 disabled:bg-slate-700 text-slate-950 font-bold rounded-xl text-sm transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </main>
  );
}