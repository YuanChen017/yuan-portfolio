import { useEffect, useRef } from "react";

/* ─────────────────────────────────────────────
   Ink Flow Canvas
   Fixed full-viewport canvas behind all content.
   Draws continuously flowing ink streams that
   match the teal / black / vermillion palette
   of the Chinese ink paintings used as assets.
──────────────────────────────────────────────── */

interface Pt { x: number; y: number }

interface Stream {
  pts: Pt[];
  alpha: number;
  targetAlpha: number;
  w: number;         // stroke width
  spd: number;       // x pixels per frame
  r: number; g: number; b: number;
  phase: number;
  amp: number;       // wave amplitude
  dir: 1 | -1;       // left→right or right→left
  cx: number;        // current head x
  baseY: number;
  life: number;
  maxLife: number;
  freq: number;      // sine frequency
}

function spawn(W: number, H: number): Stream {
  const roll = Math.random();
  let r: number, g: number, b: number, ta: number, w: number, spd: number;

  if (roll < 0.52) {
    // Teal — dominant accent from the paintings
    [r, g, b] = [0, 168, 178];
    ta  = Math.random() * 0.30 + 0.10;
    w   = Math.random() * 2.2 + 0.6;
    spd = Math.random() * 1.4 + 0.7;
  } else if (roll < 0.82) {
    // Ink black — heavy brush strokes
    [r, g, b] = [22, 16, 10];
    ta  = Math.random() * 0.16 + 0.05;
    w   = Math.random() * 4.0 + 1.2;
    spd = Math.random() * 0.9 + 0.35;
  } else {
    // Vermillion — seal red accent
    [r, g, b] = [166, 50, 40];
    ta  = Math.random() * 0.20 + 0.07;
    w   = Math.random() * 1.6 + 0.4;
    spd = Math.random() * 1.8 + 0.9;
  }

  const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;

  return {
    pts: [],
    alpha: 0,
    targetAlpha: ta,
    w,
    spd,
    r, g, b,
    phase: Math.random() * Math.PI * 2,
    amp:   Math.random() * 115 + 30,
    dir,
    cx:    dir === 1 ? -90 : W + 90,
    baseY: Math.random() * H,
    life:  0,
    maxLife: Math.random() * 400 + 220,
    freq:  Math.random() * 0.0085 + 0.0035,
  };
}

/** Pre-advance a stream so it appears mid-flow on first render */
function advance(s: Stream, steps: number) {
  const TRAIL = 110;
  for (let i = 0; i < steps; i++) {
    s.life++;
    s.cx += s.spd * s.dir;
    const y = s.baseY + Math.sin(s.life * s.freq + s.phase) * s.amp;
    s.pts.push({ x: s.cx, y });
    if (s.pts.length > TRAIL) s.pts.shift();
  }
  const p = s.life / s.maxLife;
  s.alpha = p < 0.12
    ? (p / 0.12) * s.targetAlpha
    : p > 0.82
      ? ((1 - p) / 0.18) * s.targetAlpha
      : s.targetAlpha;
}

export default function InkFlowCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    const TRAIL = 110;
    const NUM_STREAMS = 9;
    const streams: Stream[] = [];

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Spawn and pre-advance so canvas isn't empty on load
    for (let i = 0; i < NUM_STREAMS; i++) {
      const s = spawn(canvas.width, canvas.height);
      advance(s, Math.floor(Math.random() * s.maxLife * 0.65));
      streams.push(s);
    }

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let si = 0; si < streams.length; si++) {
        const s = streams[si];

        // Step
        s.life++;
        s.cx += s.spd * s.dir;
        const y = s.baseY + Math.sin(s.life * s.freq + s.phase) * s.amp;
        s.pts.push({ x: s.cx, y });
        if (s.pts.length > TRAIL) s.pts.shift();

        // Alpha lifecycle — smooth fade in → hold → fade out
        const prog = s.life / s.maxLife;
        s.alpha = prog < 0.12
          ? (prog / 0.12) * s.targetAlpha
          : prog > 0.82
            ? ((1 - prog) / 0.18) * s.targetAlpha
            : s.targetAlpha;

        const pts = s.pts;
        const n   = pts.length;
        if (n < 4) continue;

        // ── Draw trail segment by segment with gradient opacity ──
        // Each segment goes midpoint-to-midpoint, using the actual
        // point as quadratic control → perfectly smooth ribbon.
        for (let i = 1; i < n - 1; i++) {
          const frac = i / n;
          // Quadratic ease-in on alpha so tail is nearly invisible
          const segA = frac * frac * s.alpha;
          const segW = s.w * (0.12 + frac * 0.88);

          const mx0 = (pts[i - 1].x + pts[i].x) / 2;
          const my0 = (pts[i - 1].y + pts[i].y) / 2;
          const mx1 = (pts[i].x + pts[i + 1].x) / 2;
          const my1 = (pts[i].y + pts[i + 1].y) / 2;

          ctx.beginPath();
          ctx.moveTo(mx0, my0);
          ctx.quadraticCurveTo(pts[i].x, pts[i].y, mx1, my1);
          ctx.strokeStyle = `rgba(${s.r},${s.g},${s.b},${segA})`;
          ctx.lineWidth   = segW;
          ctx.lineCap     = "round";
          ctx.lineJoin    = "round";
          ctx.stroke();
        }

        // ── Glowing orb at the head of teal streams ──
        if (s.r === 0 && s.alpha > 0.08) {
          const hx = pts[n - 1].x;
          const hy = pts[n - 1].y;
          const radius = s.w * 6;
          const grd = ctx.createRadialGradient(hx, hy, 0, hx, hy, radius);
          grd.addColorStop(0,   `rgba(${s.r},${s.g},${s.b},${s.alpha})`);
          grd.addColorStop(0.4, `rgba(${s.r},${s.g},${s.b},${s.alpha * 0.35})`);
          grd.addColorStop(1,   `rgba(${s.r},${s.g},${s.b},0)`);
          ctx.beginPath();
          ctx.arc(hx, hy, radius, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }

        // ── Respawn when stream exits or expires ──
        const gone =
          (s.dir === 1  && s.cx > canvas.width  + 130) ||
          (s.dir === -1 && s.cx < -130) ||
          s.life >= s.maxLife;

        if (gone) {
          streams[si] = spawn(canvas.width, canvas.height);
        }
      }

      raf = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        /* z-index: 3 sits above page sections but below navbar (100) */
        zIndex: 3,
      }}
    />
  );
}
