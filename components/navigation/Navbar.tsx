// // components/navigation/Navbar.tsx

// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { useTheme } from 'next-themes';

// export function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const pathname = usePathname();
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   // Close mobile drawer automatically when route changes
//   useEffect(() => {
//     setIsOpen(false);
//   }, [pathname]);

//   // Prevent background scrolling when mobile menu is open
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   }, [isOpen]);

//   const navLinks = [
//     { name: 'Services', href: '/services' },
//     { name: 'Solutions', href: '/solutions' },
//     { name: 'Portfolio', href: '/projects' },
//     { name: 'About', href: '/about' },
//     { name: 'Contact', href: '/contact' },
//   ];

//   const whatsappUrl = "https://wa.me/254706747884?text=" + encodeURIComponent("Hello Hiloster Technologies, I would like to enquire about your services.");

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-emerald-900/10 dark:border-slate-800/80 bg-white/95 dark:bg-slate-950/90 backdrop-blur-md transition-colors duration-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
//         {/* Brand Logo matching the original image */}
//         <Link href="/" className="flex items-center space-x-3 group">
//           {/* Green Icon Box */}
//           <div className="w-11 h-11 bg-[#0e623b] rounded-2xl flex items-center justify-center text-white font-serif italic text-2xl font-bold shadow-sm transition-transform group-hover:scale-105">
//             H
//           </div>
//           {/* Text Stack */}
//           <div className="flex flex-col justify-center">
//             <div className="flex items-baseline space-x-1 leading-tight">
//               <span className="text-xl font-extrabold text-[#0e623b] dark:text-emerald-400 tracking-tight">
//                 HiloSter
//               </span>
//             </div>
//             <span className="text-[10px] font-bold tracking-[0.2em] text-[#0e623b] dark:text-emerald-400/90 uppercase leading-none mt-0.5">
//               TECHNOLOGIES
//             </span>
//             <span className="text-[11px] text-slate-500 dark:text-slate-400 font-normal leading-tight mt-0.5">
//               Web Applications & Digital Systems
//             </span>
//           </div>
//         </Link>

//         {/* Desktop Navigation Links */}
//         <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
//           {navLinks.map((link) => {
//             const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
//             return (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`text-sm font-semibold transition-colors duration-200 ${
//                   isActive
//                     ? 'text-[#0e623b] dark:text-emerald-400 font-bold'
//                     : 'text-slate-700 dark:text-slate-200 hover:text-[#0e623b] dark:hover:text-emerald-400'
//                 }`}
//               >
//                 {link.name}
//               </Link>
//             );
//           })}
//         </nav>

//         {/* Right Section: Theme Toggle + CTA Button */}
//         <div className="hidden md:flex items-center space-x-4">
//           {/* Dark / Light Mode Switch */}
//           {mounted && (
//             <button
//               onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//               className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors"
//               aria-label="Toggle Theme"
//             >
//               {theme === 'dark' ? (
//                 /* Sun Icon for Light Mode */
//                 <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
//                 </svg>
//               ) : (
//                 /* Moon Icon for Dark Mode */
//                 <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
//                 </svg>
//               )}
//             </button>
//           )}

//           {/* Green Get a Quote Button */}
//           <a
//             href={whatsappUrl}
//             target="_blank"
//             rel="noreferrer"
//             className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#0e623b] hover:bg-[#0b4d2e] dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded-xl transition-all shadow-sm hover:shadow-md"
//           >
//             Get a Quote <span className="ml-1.5 text-xs">↗</span>
//           </a>
//         </div>

//         {/* Mobile Buttons */}
//         <div className="flex items-center space-x-2 md:hidden">
//           {mounted && (
//             <button
//               onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//               className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800"
//               aria-label="Toggle theme"
//             >
//               {theme === 'dark' ? (
//                 <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
//                 </svg>
//               ) : (
//                 <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
//                 </svg>
//               )}
//             </button>
//           )}

//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800"
//             aria-label="Toggle navigation menu"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               {isOpen ? (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//               ) : (
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Drawer Menu */}
//       {isOpen && (
//         <div className="md:hidden fixed inset-x-0 top-20 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-2xl">
//           <nav className="flex flex-col space-y-3">
//             {navLinks.map((link) => {
//               const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
//               return (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className={`px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
//                     isActive
//                       ? 'text-[#0e623b] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 font-semibold'
//                       : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
//                   }`}
//                 >
//                   {link.name}
//                 </Link>
//               );
//             })}
//           </nav>

//           <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
//             <a
//               href={whatsappUrl}
//               target="_blank"
//               rel="noreferrer"
//               className="w-full inline-flex items-center justify-center px-4 py-3.5 text-sm font-semibold text-white bg-[#0e623b] hover:bg-[#0b4d2e] rounded-xl transition-all shadow-md"
//             >
//               Get a Quote ↗
//             </a>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

// components/navigation/Navbar.tsx

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    {name:'Home', href: '/'},
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    // { name: 'Solutions', href: '/solutions' },
    { name: 'Projects', href: '/projects' },
    
    { name: 'Contact', href: '/contact' },
  ];

  const whatsappUrl = "https://wa.me/254706747884?text=" + encodeURIComponent("Hello Hiloster Technologies, I would like to enquire about your services.");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo - Adaptive Light/Dark Colors */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-11 h-11 bg-[#0e623b] dark:bg-emerald-500 rounded-2xl flex items-center justify-center text-white dark:text-slate-950 font-serif italic text-2xl font-bold shadow-sm transition-transform group-hover:scale-105">
            H
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-baseline space-x-1 leading-tight">
              <span className="text-xl font-extrabold text-[#0e623b] dark:text-emerald-400 tracking-tight">
                HiloSter
              </span>
            </div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#0e623b] dark:text-emerald-400/90 uppercase leading-none mt-0.5">
              TECHNOLOGIES
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-normal leading-tight mt-0.5">
              Web Applications & Digital Systems
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? 'text-[#0e623b] dark:text-emerald-400 font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:text-[#0e623b] dark:hover:text-emerald-400'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Controls: Theme Switch + CTA */}
        <div className="hidden md:flex items-center space-x-4">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          )}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white dark:text-slate-950 bg-[#0e623b] hover:bg-[#0b4d2e] dark:bg-emerald-400 dark:hover:bg-emerald-300 rounded-xl transition-all shadow-sm"
          >
            Get a Quote <span className="ml-1.5 text-xs">↗</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-2 md:hidden">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 p-6 space-y-4 shadow-2xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'text-[#0e623b] dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center px-4 py-3.5 text-sm font-semibold text-white dark:text-slate-950 bg-[#0e623b] dark:bg-emerald-400 rounded-xl transition-all shadow-md"
            >
              Get a Quote ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}