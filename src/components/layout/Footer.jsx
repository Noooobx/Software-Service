const Footer = () => {
  const sections = [
    {
      title: 'Hire',
      links: ['Software Developers', 'App Developers', 'UI/UX Designers', 'System Integrators'],
    },
    {
      title: 'User Guides',
      links: ['Deployment Guide', 'API Documentation', 'System Specs', 'Troubleshooting'],
    },
    {
      title: 'About Us',
      links: ['Our Story', 'Team', 'Careers', 'Latest News'],
    },
    {
      title: 'Quick Links',
      links: ['Services', 'Case Studies', 'Pricing', 'FAQ'],
    },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-brand-accent transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-800">
          <div>
            <h3 className="text-white font-semibold mb-4">Locations</h3>
            <p className="text-sm">Main Office: Silicon Valley, CA</p>
            <p className="text-sm">Regional Hub: London, UK</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-sm">Phone: +1 (555) 000-0000</p>
            <p className="text-sm">Email: info@itsolutions.com</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="bg-slate-800 border-none rounded-l-lg px-4 py-2 text-sm focus:ring-1 focus:ring-brand-accent w-full"
              />
              <button className="bg-brand-accent text-white px-4 py-2 rounded-r-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-xs">© {new Date().getFullYear()} IT Solutions. All rights reserved.</p>
          <div className="flex space-x-6 text-xs">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
