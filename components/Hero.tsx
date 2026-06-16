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
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline preload="auto"
          className="w-full h-full object-cover">
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* LEFT fade — darkens only behind the text, right side stays clear */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, rgba(5,7,15,0.82) 0%, rgba(5,7,15,0.55) 42%, rgba(5,7,15,0.1) 65%, transparent 100%)',
        }} />
        {/* Subtle top/bottom vignette for polish */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(5,7,15,0.4) 0%, transparent 25%, transparent 75%, rgba(5,7,15,0.5) 100%)',
        }} />
        {/* Very subtle warm tint — reduced opacity so video reads clearly */}
        <div className="absolute inset-0 mix-blend-overlay" style={{
          background: 'radial-gradient(ellipse 50% 70% at 0% 90%, rgba(255,110,40,0.3) 0%, transparent 55%)',
        }} />
      </div>

      {/* Content — left-aligned, occupies left ~50% */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8"
      >
        <div className="max-w-lg ml-0">
          {/* Eyebrow badge */}
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

          {/* Sub heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg font-medium mb-4 tracking-tight"
            style={{ color: 'rgba(200,215,245,0.75)', fontFamily: 'Manrope, sans-serif' }}
          >
            Web Development & Managed CRM
          </motion.h2>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}
            className="text-[clamp(26px,3.8vw,52px)] font-bold tracking-tight leading-[1.1] mb-8"
          >
            <span className="text-gradient block">Websites Built for Success.</span>
            <span className="font-serif-italic" style={{ color: '#ff7a2d' }}>Built for the modern web.</span>
          </motion.h1>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          >
            <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-[#07112e] rounded-full font-semibold text-[14px] hover:bg-ink-100 transition shadow-2xl shadow-black/40">
              Start Your Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
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
