import React, { useState } from "react";
import { MessageCircle, ChevronDown, ChevronUp } from "lucide-react";

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
      "Absolutely. We strictly follow Google’s review policies. We never incentivize reviews or violate terms of service. Our system simply makes it easier for satisfied customers to leave genuine feedback.",
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
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Gradient Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-80 h-80 bg-pink-300/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-indigo-300/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Floating Dots Pattern */}
        <div
          className="absolute top-24 right-32 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-40 right-48 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
        ></div>
        <div
          className="absolute top-60 right-24 w-2 h-2 bg-pink-400 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-32 left-32 w-3 h-3 bg-indigo-400 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "0.3s", animationDuration: "3.2s" }}
        ></div>
        <div
          className="absolute bottom-48 left-24 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "0.8s", animationDuration: "3.8s" }}
        ></div>
        <div
          className="absolute top-1/3 left-40 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "0.2s", animationDuration: "3.6s" }}
        ></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        {/* Animated Gradient Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20 animate-[shimmer_3s_ease-in-out_infinite]"></div>
        <div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20 animate-[shimmer_3s_ease-in-out_infinite]"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Vertical Lines */}
        <div
          className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-blue-300/20 to-transparent"
          style={{ left: "15%" }}
        ></div>
        <div
          className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-purple-300/20 to-transparent"
          style={{ left: "85%" }}
        ></div>

        {/* Radial Gradient Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] bg-gradient-radial from-white/50 via-transparent to-transparent rounded-full"></div>

        {/* Spotlight Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-blue-200/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-purple-200/20 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
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
              className={`group bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 animate-slide-in-up animation-delay-${
                (index + 1) * 100
              }`}
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-50/50 transition-all duration-300"
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
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes for shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0%, 100% {
            opacity: 0.2;
            transform: translateX(-100%);
          }
          50% {
            opacity: 0.5;
            transform: translateX(100%);
          }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;
