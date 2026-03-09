export default function Footer() {
  return (
    <footer className="w-full pb-16 pt-8 px-6 relative overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat pointer-events-none"
        style={{ backgroundImage: "url('/images/fbackimg.png')", opacity: 0.12 }}
      />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-32 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto relative">

        {/* Top accent line with gradient fade */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-10" />

        {/* Brand + tagline */}
        <div className="flex flex-col items-center gap-1 mb-8">
          <p className="text-white/20 text-[13px] text-center leading-relaxed italic whitespace-nowrap">
            "Crafting smooth interfaces &amp; micro-interactions. Shipping ideas fast,
          </p>
          <p className="text-white/20 text-[13px] text-center leading-relaxed italic">
            polishing the details slower."
          </p>
        </div>

        {/* Bottom divider + copyright */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent mb-6" />

        <div className="flex items-center justify-center gap-3 font-mono tracking-widest">
          <span className="text-white/25 text-lm align-middle">©</span><span className="text-white/25 text-xs"> 2026</span>
          {/* <span className="w-0.5 h-0.5 rounded-full bg-white/20" /> */}
          <span className="text-white/40 text-xs">PRANAV KAKADE</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <a
            href="https://github.com/PranavKakade"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 text-xs hover:text-accent transition-colors duration-200"
          >
            SOURCE ON GITHUB
          </a>
        </div>

      </div>
    </footer>
  )
}
