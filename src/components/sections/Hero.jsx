import heroBg from '../../pica/photo-1531973576160-7125cd663d86.avif';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-900 text-left">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-xl text-left space-y-6 lg:space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.2] lg:leading-[1.1]">
            Innovative IT <br />
            <span className="text-brand-accent italic font-medium">Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-white max-w-lg leading-relaxed font-medium">
            We provide software development, mobile applications, system integration, and security solutions tailored for modern enterprises.
          </p>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <a 
          href="#services" 
          className="flex flex-col items-center group transition-colors duration-300"
          aria-label="Scroll to Services"
        >
          <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-accent group-hover:text-brand-accent text-white transition-all duration-300 animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
