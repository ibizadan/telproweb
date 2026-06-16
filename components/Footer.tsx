'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

const services = [
  { label: 'WordPress', href: '#services' },
  { label: 'Next.js', href: '#services' },
  { label: 'CRM', href: '#crm' },
];

const company = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const laserRef = useRef<HTMLDivElement>(null);

  /* Laser conic animation matching navbar */
  useEffect(() => {
    let deg = 0;
    let raf = 0;
    const el = laserRef.current;
    if (!el) return;
    const tick = () => {
      deg = (deg + 0.7) % 360;
      el.style.background = `conic-gradient(from ${deg}deg at 50% 50%,
        transparent 0deg,
        rgba(100,160,255,0.55) 22deg,
        rgba(180,220,255,0.85) 40deg,
        rgba(100,160,255,0.55) 58deg,
        transparent 80deg,
        transparent 360deg)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  /* Particle sparkles on canvas */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const resize = () => {
      W = canvas.offsetWidth; H = canvas.offsetHeight;
      canvas.width = W; canvas.height = H;
    };
    window.addEventListener('resize', resize);

    type Particle = { x: number; y: number; r: number; a: number; da: number; dx: number; dy: number; hue: number };
    const particles: Particle[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      a: Math.random(),
      da: (Math.random() - 0.5) * 0.006,
      dx: (Math.random() - 0.5) * 0.3,
      dy: -Math.random() * 0.25 - 0.05,
      hue: 200 + Math.random() * 40,
    }));

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.x += p.dx; p.y += p.dy; p.a += p.da;
        if (p.a <= 0 || p.a >= 1) p.da *= -1;
        if (p.y < -4) { p.y = H + 2; p.x = Math.random() * W; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 85%, ${p.a * 0.7})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <footer className="relative overflow-hidden" style={{ borderTop: '1px solid rgba(91,138,255,0.15)' }}>

      {/* ── Same diagonal gradient as navbar ── */}
      <div className="absolute inset-0" style={{
        background: `linear-gradient(
          135deg,
          rgba(10,20,68,0.99)   0%,
          rgba(22,52,160,0.97) 30%,
          rgba(35,75,210,0.96) 55%,
          rgba(18,36,100,0.97) 78%,
          rgba(8,14,52,0.99)  100%
        )`,
      }} />

      {/* ── Laser conic border glow (top edge) ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div ref={laserRef} className="absolute"
          style={{ inset: -2, filter: 'blur(2px)', opacity: 0.6 }} />
      </div>

      {/* ── Top-edge shine line ── */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{
        height: 1,
        background: 'linear-gradient(90deg, transparent 0%, rgba(150,190,255,0.7) 25%, rgba(220,240,255,0.95) 50%, rgba(150,190,255,0.7) 75%, transparent 100%)',
        zIndex: 2,
      }} />

      {/* ── Floating particle sparkles ── */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 2 }} />

      {/* ── Radial glow accent ── */}
      <div className="absolute pointer-events-none" style={{
        top: '-40%', left: '10%', width: '80%', height: '160%',
        background: 'radial-gradient(ellipse at center, rgba(91,138,255,0.14) 0%, transparent 65%)',
        zIndex: 1,
      }} />

      {/* ── Grid texture ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        zIndex: 1,
      }} />

      {/* ── Content ── */}
      <div className="relative max-w-6xl mx-auto px-6 pt-16 pb-8" style={{ zIndex: 3 }}>
        <div className="grid md:grid-cols-[1.8fr_1fr_1fr] gap-12 mb-12">

          {/* Brand column */}
          <div>
            <div className="mb-6">
              <span style={{ fontFamily: 'Archivo, sans-serif', display: 'inline-flex', flexDirection: 'column', alignItems: 'stretch' }}>
                <span style={{ display: 'inline-flex', alignItems: 'baseline', lineHeight: 1 }}>
                  <span className="font-black text-white" style={{ fontSize: 28, letterSpacing: '-0.02em' }}>TEL</span>
                  <span className="font-black" style={{ fontSize: 28, color: '#93c5fd', letterSpacing: '-0.02em' }}>PRO</span>
                </span>
                <span style={{
                  display: 'block',
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: 8,
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.38)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginTop: 3,
                  textAlign: 'justify',
                  textAlignLast: 'justify',
                  lineHeight: 1,
                }}>MARKETING</span>
              </span>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(180,200,240,0.7)', lineHeight: 1.7, marginBottom: 20, maxWidth: 300 }}>
              Web development and managed CRM operations for ambitious teams. Engineered in San Diego, California.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 13, color: 'rgba(180,200,240,0.6)' }}>
              <span>8690 Aero Dr Ste 115 #4181</span>
              <span>San Diego, CA 92123</span>
              <a href="tel:+18584809719" style={{ color: 'rgba(180,200,240,0.6)', textDecoration: 'none', marginTop: 8 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(180,200,240,0.6)')}>
                (858) 480-9719
              </a>
              <a href="mailto:info@telpromarketing.com" style={{ color: 'rgba(180,200,240,0.6)', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(180,200,240,0.6)')}>
                info@telpromarketing.com
              </a>
            </div>
          </div>

          {/* Services — same style as main menu links */}
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(150,180,255,0.5)', marginBottom: 18 }}>
              Services
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {services.map(s => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    style={{ display: 'inline-block', padding: '7px 14px', fontSize: 15, fontWeight: 500, color: 'rgba(225,235,255,0.85)', textDecoration: 'none', borderRadius: 8, transition: 'color 0.15s, background 0.15s', margin: '0 -14px' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(225,235,255,0.85)'; e.currentTarget.style.background = 'transparent'; }}
                  >{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company — same style as main menu links */}
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, color: 'rgba(150,180,255,0.5)', marginBottom: 18 }}>
              Company
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 }}>
              {company.map(c => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    style={{ display: 'inline-block', padding: '7px 14px', fontSize: 15, fontWeight: 500, color: 'rgba(225,235,255,0.85)', textDecoration: 'none', borderRadius: 8, transition: 'color 0.15s, background 0.15s', margin: '0 -14px' }}
                    onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(225,235,255,0.85)'; e.currentTarget.style.background = 'transparent'; }}
                  >{c.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.07)', textAlign: 'center' }}>
          <p style={{ fontSize: 12, color: 'rgba(150,180,255,0.4)' }}>
            © {year} Telpromarketing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
