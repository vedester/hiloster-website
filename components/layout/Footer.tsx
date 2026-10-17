// components/layout/Footer.tsx
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-slate-900 dark:text-white font-extrabold text-lg">
            Hiloster Technologies
          </h3>
          <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
            Delivering cutting-edge web platforms, custom software, CCTV security solutions, and enterprise ICT infrastructure.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-slate-900 dark:text-white font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-xs">
            <li><Link className="hover:text-[#0e623b] dark:hover:text-emerald-400 transition-colors" href="/about">About Us</Link></li>
            <li><Link className="hover:text-[#0e623b] dark:hover:text-emerald-400 transition-colors" href="/services">Services</Link></li>
            <li><Link className="hover:text-[#0e623b] dark:hover:text-emerald-400 transition-colors" href="/projects">Projects</Link></li>
            <li><Link className="hover:text-[#0e623b] dark:hover:text-emerald-400 transition-colors" href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Core Services */}
        <div>
          <h4 className="text-slate-900 dark:text-white font-bold mb-3">Core Services</h4>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
            <li>Web Design & Development</li>
            <li>Institutional Management Systems</li>
            <li>E-commerce Solutions</li>
            <li>CCTV Surveillance Installation</li>
            <li>System Administration & Support</li>
          </ul>
        </div>

        {/* Legal & Support */}
        <div>
          <h4 className="text-slate-900 dark:text-white font-bold mb-3">Legal & Support</h4>
          <ul className="space-y-2 text-xs">
            <li><Link className="hover:text-[#0e623b] dark:hover:text-emerald-400 transition-colors" href="/privacy">Privacy Policy</Link></li>
            <li><Link className="hover:text-[#0e623b] dark:hover:text-emerald-400 transition-colors" href="/contact">Technical Support</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 dark:border-slate-800/80 py-6 text-center text-xs text-slate-500 dark:text-slate-500">
        © {currentYear} Hiloster Technologies. All rights reserved.
      </div>
    </footer>
  );
}