//  data/services.ts

export interface Service {
  id: string;
  slug: string;
  title: string;
  category: 'software' | 'hardware' | 'consultancy';
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: string;
  features: string[];
  equipmentTypes?: { name: string; description: string }[];
  hasCaseStudies: boolean;
  badge?: string; // e.g. "Most Requested", "Hardware Solution"
  deliverables?: string[]; // e.g. ["Live Domain Deployment", "Staff Training", "1-Year Support"]
  techStack?: string[]; // e.g. ["Next.js", "PostgreSQL", "Tailwind CSS", "Docker"]
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
    iconName: "Globe",
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
    iconName: "Building2",
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
    iconName: "Camera",
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
    iconName: "Network",
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