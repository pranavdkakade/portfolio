import { useState, useEffect } from 'react'
import { ExternalLink, Github, Code2, Eye, X, Calendar, MapPin, Zap, CheckCircle2, AlertTriangle, Lightbulb, Layers } from 'lucide-react'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern personal portfolio built with React + Vite on the frontend and FastAPI on the backend. Features smooth routing, dark navy UI, and contact form.',
    tags: ['React', 'FastAPI', 'Tailwind', 'Python'],
    github: 'https://github.com/PranavKakade/portfolio',
    live: '#',
    banner: 'from-teal-900 via-teal-800 to-teal-700',
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
    description: 'RESTful API for task management with authentication, CRUD operations, and PostgreSQL database. Built with FastAPI and SQLAlchemy.',
    tags: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT'],
    github: 'https://github.com/PranavKakade/task-api',
    live: '#',
    banner: 'from-slate-800 via-slate-700 to-slate-600',
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
  {
    title: 'E-Commerce Store',
    description: 'Full-stack e-commerce application with cart, payments, and admin dashboard. React frontend with Node.js backend.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/PranavKakade/ecommerce',
    live: '#',
    banner: 'from-purple-900 via-purple-800 to-indigo-800',
    status: 'COMPLETED',
    statusColor: 'bg-purple-500/80 text-white',
    videoId: 'dQw4w9WgXcQ',
    date: 'Jun 2024',
    location: 'LPU, Punjab',
    problem: 'Building a production-grade store requires integrating payments, inventory, and user sessions without security holes.',
    problemPoints: ['Stripe webhook verification often skipped', 'Cart state lost on page refresh without persistence'],
    solution: 'Built a full MERN stack store with server-side Stripe webhook validation, Redux cart persistence, and an admin dashboard.',
    solutionPoints: ['Stripe webhook signature verification on every event', 'Redux Persist for seamless cart state across sessions'],
    techStack: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    keyFeatures: [
      { icon: 'check', text: 'Stripe Checkout with webhook order confirmation' },
      { icon: 'layers', text: 'Admin dashboard with real-time order management' },
      { icon: 'zap', text: 'Persistent cart with Redux + localStorage' },
    ],
    challenge: '"Reconciling optimistic UI cart updates with actual stock availability required a debounced server-side stock check before checkout confirmation."',
  },
  {
    title: 'Chat Application',
    description: 'Real-time chat app using WebSockets. Supports rooms, private messages, and file sharing.',
    tags: ['FastAPI', 'WebSockets', 'React', 'Redis'],
    github: 'https://github.com/PranavKakade/chatapp',
    live: '#',
    banner: 'from-orange-900 via-orange-800 to-amber-800',
    status: 'BETA',
    statusColor: 'bg-orange-500/80 text-white',
    videoId: 'dQw4w9WgXcQ',
    date: 'Sep 2024',
    location: 'Remote',
    problem: 'HTTP polling for chat is slow and resource-heavy; scaling message delivery to multiple rooms is complex.',
    problemPoints: ['Polling adds 500ms+ latency in most setups', 'No pub/sub mechanism for multi-room broadcasting'],
    solution: 'Implemented a WebSocket server with FastAPI and Redis Pub/Sub to broadcast messages across rooms in real-time.',
    solutionPoints: ['Redis Pub/Sub for horizontal scaling across rooms', 'Sub-50ms message delivery end-to-end'],
    techStack: ['FastAPI', 'WebSockets', 'React', 'Redis', 'Python'],
    keyFeatures: [
      { icon: 'zap', text: 'Sub-50ms real-time messaging via WebSockets' },
      { icon: 'layers', text: 'Multi-room support with Redis Pub/Sub' },
      { icon: 'check', text: 'File sharing with async upload handling' },
    ],
    challenge: '"Managing WebSocket disconnection during Redis failover required an exponential backoff reconnect strategy on the client to avoid message loss."',
  },
  {
    title: 'Weather Dashboard',
    description: 'Weather dashboard consuming OpenWeather API with charts, forecast, and geolocation support.',
    tags: ['React', 'Chart.js', 'OpenWeather API'],
    github: 'https://github.com/PranavKakade/weather',
    live: '#',
    banner: 'from-emerald-900 via-emerald-800 to-green-800',
    status: 'LIVE',
    statusColor: 'bg-green-500/80 text-white',
    videoId: 'dQw4w9WgXcQ',
    date: 'Nov 2024',
    location: 'Remote',
    problem: 'Weather apps typically show raw data without visual context, making it hard to compare hourly or weekly trends at a glance.',
    problemPoints: ['Raw API data is difficult to interpret quickly', 'No geolocation-based auto-detection of user city'],
    solution: 'Built an interactive dashboard with Chart.js visualizations and browser Geolocation API for auto city detection.',
    solutionPoints: ['Line charts for 7-day temperature trends', 'Geolocation fallback with manual city search'],
    techStack: ['React', 'Chart.js', 'OpenWeather API', 'Tailwind'],
    keyFeatures: [
      { icon: 'zap', text: 'Auto geolocation with manual fallback search' },
      { icon: 'layers', text: '7-day forecast with Chart.js visualizations' },
      { icon: 'check', text: 'Responsive card layout with weather icons' },
    ],
    challenge: '"Rate-limiting the OpenWeather API while keeping the UI feeling live required client-side caching with a 10-minute TTL to stay within the free tier limits."',
  },
  {
    title: 'AI Notes App',
    description: 'Smart note-taking app with AI-powered summarization, tagging, and semantic search using embeddings.',
    tags: ['Python', 'FastAPI', 'React', 'OpenAI'],
    github: 'https://github.com/PranavKakade/ai-notes',
    live: '#',
    banner: 'from-blue-900 via-blue-800 to-cyan-900',
    status: 'WIP',
    statusColor: 'bg-cyan-500/80 text-white',
    videoId: 'dQw4w9WgXcQ',
    date: 'Feb 2025',
    location: 'LPU, Punjab',
    problem: 'Traditional note apps lack intelligent search — keyword matching misses contextually related notes entirely.',
    problemPoints: ['Keyword search fails for semantically related content', 'Manual tagging is tedious and inconsistent'],
    solution: 'Integrated OpenAI embeddings stored in a vector database for semantic search, with GPT-powered auto-summarization.',
    solutionPoints: ['OpenAI text-embedding-3-small for vector generation', 'Cosine similarity search via pgvector in PostgreSQL'],
    techStack: ['Python', 'FastAPI', 'React', 'OpenAI', 'PostgreSQL'],
    keyFeatures: [
      { icon: 'zap', text: 'Semantic search with OpenAI embeddings' },
      { icon: 'layers', text: 'GPT-4 powered one-click note summarization' },
      { icon: 'check', text: 'Auto-tagging using LLM intent extraction' },
    ],
    challenge: '"Keeping embedding costs low while supporting large note libraries required batching embedding requests and caching vectors on every save rather than every search."',
  },
]

const tagColors = {
  React: 'bg-blue-500/20 text-blue-400 border-blue-500/25',
  FastAPI: 'bg-green-500/20 text-green-400 border-green-500/25',
  Python: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/25',
  Tailwind: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/25',
  PostgreSQL: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/25',
  SQLAlchemy: 'bg-indigo-400/20 text-indigo-300 border-indigo-400/25',
  MongoDB: 'bg-green-600/20 text-green-500 border-green-600/25',
  'Node.js': 'bg-lime-500/20 text-lime-400 border-lime-500/25',
  JWT: 'bg-purple-500/20 text-purple-400 border-purple-500/25',
  Redis: 'bg-red-500/20 text-red-400 border-red-500/25',
  WebSockets: 'bg-yellow-600/20 text-yellow-400 border-yellow-600/25',
  'Chart.js': 'bg-pink-500/20 text-pink-400 border-pink-500/25',
  OpenAI: 'bg-teal-500/20 text-teal-400 border-teal-500/25',
  Stripe: 'bg-violet-500/20 text-violet-400 border-violet-500/25',
  Redux: 'bg-purple-600/20 text-purple-400 border-purple-600/25',
  Vite: 'bg-yellow-400/20 text-yellow-300 border-yellow-400/25',
  default: 'bg-white/5 text-white/50 border-white/10',
}

const featureIcon = (type) => {
  if (type === 'zap') return <Zap size={13} className="text-accent flex-shrink-0" />
  if (type === 'layers') return <Layers size={13} className="text-purple-400 flex-shrink-0" />
  return <CheckCircle2 size={13} className="text-green-400 flex-shrink-0" />
}

function ProjectModal({ project, onClose }) {
  /* close on Escape key */
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  /* prevent body scroll while open */
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
        {/* ── Close button ── */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all"
        >
          <X size={16} />
        </button>

        {/* ══════════════ LEFT — Video ══════════════ */}
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

        {/* ══════════════ RIGHT — Info ══════════════ */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10" style={{ background: '#0a1628' }}>

          {/* ── Title bar ── */}
          <div className="px-7 pt-7 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
            <h2 className="text-2xl font-extrabold text-white leading-tight mb-5 pr-8">{project.title}</h2>

            {/* Action buttons — full width row */}
            <div className="flex gap-2">
              <a
                href={project.live !== '#' ? project.live : project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-white text-xs font-bold tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                style={{ background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)', boxShadow: '0 4px 18px rgba(37,99,235,0.35)' }}
              >
                <Zap size={13} /> Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-white/80 text-xs font-bold tracking-wide transition-all duration-200 hover:bg-white/10 active:scale-[0.98]"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)' }}
              >
                <Code2 size={13} /> View Code
              </a>
            </div>
          </div>

          {/* ── Scrollable sections ── */}
          <div className="px-7 py-5 space-y-6">

            {/* THE PROBLEM */}
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

            {/* THE SOLUTION */}
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

            {/* TECH STACK */}
            <div>
              <p className="text-[10px] font-black tracking-[0.18em] uppercase text-white/30 mb-3">Tech Stack</p>
              <div className="grid grid-cols-3 gap-2">
                {project.techStack.map((tag) => (
                  <div
                    key={tag}
                    className="flex flex-col items-center justify-center gap-2 py-3 rounded-xl"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    {/* icon block */}
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-[9px] font-black tracking-wide"
                      style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)' }}
                    >
                      {tag.slice(0, 2).toUpperCase()}
                    </div>
                    <span className="text-[10px] font-semibold text-white/50 text-center leading-tight">{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* KEY FEATURES */}
            <div>
              <p className="text-[10px] font-black tracking-[0.18em] uppercase text-white/30 mb-3">Key Features</p>
              <ul className="space-y-2">
                {project.keyFeatures.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/65 text-[11px] font-medium"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <span
                      className="w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center"
                      style={{ background: 'rgba(255,255,255,0.07)' }}
                    >
                      {featureIcon(f.icon)}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* CHALLENGES OVERCOME */}
            <div>
              <p className="text-[10px] font-black tracking-[0.18em] uppercase mb-3" style={{ color: '#f59e0b' }}>Challenges Overcome</p>
              <blockquote
                className="rounded-xl px-4 py-4 text-white/50 text-[11px] italic leading-relaxed"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {project.challenge}
              </blockquote>
            </div>

            {/* Footer meta */}
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

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className="min-h-screen bg-main-gradient px-6 py-10 pb-28 animate-fade-in">

      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-700/5 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="max-w-2xl mx-auto space-y-8">

        {/* Header */}
        <div className="space-y-1">
          <p className="text-accent font-mono text-xs tracking-widest uppercase">My Work</p>
          <h1 className="text-3xl font-bold text-white">Projects</h1>
          <p className="text-white/40 text-sm mt-2">
            Things I've built — from side projects to production-ready apps.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {projects.map((project, i) => {
            const isHovered = hoveredIdx === i

            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setSelectedProject(project)}
                className={`relative flex flex-col bg-navy-800/40 border rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer
                  ${isHovered ? 'border-accent/40 shadow-xl shadow-accent/10 scale-[1.01]' : 'border-white/5'}
                `}
              >
                {/* Full-card View Details overlay */}
                <div className={`absolute inset-0 z-10 flex items-center justify-center bg-black/60 backdrop-blur-sm rounded-2xl transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <button
                    className="flex items-center gap-2 px-5 py-2.5 bg-accent hover:bg-accent-dark rounded-xl text-white text-xs font-semibold shadow-lg shadow-accent/40 transition-all duration-200 active:scale-95"
                  >
                    <Eye size={13} />
                    View Details
                  </button>
                </div>

                {/* Banner */}
                <div className={`relative h-24 sm:h-28 bg-gradient-to-br ${project.banner} flex items-center justify-center overflow-hidden`}>
                  <Code2 size={36} className="text-white/10" />
                  {/* Status badge */}
                  <span className={`absolute top-2.5 right-2.5 text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-md ${project.statusColor}`}>
                    {project.status}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-3.5">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 rounded-md text-[10px] font-bold tracking-wide border ${tagColors[tag] || tagColors.default}`}
                      >
                        {tag.toUpperCase()}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-white font-bold text-sm leading-snug mb-1.5">{project.title}</h3>
                  <p className="text-white/45 text-xs leading-relaxed line-clamp-2 flex-1">{project.description}</p>

                  {/* Actions */}
                  <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-white/40 hover:text-white/80 text-xs transition-colors"
                    >
                      <Github size={12} /> Code
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1 text-accent/70 hover:text-accent text-xs transition-colors"
                      >
                        <ExternalLink size={11} /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  )
}
