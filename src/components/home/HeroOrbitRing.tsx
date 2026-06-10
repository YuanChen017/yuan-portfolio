import "./HeroOrbitRing.css";

export default function HeroOrbitRing() {
  return (
    <svg
      className="hero-orbit-svg"
      viewBox="0 0 520 540"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <filter id="orbit-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Primary teal arc — main orbit, glowing */}
      <ellipse
        cx="260" cy="270"
        rx="240" ry="255"
        stroke="rgba(0,168,178,0.55)"
        strokeWidth="1.8"
        strokeDasharray="190 810"
        pathLength={1000}
        strokeLinecap="round"
        filter="url(#orbit-glow)"
        className="orbit-1"
      />

      {/* Secondary teal arc — counter-orbit, softer */}
      <ellipse
        cx="260" cy="270"
        rx="248" ry="258"
        stroke="rgba(0,168,178,0.28)"
        strokeWidth="1.1"
        strokeDasharray="110 890"
        pathLength={1000}
        strokeLinecap="round"
        className="orbit-2"
      />

      {/* Vermillion accent arc — slower, oblique tilt */}
      <ellipse
        cx="260" cy="270"
        rx="232" ry="248"
        stroke="rgba(166,50,40,0.35)"
        strokeWidth="1.4"
        strokeDasharray="70 930"
        pathLength={1000}
        strokeLinecap="round"
        filter="url(#orbit-glow)"
        className="orbit-3"
      />

      {/* Ink-black wide arc — slowest, barely-there depth ring */}
      <ellipse
        cx="260" cy="270"
        rx="252" ry="264"
        stroke="rgba(22,16,10,0.10)"
        strokeWidth="2.2"
        strokeDasharray="260 740"
        pathLength={1000}
        strokeLinecap="round"
        className="orbit-4"
      />

      {/* Small teal sparkle dot — fast micro-orbit */}
      <ellipse
        cx="260" cy="270"
        rx="236" ry="252"
        stroke="rgba(0,168,178,0.70)"
        strokeWidth="3.5"
        strokeDasharray="8 992"
        pathLength={1000}
        strokeLinecap="round"
        filter="url(#orbit-glow)"
        className="orbit-5"
      />
    </svg>
  );
}
