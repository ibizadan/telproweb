'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';

const services = [
  { label: 'WordPress', desc: 'Custom themes & WooCommerce', icon: '◯' },
  { label: 'Next.js', desc: 'High-performance web apps', icon: '◢' },
  { label: 'SEO', desc: 'Organic growth engineering', icon: '◐' },
  { label: 'CRM', desc: 'Managed customer operations', icon: '◇' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drop, setDrop] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className={`flex items-center gap-2 rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled ? 'glass-hi shadow-2xl' : 'bg-transparent'
        }`}>
          <a href="#home" className="flex items-center gap-2.5 mr-auto group">
            <div className="relative">
              <div className="absolute inset-0 bg-brand-500/40 blur-md group-hover:blur-lg transition-all" />
              <div className="relative w-9 h-9 bg-gradient-to-br from-brand-500 to-brand-700 rounded-[10px] flex items-center justify-center font-display text-[18px] text-white">T</div>
            </div>
            <span className="font-display text-[13px] tracking-wider uppercase">Telpromarketing</span>
          </a>

          <ul className="hidden md:flex items-center gap-1 mr-2">
            <li><a href="#home" className="px-3 py-2 text-[13px] text-ink-200 hover:text-white rounded-lg transition">Home</a></li>
            <li
              className="relative"
              onMouseEnter={() => setDrop(true)}
              onMouseLeave={() => setDrop(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-[13px] text-ink-200 hover:text-white rounded-lg transition">
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${drop ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {drop && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full left-0 mt-2 w-72 glass-hi rounded-2xl p-2"
                  >
                    {services.map(s => (
                      <a
                        key={s.label}
                        href={s.label === 'CRM' ? '#crm' : '#services'}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500/20 to-brand-700/10 border border-white/5 flex items-center justify-center text-brand-400 font-mono group-hover:border-brand-400/40 transition">{s.icon}</div>
                        <div>
                          <div className="text-[13px] font-medium text-white">{s.label}</div>
                          <div className="text-[11px] text-ink-400">{s.desc}</div>
                        </div>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            <li><a href="#about" className="px-3 py-2 text-[13px] text-ink-200 hover:text-white rounded-lg transition">About</a></li>
            <li><a href="#contact" className="px-3 py-2 text-[13px] text-ink-200 hover:text-white rounded-lg transition">Contact</a></li>
          </ul>

          <a href="#contact" className="hidden md:flex items-center gap-1.5 px-5 py-2 bg-white text-ink-950 rounded-lg font-display text-[10px] uppercase tracking-wider hover:bg-ink-100 transition shadow-lg shadow-white/10">
            Get a Quote
          </a>

          <button onClick={() => setMobile(!mobile)} className="md:hidden p-2 text-white">
            {mobile ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-6 mt-2 glass-hi rounded-2xl p-3"
          >
            <a href="#home" className="block px-3 py-2 text-sm text-ink-200" onClick={() => setMobile(false)}>Home</a>
            {services.map(s => (
              <a key={s.label} href={s.label === 'CRM' ? '#crm' : '#services'} className="block px-3 py-2 text-sm text-ink-200" onClick={() => setMobile(false)}>{s.label}</a>
            ))}
            <a href="#about" className="block px-3 py-2 text-sm text-ink-200" onClick={() => setMobile(false)}>About</a>
            <a href="#contact" className="block px-3 py-2 text-sm text-ink-200" onClick={() => setMobile(false)}>Contact</a>
            <a href="#contact" className="block mt-2 px-3 py-3 bg-white text-ink-950 rounded-xl text-center font-display text-[10px] uppercase tracking-wider" onClick={() => setMobile(false)}>Get a Quote</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
