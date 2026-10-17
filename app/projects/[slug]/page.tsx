// app/projects/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PROJECTS } from '@/data/projects';
import type { Metadata } from 'next';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Project Not Found | Hiloster Technologies' };
  }

  return {
    title: `${project.title} | Hiloster Technologies Portfolio`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="ambient-glow-top" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-[#0e623b] dark:hover:text-emerald-400 transition-colors"
          >
            ← Back to All Projects
          </Link>
        </div>

        {/* Main Hero Header Card */}
        <div className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 sm:p-12 mb-10 shadow-sm transition-colors duration-300 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-[#0e623b] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                {project.clientType}
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                • {project.year}
              </span>
            </div>
            
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
              Verified Case Study
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            {project.fullDetails}
          </p>

          {/* Impact Metrics Grid */}
          {project.impactMetrics && project.impactMetrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
              {project.impactMetrics.map((metric, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/60">
                  <p className="text-xs font-bold text-[#0e623b] dark:text-emerald-400">Key Highlight</p>
                  <p className="text-xs text-slate-700 dark:text-slate-300 font-medium mt-0.5">{metric}</p>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-100 dark:border-slate-800">
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#0e623b] hover:bg-[#0b4d2e] dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-bold rounded-xl text-sm transition-all shadow-md"
            >
              Visit Live Platform ↗
            </Link>
            {project.repo && (
              <Link
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-xl text-sm transition-colors border border-slate-200 dark:border-slate-700"
              >
                View Repository ↗
              </Link>
            )}
          </div>
        </div>

        {/* Deliverables & Key Features */}
        {project.keyDeliverables && (
          <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 mb-10 shadow-sm transition-colors duration-300">
            <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mb-4">Project Deliverables & Engineering Scope</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyDeliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack Used */}
        <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm transition-colors duration-300">
          <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mb-4">Technologies & System Architecture</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 text-xs font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}