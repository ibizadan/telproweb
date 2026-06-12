'use client';
import { motion } from 'framer-motion';

const logos = [
  'ModaVerde', 'Constructora Alianza', 'Distribuidora Norte', 'TaskBridge',
  'GrupoSol', 'Vertex Labs', 'NorthStar', 'Helio Studio', 'Boreal Tech',
];

export default function TrustBar() {
  return (
    <section className="relative pt-72 pb-16 border-t border-white/5 mt-32">
      <div className="max-w-6xl mx-auto px-6 mb-8 text-center">
        <p className="text-[11px] uppercase tracking-[0.3em] text-ink-400 font-medium">
          Trusted by teams building the future
        </p>
      </div>
      <div className="relative overflow-hidden mask-fade-r">
        <div className="marquee">
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 px-12 flex items-center">
              <span className="font-display text-lg uppercase tracking-wider text-ink-400/70 whitespace-nowrap">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
