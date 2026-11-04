import { CALENDLY_URL, EMAIL, FUTURE_FRAME_PRICING_URL, FUTURE_FRAME_URL, GITHUB_URL, LINKEDIN_URL } from './site'

// Personal Information
export const personalInfo = {
  name: 'Muhammad Adnan',
  role: 'Full-stack engineer (Next.js, Node, AI)',
  positioning: 'AI Speed-to-Lead & AI Visibility for real estate and mortgage teams',
  studio: 'Future Frame',
  studioUrl: FUTURE_FRAME_URL,
  location: 'Karachi, Pakistan',
  regions: 'US · UK · Canada · Australia · UAE',
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
  role: 'Full-stack engineer (Next.js, Node, AI)',
  headlineLead: 'AI Speed-to-Lead & AI Visibility',
  headlineTail: 'for real estate and mortgage teams',
  deck: 'I help real estate teams (5–30 agents) and mortgage-broker and loan-officer teams answer every lead in 60 seconds and get recommended by ChatGPT. I am a full-stack engineer (Next.js, Node, AI) and the founder of Future Frame, the studio behind the work.',
  studioNote: 'Founder of Future Frame',
  edition: 'AI SPEED-TO-LEAD · AI VISIBILITY · NEXT.JS SPEED FIX · CUSTOM BUILDS',
  availabilityLabel: 'Available for projects · US / UK / Canada / Australia / UAE',
  available: true,
  ctaPrimary: 'Book a free 30-min call',
  ctaSecondary: 'View Projects'
} as const

// About Section — written from a prospective client's point of view.
export const aboutData = {
  bio: 'I founded Future Frame, a small studio that helps real estate and mortgage teams answer every lead in 60 seconds and get recommended by AI search; this site is the engineer behind it. Working with me is straightforward. We start with a clear scope and fixed milestones, you see a working demo every week, and at handoff you own typed, documented code — not a black box. I work remotely from Karachi with afternoon overlap for US, UK, Canada, Australia and UAE teams, so feedback loops stay short and deadlines stay real.',
  // "By the numbers" — proof clients care about (see Source of truth).
  stats: [
    { value: '68→12', label: 'Avg. Google position · texttoolsai.app (Aug→Nov 2026)' },
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
    title: 'AI Speed-to-Lead',
    description:
      'Every web lead gets an AI call or WhatsApp in under 60 seconds, qualified and booked into your calendar and CRM. For real estate and mortgage teams.'
  },
  {
    title: 'AI Visibility (AEO/GEO)',
    description:
      'Check whether ChatGPT, Gemini, Perplexity and Google AI Overviews recommend you or your competitors, then fix it in 14 days: AI crawler access, schema and structured data, llms.txt, indexing, entity and profile consistency, and answer-first pages. For the same real estate and mortgage teams.'
  },
  {
    title: 'Next.js Speed Fix',
    description:
      'Mobile Core Web Vitals and LCP fixes for Next.js sites in a fixed-price 5-day sprint, from $497.'
  },
  {
    title: 'Custom Builds',
    description:
      'SaaS platforms, client portals, marketplaces, e-commerce and AI integrations, shipped by the engineer who builds your AI. From $3k.'
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
  price: '$297 founding price',
  description:
    '$297 founding price for the first 3 clients. Every lead contacted in under 60 seconds, or you get a full refund. Delivered through Future Frame.',
  cta: 'Book a free 30-min call',
  secondaryHref: FUTURE_FRAME_PRICING_URL,
  secondaryLabel: 'See Future Frame pricing'
}

export const auditOffer: EntryOffer = {
  tag: 'Founding-client offer',
  title: 'AI Visibility Audit + 14-day fix',
  price: '$297 founding price',
  description:
    'Start with a free AI-visibility snapshot: do ChatGPT, Gemini and Perplexity recommend you or your competitors? Then a 14-day fix sprint on the gaps. Delivered through Future Frame.',
  cta: 'Book a free 30-min call',
  secondaryHref: FUTURE_FRAME_PRICING_URL,
  secondaryLabel: 'See Future Frame pricing'
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
    name: 'Performance & AI Search',
    skills: ['Core Web Vitals', 'Lighthouse', 'Schema markup', 'llms.txt', 'SSR / SSG']
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
    company: 'Future Frame',
    type: 'Founder',
    role: 'Founder',
    period: 'Sep 2026 – Present',
    highlights: [
      'Co-founded a 3-person studio; I lead AI Speed-to-Lead and AI Visibility for real estate and mortgage teams',
      'Built a working speed-to-lead demo: form, AI voice or WhatsApp in under 60 seconds, qualification, booking and CRM record',
      'Run my own AI-visibility case study at texttoolsai.app: average Google position ~68 to ~12 in 3 months'
    ]
  },
  {
    company: 'Aitek Solutions',
    type: 'Remote',
    role: 'Full-Stack Developer',
    period: 'Nov 2025 – Oct 2026',
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
    type: 'My own product · AI Visibility',
    problem:
      'A brand-new product with no backlinks, no budget and no search presence had to become visible to Google and to AI assistants from scratch.',
    whatIBuilt:
      'I built and optimized it solo for AI visibility: llms.txt, answer-first (GEO) content blocks, schema clean-up (Article with author, deduplicated breadcrumb and FAQ markup), entity signals, topic hubs with deep internal linking, plus Core Web Vitals work.',
    results: [
      'Average Google position ~68 to ~12 in 3 months (Aug–Nov 2026)',
      '97 of 172 pages averaging a top-10 position; 33,086 impressions over the last 3 months',
      '3,502 impressions in Google’s AI features over 3 months; cited in AI answers by ChatGPT, Gemini and Perplexity',
      'PageSpeed 100 desktop / 93 mobile'
    ],
    stack: ['Next.js', 'llms.txt', 'Schema', 'GEO / AEO', 'Core Web Vitals'],
    link: 'https://texttoolsai.app',
    linkLabel: 'Visit site',
    slug: 'texttoolsai-seo'
  },
  {
    title: 'Fashion e-commerce store: mobile speed',
    type: 'Delivered via Aitek Solutions (US software house)',
    problem:
      'A Next.js + MongoDB fashion store was slow on mobile: PageSpeed 77, LCP 4.6 s and a 312 MB image payload.',
    whatIBuilt:
      'A two-day speed fix with no redesign and no new theme: diagnosed with PageSpeed Insights and Core Web Vitals, compressed, converted and resized images, fixed render-blocking scripts and third-party apps, fixed rendering issues, and delivered a before/after report.',
    results: [
      'Mobile PageSpeed 77 to 99',
      'LCP 4.6 s to 2.1 s',
      'Image payload 312 MB to 15 MB; accessibility score 85 to 100'
    ],
    stack: ['Next.js', 'MongoDB', 'PageSpeed Insights', 'Core Web Vitals'],
    slug: 'ecommerce-speed'
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
    type: 'Freelance · Canadian client',
    problem:
      'A Canadian client wanted a reverse e-commerce marketplace where sellers get instant, condition-based quotes.',
    whatIBuilt:
      'A dynamic pricing engine with a guided condition-assessment flow, plus separate admin and vendor panels with role-based access (MERN).',
    results: ['Live marketplace with working vendor and admin operations', 'Instant, condition-based pricing for sellers'],
    stack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://rehash-project-frontend.vercel.app/',
    linkLabel: 'View live'
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
  },
  {
    name: 'AURA',
    description:
      'Final-year research prototype: a live ML web app that recommends antibiotics from local resistance patterns, with explainable predictions. Not a clinical product.',
    stack: ['Python', 'scikit-learn', 'FastAPI', 'SHAP', 'Docker', 'Next.js'],
    tags: ['AI Research', 'Prototype'],
    liveUrl: 'https://aura-cdss.vercel.app'
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
      description: 'AI speed-to-lead and AI visibility for real estate and mortgage teams, plus custom builds for clients',
      icon: 'Briefcase'
    },
    {
      title: 'Founding · Future Frame',
      description: 'Future Frame, my studio, helping real estate and mortgage teams answer every lead in 60 seconds and get recommended by AI search',
      icon: 'Users',
      href: FUTURE_FRAME_URL
    },
    {
      title: 'Writing',
      description: 'Content and tooling at texttoolsai.app — my own AI-visibility case study',
      icon: 'BookOpen'
    },
    {
      title: 'Ask me about',
      description: 'AI speed-to-lead, AI visibility (AEO/GEO), Next.js speed and custom builds',
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
  heading: 'Slow lead response, invisible to AI search, or a product to build?'
} as const

// Footer
export const footerData = {
  // Static year keeps the statically-exported HTML deterministic across rebuilds.
  copyright: '© 2026 Muhammad Adnan. All rights reserved.',
  tagline: 'Full-stack engineer (Next.js, Node, AI) · Founder of Future Frame'
} as const
