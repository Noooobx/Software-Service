const TrustedBy = () => {
  const logos = [
    'TechGlobal', 'Nexus Systems', 'DataStream', 'CloudVertex', 
    'Quantum Soft', 'Skyline IT', 'ProLogic', 'AlphaSecure'
  ];

  return (
    <section className="py-6 bg-slate-100 border-y border-slate-200 overflow-hidden">
      <div className="container-custom">
        <h2 className="text-center text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] mb-12">
          Trusted By Industry Leaders
        </h2>
        
        {/* Infinite Marquee Container */}
        <div className="relative flex overflow-hidden group">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex items-center mx-12">
                <span className="text-2xl lg:text-3xl font-bold text-slate-500 hover:text-brand-accent transition-colors duration-500 cursor-default select-none tracking-tighter uppercase italic">
                  {logo}
                </span>
              </div>
            ))}
          </div>
          
          {/* Gradient Masks for Smooth Fade */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
