const Footer = () => {
  const sections = [
    {
      title: 'Hire',
      links: ['Software Developers', 'App Developers', 'UI/UX Designers', 'System Integrators'],
    },
    {
      title: 'User Guides',
      links: ['Deployment Guide', 'API Documentation', 'System Specs', 'Troubleshooting'],
    },
    {
      title: 'About Us',
      links: ['Our Story', 'Team', 'Careers', 'Latest News'],
    },
    {
      title: 'Quick Links',
      links: ['Services', 'Case Studies', 'Pricing', 'FAQ'],
    },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 relative overflow-hidden">
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent pointer-events-none"></div>

      <div className="container-custom py-20 lg:py-32 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mb-20 lg:mb-24">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em]">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-brand-accent transition-colors text-xs lg:text-sm font-medium">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-16 border-t border-slate-800/60">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-brand-accent">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest">Locations</h3>
            </div>
            <div className="space-y-2 pl-11">
              <p className="text-xs lg:text-sm text-slate-100 font-medium">Main Office: Silicon Valley, CA</p>
              <p className="text-[11px] lg:text-xs text-slate-500">Regional Hub: London, UK</p>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-brand-accent">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest">Contact</h3>
            </div>
            <div className="space-y-2 pl-11">
              <p className="text-xs lg:text-sm text-slate-100 font-medium">Phone: +1 (555) 000-0000</p>
              <p className="text-xs lg:text-sm text-slate-100 font-medium">Email: info@itsolutions.com</p>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-brand-accent">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest">Stay Updated</h3>
            </div>
            <form className="flex pl-11">
              <input
                type="email"
                placeholder="Work email"
                className="bg-slate-900/50 border border-slate-700 rounded-l px-4 py-2 text-xs lg:text-sm focus:outline-none focus:border-brand-accent transition-colors w-full"
              />
              <button className="bg-brand-accent text-white px-5 py-2 rounded-r text-[10px] lg:text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-slate-800/40 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] lg:text-xs uppercase tracking-[0.2em] font-medium text-slate-500">
            © {new Date().getFullYear()} IT Solutions • Engineered for Precision
          </p>
          <div className="flex space-x-8 text-[10px] lg:text-xs uppercase tracking-[0.1em] font-bold">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
