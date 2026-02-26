import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';

const BulkOrder = () => {
  return (
    <div className="min-h-screen bg-brand-bg flex flex-col pt-20">
      <Header />
      <main className="flex-grow py-12 lg:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mb-16">
            <Link to="/order-goods" className="inline-flex items-center text-brand-accent font-bold mb-8 hover:underline">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Catalog
            </Link>
            <h1 className="text-2xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Bulk <span className="text-brand-accent italic font-light underline decoration-brand-accent/30 underline-offset-8">Order Request</span>
            </h1>
            <p className="text-[13px] md:text-base text-slate-400 font-medium border-l-2 border-brand-accent/30 pl-6 leading-relaxed max-w-2xl">
              Processing large-scale requirements for your enterprise. Fill out the details below and our dedicated bulk accounts team will contact you.
            </p>
          </div>

          <div className="max-w-3xl">
            <div className="bg-white/5 backdrop-blur-3xl rounded-[2.5rem] border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
               
               <form className="relative z-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 pl-1">Name</label>
                    <input type="text" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-white" placeholder="Contact Name" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 pl-1">Organization</label>
                    <input type="text" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-white" placeholder="Company Name" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 pl-1">Work Email</label>
                    <input type="email" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-white" placeholder="email@company.com" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 pl-1">Estimated Quantity</label>
                    <input type="number" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-white" placeholder="e.g., 50+" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 pl-1">Bulk Requirements Details</label>
                  <textarea rows="6" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-brand-accent focus:border-transparent outline-none transition-all text-white resize-none" placeholder="Describe the items, specifications, and delivery timelines required for this bulk order..."></textarea>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full py-5 bg-brand-accent text-white font-black rounded-2xl hover:bg-brand-accent/90 transition-all shadow-xl shadow-brand-accent/20 active:scale-[0.98] uppercase tracking-widest text-sm">
                    Submit Bulk Enquiry
                  </button>
                </div>
               </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BulkOrder;
