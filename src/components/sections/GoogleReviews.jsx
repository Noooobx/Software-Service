const GoogleReviews = () => {
  return (
    <section id="reviews" className="py-12 bg-white">
      <div className="container-custom text-center border-y border-slate-100 py-12">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" alt="Google" className="h-6" />
            <span className="text-xl font-bold text-slate-900">Reviews</span>
          </div>
          <div className="flex items-center justify-center space-x-4 mb-2">
            <span className="text-5xl font-extrabold text-slate-900">4.8</span>
            <div className="flex flex-col items-start">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-slate-500 font-medium">Based on 120+ reviews</span>
            </div>
          </div>
          <button className="mt-4 text-sm font-semibold text-brand-primary hover:underline">
            View all Google reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
