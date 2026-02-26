import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What IT services do you offer?',
      answer: 'We offer a wide range of services including custom software development, mobile application development (iOS/Android), systems integration, ERP/CRM implementation, and IT hardware procurement.',
    },
    {
      question: 'How long does a typical software project take?',
      answer: 'Project timelines vary based on complexity. A typical MVP (Minimum Viable Product) takes 8-12 weeks, while larger enterprise solutions may take 6 months or more.',
    },
    {
      question: 'Do you provide ongoing support after deployment?',
      answer: 'Yes, we provide several maintenance and support packages to ensure your systems remain up-to-date, secure, and performant.',
    },
    {
      question: 'Can you integrate with our existing business systems?',
      answer: 'Absolutely. We specialize in system integration, connecting disparate software like ERPs, CRMs, and payment gateways into a unified workflow.',
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'Our core expertise lies in Healthcare, Education, Retail, Manufacturing, and Corporate sectors, but we have the flexibility to adapt to any business environment.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-brand-bg border-t border-white/5">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-sm md:text-base text-slate-400">
            Find answers to common questions about our services and delivery process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-white/5 rounded-xl overflow-hidden bg-white/5">
              <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-bold text-white">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    activeIndex === index ? 'rotate-180 text-brand-accent' : 'text-slate-500'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
              >
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
