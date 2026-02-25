const About = () => {
  const stats = [
    { label: 'Projects Delivered', value: '50+' },
    { label: 'Industries Served', value: '10+' },
    { label: 'Years Experience', value: '5+' },
  ];

  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Who We Are</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              We are a technology-driven IT solutions company focused on delivering scalable software and infrastructure solutions for businesses.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our team of experts combines technical excellence with business acumen to create value through digital transformation. We believe in building long-term partnerships with our clients.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                Meet the Team
              </button>
              <button className="btn-outline border-slate-200 text-slate-700 hover:border-brand-accent hover:text-white">
                Our Mission
              </button>
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
