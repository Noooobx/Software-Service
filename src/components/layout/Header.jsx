import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'About', href: '/#about' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-bg/80 backdrop-blur-md border-b border-white/5 py-2">
      <nav className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center group">
            <div className="w-7 h-7 md:w-8 md:h-8 bg-brand-accent rounded-lg flex items-center justify-center text-white font-bold text-lg md:text-xl mr-2 md:mr-3">
              I
            </div>
            <span className="text-lg md:text-xl font-bold transition-colors text-white">
              IT Solutions
            </span>
          </Link>
        </div>

        <div className="hidden lg:flex items-center justify-center flex-1 px-8">
          <div className="flex items-center space-x-8 px-6 py-2 rounded-full border bg-white/5 backdrop-blur-sm border-white/10 transition-all duration-300">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[13px] font-semibold transition-colors uppercase tracking-wider leading-none text-slate-400 hover:text-brand-accent"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <Link 
            to="/order-goods" 
            className="text-sm font-semibold transition-all flex items-center leading-none px-5 py-2.5 rounded-full bg-brand-accent text-white hover:bg-brand-accent/90 shadow-lg shadow-brand-accent/20 active:scale-95"
          >
            Order IT Goods
          </Link>
          <button className="px-6 py-3 text-sm font-bold text-white bg-brand-accent rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center leading-none">
            Let's Connect
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center space-x-3">
          <Link 
            to="/order-goods" 
            className="text-[10px] font-bold px-3 py-2 rounded-full transition-all uppercase tracking-wider bg-brand-accent text-white shadow-lg shadow-brand-accent/20 active:scale-95"
          >
            Order Goods
          </Link>
          
          <button
            className="p-1.5 transition-colors text-slate-400 hover:text-brand-accent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed inset-x-0 top-[60px] z-50 overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-brand-bg/98 backdrop-blur-2xl border-t border-white/5 -z-10 shadow-2xl"></div>
        <div className="container-custom py-8 flex flex-col space-y-6 h-[calc(100vh-60px)] overflow-y-auto">
          <div className="flex flex-col space-y-0.5">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-[13px] font-semibold text-slate-400 hover:text-brand-accent py-3 px-2 border-b border-white/5 last:border-0 transition-all duration-300 transform ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 40}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className={`pt-4 flex flex-col space-y-3 transition-all duration-500 delay-300 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <button className="w-full px-4 py-3.5 text-center text-[13px] font-bold text-white bg-brand-accent rounded-xl shadow-lg active:scale-95 transition-all uppercase tracking-wider">
              Let's Connect
            </button>
            <Link 
              to="/order-goods"
              onClick={() => setIsMenuOpen(false)}
              className="w-full px-4 py-3 text-center text-[11px] font-bold text-brand-accent border border-brand-accent/20 bg-brand-accent/5 rounded-xl transition-all uppercase tracking-widest"
            >
              Order IT Goods
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
