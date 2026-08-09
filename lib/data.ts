// Personal Information
export const personalInfo = {
  name: 'Muhammad Adnan',
  role: 'Full-Stack Developer',
  location: 'Karachi, Pakistan',
  email: 'adnasir607@gmail.com',
  linkedin: 'linkedin.com/in/muhammadadnan',
  github: 'github.com/EponymousBearer',
  logo: 'MA'
} as const

// Navigation Links
export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#techstack' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

// Hero Section
export const heroData = {
  greeting: "Hi, I'm",
  subtitle: 'Full-Stack MERN Developer',
  deck: 'Full-stack developer working with the MERN stack and Next.js since 2024 — shipping production web applications across e-commerce, SaaS, food delivery, and healthcare.',
  edition: 'MERN & NEXT.JS EDITION',
  volume: 'VOL. 2025',
  available: true,
  ctaPrimary: 'View Projects',
  ctaSecondary: "Let's Connect"
} as const

// About Section
export const aboutData = {
  bio: 'Full-stack developer working with the MERN stack and Next.js since 2024, with hands-on experience shipping production web applications across e-commerce, SaaS, food delivery, and healthcare. Strong in REST API design, SQL/NoSQL data modeling, authentication, and payments — a final-year Software Engineering student (3.83 CGPA) and Certified Cloud Applied Generative AI Engineer, currently building a multi-tenant client-delivery platform in a remote engineering role.',
  stats: [
    { value: 10, suffix: '+', label: 'Projects' },
    { value: 2, suffix: '+', label: 'Years' },
    { value: 15, suffix: '+', label: 'Technologies' },
    { value: 3.83, suffix: '', label: 'CGPA' }
  ]
} as const

// Tech Stack Section
export interface TechCategory {
  name: string
  skills: string[]
}

export const techStackData: TechCategory[] = [
  {
    name: 'Frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS', 'Shadcn UI']
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'NestJS', 'REST API Design', 'JWT']
  },
  {
    name: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'Prisma', 'Sanity CMS']
  },
  {
    name: 'DevOps & Tools',
    skills: ['Docker', 'GitHub Actions', 'Vercel', 'Render']
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
      'Lead frontend & backend of Quiquiq — real-time order tracking, integrated payments, and SEO-optimized responsive design',
      'Engineer multi-tenant SaaS on Next.js + PostgreSQL (SaaSHQ foundation) with reusable modules for tenant isolation, auth & billing',
      'Ship production features for Wolf of Arches and Tmustt e-commerce — Redux-managed state and Stripe checkout flows',
      'Collaborate cross-functionally in Agile sprints to scope, build, and iterate on releases against client deadlines'
    ]
  },
  {
    company: 'Bizneedle',
    type: 'Remote',
    role: 'MERN Stack Developer (Intern → Full-Time)',
    period: 'Aug 2025 – Oct 2025',
    highlights: [
      'Built responsive UI for a Hospital Management System in Next.js — 40% faster page loads via code-splitting & image optimization',
      'Developed & documented RESTful APIs in Node.js/Express backed by MongoDB for day-to-day clinical operations',
      'Implemented JWT + Clerk authentication with role-based access across three roles (admin, doctor, patient)',
      'Converted from intern to paid full-time developer based on trial-period performance'
    ]
  },
  {
    company: 'Grow Intern · BehinDev',
    type: 'Remote Internship',
    role: 'Full-Stack Developer Intern',
    period: 'Mar 2024 – Jun 2024',
    highlights: [
      'Built React + Firebase task modules and deployed to Vercel in a structured three-task internship program',
      'Developed OpenVoiceHub community-site features on Next.js + MongoDB, deployed to a Hostinger VPS',
      'Delivered Workiee (job portal) and Swift Mart (e-commerce) end-to-end with responsive design & API integrations'
    ]
  }
]

// Projects Section
export interface Project {
  name: string
  description: string
  stack: string[]
  tags: string[]
  liveUrl?: string
  repoUrl?: string
  featured?: boolean
}

export const projectsData: Project[] = [
  {
    name: 'AiTek Client Portal',
    description: 'Multi-tenant project-delivery platform in a Turborepo monorepo — Next.js 14 App Router + NestJS 10 REST API — with role-based access across Admin, PM, Developer & Client and strict per-company tenant isolation. Includes multi-step KYC onboarding, a dynamic questionnaire engine, milestones, deliverables, e-signatures, and dev/prod CI/CD to a VPS.',
    stack: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Clerk', 'Docker'],
    tags: ['SaaS', 'Multi-Tenant', 'Full Stack'],
    featured: true
  },
  {
    name: 'REHASH',
    description: 'Reverse e-commerce SaaS for a Canadian client — sell used electronics by category & condition with instant quotes. Dynamic pricing engine, guided condition-assessment flow, and separate admin & vendor panels with role-based access over an indexed MongoDB schema.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    tags: ['SaaS', 'Full Stack', 'Role-Based Auth'],
    liveUrl: 'https://rehash-project-frontend.vercel.app/',
    featured: true
  },
  {
    name: 'Dine Market',
    description: 'Production e-commerce storefront on Next.js + TypeScript with Sanity as the headless CMS and PostgreSQL for app data — dynamic product pages, Redux cart, Clerk authentication, and Stripe checkout, fully responsive.',
    stack: ['Next.js', 'TypeScript', 'Sanity', 'Redux', 'Stripe', 'Clerk'],
    tags: ['E-Commerce', 'Full Stack', 'Payments'],
    liveUrl: 'https://e-commerce-website-xi-ten.vercel.app/'
  },
  {
    name: 'Tmustt',
    description: 'Clothing e-commerce application with inventory and admin workflows, optimized for responsive, mobile-first shopping experiences.',
    stack: ['Next.js', 'MongoDB', 'Shadcn UI', 'Tailwind CSS', 'Stripe'],
    tags: ['E-Commerce', 'Admin Panel', 'Responsive'],
    liveUrl: 'https://www.tmustt.com/'
  },
  {
    name: 'Swift Mart',
    description: 'Modern MERN e-commerce storefront with responsive UX, dynamic listings, and a production-ready checkout flow.',
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    tags: ['E-Commerce', 'MERN', 'Responsive'],
    liveUrl: 'https://swift-mart-ecommerce-website.vercel.app/'
  },
  {
    name: 'Wolf Of Arches Portal',
    description: 'Portal-focused product with end-to-end UI workflows and backend integrations for lead and support operations.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    tags: ['Portal', 'Full Stack', 'Business App'],
    liveUrl: 'https://wolfofarches.com/'
  },
  {
    name: 'Quran Audio Player',
    description: 'Responsive Quran audio player with reciter selection and surah navigation over a public Quran API — fast, SEO-friendly pages. Awarded 2nd place at the GDSC UET NC Frontend Bootcamp.',
    stack: ['React', 'Tailwind CSS', 'REST APIs'],
    tags: ['Frontend', 'API Integration', 'Awarded'],
    liveUrl: 'https://quran-player-adnan.netlify.app/'
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
      title: 'Working on',
      description: 'AiTek Client Portal — a multi-tenant delivery platform (Next.js + NestJS)',
      icon: 'Briefcase'
    },
    {
      title: 'Collaborating on',
      description: 'Agentic AI + MERN stack projects',
      icon: 'Users'
    },
    {
      title: 'Learning',
      description: 'Agentic AI workflows & scalable system design',
      icon: 'BookOpen'
    },
    {
      title: 'Ask me about',
      description: 'MERN, Next.js, multi-tenant SaaS & Agentic AI',
      icon: 'MessageCircle'
    }
  ],
  footerText: 'I love exploring new ideas, contributing to open source, and keeping a close eye on big tech tool launches.'
}

// Contact Section
export const contactData = {
  email: 'adnasir607@gmail.com',
  linkedin: 'linkedin.com/in/muhammadadnan',
  location: 'Karachi, Pakistan'
} as const

// Footer
export const footerData = {
  copyright: `© ${new Date().getFullYear()} Muhammad Adnan. All rights reserved.`,
  tagline: 'Always willing to collab'
} as const
