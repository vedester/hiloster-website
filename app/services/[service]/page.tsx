// app/services/[service]/page.tsx
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES } from '@/data/services';

interface ServicePageProps {
  params: Promise<{
    service: string;
  }>;
}

// Generate static params for prerendering at build time
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    service: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { service: slug } = await params;

  // Find the service matching the URL slug
  const service = SERVICES.find((s) => s.slug === slug);

  // Trigger 404 if the service slug doesn't exist
  if (!service) {
    notFound();
  }

  return (
    <main className="py-20 bg-slate-950 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-400">
          <Link className="hover:text-blue-400 transition-colors" href="/services">
            Services
          </Link>
          <span>/</span>
          <span className="text-slate-200">{service.title}</span>
        </div>

        {/* Header */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-6">
          {service.title}
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed mb-12">
          {service.fullDescription}
        </p>

        {/* Key Deliverables / Features List */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 mb-12">
          <h2 className="text-xl font-bold text-white mb-6">Key Capabilities & Features</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Box */}
        <div className="bg-gradient-to-r from-blue-900/40 to-slate-900 border border-blue-500/30 rounded-2xl p-8 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">Need this service for your business or school?</h3>
            <p className="mt-2 text-slate-300 text-sm">Get in touch with our engineering team for a customized solution and quotation.</p>
          </div>
          <Link className="mt-6 sm:mt-0 inline-block px-6 py-3 bg-blue-500 hover:bg-blue-400 text-slate-950 font-semibold rounded-xl transition-colors text-sm flex-shrink-0" href="/contact">
            Get Started
          </Link>
        </div>

      </div>
    </main>
  );
}