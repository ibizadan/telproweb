'use client';

const phrases = [
  'Built for ambitious teams',
  'Engineered for performance',
  'Designed in San Diego',
  'WordPress · Next.js · CRM',
];

export default function MarqueeTagline() {
  return (
    <section className="relative py-20 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent" />
      <div className="relative overflow-hidden">
        <div className="flex whitespace-nowrap marquee">
          {[...phrases, ...phrases, ...phrases].map((p, i) => (
            <div key={i} className="flex items-center px-10 flex-shrink-0">
              <span className="font-medium text-[clamp(32px,5vw,64px)] text-ink-50 tracking-[-0.02em]">
                {p}
              </span>
              <span className="mx-10 text-orange-400 text-3xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
