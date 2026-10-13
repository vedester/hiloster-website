
// export interface Service {
//   id: string;
//   slug: string;
//   title: string;
//   shortDescription: string;
//   fullDescription: string;
//   iconName: string;
//   features: string[];
// }

// export const SERVICES: Service[] = [
//   {
//     id: "web-dev",
//     slug: "web-development",
//     title: "Web Design & Development",
//     shortDescription: "Custom, responsive, high-performance web applications built with Next.js and modern technologies.",
//     fullDescription: "We build fast, secure, and SEO-optimized web platforms tailored to represent your brand and convert visitors into clients.",
//     iconName: "Globe",
//     features: [
//       "Custom UI/UX Design",
//       "Next.js & React Architecture",
//       "Responsive Mobile Design",
//       "SEO & Speed Optimization",
//       "Content Management Integration"
//     ]
//   },
//   {
//     id: "software-systems",
//     slug: "software-systems",
//     title: "Business & School Management Systems",
//     shortDescription: "Tailored management software designed to streamline operations, data management, and reporting.",
//     fullDescription: "Automate administrative workflows, student/employee records, invoicing, and reporting with customized software portals.",
//     iconName: "Server",
//     features: [
//       "School Portals & Admin Dashboards",
//       "Database Architecture & Design",
//       "Role-Based Access Control",
//       "Automated Reporting",
//       "Data Migration & Backup"
//     ]
//   },
//   {
//     id: "cctv-installation",
//     slug: "cctv-installation",
//     title: "CCTV Installation & Configuration",
//     shortDescription: "Professional surveillance system setup and IP camera network configuration for schools and businesses.",
//     fullDescription: "Complete security camera installations, network video recording (NVR/DVR), remote mobile viewing setup, and system maintenance.",
//     iconName: "ShieldCheck",
//     features: [
//       "IP Camera Deployment",
//       "Remote Mobile Monitoring",
//       "DVR/NVR Configuration",
//       "Network Cable Routing",
//       "System Diagnostics & Repair"
//     ]
//   },
//   {
//     id: "ict-support",
//     slug: "ict-support",
//     title: "Network & ICT Support Services",
//     shortDescription: "Hardware troubleshooting, OS installation, network setup, and general technical support.",
//     fullDescription: "Comprehensive technical support ranging from server maintenance, local network routing, and software configuration to hardware repairs.",
//     iconName: "Wrench",
//     features: [
//       "Operating System & Office Setup",
//       "Local Area Network (LAN) Setup",
//       "Hardware Diagnostics & Repair",
//       "System Backup & Security Audits",
//       "Technical Consultancy"
//     ]
//   }
// ];

export interface Service {
  id: string;
  slug: string;
  title: string;
  category: 'software' | 'hardware' | 'consultancy';
  shortDescription: string;
  fullDescription: string;
  image: string;
  features: string[];
  equipmentTypes?: { name: string; description: string }[];
  hasCaseStudies: boolean;
}

export const SERVICES: Service[] = [
  {
    id: "web-dev",
    slug: "web-development",
    title: "Web Design & Development",
    category: "software",
    shortDescription: "Custom, responsive, high-performance web applications built with Next.js, React, and modern backend services.",
    fullDescription: "We engineer fast, secure, and SEO-optimized web platforms tailored to represent your brand, manage content, and convert visitors into active clients.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Custom UI/UX & Web Portal Architecture",
      "Next.js & React High-Performance Rendering",
      "Mobile-First Responsive Design",
      "SEO & Core Web Vitals Optimization",
      "Content Management & Dynamic APIs"
    ],
    hasCaseStudies: true
  },
  {
    id: "software-systems",
    slug: "software-systems",
    title: "Business & School Management Systems",
    category: "software",
    shortDescription: "Tailored management platforms designed to streamline administrative workflows, student portals, and reporting.",
    fullDescription: "Automate institutional operations, student/employee records, billing, fee tracking, and reporting with customized relational database portals.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    features: [
      "School Portals & Admin Dashboards",
      "Relational Database Architecture (MySQL/PostgreSQL)",
      "Role-Based Access Control & Security",
      "Automated Gradebook & Financial Reporting",
      "Data Migration & Cloud Backups"
    ],
    hasCaseStudies: true
  },
  {
    id: "cctv-installation",
    slug: "cctv-installation",
    title: "CCTV Surveillance & Security Solutions",
    category: "hardware",
    shortDescription: "Enterprise IP camera deployment, Night-Vision Dome & Bullet systems, Solar PTZ surveillance, and remote NVR monitoring.",
    fullDescription: "Complete security surveillance installations for schools, offices, commercial buildings, and residences. We handle physical cabling, NVR channel assignments, static IP network routing, and encrypted mobile remote monitoring.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Dome Cameras (Indoor ceiling multi-angle surveillance)",
      "Bullet & Weatherproof Outdoor Night-Vision Cameras",
      "Solar-Powered 4G/IP PTZ (Pan-Tilt-Zoom) Cameras for Remote Areas",
      "NVR / DVR Storage Setup & Multi-Channel Configuration",
      "Mobile App Live Stream & Remote Playback Access",
      "Clean Trunking & Conduit Cable Routing"
    ],
    equipmentTypes: [
      {
        name: "Dome Cameras",
        description: "Vandal-resistant indoor/outdoor dome units providing wide-angle coverage for school corridors, office reception areas, and halls."
      },
      {
        name: "Bullet Cameras",
        description: "Long-range, high-visibility weatherproof cameras equipped with IR Night Vision for perimeter walls, gates, and parking lots."
      },
      {
        name: "Solar-Powered PTZ Cameras",
        description: "Standalone 360° Pan-Tilt-Zoom security cameras with solar panels and SIM/4G connectivity for off-grid sites and farm perimeters."
      },
      {
        name: "Network Video Recorders (NVR/DVR)",
        description: "High-capacity multi-channel storage units configured with secure IP access and automated disk overwriting."
      }
    ],
    hasCaseStudies: false
  },
  {
    id: "ict-support",
    slug: "ict-support",
    title: "Structured Network Cabling & ICT Support",
    category: "hardware",
    shortDescription: "Cat6 UTP/Fibre optic cable routing, network switch cabinet patching, local printer static IP setup, and computer lab setup.",
    fullDescription: "End-to-end local area network (LAN) deployment and hardware support. From dressing network racks with patch panels and switches to setting up computer labs, static IP printers, and operating system deployments.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Cat6 UTP & Fibre Optic Cable Installation",
      "Network Cabinet & Patch Panel Dressing",
      "Managed Network Switches & Router Configurations",
      "Computer Lab Infrastructure & Local P2P File Sharing",
      "Static IP Network Printer Configuration (Kyocera, HP, etc.)",
      "Dual-Boot Linux (Ubuntu) & Windows OS Setup"
    ],
    equipmentTypes: [
      {
        name: "Cat6 UTP & Fibre Optic Backbone",
        description: "High-speed gigabit Ethernet cabling for noise-free data transmission across computer labs and multi-story offices."
      },
      {
        name: "Network Racks & Patch Panels",
        description: "Neatly dressed server cabinets with color-coded Ethernet patch cords, switches, and surge-protected power distribution."
      },
      {
        name: "Kyocera & Industrial Printer Setup",
        description: "Static IP setup, local network printer spooling, and peer-to-peer file/folder sharing across Windows & Linux workstations."
      }
    ],
    hasCaseStudies: false
  }
];