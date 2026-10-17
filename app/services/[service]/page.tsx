// app/services/[service]/page.tsx

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/data/services';
import { PROJECTS } from '@/data/projects';

interface ServicePageProps {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    service: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { service: slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Only query software projects if this service category supports case studies
  const relatedProjects = service.hasCaseStudies
    ? PROJECTS.filter((p) => p.featured)
    : [];

  return (
    <main className="py-16 sm:py-20 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
      {/* Background Ambient Glow */}
      <div className="ambient-glow-top" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
          <Link className="hover:text-[#0e623b] dark:hover:text-emerald-400 transition-colors" href="/services">
            Services
          </Link>
          <span>/</span>
          <span className="text-slate-900 dark:text-slate-200 font-semibold">{service.title}</span>
        </div>

        {/* Hero Visual Card */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl mb-12 transition-colors duration-300">
          <div className="relative h-64 sm:h-80 w-full bg-slate-900">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              className="object-cover opacity-50 dark:opacity-40 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-white/40 dark:via-slate-950/60 to-transparent" />
          </div>

          <div className="p-8 sm:p-12 relative z-10 -mt-20 sm:-mt-24">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-[#0e623b] dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              {service.category === 'hardware' ? 'Physical Infrastructure' : 'Digital Solution'}
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4 transition-colors duration-300">
              {service.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl transition-colors duration-300 font-normal">
              {service.fullDescription}
            </p>
          </div>
        </div>

        {/* Equipment & Hardware Specs (Renders specifically for CCTV & Networking) */}
        {service.equipmentTypes && (
          <div className="mb-12">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">Equipment & Deployment Options</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6">
              Industrial-grade hardware deployed with professional cable management and secure network configurations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.equipmentTypes.map((eq, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-all shadow-sm hover:shadow-md"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-[#0e623b] dark:text-emerald-400 flex items-center justify-center font-bold mb-4 border border-emerald-200 dark:border-emerald-500/20">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{eq.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-xs leading-relaxed">{eq.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deliverables / Capabilities Checklist */}
        <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 mb-12 shadow-sm transition-colors duration-300">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Capabilities & Service Specifications</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 dark:bg-emerald-500/20 text-[#0e623b] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 flex items-center justify-center text-xs font-bold mt-0.5">
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Software Case Studies (Rendered ONLY if software category) */}
        {relatedProjects.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-6">Deployed Software Platforms & Case Studies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-emerald-500/50 transition-all shadow-sm"
                >
                  <div>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-[#0e623b] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 mb-3 inline-block">
                      {project.clientType}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-xs line-clamp-2 mb-4">{project.description}</p>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-xs font-bold text-[#0e623b] dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                  >
                    View Project Case Study →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Box */}
        <div className="bg-gradient-to-r from-[#0e623b] to-emerald-800 dark:from-slate-900 dark:to-slate-950 border border-emerald-600/40 dark:border-emerald-500/30 rounded-2xl p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between shadow-xl">
          <div>
            <h3 className="text-2xl font-extrabold text-white">Need a site survey or quotation?</h3>
            <p className="mt-2 text-emerald-100 dark:text-slate-300 text-sm">
              Contact our engineering team to schedule physical installation, network setup, or custom software projects.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-6 sm:mt-0 inline-block px-6 py-3 bg-white dark:bg-emerald-500 hover:bg-slate-100 dark:hover:bg-emerald-400 text-[#0e623b] dark:text-slate-950 font-bold rounded-xl transition-all text-sm flex-shrink-0 shadow-md"
          >
            Get a Quote ↗
          </Link>
        </div>

      </div>
    </main>
  );
}