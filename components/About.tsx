'use client';
import { motion } from 'framer-motion';
import { Cpu, Trophy, Sparkle } from 'lucide-react';

const values = [
  { icon: Cpu, title: 'We love technology', desc: 'Technology is at the heart of everything we do. We stay ahead of the curve so our clients always get cutting-edge solutions that actually perform.' },
  { icon: Trophy, title: '25+ years of experience', desc: 'Since the early days of the web, we have been building websites and custom web development applications for businesses of every size.' },
  { icon: Sparkle, title: 'Best-in-class. Fairly priced.', desc: 'No bloated agency fees. Just honest, transparent pricing for premium technology solutions that compound in value over time.' },
];

export default function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 aurora opacity-50" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-brand-400 font-medium mb-4">◯ About us</p>
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
              className="glass rounded-2xl p-7 hover:bg-white/[0.04] transition group"
            >
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-700/5 border border-white/10 flex items-center justify-center mb-5 group-hover:border-brand-400/40 transition">
                <v.icon className="w-5 h-5 text-brand-400" />
              </div>
              <h3 className="font-display text-[15px] uppercase tracking-wider mb-3 text-white">{v.title}</h3>
              <p className="text-[14px] text-ink-200 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
          style={{ minHeight: 280 }}
        >
          {/* Nav-matching diagonal gradient */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, rgba(10,20,68,0.98) 0%, rgba(22,52,160,0.96) 30%, rgba(35,75,210,0.95) 55%, rgba(18,36,100,0.97) 78%, rgba(8,14,52,0.98) 100%)',
          }} />

          {/* Cell phone silhouette — opacity SVG background */}
          <div className="absolute inset-0 flex items-center justify-end pr-12 pointer-events-none select-none">
            <svg viewBox="0 0 200 360" xmlns="http://www.w3.org/2000/svg"
              style={{ width: 220, height: 'auto', opacity: 0.07 }}>
              <rect x="10" y="8" width="180" height="344" rx="28" ry="28"
                fill="none" stroke="white" strokeWidth="12"/>
              <rect x="30" y="8" width="140" height="8" rx="4"
                fill="white"/>
              <rect x="80" y="14" width="40" height="6" rx="3"
                fill="white"/>
              <circle cx="100" cy="330" r="14"
                fill="none" stroke="white" strokeWidth="8"/>
              <rect x="22" y="30" width="156" height="280" rx="4"
                fill="white"/>
            </svg>
          </div>

          {/* Laser border conic glow on the banner */}
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(91,138,255,0.2), transparent 65%)',
          }} />

          {/* Grid overlay */}
          <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay" />

          {/* Content */}
          <div className="relative p-12 md:p-16 grid md:grid-cols-[1.5fr_1fr] gap-10 items-center">
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-white rounded-xl font-semibold text-[14px] hover:bg-ink-100 transition shadow-2xl"
                style={{ color: '#07112e', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}
              >
                Start the conversation →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
