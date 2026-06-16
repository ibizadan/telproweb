'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Globe2, Code2, Database, ArrowUpRight } from 'lucide-react';

const items = [
  {
    icon: Globe2,
    title: 'WordPress Websites',
    desc: 'Custom themes, blocks, and WooCommerce — built for editors, fast for visitors.',
    accent: '#5b8aff',
  },
  {
    icon: Code2,
    title: 'Next.js Applications',
    desc: 'High-performance React apps with edge deployment and headless integrations.',
    accent: '#7b5cff',
  },
  {
    icon: Database,
    title: 'Managed CRM',
    desc: 'Server operations, data migration, backups, security, and team training — handled.',
    accent: '#3ecf8e',
  },
];

/** Identical scrolling light beam used in About cards */
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
  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}

export default function WhatWeDo() {
  return (
    <section
      id="services"
      className="relative py-32 md:py-40 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #141d3a 0%, #172040 35%, #131b35 65%, #161e3a 100%)',
      }}
    >
      {/* Warm ambient radial — lifts the overall brightness */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 90% 60% at 50% 40%, rgba(91,138,255,0.13) 0%, rgba(35,75,210,0.06) 50%, transparent 70%)',
      }} />
      {/* Subtle dot-grid texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(rgba(160,185,255,0.07) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div>
            <p className="text-[12px] uppercase tracking-[0.3em] font-medium mb-5"
              style={{ color: 'rgba(150,175,255,0.6)' }}>What We Do</p>
            <h2 className="font-medium leading-[1.1] tracking-[-0.025em]"
              style={{
                fontSize: 'clamp(36px,5vw,64px)',
                background: 'linear-gradient(180deg,#ffffff 0%,#a4abc4 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
              Here&apos;s what we do best.
            </h2>
          </div>
        </motion.div>

        {/* Cards — identical design to About cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {items.map((it, i) => (
            <motion.a
              key={it.title}
              href="#contact"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl overflow-hidden group"
              style={{ minHeight: 280, textDecoration: 'none', display: 'block' }}
            >
              {/* ── Identical lighter steel base as About cards ── */}
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(145deg, #232b45 0%, #1a2238 35%, #1e2a42 65%, #242f4a 100%)',
              }} />
              {/* Fine horizontal brushed lines */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,0.018) 2px,rgba(255,255,255,0.018) 3px)',
              }} />
              {/* Top shine — accent coloured */}
              <div className="absolute top-0 left-0 right-0" style={{
                height: 1,
                background: `linear-gradient(90deg,transparent,${it.accent}88 40%,rgba(255,255,255,0.6) 55%,${it.accent}88 70%,transparent)`,
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
              {/* Scrolling light beam */}
              <CardCanvas color={it.accent} />
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: `radial-gradient(ellipse 70% 60% at 50% 100%, ${it.accent}20, transparent 70%)`,
              }} />

              {/* Content */}
              <div className="relative p-8" style={{ zIndex: 2 }}>
                <div className="flex items-start justify-between mb-10">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{
                    background: `linear-gradient(135deg,${it.accent}28,${it.accent}08)`,
                    border: `1px solid ${it.accent}33`,
                    boxShadow: `0 0 16px ${it.accent}18`,
                  }}>
                    <it.icon className="w-5 h-5" style={{ color: it.accent }} strokeWidth={1.5} />
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    style={{ color: 'rgba(164,171,196,0.35)' }}
                  />
                </div>
                <h3 className="font-display text-[15px] uppercase tracking-wider mb-3 text-white">{it.title}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: 'rgba(180,200,230,0.78)' }}>{it.desc}</p>

                {/* Bottom accent line — same as About cards */}
                <div className="mt-8" style={{
                  height: 1,
                  background: `linear-gradient(90deg,${it.accent},transparent)`,
                  opacity: 0.4,
                }} />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-5"
        >
          <p className="text-lg" style={{ color: 'rgba(180,200,235,0.7)' }}>
            Have a bold idea? Let&apos;s make it real.
          </p>
          <a href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold"
            style={{
              fontSize: 14,
              background: 'linear-gradient(135deg, #ff7a2d 0%, #f04e10 100%)',
              boxShadow: '0 12px 40px rgba(255, 100, 30, 0.35)',
            }}
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
