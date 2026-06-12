'use client';
import { motion } from 'framer-motion';
import { Server, GitBranch, Shield, Database, Workflow, GraduationCap, ArrowRight } from 'lucide-react';

const pillars = [
  { icon: Server, num: '01', title: 'Server Support', desc: 'Proactive monitoring, updates, and incident response — your CRM stays online while you sleep.' },
  { icon: GitBranch, num: '02', title: 'Data Migration', desc: 'Zero-loss migrations from legacy systems with full validation and rollback safety.' },
  { icon: Database, num: '03', title: 'Automated Backups', desc: 'Daily off-site backups with one-click restore. Your customer data is always safe.' },
  { icon: Shield, num: '04', title: 'Security Hardening', desc: 'Regular audits, vulnerability patching, and access reviews. Compliance-ready by default.' },
  { icon: Workflow, num: '05', title: 'Custom Integrations', desc: 'Connect your CRM with email, e-commerce, ERP, and any third-party API your team needs.' },
  { icon: GraduationCap, num: '06', title: 'Training & Onboarding', desc: 'Personalized sessions and documentation tailored to your team\'s exact workflow.' },
];

const platforms = ['HubSpot', 'Salesforce', 'Zoho', 'SuiteCRM', 'Odoo'];

export default function CRM() {
  return (
    <section id="crm" className="relative py-32 border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent" />
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-[1fr_1.1fr] gap-16">
        <div className="md:sticky md:top-32 self-start">
          <p className="text-[11px] uppercase tracking-[0.3em] text-teal-400 font-medium mb-4">◐ Managed CRM</p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="text-gradient">Your CRM,</span><br/>
            <span className="font-serif-italic text-teal-300">fully operated.</span>
          </h2>
          <p className="text-lg text-ink-200 leading-relaxed mb-8 max-w-md">
            Stop wrestling with your CRM. We run the servers, migrate the data, secure the endpoints, and train your team — so your sales operation just works.
          </p>

          <div className="mb-8">
            <p className="text-[11px] uppercase tracking-[0.25em] text-ink-400 font-medium mb-3">
              We can help you switch from
            </p>
            <div className="flex flex-wrap gap-2">
              {platforms.map(p => (
                <span key={p} className="px-3 py-1.5 glass rounded-lg text-[12px] text-ink-200 hover:text-white hover:bg-white/10 transition">{p}</span>
              ))}
            </div>
          </div>

          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-600 text-white font-display text-[10px] uppercase tracking-wider transition">
            Talk to a CRM Expert
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="space-y-2">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group glass rounded-xl p-5 hover:bg-white/[0.04] transition flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500/20 to-teal-700/5 border border-white/10 flex items-center justify-center group-hover:border-teal-400/40 transition">
                  <p.icon className="w-4 h-4 text-teal-300" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="font-display text-[10px] tracking-wider text-ink-400">{p.num}</span>
                  <h4 className="font-display text-[14px] uppercase tracking-wider text-white">{p.title}</h4>
                </div>
                <p className="text-[13px] text-ink-200 leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
