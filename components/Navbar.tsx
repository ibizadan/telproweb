'use client';
import { useEffect, useState, useRef } from 'react';
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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* Floating particle sparkles — identical to footer */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W; canvas.height = H;
    const resize = () => {
      W = canvas.offsetWidth; H = canvas.offsetHeight;
      canvas.width = W; canvas.height = H;
    };
    window.addEventListener('resize', resize);
    type P = { x:number; y:number; r:number; a:number; da:number; dx:number; dy:number; hue:number };
    const pts: P[] = Array.from({ length: 55 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.4 + 0.3,
      a: Math.random(), da: (Math.random() - 0.5) * 0.006,
      dx: (Math.random() - 0.5) * 0.28, dy: -Math.random() * 0.22 - 0.05,
      hue: 200 + Math.random() * 40,
    }));
    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        p.x += p.dx; p.y += p.dy; p.a += p.da;
        if (p.a <= 0 || p.a >= 1) p.da *= -1;
        if (p.y < -4) { p.y = H + 2; p.x = Math.random() * W; }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},80%,85%,${p.a * 0.7})`; ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
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
          {/* ── Nav pill — footer-matching background ── */}
          <div
            className="relative flex items-center gap-6 rounded-2xl px-6 py-3 overflow-hidden"
            style={{
              background: `linear-gradient(
                135deg,
                rgba(10,20,68,0.99)   0%,
                rgba(22,52,160,0.97) 30%,
                rgba(35,75,210,0.96) 55%,
                rgba(18,36,100,0.97) 78%,
                rgba(8,14,52,0.99)  100%
              )`,
              backdropFilter: 'blur(24px) saturate(200%)',
              WebkitBackdropFilter: 'blur(24px) saturate(200%)',
              border: '1px solid rgba(91,138,255,0.18)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.4), 0 0 60px rgba(40,80,255,0.12)',
            }}
          >
            {/* Floating sparkle particles canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />

            {/* Top-edge shine line */}
            <div className="absolute top-0 left-0 right-0 pointer-events-none" style={{
              height: 1, zIndex: 2,
              background: 'linear-gradient(90deg, transparent 0%, rgba(150,190,255,0.7) 25%, rgba(220,240,255,0.95) 50%, rgba(150,190,255,0.7) 75%, transparent 100%)',
            }} />

            {/* Radial glow accent */}
            <div className="absolute pointer-events-none" style={{
              top: '-40%', left: '10%', width: '80%', height: '200%',
              background: 'radial-gradient(ellipse at center, rgba(91,138,255,0.14) 0%, transparent 65%)',
              zIndex: 1,
            }} />

            {/* Grid texture */}
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              zIndex: 1,
            }} />
            {/* ── LOGO ── */}
            <Link href="#home"
              className="mr-auto"
              style={{ fontFamily: 'Archivo, sans-serif', textDecoration: 'none', display: 'inline-flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 2 }}
            >
              {/* TELPRO with swish */}
              <span style={{ position: 'relative', display: 'inline-block', overflow: 'hidden', borderRadius: 4 }}>
                <span style={{
                  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                  background: 'linear-gradient(105deg, transparent 25%, rgba(255,255,255,0.15) 38%, rgba(255,255,255,0.6) 47%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.6) 53%, rgba(255,255,255,0.15) 62%, transparent 75%)',
                  animation: 'swish 3s ease-in-out infinite',
                  pointerEvents: 'none', zIndex: 2,
                }} />
                <span className="font-black" style={{ fontSize: 35, color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1, position: 'relative', zIndex: 1 }}>TELPRO</span>
              </span>
              {/* MARKETING — same width as TELPRO, centered */}
              <span style={{
                display: 'block',
                fontFamily: 'Manrope, sans-serif',
                fontSize: 8.5,
                fontWeight: 600,
                color: 'rgba(255,255,255,0.45)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                marginTop: 3,
                lineHeight: 1,
                textAlign: 'center',
                width: '100%',
              }}>Marketing</span>
              <style>{`
                @keyframes swish {
                  0%   { transform: translateX(-160%); }
                  38%  { transform: translateX(160%); }
                  100% { transform: translateX(160%); }
                }
              `}</style>
            </Link>

            {/* ── DESKTOP MENU ── */}
            <ul className="hidden lg:flex items-center gap-0 mx-auto" style={{ listStyle: 'none', position: 'relative', zIndex: 2 }}>
              {/* Home */}
              <li style={{ position: 'relative' }}>
                <a href="#home"
                  style={{ padding: '8px 18px', fontSize: 16, fontWeight: 500, color: 'rgba(225,235,255,0.9)', textDecoration: 'none', display: 'block', borderRadius: 10, transition: 'color 0.2s, background 0.2s, box-shadow 0.2s' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.background = 'rgba(100,150,255,0.12)';
                    e.currentTarget.style.boxShadow = '0 0 16px rgba(91,138,255,0.45), 0 0 32px rgba(91,138,255,0.2)';
                    e.currentTarget.style.textShadow = '0 0 12px rgba(180,210,255,0.8)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(225,235,255,0.9)';
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.textShadow = 'none';
                  }}
                >Home</a>
              </li>
              {/* Services dropdown — second */}
              <li className="relative" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
                <button
                  style={{ display:'inline-flex', alignItems:'center', gap:5, padding:'8px 18px', fontSize:16, fontWeight:500, color:'rgba(225,235,255,0.9)', background:'none', border:'none', cursor:'pointer', fontFamily:'Manrope, sans-serif', borderRadius:10, transition:'color 0.2s, background 0.2s, box-shadow 0.2s' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.background = 'rgba(100,150,255,0.12)';
                    e.currentTarget.style.boxShadow = '0 0 16px rgba(91,138,255,0.45), 0 0 32px rgba(91,138,255,0.2)';
                    e.currentTarget.style.textShadow = '0 0 12px rgba(180,210,255,0.8)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(225,235,255,0.9)';
                    e.currentTarget.style.background = 'none';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.textShadow = 'none';
                  }}
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
                  <a href={h}
                    style={{ padding: '8px 18px', fontSize: 16, fontWeight: 500, color: 'rgba(225,235,255,0.9)', textDecoration: 'none', display: 'block', borderRadius: 10, transition: 'color 0.2s, background 0.2s, box-shadow 0.2s' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.background = 'rgba(100,150,255,0.12)';
                      e.currentTarget.style.boxShadow = '0 0 16px rgba(91,138,255,0.45), 0 0 32px rgba(91,138,255,0.2)';
                      e.currentTarget.style.textShadow = '0 0 12px rgba(180,210,255,0.8)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'rgba(225,235,255,0.9)';
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.textShadow = 'none';
                    }}
                  >{l}</a>
                </li>
              ))}
            </ul>

            {/* ── GET STARTED ── */}
            <a href="#contact"
              className="hidden lg:inline-flex items-center gap-1.5 rounded-full font-semibold transition-transform hover:scale-[1.03]"
              style={{ padding:'10px 22px', background:'#fff', color:'#07112e', fontSize:14, textDecoration:'none', position: 'relative', zIndex: 2 }}
            >
              Get Started <ArrowUpRight style={{ width:14, height:14 }} />
            </a>

            {/* ── MOBILE BURGER ── */}
            <button onClick={() => setMobile(!mobile)} className="lg:hidden ml-auto p-2 text-white" style={{ background:'none', border:'none', cursor:'pointer' }}>
              {mobile ? <X style={{ width:20, height:20 }} /> : <Menu style={{ width:20, height:20 }} />}
            </button>
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
                style={{ display:'block', padding:'10px 14px', fontSize:16, color:'rgba(225,235,255,0.85)', textDecoration:'none', borderRadius:10 }}
              >Home</a>
            <button onClick={() => setMobileServices(!mobileServices)}
              style={{ width:'100%', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'10px 14px', fontSize:16, color:'rgba(225,235,255,0.85)', background:'none', border:'none', cursor:'pointer', fontFamily:'Manrope, sans-serif', borderRadius:10 }}
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
                style={{ display:'block', padding:'10px 14px', fontSize:16, color:'rgba(225,235,255,0.85)', textDecoration:'none', borderRadius:10 }}
              >{l}</a>
            ))}
            <a href="#contact" onClick={() => setMobile(false)}
              style={{ display:'block', marginTop:10, padding:'13px 20px', background:'#fff', color:'#07112e', borderRadius:12, textAlign:'center', fontWeight:600, fontSize:16, textDecoration:'none' }}
            >Get Started</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
