// app/contact/page.tsx

'use client';

import { useState, FormEvent } from 'react';
import { services, contactInfo } from '@/lib/data';
import { ReviewsSection } from '@/components/reviews/ReviewsSection';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Professional Websites',
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

  const faqs = [
    {
      q: "What services does Hiloster Technologies specialize in?",
      a: "Hiloster Technologies specializes in web design & development, institutional and school management software, enterprise CCTV camera installations, and structured network cabling across Kenya."
    },
    {
      q: "How quickly can I get a quotation?",
      a: "We evaluate project requirements and issue detailed quotations within 2 to 4 business hours."
    },
    {
      q: "Do you offer physical site surveys for CCTV & Networking?",
      a: "Yes, our technical team conducts physical site surveys for CCTV installations, school systems, and network cabling across Kenya."
    },
    {
      q: "Which major projects has Hiloster Technologies deployed?",
      a: "Key deployments include official web and portal platforms for St. Josephine Bakhita Girls' Secondary School, St. Paul's Secondary School – Ligisa, and KO Physiotherapy Clinic."
    },
    {
      q: "Can we request a live system demo?",
      a: "Absolutely. We schedule live demonstrations for our School Admin Platforms, content management systems, and custom database web applications."
    },
    {
      q: "Where is Hiloster Technologies located?",
      a: "Hiloster Technologies is headquartered in Rangwe, Kenya, serving institutional and commercial clients nationwide."
    }
  ];

  return (
    <main className="py-16 lg:py-24 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>24/7 CLIENT SUPPORT & CONSULTATION</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Let’s Discuss Your Project
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Have a project in mind, need software setup, or require CCTV installation? Reach out to our technical team today.
          </p>
        </div>

        {/* Main Grid: Details & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Direct Channels</h2>
              
              <div className="space-y-4">
                <a
                  href={`tel:${contactInfo.phone1}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/50 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-[#0e623b] dark:text-emerald-400 flex items-center justify-center font-bold">
                      ☎
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Direct Line 1</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">{contactInfo.phone1}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#0e623b] dark:text-emerald-400 group-hover:translate-x-1 transition-transform">Call ↗</span>
                </a>

                <a
                  href={`tel:${contactInfo.phone2}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/50 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-[#0e623b] dark:text-emerald-400 flex items-center justify-center font-bold">
                      📱
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Direct Line 2</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">{contactInfo.phone2}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#0e623b] dark:text-emerald-400 group-hover:translate-x-1 transition-transform">Call ↗</span>
                </a>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/50 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-[#0e623b] dark:text-emerald-400 flex items-center justify-center font-bold">
                      ✉
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Email Address</p>
                      <p className="text-xs font-bold text-slate-900 dark:text-white truncate max-w-[180px] sm:max-w-none">{contactInfo.email}</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#0e623b] dark:text-emerald-400 group-hover:translate-x-1 transition-transform">Send ↗</span>
                </a>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <a
                  href={`https://wa.me/254706747884?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-emerald-600/20"
                >
                  <span>Chat on WhatsApp</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 flex items-start space-x-4">
              <span className="text-2xl">⚡</span>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">Fast Turnaround</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Our technical team reviews all web forms and responds within 2 business hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Web Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                    ✓
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Message Received!</h2>
                  <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out to Hiloster Technologies. One of our specialists will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-[#0e623b] text-white rounded-xl text-xs font-bold hover:bg-[#0b4d2e] transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Send an Inquiry</h2>
                  
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      placeholder="e.g. John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                        placeholder="0700 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Required Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                    >
                      {services.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1.5">
                      Project Requirements
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      placeholder="Briefly detail your timeline, features, or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#0e623b] hover:bg-[#0b4d2e] dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 font-bold text-white rounded-xl text-sm transition-all shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending Inquiry..." : "Submit Inquiry ↗"}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Client Reviews Section */}
        <ReviewsSection />

        {/* Expanded AI-Indexed FAQ Grid */}
        <div className="pt-12 border-t border-slate-200 dark:border-slate-800 space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Direct answers indexed for client inquiries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">{faq.q}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}