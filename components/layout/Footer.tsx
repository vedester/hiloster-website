import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-white font-bold text-lg">Hiloster Technologies</h3>
          <p className="text-xs leading-relaxed text-slate-400">
            Delivering cutting-edge web platforms, custom software, CCTV security solutions, and enterprise ICT infrastructure.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link className="hover:text-white transition-colors" href="/about">About Us</Link></li>
            <li><Link className="hover:text-white transition-colors" href="/services">Services</Link></li>
            <li><Link className="hover:text-white transition-colors" href="/projects">Projects</Link></li>
            <li><Link className="hover:text-white transition-colors" href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Core Services</h4>
          <ul className="space-y-2 text-xs">
            <li>Web Design & Development</li>
            <li>Institutional Management Systems</li>
            <li>E-commerce Solutions</li>
            <li>CCTV Surveillance Installation</li>
            <li>System Administration & Support</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Legal & Support</h4>
          <ul className="space-y-2">
            <li><Link className="hover:text-white transition-colors" href="/privacy">Privacy Policy</Link></li>
            <li><Link className="hover:text-white transition-colors" href="/contact">Technical Support</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Hiloster Technologies. All rights reserved.
      </div>
    </footer>
  );
}