import styles from './Work.module.css';

const projects = [
  {
    tag: 'Next.js · E-commerce',
    title: 'ModaVerde Boutique',
    desc: 'A headless storefront built with Next.js and Shopify, achieving sub-1s load times and a 40% lift in mobile conversions.',
    stack: ['Next.js 14', 'Shopify', 'Tailwind', 'Vercel'],
    color: '#4f80ff',
  },
  {
    tag: 'WordPress · Corporate',
    title: 'Constructora Alianza',
    desc: 'Full WordPress build with custom Gutenberg blocks, bilingual content, and integrated project portfolio for a leading construction firm.',
    stack: ['WordPress', 'Custom Theme', 'ACF Pro', 'WPML'],
    color: '#7b5cff',
  },
  {
    tag: 'CRM · SuiteCRM',
    title: 'Distribuidora Norte',
    desc: 'Complete SuiteCRM deployment with server hardening, data migration from Excel, custom modules, and sales team training.',
    stack: ['SuiteCRM', 'Linux VPS', 'MySQL', 'Custom Modules'],
    color: '#3ecf8e',
  },
  {
    tag: 'Next.js · SaaS',
    title: 'TaskBridge App',
    desc: 'Project management SaaS MVP with auth, billing, and real-time collaboration — shipped in 8 weeks from discovery to launch.',
    stack: ['Next.js', 'Prisma', 'Stripe', 'Supabase'],
    color: '#ff6b6b',
  },
];

export default function Work() {
  return (
    <section className={styles.section} id="work">
      <div className="container">
        <div className={styles.header}>
          <p className={styles.eyebrow}>Selected Projects</p>
          <h2 className={styles.title}>Work We're Proud Of</h2>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <div key={p.title} className={`${styles.card} ${i === 0 ? styles.wide : ''}`}>
              <div className={styles.visual} style={{ '--c': p.color } as React.CSSProperties}>
                <div className={styles.visualInner}>
                  <div className={styles.mockBar}>
                    <span /><span /><span />
                  </div>
                  <div className={styles.mockContent}>
                    <div className={styles.mockLine} style={{ width: '60%' }} />
                    <div className={styles.mockLine} style={{ width: '80%' }} />
                    <div className={styles.mockLine} style={{ width: '45%' }} />
                    <div className={styles.mockBlock} />
                  </div>
                </div>
              </div>
              <div className={styles.info}>
                <span className={styles.tag}>{p.tag}</span>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.desc}</p>
                <div className={styles.stack}>
                  {p.stack.map(s => (
                    <span key={s} className={styles.stackItem}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p>Have a project in mind?</p>
          <a href="#contact" className={styles.ctaBtn}>Let's Build It Together →</a>
        </div>
      </div>
    </section>
  );
}
