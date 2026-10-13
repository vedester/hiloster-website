import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/data/services';
import { PROJECTS } from '@/data/projects';

export const metadata = {
  title: 'Hiloster Technologies | Web Development, School Systems & ICT Solutions',
  description: 'Official portal of Hiloster Technologies. Delivering custom software, school management portals, CCTV surveillance, and enterprise network infrastructure in Kenya.',
};

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white selection:bg-blue-500 selection:text-white">
      
      {/* ------------------------------------------------------------- */}
      {/* 1. HERO SECTION                                               */}
      {/* ------------------------------------------------------------- */}
      <section className="relative overflow-hidden py-24 lg:py-32 border-b border-slate-800/60">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            Engineering Modern Digital Solutions & ICT Infrastructure
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-tight">
            Software Systems, Web Portals & <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">CCTV Infrastructure</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Hiloster Technologies delivers high-performance web platforms, custom institutional management systems, IP surveillance setups, and enterprise network support across Kenya.
          </p>

          {/* Interactive CTA Button Cluster */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-slate-950 bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-300 hover:to-cyan-300 rounded-xl transition-all duration-200 shadow-xl shadow-blue-500/20"
            >
              Request a Consultation & Quote →
            </Link>
            <Link
              href="/projects"
              className="w-full sm:w-auto px-8 py-4 text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl transition-all duration-200"
            >
              Explore Our Deployments
            </Link>
          </div>

          {/* Trust Metrics Bar */}
          <div className="mt-16 pt-12 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-400">100%</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Custom Code & Systems</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">24/7</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">System Reliability & Support</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-400">Full-Stack</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Web & Mobile Architecture</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400">HD IP</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">Surveillance & NVR Specs</div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 2. SERVICES OVERVIEW (INTERACTIVE CARDS)                     */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2 block">
                What We Offer
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Core ICT & Engineering Capabilities
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-bold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 shrink-0"
            >
              View All Specifications & Pricing Models →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="group bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300"
              >
                <div>
                  <div className="relative h-40 w-full mb-6 overflow-hidden rounded-xl border border-slate-800">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                    />
                  </div>

                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 uppercase tracking-wider mb-3 inline-block">
                    {service.category}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 text-xs leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="pt-4 border-t border-slate-800/80 text-xs font-semibold text-blue-400 group-hover:text-blue-300 inline-flex items-center gap-1"
                >
                  Explore Details →
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 3. FEATURED PROJECTS / PROOF SECTION                          */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 bg-slate-900/40 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2 block">
              Proven Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Deployed Systems & Web Platforms
            </h2>
            <p className="mt-4 text-slate-400 text-sm">
              Explore live platforms built and maintained for schools, healthcare providers, and organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-blue-500/40 transition-colors"
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
                      Visit Live Site ↗
                    </Link>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

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
                    Read Case Study →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-700 hover:border-slate-500 rounded-xl text-sm font-semibold text-slate-200 hover:text-white bg-slate-900 transition-colors"
            >
              View Full Portfolio & Code Repositories
            </Link>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 4. WHY CHOOSE HILOSTER (TRUST FACTORS)                        */}
      {/* ------------------------------------------------------------- */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2 block">
                Why Hiloster Technologies
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
                Engineered for Reliability, Scalability, & Security
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                We combine deep technical expertise in modern full-stack web software with hands-on physical ICT infrastructure deployment.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold shrink-0">
                    01
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">First-Principles Software Development</h4>
                    <p className="text-slate-400 text-xs mt-1">
                      No bloated templates. We architect clean Next.js, React, and MySQL database platforms tailored to your operational requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold shrink-0">
                    02
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Hardware & Network Expertise</h4>
                    <p className="text-slate-400 text-xs mt-1">
                      Professional IP CCTV installations (Dome, Bullet, Solar PTZ) and structured Cat6 UTP network cabling for schools and commercial buildings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold shrink-0">
                    03
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">Dedicated On-Site & Remote Support</h4>
                    <p className="text-slate-400 text-xs mt-1">
                      Prompt assistance, static IP printer configuration, system backups, and regular security audits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/30 via-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 rounded-3xl space-y-6">
              <h3 className="text-2xl font-bold text-white">How We Work with Clients</h3>
              
              <div className="space-y-6 text-sm text-slate-300">
                <div className="border-l-2 border-blue-500 pl-4">
                  <span className="text-xs font-semibold text-blue-400 uppercase">Phase 1</span>
                  <h4 className="font-bold text-white">Consultation & Needs Assessment</h4>
                  <p className="text-xs text-slate-400 mt-1">Understanding your school or business workflows, security needs, or system specifications.</p>
                </div>

                <div className="border-l-2 border-cyan-500 pl-4">
                  <span className="text-xs font-semibold text-cyan-400 uppercase">Phase 2</span>
                  <h4 className="font-bold text-white">Architecture & Proposal</h4>
                  <p className="text-xs text-slate-400 mt-1">Clear technical proposal, equipment specifications, transparent cost breakdown, and timeline.</p>
                </div>

                <div className="border-l-2 border-blue-500 pl-4">
                  <span className="text-xs font-semibold text-blue-400 uppercase">Phase 3</span>
                  <h4 className="font-bold text-white">Development & Deployment</h4>
                  <p className="text-xs text-slate-400 mt-1">Building software applications or physically deploying CCTV cameras and network infrastructure.</p>
                </div>

                <div className="border-l-2 border-cyan-500 pl-4">
                  <span className="text-xs font-semibold text-cyan-400 uppercase">Phase 4</span>
                  <h4 className="font-bold text-white">Training & Maintenance</h4>
                  <p className="text-xs text-slate-400 mt-1">Staff onboarding, documentation handover, and ongoing technical support.</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="text-xs font-bold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1"
                >
                  Learn More About Hiloster Technologies →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* 5. FINAL CALL TO ACTION                                      */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-gradient-to-r from-blue-950/60 via-slate-950 to-blue-950/60 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Upgrade Your Web Platform or ICT Infrastructure?
          </h2>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            Contact our engineering team today to discuss your website, school management portal, or CCTV security setup.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-slate-950 bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-300 hover:to-cyan-300 rounded-xl transition-all shadow-xl shadow-blue-500/20"
            >
              Get in Touch Now
            </Link>
            <a
              href="https://wa.me/?text=Hello%20Hiloster%20Technologies,%20I%20would%20like%20to%20inquire%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-lg shadow-emerald-600/20"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}