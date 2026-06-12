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
      className="fixed top-0 left-0 right-0 z-50"
      style={{ padding: scrolled ? '10px 0' : '14px 0', transition: 'padding 0.4s' }}
    >
      <div className="mx-auto max-w-7xl px-5">
        <div
          className="flex items-center gap-6 rounded-2xl px-6 py-3"
          style={{
            background: 'linear-gradient(135deg, rgba(13,21,56,0.97) 0%, rgba(8,16,44,0.97) 40%, rgba(18,12,46,0.97) 100%)',
            backdropFilter: 'blur(24px) saturate(200%)',
            WebkitBackdropFilter: 'blur(24px) saturate(200%)',
            border: '1px solid rgba(91,138,255,0.18)',
            boxShadow: '0 0 0 1px rgba(91,138,255,0.08), 0 8px 32px rgba(0,0,0,0.5), 0 0 60px rgba(61,107,240,0.18), 0 0 120px rgba(61,107,240,0.08)',
          }}
        >
          {/* ── LOGO ── */}
          <Link href="#home" className="mr-auto flex flex-col items-center leading-none group" style={{ fontFamily: 'Archivo, sans-serif' }}>
            <div className="flex items-baseline gap-0">
              <span className="font-black text-[28px] text-white" style={{ letterSpacing: '-0.02em', lineHeight: 1 }}>TEL</span>
              <span className="font-black text-[28px]" style={{ color: '#7eb8ff', letterSpacing: '-0.02em', lineHeight: 1 }}>PRO</span>
            </div>
            <span
              className="text-white/35 font-medium uppercase"
              style={{ fontSize: '9px', letterSpacing: '0.48em', marginTop: '2px', lineHeight: 1, marginLeft: '0.48em' }}
            >
              Marketing
            </span>
          </Link>

          {/* ── DESKTOP MENU ── */}
          <ul className="hidden lg:flex items-center gap-0 mx-auto">
            <li>
              <a href="#home" className="px-4 py-2 text-[15px] font-medium hover:text-white transition-colors"
                style={{ color: 'rgba(200,210,240,0.85)' }}>Home</a>
            </li>
            <li className="relative" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
              <button className="flex items-center gap-1 px-4 py-2 text-[15px] font-medium hover:text-white transition-colors"
                style={{ color: 'rgba(200,210,240,0.85)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${drop ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {drop && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[300px] rounded-2xl p-2 shadow-2xl"
                    style={{ background: 'rgba(10,18,48,0.97)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)' }}
                  >
                    {services.map(s => (
                      <a key={s.label} href={s.href} onClick={() => setDrop(false)}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition group">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center text-brand-400 font-mono"
                          style={{ background: 'rgba(91,138,255,0.12)', border: '1px solid rgba(91,138,255,0.2)' }}>{s.icon}</div>
                        <div>
                          <div className="text-[14px] font-semibold text-white">{s.label}</div>
                          <div className="text-[11px]" style={{ color: 'rgba(160,175,210,0.7)' }}>{s.desc}</div>
                        </div>
                      </a>
                    ))}
                    <div className="border-t mt-2 pt-3 px-3 pb-2 flex items-center justify-between" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                      <span className="text-[11px]" style={{ color: 'rgba(160,175,210,0.6)' }}>Every project starts with a conversation</span>
                      <a href="#contact" onClick={() => setDrop(false)} className="text-[11px] font-semibold text-brand-400 inline-flex items-center gap-1">
                        Get in Touch <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            <li>
              <a href="#process" className="px-4 py-2 text-[15px] font-medium hover:text-white transition-colors"
                style={{ color: 'rgba(200,210,240,0.85)' }}>Process</a>
            </li>
            <li>
              <a href="#about" className="px-4 py-2 text-[15px] font-medium hover:text-white transition-colors"
                style={{ color: 'rgba(200,210,240,0.85)' }}>About</a>
            </li>
            <li>
              <a href="#contact" className="px-4 py-2 text-[15px] font-medium hover:text-white transition-colors"
                style={{ color: 'rgba(200,210,240,0.85)' }}>Contact</a>
            </li>
          </ul>

          {/* ── GET STARTED ── */}
          <a href="#contact"
            className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-semibold text-[14px] transition-transform hover:scale-[1.03] shadow-lg"
            style={{ background: '#fff', color: '#07112e' }}>
            Get Started
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* ── MOBILE BURGER ── */}
          <button onClick={() => setMobile(!mobile)} className="lg:hidden ml-auto p-2 text-white">
            {mobile ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-5 mt-2 rounded-2xl p-3 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(13,21,56,0.98) 0%, rgba(8,16,44,0.98) 40%, rgba(18,12,46,0.98) 100%)',
              backdropFilter: 'blur(24px)',
              border: '1px solid rgba(91,138,255,0.15)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 0 40px rgba(61,107,240,0.15)',
            }}
          >
            <a href="#home" className="block px-3 py-2.5 text-[15px] text-white/80 rounded-lg hover:bg-white/5" onClick={() => setMobile(false)}>Home</a>
            <button onClick={() => setMobileServices(!mobileServices)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-[15px] text-white/80 rounded-lg hover:bg-white/5"
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}>
              Services
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServices ? 'rotate-180' : ''}`} />
            </button>
            {mobileServices && (
              <div className="ml-3 mt-1 border-l-2 border-white/10 pl-3 space-y-1">
                {services.map(s => (
                  <a key={s.label} href={s.href} className="block px-3 py-2 text-[14px] text-white/60 rounded-lg hover:bg-white/5" onClick={() => setMobile(false)}>{s.label}</a>
                ))}
              </div>
            )}
            <a href="#process" className="block px-3 py-2.5 text-[15px] text-white/80 rounded-lg hover:bg-white/5" onClick={() => setMobile(false)}>Process</a>
            <a href="#about" className="block px-3 py-2.5 text-[15px] text-white/80 rounded-lg hover:bg-white/5" onClick={() => setMobile(false)}>About</a>
            <a href="#contact" className="block px-3 py-2.5 text-[15px] text-white/80 rounded-lg hover:bg-white/5" onClick={() => setMobile(false)}>Contact</a>
            <a href="#contact" className="block mt-2 px-4 py-3 bg-white text-[#07112e] rounded-xl text-center font-semibold text-[15px]" onClick={() => setMobile(false)}>Get Started</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
