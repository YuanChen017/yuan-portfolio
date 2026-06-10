import "./AboutInkRipple.css";

export default function AboutInkRipple() {
  return (
    <svg
      className="about-ripple-svg"
      viewBox="0 0 520 520"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <filter id="ripple-glow" x="-25%" y="-25%" width="150%" height="150%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Expanding ripple rings ── */}
      <circle cx="260" cy="260" r="210"
        stroke="rgba(0,168,178,0.55)" strokeWidth="1.6"
        className="ripple rp-1" filter="url(#ripple-glow)" />

      <circle cx="260" cy="260" r="210"
        stroke="rgba(0,168,178,0.42)" strokeWidth="1.2"
        className="ripple rp-2" />

      <circle cx="260" cy="260" r="210"
        stroke="rgba(0,168,178,0.35)" strokeWidth="1.0"
        className="ripple rp-3" />

      <circle cx="260" cy="260" r="210"
        stroke="rgba(166,50,40,0.38)" strokeWidth="1.4"
        className="ripple rp-4" filter="url(#ripple-glow)" />

      <circle cx="260" cy="260" r="210"
        stroke="rgba(0,168,178,0.28)" strokeWidth="0.8"
        className="ripple rp-5" />

      {/* ── Corner seal brackets ── */}
      {/* Top-left */}
      <path d="M 52 108 L 52 48 L 112 48"
        stroke="rgba(166,50,40,0.55)" strokeWidth="2.2"
        strokeLinecap="round" strokeLinejoin="round"
        className="bracket br-tl" />

      {/* Top-right */}
      <path d="M 408 48 L 468 48 L 468 108"
        stroke="rgba(166,50,40,0.55)" strokeWidth="2.2"
        strokeLinecap="round" strokeLinejoin="round"
        className="bracket br-tr" />

      {/* Bottom-left */}
      <path d="M 52 412 L 52 472 L 112 472"
        stroke="rgba(166,50,40,0.55)" strokeWidth="2.2"
        strokeLinecap="round" strokeLinejoin="round"
        className="bracket br-bl" />

      {/* Bottom-right */}
      <path d="M 408 472 L 468 472 L 468 412"
        stroke="rgba(166,50,40,0.55)" strokeWidth="2.2"
        strokeLinecap="round" strokeLinejoin="round"
        className="bracket br-br" />

      {/* ── Faint centre cross — like a seal registration mark ── */}
      <line x1="260" y1="238" x2="260" y2="282"
        stroke="rgba(166,50,40,0.20)" strokeWidth="1"
        strokeLinecap="round" className="centre-cross" />
      <line x1="238" y1="260" x2="282" y2="260"
        stroke="rgba(166,50,40,0.20)" strokeWidth="1"
        strokeLinecap="round" className="centre-cross" />
    </svg>
  );
}
