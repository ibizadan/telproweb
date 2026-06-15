'use client';
import { motion } from 'framer-motion';
import { Globe2, Code2, Database, ArrowUpRight } from 'lucide-react';

const items = [
  {
    icon: Globe2,
    title: 'WordPress Websites',
    desc: 'Custom themes, blocks, and WooCommerce — built for editors, fast for visitors.',
    accent: 'rgba(91,138,255,0.6)',
  },
  {
    icon: Code2,
    title: 'Next.js Applications',
    desc: 'High-performance React apps with edge deployment and headless integrations.',
    accent: 'rgba(123,92,255,0.6)',
  },
  {
    icon: Database,
    title: 'Managed CRM',
    desc: 'Server operations, data migration, backups, security, and team training — handled.',
    accent: 'rgba(62,207,142,0.6)',
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative py-32 md:py-40" style={{ background: '#07080f' }}>
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-8 items-end mb-16"
        >
          <div>
            <p className="text-[12px] uppercase tracking-[0.3em] font-medium mb-5"
              style={{ color: 'rgba(164,171,196,0.5)' }}>What We Do</p>
            <h2 className="font-medium leading-[1.1] tracking-[-0.025em] text-white"
              style={{ fontSize: 'clamp(36px,5vw,64px)' }}>
              Here&apos;s what we do best.
            </h2>
          </div>
          <p className="text-lg leading-relaxed md:text-right md:max-w-md md:ml-auto"
            style={{ color: 'rgba(164,171,196,0.7)' }}>
            Web development and CRM operations in perfect sync — engineered for businesses that intend to last.
          </p>
        </motion.div>

        {/* 3-column cards on lg, stacked on mobile */}
        <div className="grid md:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.a
              key={it.title}
              href="#contact"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl overflow-hidden p-8 md:p-10 flex flex-col"
              style={{ minHeight: 320, textDecoration: 'none' }}
            >
              {/* ── STEEL / BRUSHED METAL background ── */}
              {/* Base dark steel */}
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(160deg, #1c2030 0%, #141822 40%, #0e1219 70%, #181e2c 100%)',
              }} />
              {/* Brushed horizontal lines */}
              <div className="absolute inset-0" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.012) 3px, rgba(255,255,255,0.012) 4px)',
              }} />
              {/* Top-edge shine */}
              <div className="absolute top-0 left-0 right-0 h-px" style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(200,220,255,0.35) 40%, rgba(255,255,255,0.5) 60%, rgba(200,220,255,0.35) 80%, transparent 100%)',
              }} />
              {/* Left-edge steel glare */}
              <div className="absolute top-0 left-0 bottom-0 w-px" style={{
                background: 'linear-gradient(180deg, transparent 0%, rgba(180,200,255,0.25) 30%, rgba(255,255,255,0.15) 60%, transparent 100%)',
              }} />
              {/* Moving shimmer on hover — implemented as an overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" style={{
                background: 'linear-gradient(125deg, transparent 20%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0.07) 50%, rgba(255,255,255,0.04) 60%, transparent 80%)',
              }} />
              {/* Accent color glow from bottom */}
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                background: `radial-gradient(circle, ${it.accent}, transparent 70%)`,
                filter: 'blur(20px)',
              }} />
              {/* Steel border */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{
                border: '1px solid rgba(180,200,255,0.1)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), inset 0 -1px 0 rgba(0,0,0,0.3)',
              }} />

              {/* Content */}
              <div className="relative flex items-start justify-between mb-10">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                }}>
                  <it.icon className="w-6 h-6" style={{ color: 'rgba(200,215,255,0.85)' }} strokeWidth={1.5} />
                </div>
                <ArrowUpRight className="w-5 h-5 transition-all group-hover:-translate-y-1 group-hover:translate-x-1"
                  style={{ color: 'rgba(164,171,196,0.4)' }} />
              </div>
              <h3 className="relative text-2xl md:text-3xl font-medium tracking-tight text-white mb-3">{it.title}</h3>
              <p className="relative leading-relaxed flex-1" style={{ fontSize: 15, color: 'rgba(164,171,196,0.72)' }}>{it.desc}</p>

              {/* Bottom accent line */}
              <div className="relative mt-8 h-px" style={{
                background: `linear-gradient(90deg, ${it.accent}, transparent)`,
                opacity: 0.4,
              }} />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-5"
        >
          <p className="text-lg" style={{ color: 'rgba(164,171,196,0.7)' }}>
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
