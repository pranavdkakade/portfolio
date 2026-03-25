import { useState, useRef, useEffect } from 'react'
import { Send, Sparkles, Mic, GraduationCap, Briefcase, Mail, Phone, Globe, Github, Linkedin, Twitter } from 'lucide-react'

/* ─── Structured FAQ data ─────────────────────────────────────────────── */
const FAQ = [
  {
    q: 'Who are you?',
    type: 'text',
    a: "I'm Pranav Kakade — a Full Stack Developer and B.Tech CSE student at LPU. I build web apps with Python, FastAPI, and React.",
  },
  {
    q: 'What tech stack do you use?',
    type: 'techstack',
    a: "Here's my tech stack:",
    data: {
      Frontend: ['React', 'Tailwind CSS', 'Vite'],
      Backend: ['Python', 'FastAPI', 'SQLAlchemy'],
      Database: ['PostgreSQL', 'MongoDB'],
      Tools: ['Git', 'Docker', 'Postman'],
    },
  },
  {
    q: 'Tell me about your education',
    type: 'education',
    a: "Here's my educational background:",
    data: [
      {
        school: 'Lovely Professional University',
        degree: 'B.Tech – Computer Science & Engineering',
        years: '2023 – 2027',
        color: '#22c55e',
        location: 'Punjab'
      },
      {
        school: 'Chate School',
        degree: 'Intermediate',
        years: 'March’ 21- May’22',
        color: '#f59e0b',
        location: 'Aurangabad, Maharashtra'
      },
      {
        school: 'Decent School',
        degree: 'Matriculation',
        years: 'March’ 20- May’21',
        color: '#3b82f6',
        location: 'Kota, Rajasthan'
      },
    ],
  },
  {
    q: 'Tell me about your work experience',
    type: 'experience',
    a: "Here's my professional experience:",
    data: [
      {
        title: 'Full Stack Developer Intern',
        company: 'TechFlow Solutions',
        year: '2024',
        color: '#f59e0b',
        points: ['Built real-time analytics dashboard with WebSockets.', 'Optimized API response by 25% using Redis.'],
      },
      {
        title: 'Python Developer',
        company: 'Digital Lab',
        year: '2023',
        color: '#3b82f6',
        points: ['Deployed 5+ production-ready web applications.', 'Implemented Stripe payment infrastructure.'],
      },
    ],
  },
  {
    q: "What's your best project?",
    type: 'text',
    a: "I'd say my Portfolio + FastAPI backend. It showcases routing, REST APIs, and a modern dark UI — built entirely from scratch!",
  },
  {
    q: 'Are you available for freelance?',
    type: 'text',
    a: 'Yes! I\'m open to freelance or part-time opportunities. Feel free to reach out at pranav@example.com.',
  },
  {
    q: 'How can I contact you?',
    type: 'contact',
    a: "Here's how to reach me:",
    data: {
      email: 'pranavkakade.official@gmail.com',
      phone: '+91 98765 43210',
      github: 'https://github.com/pranavdkakade',
      linkedin: 'https://linkedin.com/in/pranavdkakade',
      twitter: 'https://twitter.com/pranavdkakade',
    },
  },
  {
    q: 'What are your goals?',
    type: 'text',
    a: 'I want to become a senior full-stack engineer, contribute to open-source, and eventually build my own SaaS product.',
  },
]

/* ─── Rich card renderers ─────────────────────────────────────────────── */
function EducationCard({ data }) {
  return (
    <div className="rounded-2xl overflow-hidden w-full" style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="flex items-center gap-2.5 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <GraduationCap size={15} className="text-blue-400" />
        <span className="text-white font-bold text-sm">Education</span>
      </div>
      <div className="px-4 py-3 space-y-2.5">
        {data.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-3 py-3 rounded-xl"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div
              className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center text-[10px] font-black text-white"
              style={{ background: item.color + '22', border: `1px solid ${item.color}44` }}
            >
              <span style={{ color: item.color }}>{item.school.slice(0, 2).toUpperCase()}</span>
            </div>
            <div>
              <p className="text-white font-semibold text-[13px] leading-tight">{item.school}</p>
              <p className="text-white/40 text-[11px] mt-0.5">{item.degree} · {item.years}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ExperienceCard({ data }) {
  return (
    <div className="rounded-2xl overflow-hidden w-full" style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="flex items-center gap-2.5 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <Briefcase size={14} className="text-blue-400" />
        <span className="text-white font-bold text-sm">Professional Experience</span>
      </div>
      <div className="px-4 py-3 space-y-4">
        {data.map((job, i) => (
          <div key={i} className="flex gap-3">
            <div
              className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center text-[10px] font-black flex-col mt-0.5"
              style={{ background: job.color + '22', border: `1px solid ${job.color}44`, color: job.color }}
            >
              {job.company.slice(0, 2).toUpperCase()}
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-[13px] leading-tight">{job.title}</p>
              <p className="text-[11px] font-semibold mt-0.5 mb-2" style={{ color: '#3b82f6' }}>
                {job.company} · {job.year}
              </p>
              <ul className="space-y-1">
                {job.points.map((pt, j) => (
                  <li key={j} className="flex items-start gap-1.5 text-white/45 text-[11px] leading-relaxed">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TechStackCard({ data }) {
  const colors = {
    Frontend: '#3b82f6', Backend: '#22c55e', Database: '#f59e0b', Tools: '#a78bfa',
  }
  return (
    <div className="rounded-2xl overflow-hidden w-full" style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="flex items-center gap-2.5 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <Globe size={14} className="text-blue-400" />
        <span className="text-white font-bold text-sm">Tech Stack</span>
      </div>
      <div className="px-4 py-3 space-y-3">
        {Object.entries(data).map(([cat, tags]) => (
          <div key={cat}>
            <p className="text-[10px] font-black tracking-widest uppercase mb-1.5" style={{ color: colors[cat] || '#fff' }}>{cat}</p>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-semibold"
                  style={{ background: (colors[cat] || '#fff') + '18', color: colors[cat] || '#fff', border: `1px solid ${(colors[cat] || '#fff')}30` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ContactCard({ data }) {
  const items = [
    { icon: <Mail size={13} />,     label: data.email,    href: `mailto:${data.email}`,          color: '#3b82f6', tag: 'Email' },
    { icon: <Phone size={13} />,    label: data.phone,    href: `tel:${data.phone}`,              color: '#22c55e', tag: 'Mobile' },
    { icon: <Github size={13} />,   label: data.github,   href: `https://${data.github}`,        color: '#e2e8f0', tag: 'GitHub' },
    { icon: <Linkedin size={13} />, label: data.linkedin, href: `https://${data.linkedin}`,      color: '#0a66c2', tag: 'LinkedIn' },
    { icon: <Twitter size={13} />,  label: data.twitter,  href: `https://${data.twitter}`,       color: '#1d9bf0', tag: 'Twitter' },
  ]
  return (
    <div className="rounded-2xl overflow-hidden w-full" style={{ background: '#111827', border: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="flex items-center gap-2.5 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <Mail size={14} className="text-blue-400" />
        <span className="text-white font-bold text-sm">Contact Info</span>
      </div>
      <div className="px-4 py-3 space-y-2">
        {items.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all hover:brightness-110 active:scale-[0.98]"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)', textDecoration: 'none' }}
          >
            <span
              className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: item.color + '22', color: item.color }}
            >
              {item.icon}
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-bold tracking-wide uppercase mb-0.5" style={{ color: item.color }}>{item.tag}</p>
              <p className="text-white/60 text-[11px] truncate">{item.label}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

/* ─── Chat bubble ─────────────────────────────────────────────────────── */
function ChatBubble({ message }) {
  const isBot = message.role === 'bot'

  const renderContent = () => {
    if (!isBot || !message.type || message.type === 'text') {
      return (
        <div
          className="text-[13px] leading-relaxed whitespace-pre-line"
          style={
            isBot
              ? { color: 'rgba(255,255,255,0.72)' }
              : { color: '#fff', fontWeight: 500 }
          }
        >
          {message.text}
        </div>
      )
    }
    return (
      <div className="space-y-2 w-full">
        {message.text && (
          <p className="text-white/55 text-[12px] mb-2">{message.text}</p>
        )}
        {message.type === 'education' && <EducationCard data={message.data} />}
        {message.type === 'experience' && <ExperienceCard data={message.data} />}
        {message.type === 'techstack' && <TechStackCard data={message.data} />}
        {message.type === 'contact' && <ContactCard data={message.data} />}
      </div>
    )
  }

  return (
    <div className={`flex items-start gap-3 animate-slide-up ${isBot ? 'justify-start' : 'justify-end'}`}>
      {isBot && (
        <div className="flex-shrink-0 mt-3 w-2 h-2 rounded-full bg-accent/80 shadow-[0_0_6px_rgba(59,130,246,0.6)]" />
      )}

      <div
        className={`${isBot ? 'max-w-[88%] px-4 py-3.5 rounded-2xl rounded-tl-sm' : 'max-w-[72%] px-4 py-2.5 rounded-2xl rounded-tr-sm'}`}
        style={
          isBot
            ? { background: 'rgba(13,27,46,0.9)', border: '1px solid rgba(255,255,255,0.07)', boxShadow: '0 2px 12px rgba(0,0,0,0.3)' }
            : { background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', boxShadow: '0 4px 14px rgba(37,99,235,0.4)' }
        }
      >
        {renderContent()}
      </div>
    </div>
  )
}

/* ─── Answer finder ───────────────────────────────────────────────────── */
function findAnswer(question) {
  const q = question.toLowerCase()
  let best = null
  let bestScore = 0
  for (const faq of FAQ) {
    const keywords = faq.q
      .toLowerCase()
      .split(' ')
      .map((w) => w.replace(/[^a-z]/g, ''))
      .filter((w) => w.length > 3)
    const score = keywords.filter((word) => q.includes(word)).length
    if (score > bestScore) {
      bestScore = score
      best = faq
    }
  }
  if (best) return best
  return {
    type: 'text',
    a: "Great question! I don't have a specific answer for that right now. Please reach out directly and Pranav will get back to you soon! 😊",
  }
}

const INITIAL_MESSAGES = [
  {
    role: 'bot',
    type: 'text',
    text: "Hi! I'm Pranav's AI assistant 👋\nAsk me anything about Pranav's skills, projects, or availability. Or pick a question below!",
  },
]

/* ─── Page ────────────────────────────────────────────────────────────── */
export default function ByChatInfo() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const chatContainerRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    const el = chatContainerRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages, isTyping])

  function sendMessage(text) {
    const trimmed = text.trim()
    if (!trimmed) return

    setMessages((prev) => [...prev, { role: 'user', type: 'text', text: trimmed }])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const match = findAnswer(trimmed)
      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        { role: 'bot', type: match.type || 'text', text: match.a, data: match.data },
      ])
    }, 800 + Math.random() * 400)
  }

  function handleSubmit(e) {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="h-screen flex flex-col" style={{ background: '#060e1c' }}>

      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-700/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-0 w-60 h-60 bg-blue-900/8 rounded-full blur-3xl" />
      </div>

      {/* ── Centered wrapper (matches other pages width) ── */}
      <div className="flex flex-col flex-1 w-full max-w-2xl mx-auto min-h-0">

        {/* Page Header */}
        <div className="px-5 pt-10 pb-4 flex-shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl" style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.2)' }}>
              <Sparkles size={17} className="text-accent" />
            </div>
            <div>
              <p className="text-accent font-mono text-[10px] tracking-widest uppercase">Quick Contact</p>
              <h1 className="text-lg font-bold text-white leading-tight">Chat With Info</h1>
            </div>
            <div className="ml-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[10px] text-green-400 font-mono font-bold">Online</span>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div ref={chatContainerRef} className="flex-1 overflow-y-auto px-5 py-4 space-y-4 scrollbar-hide min-h-0">
          {messages.map((msg, i) => (
            <ChatBubble key={i} message={msg} />
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent/80 shadow-[0_0_6px_rgba(59,130,246,0.6)]" />
              <div className="px-4 py-3 rounded-2xl rounded-tl-sm" style={{ background: 'rgba(13,27,46,0.9)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-accent/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span className="text-[10px] font-black tracking-[0.15em] text-white/30 uppercase">AI Thinking</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Suggested Questions */}
        <div className="px-5 pb-3 flex-shrink-0">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {[
              FAQ[2], // education
              FAQ[3], // experience
              FAQ[0], // who are you
              FAQ[1], // tech stack
              FAQ[6], // contact
            ].map((faq, i) => (
              <button
                key={i}
                onClick={() => { setInput(faq.q); inputRef.current?.focus() }}
                className="flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs text-white/40 hover:text-white/80 transition-all font-mono whitespace-nowrap"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {faq.q}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="px-5 pb-28 flex-shrink-0">
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-4 py-2 rounded-2xl transition-all"
            style={{ background: 'rgba(13,27,46,0.9)', border: '1px solid rgba(255,255,255,0.09)', boxShadow: '0 4px 24px rgba(0,0,0,0.4)' }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about my projects or skills..."
              className="flex-1 bg-transparent text-white/75 text-[13px] placeholder-white/20 outline-none py-1.5"
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
              style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', boxShadow: '0 3px 14px rgba(37,99,235,0.6)' }}
            >
              <Send size={14} className="text-white" />
            </button>
            <button
              type="button"
              className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all hover:bg-white/10 active:scale-95"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <Mic size={13} className="text-white/50" />
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}
