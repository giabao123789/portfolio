import { Project, Experience, TechStackCategory } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Lingua AI Studio',
    description: 'Multilingual AI Chat Application',
    longDescription:
      'A bilingual AI chat platform with NestJS 11 backend and Next.js 16 locale-first routing, powered by OpenAI gpt-4o-mini with persistent conversation history and full EN/VI support.',
    technologies: ['NestJS', 'Next.js', 'MongoDB', 'JWT', 'OpenAI', 'next-intl', 'Tailwind CSS', 'Render'],
    features: [
      'Architected bilingual AI chat platform with NestJS 11 backend (5 modules: auth, users, ai, chats, common) and Next.js 16 locale-first routing under /vi and /en via next-intl v4 with full EN/VI translation files.',
      'Built persistent chat system: POST /chats creates session + gpt-4o-mini reply; POST /chats/:id/messages continues thread — all conversations saved to MongoDB Atlas and restorable from history panel.',
      'Implemented JWT auth (Passport, bcrypt) with protected route guards; secured backend with Helmet middleware, CORS whitelist, and ValidationPipe.',
      'Deployed both services via render.yaml Blueprint with health checks and Render Git auto-deploy; delivered typewriter animation, dark/light theme, and locale switcher with localStorage persistence.',
    ],
    github: 'https://github.com/giabao123789/-multilingual-ai-platform',
    live: 'https://multilingual-ai-platform-web.onrender.com/',
    period: '02/2026 - 03/2026',
  },
  {
    id: '2',
    title: 'Music App',
    description: 'Full-Stack Music Streaming Platform',
    longDescription:
      'A fullstack music streaming platform with NestJS 10 backend (15+ modules, 48+ endpoints) supporting 3 role-based dashboards, OTP email auth, Cloudinary media storage, and Docker deployment on Render.',
    technologies: ['NestJS', 'Next.js', 'TypeScript', 'Prisma', 'MongoDB', 'NextAuth', 'Cloudinary', 'Nodemailer', 'Docker', 'Render'],
    features: [
      'Architected fullstack music platform with NestJS 10 (15+ modules, 48+ endpoints) supporting 3 role-based dashboards: USER, ARTIST, and ADMIN with dedicated route guards.',
      'Engineered 2-step OTP email auth (Nodemailer SMTP) for register/login/reset — 5 endpoints secured with Passport JWT and bcrypt, bridged to Next.js 14 via NextAuth credentials provider.',
      'Integrated Cloudinary for media storage and music-metadata for automatic audio analysis on upload; shipped drag-and-drop playlist reordering (@dnd-kit) and Artist analytics dashboard (Recharts).',
      'Containerized NestJS with multi-stage Docker build (Node 18 Alpine) and deployed both services via render.yaml Blueprint.',
    ],
    github: 'https://github.com/giabao123789/music-app',
    live: 'https://music-web-k3c3.onrender.com/',
    period: '10/2025 - 12/2025',
  },
  {
    id: '3',
    title: 'BlushTodo',
    description: 'AI-Powered Task Management Application',
    longDescription:
      'A fullstack AI task manager with NestJS backend (5 modules), Next.js 15 App Router, OpenAI GPT-4o-mini integration across 4 AI endpoints, persistent chat history, and Docker deployment.',
    technologies: ['NestJS', 'Next.js', 'MongoDB', 'Mongoose', 'JWT', 'OpenAI', 'Zustand', 'React Hook Form', 'Zod', 'Docker', 'Vercel', 'Render'],
    features: [
      'Architected fullstack AI task manager with NestJS (5 modules: auth, users, todos, ai, chats) and Next.js 15 App Router using Zustand, React Hook Form + Zod; Swagger/OpenAPI auto-generated at /docs.',
      'Integrated OpenAI GPT-4o-mini across 4 AI endpoints (generate title, description, categorize, suggest) with persistent chat history module saving full conversation threads per user.',
      'Implemented JWT auth with Passport, bcrypt hashing, and protected route guards; designed Mongoose schemas for Users, Todos, and Chat Messages on MongoDB Atlas.',
      'Configured Jest unit tests for auth service; containerized with Docker and deployed frontend to Vercel, backend to Render.',
    ],
    github: 'https://github.com/giabao123789/TodoList',
    live: 'https://todo-list-chi-nine-14.vercel.app/',
    period: '11/2025 - 12/2025',
  },
  {
    id: '4',
    title: 'Weather Forecast Web Application',
    description: 'Fullstack Real-time Weather Application',
    longDescription:
      'A fullstack weather app with NestJS 11 backend (4 modules) and Next.js 16 frontend, featuring dual-mode weather endpoint, JWT auth, MongoDB search history, and deployment on Render and Railway.',
    technologies: ['NestJS', 'Next.js', 'MongoDB', 'JWT', 'OpenWeather API', 'Tailwind CSS', 'Render', 'Railway'],
    features: [
      'Architected fullstack weather app with NestJS 11 backend (4 modules: auth, users, weather, common) and Next.js 16 frontend deployed as 2 independent services via render.yaml — Render for both, Railway as alternative backend target.',
      'Designed dual-mode weather endpoint with OptionalJwtAuthGuard — guest users query live weather freely, authenticated users get search history auto-saved to MongoDB Atlas with userId indexing.',
      'Implemented complete JWT auth flow: register/login with bcrypt (10 salt rounds), Bearer token strategy via Passport, JwtAuthGuard on protected /users routes, and client-side session management via localStorage.',
      'Delivered 6 production features: city search, browser geolocation auto-detect, C°/F° toggle, persistent search history dashboard, loading skeleton UI, and structured error handling for invalid city/coordinates/network failures.',
    ],
    github: 'https://github.com/giabao123789/weather-forecasting',
    live: 'https://weather-web-0m0x.onrender.com/',
    period: '03/2026 - 04/2026',
  },
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Fullstack Developer',
    company: 'University of Transport Ho Chi Minh City',
    period: '10/2023 - 11/2025',
    description: 'Internship as Fullstack Developer',
    responsibilities: [
      'Built a book recommendation feature for the Library Management System — designed MongoDB schema, developed NestJS API endpoints, and integrated ReactJS UI from scratch to production.',
      'Diagnosed and resolved critical performance bottlenecks under high concurrent traffic; reduced query response time by optimizing MongoDB indexes and eliminating N+1 queries on high-traffic endpoints for daily university users.',
      'Maintained and refactored core modules across a 2-year cycle — fixed production bugs, participated in code reviews, and followed team Git workflow (feature branches, PR reviews, commit conventions).',
    ],
    technologies: ['Tech stack: NestJS, ReactJS, TypeScript, Git/GitHub'],
  },
  {
    id: '2',
    title: 'Crew Leader Level 3',
    company: 'Highlands Coffee',
    period: '10/2022 - 06/2023',
    description: 'Leadership and Team Management',
    responsibilities: [
      'Led daily operations for a team of 8, coordinating task priorities, product rollouts, and escalation protocols during peak-hour service.',
      'Applied root-cause analysis to resolve recurring supply shortages and workflow bottlenecks, maintaining service quality KPIs.',
    ],
    technologies: ['Leadership', 'Team Management'],
  },
];

export const techStack: TechStackCategory[] = [
  {
    category: 'Frontend',
    items: ['Next.js', 'React.js', 'Tailwind CSS', 'Framer Motion', 'React Query'],
  },
  {
    category: 'Backend',
    items: [
      'NestJS',
      'Node.js',
      'RESTful API Design',
      'JWT / NextAuth',
      'Middleware & Guards',
      'Interceptors',
      'DTO Validation (class-validator)',
      'WebSocket',
    ],
  },
  {
    category: 'Database',
    items: ['MongoDB Atlas', 'PostgreSQL', 'MySQL', 'Redis', 'Mongoose ODM', 'Indexing & Query Optimization'],
  },
  {
    category: 'DevOps & Tools',
    items: ['Docker', 'Docker Compose', 'GitHub Actions CI/CD', 'Git/GitHub', 'Vercel', 'Render', 'Railway', 'Postman', 'Swagger / OpenAPI'],
  },
  {
    category: 'Testing',
    items: ['Jest (unit/integration)'],
  },
  {
    category: 'AI & Tools',
    items: ['OpenAI API', 'GitHub Copilot', 'Cursor', 'Claude Code'],
  },
];

export const skills = [
  'NestJS',
  'Next.js',
  'React.js',
  'TypeScript',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'Docker',
  'JWT Authentication',
  'OpenAI API',
];

export const aboutText = `I am a recent Information Technology graduate with hands-on experience in building and deploying
fullstack web applications using NestJS and Next.js. I am seeking a Fullstack or Junior Backend Developer
position to apply my technical skills, contribute to scalable and high-performance web applications, and
grow into a professional Software Engineer`;

export const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/giabao123789',
    icon: 'github',
  },
  {
    name: 'Email',
    url: 'mailto:giabao2461@gmail.com',
    icon: 'email',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/trangbaodev/',
    icon: 'linkedin',
  },
];