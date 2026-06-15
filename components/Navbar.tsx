'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

const services = [
  { label: 'WordPress', desc: 'Custom themes & WooCommerce', icon: '◯', href: '#services' },
  { label: 'Next.js', desc: 'High-performance web apps', icon: '◢', href: '#services' },
  { label: 'CRM', desc: 'Managed customer operations', icon: '◇', href: '#crm' },
];

export default function Navbar() {
  const [drop, setDrop] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  /* Laser animation offset — cycles 0→100 every 3s */
  const [laser, setLaser] = useState(0);
  useEffect(() => {
    let raf = 0;
    let start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const period = 3000; // 3 seconds per lap
      setLaser((elapsed % period) / period);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ padding: '12px 0' }}
    >
      <div className="mx-auto max-w-7xl px-5">
        {/* Laser border container */}
        <div className="relative rounded-2xl" style={{ padding: '1.5px' }}>

          {/* ── Laser conic glow that orbits the border ── */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
            style={{ zIndex: 0 }}
          >
            <div
              className="absolute"
              style={{
                inset: '-2px',
                borderRadius: 'inherit',
                background: `conic-gradient(
                  from ${laser * 360}deg at 50% 50%,
                  transparent 0deg,
                  rgba(120,170,255,0.9) 30deg,
                  rgba(180,220,255,1) 45deg,
                  rgba(120,170,255,0.9) 60deg,
                  transparent 90deg,
                  transparent 360deg
                )`,
                filter: 'blur(1.5px)',
              }}
            />
          </div>

          {/* ── Nav pill ── */}
          <div
            className="relative flex items-center gap-6 rounded-2xl px-6 py-3"
            style={{
              zIndex: 1,
              /* Diagonal gradient: bright electric-blue top-left → dark navy bottom-right */
              background: `linear-gradient(
                135deg,
                rgba(10,20,68,0.98)  0%,
                rgba(22,52,160,0.96) 30%,
                rgba(35,75,210,0.95) 55%,
                rgba(18,36,100,0.97) 78%,
                rgba(8,14,52,0.98)   100%
              )`,
              backdropFilter: 'blur(24px) saturate(200%)',
              WebkitBackdropFilter: 'blur(24px) saturate(200%)',
            }}
          >
            {/* ── LOGO ── */}
            <Link href="#home"
              className="flex flex-col items-center leading-none mr-auto"
              style={{ fontFamily: 'Archivo, sans-serif', textDecoration: 'none' }}
            >
              <div className="flex items-baseline">
                <span className="font-black text-white" style={{ fontSize: 28, letterSpacing: '-0.02em', lineHeight: 1 }}>TEL</span>
                <span className="font-black" style={{ fontSize: 28, color: '#7eb8ff', letterSpacing: '-0.02em', lineHeight: 1 }}>PRO</span>
              </div>
              <span style={{ fontSize: 9, fontFamily: 'Manrope, sans-serif', fontWeight: 500, color: 'rgba(255,255,255,0.38)', letterSpacing: '0.48em', textTransform: 'uppercase', marginTop: 2, marginLeft: '0.48em' }}>
                Marketing
              </span>
            </Link>

            {/* ── DESKTOP MENU ── */}
            <ul className="hidden lg:flex items-center gap-0 mx-auto" style={{ listStyle: 'none' }}>
              {/* Home */}
              <li>
                <a href="#home" style={{ padding: '8px 18px', fontSize: 15, fontWeight: 500, color: 'rgba(225,235,255,0.9)', textDecoration: 'none', display: 'block' }}
                  onMouseEnter={e => (e.currentTarget.style.color='#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color='rgba(225,235,255,0.9)')}
                >Home</a>
              </li>
              {/* Services dropdown — second */}
              <li className="relative" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
                <button
                  style={{ display:'inline-flex', alignItems:'center', gap:5, padding:'8px 18px', fontSize:15, fontWeight:500, color:'rgba(225,235,255,0.9)', background:'none', border:'none', cursor:'pointer', fontFamily:'Manrope, sans-serif' }}
                  onMouseEnter={e => (e.currentTarget.style.color='#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color='rgba(225,235,255,0.9)')}
                >
                  Services
                  <ChevronDown style={{ width:14, height:14, transition:'transform 0.2s', transform: drop ? 'rotate(180deg)' : 'none' }} />
                </button>
                <AnimatePresence>
                  {drop && (
                    <motion.div
                      initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:8 }}
                      transition={{ duration: 0.18 }}
                      style={{
                        position:'absolute', top:'calc(100% + 8px)', left:'50%', transform:'translateX(-50%)',
                        width:290,
                        /* Exact same gradient as the nav pill */
                        background:`linear-gradient(
                          135deg,
                          rgba(10,20,68,0.98)  0%,
                          rgba(22,52,160,0.96) 30%,
                          rgba(35,75,210,0.95) 55%,
                          rgba(18,36,100,0.97) 78%,
                          rgba(8,14,52,0.98)   100%
                        )`,
                        backdropFilter:'blur(24px) saturate(200%)',
                        WebkitBackdropFilter:'blur(24px) saturate(200%)',
                        border:'1px solid rgba(100,150,255,0.3)',
                        borderRadius:16, padding:6,
                        boxShadow:'0 0 0 1px rgba(80,130,255,0.1), 0 8px 32px rgba(0,0,0,0.6), 0 0 60px rgba(40,80,255,0.15)',
                        zIndex:200,
                      }}
                    >
                      {services.map(s => (
                        <a key={s.label} href={s.href} onClick={() => setDrop(false)}
                          style={{ display:'flex', alignItems:'center', gap:12, padding:'10px 12px', borderRadius:10, textDecoration:'none' }}
                          onMouseEnter={e => (e.currentTarget.style.background='rgba(255,255,255,0.07)')}
                          onMouseLeave={e => (e.currentTarget.style.background='transparent')}
                        >
                          <div style={{ width:36, height:36, borderRadius:9, background:'rgba(91,138,255,0.12)', border:'1px solid rgba(91,138,255,0.2)', display:'flex', alignItems:'center', justifyContent:'center', color:'#5b8aff', fontFamily:'monospace', flexShrink:0 }}>{s.icon}</div>
                          <div>
                            <div style={{ fontSize:14, fontWeight:600, color:'#fff' }}>{s.label}</div>
                            <div style={{ fontSize:11, color:'rgba(160,175,210,0.65)', marginTop:1 }}>{s.desc}</div>
                          </div>
                        </a>
                      ))}
                      <div style={{ borderTop:'1px solid rgba(150,180,255,0.1)', margin:'6px 0 0', padding:'10px 12px 6px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                        <span style={{ fontSize:11, color:'rgba(200,220,255,0.45)' }}>Every project starts with a conversation</span>
                        <a href="#contact" onClick={() => setDrop(false)} style={{ fontSize:11, fontWeight:600, color:'#7eb8ff', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:3 }}>
                          Contact <ArrowUpRight style={{ width:11, height:11 }} />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              {/* About + Contact after Services */}
              {[['About','#about'],['Contact','#contact']].map(([l,h]) => (
                <li key={l}>
                  <a href={h} style={{ padding: '8px 18px', fontSize: 15, fontWeight: 500, color: 'rgba(225,235,255,0.9)', textDecoration: 'none', display: 'block' }}
                    onMouseEnter={e => (e.currentTarget.style.color='#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color='rgba(225,235,255,0.9)')}
                  >{l}</a>
                </li>
              ))}
            </ul>

            {/* ── GET STARTED ── */}
            <a href="#contact"
              className="hidden lg:inline-flex items-center gap-1.5 rounded-full font-semibold transition-transform hover:scale-[1.03]"
              style={{ padding:'10px 22px', background:'#fff', color:'#07112e', fontSize:14, textDecoration:'none' }}
            >
              Get Started <ArrowUpRight style={{ width:14, height:14 }} />
            </a>

            {/* ── MOBILE BURGER ── */}
            <button onClick={() => setMobile(!mobile)} className="lg:hidden ml-auto p-2 text-white" style={{ background:'none', border:'none', cursor:'pointer' }}>
              {mobile ? <X style={{ width:20, height:20 }} /> : <Menu style={{ width:20, height:20 }} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }}
            style={{
              margin:'8px 20px 0', borderRadius:18, padding:12,
              background:'linear-gradient(135deg,rgba(10,20,68,0.98) 0%,rgba(22,52,160,0.97) 50%,rgba(8,14,52,0.98) 100%)',
              backdropFilter:'blur(24px)', border:'1px solid rgba(91,138,255,0.2)',
              boxShadow:'0 8px 32px rgba(0,0,0,0.5)',
            }}
          >
            <a href="#home" onClick={() => setMobile(false)}
                style={{ display:'block', padding:'10px 14px', fontSize:15, color:'rgba(225,235,255,0.85)', textDecoration:'none', borderRadius:10 }}
              >Home</a>
            <button onClick={() => setMobileServices(!mobileServices)}
              style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'10px 14px', fontSize:15, color:'rgba(225,235,255,0.85)', background:'none', border:'none', cursor:'pointer', fontFamily:'Manrope, sans-serif', borderRadius:10 }}
            >
              Services <ChevronDown style={{ width:14, height:14, transform: mobileServices ? 'rotate(180deg)' : 'none', transition:'transform 0.2s' }} />
            </button>
            {mobileServices && (
              <div style={{ marginLeft:12, borderLeft:'2px solid rgba(91,138,255,0.2)', paddingLeft:12 }}>
                {services.map(s => (
                  <a key={s.label} href={s.href} onClick={() => setMobile(false)}
                    style={{ display:'block', padding:'8px 12px', fontSize:14, color:'rgba(200,215,255,0.7)', textDecoration:'none' }}
                  >{s.label}</a>
                ))}
              </div>
            )}
            {[['About','#about'],['Contact','#contact']].map(([l,h]) => (
              <a key={l} href={h} onClick={() => setMobile(false)}
                style={{ display:'block', padding:'10px 14px', fontSize:15, color:'rgba(225,235,255,0.85)', textDecoration:'none', borderRadius:10 }}
              >{l}</a>
            ))}
            <a href="#contact" onClick={() => setMobile(false)}
              style={{ display:'block', marginTop:10, padding:'13px 20px', background:'#fff', color:'#07112e', borderRadius:12, textAlign:'center', fontWeight:600, fontSize:15, textDecoration:'none' }}
            >Get Started</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
