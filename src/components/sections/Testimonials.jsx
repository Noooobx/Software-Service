const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Smith',
      company: 'TechCorp Systems',
      text: 'The software solution provided by IT Solutions has revolutionized our internal workflows. Scalable, efficient, and user-friendly.',
      rating: 5,
    },
    {
      name: 'Sarah Johnson',
      company: 'Global Health Inc.',
      text: 'Their expertise in healthcare systems integration helped us achieve full compliance within months. Highly professional team.',
      rating: 5,
    },
    {
      name: 'Michael Brown',
      company: 'RetailEase',
      text: 'The mobile app they developed for us has seen incredible adoption from our customers. Highly recommend their development team.',
      rating: 4,
    },
    {
      name: 'Emily Davis',
      company: 'SafeGuard Sec.',
      text: 'Their security infrastructure implementation was flawless. We feel much more confident in our digital assets now.',
      rating: 5,
    },
    {
      name: 'David Wilson',
      company: 'EduFlow',
      text: 'The systems architecture they designed for our platform handles 10x more traffic than before. Exceptional engineering.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-brand-bg overflow-hidden">
      <div className="container-custom">
        {/* Header with Stats & CTA */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-12">
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              What Our <span className="text-brand-accent italic font-medium">Partners Say</span>
            </h2>
            <p className="text-sm md:text-lg text-slate-400 font-medium">
              We've helped over 50+ enterprises transform their technical infrastructure. 
              Here is why they trust us.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-end bg-white/5 p-10 lg:p-12 rounded-3xl border border-white/5 shadow-sm w-full lg:w-auto">
            <div className="flex items-center space-x-3 mb-4">
              <svg className="h-6 w-auto" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.07-3.71 1.07-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.11s.13-1.45.35-2.11V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.83z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span className="text-xl font-bold text-white">Google Reviews</span>
            </div>
            <div className="flex items-center space-x-6 mb-8">
              <span className="text-3xl md:text-5xl font-black text-white">4.8</span>
              <div className="flex flex-col">
                <div className="flex text-yellow-500 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">120+ verified reviews</span>
              </div>
            </div>
            <button className="w-full sm:w-auto bg-brand-primary text-white px-10 py-4 rounded-xl font-bold text-sm hover:bg-brand-accent transition-all shadow-md active:scale-95 uppercase tracking-widest">
              Write a Review
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Slow Marquee */}
      <div className="relative group flex overflow-hidden">
        <div className="flex animate-marquee-slow whitespace-nowrap py-10">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="flex-shrink-0 w-[400px] mx-6 p-8 bg-white/5 border border-white/5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 font-medium italic mb-6 break-words whitespace-normal leading-relaxed">
                "{t.text}"
              </p>
              <div>
                <h4 className="font-bold text-brand-primary">{t.name}</h4>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Gradient Masks - Responsive */}
        <div className="absolute inset-y-0 left-0 w-16 lg:w-32 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 lg:w-32 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Testimonials;
