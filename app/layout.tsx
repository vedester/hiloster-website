// import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
// import './globals.css';
// import { Navbar } from '@/components/navigation/Navbar';
// import { Footer } from '@/components/layout/Footer';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Hiloster Technologies | Web Development, Software & ICT Solutions',
//   description: 'Official website of Hiloster Technologies. Expert web development, custom software systems, CCTV surveillance installation, and technical support.',
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="dark">
//       <body className={`${inter.className} bg-slate-950 text-slate-100 flex flex-col min-h-screen antialiased`}>
//         <Navbar/>
//         <div className="flex-grow">{children}</div>
//         <Footer/>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hiloster Technologies | Web Development, Software & ICT Solutions',
  description: 'Official website of Hiloster Technologies. Expert web development, custom software systems, CCTV surveillance installation, and technical support.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-950 text-slate-100 flex flex-col min-h-screen antialiased`}>
        <Navbar/>
        <div className="flex-grow">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}