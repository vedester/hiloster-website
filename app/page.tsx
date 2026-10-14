import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Web Development, School Systems & ICT Solutions in Kenya",
  description:
    "Explore Hiloster Technologies services: websites, e-commerce, custom software, school administration platforms, Android apps, CCTV installation, networking and ICT support in Kenya.",
};

const services = [
  { icon: "◎", title: "Professional Websites", text: "Responsive websites for companies, schools, organisations and professionals." },
  { icon: "🛒", title: "E-commerce Platforms", text: "Online stores with product catalogues, enquiry flows and sales features tailored to your needs." },
  { icon: "⌘", title: "Custom Web Applications", text: "Purpose-built web apps that help teams organise work and serve customers." },
  { icon: "▤", title: "Content Management Systems", text: "Manage pages, news, events and updates without editing code." },
  { icon: "♙", title: "Portals & Dashboards", text: "Role-based portals and dashboards for users, teams and administrators." },
  { icon: "▱", title: "Document Management", text: "Organise digital records and document workflows around your requirements." },
  { icon: "▦", title: "Booking & Enquiry Systems", text: "Make it easier for customers to request services, book appointments or send enquiries." },
  { icon: "🎓", title: "School & Institution Systems", text: "Digital platforms for school information, student records and administrative workflows." },
  { icon: "▣", title: "CCTV Installation", text: "CCTV camera installation, recording, remote viewing setup and maintenance." },
  { icon: "</>", title: "Software Development", text: "Custom business systems, integrations, APIs and ongoing technical support." },
  { icon: "▣", title: "Android Applications", text: "Mobile app experiences for business, education and service delivery." },
  { icon: "☁", title: "ICT Solutions", text: "Networking, configuration, troubleshooting, hardware and software support." },
];

const packages = [
  { name: "Essential Website", tag: "Online presence", desc: "A professional starting point for institutions and businesses.", features: ["Responsive website", "Essential pages", "Basic SEO setup", "Deployment and launch"] },
  { name: "Complete Website", tag: "Recommended", desc: "A fuller public-facing website for organisations with more content.", features: ["Everything in Essential", "Departments, news and events", "Resource centre", "SEO and support options"] },
  { name: "Website + CMS", tag: "Manage your content", desc: "For teams that need to update website content themselves.", features: ["Admin dashboard", "Content management", "Team roles and permissions", "Website content workflows"] },
  { name: "School Admin Platform", tag: "Education", desc: "Custom school systems planned around the institution’s workflow.", features: ["Student records and portals", "Fees and synchronisation options", "Results management", "Custom modules as agreed"] },
  { name: "Software Development", tag: "Custom-built", desc: "Software designed around your business processes.", features: ["Web applications", "Business systems", "API integration", "Ongoing support options"] },
  { name: "Android & Applications", tag: "Mobile", desc: "Mobile applications to improve access and service delivery.", features: ["Business and e-learning apps", "Service applications", "UI/UX design", "Deployment assistance"] },
  { name: "ICT Solutions", tag: "Infrastructure", desc: "Technical services for institutions, offices and business environments.", features: ["Network setup and configuration", "System maintenance", "IT support and consulting", "Hardware and software supply"] },
  { name: "CCTV Installation", tag: "Security", desc: "Surveillance systems configured for your site and requirements.", features: ["Indoor and outdoor cameras", "Remote viewing setup", "Recording and storage", "Maintenance and support"] },
];

const projects = [
  { name: "St. Josephine Bakhita Girls", detail: "Nyalienga Secondary School", url: "https://www.stjosephinebakhitagirls.sc.ke" },
  { name: "St. Paul’s Secondary School", detail: "Ligisa", url: "https://www.ligisa.sc.ke" },
];

const phone1 = "0706747884";
const phone2 = "0745389833";
const email = "hilostertechnologies@gmail.com";
const whatsapp = "https://wa.me/254706747884?text=" + encodeURIComponent("Hello Hiloster Technologies, I would like to enquire about your services.");

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{text && <p className="section-intro">{text}</p>}</div>;
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hiloster Technologies",
    url: "https://hiloster-website.vercel.app/",
    email,
    telephone: [phone1, phone2],
    slogan: "Smart Solutions. Stronger Impact.",
    description: "Web applications, digital systems, school platforms, CCTV installation and ICT solutions.",
    address: { "@type": "PostalAddress", addressLocality: "Rangwe", addressCountry: "KE" },
    areaServed: { "@type": "Country", name: "Kenya" },
    knowsAbout: services.map((service) => service.title),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="top-strip"><div className="container top-inner"><span>📍 Rangwe, Kenya</span><span>Smart Solutions. Stronger Impact.</span><a href={`mailto:${email}`}>{email}</a></div></div>
      <header className="site-header">
        <div className="container nav">
          <a className="brand" href="#home" aria-label="Hiloster Technologies homepage">
            <span className="brand-mark">H</span><span><strong>HiloSter</strong><small>TECHNOLOGIES</small><em>Web Applications & Digital Systems</em></span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#services">Services</a><a href="#solutions">Solutions</a><a href="#projects">Portfolio</a><a href="#why-us">About</a><a href="#contact">Contact</a>
          </nav>
          <a className="button button-small" href={whatsapp} target="_blank" rel="noreferrer">Get a Quote <span>↗</span></a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="pill"><span className="pulse" /> DIGITAL SOLUTIONS FOR REAL-WORLD NEEDS</div>
            <h1>We build digital solutions <span>that grow your vision.</span></h1>
            <p className="hero-lead">We design and develop professional websites, web applications, mobile apps, software solutions and ICT systems that help businesses, institutions and organisations work smarter and serve better.</p>
            <div className="hero-actions"><a className="button" href="#contact">Let’s discuss your project <span>↗</span></a><a className="button button-ghost" href="#projects">Explore our work</a></div>
            <div className="hero-proof"><span>✓ Mobile responsive</span><span>✓ Secure by design</span><span>✓ Built around your needs</span></div>
          </div>
          <div className="hero-visual">
            <div className="hero-image">
            <Image
      src="/images/hiloster-hero.jpeg"
      alt="Hiloster Technologies — web development, CCTV installation, education and ICT solutions"
      width={1200}
      height={800}
      priority
      className="hero-image-content"
     />
  </div>
</div>
            <div className="dashboard-window">
              <div className="window-bar"><span></span><span></span><span></span><b>HiloSter Digital</b></div>
              <div className="dashboard-content"><div className="mini-brand">H <b>Hiloster</b><small>Technologies</small></div><div className="dashboard-banner"><span>Digital tools.<br/><b>Stronger outcomes.</b></span><div className="banner-orbit">✦</div></div><div className="metric-grid"><div><strong>Web</strong><small>Development</small></div><div><strong>School</strong><small>Platforms</small></div><div><strong>ICT</strong><small>Solutions</small></div></div><div className="chart"><span style={{height:"35%"}}></span><span style={{height:"55%"}}></span><span style={{height:"43%"}}></span><span style={{height:"74%"}}></span><span style={{height:"62%"}}></span><span style={{height:"92%"}}></span><span style={{height:"80%"}}></span></div></div>
            </div>
        </div>
        <div className="hero-bottom"><div className="container hero-bottom-inner"><span>WE BUILD</span><div className="hero-bottom-line"></div><strong>Websites <i>•</i> Software <i>•</i> School Systems <i>•</i> ICT Infrastructure</strong></div></div>
      </section>

      <section className="services section" id="services">
        <div className="container"><SectionHeading eyebrow="WHAT WE BUILD" title="Digital services for every need" text="Practical technology services to help your organisation connect with people, manage work and grow with confidence." />
          <div className="service-grid">{services.map((s) => <article className="service-card" key={s.title}><div className="service-icon">{s.icon}</div><h3>{s.title}</h3><p>{s.text}</p><a href="#contact" aria-label={`Enquire about ${s.title}`}>Discuss this service <span>↗</span></a></article>)}</div>
        </div>
      </section>

      <section className="solutions section" id="solutions">
        <div className="container"><SectionHeading eyebrow="SOLUTIONS FOR EVERY NEED" title="Choose the right starting point" text="Every project is different. We scope each solution with you and confirm the features, timeline and final price before work begins." />
          <div className="package-grid">{packages.map((p, i) => <article className={`package-card ${i === 1 ? "featured" : ""}`} key={p.name}><div className="package-top"><span className="package-icon">{["▣","✦","▤","⌂","⌘","▣","☁","◉"][i]}</span>{i === 1 && <span className="recommended">POPULAR OPTION</span>}</div><p className="package-tag">{p.tag}</p><h3>{p.name}</h3><p className="package-desc">{p.desc}</p><ul>{p.features.map((f) => <li key={f}><span>✓</span>{f}</li>)}</ul><a className="package-link" href={`${whatsapp}&package=${encodeURIComponent(p.name)}`}>Request a quote <span>↗</span></a></article>)}</div>
          <p className="pricing-note"><span>ⓘ</span> Prices are provided after consultation and are based on your requirements, selected modules, integrations and support needs. Any starting prices advertised are indicative, not final quotations.</p>
        </div>
      </section>

      <section className="why section" id="why-us"><div className="container why-grid"><div><SectionHeading eyebrow="WHY WORK WITH US?" title="Technology built around your goals" text="We combine practical technical delivery with clear communication, helping you choose a solution that fits your organisation and users."/><a className="button" href={whatsapp} target="_blank" rel="noreferrer">Talk to our team <span>↗</span></a></div><div className="benefit-grid"><div className="benefit"><span>▣</span><h3>Mobile responsive</h3><p>Experiences designed for phones, tablets and computers.</p></div><div className="benefit"><span>ϟ</span><h3>Performance minded</h3><p>Thoughtful implementation with speed and usability in mind.</p></div><div className="benefit"><span>♢</span><h3>Security conscious</h3><p>Security practices considered throughout delivery.</p></div><div className="benefit"><span>⌕</span><h3>SEO foundations</h3><p>Clear structure and metadata to help search engines understand your pages.</p></div><div className="benefit"><span>↗</span><h3>Scalable approach</h3><p>Plan features and improvements around changing needs.</p></div><div className="benefit"><span>♡</span><h3>Training & support</h3><p>Support and handover options can be agreed for your project.</p></div></div></div></section>

      <section className="projects section" id="projects"><div className="container"><SectionHeading eyebrow="SELECTED WORK" title="Projects and live demonstrations" text="Explore selected school website projects. Contact us to discuss a similar platform or request a demonstration."/><div className="project-grid">{projects.map((p, i) => <article className="project-card" key={p.name}><div className={`project-art project-art-${i+1}`}><div className="school-crest">H</div><div className="school-lines"><span></span><span></span><span></span></div><div className="project-art-caption">SCHOOL WEBSITE <span>↗</span></div></div><div className="project-body"><p className="project-label">EDUCATION WEBSITE</p><h3>{p.name}</h3><p>{p.detail}</p><a href={p.url} target="_blank" rel="noreferrer">Visit live website <span>↗</span></a></div></article>)}</div><p className="project-disclaimer">Project names and links are shown as supplied. Confirm that each URL is current and that you have permission to display client names, logos and screenshots before publishing.</p></div></section>

      <section className="cta-band"><div className="container cta-inner"><div><p className="eyebrow">LET’S BUILD SOMETHING GREAT</p><h2>Have an idea? Let’s turn it into a useful digital solution.</h2><p>Tell us what you need. We’ll discuss your goals and the next steps.</p></div><a className="button button-light" href={whatsapp} target="_blank" rel="noreferrer">Start a conversation <span>↗</span></a></div></section>

      <section className="contact section" id="contact"><div className="container contact-grid"><div><SectionHeading eyebrow="GET IN TOUCH" title="Let’s discuss your project" text="Contact Hiloster Technologies for a consultation, demonstration or quotation. Share your requirements and we’ll help identify a practical next step."/><div className="contact-list"><a href={`tel:+254${phone1.slice(1)}`}><span className="contact-icon">☎</span><span><small>Call us</small><b>{phone1} / {phone2}</b></span></a><a href={`mailto:${email}`}><span className="contact-icon">✉</span><span><small>Email</small><b>{email}</b></span></a><div><span className="contact-icon">⌖</span><span><small>Location</small><b>Rangwe, Kenya</b></span></div></div></div><form className="contact-form" action={`https://formsubmit.co/${email}`} method="POST"><h3>Send an enquiry</h3><p>Fill in your details and your email app or form service can route your request to our team.</p><input type="hidden" name="_subject" value="New Hiloster Technologies website enquiry"/><input type="hidden" name="_template" value="table"/><label htmlFor="name">Your name</label><input id="name" name="name" placeholder="Full name" required/><label htmlFor="visitor-email">Email address</label><input id="visitor-email" name="email" type="email" placeholder="you@example.com" required/><label htmlFor="service">What do you need?</label><select id="service" name="service" defaultValue="" required><option value="" disabled>Select a service</option>{services.map((s)=><option key={s.title}>{s.title}</option>)}</select><label htmlFor="message">Project details</label><textarea id="message" name="message" rows={4} placeholder="Tell us briefly about your project..." required/><button className="button form-button" type="submit">Send enquiry <span>↗</span></button><small className="form-note">FormSubmit may require an initial email activation. Test the form before relying on it in production.</small></form></div></section>

      <footer className="footer"><div className="container footer-main"><a className="brand footer-brand" href="#home"><span className="brand-mark">H</span><span><strong>HiloSter</strong><small>TECHNOLOGIES</small><em>Web Applications & Digital Systems</em></span></a><p>Smart solutions. Stronger impact.</p><div className="footer-links"><a href="#services">Services</a><a href="#solutions">Solutions</a><a href="#projects">Portfolio</a><a href="#contact">Contact</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Hiloster Technologies. All rights reserved.</span><span>Your vision, our expertise. Powerful digital solutions.</span></div></footer>
      <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Contact Hiloster Technologies on WhatsApp">✆</a>
    </main>
  );
}
