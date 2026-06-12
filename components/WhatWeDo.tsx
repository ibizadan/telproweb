'use client';
import { motion } from 'framer-motion';
import { Globe2, Code2, Search, Database, ArrowUpRight } from 'lucide-react';

const items = [
  { icon: Globe2, title: 'WordPress Websites', desc: 'Custom themes, blocks, and WooCommerce — built for editors, fast for visitors.' },
  { icon: Code2, title: 'Next.js Applications', desc: 'High-performance React apps with edge deployment and headless integrations.' },
  { icon: Search, title: 'SEO & Growth', desc: 'Technical audits, content strategy, and rankings that compound month over month.' },
  { icon: Database, title: 'Managed CRM', desc: 'Server operations, data migration, backups, security, and team training — handled.' },
];

export default function WhatWeDo() {
  return (
    <section className="relative py-32 md:py-40 bg-ink-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-8 items-end mb-16"
        >
          <div>
            <p className="text-[12px] uppercase tracking-[0.3em] text-ink-400 font-medium mb-5">What We Do</p>
            <h2 className="text-[clamp(36px,5vw,64px)] font-medium leading-[1.1] tracking-[-0.025em] text-ink-50">
              Here&apos;s what we do best.
            </h2>
          </div>
          <p className="text-ink-200 text-lg leading-relaxed md:text-right md:max-w-md md:ml-auto">
            Web, SEO, and CRM operations in perfect sync — engineered for businesses that intend to last.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <motion.a
              key={it.title}
              href="#services"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative rounded-3xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.04] backdrop-blur-sm p-10 md:p-12 overflow-hidden transition-all"
            >
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full opacity-0 group-hover:opacity-100 transition duration-700"
                style={{ background: 'radial-gradient(circle, rgba(255,122,45,0.18), transparent 65%)' }}
              />
              <div className="relative flex items-start justify-between mb-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 flex items-center justify-center">
                  <it.icon className="w-6 h-6 text-ink-100" strokeWidth={1.5} />
                </div>
                <ArrowUpRight className="w-5 h-5 text-ink-400 group-hover:text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition" />
              </div>
              <h3 className="text-3xl font-medium tracking-tight text-ink-50 mb-3">{it.title}</h3>
              <p className="text-ink-300 text-[15px] leading-relaxed max-w-md">{it.desc}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-5"
        >
          <p className="text-ink-200 text-lg">Have a bold idea? Let&apos;s make it real.</p>
          <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-[14px] shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #ff7a2d 0%, #f04e10 100%)',
              boxShadow: '0 12px 40px rgba(255, 100, 30, 0.35)',
            }}
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
