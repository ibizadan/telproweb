'use client';
import { motion } from 'framer-motion';
import { Sparkles, Layers, Award, TrendingUp, ArrowUpRight } from 'lucide-react';

const reasons = [
  { icon: Sparkles, title: 'Senior Craftsmanship', desc: 'Twenty-five years of building the web. We anticipate problems before they happen.' },
  { icon: Layers, title: 'Full Stack Studio', desc: 'Design, development, SEO, and CRM operations — under one roof, with one accountable team.' },
  { icon: Award, title: 'Proven Track Record', desc: 'From local startups to multinational distributors — our work scales with your ambition.' },
  { icon: TrendingUp, title: 'Growth First', desc: 'We measure success in your traffic, conversions, and retention — not in design awards.' },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,122,45,0.08) 0%, transparent 60%)' }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-[12px] uppercase tracking-[0.3em] text-ink-400 font-medium mb-5">Why Choose Us</p>
          <h2 className="text-[clamp(36px,5vw,64px)] font-medium leading-[1.1] tracking-[-0.025em] text-ink-50">
            Why businesses trust Telpromarketing.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((r, i) => (
            <motion.a
              key={r.title}
              href="#contact"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative rounded-2xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm p-8 overflow-hidden transition-all min-h-[280px] flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-700/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-orange-400/40 transition">
                <r.icon className="w-5 h-5 text-orange-300" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium tracking-tight text-ink-50 mb-3">{r.title}</h3>
              <p className="text-ink-300 text-sm leading-relaxed flex-1">{r.desc}</p>
              <ArrowUpRight className="w-4 h-4 text-ink-500 group-hover:text-orange-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition mt-6" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
