import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-blue-50 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 animate-fade-in-up animation-delay-200">
            Frequently Asked{" "}
            <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-slate-600 animate-fade-in-up animation-delay-400">
            Everything you need to know about our AI-powered review system.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-up animation-delay-${
                (index + 1) * 100
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-50 rounded-2xl transition-colors"
              >
                <span className="font-semibold text-slate-900 text-lg pr-4">
                  {faq.question}
                </span>
                {openFaq === index ? (
                  <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {openFaq === index && (
                <div className="px-8 pb-6">
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;