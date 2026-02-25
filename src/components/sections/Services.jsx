const Services = () => {
  const serviceList = [
    {
      title: 'Strategic Architecture',
      badge: 'Core Capability',
      benefit: 'Uptime-critical systems engineering for massive scale.',
      description: 'We architect and deploy resilient digital frameworks that guarantee operational continuity and strict compliance for mission-critical enterprise environments.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm2 1v12h12V6H6z" />
          <path d="M10 20l4-16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      featured: true,
    },
    {
      title: 'Mobility Frameworks',
      badge: 'Integrated System',
      benefit: 'High-concurrency mobile platforms for the modern workforce.',
      description: 'Engineering secure, platform-agnostic mobility solutions that integrate seamlessly with complex legacy ecosystems and modern data paradigms.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v16a2 2 0 002 2h10a2 2 0 002-2V4a2 2 0 00-2-2H7zm2 2v14h6V4H9zm3 16a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      title: 'Systems Engineering',
      benefit: 'Unified interoperability across disparate technical silos.',
      description: 'Specializing in the technical unification of ERP, CRM, and bespoke cloud environments to establish a high-integrity source of truth.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2H3m14 0a2 2 0 00-2 2v10a2 2 0 002 2h3a2 2 0 002-2V7a2 2 0 00-2-2h-3z" />
          <path d="M7 11v4m0-4H3m4 0h4m-4 4H3m4 0h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: 'Infrastructure Supply',
      benefit: 'Supply of certified hardware and network apparatus.',
      description: 'Regulated procurement of server Grade-A hardware, enterprise networking clusters, and specialized technical infrastructure components.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      title: 'Identity & Protocol',
      badge: 'Compliance Focus',
      benefit: 'Rigorous security and biometric access management.',
      description: 'Implementing high-level biometric authentication, intelligent surveillance architectures, and advanced identity management protocols.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm3 8V7a3 3 0 10-6 0v3h6z" clipRule="evenodd" />
          <circle cx="12" cy="16" r="1.5" fill="currentColor"/>
        </svg>
      ),
    },
    {
      title: 'Technical Consulting',
      benefit: 'Strategic mapping for large-scale transformation.',
      description: 'Providing data-driven roadmaps to align complex organizational requirements with sustainable, scalable technology paradigms.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h.5a.5.5 0 00.5-.5V4a2 2 0 012-2h1a2 2 0 012 2v14a2 2 0 01-2 2h-4a1 1 0 110-2h.5v-1a2.5 2.5 0 00-2.5-2.5H6A2 2 0 014 14V4z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-40 bg-slate-50 relative overflow-hidden">
      {/* Technical Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mb-20 lg:mb-32">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
            Deployment of Mission-Critical <br className="hidden lg:block" />
            <span className="text-brand-accent italic font-medium">Digital Infrastructure</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium max-w-2xl border-l-4 border-slate-200 pl-6">
            We deliver high-authority technical consulting and end-to-end execution for enterprise 
            and government organizations requiring the highest standards of system integrity.
          </p>
        </div>

        {/* Mobile Horizontal Scroll (below md) / Grid (md+) */}
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 overflow-x-auto md:overflow-visible snap-x snap-mandatory gap-6 md:gap-10 lg:gap-12 pb-8 md:pb-0 scrollbar-dotted">
          {serviceList.map((service, index) => (
            <div
              key={service.title}
              className={`p-8 md:p-10 bg-white border border-slate-200 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col min-w-[85vw] md:min-w-0 snap-start snap-always ${service.featured ? 'border-brand-accent/40 shadow-md ring-1 ring-brand-accent/5' : 'shadow-none'}`}
            >
              <div className="flex justify-between items-start mb-8">
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded flex items-center justify-center transition-all duration-300 ${service.featured ? 'bg-brand-primary text-white' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'}`}>
                  {service.icon}
                </div>
                {service.badge && (
                  <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] py-1 px-3 bg-slate-100 text-slate-500 rounded-full border border-slate-200">
                    {service.badge}
                  </span>
                )}
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-[13px] md:text-[14px] font-bold text-slate-500 mb-4 leading-tight uppercase tracking-wide">
                  {service.benefit}
                </p>
                <p className="text-slate-600 leading-relaxed text-sm md:text-[15px] font-medium italic">
                  {service.description}
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-100">
                <a href="#" className="inline-flex items-center text-[10px] md:text-xs font-black text-brand-accent group/link uppercase tracking-[0.2em]">
                  Review Technical Capabilities
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 transform group-hover/link:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
