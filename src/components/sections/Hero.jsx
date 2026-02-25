const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Innovative IT Solutions for Modern Businesses
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
              We provide software development, mobile applications, system integration, IT infrastructure, and security solutions tailored for modern enterprises.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button className="px-8 py-4 text-white bg-brand-primary rounded-lg font-semibold hover:bg-brand-secondary transition-all shadow-lg hover:shadow-xl">
                Explore Services
              </button>
              <button className="px-8 py-4 text-brand-primary border-2 border-brand-primary rounded-lg font-semibold hover:bg-brand-primary hover:text-white transition-all">
                Order IT Goods
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-white rounded-2xl shadow-2xl border border-slate-100 flex items-center justify-center overflow-hidden group">
              {/* Placeholder for future animation/video */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent"></div>
              <div className="text-brand-primary/20 transform group-hover:scale-110 transition-transform duration-500">
                <svg className="w-48 h-48" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z" />
                </svg>
              </div>
              <p className="absolute bottom-8 text-slate-400 font-medium tracking-widest uppercase text-xs">
                Interactive Showcase Coming Soon
              </p>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-slate-200 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
