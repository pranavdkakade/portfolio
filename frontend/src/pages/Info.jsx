import { useState, useEffect } from 'react'
import { Code2, GraduationCap, Briefcase, Award, FileText, ExternalLink, Cloud, BarChart2, Brain, Database, Server, GitBranch, Box, Zap, Globe, Terminal, ArrowRight, Eye, X, Calendar, MapPin, CheckCircle2, Layers, Camera, Crown, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const featuredProjects = [
  {
    title: 'Portfolio Website',
    description: 'A modern personal portfolio built with React + Vite on the frontend and FastAPI on the backend. Features smooth routing, dark navy UI, and contact form.',
    tags: ['React', 'FastAPI', 'Tailwind'],
    github: 'https://github.com/PranavKakade/portfolio',
    live: '#',
    banner: 'from-teal-900 to-teal-700',
    status: 'ACTIVE',
    statusColor: 'bg-blue-500/80 text-white',
    videoId: 'dQw4w9WgXcQ',
    date: 'Jan 2025',
    location: 'LPU, Punjab',
    problem: 'No central place to showcase skills, projects, and contact info for recruiters visiting online.',
    problemPoints: ['No unified personal brand online', 'Static HTML sites feel outdated and hard to maintain'],
    solution: 'Built a full-stack portfolio using React + Vite with a FastAPI backend for the contact form and dynamic data serving.',
    solutionPoints: ['Smooth client-side routing with React Router', 'Dark navy UI with Tailwind CSS animations'],
    techStack: ['React', 'FastAPI', 'Tailwind', 'Python', 'Vite'],
    keyFeatures: [
      { icon: 'zap', text: 'Animated dark UI with custom cursor effect' },
      { icon: 'layers', text: 'Component-based architecture for easy updates' },
      { icon: 'check', text: 'Contact form powered by FastAPI backend' },
    ],
    challenge: '"Matching the design vision pixel-perfectly while keeping the Tailwind config minimal was the biggest challenge. Custom gradient tokens and animation utilities solved it."',
  },
  {
    title: 'Task Manager API',
    description: 'RESTful API for task management with auth, CRUD operations, and PostgreSQL database. Built with FastAPI and SQLAlchemy.',
    tags: ['FastAPI', 'PostgreSQL', 'JWT'],
    github: 'https://github.com/PranavKakade/task-api',
    live: '#',
    banner: 'from-navy-700 to-slate-700',
    status: 'LIVE',
    statusColor: 'bg-green-500/80 text-white',
    videoId: 'dQw4w9WgXcQ',
    date: 'Mar 2025',
    location: 'Remote',
    problem: 'Most task APIs lack proper authentication and scalable schema design, making them insecure and hard to extend.',
    problemPoints: ['Insecure endpoints without token-based auth', 'Poor relational schema with no user isolation'],
    solution: 'Designed a secure RESTful API with JWT auth, role-based access, and a normalized PostgreSQL schema via SQLAlchemy.',
    solutionPoints: ['JWT access + refresh token flow', 'Alembic migrations for schema versioning'],
    techStack: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'Python'],
    keyFeatures: [
      { icon: 'check', text: 'JWT Authentication with refresh tokens' },
      { icon: 'layers', text: 'Full CRUD with user-scoped task isolation' },
      { icon: 'zap', text: 'Auto-generated Swagger & ReDoc API docs' },
    ],
    challenge: '"Handling token refresh races in concurrent requests required implementing a mutex-style lock on the refresh endpoint to prevent duplicate token issuance."',
  },
]

const tagColors = {
  React: 'bg-blue-500/20 text-blue-400 border-blue-500/25',
  FastAPI: 'bg-green-500/20 text-green-400 border-green-500/25',
  Python: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/25',
  Tailwind: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/25',
  PostgreSQL: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/25',
  JWT: 'bg-purple-500/20 text-purple-400 border-purple-500/25',
  default: 'bg-white/5 text-white/50 border-white/10',
}

const skills = [
  { name: 'JavaScript',   abbr: 'JS',  Icon: null,       bg: 'bg-yellow-400/15', fg: 'text-yellow-400' },
  { name: 'Python',       abbr: 'Py',  Icon: null,       bg: 'bg-blue-400/15',   fg: 'text-blue-400'   },
  { name: 'React',        abbr: '⚛',   Icon: null,       bg: 'bg-cyan-400/15',   fg: 'text-cyan-400'   },
  { name: 'Tailwind CSS', abbr: 'TW',  Icon: null,       bg: 'bg-teal-400/15',   fg: 'text-teal-400'   },
  { name: 'HTML / CSS',   abbr: 'H5',  Icon: null,       bg: 'bg-orange-400/15', fg: 'text-orange-400' },
  { name: 'FastAPI',      abbr: null,  Icon: Zap,        bg: 'bg-green-400/15',  fg: 'text-green-400'  },
  { name: 'Node.js',      abbr: null,  Icon: Server,     bg: 'bg-lime-400/15',   fg: 'text-lime-400'   },
  { name: 'REST APIs',    abbr: null,  Icon: Globe,      bg: 'bg-indigo-400/15', fg: 'text-indigo-400' },
  { name: 'PostgreSQL',   abbr: null,  Icon: Database,   bg: 'bg-sky-400/15',    fg: 'text-sky-400'    },
  { name: 'MongoDB',      abbr: null,  Icon: Database,   bg: 'bg-green-500/15',  fg: 'text-green-400'  },
  { name: 'SQLite',       abbr: 'SQ',  Icon: null,       bg: 'bg-blue-300/15',   fg: 'text-blue-300'   },
  { name: 'Redis',        abbr: null,  Icon: Server,     bg: 'bg-red-400/15',    fg: 'text-red-400'    },
  { name: 'Git',          abbr: null,  Icon: GitBranch,  bg: 'bg-orange-500/15', fg: 'text-orange-400' },
  { name: 'Docker',       abbr: null,  Icon: Box,        bg: 'bg-blue-400/15',   fg: 'text-blue-400'   },
  { name: 'VS Code',      abbr: null,  Icon: Terminal,   bg: 'bg-blue-600/15',   fg: 'text-blue-400'   },
  { name: 'Postman',      abbr: 'PM',  Icon: null,       bg: 'bg-orange-400/15', fg: 'text-orange-400' },
]

const certifications = [
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Dec 2023',
    link: '#',
    icon: Cloud,
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-400',
  },
  {
    title: 'Google Data Analytics',
    issuer: 'Google Career Certs',
    date: 'Oct 2023',
    link: '#',
    icon: BarChart2,
    iconBg: 'bg-blue-500/15',
    iconColor: 'text-blue-400',
  },
  {
    title: 'Deep Learning Specialization',
    issuer: 'DeepLearning.AI',
    date: 'Aug 2023',
    link: '#',
    icon: Brain,
    iconBg: 'bg-purple-500/15',
    iconColor: 'text-purple-400',
  },
]

const experience = [
  {
    role: 'Full Stack Developer Intern',
    company: 'Tech Company',
    period: '2025 – Present',
    desc: 'Built scalable web apps using React and FastAPI. Improved API response time by 40%.',
  },
  {
    role: 'Frontend Developer',
    company: 'Startup XYZ',
    period: '2024 – 2025',
    desc: 'Developed responsive UIs and integrated REST APIs for client-facing products.',
  },
]

const featureIcon = (type) => {
  if (type === 'zap') return <Zap size={13} className="text-accent flex-shrink-0" />
  if (type === 'layers') return <Layers size={13} className="text-purple-400 flex-shrink-0" />
  return <CheckCircle2 size={13} className="text-green-400 flex-shrink-0" />
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-backdrop-in"
      style={{ background: 'rgba(2,11,24,0.25)', backdropFilter: 'blur(3px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden flex flex-col md:flex-row animate-modal-pop"
        style={{ background: '#0d1b2e', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all"
        >
          <X size={16} />
        </button>

        <div className="flex-shrink-0 w-full md:w-[42%] bg-black flex items-center justify-center min-h-[220px] md:min-h-0">
          <iframe
            src={`https://www.youtube.com/embed/${project.videoId}?autoplay=0&rel=0`}
            title={`${project.title} demo`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full min-h-[220px] md:min-h-full"
            style={{ minHeight: '220px', aspectRatio: '16/9' }}
          />
        </div>

        <div className="flex-1 overflow-y-auto" style={{ background: '#0a1628' }}>
          <div className="px-7 pt-7 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <h2 className="text-2xl font-extrabold text-white leading-tight mb-5 pr-8">{project.title}</h2>
            <div className="flex gap-2">
              <a
                href={project.live !== '#' ? project.live : project.github}
                target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-xs font-bold tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                style={{ background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)', boxShadow: '0 4px 18px rgba(37,99,235,0.35)' }}
              >
                <Zap size={13} /> Live Demo
              </a>
              <a
                href={project.github}
                target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-white/80 text-xs font-bold tracking-wide transition-all duration-200 hover:bg-white/10 active:scale-[0.98]"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <Code2 size={13} /> View Code
              </a>
            </div>
          </div>

          <div className="px-7 py-5 space-y-6">
            <div>
              <p className="text-[10px] font-black tracking-[0.18em] uppercase mb-2" style={{ color: '#22d3ee' }}>The Problem</p>
              <p className="text-white/55 text-[11px] leading-relaxed mb-3">{project.problem}</p>
              <ul className="space-y-1.5">
                {project.problemPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-white/40 text-[11px] leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#22d3ee', opacity: 0.6 }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-black tracking-[0.18em] uppercase mb-2" style={{ color: '#22d3ee' }}>The Solution</p>
              <p className="text-white/55 text-[11px] leading-relaxed mb-3">{project.solution}</p>
              <ul className="space-y-1.5">
                {project.solutionPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-white/40 text-[11px] leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#22d3ee', opacity: 0.6 }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-black tracking-[0.18em] uppercase text-white/30 mb-3">Tech Stack</p>
              <div className="grid grid-cols-3 gap-2">
                {project.techStack.map((tag) => (
                  <div key={tag} className="flex flex-col items-center justify-center gap-2 py-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[9px] font-black tracking-wide" style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)' }}>
                      {tag.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="text-[10px] font-semibold text-white/50 text-center leading-tight">{tag}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-black tracking-[0.18em] uppercase text-white/30 mb-3">Key Features</p>
              <ul className="space-y-2">
                {project.keyFeatures.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/65 text-[11px] font-medium" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                    <span className="w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.07)' }}>
                      {featureIcon(f.icon)}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-black tracking-[0.18em] uppercase mb-3" style={{ color: '#f59e0b' }}>Challenges Overcome</p>
              <blockquote className="rounded-xl px-4 py-4 text-white/50 text-[11px] italic leading-relaxed" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                {project.challenge}
              </blockquote>
            </div>
            <div className="flex items-center gap-5 pt-1 pb-2 text-white/25 text-[11px]">
              <span className="flex items-center gap-1.5"><Calendar size={11} /> {project.date}</span>
              <span className="flex items-center gap-1.5"><MapPin size={11} /> {project.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionTitle({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2 bg-accent/10 rounded-lg border border-accent/20">
        <Icon size={18} className="text-accent" />
      </div>
      <h2 className="text-sm font-mono font-bold tracking-[0.25em] text-white/80 uppercase">
        {title}
      </h2>
      <div className="flex-1 h-px bg-white/5" />
    </div>
  )
}

export default function Info() {
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="min-h-screen bg-main-gradient px-6 py-10 pb-28 animate-fade-in">

      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-700/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto space-y-10">

        {/* Header */}
        <div className="space-y-1">
          <p className="text-accent font-mono text-xs tracking-widest uppercase">About Me</p>
          <h1 className="text-3xl font-bold text-white">Pranav Kakade</h1>
          <p className="text-white/50 text-sm leading-relaxed mt-3">
            A passionate Full Stack Developer pursuing B.Tech at Lovely Professional University.
            I build modern web applications with Python &amp; FastAPI on the backend, and React on the frontend.
            I love clean code, elegant UIs, and solving real-world problems.
          </p>
          <div className="h-6" />

          {/* CV + Social buttons row */}
          <div className="flex items-center gap-3 flex-wrap">
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2.5 px-6 py-3 bg-accent hover:bg-accent-dark rounded-xl text-white text-sm font-semibold transition-all duration-300 active:scale-95 shadow-lg shadow-accent/30 hover:shadow-accent/50"
            >
              <FileText size={16} />
              Download CV
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-2">

              {/* X / Twitter */}
              <a
                href="https://x.com/PranavKakade"
                target="_blank"
                rel="noopener noreferrer"
                className="group/s flex items-center overflow-hidden w-10 hover:w-28 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-accent/30 hover:bg-accent/5 text-white/40 hover:text-white/90 transition-all duration-300 ease-in-out"
              >
                <span className="flex items-center justify-center w-10 h-10 flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </span>
                <span className="pr-3 text-xs font-mono whitespace-nowrap opacity-0 group-hover/s:opacity-100 transition-opacity duration-200 delay-100">
                  @Pranav
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/pranav-kakade"
                target="_blank"
                rel="noopener noreferrer"
                className="group/li flex items-center overflow-hidden w-10 hover:w-36 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-accent/30 hover:bg-accent/5 text-white/40 hover:text-white/90 transition-all duration-300 ease-in-out"
              >
                <span className="flex items-center justify-center w-10 h-10 flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                <span className="pr-3 text-xs font-mono whitespace-nowrap opacity-0 group-hover/li:opacity-100 transition-opacity duration-200 delay-100">
                  Pranav Kakade
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/PranavKakade"
                target="_blank"
                rel="noopener noreferrer"
                className="group/gh flex items-center overflow-hidden w-10 hover:w-32 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-accent/30 hover:bg-accent/5 text-white/40 hover:text-white/90 transition-all duration-300 ease-in-out"
              >
                <span className="flex items-center justify-center w-10 h-10 flex-shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </span>
                <span className="pr-3 text-xs font-mono whitespace-nowrap opacity-0 group-hover/gh:opacity-100 transition-opacity duration-200 delay-100">
                  PranavKakade
                </span>
              </a>

              {/* ProductHunt */}
              <a
                href="https://www.producthunt.com/@pranav_kakade"
                target="_blank"
                rel="noopener noreferrer"
                className="group/ph flex items-center overflow-hidden w-10 hover:w-32 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-accent/30 hover:bg-accent/5 text-white/40 hover:text-white/90 transition-all duration-300 ease-in-out"
              >
                <span className="flex items-center justify-center w-10 h-10 flex-shrink-0 text-sm font-bold">
                  P
                </span>
                <span className="pr-3 text-xs font-mono whitespace-nowrap opacity-0 group-hover/ph:opacity-100 transition-opacity duration-200 delay-100">
                  ProductHunt
                </span>
              </a>

            </div>
          </div>
        </div>

        {/* Featured Projects */}
        <div>
          <SectionTitle icon={Code2} title="Featured Projects" />
          <div className="grid grid-cols-2 gap-3">
            {featuredProjects.map((proj, i) => {
              const isHovered = hoveredIdx === i
              return (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  onClick={() => setSelectedProject(proj)}
                  className={`relative flex flex-col bg-navy-800/40 border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                    isHovered ? 'border-accent/40 shadow-xl shadow-accent/10 scale-[1.01]' : 'border-white/5'
                  }`}
                >
                  {/* View Details overlay */}
                  <div className={`absolute inset-0 z-10 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-2xl transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-dark rounded-xl text-white text-xs font-semibold shadow-lg shadow-accent/40 transition-all duration-200 active:scale-95">
                      <Eye size={13} />
                      View Details
                    </button>
                  </div>

                  {/* Banner */}
                  <div className={`relative h-28 bg-gradient-to-br ${proj.banner} flex items-center justify-center`}>
                    <Code2 size={36} className="text-white/10" />
                    <span className={`absolute top-2.5 right-2.5 text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-md ${proj.statusColor}`}>
                      {proj.status}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-col flex-1 p-3.5">
                    <div className="flex flex-wrap gap-1.5 mb-2.5">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wide border ${tagColors[tag] || tagColors.default}`}
                        >
                          {tag.toUpperCase()}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-white font-bold text-sm leading-snug mb-1.5">{proj.title}</h3>
                    <p className="text-white/45 text-xs leading-relaxed line-clamp-2 flex-1">{proj.description}</p>
                    <div className="flex items-center gap-2 mt-3 pt-3 border-t border-white/5">
                      <a href={proj.github} target="_blank" rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-white/40 hover:text-white/80 text-xs transition-colors">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                        </svg>
                        Code
                      </a>
                      {proj.live !== '#' && (
                        <a href={proj.live} target="_blank" rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-1 text-accent/70 hover:text-accent text-xs transition-colors">
                          <ExternalLink size={11} /> Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* View More */}
          <Link
            to="/projects"
            className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-navy-800/40 border border-white/5 hover:border-accent/30 hover:bg-accent/5 text-white/60 hover:text-white text-sm font-medium transition-all duration-200"
          >
            View More Projects
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Education */}
        <div>
          <SectionTitle icon={GraduationCap} title="Education" />
          <div className="bg-navy-800/40 border border-white/5 rounded-xl p-5 backdrop-blur-sm hover:border-accent/20 transition-colors">
            <p className="text-white font-semibold">B.Tech – Computer Science &amp; Engineering</p>
            <p className="text-accent text-sm font-mono mt-1">Lovely Professional University</p>
            <p className="text-white/40 text-xs mt-1 font-mono">2023 – 2027</p>
          </div>
        </div>

        {/* Skills */}
        <div>
          <SectionTitle icon={Code2} title="Skills" />
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => {
              const IconComp = skill.Icon
              return (
                <span
                  key={skill.name}
                  className="flex items-center gap-2 pl-1.5 pr-4 py-1.5 bg-navy-800/60 border border-white/10 rounded-full text-sm text-white/80 font-medium hover:border-accent/25 hover:bg-navy-700/50 transition-colors cursor-default select-none"
                >
                  <span className={`flex items-center justify-center w-6 h-6 rounded-md flex-shrink-0 ${skill.bg} ${skill.fg}`}>
                    {skill.abbr
                      ? <span className="text-[9px] font-bold leading-none">{skill.abbr}</span>
                      : <IconComp size={12} />
                    }
                  </span>
                  {skill.name}
                </span>
              )
            })}
          </div>
        </div>

        {/* Experience */}
        <div>
          <SectionTitle icon={Briefcase} title="Experience" />
          <div className="space-y-3">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="bg-navy-800/40 border border-white/5 rounded-xl p-5 backdrop-blur-sm hover:border-accent/20 transition-colors relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/40 rounded-full" />
                <div className="pl-3">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <p className="text-white font-semibold text-sm">{exp.role}</p>
                    <span className="text-accent/70 text-xs font-mono">{exp.period}</span>
                  </div>
                  <p className="text-accent text-xs font-mono mt-0.5">{exp.company}</p>
                  <p className="text-white/50 text-xs mt-2 leading-relaxed">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <SectionTitle icon={Award} title="Certifications" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((cert, i) => {
              const Icon = cert.icon
              return (
                <div
                  key={i}
                  className="group flex flex-col bg-navy-800/40 border border-white/5 rounded-xl backdrop-blur-sm hover:border-accent/20 transition-colors overflow-hidden"
                >
                  {/* Top: icon + title + issuer */}
                  <div className="flex items-start gap-3 p-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${cert.iconBg} flex items-center justify-center`}>
                      <Icon size={18} className={cert.iconColor} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white group-hover:text-accent text-sm font-semibold leading-snug transition-colors duration-200">{cert.title}</p>
                      <p className="text-white/35 text-xs font-mono mt-0.5 uppercase tracking-wide">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/5 mx-4" />

                  {/* Bottom: date + view link */}
                  <div className="flex items-center justify-between px-4 py-2.5">
                    <p className="text-white/35 text-xs font-mono">Completed: {cert.date}</p>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-accent text-xs font-semibold hover:text-white transition-colors duration-200"
                    >
                      VIEW CERTIFICATE
                      <ExternalLink size={11} />
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Beyond Engineering */}
        <div>
          <SectionTitle icon={Zap} title="Beyond Engineering" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                icon: Camera,
                iconBg: 'bg-blue-500/15',
                iconColor: 'text-blue-400',
                title: 'Photography',
                desc: 'Capturing the brutalist architecture of urban environments through a 35mm lens.',
              },
              {
                icon: Crown,
                iconBg: 'bg-purple-500/15',
                iconColor: 'text-purple-400',
                title: 'Chess Strategy',
                desc: 'Analyzing grandmaster endgames to sharpen logical pattern recognition and patience.',
              },
              {
                icon: Users,
                iconBg: 'bg-green-500/15',
                iconColor: 'text-green-400',
                title: 'Open Source Mentoring',
                desc: 'Empowering new developers to contribute their first pull requests to community projects.',
              },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="group flex flex-col bg-navy-800/40 border border-white/5 rounded-xl backdrop-blur-sm hover:border-accent/20 transition-colors overflow-hidden"
                >
                  <div className="flex items-start gap-3 p-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${item.iconBg} flex items-center justify-center`}>
                      <Icon size={18} className={item.iconColor} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white group-hover:text-accent text-sm font-semibold leading-snug transition-colors duration-200">{item.title}</p>
                      <p className="text-white/35 text-xs leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  )
}
