// app/privacy/page.tsx

import Link from "next/link";
import { contactInfo } from "@/lib/data";

export const metadata = {
  title: "Privacy Policy | Hiloster Technologies",
  description:
    "Read the Privacy Policy of Hiloster Technologies. Learn how we collect, use, protect, and handle your data and personal information.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 2026";

  return (
    <main className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="ambient-glow-top" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Header Section */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-[#0e623b] dark:text-emerald-300 text-xs font-bold transition-colors duration-300">
            <span>LEGAL & COMPLIANCE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
            Privacy Policy
          </h1>

          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8 leading-relaxed text-sm text-slate-700 dark:text-slate-300 transition-colors duration-300">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              1. Overview
            </h2>
            <p>
              Hiloster Technologies ("we," "our," or "us") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, store, and safeguard your data when you visit our website, submit inquiries, or utilize our web development, school management portals, CCTV security, and ICT infrastructure services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              2. Information We Collect
            </h2>
            <p>
              We collect information that you directly provide to us when contacting us or filling out forms on our website, including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
              <li><strong>Contact Information:</strong> Name, email address, telephone number, and organization name.</li>
              <li><strong>Project Inquiries:</strong> Details regarding required web development, ICT support, or CCTV installation services.</li>
              <li><strong>Client Reviews & Testimonials:</strong> Ratings and feedback provided voluntarily via our client review forms.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              3. How We Use Your Information
            </h2>
            <p>
              The information we collect is used solely to provide and improve our services, including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
              <li>Responding to inquiries and issuing project quotations within 2 to 4 business hours.</li>
              <li>Scheduling physical site surveys for CCTV, network cabling, or system demonstrations.</li>
              <li>Managing client technical support and maintenance agreements.</li>
              <li>Improving website performance, SEO optimization, and user experience.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              4. Data Protection & Security
            </h2>
            <p>
              We enforce strict industry-standard security measures to safeguard your data against unauthorized access, loss, or alteration. All web communications are transmitted securely using SSL/TLS encryption. We do not sell, rent, or trade your personal information to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              5. Third-Party Services
            </h2>
            <p>
              We utilize reliable third-party integrations (such as Web3Forms or FormSubmit for processing contact inquiries and Vercel for hosting). These service providers only access information necessary to perform their specific functions and operate under strict confidentiality.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              6. Your Rights
            </h2>
            <p>
              You have the right to request access to the personal information we hold about you or request corrections or deletion of your data. To exercise these rights, please contact our team directly.
            </p>
          </section>

          <section className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              7. Contact Us
            </h2>
            <p>
              If you have any questions or concerns regarding this Privacy Policy, feel free to reach out to us:
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              <p><strong>Hiloster Technologies</strong></p>
              <p>Email: <a href={`mailto:${contactInfo.email}`} className="text-[#0e623b] dark:text-emerald-400 underline">{contactInfo.email}</a></p>
              <p>Phone: {contactInfo.phone1} / {contactInfo.phone2}</p>
              <p>Location: Rangwe, Homa Bay County, Kenya</p>
            </div>
          </section>

        </div>

        {/* Back Link */}
        <div className="text-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center text-xs font-bold text-[#0e623b] dark:text-emerald-400 hover:underline"
          >
            ← Return to Home Page
          </Link>
        </div>

      </div>
    </main>
  );
}