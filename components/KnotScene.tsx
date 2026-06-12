'use client';
import { useEffect, useRef } from 'react';
import type { MotionValue } from 'framer-motion';

interface Props { scrollYProgress: MotionValue<number>; }

export default function KnotScene({ scrollYProgress }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      if (ref.current) {
        const p = scrollYProgress.get();
        const rotY = p * 720;
        const rotX = -15 + p * 30;
        ref.current.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      }
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    return () => cancelAnimationFrame(raf);
  }, [scrollYProgress]);

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{ perspective: '1000px' }}
    >
      <div
        ref={ref}
        className="will-change-transform"
        style={{ transformStyle: 'preserve-3d', width: 480, maxWidth: '90%' }}
      >
        {/* Glow halo behind the knot */}
        <div
          className="absolute inset-0 rounded-full blur-3xl opacity-60 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,122,45,0.5) 0%, transparent 65%)',
            transform: 'translateZ(-40px) scale(0.8)',
          }}
        />
        <svg
          viewBox="-80 -80 660 660"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: 'block', filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.7)) drop-shadow(0 -8px 40px rgba(255,100,30,0.3))' }}
        >
          <defs>
            <linearGradient id="kg1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0a0a0a"/>
              <stop offset="20%" stopColor="#3a1b3a"/>
              <stop offset="40%" stopColor="#7a4858"/>
              <stop offset="55%" stopColor="#d4a585"/>
              <stop offset="70%" stopColor="#7eb88a"/>
              <stop offset="88%" stopColor="#2a4a3a"/>
              <stop offset="100%" stopColor="#0a0a0a"/>
            </linearGradient>
            <linearGradient id="kg2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff8a4a" stopOpacity="0.9"/>
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="#a8e0c0" stopOpacity="0.65"/>
            </linearGradient>
            <radialGradient id="kh1" cx="38%" cy="32%" r="28%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="kh2" cx="66%" cy="68%" r="22%">
              <stop offset="0%" stopColor="#a8e0c0" stopOpacity="0.65"/>
              <stop offset="100%" stopColor="#a8e0c0" stopOpacity="0"/>
            </radialGradient>
            <mask id="km">
              <path d="M250 60 C410 60,520 280,380 360 C240 440,150 320,230 240 C310 160,460 220,460 360 C460 500,280 500,220 400 C160 300,240 180,360 220 C480 260,480 420,340 460 C200 500,130 380,200 280 C270 180,420 140,480 240"
                stroke="white" strokeWidth="74" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </mask>
          </defs>
          <g mask="url(#km)">
            <rect x="-80" y="-80" width="660" height="660" fill="url(#kg1)"/>
            <rect x="-80" y="-80" width="660" height="660" fill="url(#kg2)" opacity="0.55"/>
            <rect x="-80" y="-80" width="660" height="660" fill="url(#kh1)"/>
            <rect x="-80" y="-80" width="660" height="660" fill="url(#kh2)"/>
            <ellipse cx="120" cy="380" rx="130" ry="50" fill="#ff7a2d" opacity="0.55"/>
            <ellipse cx="450" cy="180" rx="100" ry="40" fill="#ff9555" opacity="0.4"/>
            <ellipse cx="280" cy="80" rx="80" ry="25" fill="#ffcc99" opacity="0.3"/>
          </g>
          <path d="M250 60 C410 60,520 280,380 360 C240 440,150 320,230 240 C310 160,460 220,460 360 C460 500,280 500,220 400 C160 300,240 180,360 220 C480 260,480 420,340 460 C200 500,130 380,200 280 C270 180,420 140,480 240"
            stroke="rgba(0,0,0,0.45)" strokeWidth="78" strokeLinecap="round" strokeLinejoin="round" fill="none"
            style={{ mixBlendMode: 'multiply' }}/>
        </svg>
      </div>
    </div>
  );
}
