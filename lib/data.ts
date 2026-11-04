import { CALENDLY_URL, EMAIL, FUTURE_FRAME_PRICING_URL, FUTURE_FRAME_URL, GITHUB_URL, LINKEDIN_URL } from './site'

// Personal Information
export const personalInfo = {
  name: 'Muhammad Adnan',
  role: 'Full Stack + AI Engineer',
  positioning: 'Full Stack + AI Engineer for SaaS founders & agencies',
  studio: 'Future Frame',
  studioUrl: FUTURE_FRAME_URL,
  location: 'Karachi, Pakistan',
  regions: 'US · UK · Canada · UAE',
  email: EMAIL,
  calendly: CALENDLY_URL,
  // Stored without protocol so existing views can render them as labels.
  linkedin: 'www.linkedin.com/in/muhammadadnan-ai',
  github: 'github.com/EponymousBearer',
  linkedinUrl: LINKEDIN_URL,
  githubUrl: GITHUB_URL,
  logo: 'MA'
} as const

// Navigation Links
export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' }
]

// Hero Section
export const heroData = {
  role: 'Full Stack + AI Engineer',
  headlineLead: 'Full Stack + AI Engineer',
  headlineTail: 'for SaaS founders & agencies',
  deck: 'I build SaaS platforms, e-commerce stores and AI-powered web apps that ship on deadline, load fast, and get found on Google. I also run Future Frame, where I build AI speed-to-lead assistants that contact new leads in under 60 seconds.',
  studioNote: 'Founder of Future Frame',
  edition: 'SAAS · E-COMMERCE · AI SPEED-TO-LEAD · TECHNICAL SEO',
  availabilityLabel: 'Available for projects · US / UK / Canada / UAE',
  available: true,
  ctaPrimary: 'Book a free 30-min call',
  ctaSecondary: 'View Projects'
} as const

// About Section — written from a prospective client's point of view.
export const aboutData = {
  bio: 'I founded Future Frame, a small studio that builds AI speed-to-lead assistants for real estate and mortgage teams; this site is the person behind it. Working with me is straightforward. We start with a clear scope and fixed milestones, you see a working demo every week, and at handoff you own typed, documented code — not a black box. I work remotely from Karachi with afternoon overlap for US, UK, Canada and UAE teams, so feedback loops stay short and deadlines stay real.',
  // "By the numbers" — proof clients care about (see Source of truth).
  stats: [
    // TODO(verify): re-add avg position stat after GSC check
    { value: '100', label: 'PageSpeed desktop · texttoolsai.app' },
    { value: '40%', label: 'Faster page loads' },
    { value: '50%', label: 'Faster time-to-market' },
    { value: '12 wk', label: 'Delivery deadline hit' }
  ]
} as const

// Services Section
export interface Service {
  title: string
  description: string
}

export const servicesData: Service[] = [
  {
    title: 'AI Speed-to-Lead Agent',
    description:
      'When a lead submits a web form, an AI assistant calls or WhatsApps them within about 60 seconds, qualifies them, books the appointment and logs it to your CRM, with human handoff. Built for real estate and mortgage teams through Future Frame.'
  },
  {
    title: 'SaaS Platforms & MVPs',
    description:
      'Multi-tenant architecture, auth and roles, Stripe subscriptions and admin dashboards, built to scale past launch.'
  },
  {
    title: 'E-Commerce',
    description:
      'Fast Next.js and headless Shopify storefronts, Stripe checkout, CMS catalogs and multi-vendor marketplaces.'
  },
  {
    title: 'AI Integrations',
    description:
      'ML models served through FastAPI, AI features inside your product, and n8n/agentic automations that remove manual work.'
  },
  {
    title: 'Technical SEO & Performance',
    description:
      'Core Web Vitals, server rendering, structured data and indexing fixes, so your site gets found on Google and in AI search.'
  }
]

// Entry offers — shown as highlighted cards. Founding-client pricing.
export interface EntryOffer {
  tag: string
  title: string
  price: string
  description: string
  cta: string
  secondaryHref?: string
  secondaryLabel?: string
}

export const pilotOffer: EntryOffer = {
  tag: 'Founding-client pilot · first 3 clients',
  title: '14-day AI Speed-to-Lead Pilot',
  price: '$297',
  description:
    'Every lead contacted in under 60 seconds, or you get a full refund. Limited to the first 3 founding clients, delivered through Future Frame.',
  cta: 'Book a free 30-min call',
  secondaryHref: FUTURE_FRAME_PRICING_URL,
  secondaryLabel: 'See Future Frame pricing'
}

export const auditOffer: EntryOffer = {
  tag: 'Second entry option',
  title: 'Next.js Speed + Technical SEO / AI-search Audit',
  price: '$297 founding price',
  description: '5-day turnaround, Loom walkthrough and a prioritized fix list.',
  cta: 'Book a free 30-min call'
}

// Tech Stack Section
export interface TechCategory {
  name: string
  skills: string[]
}

export const techStackData: TechCategory[] = [
  {
    name: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'shadcn/ui']
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'NestJS', 'REST API Design', 'JWT', 'Stripe']
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Prisma', 'Sanity CMS']
  },
  {
    name: 'AI & ML',
    skills: ['Python', 'FastAPI', 'scikit-learn', 'SHAP', 'Generative AI', 'n8n']
  },
  {
    name: 'Technical SEO & Performance',
    skills: ['Core Web Vitals', 'Lighthouse', 'Schema markup', 'SSR / SSG']
  },
  {
    name: 'DevOps & Tools',
    skills: ['Docker', 'GitHub Actions', 'CI/CD', 'Vercel']
  }
]

// Process Section
export interface ProcessStep {
  title: string
  description: string
}

export const processData: ProcessStep[] = [
  {
    title: 'Discovery call',
    description: 'A free 30-minute call to understand your product, your users, and your deadline.'
  },
  {
    title: 'Scoped plan & fixed quote',
    description: 'Clear scope broken into milestones, with a fixed price up front — no open-ended billing.'
  },
  {
    title: 'Weekly demos',
    description: 'You see working software every week, so we catch direction changes early, not at the end.'
  },
  {
    title: 'Launch & handoff',
    description: 'A smooth deploy plus typed, documented code you fully own — no lock-in.'
  }
]

// Experience Section
export interface Experience {
  company: string
  type: string
  role: string
  period: string
  highlights: string[]
}

export const experienceData: Experience[] = [
  {
    company: 'Aitek Solutions',
    type: 'Remote',
    role: 'Full-Stack Developer',
    period: 'Nov 2025 – Present',
    highlights: [
      'Built a multi-tenant client-delivery platform (Next.js 14 + NestJS, Turborepo) now used daily by a US software house’s clients',
      'Shipped Quiquiq — a food delivery platform with real-time tracking and payments — inside a 12-week deadline',
      'Engineered reusable Next.js + PostgreSQL SaaS foundations that cut time-to-market for new builds by 50%'
    ]
  },
  {
    company: 'Bizneedle',
    type: 'Remote',
    role: 'MERN Developer (Intern → Full-Time)',
    period: 'Aug 2025 – Oct 2025',
    highlights: [
      'Cut Hospital Management System page loads by 40% via code-splitting and image optimization',
      'Built and documented REST APIs (Node/Express + MongoDB) with JWT role-based access',
      'Converted from intern to full-time on the strength of the performance work'
    ]
  },
  {
    company: 'BehinDev',
    type: 'Remote Internship',
    role: 'Full-Stack Developer Intern',
    period: 'Mar 2024 – Jun 2024',
    highlights: [
      'Delivered React + Firebase modules and deployed to Vercel across a structured program',
      'Built Next.js + MongoDB community features deployed to a VPS',
      'Shipped Swift Mart (e-commerce) and a job portal end-to-end'
    ]
  }
]

// ────────────────────────────────────────────────────────────────────────────
// Case Studies
// To add or edit a case study, edit the `caseStudies` array below. The whole
// Case Studies section hides automatically when the array is empty.
//
// Each entry has:
//   title      — the project name                              (required)
//   type       — client / type, e.g. 'SaaS client · US'        (required)
//   problem    — the problem in one or two sentences           (required)
//   whatIBuilt — what you built, one or two sentences          (required)
//   results    — outcomes, as a list of short bullet strings   (required)
//   stack      — technology tags                               (required)
//   link       — public URL, if any                            (optional)
//   linkLabel  — label for the link, e.g. 'View live'          (optional)
//   image      — path under /public, e.g. '/work/foo.png'      (optional)
//   slug       — if set, also builds a /work/<slug> page and
//                lists it in the sitemap                        (optional)
//   private / researchPrototype — show the matching badge       (optional)
//
// Commented example — copy this shape for a new entry:
// {
//   title: 'Project Name',
//   type: 'SaaS client · US',
//   problem: 'What was broken or missing before you started.',
//   whatIBuilt: 'What you shipped, in one or two plain sentences.',
//   results: ['Outcome one', 'Outcome two', 'Outcome three'],
//   stack: ['Next.js', 'PostgreSQL', 'Stripe'],
//   link: 'https://example.com',
//   linkLabel: 'View live',
//   image: '/work/project-name.png'
// },
// ────────────────────────────────────────────────────────────────────────────
export interface CaseStudy {
  title: string
  type: string
  problem: string
  whatIBuilt: string
  results: string[]
  stack: string[]
  link?: string
  linkLabel?: string
  image?: string
  slug?: string
  private?: boolean
  researchPrototype?: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    title: 'AI Speed-to-Lead Agent',
    type: 'Future Frame · Working demo',
    problem:
      'Most new leads go unanswered for hours. A 2026 Pied Piper study of 2,198 inquiries to 21 large real-estate brands found only 10% heard from an agent within an hour.',
    whatIBuilt:
      'A configurable end-to-end system: a lead submits a form, an AI calls or WhatsApps them in seconds, qualifies them with vertical-specific questions, books a meeting and saves the lead to the CRM. Built with a Next.js demo console, n8n workflows, Vapi voice, Twilio/Meta WhatsApp, a Groq LLM, Cal.com or Google Calendar, and HubSpot or Google Sheets.',
    results: [
      'Working demo and internal pilot, not a client deployment. No client results yet.',
      'Live end-to-end flow: form, voice or WhatsApp, qualification, booking, CRM record, human handoff',
      '10 industry templates and a live event timeline in the demo console'
    ],
    stack: ['Next.js', 'n8n', 'Vapi', 'Twilio / Meta WhatsApp', 'Groq', 'Cal.com', 'HubSpot'],
    link: 'https://console-adnan-projects.vercel.app',
    linkLabel: 'Try the live demo',
    slug: 'speed-to-lead'
  },
  {
    title: 'texttoolsai.app',
    type: 'My own product · Technical SEO',
    problem:
      'A brand-new product with no backlinks, no budget, and no search presence needed to earn organic traffic from scratch.',
    whatIBuilt:
      'I built and SEO’d it solo: a topic-hub structure with deep internal linking, content written for real search queries, and aggressive Core Web Vitals work.',
    results: [
      // TODO(verify): re-add avg position stat after GSC check
      '84 pages averaging a top-10 position; 1,836 impressions in Google’s AI search features',
      'Cited in AI answers by ChatGPT, Gemini, Perplexity and Google AI Mode (Ahrefs)',
      'PageSpeed 100 desktop / 93 mobile, SEO 100'
    ],
    stack: ['Next.js', 'Technical SEO', 'Core Web Vitals', 'Schema'],
    link: 'https://texttoolsai.app',
    linkLabel: 'Visit site',
    slug: 'texttoolsai-seo'
  },
  {
    title: 'Aitek Client Portal',
    type: 'US software house · SaaS',
    problem:
      'A US software house needed one platform to onboard clients and run delivery end-to-end, instead of scattered docs and email.',
    whatIBuilt:
      'A multi-tenant delivery platform (Next.js 14 + NestJS in a Turborepo) with role-based access across Admin, PM, Developer and Client, KYC onboarding, a questionnaire engine, milestones, deliverables, e-signatures, and dev/prod CI/CD.',
    results: [
      'Used daily by the software house’s clients',
      'Strict per-company tenant isolation across every role',
      'Private project — no public link'
    ],
    stack: ['Next.js 14', 'NestJS', 'Turborepo', 'PostgreSQL', 'Prisma', 'Docker'],
    private: true,
    slug: 'aitek-client-portal'
  },
  {
    title: 'Quiquiq',
    type: 'Client · Food delivery',
    problem:
      'Launch a complete food-delivery platform — ordering, tracking and payments — against a hard 12-week deadline.',
    whatIBuilt:
      'A full delivery platform with real-time order tracking and integrated payments, built on Next.js, Node.js and PostgreSQL.',
    results: ['Shipped inside the 12-week deadline', 'Real-time order tracking and integrated payments'],
    stack: ['Next.js', 'Node.js', 'PostgreSQL'],
    private: true
  },
  {
    title: 'REHASH',
    type: 'Canadian client · Marketplace',
    problem:
      'A Canadian client wanted a reverse e-commerce marketplace where sellers get instant, condition-based quotes.',
    whatIBuilt:
      'A dynamic pricing engine with a guided condition-assessment flow, plus separate admin and vendor panels with role-based access (MERN).',
    results: ['Live marketplace with working vendor and admin operations', 'Instant, condition-based pricing for sellers'],
    stack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://rehash-project-frontend.vercel.app/',
    linkLabel: 'View live'
  },
  {
    title: 'AURA',
    type: 'Final-year project · AI research',
    problem:
      'Antibiotic choices should reflect local resistance patterns, but that data rarely reaches the point of decision.',
    whatIBuilt:
      'A live ML web app that recommends antibiotics from local resistance patterns, with explainable predictions (Python, scikit-learn, FastAPI, Docker, SHAP, Next.js). Built as my final-year project.',
    results: ['Working research prototype with a public demo', 'Explainable recommendations via SHAP'],
    stack: ['Python', 'scikit-learn', 'FastAPI', 'SHAP', 'Docker', 'Next.js'],
    link: 'https://aura-cdss.vercel.app',
    linkLabel: 'View demo',
    researchPrototype: true
  }
]

// More work — secondary projects.
export interface Project {
  name: string
  description: string
  stack: string[]
  tags: string[]
  liveUrl?: string
}

export const moreWork: Project[] = [
  {
    name: 'Dine Market',
    description:
      'Production e-commerce storefront on Next.js + TypeScript with Sanity CMS and PostgreSQL — dynamic product pages, Redux cart, Clerk auth, and Stripe checkout.',
    stack: ['Next.js', 'TypeScript', 'Sanity', 'Stripe', 'Clerk'],
    tags: ['E-Commerce', 'Payments'],
    liveUrl: 'https://e-commerce-website-xi-ten.vercel.app/'
  },
  {
    name: 'Tmustt',
    description:
      'Clothing e-commerce application with inventory and admin workflows, optimized for responsive, mobile-first shopping.',
    stack: ['Next.js', 'MongoDB', 'Tailwind CSS', 'Stripe'],
    tags: ['E-Commerce', 'Admin Panel'],
    liveUrl: 'https://www.tmustt.com/'
  },
  {
    name: 'Swift Mart',
    description:
      'Modern MERN e-commerce storefront with responsive UX, dynamic listings, and a production-ready checkout flow.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    tags: ['E-Commerce', 'MERN'],
    liveUrl: 'https://swift-mart-ecommerce-website.vercel.app/'
  },
  {
    name: 'Wolf of Arches Portal',
    description:
      'Portal-focused product with end-to-end UI workflows and backend integrations for lead and support operations.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    tags: ['Portal', 'Business App'],
    liveUrl: 'https://wolfofarches.com/'
  },
  {
    name: 'Quran Audio Player',
    description:
      'Responsive Quran audio player with reciter selection and surah navigation over a public API. 2nd place, GDSC UET NC Frontend Bootcamp.',
    stack: ['React', 'Tailwind CSS', 'REST APIs'],
    tags: ['Frontend', 'Awarded'],
    liveUrl: 'https://quran-player-adnan.netlify.app/'
  },
  {
    name: 'NIJ Web Solution',
    description:
      'Company website and business-solution platform with clean responsive pages and a service-focused information architecture.',
    stack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    tags: ['Business Site', 'Frontend'],
    liveUrl: 'https://nijwebsolution.vercel.app/'
  },
  {
    name: 'Appointment System',
    description:
      'Appointment booking and management platform built for operational workflows with efficient scheduling and dashboard views.',
    stack: ['Next.js', 'Node.js', 'MongoDB'],
    tags: ['Scheduling', 'Dashboard'],
    liveUrl: 'https://appointment.bizneedle.xyz/'
  }
]

// Currently Section
export interface CurrentActivity {
  title: string
  description: string
  icon: string
  href?: string
}

export const currentlyData = {
  activities: [
    {
      title: 'Building',
      description: 'SaaS platforms, e-commerce stores and AI web apps for clients',
      icon: 'Briefcase'
    },
    {
      title: 'Founding · Future Frame',
      description: 'Future Frame, my studio, building AI speed-to-lead assistants for real estate and mortgage teams',
      icon: 'Users',
      href: FUTURE_FRAME_URL
    },
    {
      title: 'Writing',
      description: 'Content and tooling at texttoolsai.app — my own SEO case study',
      icon: 'BookOpen'
    },
    {
      title: 'Ask me about',
      description: 'AI speed-to-lead, SaaS, Next.js, AI integrations & technical SEO',
      icon: 'MessageCircle'
    }
  ],
  footerText:
    'I keep a close eye on the fast-moving AI tooling space and fold what works into client builds.'
}

// Testimonials — render nothing until real, permissioned quotes exist.
export interface Testimonial {
  quote: string
  author: string
  role: string
}

// TODO(adnan): add 2–3 client testimonials with permission (name, role/company, quote).
export const testimonialsData: Testimonial[] = []

// Contact Section
export const contactData = {
  email: EMAIL,
  calendly: CALENDLY_URL,
  linkedin: 'www.linkedin.com/in/muhammadadnan-ai',
  location: 'Karachi, Pakistan',
  availability: 'Mon–Fri, 2 PM–8 PM PKT',
  availabilityNote: 'overlaps the UK working day and US East early morning',
  heading: 'Have a product to build, a slow site to fix, or a deadline to hit?'
} as const

// Footer
export const footerData = {
  // Static year keeps the statically-exported HTML deterministic across rebuilds.
  copyright: '© 2026 Muhammad Adnan. All rights reserved.',
  tagline: 'Full Stack + AI Engineer · Founder of Future Frame'
} as const
