const About = () => {
  const stats = [
    { label: 'Projects Delivered', value: '50+' },
    { label: 'Industries Served', value: '10+' },
    { label: 'Years Experience', value: '5+' },
  ];

  const features = [
    'Custom Software Development',
    'Cloud Infrastructure Management',
    'Data Analytics & AI Solutions',
    'Cybersecurity Consulting',
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-blue-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-6">
              Who <span className="text-brand-accent">We Are</span>
            </h2>
            <p className="text-base text-slate-600 mb-8 leading-relaxed">
              Based in the heart of Silicon Valley, IT Solutions has been a pioneer in 
              delivering enterprise-grade technology services.
            </p>
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-brand-accent/10 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-brand-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-lg font-medium text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border border-slate-100 flex flex-col items-center justify-center text-center ${
                  index === 0 ? 'bg-white shadow-xl sm:col-span-2 md:col-span-1 md:row-span-2' : 'bg-white'
                }`}
              >
                <span className="text-4xl md:text-5xl font-extrabold text-brand-accent mb-2">{stat.value}</span>
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
            <div className="p-8 bg-brand-accent rounded-2xl flex flex-col items-center justify-center text-center text-white">
              <span className="text-3xl font-bold mb-1">Global</span>
              <span className="text-sm font-medium opacity-80">Presence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
