// app/services/page.tsx
import Link from 'next/link';
import { SERVICES } from '@/data/services';

export const metadata = {
  title: 'Services | Hiloster Technologies',
  description: 'Explore our technology services including web development, school management systems, CCTV installation, and ICT support.',
};

export default function ServicesPage() {
  return (
    <main className="py-20 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl tracking-tight">Our Services</h1>
          <p className="mt-4 text-slate-400 text-lg">
            High-grade digital, software, and physical ICT solutions built to drive efficiency and operational security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-blue-500/50 transition-colors"
            >
              <div>
                <h2 className="text-xl font-bold text-white mb-3">{service.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.shortDescription}</p>
              </div>

              <Link className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300" href="{`/services/${service.slug}`}">
                View Details & Specs →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}