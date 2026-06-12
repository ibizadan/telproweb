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
          poster="https://images.pexels.com/videos/6804109/pexels-photo-6804109.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/6804109/6804109-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/70 to-ink-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-950/30 to-ink-950/80" />
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
          className="text-2xl md:text-3xl font-semibold text-ink-100 mb-4 tracking-tight"
        >
          Web Development & Managed CRM
        </motion.h2>

        {/* Big headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}
          className="text-[clamp(40px,7vw,84px)] font-bold leading-[1.05] tracking-[-0.035em] mb-8 max-w-5xl mx-auto"
        >
          Smarter Websites. <br className="hidden sm:block" />Stronger Businesses.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-ink-200 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We&apos;re Telpromarketing — a web studio that blends WordPress, Next.js, SEO, and CRM operations to make your brand impossible to ignore.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center justify-center gap-3 flex-wrap"
        >
          <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-ink-950 rounded-full font-semibold text-[14px] hover:bg-ink-100 transition shadow-2xl shadow-black/40">
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#process" className="inline-flex items-center gap-2 px-7 py-3.5 glass-hi text-white rounded-full font-semibold text-[14px] hover:bg-white/10 transition">
            See Our Process
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
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
