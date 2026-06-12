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
          <p className="text-xl text-ink-200 leading-relaxed">
            We are a small, senior team headquartered in San Diego, California. For 25 years
            we have been writing software, designing interfaces, and operating CRM systems
            for businesses ranging from local startups to multinational distributors.
          </p>
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
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-500 to-violet-600" />
          <div className="absolute inset-0 bg-grid opacity-30 mix-blend-overlay" />
          <div className="relative p-12 md:p-16 grid md:grid-cols-[1.5fr_1fr] gap-10 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-3">
                Ready to work with a team that actually cares?
              </h3>
              <p className="text-lg text-blue-100 max-w-md">
                Let's talk about what we can build together. We respond to every inquiry within 24 hours.
              </p>
            </div>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-ink-950 rounded-xl font-display text-[11px] uppercase tracking-wider hover:bg-ink-100 transition shadow-2xl shadow-black/20 w-fit">
              Start the conversation →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
