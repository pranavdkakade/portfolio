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
  const [hoveredIdx, setHoveredIdx] = useState(null)
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
      <div className="relative flex items-center gap-1 bg-[#07111F]/90 border border-white/[0.07] backdrop-blur-xl rounded-full px-8 py-2 shadow-2xl shadow-black/50 overflow-hidden">
        {/* Background image for the entire navbar, rounded */}
        <span
          className="absolute inset-0 w-full h-full rounded-full bg-center bg-cover bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/images/fbackimg.png')",
            opacity: 0.18,
            zIndex: 0,
          }}
        />

        {/* Removed background image overlay to prevent rectangle effect */}

        {/* Main nav links */}
        {navItems.map(({ to, icon: Icon, label }, idx) => (
          <NavLink
            key={label}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `group/nav relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-100 ${
                isActive
                  ? 'bg-accent text-white shadow-lg shadow-accent/30'
                  : 'text-white/40 hover:text-white/80 hover:bg-white/5'
              }`
            }
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* Custom tooltip above icon */}
            {hoveredIdx === idx && (
              <span
                className="pointer-events-none select-none"
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '-38px',
                  transform: 'translateX(-50%)',
                  background: '#192132',
                  color: '#fff',
                  fontSize: 15,
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 500,
                  borderRadius: 8,
                  padding: '5px 14px',
                  boxShadow: '0 4px 16px 0 rgba(25,33,50,0.18)',
                  zIndex: 30,
                  whiteSpace: 'nowrap',
                  transition: 'opacity 0.15s',
                }}
              >
                {label}
              </span>
            )}
            <Icon size={18} style={{ position: 'relative', zIndex: 1 }} />
          </NavLink>
        ))}

        {/* Divider */}
        <div className="w-px h-5 bg-white/10 mx-1 rounded-full" />

        {/* Social links */}
        {socialItems.map(({ to, icon: Icon, label }, idx) => (
          <a
            key={label}
            href={to}
            target="_blank"
            rel="noopener noreferrer"
            className="group/social relative flex items-center justify-center w-10 h-10 rounded-full text-white/40 hover:text-white/80 hover:bg-white/5 transition-all duration-200"
            onMouseEnter={() => setHoveredIdx(navItems.length + idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* Custom tooltip above icon */}
            {hoveredIdx === navItems.length + idx && (
              <span
                className="pointer-events-none select-none"
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '-38px',
                  transform: 'translateX(-50%)',
                  background: '#192132',
                  color: '#fff',
                  fontSize: 15,
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 500,
                  borderRadius: 8,
                  padding: '5px 14px',
                  boxShadow: '0 4px 16px 0 rgba(25,33,50,0.18)',
                  zIndex: 30,
                  whiteSpace: 'nowrap',
                  transition: 'opacity 0.15s',
                }}
              >
                {label}
              </span>
            )}
            <Icon size={18} style={{ position: 'relative', zIndex: 1 }} />
          </a>
        ))}

      </div>
    </nav>
  )
}

