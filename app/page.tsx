import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import Process from '@/components/Process';
import CRM from '@/components/CRM';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CursorGlow from '@/components/CursorGlow';

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main className="relative">
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <CRM />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
