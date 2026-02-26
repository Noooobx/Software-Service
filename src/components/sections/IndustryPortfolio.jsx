const IndustryPortfolio = () => {
  const industries = [
    { 
      name: 'Education', 
      description: 'Building digital classrooms and learning systems for the next generation.',
      gradient: 'from-blue-500/10 to-brand-accent/5',
      size: 'lg',
    },
    { 
      name: 'Healthcare', 
      description: 'Secure software for patient care and hospital operations.',
      gradient: 'from-emerald-500/10 to-teal-500/5',
      size: 'md',
    },
    { 
      name: 'Retail', 
      description: 'Modern e-commerce and store management tools.',
      gradient: 'from-orange-500/10 to-red-500/5',
      size: 'md',
    },
    { 
      name: 'Manufacturing', 
      description: 'Smart systems for supply chain and factory automation.',
      gradient: 'from-indigo-500/10 to-brand-primary/5',
      size: 'lg',
    },
    { 
      name: 'Corporate', 
      description: 'Internal portals and tools to help your team work better.',
      gradient: 'from-slate-500/10 to-slate-900/5',
      size: 'xl',
    },
  ];

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-brand-bg relative overflow-hidden">
      {/* Blueprint Watermark Background */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.05] pointer-events-none select-none overflow-hidden">
        <svg className="w-[150%] h-[150%] -rotate-12 -translate-y-1/4" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100H1000M0 200H1000M0 300H1000M0 400H1000M0 500H1000M0 600H1000M0 700H1000M0 800H1000M0 900H1000" stroke="#fff" strokeWidth="1" strokeDasharray="10 10"/>
          <path d="M100 0V1000M200 0V1000M300 0V1000M400 0V1000M500 0V1000M600 0V1000M700 0V1000M800 0V1000M900 0V1000" stroke="#fff" strokeWidth="1" strokeDasharray="10 10"/>
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mb-20">
          <h2 className="text-2xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            Industries <span className="text-brand-accent italic font-light">We Support</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium border-l-4 border-brand-accent pl-6">
            Professional technology solutions built on a foundation of 
            security, stability, and future-proof design.
          </p>
        </div>

        {/* Bento-style Layout: Mobile Horizontal Scroll / Desktop Grid */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 lg:gap-8 pb-8 md:pb-0 scrollbar-dotted">
          {industries.map((item, index) => (
            <div
              key={item.name}
              className={`relative overflow-hidden group bg-white/5 border border-white/10 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col min-w-[85vw] md:min-w-0 snap-start snap-always h-[300px] md:h-auto
                ${item.size === 'xl' ? 'md:col-span-2' : ''}
                ${item.size === 'lg' ? 'md:row-span-2' : ''}
              `}
            >
              {/* Dynamic Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              {/* Animated Accent Glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/20 blur-3xl rounded-full group-hover:bg-brand-accent/10 transition-colors duration-700"></div>

              <div className="relative z-10 p-10 h-full flex flex-col">
                <div className="mb-auto">
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-[10px] uppercase tracking-[0.4em] font-black text-slate-400 group-hover:text-brand-accent transition-colors">
                      Sector {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="w-10 h-10 border border-slate-200 flex items-center justify-center rounded-xl bg-white/50 backdrop-blur-sm group-hover:border-brand-accent/30 transition-all">
                      <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-3xl font-bold text-white mb-4 tracking-tight group-hover:translate-x-1 transition-transform">
                    {item.name}
                  </h3>
                  <p className="text-slate-400 font-medium leading-relaxed max-w-xs text-[13px] md:text-lg">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center text-[10px] font-black uppercase tracking-[0.3em] text-brand-primary group-hover:text-brand-accent transition-colors">
                  Explore Solutions
                  <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryPortfolio;
