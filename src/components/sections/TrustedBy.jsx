const TrustedBy = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="container-custom">
        <h2 className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-10">
          Trusted By Industry Leaders
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex justify-center">
              <div className="h-12 w-32 bg-slate-200 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
