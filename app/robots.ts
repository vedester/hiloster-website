// import type { MetadataRoute } from "next";

// export default function robots(): MetadataRoute.Robots {
//   const baseUrl = "https://hiloster-website.vercel.app";
//   return {
//     rules: { userAgent: "*", allow: "/" },
//     sitemap: `${baseUrl}/sitemap.xml`,
//     host: baseUrl,
//   };
// }

// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://hiloster-website.vercel.app/sitemap.xml',
  };
}