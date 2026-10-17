// data/reviews.ts

export interface Review {
  id: string;
  clientName: string;
  roleOrOrganization: string;
  rating: number; // 1 to 5
  comment: string;
  serviceProvided: string;
  verified: boolean;
  date: string;
}

export const INITIAL_REVIEWS: Review[] = [
  {
    id: "bakhita-review",
    clientName: "St. Josephine Bakhita Girls' Secondary School",
    roleOrOrganization: "Nyalienga - School Administration",
    rating: 5,
    comment: "Hiloster Technologies built an outstanding web platform and administration portal for our school. Their team delivered on time and provides ongoing technical assistance.",
    serviceProvided: "School Management System & Web Portal",
    verified: true,
    date: "2024-08-15",
  },
  {
    id: "ligisa-review",
    clientName: "St. Paul's Secondary School – Ligisa",
    roleOrOrganization: "Homa Bay County - ICT Department",
    rating: 5,
    comment: "Highly professional team. They deployed our official school portal with secure data backups and clear user access roles. Excellent post-launch support.",
    serviceProvided: "Institutional Portal & Web Hosting",
    verified: true,
    date: "2024-09-10",
  },
  {
    id: "ko-physio-review",
    clientName: "KO Physiotherapy Clinic",
    roleOrOrganization: "Healthcare Management",
    rating: 5,
    comment: "The patient booking interface and multi-language support have significantly increased client engagements for our therapy clinic. Super fast response times!",
    serviceProvided: "Healthcare Web Application",
    verified: true,
    date: "2024-10-02",
  },
  {
    id: "vedester-review",
    clientName: "Omanya Vedester",
    roleOrOrganization: "Full-Stack Software Engineer",
    rating: 5,
    comment: "Exceptional system design and full-stack software development expertise. Sub-second performance optimizations and 100/100 Lighthouse scores.",
    serviceProvided: "Custom Software Development",
    verified: true,
    date: "2024-11-01",
  },
];