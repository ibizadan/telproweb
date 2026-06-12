import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Telpromarketing — Build the web of tomorrow',
  description: 'Web development & managed CRM for ambitious businesses. WordPress, Next.js, SEO, and CRM operations — engineered in San Diego.',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Telpromarketing',
    description: 'Build the web of tomorrow.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise">{children}</body>
    </html>
  );
}
