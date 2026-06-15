import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatWeDo from '@/components/WhatWeDo';
import MarqueeTagline from '@/components/MarqueeTagline';
import Testimonials from '@/components/Testimonials';
import CRM from '@/components/CRM';
import FAQ from '@/components/FAQ';
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
        <Testimonials />
        <CRM />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
