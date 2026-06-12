'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

const services = [
  { label: 'WordPress', desc: 'Custom themes & WooCommerce', icon: '◯', href: '#services' },
  { label: 'Next.js', desc: 'High-performance web apps', icon: '◢', href: '#services' },
  { label: 'SEO', desc: 'Organic growth engineering', icon: '◐', href: '#services' },
  { label: 'CRM', desc: 'Managed customer operations', icon: '◇', href: '#crm' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drop, setDrop] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

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
      <div className="mx-auto max-w-7xl px-6">
        <div className={`flex items-center gap-8 rounded-2xl px-6 py-3 transition-all duration-500 ${
          scrolled ? 'glass-hi shadow-2xl' : 'bg-transparent'
        }`}>
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-0 group mr-auto" style={{ fontFamily: 'Archivo, sans-serif' }}>
            <span className="font-black text-[22px] leading-none tracking-tight text-white" style={{ letterSpacing: '-0.02em' }}>TEL</span>
            <span className="font-black text-[22px] leading-none tracking-tight" style={{ color: '#7eb8ff', letterSpacing: '-0.02em' }}>PRO</span>
            <span className="ml-2 text-[9px] font-medium tracking-[0.45em] uppercase text-white/30 self-end mb-[3px]">Marketing</span>
          </Link>

          {/* Center Menu */}
          <ul className="hidden lg:flex items-center gap-1 mx-auto">
            <li><a href="#home" className="px-3 py-2 text-[14px] font-medium text-ink-200 hover:text-white rounded-lg transition">Home</a></li>
            <li
              className="relative"
              onMouseEnter={() => setDrop(true)}
              onMouseLeave={() => setDrop(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-[14px] font-medium text-ink-200 hover:text-white rounded-lg transition">
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
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[300px] glass-hi rounded-2xl p-2 shadow-2xl"
                  >
                    {services.map(s => (
                      <a
                        key={s.label}
                        href={s.href}
                        onClick={() => setDrop(false)}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500/20 to-brand-700/10 border border-white/5 flex items-center justify-center text-brand-400 font-mono group-hover:border-brand-400/40 transition">{s.icon}</div>
                        <div className="flex-1">
                          <div className="text-[14px] font-semibold text-white">{s.label}</div>
                          <div className="text-[11px] text-ink-400">{s.desc}</div>
                        </div>
                      </a>
                    ))}
                    <div className="border-t border-white/5 mt-2 pt-3 px-3 pb-2 flex items-center justify-between">
                      <span className="text-[11px] text-ink-400">Every project starts with a conversation</span>
                      <a href="#contact" className="text-[11px] font-semibold text-brand-400 hover:text-brand-500 inline-flex items-center gap-1" onClick={() => setDrop(false)}>Get in Touch <ArrowUpRight className="w-3 h-3" /></a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            <li><a href="#process" className="px-3 py-2 text-[14px] font-medium text-ink-200 hover:text-white rounded-lg transition">Process</a></li>
            <li><a href="#about" className="px-3 py-2 text-[14px] font-medium text-ink-200 hover:text-white rounded-lg transition">About</a></li>
            <li><a href="#contact" className="px-3 py-2 text-[14px] font-medium text-ink-200 hover:text-white rounded-lg transition">Contact</a></li>
          </ul>

          {/* CTA Button */}
          <a href="#contact" className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-ink-950 rounded-full font-semibold text-[13px] hover:bg-ink-100 transition shadow-lg shadow-white/10">
            Get Started
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile burger */}
          <button onClick={() => setMobile(!mobile)} className="lg:hidden ml-auto p-2 text-white">
            {mobile ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-6 mt-2 glass-hi rounded-2xl p-3"
          >
            <a href="#home" className="block px-3 py-2 text-sm text-ink-200 rounded-lg hover:bg-white/5" onClick={() => setMobile(false)}>Home</a>
            <button
              onClick={() => setMobileServices(!mobileServices)}
              className="w-full flex items-center justify-between px-3 py-2 text-sm text-ink-200 rounded-lg hover:bg-white/5"
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileServices ? 'rotate-180' : ''}`} />
            </button>
            {mobileServices && (
              <div className="ml-3 mt-1 border-l-2 border-white/10 pl-3 space-y-1">
                {services.map(s => (
                  <a key={s.label} href={s.href} className="block px-3 py-2 text-sm text-ink-300 rounded-lg hover:bg-white/5" onClick={() => setMobile(false)}>{s.label}</a>
                ))}
              </div>
            )}
            <a href="#process" className="block px-3 py-2 text-sm text-ink-200 rounded-lg hover:bg-white/5" onClick={() => setMobile(false)}>Process</a>
            <a href="#about" className="block px-3 py-2 text-sm text-ink-200 rounded-lg hover:bg-white/5" onClick={() => setMobile(false)}>About</a>
            <a href="#contact" className="block px-3 py-2 text-sm text-ink-200 rounded-lg hover:bg-white/5" onClick={() => setMobile(false)}>Contact</a>
            <a href="#contact" className="block mt-2 px-4 py-3 bg-white text-ink-950 rounded-xl text-center font-semibold text-sm" onClick={() => setMobile(false)}>Get Started</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
