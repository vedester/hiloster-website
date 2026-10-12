export interface Project {
  id: string;
  slug: string;
  title: string;
  clientType: string;
  description: string;
  fullDetails: string;
  tech: string[];
  repo?: string;
  live: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "st-josephine-bakhita",
    slug: "st-josephine-bakhita",
    title: "St. Josephine Bakhita Girls' Secondary School",
    clientType: "Educational Institution",
    description: "Official web platform and dynamic administrative portal designed for school management, student information, and institution updates.",
    fullDetails: "Developed and co-deployed a comprehensive web presence for St. Josephine Bakhita Girls' Secondary School in Nyalienga. The platform acts as an informational hub for parents, students, and stakeholders, featuring structured content management, responsive layouts, and search engine optimization.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MySQL"],
    repo: "https://github.com/vedester/bakhita",
    live: "https://www.stjosephinebakhitanyalienga.sc.ke/",
    featured: true,
  },
  {
    id: "ko-physiotherapy",
    slug: "ko-physiotherapy",
    title: "KO Physiotherapy Clinic",
    clientType: "Healthcare Provider",
    description: "Modern healthcare web application offering patient session scheduling, service catalog, and clinic information with multi-language support.",
    fullDetails: "Built and hosted a responsive healthcare web platform featuring online booking workflows, clear treatment service catalogs, and localized accessibility to streamline patient engagement.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express"],
    repo: "https://github.com/vedester/medical-website",
    live: "https://medical-website-murex.vercel.app/en",
    featured: true,
  },
  {
    id: "vedester-portfolio",
    slug: "vedester-portfolio",
    title: "Omanya Vedester - Professional Portfolio",
    clientType: "Personal Brand & Engineering",
    description: "Personal full-stack engineering portfolio highlighting technical projects, professional milestones, and ICT expertise.",
    fullDetails: "An interactive portfolio application demonstrating full-stack software development projects, technical skills in system architecture and web engineering, and contact workflows.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    live: "https://vedester-portfolio.onrender.com/",
    featured: true,
  },
  {
    id: "ligisa-secondary",
    slug: "ligisa-secondary",
    title: "St. Paul's Secondary School – Ligisa",
    clientType: "Educational Institution",
    description: "Official web platform and administrative portal for St. Paul's Secondary School in Homa Bay County.",
    fullDetails: "Engineered and deployed the official online portal for St. Paul's Secondary School – Ligisa, providing secure administrative access, institutional updates, and resource visibility for the school community.",
    tech: ["Next.js", "React", "Tailwind CSS", "MySQL"],
    live: "https://ligisa.sc.ke",
    featured: true,
  }
];