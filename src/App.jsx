import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import OrderGoods from './pages/OrderGoods';
import BulkOrder from './pages/BulkOrder';

const Home = () => (
  <>
    <Hero />
    <TrustedBy />
    <Services />
    <IndustryPortfolio />
    <Testimonials />
    <About />
    <FAQ />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <main className="flex-grow">
                <Home />
              </main>
              <Footer />
            </>
          } />
          <Route path="/order-goods" element={<OrderGoods />} />
          <Route path="/bulk-order" element={<BulkOrder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
