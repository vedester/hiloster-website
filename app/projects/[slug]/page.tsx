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
    <main className="py-20 bg-slate-950 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="text-xs font-semibold text-slate-400 hover:text-blue-400 transition-colors"
          >
            ← Back to All Projects
          </Link>
        </div>

        {/* Header */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {project.clientType}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            {project.title}
          </h1>

          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            {project.fullDetails}
          </p>

          <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-800">
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-slate-950 font-semibold rounded-xl text-sm transition-colors"
            >
              Visit Live Platform ↗
            </Link>
            {project.repo && (
              <Link
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl text-sm transition-colors border border-slate-700"
              >
                View Repository ↗
              </Link>
            )}
          </div>
        </div>

        {/* Tech Stack Used */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">Technologies & Architecture</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-slate-950 text-slate-200 border border-slate-800 text-sm font-medium"
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