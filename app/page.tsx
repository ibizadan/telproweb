import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import NotJustAnother from '@/components/NotJustAnother';
import TrustBar from '@/components/TrustBar';
import Services from '@/components/Services';
import Process from '@/components/Process';
import CRM from '@/components/CRM';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <NotJustAnother />
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
