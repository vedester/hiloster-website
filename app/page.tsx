
// app/page.tsx

"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";

import Link from "next/link";
import { services, packages, projects, contactInfo } from "@/lib/data";

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
      <p className="text-xs font-bold tracking-widest text-[#0e623b] dark:text-emerald-400 uppercase">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
        {title}
      </h2>
      {text && <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">{text}</p>}
    </div>
  );
}

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0]?.title ?? "",
    message: "",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionError("");

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactInfo.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...formData, _subject: "New Hiloster Technologies website inquiry", _template: "table" }),
      });
      if (!response.ok) throw new Error("Inquiry submission failed");
      setSubmitted(true);
    } catch {
      setSubmissionError("We couldn’t send your inquiry. Please try again or contact us by email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const structuredData = {
    "@context": "[https://schema.org](https://schema.org)",
    "@type": "Organization",
    name: "Hiloster Technologies",
    url: "[https://hiloster-website.vercel.app/](https://hiloster-website.vercel.app/)",
    email: contactInfo.email,
    telephone: [contactInfo.phone1, contactInfo.phone2],
    slogan: "Smart Solutions. Stronger Impact.",
    description: "Web applications, digital systems, school platforms, CCTV installation and ICT solutions.",
    address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
    areaServed: { "@type": "Country", name: "Kenya" },
    knowsAbout: services.map((s) => s.title),
  };

  return (
    <main className="relative min-h-screen transition-colors duration-300">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* Top Banner Strip after the Navabar*/}
      <div className="bg-slate-100 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 py-2.5 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-4">
            <span>📍 Nairobi, Kenya</span>
            <span className="hidden sm:inline text-slate-300 dark:text-slate-700">|</span>
            <span className="hidden sm:inline font-medium text-slate-700 dark:text-slate-300">Smart Solutions. Stronger Impact.</span>
          </div>
          <a href={`mailto:${contactInfo.email}`} className="hover:text-[#0e623b] dark:hover:text-emerald-400 transition-colors font-medium">
            {contactInfo.email}
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden" id="home">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-[#0e623b] dark:text-emerald-300 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>DIGITAL SOLUTIONS FOR REAL-WORLD NEEDS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                We build digital solutions <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-[#0e623b] via-emerald-600 to-teal-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
                  that grow your vision.
                </span>
              </h1>

              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                We design and develop professional websites, web applications, mobile apps, software solutions, and ICT systems that help businesses and institutions work smarter.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#contact"
                  className="w-full sm:w-auto px-6 py-3.5 text-base font-semibold text-white bg-[#0e623b] hover:bg-[#0b4d2e] dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 rounded-xl transition-all shadow-lg shadow-emerald-900/10 dark:shadow-emerald-500/20 text-center"
                >
                  Let’s discuss your project ↗
                </a>
                <a
                  href="#projects"
                  className="w-full sm:w-auto px-6 py-3.5 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl transition-all text-center shadow-sm"
                >
                  Explore our work
                </a>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-6 text-xs font-semibold text-slate-500 dark:text-slate-400 pt-4">
                <span>✓ Mobile responsive</span>
                <span>✓ Secure by design</span>
                <span>✓ Tailored to your needs</span>
              </div>
            </div>

            {/* Hero Right Media Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900 transition-colors duration-300">
              
              <Image
                alt="Hiloster Technologies — web development and ICT solutions"
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                height={800}
                priority
                src="/images/hiloster-hero.jpeg"
                width={1200}
              />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200 dark:border-slate-800/80 transition-colors duration-300" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="WHAT WE BUILD" text="Practical technology services to help your organisation connect with people, manage work, and grow with confidence." title="Digital services for every need"/>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article
                key={s.title}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/60 dark:hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-md group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center text-xl text-[#0e623b] dark:text-emerald-400">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#0e623b] dark:group-hover:text-emerald-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {s.text}
                  </p>
                </div>
                <div className="pt-6 mt-4 border-t border-slate-100 dark:border-slate-800/60">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-xs font-bold text-[#0e623b] dark:text-emerald-400 hover:underline"
                  >
                    Discuss this service <span className="ml-1">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions / Pricing Packages Section */}
      <section className="py-20 transition-colors duration-300" id="solutions">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="SOLUTIONS FOR EVERY NEED" text="Every project is unique. We scope each solution with you and confirm features, timelines, and budgets before work begins." title="Choose the right starting point"/>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((p, i) => {
              const isPopular = i === 1;
              return (
                <article
                  key={p.name}
                  className={`p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                    isPopular
                      ? "bg-[#0e623b] dark:bg-slate-900 text-white dark:text-slate-100 border-[#0e623b] dark:border-emerald-500 shadow-xl lg:scale-105"
                      : "bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full border ${
                          isPopular
                            ? "bg-emerald-800/60 dark:bg-emerald-500/10 text-emerald-100 dark:text-emerald-400 border-emerald-600/60 dark:border-emerald-500/20"
                            : "bg-emerald-50 dark:bg-emerald-500/10 text-[#0e623b] dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/20"
                        }`}
                      >
                        {p.tag}
                      </span>
                      {isPopular && (
                        <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-400 text-slate-950">
                          Popular
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold">{p.name}</h3>
                    <p className={`text-xs leading-relaxed ${isPopular ? "text-emerald-100 dark:text-slate-400" : "text-slate-600 dark:text-slate-400"}`}>
                      {p.desc}
                    </p>

                    <ul className="space-y-2 pt-2">
                      {p.features.map((f) => (
                        <li key={f} className="text-xs flex items-center space-x-2">
                          <span className={isPopular ? "text-emerald-300 dark:text-emerald-400 font-bold" : "text-emerald-600 dark:text-emerald-400 font-bold"}>✓</span>
                          <span className={isPopular ? "text-emerald-50 dark:text-slate-300" : "text-slate-600 dark:text-slate-300"}>
                            {f}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`pt-6 mt-6 border-t ${isPopular ? "border-emerald-700/60 dark:border-slate-800/80" : "border-slate-100 dark:border-slate-800/80"}`}>
                    <a
                      href={`${contactInfo.whatsapp}&package=${encodeURIComponent(p.name)}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full inline-flex items-center justify-center py-2.5 text-xs font-bold rounded-xl transition-all ${
                        isPopular
                          ? "bg-white dark:bg-emerald-500 hover:bg-slate-100 dark:hover:bg-emerald-400 text-[#0e623b] dark:text-slate-950 shadow-md"
                          : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100"
                      }`}
                    >
                      Request a quote ↗
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Selected Work / Portfolio Section */}
      <section className="py-20 bg-slate-100/70 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="SELECTED WORK" text="Explore selected client platforms and live websites developed by Hiloster Technologies." title="Projects and live demonstrations"/>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <article
                key={p.name}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-all shadow-sm space-y-4"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#0e623b] dark:text-emerald-400">
                  Education Platform
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{p.name}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{p.detail}</p>
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-[#0e623b] dark:text-emerald-400 hover:underline"
                  >
                    Visit live website <span className="ml-1.5">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 transition-colors duration-300" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs font-bold tracking-widest text-[#0e623b] dark:text-emerald-400 uppercase">
                GET IN TOUCH
              </p>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Let’s discuss your project
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Contact Hiloster Technologies for a consultation, demonstration, or quotation. Share your requirements and we’ll respond promptly.
              </p>

              <div className="space-y-4 pt-4">
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center space-x-4 shadow-sm">
                  <span className="text-2xl">☎</span>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Call Us</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      {contactInfo.phone1} / {contactInfo.phone2}
                    </p>
                  </div>
                </div>

                <a
                  href={`mailto:${contactInfo.email}`}
                  className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center space-x-4 hover:border-emerald-500/50 transition-colors block shadow-sm"
                >
                  <span className="text-2xl">✉</span>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Email Us</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      {contactInfo.email}
                    </p>
                  </div>
                </a>
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
                      name="name"
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
                        name="email"
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
                        name="phone"
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
                      name="service"
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
                      name="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                      placeholder="Briefly detail your timeline, features, or questions..."
                    />
                  </div>

                  {submissionError && (
                    <p role="alert" className="text-sm text-red-600 dark:text-red-400">
                      {submissionError}
                    </p>
                  )}

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
        </div>
      </section>

      
    </main>
  );
}