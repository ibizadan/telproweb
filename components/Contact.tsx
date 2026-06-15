'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '' });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const items = [
    { icon: Phone, label: 'Phone', value: '(858) 480-9719' },
    { icon: Mail, label: 'Email', value: 'hola@telpromarketing.com' },
    { icon: MapPin, label: 'Address', value: '8690 Aero Dr Ste 115 #4181\nSan Diego, CA 92123' },
    { icon: Clock, label: 'Response Time', value: 'Within 24 hours' },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 aurora opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-brand-400 font-medium mb-4">◇ Get in touch</p>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.02] mb-6">
            <span className="text-gradient">Let's start</span><br/>
            <span className="font-serif-italic text-brand-400">something great.</span>
          </h2>
          <p className="text-lg text-ink-200">
            Tell us about your project. We'll get back to you within one business day with ideas, questions, and a clear path forward.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-3"
          >
            {items.map(item => (
              <div key={item.label} className="glass rounded-xl p-5 flex gap-4 hover:bg-white/[0.04] transition">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500/20 to-brand-700/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-brand-400" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-ink-400 font-medium mb-1">{item.label}</div>
                  <div className="text-[14px] text-white whitespace-pre-line">{item.value}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-500/20 to-violet-500/10 blur-3xl rounded-3xl" />
            <div className="relative glass-hi rounded-3xl p-8 md:p-10">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 mx-auto mb-5 flex items-center justify-center text-emerald-400 text-3xl">✓</div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
                  <p className="text-ink-200">Thanks, {form.name || 'there'}. We'll be in touch within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Full Name">
                      <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="John Smith" required
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-ink-400 outline-none focus:border-brand-400 transition" />
                    </Field>
                    <Field label="Email">
                      <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="john@company.com" required
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-ink-400 outline-none focus:border-brand-400 transition" />
                    </Field>
                  </div>
                  <Field label="Service">
                    <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} required
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-brand-400 transition appearance-none cursor-pointer">
                      <option value="" className="bg-ink-950">Select a service…</option>
                      <option className="bg-ink-950">WordPress Website</option>
                      <option className="bg-ink-950">Next.js Application</option>
                      <option className="bg-ink-950">Managed CRM</option>
                      <option className="bg-ink-950">CRM Migration</option>
                      <option className="bg-ink-950">Not sure yet</option>
                    </select>
                  </Field>
                  <Field label="About your project">
                    <textarea rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Describe your goals, timeline, or questions…" required
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-ink-400 outline-none focus:border-brand-400 transition resize-none" />
                  </Field>
                  <button type="submit" className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-ink-950 rounded-xl font-display text-[11px] uppercase tracking-wider hover:bg-ink-100 transition shadow-2xl shadow-white/10">
                    Send Message
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.18em] text-ink-400 font-medium mb-2">{label}</span>
      {children}
    </label>
  );
}
