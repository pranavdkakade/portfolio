import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import CursorEffect from './components/CursorEffect'
import Footer from './components/Footer'
import Home from './pages/Home'
import Info from './pages/Info'
import Projects from './pages/Projects'
import ByChatInfo from './pages/ByChatInfo'

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
  return (
    <BrowserRouter>
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
