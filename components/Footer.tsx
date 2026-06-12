'use client';
import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-10 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 aurora opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr] gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-700 rounded-[10px] flex items-center justify-center font-display text-[20px] text-white">T</div>
              <span className="font-display text-[14px] tracking-wider uppercase">Telpromarketing</span>
            </div>
            <p className="text-sm text-ink-200 leading-relaxed mb-6 max-w-sm">
              Web development, SEO, and managed CRM operations for ambitious teams. Engineered in San Diego, California.
            </p>
            <div className="space-y-1 text-sm text-ink-300">
              <p>8690 Aero Dr Ste 115 #4181</p>
              <p>San Diego, CA 92123</p>
              <p className="pt-3"><a href="tel:+18584809719" className="hover:text-white transition">(858) 480-9719</a></p>
              <p><a href="mailto:hola@telpromarketing.com" className="hover:text-white transition">hola@telpromarketing.com</a></p>
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink-400 font-medium mb-4">Services</div>
            <ul className="space-y-2.5">
              {['WordPress', 'Next.js', 'SEO', 'Managed CRM'].map(s => (
                <li key={s}><a href="#services" className="text-sm text-ink-200 hover:text-white transition">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink-400 font-medium mb-4">Company</div>
            <ul className="space-y-2.5">
              {[['About', '#about'], ['Contact', '#contact'], ['Privacy', '#'], ['Terms', '#']].map(([l, h]) => (
                <li key={l}><a href={h} className="text-sm text-ink-200 hover:text-white transition">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Giant wordmark */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="overflow-hidden border-t border-white/5 pt-8 mb-8"
        >
          <h2 className="font-display uppercase text-center tracking-wider text-transparent leading-none whitespace-nowrap"
            style={{
              fontSize: 'clamp(40px, 16vw, 220px)',
              WebkitTextStroke: '1px rgba(255,255,255,0.15)',
              letterSpacing: '0.02em',
            }}
          >
            Telpromarketing
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-white/5">
          <p className="text-xs text-ink-400">© {year} Telpromarketing. All rights reserved.</p>
          <p className="text-xs text-ink-400">Designed & engineered in San Diego, California.</p>
        </div>
      </div>
    </footer>
  );
}
