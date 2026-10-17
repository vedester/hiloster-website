// app/about/page.tsx
// app/services/page.tsx

import Link from "next/link";
import { services, contactInfo } from "@/lib/data";

export const metadata = {
  title: "Our Services | Hiloster Technologies",
  description:
    "Explore our full suite of ICT and software development services, including web applications, school portals, CCTV installations, and custom software solutions.",
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="ambient-glow-top" />

      {/* Hero Header Section */}
      <section className="relative pt-16 pb-12 lg:pt-24 lg:pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-[#0e623b] dark:text-emerald-300 text-xs font-bold transition-colors duration-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>EXPERT ICT & DIGITAL SOLUTIONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] transition-colors duration-300">
            Services tailored to grow <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#0e623b] via-emerald-600 to-teal-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
              your organization.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            We partner with businesses, schools, and institutions to build high-performance software, secure network infrastructure, and modern digital platforms.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <article
                key={s.title}
                className="p-8 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/60 dark:hover:border-emerald-500/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-5">
                  {/* Service Icon Container */}
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center text-2xl text-[#0e623b] dark:text-emerald-400 transition-colors duration-300">
                    {s.icon}
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-[#0e623b] dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {s.title}
                  </h2>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">
                    {s.text}
                  </p>
                </div>

                {/* Call to Action Footer */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                  <a
                    href={`https://wa.me/${contactInfo.phone1}?text=${encodeURIComponent(`Hi, I'd like to inquire about ${s.title}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center text-xs font-bold text-[#0e623b] dark:text-emerald-400 hover:underline group/link"
                  >
                    <span>Request consultation</span>
                    <span className="ml-1.5 transition-transform duration-200 group-hover/link:translate-x-1">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Call to Action Banner */}
      <section className="py-16 bg-slate-100/80 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white transition-colors duration-300">
            Need a custom ICT or software solution?
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto transition-colors duration-300">
            Tell us about your requirements, and we will scope out a complete solution, budget, and timeline for your project.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white bg-[#0e623b] hover:bg-[#0b4d2e] dark:bg-emerald-500 dark:hover:bg-emerald-400 dark:text-slate-950 rounded-xl shadow-lg transition-all duration-300"
            >
              Get in touch with us ↗
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}