'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Warm orange wash from bottom-left, like the reference */}
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{
            background:
              'radial-gradient(ellipse 70% 80% at 15% 85%, rgba(255, 110, 40, 0.55) 0%, transparent 55%)',
          }}
        />
        {/* Cool teal counter-light from top-right */}
        <div
          className="absolute inset-0 mix-blend-soft-light"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 85% 15%, rgba(80, 180, 160, 0.4) 0%, transparent 55%)',
          }}
        />
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/55 via-ink-950/65 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/75 via-ink-950/25 to-ink-950/75" />
      </div>

      {/* Ambient glow accents */}
      <div className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(circle, rgba(91,138,255,0.18), transparent 70%)' }}
      />
      <div className="absolute bottom-20 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none z-[1]"
        style={{ background: 'radial-gradient(circle, rgba(181,138,255,0.12), transparent 70%)' }}
      />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-hi mb-6"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-400 rounded-full blur-md" />
            <div className="relative w-1.5 h-1.5 bg-emerald-400 rounded-full" />
          </div>
          <span className="text-[11px] font-semibold text-white tracking-[0.18em] uppercase">Next-Gen Web & CRM Agency</span>
        </motion.div>

        {/* Small intro */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium mb-5 tracking-tight"
          style={{ color: 'rgba(200,215,245,0.75)', fontFamily: 'Manrope, sans-serif' }}
        >
          Web Development & Managed CRM
        </motion.h2>

        {/* Big headline — slightly smaller clamp */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}
          className="text-[clamp(28px,4.5vw,60px)] font-bold tracking-tight leading-[1.08] mb-8 max-w-4xl mx-auto"
        >
          <span className="text-gradient block">Websites built to grow your business.</span>
          <span className="font-serif-italic text-brand-400">Built for the modern web.</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center"
        >
          <a href="#contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-[#07112e] rounded-full font-semibold text-[15px] hover:bg-ink-100 transition shadow-2xl shadow-black/40">
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-14 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <div className="text-[10px] uppercase tracking-[0.3em] text-ink-300">Scroll</div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>

    </section>
  );
}
