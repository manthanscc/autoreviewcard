import React from 'react';
import { QrCode, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="animate-fade-in-up animation-delay-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <QrCode className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">AI Reviews</h3>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Helping businesses get more 5-star Google reviews with
              AI-powered QR codes. Trusted by 2,500+ businesses worldwide.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label={`Social media ${index + 1}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-200">
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Features", "Pricing", "Industries", "About Us"].map(
                (link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-0 h-0.5 bg-blue-500 group-hover:w-4 transition-all duration-300"></span>
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="animate-fade-in-up animation-delay-300">
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              {[
                "Help Center",
                "Contact Us",
                "WhatsApp Support",
                "Live Chat",
                "Documentation",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-purple-500 group-hover:w-4 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up animation-delay-400">
            <h4 className="font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-slate-400 mb-6">
              Get tips on building your online reputation and growing your
              business.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-slate-600 text-white placeholder-slate-400 outline-none"
              />
              <button
                className="px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                aria-label="Subscribe"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            © 2025 AI Reviews. All rights reserved. Made with ❤️ for
            businesses worldwide.
          </p>
          <div className="flex gap-8 text-slate-400">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (link, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                >
                  {link}
                </a>
              )
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;