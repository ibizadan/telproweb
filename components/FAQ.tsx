'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: 'What makes Telpromarketing different from other web agencies?',
    a: 'We are a small, senior team with 25 years of experience. You work directly with the people who write your code, design your interfaces, and operate your CRM — no junior account managers, no offshore handoffs.',
  },
  {
    q: 'Do you only work with established companies?',
    a: 'Not at all. We work with early-stage startups, scale-ups, and established multinationals. Our approach adapts to where your business is today and where you want it to be.',
  },
  {
    q: 'How fast can you deliver a new website?',
    a: 'Timelines depend on scope. A focused marketing site can ship in three to four weeks. A larger custom Next.js application with integrations typically takes two to three months from kickoff to launch.',
  },
  {
    q: 'What technologies do you actually use?',
    a: 'WordPress with custom themes and blocks, Next.js with the App Router and React Server Components, headless CMS integrations, and managed CRM platforms like HubSpot, Salesforce, Zoho, SuiteCRM, and Odoo.',
  },
  {
    q: 'Do you offer fixed packages or custom quotes?',
    a: 'Both. We have transparent starting packages for common needs, and we build custom quotes when your project deserves a tailored approach. Either way, we put pricing in writing before any work begins.',
  },
  {
    q: 'What happens after my website launches?',
    a: 'We do not disappear. We offer managed hosting, CRM operations, and continuous improvements. Most of our clients stay with us long after launch — that is the relationship we build for.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-32 md:py-40 bg-ink-950">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center max-w-2xl mx-auto"
        >
          <p className="text-[12px] uppercase tracking-[0.3em] text-ink-400 font-medium mb-5">FAQ</p>
          <h2 className="text-[clamp(36px,5vw,64px)] font-medium leading-[1.1] tracking-[-0.025em] text-ink-50">
            Got questions? We&apos;ve got answers.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.02] overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 md:p-7 text-left hover:bg-white/[0.02] transition"
              >
                <span className="text-lg md:text-xl font-medium text-ink-50 tracking-tight">{f.q}</span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-transform ${open === i ? 'rotate-45' : ''}`}>
                  <Plus className="w-4 h-4 text-ink-200" strokeWidth={2} />
                </div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="px-6 md:px-7 pb-7 text-ink-200 leading-relaxed text-[15px] max-w-3xl">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
