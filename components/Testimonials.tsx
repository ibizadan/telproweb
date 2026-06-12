'use client';
import { motion } from 'framer-motion';
import { Star, Play } from 'lucide-react';

const reviews = [
  {
    quote: "Telpromarketing rebuilt our entire web presence and the bounce rate dropped while conversions climbed. They didn't behave like a vendor — more like a partner who genuinely cared whether the work landed.",
    author: 'Marcus Reyes',
    role: 'Head of Marketing, Vertex Labs',
  },
  {
    quote: "We came in with a rough sketch and walked out with a polished web platform in eight weeks. The speed and the quality were not what we expected from an agency.",
    author: 'Priya Nair',
    role: 'Founder, TaskBridge',
  },
  {
    quote: "Their team migrated our entire CRM, hardened the security, and trained our sales staff in under a month. Zero data loss, zero drama.",
    author: 'Elena Martinez',
    role: 'COO, Distribuidora Norte',
  },
  {
    quote: "Telpromarketing took our scattered marketing site and shaped it into something we are actually proud to send to enterprise prospects. Best money we have spent this year.",
    author: 'David Chen',
    role: 'CEO, NorthStar',
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 md:py-40 bg-ink-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-[12px] uppercase tracking-[0.3em] text-ink-400 font-medium mb-5">Testimonials</p>
          <h2 className="text-[clamp(36px,5vw,64px)] font-medium leading-[1.1] tracking-[-0.025em] text-ink-50">
            Trusted by founders worldwide.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Featured video testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden min-h-[400px] border border-white/10 group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-ink-900 to-ink-950" />
            <div className="absolute inset-0"
              style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,122,45,0.25), transparent 70%)' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/95 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                <Play className="w-7 h-7 text-ink-950 ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-ink-950 via-ink-950/80 to-transparent">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-orange-400" fill="currentColor" />
                ))}
              </div>
              <p className="text-ink-100 text-lg leading-relaxed mb-4 max-w-md">
                &ldquo;{reviews[0].quote}&rdquo;
              </p>
              <p className="text-ink-300 text-sm">
                — {reviews[0].author}, <span className="text-ink-400">{reviews[0].role}</span>
              </p>
            </div>
          </motion.div>

          {/* Stack of text reviews */}
          <div className="grid gap-5">
            {reviews.slice(1).map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 hover:bg-white/[0.04] transition"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 text-orange-400" fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-[11px] text-ink-500 uppercase tracking-wider">5/5</span>
                </div>
                <p className="text-ink-100 leading-relaxed mb-4 text-[15px]">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <p className="text-ink-400 text-[13px]">
                  — {r.author}, <span className="text-ink-500">{r.role}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
