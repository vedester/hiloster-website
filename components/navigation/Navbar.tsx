import Link from 'next/link';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link className="flex items-center space-x-2" href="/">
          <span className="text-xl font-bold tracking-wider text-white">
            HILOSTER<span className="text-blue-500">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <Link className="hover:text-white transition-colors" href="/about">
            About
          </Link>
          <Link className="hover:text-white transition-colors" href="/services">
            Services
          </Link>
          <Link className="hover:text-white transition-colors" href="/projects">
            Projects
          </Link>
          <Link className="hover:text-white transition-colors" href="/contact">
            Contact
          </Link>
        </nav>

        <div>
          <Link className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-500 transition-colors" href="/contact">
            Get in Touch
          </Link>
        </div>
      </div>
    </header>
  );
}