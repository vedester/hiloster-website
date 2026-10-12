// app/projects/page.tsx
import Link from 'next/link';
import { PROJECTS } from '@/data/projects';

export const metadata = {
  title: 'Portfolio & Projects | Hiloster Technologies',
  description: 'Explore our completed software systems, school portals, healthcare web applications, and digital platforms.',
};

export default function ProjectsPage() {
  return (
    <main className="py-20 bg-slate-950 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3 block">
            Proven Track Record
          </span>
          <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight">
            Our Completed Projects
          </h1>
          <p className="mt-4 text-slate-400 text-lg">
            Real-world systems, school portals, and digital platforms built and deployed for clients and institutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    {project.clientType}
                  </span>
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-blue-400 inline-flex items-center gap-1"
                  >
                    Live Site ↗
                  </Link>
                </div>

                <h2 className="text-2xl font-bold text-white mb-3">
                  {project.title}
                </h2>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-slate-950 text-slate-300 border border-slate-800 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                >
                  View Case Study →
                </Link>
                {project.repo && (
                  <Link
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-slate-200"
                  >
                    GitHub Code
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}