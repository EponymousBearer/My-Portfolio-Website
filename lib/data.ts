// Personal Information
export const personalInfo = {
  name: 'Muhammad Adnan',
  role: 'Full Stack Developer',
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
  subtitle: 'Full Stack Developer',
  ctaPrimary: 'View Projects',
  ctaSecondary: "Let's Connect"
} as const

// About Section
export const aboutData = {
  bio: 'Results-driven Full Stack Developer with 2+ years building scalable web apps using MERN stack, Next.js, and modern cloud tech. Currently building an ERP system to help companies manage business operations and track projects digitally.',
  stats: [
    { value: 10, suffix: '+', label: 'Projects' },
    { value: 2, suffix: '+', label: 'Years' },
    { value: 5, suffix: '+', label: 'Technologies' },
    { value: 3, suffix: '', label: 'Open Source' }
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
    skills: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Shadcn UI']
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL']
  },
  {
    name: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Sanity CMS']
  },
  {
    name: 'DevOps',
    skills: ['Docker', 'Vercel', 'Git', 'CI/CD']
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
    role: 'Full Stack Developer',
    period: 'Jan 2025 – Present',
    highlights: [
      'Leading Quiquiq food delivery app (1000+ users) with real-time tracking and payments',
      'Built SaaS/multi-tenant apps with Next.js, Node.js, PostgreSQL (35% performance gain)',
      'Contributed to Wolf Of Arches and Tmustt e-commerce projects (Redux + Stripe)',
      'Delivered features ahead of schedule with Agile collaboration'
    ]
  },
  {
    company: 'Bizneedle',
    type: 'Remote',
    role: 'MERN Stack Developer',
    period: 'Aug – Dec 2024',
    highlights: [
      'Hospital Management System (Next.js, 40% faster load)',
      'RESTful APIs + MongoDB, 500+ daily transactions, 99.9% uptime',
      'JWT + Clerk Auth implementation'
    ]
  },
  {
    company: 'Grow Intern & BehinDev',
    type: 'Remote Internship',
    role: 'Full Stack Developer Intern',
    period: 'Mar – Jun 2024',
    highlights: [
      'Built Workiee Job Portal and Swift Mart using MERN stack and deployed on Vercel',
      'Created responsive React interfaces with 95+ Lighthouse score',
      'Implemented reusable components and modern API-driven flows'
    ]
  }
]

// Projects Section
export interface Project {
  name: string
  description: string
  stack: string[]
  tags: string[]
  liveUrl: string
  repoUrl?: string
}

export const projectsData: Project[] = [
  {
    name: 'REHASH',
    description: 'Reverse E-Commerce SaaS Dashboard with dynamic pricing algo, condition assessment, role-based auth (admin/vendor), 200+ daily listings',
    stack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
    tags: ['SaaS', 'Full Stack', 'Role-Based Auth'],
    liveUrl: 'https://rehash-project-frontend.vercel.app/'
  },
  {
    name: 'Dine Market',
    description: 'Full-featured e-commerce platform with dynamic product pages, cart and checkout flows, integrated content management and authentication.',
    stack: ['Next.js', 'Sanity CMS', 'Redux', 'Stripe', 'Clerk Auth', 'Tailwind CSS'],
    tags: ['E-Commerce', 'Full Stack', 'Payments'],
    liveUrl: 'https://e-commerce-website-xi-ten.vercel.app/'
  },
  {
    name: 'Swift Mart',
    description: 'Modern e-commerce storefront with responsive UX, dynamic listings, and production-ready checkout flow.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    tags: ['E-Commerce', 'MERN', 'Responsive'],
    liveUrl: 'https://swift-mart-ecommerce-website.vercel.app/'
  },
  {
    name: 'Tmustt',
    description: 'Clothing e-commerce application with inventory and admin workflows, optimized for responsive mobile-first shopping experiences.',
    stack: ['Next.js', 'MongoDB', 'Shadcn UI', 'Tailwind CSS', 'Stripe'],
    tags: ['E-Commerce', 'Admin Panel', 'Responsive'],
    liveUrl: 'https://www.tmustt.com/'
  },
  {
    name: 'Quran Player',
    description: 'Quran audio player with Surah and Qari selection via APIs; ranked 2nd in GDSC UET NC Frontend Bootcamp.',
    stack: ['React', 'Tailwind CSS', 'REST APIs'],
    tags: ['Frontend', 'API Integration', 'Awarded'],
    liveUrl: 'https://quran-player-adnan.netlify.app/'
  },
  {
    name: 'Wolf Of Arches Portal',
    description: 'Portal-focused product with end-to-end UI workflows and backend integrations for lead/support style operations.',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    tags: ['Portal', 'Full Stack', 'Business App'],
    liveUrl: 'https://wolfofarches.com/'
  },
  {
    name: 'NIJ Web Solution',
    description: 'Company website and business solution platform with clean responsive pages and service-focused information architecture.',
    stack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    tags: ['Business Site', 'Frontend', 'Responsive'],
    liveUrl: 'https://nijwebsolution.vercel.app/'
  },
  {
    name: 'Appointment System',
    description: 'Appointment booking and management platform built for operational workflows with efficient scheduling and dashboard views.',
    stack: ['Next.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    tags: ['Business App', 'Scheduling', 'Dashboard'],
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
      title: 'Working on',
      description: 'ERP system for digital business ops & project tracking',
      icon: 'Briefcase'
    },
    {
      title: 'Collaborating on',
      description: 'Agentic AI + MERN Stack projects',
      icon: 'Users'
    },
    {
      title: 'Learning',
      description: 'Agentic AI (n8n workflows)',
      icon: 'BookOpen'
    },
    {
      title: 'Ask me about',
      description: 'Full Stack Dev, MERN, Vibe Coding, Agentic AI',
      icon: 'MessageCircle'
    }
  ],
  footerText: 'I love exploring new ideas, contribute to Open Source, and keep a close eye on big tech tool launches.'
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
