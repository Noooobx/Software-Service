import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';

const ProductCard = ({ name, price, description, image }) => (
  <div className="flex-shrink-0 w-[240px] md:w-full group snap-start">
    <div className="relative aspect-[4/5] mb-3 overflow-hidden rounded-2xl bg-white/[0.03] border border-white/10 transition-all duration-500 group-hover:border-brand-accent/50 group-hover:shadow-[0_0_20px_rgba(79,70,229,0.15)]">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover grayscale-[0.3] contrast-[1.1] transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-brand-bg/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
      
      <div className="absolute top-3 right-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <div className="p-1.5 bg-brand-accent rounded-full text-white shadow-lg">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>
    </div>
    
    <div className="px-1">
      <div className="flex justify-between items-start mb-0.5 text-white">
        <h3 className="font-bold text-[14px] tracking-tight leading-tight">{name}</h3>
        <span className="text-[13px] font-black text-brand-accent">{price}</span>
      </div>
      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{description}</p>
    </div>
  </div>
);

const ProductSection = ({ title, products }) => (
  <div className="mb-16">
    <h2 className="text-lg md:text-2xl font-extrabold text-white mb-6 border-l-4 border-brand-accent pl-4">{title}</h2>
    <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 overflow-x-auto md:overflow-visible gap-5 pb-6 scrollbar-dotted snap-x snap-mandatory">
      {products.map((product, idx) => (
        <ProductCard key={idx} {...product} />
      ))}
    </div>
  </div>
);

const OrderGoods = () => {
  const itGoods = [
    { name: 'EliteBook G9', price: '₹1,09,900', description: 'Enterprise Laptop', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800' },
    { name: 'ThinkCentre M70', price: '₹74,500', description: 'Compact Desktop', image: 'https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800' },
    { name: 'ProDisplay 27"', price: '₹41,400', description: '4K Monitor', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800' },
    { name: 'Mechanical Keypad', price: '₹10,700', description: 'Input Device', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800' },
    { name: 'Wireless Mouse X1', price: '₹7,400', description: 'Ergonomic', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=800' },
    { name: 'Docking Station Thunderbolt', price: '₹20,600', description: '4-Port Hub', image: 'https://images.unsplash.com/photo-1586210579191-33b45e38fa2c?q=80&w=800' },
    { name: 'ZBook Fury', price: '₹2,07,400', description: 'Workstation', image: 'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=800' },
    { name: 'UltraSharp Curved', price: '₹74,600', description: 'Ultrawide', image: 'https://images.unsplash.com/photo-1552831388-6a0b35ad5814?q=80&w=800' },
    { name: 'Studio Speakers', price: '₹33,100', description: 'Audio System', image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=800' },
    { name: 'External SSD 2TB', price: '₹16,500', description: 'Storage', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800' },
  ];

  const printers = [
    { name: 'LaserJet Pro M404', price: '₹28,900', description: 'Monochrome Laser', image: 'https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=800' },
    { name: 'DesignJet T230', price: '₹99,500', description: 'Large Format', image: 'https://images.unsplash.com/photo-1563823251941-b9989d1e8d97?q=80&w=800' },
    { name: 'EcoTank L3210', price: '₹18,900', description: 'Ink Tank', image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=800' },
    { name: 'Brother MFC-L2710', price: '₹18,100', description: 'Multi-function', image: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?q=80&w=800' },
    { name: 'Canon imageCLASS', price: '₹35,600', description: 'Color Laser', image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800' },
    { name: 'Epson WorkForce', price: '₹14,800', description: 'Office Inkjet', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800' },
    { name: 'Zebra GK420t', price: '₹40,500', description: 'Label Printer', image: 'https://images.unsplash.com/photo-1454165833222-7cd0f898124b?q=40&w=800' },
    { name: 'HP Neverstop', price: '₹22,300', description: 'Laser Tank', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800' },
    { name: 'Kyocera Ecosys', price: '₹33,100', description: 'Duplex Printer', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800' },
    { name: 'Ricoh MP C300', price: '₹2,40,600', description: 'Production Hub', image: 'https://images.unsplash.com/photo-1580214300325-13f5d5cc6ca4?q=80&w=800' },
  ];

  const hardware = [
    { name: 'Cisco ISR 4321', price: '₹1,24,000', description: 'Enterprise Router', image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800' },
    { name: 'Ubiquiti Dream Machine', price: '₹31,400', description: 'Network Hub', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?q=80&w=800' },
    { name: 'PowerEdge R640', price: '₹2,73,800', description: 'Rack Server', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?q=80&w=800' },
    { name: 'Netgear JS724', price: '₹24,800', description: 'Gigabit Switch', image: 'https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=800' },
    { name: 'APC Smart-UPS', price: '₹53,800', description: 'Power Backup', image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800' },
    { name: 'Synology DS920+', price: '₹45,500', description: 'NAS Storage', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?q=80&w=800' },
    { name: 'Western Digital HC550', price: '₹35,600', description: 'Enterprise HDD', image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800' },
    { name: 'Radeon Pro VII', price: '₹1,57,600', description: 'Workstation GPU', image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=800' },
    { name: 'Intel Xeon Scalable', price: '₹1,82,500', description: 'Server CPU', image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800' },
    { name: 'DDR4 Registered RAM', price: '₹13,200', description: 'ECC Memory', image: 'https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?q=80&w=800' },
  ];

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col pt-20 relative overflow-hidden">
      {/* Visual Enhancements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-brand-accent/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-brand-accent/10 blur-[150px] rounded-full -mr-64 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <Header />
      <main className="flex-grow py-12 lg:py-16 relative z-10">
        <div className="container-custom">
          <div className="max-w-4xl mb-12 lg:mb-16">
            <h1 className="text-2xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Order IT <span className="text-brand-accent italic font-light underline decoration-brand-accent/30 underline-offset-8">Goods</span>
            </h1>
            <p className="text-[13px] md:text-base text-slate-400 font-medium border-l-2 border-brand-accent/30 pl-6 leading-relaxed max-w-2xl">
              Precision hardware for modern enterprises. Explore our high-performance inventory and request custom specifications tailored to your workflow.
            </p>
          </div>

          <ProductSection title="Computers & Peripherals" products={itGoods} />
          <ProductSection title="Printers & Scanners" products={printers} />
          <ProductSection title="Network & Enterprise Hardware" products={hardware} />

          {/* Bulk Order CTA */}
          <div className="mt-24 mb-16 p-1 bg-gradient-to-r from-brand-accent to-purple-600 rounded-[2rem]">
            <div className="bg-brand-bg px-8 py-12 md:py-16 rounded-[1.9rem] flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ordering for a <span className="italic font-light">Large Team?</span></h2>
                <p className="text-slate-400 font-medium">Get exclusive enterprise pricing and dedicated account support for bulk hardware procurement.</p>
              </div>
              <Link to="/bulk-order" className="px-10 py-5 bg-white text-brand-bg font-black rounded-2xl hover:bg-slate-200 transition-all shadow-xl whitespace-nowrap uppercase tracking-widest text-sm">
                Order in Bulk
              </Link>
            </div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-16 rounded-[3rem] relative overflow-hidden">
              <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Custom <span className="text-brand-accent italic font-light">Enquiry</span></h2>
                  <p className="text-slate-400 font-medium mb-10 leading-relaxed text-lg">Specify your feature requirements and our technical team will build a tailored configuration for you.</p>
                  
                  <div className="space-y-4">
                    {['Feature specification focus', 'Bulk pricing options', 'Priority support'].map(item => (
                      <div key={item} className="flex items-center space-x-3 text-sm font-bold text-slate-500 uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input type="text" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-accent/50 outline-none transition-all text-white text-sm" placeholder="Name" />
                    <input type="email" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-accent/50 outline-none transition-all text-white text-sm" placeholder="Email" />
                  </div>
                  <textarea rows="4" className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-brand-accent/50 outline-none transition-all text-white resize-none text-sm" placeholder="Functionalities you need..."></textarea>
                  <button type="submit" className="w-full py-5 bg-brand-accent text-white font-black rounded-2xl hover:shadow-[0_0_20px_rgba(79,70,229,0.4)] transition-all uppercase tracking-widest text-sm">
                    Send Enquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderGoods;
