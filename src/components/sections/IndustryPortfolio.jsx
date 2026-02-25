const IndustryPortfolio = () => {
  const industries = [
    { name: 'Education', description: 'Learning management systems and digital classrooms.' },
    { name: 'Healthcare', description: 'Patient records and hospital management software.' },
    { name: 'Retail', description: 'E-commerce platforms and POS integrations.' },
    { name: 'Manufacturing', description: 'Supply chain management and IoT monitoring.' },
    { name: 'Corporate', description: 'Internal portals and workflow automation.' },
  ];

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
          <p className="text-slate-600">
            We deliver industry-specific solutions that address unique challenges and drive growth across various sectors.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {industries.map((item) => (
            <div
              key={item.name}
              className="p-6 bg-slate-50 border border-slate-100 rounded-xl hover:bg-brand-primary hover:text-white transition-all duration-300 group cursor-default"
            >
              <h3 className="text-lg font-bold mb-2 transition-colors">{item.name}</h3>
              <p className="text-sm text-slate-500 group-hover:text-blue-100 transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryPortfolio;
