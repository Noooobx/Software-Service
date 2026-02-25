import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Stories', href: '#stories' },
    { name: 'Reviews', href: '#reviews' },
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
            <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-brand-primary' : 'text-slate-900 group-hover:text-brand-accent'}`}>
              IT Solutions
            </span>
          </a>
        </div>

        {/* Desktop Menu - Centered and Intentional */}
        <div className="hidden lg:flex items-center justify-center flex-1 px-8">
          <div className="flex items-center space-x-8 bg-slate-50/50 backdrop-blur-sm px-6 py-2 rounded-full border border-slate-100/50">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[13px] font-semibold text-slate-500 hover:text-brand-accent transition-colors uppercase tracking-wider leading-none"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA - Single prominent action */}
        <div className="hidden lg:flex items-center space-x-6">
          <a href="#order" className="text-sm font-semibold text-slate-500 hover:text-brand-accent transition-all flex items-center leading-none px-2 py-1">
            Order IT Goods
          </a>
          <button className="px-6 py-3 text-sm font-bold text-white bg-brand-accent rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center leading-none">
            Let's Connect
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-slate-600 hover:text-brand-accent"
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

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white ${
          isMenuOpen ? 'max-h-screen opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container-custom py-8 flex flex-col space-y-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-bold text-slate-900 hover:text-brand-accent"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-6 border-t border-slate-100 flex flex-col space-y-4">
            <button className="w-full px-4 py-4 text-center text-sm font-bold text-white bg-brand-accent rounded-xl">
              Let's Connect
            </button>
            <button className="w-full px-4 py-3 text-center text-sm font-semibold text-slate-500">
              Order IT Goods
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
