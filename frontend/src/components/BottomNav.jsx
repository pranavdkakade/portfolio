import { NavLink } from 'react-router-dom'
import { Home, User, MessageSquare, Grid3X3, Linkedin, Github } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

const navItems = [
  { to: '/',         icon: Home,          label: 'Home'     },
  { to: '/info',     icon: User,          label: 'Info'     },
  { to: '/chat',     icon: MessageSquare, label: 'Chat'     },
  { to: '/projects', icon: Grid3X3,       label: 'Projects' },
]

const socialItems = [
  { to: 'https://github.com/pranavdkakade',             icon: Github,   label: 'GitHub'   },
  { to: 'https://www.linkedin.com/in/pranavkakade121/', icon: Linkedin, label: 'LinkedIn' },
]

export default function BottomNav() {
  const [visible, setVisible] = useState(true)
  const lastY = useRef(window.scrollY)

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      setVisible(currentY < lastY.current || currentY < 50)
      lastY.current = currentY
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <div className="flex items-center gap-1 bg-[#07111F]/90 border border-white/[0.07] backdrop-blur-xl rounded-full px-2 py-2 shadow-2xl shadow-black/50">

        {/* Main nav links */}
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={label}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `group/nav relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-accent text-white shadow-lg shadow-accent/30'
                  : 'text-white/40 hover:text-white/80 hover:bg-white/5'
              }`
            }
          >
            <Icon size={18} />
            {/* Tooltip */}
            <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#07111F] border border-white/10 rounded-lg text-[11px] font-mono text-white/80 whitespace-nowrap opacity-0 group-hover/nav:opacity-100 pointer-events-none transition-opacity duration-150">
              {label}
            </span>
          </NavLink>
        ))}

        {/* Divider */}
        <div className="w-px h-5 bg-white/10 mx-1 rounded-full" />

        {/* Social links */}
        {socialItems.map(({ to, icon: Icon, label }) => (
          <a
            key={label}
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            className="group/social relative flex items-center justify-center w-10 h-10 rounded-full text-white/40 hover:text-white/80 hover:bg-white/5 transition-all duration-200"
          >
            <Icon size={18} />
            {/* Tooltip */}
            <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 bg-[#07111F] border border-white/10 rounded-lg text-[11px] font-mono text-white/80 whitespace-nowrap opacity-0 group-hover/social:opacity-100 pointer-events-none transition-opacity duration-150">
              {label}
            </span>
          </a>
        ))}

      </div>
    </nav>
  )
}

