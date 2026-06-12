'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 aurora" />
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-40" />

      {/* Ambient orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(91,138,255,0.18), transparent 70%)' }}
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 -right-32 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(181,138,255,0.14), transparent 70%)' }}
      />

      <motion.div style={{ y, opacity, scale }} className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-400 rounded-full blur-md" />
            <div className="relative w-1.5 h-1.5 bg-emerald-400 rounded-full" />
          </div>
          <span className="text-[11px] font-medium text-ink-200 tracking-wider uppercase">Now accepting Q3 2026 projects</span>
          <Sparkles className="w-3 h-3 text-brand-400" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
          className="text-[clamp(48px,9vw,128px)] font-bold leading-[0.95] tracking-tight mb-6"
        >
          <span className="block text-gradient">Build the web</span>
          <span className="block">
            <span className="font-serif-italic text-brand-400">of</span>{' '}
            <span className="text-brand-gradient">tomorrow.</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-ink-200 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We engineer high-performance websites and managed CRM operations for ambitious teams.
          <span className="text-ink-400"> Built in San Diego. Trusted worldwide.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <a href="#contact" className="group relative inline-flex items-center gap-2 px-7 py-3.5 bg-white text-ink-950 rounded-full font-display text-[11px] uppercase tracking-wider transition shadow-2xl shadow-white/10 hover:shadow-white/20">
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 opacity-0 group-hover:opacity-100 transition" />
            <span className="relative">Start Your Project</span>
            <ArrowRight className="relative w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#services" className="inline-flex items-center gap-2 px-7 py-3.5 glass text-white rounded-full font-display text-[11px] uppercase tracking-wider hover:bg-white/10 transition">
            Explore Services
          </a>
        </motion.div>
      </motion.div>

      {/* Floating product preview */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -100]) }}
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl pointer-events-none"
      >
        <div className="relative">
          <div className="absolute inset-x-20 -bottom-10 h-40 bg-brand-500/30 blur-[100px] rounded-full" />
          <div className="relative glass-hi rounded-2xl p-2 shadow-2xl">
            <div className="bg-ink-950/80 rounded-xl overflow-hidden">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                <div className="flex-1 mx-3 h-5 bg-white/[0.04] rounded text-[10px] text-ink-400 flex items-center px-3 font-mono">telpromarketing.com</div>
              </div>
              <div className="p-6 grid grid-cols-12 gap-4">
                <div className="col-span-3 space-y-2">
                  <div className="h-3 bg-white/10 rounded w-full" />
                  <div className="h-3 bg-white/5 rounded w-2/3" />
                  <div className="h-3 bg-white/5 rounded w-1/2" />
                  <div className="h-8 bg-brand-500 rounded mt-3 w-3/4" />
                </div>
                <div className="col-span-9 grid grid-cols-3 gap-3">
                  {[0,1,2].map(i => (
                    <div key={i} className="aspect-[4/3] rounded-lg bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/5" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
