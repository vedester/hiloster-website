// app/projects/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PROJECTS, Project } from '@/data/projects';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'system' | 'web' | 'software'>('all');

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <main className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 py-16 lg:py-24">
      {/* Background Ambient Glow */}
      <div className="ambient-glow-top" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-[#0e623b] dark:text-emerald-300 text-xs font-bold transition-colors duration-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>PROVEN TRACK RECORD</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.15] transition-colors duration-300">
            Engineered systems & <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#0e623b] via-emerald-600 to-teal-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
              live client deployments.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            Explore our completed software systems, school administrative portals, healthcare platforms, and digital solutions deployed across Kenya.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center gap-2 pt-4 flex-wrap">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'system', label: 'Institutional Portals' },
              { id: 'web', label: 'Web Applications' },
              { id: 'software', label: 'Software Engineering' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as 'all' | 'system' | 'web' | 'software')}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {filteredProjects.map((project: Project) => (
            <article
              key={project.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/60 dark:hover:border-emerald-500/50 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="space-y-5">
                {/* Top Badge & Live Indicator */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-[#0e623b] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                    {project.clientType}
                  </span>
                  
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-[#0e623b] dark:hover:text-emerald-400 transition-colors"
                  >
                    <span>Live Site</span>
                    <span className="ml-1">↗</span>
                  </a>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-[#0e623b] dark:group-hover:text-emerald-400 transition-colors duration-300">
                  {project.title}
                </h2>

                {/* Short Description */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300">
                  {project.description}
                </p>

                {/* Impact Highlight Preview */}
                {project.impactMetrics && project.impactMetrics.length > 0 && (
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/60">
                    <p className="text-[11px] font-bold text-[#0e623b] dark:text-emerald-400">
                      Key Highlight: <span className="font-medium text-slate-700 dark:text-slate-300">{project.impactMetrics[0]}</span>
                    </p>
                  </div>
                )}

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 px-2.5 py-1 rounded-lg font-medium transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center text-xs font-bold text-[#0e623b] dark:text-emerald-400 hover:underline group/link"
                >
                  <span>View Case Study</span>
                  <span className="ml-1.5 transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                </Link>

                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
                  >
                    Repository ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-900/90 via-[#0e623b] to-teal-900 text-white p-8 sm:p-12 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Have a project or platform in mind?</h2>
            <p className="text-emerald-100 text-sm max-w-xl">
              Partner with Hiloster Technologies to build fast, secure, and custom web applications for your institution or business.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-sm rounded-xl transition-all shadow-lg flex-shrink-0"
          >
            Start Your Project ↗
          </Link>
        </div>

      </div>
    </main>
  );
}