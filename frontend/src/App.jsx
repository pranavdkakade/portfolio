import { useState, useEffect } from 'react'   // fro load page Pranav kakade
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import CursorEffect from './components/CursorEffect'
import Footer from './components/Footer'
import Home from './pages/Home'
import Info from './pages/Info'
import Projects from './pages/Projects'
import ByChatInfo from './pages/ByChatInfo'


function IntroSplash({ onDone }) {
  const [phase, setPhase] = useState('enter')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'),  1200)
    const t2 = setTimeout(() => setPhase('leave'), 3500)
    const t3 = setTimeout(onDone, 5000)
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [])

  const leaving = phase === 'leave'

  return (
    <div
      className="fixed inset-0 z-[9999] pointer-events-none select-none overflow-hidden"
      style={{
        background: '#020B18',
        opacity: leaving ? 0 : 1,
        transition: leaving ? 'opacity 1.2s ease 0.2s' : 'none',
      }}
    >
      <style>{`
        @keyframes slideTopLeft {
          0%   { transform: translate(0, 0); }
          100% { transform: translate(-110%, -110%); }
        }
        @keyframes slideBottomRight {
          0%   { transform: translate(0, 0); }
          100% { transform: translate(110%, 110%); }
        }
        @keyframes charLeft {
          0%   { opacity: 0; transform: translateX(-36px); }
          60%  { transform: translateX(5px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes charRight {
          0%   { opacity: 0; transform: translateX(36px); }
          60%  { transform: translateX(-5px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInSub {
          0%   { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .splash-tl  { animation: slideTopLeft     1.3s cubic-bezier(0.76,0,0.24,1) forwards; }
        .splash-br  { animation: slideBottomRight 1.3s cubic-bezier(0.76,0,0.24,1) forwards; }
        .char-left  { animation: charLeft  0.85s cubic-bezier(0.34,1.4,0.64,1) both; }
        .char-right { animation: charRight 0.85s cubic-bezier(0.34,1.4,0.64,1) both; }
        .sub-fade   { animation: fadeInSub 1s ease-out both; }
      `}</style>

      {/* LEFT PANEL — upper-left triangle, shows name */}
      <div
        className={leaving ? 'splash-tl' : ''}
        style={{
          position: 'absolute', inset: 0,
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
          background: 'linear-gradient(135deg, #0A1E35 0%, #071526 60%, #020B18 100%)',
        }}
      >
        {/* Subtle blue glow */}
        <div style={{
          position: 'absolute', top: '15%', left: '15%',
          width: '40vw', height: '40vh',
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.12) 0%, transparent 70%)',
        }} />

        {/* PRANAV KAKADE — positioned in upper-left area */}
        <div style={{
          position: 'absolute', top: '28%', left: '8%',
          display: 'flex', flexDirection: 'column', gap: '0.05em',
        }}>
          {/* PRANAV */}
          <div style={{ display: 'flex' }}>
            {'PRANAV'.split('').map((char, i) => (
              <span key={i} className="char-left" style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(2.8rem, 8vw, 7rem)',
                color: '#ffffff',
                letterSpacing: '-0.01em',
                lineHeight: 1,
                animationDelay: `${i * 55}ms`,
                display: 'inline-block',
              }}>{char}</span>
            ))}
          </div>
          {/* KAKADE */}
          <div style={{ display: 'flex' }}>
            {'KAKADE'.split('').map((char, i) => (
              <span key={i} className="char-left" style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(2.8rem, 8vw, 7rem)',
                background: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.01em',
                lineHeight: 1,
                animationDelay: `${(i + 7) * 55}ms`,
                display: 'inline-block',
              }}>{char}</span>
            ))}
          </div>
          {/* subtitle */}
          <span className="sub-fade" style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: 'clamp(0.55rem, 1.1vw, 0.85rem)',
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            marginTop: '0.6em',
            animationDelay: '720ms',
          }}>
              AI Engineer
          </span>
        </div>
      </div>

      {/* RIGHT PANEL — lower-right triangle, shows WELCOME */}
      <div
        className={leaving ? 'splash-br' : ''}
        style={{
          position: 'absolute', inset: 0,
          clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
          background: '#020B18',
          overflow: 'hidden',
        }}
      >
        {/* Background image at low opacity */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: "url('/images/fbackimg.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.12,
          pointerEvents: 'none',
        }} />

        {/* Accent glow bottom-right */}
        <div style={{
          position: 'absolute', bottom: '15%', right: '12%',
          width: '45vw', height: '45vh',
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.1) 0%, transparent 70%)',
        }} />

        {/* WELCOME — positioned in lower-right area */}
        <div style={{
          position: 'absolute', bottom: '25%', right: '7%',
          display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.3em',
        }}>
          <div style={{ display: 'flex' }}>
            {'WELCOME'.split('').map((char, i) => (
              <span key={i} className="char-right" style={{
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 5.5vw, 5rem)',
                color: 'rgba(255,255,255,0.9)',
                letterSpacing: '0.08em',
                lineHeight: 1,
                animationDelay: `${i * 50 + 200}ms`,
                display: 'inline-block',
              }}>{char}</span>
            ))}
          </div>
          {/* glowing underline */}
          <div className="sub-fade" style={{
            height: '2px', width: '100%',
            background: 'linear-gradient(90deg, transparent, #3B82F6, #60A5FA)',
            boxShadow: '0 0 10px rgba(96,165,250,0.6)',
            animationDelay: '600ms',
          }} />
          <span className="sub-fade" style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: 'clamp(0.55rem, 1vw, 0.78rem)',
            color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            animationDelay: '750ms',
          }}>
            to my portfolio
          </span>
        </div>
      </div>


    </div>
  )
}

function ChatSidebar() {
  const navigate = useNavigate()
  const location = useLocation()
  const isChat = location.pathname === '/chat'
  return (
    <button
      onClick={() => !isChat && navigate('/chat')}
      className="fixed bottom-24 right-4 z-40 flex flex-col items-center gap-3 group"
      style={{ background: 'none', border: 'none', cursor: isChat ? 'default' : 'pointer' }}
      aria-label="Open chat"
    >
      {/* vertical label */}
      <span
        className="tracking-[0.25em] font-mono font-bold text-[10px] uppercase select-none"
        style={{
          writingMode: 'vertical-rl',
          textOrientation: 'mixed',
          transform: 'rotate(180deg)',
          color: 'rgba(255,255,255,0.55)',
          transition: 'color 0.2s',
        }}
      >
        PRANAV KAKADE
      </span>
      {/* glowing vertical line */}
      <span
        className="w-px flex-shrink-0"
        style={{
          height: '120px',
          background: 'linear-gradient(to bottom, #3B82F6, transparent)',
          boxShadow: '0 0 6px #3B82F6aa',
          transition: 'opacity 0.2s',
        }}
      />
      <style>{`
        button:hover span { color: #60A5FA !important; }
      `}</style>
    </button>
  )
}

function App() {
  const [showIntro, setShowIntro] = useState(true)
  // Remove hoveredNavLabel and top label
  return (
    <BrowserRouter>
      {showIntro && <IntroSplash onDone={() => setShowIntro(false)} />}
      <CursorEffect />

      {/* All pages render here */}
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/info"     element={<Info />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/chat"     element={<ByChatInfo />} />
      </Routes>

      {/* Footer — visible on every page */}
      <Footer />

      {/* Fixed bottom-right chat sidebar */}
      <ChatSidebar />

      {/* Bottom navigation — visible on every page */}
      <BottomNav />
    </BrowserRouter>
  )
}

export default App
