'use client';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 120, suffix: '+', label: 'Brands have trusted us with their digital presence' },
  { value: 300, suffix: '%', label: 'Average organic growth boost after our SEO programs' },
  { value: 48, suffix: 'hrs', label: 'Fastest production launch we pulled off (with zero sleep)' },
  { value: 97, suffix: '%', label: 'Clients who stayed with us after the first project' },
];

function Counter({ to, suffix, duration = 2000 }: { to: number; suffix: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * to));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      <span className="text-orange-400">{suffix}</span>
    </span>
  );
}

export default function StatsCounter() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,122,45,0.18) 0%, transparent 60%), #050505',
        }}
      />
      {/* Film grain */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative"
            >
              <p className="text-ink-200 text-lg md:text-xl leading-relaxed mb-6 max-w-md">
                {s.label}
              </p>
              <div className="text-[clamp(72px,12vw,160px)] font-medium leading-none tracking-[-0.04em] text-ink-50">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="h-px bg-gradient-to-r from-white/15 to-transparent mt-8" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
