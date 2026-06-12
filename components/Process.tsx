'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'We dig deep into your business, your customers, and your competition — building the strategic foundation for what comes next.',
    visual: 'discover',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'Pixel-perfect interfaces designed in tight collaboration with your team. Multiple iterations, transparent feedback loops.',
    visual: 'design',
  },
  {
    num: '03',
    title: 'Engineer',
    desc: 'We ship production-grade code on modern frameworks — fast, accessible, SEO-ready, and built to scale with you.',
    visual: 'engineer',
  },
  {
    num: '04',
    title: 'Operate',
    desc: 'We do not disappear after launch. Managed hosting, CRM operations, SEO retainers, and continuous improvements.',
    visual: 'operate',
  },
];

function StepVisual({ kind }: { kind: string }) {
  if (kind === 'discover') return (
    <div className="grid grid-cols-2 gap-2 p-6">
      {[...Array(8)].map((_, i) => (
        <div key={i} className="h-12 rounded-lg bg-gradient-to-r from-white/5 to-transparent border border-white/5 flex items-center px-3">
          <div className="w-2 h-2 rounded-full bg-brand-400 mr-2" />
          <div className={`h-1.5 rounded-full bg-white/20`} style={{ width: `${30 + (i * 7) % 50}%` }} />
        </div>
      ))}
    </div>
  );
  if (kind === 'design') return (
    <div className="p-6 grid grid-cols-3 gap-2 h-full">
      <div className="col-span-2 rounded-xl bg-gradient-to-br from-brand-500/20 to-violet-500/10 border border-white/10 p-3 flex flex-col gap-2">
        <div className="h-2 bg-white/30 rounded w-1/2" />
        <div className="h-2 bg-white/15 rounded w-3/4" />
        <div className="flex-1 mt-2 rounded-lg bg-white/5" />
      </div>
      <div className="space-y-2">
        <div className="h-1/3 rounded-lg bg-white/5 border border-white/5" />
        <div className="h-1/3 rounded-lg bg-brand-500/30 border border-brand-400/30" />
        <div className="h-1/3 rounded-lg bg-white/5 border border-white/5" />
      </div>
    </div>
  );
  if (kind === 'engineer') return (
    <div className="p-6 font-mono text-[11px] leading-relaxed">
      <div className="text-emerald-400">$ npm run build</div>
      <div className="text-ink-400 mt-1">Compiled successfully ✓</div>
      <div className="text-ink-400">Route                Size    First Load JS</div>
      <div className="text-white">○ /                  142 B      87.4 kB</div>
      <div className="text-white">○ /about             145 B      87.4 kB</div>
      <div className="text-white">○ /services          157 B      87.6 kB</div>
      <div className="text-brand-400 mt-2">  Lighthouse: 98 · 100 · 100 · 100</div>
      <div className="text-emerald-400 mt-1">  → Deployed to edge in 12.3s</div>
    </div>
  );
  return (
    <div className="p-6 grid grid-cols-2 gap-3">
      {['Uptime','Backups','Security','Monitoring'].map((l, i) => (
        <div key={l} className="rounded-xl bg-white/[0.03] border border-white/5 p-3">
          <div className="text-[10px] uppercase tracking-wider text-ink-400 mb-1">{l}</div>
          <div className="text-xl font-bold tabular">{['99.99%','Daily','Hardened','24/7'][i]}</div>
          <div className="mt-2 h-1 rounded-full bg-white/5 overflow-hidden">
            <div className="h-full bg-emerald-400 rounded-full" style={{ width: ['98%','100%','95%','100%'][i] }} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className="relative py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-brand-400 font-medium mb-4">
            ◇ How we work
          </p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="text-gradient">From idea to</span><br/>
            <span className="font-serif-italic text-brand-400">always-on.</span>
          </h2>
        </motion.div>

        <div className="space-y-32 md:space-y-40">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-150px' }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={i % 2 ? 'md:order-2' : ''}>
                <div className="font-display text-7xl text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.18)' }}>{step.num}</div>
                <h3 className="font-display text-4xl uppercase tracking-wider mt-4 mb-5">{step.title}</h3>
                <p className="text-xl text-ink-200 leading-relaxed max-w-md">{step.desc}</p>
              </div>
              <div className={i % 2 ? 'md:order-1' : ''}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-brand-500/20 to-violet-500/10 blur-3xl rounded-3xl" />
                  <div className="relative glass-hi rounded-2xl aspect-[5/4] overflow-hidden">
                    <StepVisual kind={step.visual} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
