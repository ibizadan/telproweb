'use client';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import KnotScene from './KnotScene';

export default function NotJustAnother() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-32 md:py-40"
      style={{
        background:
          'radial-gradient(ellipse 80% 65% at 0% 55%, rgba(255, 100, 30, 0.32) 0%, transparent 55%), #050505',
      }}
    >
      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.18] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center min-h-[500px]">
        {/* LEFT — rotating knot, smaller and contained */}
        <div className="relative h-[300px] md:h-[420px]">
          <div className="absolute -inset-x-8 -inset-y-8 md:-inset-x-12 md:-inset-y-12">
            <KnotScene scrollYProgress={scrollYProgress} />
          </div>
        </div>

        {/* RIGHT — copy */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8"
          >
            <span className="text-[12px] font-medium text-white tracking-tight">
              Not Just Another Agency
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(24px,3.2vw,40px)] font-medium leading-[1.18] tracking-[-0.02em] text-ink-100 mb-10 max-w-xl"
          >
            We don&apos;t do cookie-cutter websites. We build bold ideas, powered by
            modern code and human craftsmanship, that push boundaries and spark growth.
          </motion.h2>

          <motion.a
            href="#about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-white font-semibold text-[14px] transition-transform hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #ff7a2d 0%, #f04e10 100%)',
              boxShadow: '0 12px 40px rgba(255, 100, 30, 0.4)',
            }}
          >
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            Find Out More
          </motion.a>
        </div>
      </div>
    </section>
  );
}
