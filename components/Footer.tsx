'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative pt-20 pb-8 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 aurora opacity-25" />
      <div className="relative max-w-6xl mx-auto px-6">

        {/* Top grid — logo + links */}
        <div className="grid md:grid-cols-[1.6fr_1fr_1fr] gap-12 mb-10">
          <div>
            <div className="mb-5" style={{ fontFamily: 'Archivo, sans-serif' }}>
              <div className="flex flex-col items-start leading-none">
                <div className="flex items-baseline gap-0">
                  <span className="font-black text-[26px] text-white" style={{ letterSpacing: '-0.02em', lineHeight: 1 }}>TEL</span>
                  <span className="font-black text-[26px]" style={{ color: '#7eb8ff', letterSpacing: '-0.02em', lineHeight: 1 }}>PRO</span>
                </div>
                <span className="text-white/30 font-medium uppercase"
                  style={{ fontSize: '9px', letterSpacing: '0.48em', marginTop: '3px', marginLeft: '0.48em' }}>
                  Marketing
                </span>
              </div>
            </div>
            <p className="text-sm text-ink-200 leading-relaxed mb-6 max-w-sm">
              Web development and managed CRM operations for ambitious teams. Engineered in San Diego, California.
            </p>
            <div className="space-y-1 text-sm text-ink-300">
              <p>8690 Aero Dr Ste 115 #4181</p>
              <p>San Diego, CA 92123</p>
              <p className="pt-3">
                <a href="tel:+18584809719" className="hover:text-white transition">(858) 480-9719</a>
              </p>
              <p>
                <a href="mailto:hola@telpromarketing.com" className="hover:text-white transition">hola@telpromarketing.com</a>
              </p>
            </div>
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-ink-400 font-medium mb-4">Services</div>
            <ul className="space-y-2.5">
              {['WordPress', 'Next.js', 'Managed CRM'].map(s => (
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

        {/* Bottom bar — copyright only */}
        <div className="pt-6 border-t border-white/5 flex justify-center">
          <p className="text-xs text-ink-400">© {year} Telpromarketing. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
