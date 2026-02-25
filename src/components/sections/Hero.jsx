const Hero = () => {
  return (
    <section className="relative pt-24 pb-12 lg:pt-52 lg:pb-40 overflow-hidden bg-white">
      {/* Background Decorative Blur */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-slate-50 rounded-full blur-[100px] -z-10"></div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content Left */}
          <div className="max-w-2xl text-center lg:text-left space-y-6 lg:space-y-8">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-brand-primary leading-[1.3] lg:leading-[1.25]">
              Innovative IT Solutions <br />
              <span className="text-brand-accent">for Modern Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-700 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              We provide software development, mobile applications, system integration, IT infrastructure, and security solutions tailored for modern enterprises.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 lg:gap-5 pt-4">
              <button className="btn-primary w-full sm:w-auto max-w-xs mx-auto lg:mx-0 mb-2 sm:mb-0">
                Explore Services
              </button>
              <button className="btn-outline w-full sm:w-auto max-w-xs mx-auto lg:mx-0">
                Order IT Goods
              </button>
            </div>
            
            {/* Trust Badges */}
            <div className="pt-8 hidden sm:flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 opacity-60 grayscale">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Collaborating with</span>
              <div className="flex space-x-6">
                <div className="h-6 w-20 bg-slate-200 rounded"></div>
                <div className="h-6 w-20 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
          
          {/* Stylized Visual Right */}
          <div className="relative group lg:pl-10 -mt-10 lg:mt-0 -mx-4 sm:mx-0 w-screen sm:w-auto overflow-hidden sm:overflow-visible">
            <div className="relative z-10 h-[280px] lg:h-auto lg:aspect-[4/3] bg-slate-900 rounded-none sm:rounded-3xl shadow-2xl overflow-hidden border-y sm:border border-slate-800 p-2 sm:p-4">
              {/* Mock Dashboard UI */}
              <div className="bg-slate-800/50 w-full h-full rounded-none sm:rounded-2xl overflow-hidden flex flex-col">
                {/* Header of Mock */}
                <div className="h-8 border-b border-slate-700/50 flex items-center px-4 space-x-2">
                  <div className="w-2 h-2 rounded-full bg-red-400/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-400/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400/50"></div>
                </div>
                {/* Body of Mock */}
                <div className="flex-1 p-6 grid grid-cols-3 gap-4">
                  <div className="col-span-2 space-y-4">
                    <div className="h-32 bg-slate-700/30 rounded-xl animate-pulse"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-20 bg-brand-accent/10 border border-brand-accent/20 rounded-xl"></div>
                      <div className="h-20 bg-slate-700/30 rounded-xl"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-full bg-slate-700/20 rounded-xl border border-slate-700/50 p-4">
                      <div className="w-8 h-8 rounded-full bg-brand-accent/20 mb-4"></div>
                      <div className="h-2 w-full bg-slate-600/50 rounded mb-2"></div>
                      <div className="h-2 w-2/3 bg-slate-600/50 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Overlay Glass Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl hidden md:block group-hover:translate-y-[-10px] transition-transform duration-500">
                <div className="h-2 w-12 bg-brand-accent rounded mb-4"></div>
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-white/20 rounded"></div>
                  <div className="h-1.5 w-full bg-white/20 rounded"></div>
                  <div className="h-1.5 w-4/5 bg-white/20 rounded"></div>
                </div>
              </div>
            </div>
            
            {/* Decorative Orbs */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-slate-200 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
