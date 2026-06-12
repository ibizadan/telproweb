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
      <head>
        {/* Preload hero video poster for instant above-fold paint */}
        <link
          rel="preload"
          as="image"
          href="https://images.pexels.com/videos/6804109/pexels-photo-6804109.jpeg?auto=compress&cs=tinysrgb&w=1600"
        />
        {/* Preconnect to font/video CDNs */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://videos.pexels.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      </head>
      <body className="noise">{children}</body>
    </html>
  );
}
