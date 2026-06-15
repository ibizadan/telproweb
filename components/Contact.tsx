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
    { icon: Phone, label: 'Phone', value: '(858) 480-9719', href: 'tel:+18584809719' },
    { icon: Mail, label: 'Email', value: 'info@telpromarketing.com', href: 'mailto:info@telpromarketing.com' },
    { icon: MapPin, label: 'Address', value: '8690 Aero Dr Ste 115 #4181\nSan Diego, CA 92123', href: null },
    { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
  ];

  return (
    <section id="contact" className="relative overflow-hidden">

      {/* ── Top shape divider — wave cutting into section from above ── */}
      <div className="relative w-full overflow-hidden leading-none" style={{ marginBottom: -2 }}>
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: 100 }}
        >
          {/* the fill must match the contact section bg */}
          <path
            d="M0,0 L0,60 Q180,100 360,70 Q540,40 720,75 Q900,110 1080,60 Q1260,15 1440,55 L1440,0 Z"
            fill="#0b0f1e"
          />
        </svg>
      </div>

      {/* ── Section background — richer deep navy with graphic ── */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(160deg, #080d1e 0%, #0b1025 35%, #0d1330 60%, #090c1c 100%)',
      }} />

      {/* Glowing orb top-right */}
      <div className="absolute pointer-events-none" style={{
        top: '-10%', right: '-5%', width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(35,75,210,0.25) 0%, transparent 65%)',
        filter: 'blur(40px)',
      }} />
      {/* Glowing orb bottom-left */}
      <div className="absolute pointer-events-none" style={{
        bottom: '-5%', left: '-5%', width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(22,52,160,0.2) 0%, transparent 65%)',
        filter: 'blur(40px)',
      }} />

      {/* Abstract circuit / network graphic */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 900" xmlns="http://www.w3.org/2000/svg"
          className="absolute w-full h-full object-cover opacity-[0.06]"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Grid of dots */}
          {Array.from({ length: 12 }).map((_, row) =>
            Array.from({ length: 20 }).map((_, col) => (
              <circle key={`${row}-${col}`}
                cx={col * 80 + 40} cy={row * 80 + 40} r="1.5" fill="white" />
            ))
          )}
          {/* Circuit lines */}
          <g stroke="white" strokeWidth="0.8" fill="none">
            <path d="M120 40 L360 40 L360 120 L600 120 L600 40 L840 40"/>
            <path d="M160 200 L280 200 L280 280 L520 280"/>
            <path d="M720 160 L720 240 L960 240 L960 160 L1200 160"/>
            <path d="M40 360 L200 360 L200 440 L440 440 L440 360 L680 360"/>
            <path d="M800 400 L1000 400 L1000 320 L1200 320"/>
            <path d="M120 520 L400 520 L400 600 L640 600"/>
            <path d="M880 560 L1080 560 L1080 480 L1360 480"/>
            <path d="M200 680 L440 680 L440 760"/>
            <path d="M600 720 L840 720 L840 640 L1100 640"/>
            <path d="M1200 720 L1400 720"/>
          </g>
          {/* Larger nodes at intersections */}
          <g fill="white">
            <circle cx="360" cy="40" r="4"/><circle cx="600" cy="120" r="4"/>
            <circle cx="280" cy="280" r="4"/><circle cx="960" cy="240" r="4"/>
            <circle cx="200" cy="440" r="4"/><circle cx="440" cy="360" r="4"/>
            <circle cx="1000" cy="400" r="4"/><circle cx="400" cy="600" r="4"/>
            <circle cx="1080" cy="560" r="4"/><circle cx="840" cy="720" r="4"/>
          </g>
        </svg>
      </div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(rgba(120,150,255,0.08) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      {/* ── Content ── */}
      <div className="relative py-28 md:py-36" style={{ zIndex: 2 }}>
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-20"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-brand-400 font-medium mb-4">◇ Get in touch</p>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.02] mb-6">
              <span className="text-gradient">Let&apos;s start</span><br/>
              <span className="font-serif-italic text-brand-400">something great.</span>
            </h2>
            <p className="text-lg text-ink-200">
              Tell us about your project. We&apos;ll get back to you within one business day with ideas, questions, and a clear path forward.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 items-start">

            {/* Contact info cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-3"
            >
              {items.map(item => (
                <div key={item.label}
                  className="relative rounded-xl p-5 flex gap-4 transition group overflow-hidden"
                  style={{
                    background: 'linear-gradient(145deg,rgba(22,52,160,0.18),rgba(10,20,68,0.25))',
                    border: '1px solid rgba(91,138,255,0.15)',
                  }}
                >
                  {/* Subtle hover sweep */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                    background: 'linear-gradient(90deg,rgba(91,138,255,0.06),transparent)',
                  }} />
                  <div className="relative w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{
                    background: 'linear-gradient(135deg,rgba(91,138,255,0.22),rgba(22,52,160,0.1))',
                    border: '1px solid rgba(91,138,255,0.25)',
                  }}>
                    <item.icon className="w-4 h-4 text-brand-400" />
                  </div>
                  <div className="relative">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-ink-400 font-medium mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href}
                        className="text-[14px] text-white hover:text-brand-400 transition whitespace-pre-line"
                        style={{ textDecoration: 'none' }}
                      >{item.value}</a>
                    ) : (
                      <div className="text-[14px] text-white whitespace-pre-line">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl" style={{
                background: 'radial-gradient(ellipse at center, rgba(35,75,210,0.2), transparent 70%)',
                filter: 'blur(20px)',
              }} />
              <div className="relative rounded-3xl p-8 md:p-10" style={{
                background: 'linear-gradient(145deg,rgba(22,52,160,0.15),rgba(10,20,68,0.3))',
                border: '1px solid rgba(91,138,255,0.18)',
                backdropFilter: 'blur(20px)',
              }}>
                {sent ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center text-emerald-400 text-3xl" style={{
                      background: 'rgba(62,207,142,0.15)',
                      border: '1px solid rgba(62,207,142,0.3)',
                    }}>✓</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
                    <p className="text-ink-200">Thanks, {form.name || 'there'}. We&apos;ll be in touch within 24 hours at info@telpromarketing.com.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={submit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Full Name">
                        <input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="John Smith" required
                          className="w-full rounded-xl px-4 py-3 text-white placeholder:text-ink-400 outline-none transition"
                          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(91,138,255,0.15)' }}
                          onFocus={e => (e.currentTarget.style.borderColor = 'rgba(91,138,255,0.5)')}
                          onBlur={e => (e.currentTarget.style.borderColor = 'rgba(91,138,255,0.15)')} />
                      </Field>
                      <Field label="Email">
                        <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="john@company.com" required
                          className="w-full rounded-xl px-4 py-3 text-white placeholder:text-ink-400 outline-none transition"
                          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(91,138,255,0.15)' }}
                          onFocus={e => (e.currentTarget.style.borderColor = 'rgba(91,138,255,0.5)')}
                          onBlur={e => (e.currentTarget.style.borderColor = 'rgba(91,138,255,0.15)')} />
                      </Field>
                    </div>
                    <Field label="Service">
                      <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} required
                        className="w-full rounded-xl px-4 py-3 text-white outline-none transition appearance-none cursor-pointer"
                        style={{ background: 'rgba(10,20,68,0.7)', border: '1px solid rgba(91,138,255,0.15)' }}
                        onFocus={e => (e.currentTarget.style.borderColor = 'rgba(91,138,255,0.5)')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'rgba(91,138,255,0.15)')}
                      >
                        <option value="" style={{ background: '#0b0f1e' }}>Select a service…</option>
                        <option style={{ background: '#0b0f1e' }}>WordPress Website</option>
                        <option style={{ background: '#0b0f1e' }}>Next.js Application</option>
                        <option style={{ background: '#0b0f1e' }}>Managed CRM</option>
                        <option style={{ background: '#0b0f1e' }}>CRM Migration</option>
                        <option style={{ background: '#0b0f1e' }}>Not sure yet</option>
                      </select>
                    </Field>
                    <Field label="About your project">
                      <textarea rows={4} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                        placeholder="Describe your goals, timeline, or questions…" required
                        className="w-full rounded-xl px-4 py-3 text-white placeholder:text-ink-400 outline-none transition resize-none"
                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(91,138,255,0.15)' }}
                        onFocus={e => (e.currentTarget.style.borderColor = 'rgba(91,138,255,0.5)')}
                        onBlur={e => (e.currentTarget.style.borderColor = 'rgba(91,138,255,0.15)')} />
                    </Field>
                    <button type="submit"
                      className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-white rounded-xl font-semibold text-[14px] hover:bg-ink-100 transition shadow-2xl"
                      style={{ color: '#07112e' }}
                    >
                      Send Message
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[11px] uppercase tracking-[0.18em] font-medium mb-2"
        style={{ color: 'rgba(150,175,255,0.6)' }}>{label}</span>
      {children}
    </label>
  );
}
