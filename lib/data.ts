// Personal Information
export const personalInfo = {
  name: 'Muhammad Adnan',
  role: 'Full Stack Developer',
  location: 'Karachi, Pakistan',
  email: 'adnasir607@gmail.com',
  linkedin: 'linkedin.com/in/muhammadadnan',
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
      'Leading Quiquiq food delivery app (real-time tracking + payments)',
      'Built SaaS/multi-tenant apps with Next.js + PostgreSQL',
      'Wolf of Arches + Tmustt e-commerce (Redux + Stripe)',
      '20% ahead of schedule delivery'
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
  }
]

// Projects Section
export interface Project {
  name: string
  description: string
  stack: string[]
  tags: string[]
}

export const projectsData: Project[] = [
  {
    name: 'REHASH',
    description: 'Reverse E-Commerce SaaS Dashboard with dynamic pricing algo, condition assessment, role-based auth (admin/vendor), 200+ daily listings',
    stack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
    tags: ['SaaS', 'Full Stack', 'Role-Based Auth']
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
  tagline: 'Built with Next.js, Tailwind CSS & Framer Motion'
} as const
