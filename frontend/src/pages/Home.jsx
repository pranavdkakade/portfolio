import { Github, Mail, Phone } from 'lucide-react'
import { useState, useEffect } from 'react'

const profilePhoto = '/images/img.png'

const roles = [
  { text: 'AI Developer',         color: '#c084fc', shadow: '#a855f7' },
  { text: 'Backend Developer',    color: '#4ade80', shadow: '#22c55e' },
  { text: 'DevOps Engineer',      color: '#fb923c', shadow: '#f97316' },
  { text: 'Full Stack Developer', color: '#60a5fa', shadow: '#3b82f6' },
  { text: 'Python Expert',        color: '#facc15', shadow: '#eab308' },
]

const STAGGER_IN  = 55
const STAGGER_OUT = 32
const HOLD        = 1700

const WAVE_KEYFRAMES = `
  @keyframes waveIn {
    0%   { opacity: 0; transform: translateY(32px) scaleY(0.2) skewY(12deg); }
    65%  { transform: translateY(-5px) scaleY(1.08) skewY(-3deg); }
    100% { opacity: 1; transform: translateY(0) scaleY(1) skewY(0deg); }
  }
  @keyframes waveOut {
    0%   { opacity: 1; transform: translateY(0) scaleY(1) skewY(0deg); }
    100% { opacity: 0; transform: translateY(-28px) scaleY(0.2) skewY(-10deg); }
  }
`

function AnimatedRole({ text, color, shadow, onDone }) {
  const [phase, setPhase] = useState('in')
  const chars = text.split('')

  useEffect(() => {
    const t = setTimeout(() => setPhase('out'), chars.length * STAGGER_IN + 520 + HOLD)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (phase !== 'out') return
    const t = setTimeout(onDone, chars.length * STAGGER_OUT + 420)
    return () => clearTimeout(t)
  }, [phase])

  return (
    <>
      <style>{WAVE_KEYFRAMES}</style>
      <span className="flex items-end justify-center">
        {chars.map((char, i) => {
          const delay = phase === 'in'
            ? i * STAGGER_IN
            : (chars.length - 1 - i) * STAGGER_OUT
          return (
            <span
              key={i}
              className="inline-block font-mono font-bold uppercase text-sm"
              style={{
                color,
                textShadow: `0 0 22px ${shadow}dd, 0 0 50px ${shadow}55`,
                letterSpacing: '0.18em',
                animation: phase === 'in'
                  ? `waveIn 0.52s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms both`
                  : `waveOut 0.28s ease-in ${delay}ms both`,
              }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          )
        })}
      </span>
    </>
  )
}

function RoleCycler() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [cycleKey, setCycleKey] = useState(0)

  const advance = () => {
    setRoleIdx(idx => (idx + 1) % roles.length)
    setCycleKey(k => k + 1)
  }

  return (
    <div className="h-10 flex items-center justify-center overflow-visible">
      <AnimatedRole key={cycleKey} {...roles[roleIdx]} onDone={advance} />
    </div>
  )
}

export default function Home() {

  return (
    <div className="min-h-screen bg-main-gradient flex flex-col items-center justify-center relative overflow-hidden px-4">

      {/* Ambient glow layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-800/10 rounded-full blur-3xl" />
      </div>

      {/* GitHub Star Button */}
      <a
        href="https://github.com/pranavdkakade"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-5 right-5 flex items-center gap-2 bg-navy-800/80 border border-white/10 backdrop-blur-sm text-white text-xs font-mono tracking-widest px-4 py-2 rounded-full hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 group z-10"
      >
        <Github size={14} className="group-hover:text-accent transition-colors" />
        <span className="text-white/80 group-hover:text-white transition-colors">STAR ON GITHUB</span>
        <span className="bg-accent/20 text-accent px-2 py-0.5 rounded-full text-xs font-bold">1.2k</span>
      </a>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-6 animate-fade-in z-10">

        {/* Profile Photo */}
        <div className="relative">
          <div className="w-48 h-48 rounded-full ring-2 ring-accent/40 ring-offset-4 ring-offset-navy-900 overflow-hidden shadow-2xl shadow-blue-900/50">
            <img
              src={profilePhoto}
              alt="Pranav"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full ring-1 ring-accent/20 scale-110 animate-pulse-slow" />
        </div>

        {/* Name */}
        <h1 className="text-2xl font-mono font-bold tracking-[0.4em] text-accent uppercase">
          PRANAV KAKADE
        </h1>

        {/* Animated role tagline */}
        <RoleCycler />

        {/* Explore Button */}
        <button className="mt-2 px-10 py-3 border border-accent/60 text-white font-mono text-xs tracking-[0.3em] uppercase hover:bg-accent/10 hover:border-accent hover:shadow-lg hover:shadow-accent/20 active:scale-95 transition-all duration-300 rounded-sm">
          EXPLORE PORTFOLIO
        </button>

        {/* Contact Me Button */}
        <a
          href="mailto:pranvdkakade1@gmail.com"
          className="flex items-center gap-2.5 px-6 py-2.5 font-mono text-xs tracking-[0.25em] uppercase text-white/60 hover:text-white/90 transition-colors duration-300"
        >
          CONTACT ME
          <Mail size={14} className="text-white/50" />
        </a>

        {/* Contact Info */}
        <div className="flex flex-col items-center gap-2 mb-2">
          <a
            href="mailto:pranvdkakade1@gmail.com"
            className="group flex items-center gap-2 hover:opacity-100 opacity-60 transition-opacity duration-300"
          >
            <Mail size={12} className="text-accent shrink-0" />
            <span className="text-white text-[11px] font-mono tracking-wide">
              pranvdkakade1@gmail.com
            </span>
          </a>
          <a
            href="tel:+919370566569"
            className="group flex items-center gap-2 hover:opacity-100 opacity-60 transition-opacity duration-300"
          >
            <Phone size={12} className="text-accent shrink-0" />
            <span className="text-white text-[11px] font-mono tracking-wide">
              +91 93705 66569
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}
