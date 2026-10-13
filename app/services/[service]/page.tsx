// // app/services/[service]/page.tsx
// import { notFound } from 'next/navigation';
// import Link from 'next/link';
// import { SERVICES } from '@/data/services';

// interface ServicePageProps {
//   params: Promise<{
//     service: string;
//   }>;
// }

// // Generate static params for prerendering at build time
// export async function generateStaticParams() {
//   return SERVICES.map((service) => ({
//     service: service.slug,
//   }));
// }

// export default async function ServiceDetailPage({ params }: ServicePageProps) {
//   const { service: slug } = await params;

//   // Find the service matching the URL slug
//   const service = SERVICES.find((s) => s.slug === slug);

//   // Trigger 404 if the service slug doesn't exist
//   if (!service) {
//     notFound();
//   }

//   return (
//     <main className="py-20 bg-slate-950 text-white min-h-screen">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Breadcrumb Navigation */}
//         <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
//           <Link className="hover:text-blue-400 transition-colors" href="/services">
//             Services
//           </Link>
//           <span>/</span>
//           <span className="text-slate-200">{service.title}</span>
//         </div>

//         {/* Header */}
//         <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
//           {service.title}
//         </h1>
//         <p className="text-lg text-slate-300 leading-relaxed mb-12">
//           {service.fullDescription}
//         </p>

//         {/* Key Deliverables / Features List */}
//         <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-12">
//           <h2 className="text-xl font-bold text-white mb-6">Key Capabilities & Features</h2>
//           <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {service.features.map((feature, idx) => (
//               <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
//                 <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">
//                   ✓
//                 </span>
//                 <span>{feature}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* CTA Box */}
//         <div className="bg-gradient-to-r from-blue-900/40 to-slate-900 border border-blue-500/30 rounded-2xl p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
//           <div>
//             <h3 className="text-2xl font-bold text-white">Need this service for your business or school?</h3>
//             <p className="mt-2 text-slate-300 text-sm">Get in touch with our engineering team for a customized solution and quotation.</p>
//           </div>
//           <Link className="mt-6 sm:mt-0 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-400 text-slate-950 font-semibold rounded-xl transition-colors text-sm flex-shrink-0" href="/contact">
//             Get Started
//           </Link>
//         </div>

//       </div>
//     </main>
//   );
// }

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
    <main className="py-20 bg-slate-950 text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
          <Link className="hover:text-blue-400 transition-colors" href="/services">
            Services
          </Link>
          <span>/</span>
          <span className="text-slate-200">{service.title}</span>
        </div>

        {/* Hero Visual Card */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 mb-12">
          <div className="relative h-64 sm:h-80 w-full">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              className="object-cover opacity-40 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
          </div>

          <div className="p-8 sm:p-12 relative z-10 -mt-24">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
              {service.category === 'hardware' ? 'Physical Infrastructure' : 'Digital Solution'}
            </span>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              {service.title}
            </h1>

            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">
              {service.fullDescription}
            </p>
          </div>
        </div>

        {/* Equipment & Hardware Specs (Renders specifically for CCTV & Networking) */}
        {service.equipmentTypes && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-2">Equipment & Deployment Options</h2>
            <p className="text-slate-400 text-sm mb-6">
              Industrial-grade hardware deployed with professional cable management and secure network configurations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.equipmentTypes.map((eq, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{eq.name}</h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{eq.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Deliverables / Capabilities Checklist */}
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Capabilities & Service Specifications</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold mt-0.5">
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
            <h2 className="text-2xl font-bold text-white mb-6">Deployed Software Platforms & Case Studies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-blue-500/40 transition-colors"
                >
                  <div>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3 inline-block">
                      {project.clientType}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 text-xs line-clamp-2 mb-4">{project.description}</p>
                  </div>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                  >
                    View Project Case Study →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Box */}
        <div className="bg-gradient-to-r from-blue-900/40 to-slate-900 border border-blue-500/30 rounded-2xl p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">Need a site survey or quotation?</h3>
            <p className="mt-2 text-slate-300 text-sm">
              Contact our engineering team to schedule physical installation, network setup, or custom software projects.
            </p>
          </div>
          <Link
            href="/contact"
            className="mt-6 sm:mt-0 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold rounded-xl transition-colors text-sm flex-shrink-0"
          >
            Get a Quote
          </Link>
        </div>

      </div>
    </main>
  );
}