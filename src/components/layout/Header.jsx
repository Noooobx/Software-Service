import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#" className="flex items-center group">
            <div className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3">
              I
            </div>
            <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-brand-primary' : 'text-white'}`}>
              IT Solutions
            </span>
          </a>
        </div>

        <div className="hidden lg:flex items-center justify-center flex-1 px-8">
          <div className={`flex items-center space-x-8 px-6 py-2 rounded-full border transition-all duration-300 ${
            isScrolled 
              ? 'bg-slate-50/50 backdrop-blur-sm border-slate-100/50' 
              : 'bg-white/10 backdrop-blur-md border-white/20'
          }`}>
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-[13px] font-semibold transition-colors uppercase tracking-wider leading-none ${
                  isScrolled ? 'text-slate-500 hover:text-brand-accent' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <a href="#order" className={`text-sm font-semibold transition-all flex items-center leading-none px-2 py-1 ${
            isScrolled ? 'text-slate-500 hover:text-brand-accent' : 'text-white/80 hover:text-white'
          }`}>
            Order IT Goods
          </a>
          <button className="px-6 py-3 text-sm font-bold text-white bg-brand-accent rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center leading-none">
            Let's Connect
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-slate-600 hover:text-brand-accent' : 'text-white'}`}
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
      </nav>

      <div
        className={`lg:hidden fixed inset-x-0 top-[64px] z-50 overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-slate-900/98 backdrop-blur-2xl -z-10"></div>
        <div className="container-custom py-10 flex flex-col space-y-8 h-[calc(100vh-64px)] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-lg font-bold text-white/90 hover:text-brand-accent py-2.5 border-b border-white/5 last:border-0 transition-all duration-300 transform ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
          
          <div className={`pt-8 flex flex-col space-y-4 transition-all duration-500 delay-300 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            <button className="w-full px-4 py-5 text-center text-sm font-black text-white bg-brand-accent rounded-2xl shadow-lg active:scale-95 transition-all uppercase tracking-[0.2em]">
              Let's Connect
            </button>
            <button className="w-full px-4 py-4 text-center text-xs font-bold text-white/40 hover:text-white transition-colors uppercase tracking-[0.3em]">
              Order IT Goods
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
