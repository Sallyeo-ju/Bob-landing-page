import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import ChatDemo from './components/ChatDemo.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Download from './components/Download.jsx';
import Footer from './components/Footer.jsx';
import useReveal from './hooks/useReveal.js';

export default function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ChatDemo />
        <HowItWorks />
        <Download />
      </main>
      <Footer />
    </>
  );
}
