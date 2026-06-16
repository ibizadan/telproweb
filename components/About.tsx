'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Cpu, Trophy, Sparkle } from 'lucide-react';

const values = [
  { icon: Cpu, title: 'We love technology', desc: 'Technology is at the heart of everything we do. We stay ahead of the curve so our clients always get cutting-edge solutions that actually perform.' },
  { icon: Trophy, title: '25+ years of experience', desc: 'Since the early days of the web, we have been building websites and custom web development applications for businesses of every size.' },
  { icon: Sparkle, title: 'Best-in-class. Fairly priced.', desc: 'No bloated agency fees. Just honest, transparent pricing for premium technology solutions that compound in value over time.' },
];

/** Scrolling light sweep canvas — runs inside each card */
function CardCanvas({ color }: { color: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let W = 0, H = 0, x = -200, raf = 0;
    const resize = () => {
      W = canvas.offsetWidth; H = canvas.offsetHeight;
      canvas.width = W; canvas.height = H;
    };
    resize();
    window.addEventListener('resize', resize);
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      // Moving diagonal light beam
      const grad = ctx.createLinearGradient(x - 80, 0, x + 80, H);
      grad.addColorStop(0, 'rgba(255,255,255,0)');
      grad.addColorStop(0.4, `${color}22`);
      grad.addColorStop(0.5, `${color}44`);
      grad.addColorStop(0.6, `${color}22`);
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
      x += 1.2;
      if (x > W + 200) x = -200;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, [color]);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />;
}

/** Footer-matching laser CTA banner */
function CTABanner() {
  const laserRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let deg = 0, raf = 0;
    const el = laserRef.current;
    if (!el) return;
    const tick = () => {
      deg = (deg + 0.7) % 360;
      el.style.background = `conic-gradient(from ${deg}deg at 50% 50%,
        transparent 0deg, rgba(100,160,255,0.55) 22deg,
        rgba(180,220,255,0.85) 40deg, rgba(100,160,255,0.55) 58deg,
        transparent 80deg, transparent 360deg)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let W = canvas.offsetWidth, H = canvas.offsetHeight, raf = 0;
    canvas.width = W; canvas.height = H;
    const resize = () => { W = canvas.offsetWidth; H = canvas.offsetHeight; canvas.width = W; canvas.height = H; };
    window.addEventListener('resize', resize);
    const pts = Array.from({ length: 45 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.3 + 0.3, a: Math.random(),
      da: (Math.random() - 0.5) * 0.006,
      dx: (Math.random() - 0.5) * 0.25, dy: -Math.random() * 0.2 - 0.05,
      hue: 200 + Math.random() * 50,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        p.x += p.dx; p.y += p.dy; p.a += p.da;
        if (p.a <= 0 || p.a >= 1) p.da *= -1;
        if (p.y < -4) { p.y = H + 2; p.x = Math.random() * W; }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},75%,85%,${p.a * 0.65})`; ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <div className="relative rounded-3xl overflow-hidden" style={{ minHeight: 280 }}>
      {/* Same diagonal gradient as nav + footer */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, rgba(10,20,68,0.99) 0%, rgba(22,52,160,0.97) 30%, rgba(35,75,210,0.96) 55%, rgba(18,36,100,0.97) 78%, rgba(8,14,52,0.99) 100%)',
      }} />
      {/* Laser conic glow */}
      <div className="absolute overflow-hidden rounded-3xl" style={{ inset: -1, zIndex: 1 }}>
        <div ref={laserRef} className="absolute" style={{ inset: -2, filter: 'blur(2px)', opacity: 0.65 }} />
      </div>
      {/* Top shine */}
      <div className="absolute top-0 left-0 right-0" style={{ height: 1, background: 'linear-gradient(90deg,transparent 0%,rgba(150,190,255,0.7) 25%,rgba(220,240,255,0.95) 50%,rgba(150,190,255,0.7) 75%,transparent 100%)', zIndex: 2 }} />
      {/* Sparkle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 2 }} />
      {/* Radial glow */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 70% at 15% 50%, rgba(91,138,255,0.2), transparent 60%)', zIndex: 1 }} />
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay" style={{ zIndex: 1 }} />
      {/* Phone silhouette */}
      <div className="absolute inset-0 flex items-center justify-end pr-12 pointer-events-none select-none" style={{ zIndex: 1 }}>
        <svg viewBox="0 0 200 360" xmlns="http://www.w3.org/2000/svg" style={{ width: 220, height: 'auto', opacity: 0.07 }}>
          <rect x="10" y="8" width="180" height="344" rx="28" fill="none" stroke="white" strokeWidth="12"/>
          <rect x="30" y="8" width="140" height="8" rx="4" fill="white"/>
          <rect x="80" y="14" width="40" height="6" rx="3" fill="white"/>
          <circle cx="100" cy="330" r="14" fill="none" stroke="white" strokeWidth="8"/>
          <rect x="22" y="30" width="156" height="280" rx="4" fill="white"/>
        </svg>
      </div>
      {/* Content */}
      <div className="relative p-12 md:p-16 grid md:grid-cols-[1.5fr_1fr] gap-10 items-center" style={{ zIndex: 3 }}>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
            Ready to work with a team that actually cares?
          </h3>
          <p className="text-lg max-w-md leading-relaxed" style={{ color: 'rgba(180,210,255,0.8)' }}>
            Let&apos;s talk about what we can build together. We respond to every inquiry within 24 hours.
          </p>
        </div>
        <div className="flex justify-start md:justify-end">
          <a href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-xl font-semibold hover:bg-ink-100 transition shadow-2xl"
            style={{ fontSize: 14, color: '#07112e', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}
          >
            Start the conversation →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const accentColors = ['#5b8aff', '#ff7a2d', '#3ecf8e'];

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Base aurora */}
      <div className="absolute inset-0 aurora opacity-50" />

      {/* ── Orb glows — same as contact section ── */}
      <div className="absolute pointer-events-none" style={{
        top: '-10%', right: '-5%', width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(35,75,210,0.2) 0%, transparent 65%)',
        filter: 'blur(40px)',
      }} />
      <div className="absolute pointer-events-none" style={{
        bottom: '-5%', left: '-8%', width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(22,52,160,0.16) 0%, transparent 65%)',
        filter: 'blur(40px)',
      }} />

      {/* ── Circuit / network graphic — identical to contact ── */}
      <svg
        viewBox="0 0 1440 900"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.06 }}
      >
        {/* dot grid */}
        <g fill="white" opacity="0.8">
          {[80,160,240,320,400,480,560,640,720,800,880,960,1040,1120,1200,1280,1360].map(cx => (
            <circle key={cx} cx={cx} cy="80" r="1.5"/>
          ))}
          {[80,240,480,640,880,1120,1360].map(cx => (
            <circle key={cx} cx={cx} cy="200" r="1.5"/>
          ))}
          {[160,400,640,960,1200].map(cx => (
            <circle key={cx} cx={cx} cy="360" r="1.5"/>
          ))}
          {[80,320,560,800,1040,1280].map(cx => (
            <circle key={cx} cx={cx} cy="520" r="1.5"/>
          ))}
          {[160,480,720,960,1200].map(cx => (
            <circle key={cx} cx={cx} cy="680" r="1.5"/>
          ))}
        </g>
        {/* circuit lines */}
        <g stroke="white" strokeWidth="0.7" fill="none" opacity="0.9">
          <path d="M80 80 L320 80 L320 200 L480 200"/>
          <path d="M640 80 L640 200 L880 200 L880 80"/>
          <path d="M1120 80 L1120 200 L1360 200 L1360 80"/>
          <path d="M160 360 L400 360 L400 200"/>
          <path d="M960 360 L960 200 L1120 200"/>
          <path d="M640 360 L640 520 L800 520"/>
          <path d="M160 360 L160 520 L320 520"/>
          <path d="M1040 520 L1200 520 L1200 360"/>
          <path d="M320 520 L320 680 L480 680"/>
          <path d="M720 680 L720 520 L800 520"/>
          <path d="M960 680 L960 520"/>
          <path d="M1200 680 L1200 520"/>
          <path d="M480 680 L720 680"/>
          <path d="M960 680 L1200 680"/>
        </g>
        {/* nodes */}
        <g fill="white">
          <circle cx="320" cy="200" r="4"/><circle cx="640" cy="200" r="4"/>
          <circle cx="880" cy="200" r="4"/><circle cx="400" cy="360" r="4"/>
          <circle cx="640" cy="360" r="4"/><circle cx="960" cy="360" r="4"/>
          <circle cx="320" cy="520" r="4"/><circle cx="800" cy="520" r="4"/>
          <circle cx="1040" cy="520" r="4"/><circle cx="480" cy="680" r="4"/>
          <circle cx="720" cy="680" r="4"/><circle cx="960" cy="680" r="4"/>
        </g>
      </svg>

      {/* ── Dot grid overlay ── */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(rgba(120,150,255,0.07) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20 relative"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-brand-400 font-medium mb-4">◯ About us</p>

          {/* Cartoon rocket — floats to the left of the heading */}
          <div
            className="absolute pointer-events-none select-none"
            style={{ left: '-120px', top: '10px', width: 90, height: 90 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: '100%', height: '100%' }}
            >
              <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', transform: 'rotate(-35deg)' }}>
                {/* Exhaust flames */}
                <motion.ellipse cx="50" cy="105" rx="8" ry="14"
                  fill="#ff7a2d" opacity="0.9"/>
                <ellipse cx="50" cy="112" rx="5" ry="10" fill="#ffb347" opacity="0.85"/>
                <ellipse cx="50" cy="117" rx="3" ry="7" fill="#fff176" opacity="0.9"/>
                {/* Side fins */}
                <path d="M28 72 L18 92 L38 80 Z" fill="#3d6bf0"/>
                <path d="M72 72 L82 92 L62 80 Z" fill="#3d6bf0"/>
                {/* Body */}
                <rect x="35" y="30" width="30" height="52" rx="4" fill="#e8eaf0"/>
                {/* Body stripe */}
                <rect x="35" y="52" width="30" height="8" fill="#5b8aff" opacity="0.5"/>
                {/* Nose cone */}
                <path d="M35 30 Q50 2 65 30 Z" fill="#5b8aff"/>
                {/* Window */}
                <circle cx="50" cy="44" r="10" fill="#0d1a40" stroke="#7eb8ff" strokeWidth="2.5"/>
                <circle cx="46" cy="40" r="3.5" fill="#fff" opacity="0.35"/>
                {/* Body rivets */}
                <circle cx="38" cy="64" r="2" fill="#a4abc4" opacity="0.6"/>
                <circle cx="62" cy="64" r="2" fill="#a4abc4" opacity="0.6"/>
                {/* Stars around rocket */}
                <circle cx="15" cy="30" r="1.5" fill="#fff" opacity="0.7"/>
                <circle cx="88" cy="50" r="1.2" fill="#fff" opacity="0.6"/>
                <circle cx="10" cy="65" r="1" fill="#fff" opacity="0.5"/>
                <circle cx="90" cy="25" r="1.8" fill="#7eb8ff" opacity="0.8"/>
                <circle cx="20" cy="85" r="1" fill="#5b8aff" opacity="0.6"/>
                {/* Smoke trail dots */}
                <circle cx="50" cy="128" r="4" fill="rgba(164,171,196,0.25)"/>
                <circle cx="46" cy="138" r="3" fill="rgba(164,171,196,0.18)"/>
                <circle cx="52" cy="146" r="2" fill="rgba(164,171,196,0.12)"/>
              </svg>
            </motion.div>
            {/* Glow under rocket */}
            <div style={{
              position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%)',
              width: 40, height: 20,
              background: 'radial-gradient(ellipse, rgba(255,122,45,0.4), transparent 70%)',
              filter: 'blur(6px)',
            }} />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.02] mb-8">
            <span className="text-gradient">A quarter century of</span><br/>
            <span className="font-serif-italic text-brand-400">building the web.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl overflow-hidden group"
              style={{ minHeight: 240 }}
            >
              {/* Lighter steel base — more luminous than WhatWeDo cards */}
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(145deg, #232b45 0%, #1a2238 35%, #1e2a42 65%, #242f4a 100%)',
              }} />
              {/* Fine horizontal brushed lines */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.018) 2px,rgba(255,255,255,0.018) 3px)',
              }} />
              {/* Top shine */}
              <div className="absolute top-0 left-0 right-0" style={{
                height: 1,
                background: `linear-gradient(90deg,transparent,${accentColors[i]}88 40%,rgba(255,255,255,0.6) 55%,${accentColors[i]}88 70%,transparent)`,
              }} />
              {/* Left glare */}
              <div className="absolute top-0 left-0 bottom-0" style={{
                width: 1,
                background: 'linear-gradient(180deg,transparent,rgba(200,220,255,0.2) 30%,rgba(255,255,255,0.12) 60%,transparent)',
              }} />
              {/* Border */}
              <div className="absolute inset-0 rounded-2xl" style={{
                border: '1px solid rgba(200,220,255,0.12)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
              }} />
              {/* Scrolling light beam canvas */}
              <CardCanvas color={accentColors[i]} />
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: `radial-gradient(ellipse 70% 60% at 50% 100%, ${accentColors[i]}20, transparent 70%)`,
              }} />
              {/* Card content */}
              <div className="relative p-7" style={{ zIndex: 2 }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all"
                  style={{
                    background: `linear-gradient(135deg,${accentColors[i]}28,${accentColors[i]}08)`,
                    border: `1px solid ${accentColors[i]}33`,
                    boxShadow: `0 0 16px ${accentColors[i]}18`,
                  }}>
                  <v.icon className="w-5 h-5" style={{ color: accentColors[i] }} />
                </div>
                <h3 className="font-display text-[14px] uppercase tracking-wider mb-3 text-white">{v.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(180,200,230,0.78)' }}>{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <CTABanner />
        </motion.div>
      </div>
    </section>
  );
}
