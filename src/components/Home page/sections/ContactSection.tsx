import React from "react";
import { Mail, Phone, MessageCircle, MapPin, ArrowRight } from "lucide-react";

const ContactSection: React.FC = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team directly",
      value: "+91 94264 79677",
      action: "tel:+919426479677",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Quick support via WhatsApp",
      value: "Chat Now",
      action: "https://wa.me/9426479677",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us your questions",
      value: "hello@sccinfotech.com",
      action: "mailto:hello@sccinfotech.com",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come see us in person",
      value: "Surat, Gujarat",
      action: "#",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-white to-slate-50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <MessageCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 animate-fade-in-up animation-delay-200">
            Ready to Get{" "}
            <span className="text-green-600">Started?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Contact us today and start collecting more 5-star reviews
            with our AI-powered platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.action}
                target={method.action.startsWith('http') ? '_blank' : '_self'}
                rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                className={`group ${
                  method.bgColor
                } rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-slide-in-up animation-delay-${
                  (index + 1) * 100
                } block`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                  {method.title}
                </h3>
                <p className="text-slate-600 mb-3 group-hover:text-slate-700 transition-colors">
                  {method.description}
                </p>
                <div className="flex items-center gap-2 text-slate-900 font-medium group-hover:text-blue-600 transition-colors">
                  <span>{method.value}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Free Trial Today
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Join 2,500+ businesses already collecting more reviews with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Free Trial
              </button>
              <button className="border-2 border-white/30 hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;