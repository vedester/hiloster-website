// app/services/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES, Service } from '@/data/services';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'software' | 'hardware'>('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 py-16 lg:py-24">
      {/* Background Ambient Glow */}
      <div className="ambient-glow-top" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-[#0e623b] dark:text-emerald-300 text-xs font-bold transition-colors duration-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>EXPERT ICT & DIGITAL SOLUTIONS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] transition-colors duration-300">
            Services built for real-world <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#0e623b] via-emerald-600 to-teal-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
              impact and efficiency.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            Explore our specialized software platforms, CCTV camera deployment, structured network cabling, and ICT infrastructure services.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">
            {[
              { id: 'all', label: 'All Services' },
              { id: 'software', label: 'Software & Portals' },
              { id: 'hardware', label: 'Hardware & Cabling' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as 'all' | 'software' | 'hardware')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 border ${
                  activeCategory === tab.id
                    ? 'bg-[#0e623b] text-white border-[#0e623b] dark:bg-emerald-500 dark:text-slate-950 dark:border-emerald-400 shadow-md'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {filteredServices.map((service: Service) => (
            <article
              key={service.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/60 dark:hover:border-emerald-500/50 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Media Preview Header */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-950">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-900 via-transparent to-transparent opacity-90" />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-slate-200 dark:border-slate-800 text-xs font-bold text-[#0e623b] dark:text-emerald-400 shadow-sm">
                  {service.category === 'hardware' ? 'Hardware & Infrastructure' : 'Digital Platform'}
                </span>
              </div>

              {/* Content Body */}
              <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#0e623b] dark:group-hover:text-emerald-400 transition-colors duration-300">
                    {service.title}
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Highlights List */}
                  <ul className="pt-2 space-y-1.5">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-xs font-bold text-[#0e623b] dark:text-emerald-400 hover:underline group/link"
                  >
                    <span>View full specifications</span>
                    <span className="ml-1.5 transition-transform duration-200 group-hover/link:translate-x-1">↗</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Global CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-900/90 via-[#0e623b] to-teal-900 text-white p-8 sm:p-12 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Need a custom ICT setup or system?</h2>
            <p className="text-emerald-100 text-sm max-w-xl">
              We provide physical site surveys for CCTV and networking as well as scoping sessions for custom software.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg flex-shrink-0"
          >
            Request a Survey ↗
          </Link>
        </div>

      </div>
    </main>
  );
}