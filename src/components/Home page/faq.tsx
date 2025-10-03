import React, { useState } from 'react';
import { MessageCircle, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Will it work with my Google Business account?",
    answer:
      "Yes, our platform seamlessly integrates with any Google Business Profile. We comply with all Google policies and guidelines to ensure your reviews are legitimate and safe.",
  },
  {
    question: "How does the AI write review prompts?",
    answer:
      "Our AI analyzes your business type, customer interaction, and industry best practices to generate personalized, natural-sounding review requests that feel authentic to your customers.",
  },
  {
    question: "Is this compliant with Google's review policies?",
    answer:
      "Absolutely. We strictly follow Google's review policies. We never incentivize reviews or violate terms of service. Our system simply makes it easier for satisfied customers to leave genuine feedback.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "Setup takes less than 5 minutes. Once you sign up, you'll get your custom QR code immediately and can start collecting reviews right away.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer 24/7 customer support via WhatsApp, email, and live chat. Our team is always ready to help you maximize your review collection success.",
  },
];

export const FAQSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 animate-fade-in-up animation-delay-200">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-slate-600 animate-fade-in-up animation-delay-400">
            Everything you need to know about our AI-powered review system.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 animate-slide-in-up animation-delay-${
                (index + 1) * 100
              }`}
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-100 transition-all duration-300"
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-slate-900 text-lg pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-slate-500 group-hover:text-blue-600 transition-colors" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-slate-500 group-hover:text-blue-600 transition-colors" />
                  )}
                </div>
              </button>
              {openFaq === index && (
                <div 
                  id={`faq-answer-${index}`}
                  className="px-6 pb-6 animate-fade-in"
                >
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;


