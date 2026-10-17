// app/layout.tsx
import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";  
import { StructuredData } from "@/components/StructuredData";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const siteUrl = "https://hiloster-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hiloster Technologies | Web Development & ICT Solutions Kenya",
    template: "%s | Hiloster Technologies",
  },
  description:
    "Hiloster Technologies builds professional websites, school management systems, custom software, mobile apps, CCTV installations and ICT infrastructure for institutions and businesses in Kenya.",
  applicationName: "Hiloster Technologies",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Hiloster Technologies",
    title: "Hiloster Technologies | Smart Solutions. Stronger Impact.",
    description:
      "Web applications, digital systems, school platforms, CCTV installation and ICT solutions for businesses and institutions in Kenya.",
    locale: "en_KE",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-KE" suppressHydrationWarning>
      <body className="antialiased selection:bg-emerald-500 selection:text-white">
        <ThemeProvider>
          <div className="ambient-glow-top" />
          <Navbar />
          <div className="relative z-10">{children}</div>
          <Footer /> {/* Kept safely inside body */}
          <StructuredData/>
        </ThemeProvider>
      </body>
    </html>
  );
}