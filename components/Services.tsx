'use client';
import { motion } from 'framer-motion';
import { Globe2, Zap, Search, Database, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Globe2, accent: 'from-blue-500/20 to-blue-700/5', glow: 'shadow-blue-500/20',
    tag: 'Web Platform', title: 'WordPress',
    desc: 'Custom themes, headless setups, and WooCommerce — engineered for speed and easy editing.',
    features: ['Custom block development', 'WooCommerce stores', 'Performance audits', 'Easy CMS for teams'],
    metric: '98', metricLabel: 'PageSpeed Score',
  },
  {
    icon: Zap, accent: 'from-violet-500/20 to-violet-700/5', glow: 'shadow-violet-500/20',
    tag: 'Modern Stack', title: 'Next.js',
    desc: 'High-performance React apps with App Router, Server Components, and edge deployment.',
    features: ['App Router & RSC', 'Edge functions', 'Headless CMS integrations', 'Real-time features'],
    metric: '<1s', metricLabel: 'Time to Interactive',
  },
  {
    icon: Search, accent: 'from-amber-500/20 to-amber-700/5', glow: 'shadow-amber-500/20',
    tag: 'Growth', title: 'SEO',
    desc: 'Organic growth engineering — from technical audits to content strategy and link acquisition.',
    features: ['Keyword research', 'Technical SEO audits', 'On-page optimization', 'Monthly reporting'],
    metric: '+312%', metricLabel: 'Avg Organic Traffic',
  },
  {
    icon: Database, accent: 'from-teal-500/20 to-teal-700/5', glow: 'shadow-teal-500/20',
    tag: 'Operations', title: 'Managed CRM',
    desc: 'End-to-end CRM operations — servers, migrations, backups, security, and integrations.',
    features: ['24/7 monitoring', 'Zero-loss migrations', 'Automated backups', 'Custom integrations'],
    metric: '99.99%', metricLabel: 'Uptime SLA',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32" style={{ contain: 'paint' }}>
      <div className="absolute inset-0 bg-grid mask-fade-b opacity-20" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-brand-400 font-medium mb-4">
            ◆ What we do
          </p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="text-gradient">Four disciplines.</span><br/>
            <span className="font-serif-italic text-ink-200">One studio.</span>
          </h2>
          <p className="text-lg text-ink-200 max-w-xl">
            From your first pixel to your millionth visitor — we cover the full lifecycle of a modern web business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative"
            >
              <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${s.accent} opacity-0 group-hover:opacity-100 transition duration-500`} />
              <div className="relative glass rounded-2xl p-8 h-full overflow-hidden transition-all duration-500 group-hover:bg-white/[0.04]">
                {/* Background gradient */}
                <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full bg-gradient-to-br ${s.accent} blur-3xl opacity-50`} />

                <div className="relative flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${s.accent} border border-white/10 flex items-center justify-center`}>
                      <s.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-ink-400 font-medium">{s.tag}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-400 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition" />
                </div>

                <h3 className="relative font-display text-2xl uppercase tracking-wider mb-3">{s.title}</h3>
                <p className="relative text-ink-200 leading-relaxed mb-6 text-[15px]">{s.desc}</p>

                <div className="relative grid grid-cols-2 gap-x-3 gap-y-2 mb-6">
                  {s.features.map(f => (
                    <div key={f} className="flex items-center gap-2 text-[12px] text-ink-200">
                      <div className="w-1 h-1 rounded-full bg-brand-400" />
                      {f}
                    </div>
                  ))}
                </div>

                <div className="relative flex items-end justify-between pt-6 border-t border-white/5">
                  <div>
                    <div className="text-3xl font-bold tabular text-white">{s.metric}</div>
                    <div className="text-[11px] uppercase tracking-wider text-ink-400 mt-1">{s.metricLabel}</div>
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
