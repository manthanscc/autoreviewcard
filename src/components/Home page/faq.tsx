import React, { useState } from "react";
import {
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
  HelpCircle,
  CheckCircle,
} from "lucide-react";

const faqs = [
  {
    question: "Will it work with my Google Business account?",
    answer:
      "Yes, our platform seamlessly integrates with any Google Business Profile. We comply with all Google policies and guidelines to ensure your reviews are legitimate and safe.",
    category: "Integration",
  },
  {
    question: "How does the AI write review prompts?",
    answer:
      "Our AI analyzes your business type, customer interaction, and industry best practices to generate personalized, natural-sounding review requests that feel authentic to your customers.",
    category: "AI Technology",
  },
  {
    question: "Is this compliant with Google's review policies?",
    answer:
      "Absolutely. We strictly follow Google's review policies. We never incentivize reviews or violate terms of service. Our system simply makes it easier for satisfied customers to leave genuine feedback.",
    category: "Compliance",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "Setup takes less than 5 minutes. Once you sign up, you'll get your custom QR code immediately and can start collecting reviews right away.",
    category: "Getting Started",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer 24/7 customer support via WhatsApp, email, and live chat. Our team is always ready to help you maximize your review collection success.",
    category: "Support",
  },
];

export const FAQSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Diagonal Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Got Questions?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our AI-powered review system.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className={`group relative animate-fade-in-up animation-delay-${
                  (index + 1) * 100
                }`}
              >
                {/* Glow Effect on Hover */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-10 blur transition-opacity duration-500 ${
                    isOpen ? "opacity-20" : ""
                  }`}
                ></div>

                <div
                  className={`relative bg-white backdrop-blur-xl border rounded-2xl overflow-hidden transition-all duration-500 shadow-sm hover:shadow-md ${
                    isOpen
                      ? "border-blue-300 shadow-lg shadow-blue-100"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {/* Top Accent Bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left transition-transform duration-500 ${
                      isOpen ? "scale-x-100" : "scale-x-0"
                    }`}
                  ></div>

                  {/* Question Button */}
                  <button
                    className="w-full text-left p-6 flex items-start gap-4 hover:bg-slate-50/50 transition-all duration-300"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 mt-1">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                          isOpen
                            ? "bg-gradient-to-br from-blue-500 to-purple-500 rotate-0 scale-110 shadow-lg shadow-blue-200"
                            : "bg-slate-100 rotate-0 scale-100"
                        }`}
                      >
                        {isOpen ? (
                          <CheckCircle className="w-5 h-5 text-white" />
                        ) : (
                          <HelpCircle className="w-5 h-5 text-slate-500" />
                        )}
                      </div>
                    </div>

                    {/* Question Text */}
                    <div className="flex-1 min-w-0">
                      {/* Category Badge */}
                      <div className="mb-2">
                        <span
                          className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full transition-colors ${
                            isOpen
                              ? "bg-blue-100 text-blue-700 border border-blue-200"
                              : "bg-slate-100 text-slate-600 border border-slate-200"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isOpen ? "bg-blue-500" : "bg-slate-400"
                            }`}
                          ></span>
                          {faq.category}
                        </span>
                      </div>

                      <span
                        className={`font-semibold text-lg pr-4 transition-colors ${
                          isOpen
                            ? "text-slate-900"
                            : "text-slate-700 group-hover:text-slate-900"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Chevron Icon */}
                    <div className="flex-shrink-0">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                          isOpen
                            ? "bg-blue-50 rotate-180"
                            : "bg-slate-50 rotate-0 group-hover:bg-slate-100"
                        }`}
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-colors ${
                            isOpen
                              ? "text-blue-600"
                              : "text-slate-500 group-hover:text-slate-700"
                          }`}
                        />
                      </div>
                    </div>
                  </button>

                  {/* Answer */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        id={`faq-answer-${index}`}
                        className="px-6 pb-6 pl-20"
                      >
                        {/* Decorative Line */}
                        <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>

                        <p className="text-slate-600 leading-relaxed">
                          {faq.answer}
                        </p>

                        {/* Helpful Badge */}
                        <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span>Was this helpful?</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

  
      </div>

      {/* Enhanced Custom CSS */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -50px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(50px, 50px) scale(1.05);
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-blob {
          animation: blob 20s infinite ease-in-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animation-delay-100 { animation-delay: 100ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-700 { animation-delay: 700ms; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </section>
  );
};

export default FAQSection;
