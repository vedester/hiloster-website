import Link from 'next/link';

export const metadata = {
  title: 'About Us | Hiloster Technologies',
  description: 'Learn about Hiloster Technologies, our technology stack, mission, and client-focused software engineering philosophy.',
};

export default function AboutPage() {
  return (
    <main className="py-20 bg-slate-950 min-h-screen text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3 block">
            Who We Are
          </span>
          <h1 className="text-4xl font-extrabold sm:text-5xl tracking-tight">
            Empowering Organizations Through Intelligent Technology
          </h1>
          <p className="mt-4 text-slate-400 text-lg">
            Hiloster Technologies is a Kenya-based software and ICT services provider dedicated to engineering robust web applications, institutional platforms, and physical security infrastructure.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-3">Our Mission</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              To deliver secure, modern, and accessible software and ICT solutions that help businesses, educational institutions, and healthcare providers streamline operations and grow.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-white mb-3">Engineering Philosophy</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We build systems from first principles. Every feature is thoroughly planned, designed for scalability, optimized for performance, and tested to meet enterprise standards.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Ready to partner with us?</h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Explore our services or get in touch with our team to discuss your next web or ICT project.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-slate-950 font-bold rounded-xl text-sm transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}