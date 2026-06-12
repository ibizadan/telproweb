import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import NotJustAnother from '@/components/NotJustAnother';
import WhatWeDo from '@/components/WhatWeDo';
import MarqueeTagline from '@/components/MarqueeTagline';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import StatsCounter from '@/components/StatsCounter';
import CRM from '@/components/CRM';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <TrustBar />
        <NotJustAnother />
        <WhatWeDo />
        <MarqueeTagline />
        <WhyChooseUs />
        <Testimonials />
        <StatsCounter />
        <CRM />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
