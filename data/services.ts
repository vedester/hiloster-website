
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    slug: "web-development",
    title: "Web Design & Development",
    shortDescription: "Custom, responsive, high-performance web applications built with Next.js and modern technologies.",
    fullDescription: "We build fast, secure, and SEO-optimized web platforms tailored to represent your brand and convert visitors into clients.",
    iconName: "Globe",
    features: [
      "Custom UI/UX Design",
      "Next.js & React Architecture",
      "Responsive Mobile Design",
      "SEO & Speed Optimization",
      "Content Management Integration"
    ]
  },
  {
    id: "software-systems",
    slug: "software-systems",
    title: "Business & School Management Systems",
    shortDescription: "Tailored management software designed to streamline operations, data management, and reporting.",
    fullDescription: "Automate administrative workflows, student/employee records, invoicing, and reporting with customized software portals.",
    iconName: "Server",
    features: [
      "School Portals & Admin Dashboards",
      "Database Architecture & Design",
      "Role-Based Access Control",
      "Automated Reporting",
      "Data Migration & Backup"
    ]
  },
  {
    id: "cctv-installation",
    slug: "cctv-installation",
    title: "CCTV Installation & Configuration",
    shortDescription: "Professional surveillance system setup and IP camera network configuration for schools and businesses.",
    fullDescription: "Complete security camera installations, network video recording (NVR/DVR), remote mobile viewing setup, and system maintenance.",
    iconName: "ShieldCheck",
    features: [
      "IP Camera Deployment",
      "Remote Mobile Monitoring",
      "DVR/NVR Configuration",
      "Network Cable Routing",
      "System Diagnostics & Repair"
    ]
  },
  {
    id: "ict-support",
    slug: "ict-support",
    title: "Network & ICT Support Services",
    shortDescription: "Hardware troubleshooting, OS installation, network setup, and general technical support.",
    fullDescription: "Comprehensive technical support ranging from server maintenance, local network routing, and software configuration to hardware repairs.",
    iconName: "Wrench",
    features: [
      "Operating System & Office Setup",
      "Local Area Network (LAN) Setup",
      "Hardware Diagnostics & Repair",
      "System Backup & Security Audits",
      "Technical Consultancy"
    ]
  }
];