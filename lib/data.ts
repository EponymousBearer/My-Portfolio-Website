import { CALENDLY_URL, EMAIL, GITHUB_URL, LINKEDIN_URL } from './site'

// Personal Information
export const personalInfo = {
  name: 'Muhammad Adnan',
  role: 'Full Stack + AI Engineer',
  positioning: 'Full Stack + AI Engineer for SaaS founders & agencies',
  studio: 'Future Frame',
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
  deck: 'I build SaaS platforms, e-commerce stores and AI-powered web apps that ship on deadline, load fast, and get found on Google.',
  edition: 'SAAS · E-COMMERCE · AI · TECHNICAL SEO',
  availabilityLabel: 'Available for projects · US / UK / Canada / UAE',
  available: true,
  ctaPrimary: 'Book a free 30-min call',
  ctaSecondary: 'See case studies'
} as const

// About Section — written from a prospective client's point of view.
export const aboutData = {
  bio: 'Working with me is straightforward. We start with a clear scope and fixed milestones, you see a working demo every week, and at handoff you own typed, documented code — not a black box. I work remotely from Karachi with afternoon overlap for US, UK, Canada and UAE teams, so feedback loops stay short and deadlines stay real.',
  // "By the numbers" — proof clients care about (see Source of truth).
  stats: [
    { value: '52→17', label: 'Avg. Google position · texttoolsai.app' },
    { value: '40%', label: 'Faster page loads' },
    { value: '50%', label: 'Faster time-to-market' },
    { value: '12 wk', label: 'Delivery deadline hit' }
  ]
} as const

// Services Section
export interface Service {
  title: string
  summary: string
  points: string[]
}

export const servicesData: Service[] = [
  {
    title: 'SaaS platforms & MVPs',
    summary: 'Production SaaS from first commit to paying users.',
    points: [
      'Multi-tenant architecture',
      'Auth & role-based access',
      'Stripe subscriptions',
      'Admin dashboards'
    ]
  },
  {
    title: 'E-commerce',
    summary: 'Fast storefronts that convert on mobile.',
    points: [
      'Next.js & headless Shopify storefronts',
      'Stripe checkout',
      'CMS-driven catalogs',
      'Multi-vendor marketplaces'
    ]
  },
  {
    title: 'AI integrations',
    summary: 'Real AI features inside real products.',
    points: [
      'ML models served via FastAPI',
      'AI features inside existing products',
      'n8n & agentic automations',
      'Generative AI workflows'
    ]
  },
  {
    title: 'Technical SEO & performance',
    summary: 'Make the site fast — and findable.',
    points: [
      'Core Web Vitals',
      'SSR / SSG rendering',
      'Structured data & crawl/indexing fixes',
      'AI-search visibility'
    ]
  }
]

// Entry offer — shown as a highlighted card. No price (book a call).
export const auditOffer = {
  tag: 'Entry offer',
  title: 'Next.js Speed + Technical SEO Audit',
  summary:
    'A fixed-price audit of your Next.js site: I find what is slowing it down and keeping it out of search, then hand you a Loom walkthrough and a prioritized fix list.',
  points: ['5-day turnaround', 'Loom walkthrough', 'Prioritized fix list'],
  cta: 'Book a call'
} as const

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

// Case Studies — lead work, framed Problem → Built → Result.
export interface CaseStudy {
  name: string
  slug?: string
  kind: string
  problem: string
  built: string
  result: string
  stack: string[]
  tags: string[]
  liveUrl?: string
  liveLabel?: string
  private?: boolean
  researchPrototype?: boolean
  featured?: boolean
}

export const caseStudies: CaseStudy[] = [
  {
    name: 'texttoolsai.app',
    slug: 'texttoolsai-seo',
    kind: 'Technical SEO',
    problem:
      'A brand-new product with no backlinks, no budget, and no search presence needed to earn organic traffic from scratch.',
    built:
      'I built and SEO’d it solo: a topic-hub structure with deep internal linking, content written for real search queries, and aggressive Core Web Vitals work.',
    result:
      'Average Google position moved 52 → 17 (May → Oct 2026, Search Console), with 84 pages averaging a top-10 position and 1,836 impressions in Google’s AI search features. Cited in AI answers by ChatGPT, Gemini, Perplexity and Google AI Mode (Ahrefs). PageSpeed 100 desktop / 93 mobile, SEO 100.',
    stack: ['Next.js', 'Technical SEO', 'Core Web Vitals', 'Schema'],
    tags: ['Technical SEO'],
    liveUrl: 'https://texttoolsai.app',
    liveLabel: 'Visit site',
    featured: true
  },
  {
    name: 'Aitek Client Portal',
    slug: 'aitek-client-portal',
    kind: 'SaaS · Multi-tenant',
    problem:
      'A US software house needed one platform to onboard clients and run delivery end-to-end, instead of scattered docs and email.',
    built:
      'A multi-tenant delivery platform (Next.js 14 + NestJS in a Turborepo) with role-based access across Admin, PM, Developer and Client, KYC onboarding, a questionnaire engine, milestones, deliverables, e-signatures, and dev/prod CI/CD.',
    result:
      'Used daily by the software house’s clients, with strict per-company tenant isolation. Private project — no public link.',
    stack: ['Next.js 14', 'NestJS', 'Turborepo', 'PostgreSQL', 'Prisma', 'Docker'],
    tags: ['SaaS', 'Multi-Tenant'],
    private: true,
    featured: true
  },
  {
    name: 'Quiquiq',
    kind: 'E-commerce · Delivery',
    problem:
      'Launch a complete food-delivery platform — ordering, tracking and payments — against a hard 12-week deadline.',
    built:
      'A full delivery platform with real-time order tracking and integrated payments, built on Next.js, Node.js and PostgreSQL.',
    result: 'Shipped inside the 12-week deadline.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL'],
    tags: ['E-Commerce', 'Payments'],
    private: true,
    featured: true
  },
  {
    name: 'REHASH',
    kind: 'E-commerce · Marketplace',
    problem:
      'A Canadian client wanted a reverse e-commerce marketplace where sellers get instant, condition-based quotes.',
    built:
      'A dynamic pricing engine with a guided condition-assessment flow, plus separate admin and vendor panels with role-based access (MERN).',
    result: 'Live marketplace with working vendor and admin operations.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB'],
    tags: ['Marketplace', 'Role-Based Auth'],
    liveUrl: 'https://rehash-project-frontend.vercel.app/',
    liveLabel: 'View live',
    featured: true
  },
  {
    name: 'AURA',
    kind: 'AI · Research prototype',
    problem:
      'Antibiotic choices should reflect local resistance patterns, but that data rarely reaches the point of decision.',
    built:
      'A live ML web app that recommends antibiotics from local resistance patterns, with explainable predictions (Python, scikit-learn, FastAPI, Docker, SHAP, Next.js). Built as my final-year project.',
    result: 'A working research prototype with a public demo. Not a clinical product.',
    stack: ['Python', 'scikit-learn', 'FastAPI', 'SHAP', 'Docker', 'Next.js'],
    tags: ['AI / ML', 'Research'],
    liveUrl: 'https://aura-cdss.vercel.app',
    liveLabel: 'View demo',
    researchPrototype: true,
    featured: true
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
}

export const currentlyData = {
  activities: [
    {
      title: 'Building',
      description: 'SaaS platforms, e-commerce stores and AI web apps for clients',
      icon: 'Briefcase'
    },
    {
      title: 'Founding',
      description: 'Future Frame — a small, focused development studio',
      icon: 'Users'
    },
    {
      title: 'Writing',
      description: 'Content and tooling at texttoolsai.app — my own SEO case study',
      icon: 'BookOpen'
    },
    {
      title: 'Ask me about',
      description: 'SaaS, Next.js, AI integrations & technical SEO',
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
  availability: 'Mon–Fri, 2 PM – 10 PM PKT',
  availabilityNote: 'Overlaps UAE & UK afternoons and US/Canada East mornings.',
  heading: 'Have a product to build, a slow site to fix, or a deadline to hit?'
} as const

// Footer
export const footerData = {
  // Static year keeps the statically-exported HTML deterministic across rebuilds.
  copyright: '© 2026 Muhammad Adnan. All rights reserved.',
  tagline: 'Full Stack + AI Engineer · Founder of Future Frame'
} as const
