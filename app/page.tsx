import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatWeDo from '@/components/WhatWeDo';
import MarqueeTagline from '@/components/MarqueeTagline';
import CRM from '@/components/CRM';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <WhatWeDo />
        <MarqueeTagline />
        <CRM />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
