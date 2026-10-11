import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Server,
  Database,
  Cloud,
  Camera,
  Cpu,
  GitBranch,
  Terminal,
  FileCode,
  Globe,
  Layers,
  Zap,
  Trophy,
  GraduationCap,
  Users,
  Rocket,
  ArrowUpRight,
  ArrowRight,
  Download,
  Menu,
  X,
  Sparkles,
  ExternalLink,
  Building2,
  MapPin,
  Calendar,
  CheckCircle2,
  Circle,
  Phone,
} from 'lucide-react';

export const icons = {
  Github,
  Linkedin,
  Mail,
  Code2,
  Server,
  Database,
  Cloud,
  Camera,
  Cpu,
  GitBranch,
  Terminal,
  FileCode,
  Globe,
  Layers,
  Zap,
  Trophy,
  GraduationCap,
  Users,
  Rocket,
  ArrowUpRight,
  ArrowRight,
  Download,
  Menu,
  X,
  Sparkles,
  ExternalLink,
  Building2,
  MapPin,
  Calendar,
  CheckCircle2,
  Circle,
  Phone,
};

export const personalInfo = {
  name: 'Nikhil Goswami',
  role: 'Full Stack Developer',
  tagline: 'Building Digital Experiences That Solve Real Problems.',
  intro:
    'BCA student and aspiring full stack developer building practical web applications, backend workflows, and camera-assisted systems that solve real problems.',
  education: 'Bachelor of Computer Applications (BCA)',
  college: 'Bharatesh College of Computer Applications',
  graduation: 'Expected 2027',
  email: 'nikhil011goswami@gmail.com',
  github: 'https://github.com/nikhil011goswami-dot',
  githubLabel: 'github.com/nikhil011goswami-dot',
  linkedin: 'https://www.linkedin.com/in/nikhil-goswami-607a82385',
  linkedinLabel: 'in/nikhil-goswami-607a82385',
};

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const aboutDetails = [
  { icon: 'GraduationCap', label: 'Education', value: 'BCA — Bharatesh College' },
  { icon: 'Calendar', label: 'Graduation', value: 'Expected 2027' },
  { icon: 'MapPin', label: 'Focus', value: 'Full Stack Development' },
  { icon: 'Rocket', label: 'Approach', value: 'Learn by Building' },
];

export type ProjectStatus = 'in-progress' | 'planning' | 'completed';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  status: ProjectStatus;
  statusLabel: string;
  features: { text: string; done: boolean }[];
  tech: string[];
  icon: string;
  accent: 'emerald' | 'ocean' | 'amber';
  links?: { type: 'github' | 'demo'; url: string; label: string }[];
}

export const projects: Project[] = [
  {
    id: 'smart-parking',
    title: 'Smart Parking System',
    subtitle: 'IP-Camera / CCTV-Based Parking Management',
    description:
      'A parking management system that leverages IP cameras and CCTV infrastructure to monitor vehicle entry and exit, maintain parking records, and surface real-time occupancy on a dashboard.',
    status: 'in-progress',
    statusLabel: 'Current Project',
    icon: 'Camera',
    accent: 'emerald',
    features: [
      { text: 'Vehicle entry & exit monitoring workflow', done: true },
      { text: 'Parking records and dashboard view', done: true },
      { text: 'NVR / camera-stream integration', done: false },
      { text: 'Real-time occupancy analytics', done: false },
    ],
    tech: ['Python', 'IP Cameras', 'CCTV', 'Dashboard'],
  },
  {
    id: 'newsly',
    title: 'Newsly',
    subtitle: 'Multilingual News Platform — Architecture Phase',
    description:
      'A concept for a multilingual news platform designed for scale. The architecture is being planned around a modern NestJS backend with PostgreSQL, Redis caching, and push notifications — no components are deployed yet.',
    status: 'planning',
    statusLabel: 'Architecture / Planning',
    icon: 'Globe',
    accent: 'ocean',
    features: [
      { text: 'Multilingual content architecture', done: false },
      { text: 'NestJS + TypeScript backend design', done: false },
      { text: 'PostgreSQL + Prisma data modeling', done: false },
      { text: 'Redis caching & FCM push notifications', done: false },
    ],
    tech: ['NestJS', 'TypeScript', 'PostgreSQL', 'Prisma', 'Redis', 'AWS', 'FCM'],
  },
  {
    id: 'suvidha',
    title: 'Suvidha',
    subtitle: 'Shopping & Dealer Management System',
    description:
      'A shopping and dealer management application concept covering product browsing, orders, inventory, vendors, invoices, and tracking. The implementation details and current completion status are still being confirmed.',
    status: 'in-progress',
    statusLabel: 'Implementation Discussed',
    icon: 'Layers',
    accent: 'amber',
    features: [
      { text: 'Product browsing & order management', done: true },
      { text: 'Inventory & vendor management', done: true },
      { text: 'Invoice generation & order tracking', done: true },
      { text: 'JSON-based data storage', done: true },
    ],
    tech: ['Python', 'Flask', 'Streamlit', 'JSON'],
  },
];

export interface SkillCategory {
  title: string;
  icon: string;
  status: 'current' | 'exploring';
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'Code2',
    status: 'current',
    skills: ['Python', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    title: 'Backend & UI',
    icon: 'Server',
    status: 'current',
    skills: ['Flask', 'Streamlit', 'REST APIs', 'IP-Camera Integration'],
  },
  {
    title: 'Data & Tools',
    icon: 'Database',
    status: 'current',
    skills: ['MySQL', 'JSON', 'Git', 'GitHub', 'VS Code', 'Pandas', 'Plotly', 'ReportLab'],
  },
  {
    title: 'Exploring',
    icon: 'Cloud',
    status: 'exploring',
    skills: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'AWS', 'OpenCV', 'YOLO', 'Prisma'],
  },
];

export interface Achievement {
  icon: string;
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    icon: 'Cpu',
    title: 'IDE Bootcamp — Selected',
    description:
      'Selected for a 5-day Innovation, Design, and Entrepreneurship (IDE) Bootcamp — an intensive hands-on program focused on building practical problem-solving and product-thinking skills.',
  },
  {
    icon: 'Trophy',
    title: 'Two Hackathon Wins',
    description:
      'Won two hackathons by building working prototypes under time constraints — demonstrating rapid prototyping, teamwork, and the ability to deliver functional solutions under pressure.',
  },
  {
    icon: 'Users',
    title: 'Webnova 2026 — Organizer',
    description:
      'Involved in organizing the UI/UX design round for Webnova 2026, an event associated with the college\'s Research and Development Cell — contributing to event design and participant evaluation.',
  },
];

export const stats = [
  { value: '3', label: 'Featured Projects' },
  { value: '2', label: 'Hackathon Wins' },
  { value: '5', label: 'Day Bootcamp' },
  { value: '2027', label: 'Graduation Year' },
];
