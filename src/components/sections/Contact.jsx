const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden">
      {/* Blueprint Watermark Background (Matching Portfolio) */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.05] pointer-events-none select-none overflow-hidden">
        <svg className="w-[150%] h-[150%] -rotate-12 -translate-y-1/4" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 100H1000M0 200H1000M0 300H1000M0 400H1000M0 500H1000M0 600H1000M0 700H1000M0 800H1000M0 900H1000" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="10 10"/>
          <path d="M100 0V1000M200 0V1000M300 0V1000M400 0V1000M500 0V1000M600 0V1000M700 0V1000M800 0V1000M900 0V1000" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="10 10"/>
        </svg>
      </div>

      <div className="container-custom px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="mb-8 lg:mb-12">
              <h2 className="text-2xl md:text-4xl lg:text-6xl font-extrabold text-white mb-6 lg:mb-8 tracking-tight leading-[1.1]">
                Let's <span className="text-brand-accent italic font-light">Connect</span>
              </h2>
              <p className="text-base md:text-xl text-slate-400 leading-relaxed font-medium border-l-4 border-brand-accent pl-6 max-w-xl">
                Start a conversation about your technical future. Our experts are ready to build solutions that scale with your vision.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 012-2V7a2 2 0 01-2-2H5a2 2 0 01-2 2v10a2 2 0 012 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-500 mb-0.5">Email Strategy</h3>
                  <p className="text-base font-bold text-white">connect@itsolutions.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-white transition-all duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[9px] uppercase tracking-[0.3em] font-black text-slate-500 mb-0.5">Global HQ</h3>
                  <p className="text-base font-bold text-white">123 Tech Plaza, San Jose, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand-accent/20 to-transparent blur-3xl rounded-full -z-10"></div>
            
            <div className="bg-white/5 backdrop-blur-xl p-6 md:p-12 rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl">
              <form className="space-y-6 md:space-y-8">
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-500 pl-1">Identity</label>
                    <input
                      type="text"
                      className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-white placeholder:text-slate-600 text-sm"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-500 pl-1">Channel</label>
                    <input
                      type="email"
                      className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-white placeholder:text-slate-600 text-sm"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] uppercase tracking-[0.2em] font-black text-slate-500 pl-1">Inquiry</label>
                  <textarea
                    rows="4"
                    className="w-full px-5 py-3.5 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-white placeholder:text-slate-600 text-sm"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 md:py-5 text-[11px] font-black text-white bg-brand-accent rounded-xl md:rounded-2xl shadow-lg shadow-brand-accent/20 hover:scale-[1.02] active:scale-95 transition-all uppercase tracking-[0.3em]"
                >
                  Initiate Connection
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
