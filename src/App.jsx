import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import TrustedBy from './components/sections/TrustedBy';
import Services from './components/sections/Services';
import IndustryPortfolio from './components/sections/IndustryPortfolio';
import Testimonials from './components/sections/Testimonials';
import About from './components/sections/About';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TrustedBy />
        <Services />
        <IndustryPortfolio />
        <Testimonials />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
