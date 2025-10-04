import React from 'react';
import { QrCode, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="animate-fade-in-up animation-delay-100">
            <div className="flex items-center gap-3 mb-6">
                <div>
                <img src="/logoW.png" alt="AI Reviews logo" className="w-16 h-16 object-contain" />
                </div>
              <h3 className="text-2xl font-bold">AI Reviews</h3>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Helping businesses get more 5-star Google reviews with
              AI-powered QR codes. Trusted by 2,500+ businesses worldwide.
            </p>
            <div className="mt-6">
              <a
              href="https://www.sccinfotech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-xl border border-slate-700/60 bg-slate-800/50 px-4 py-3 transition-all duration-300 hover:border-blue-500/60 hover:bg-slate-800/80"
              >
              <div className="relative">
                <span className="absolute -inset-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 blur-lg transition group-hover:opacity-20"></span>
                <div>
                  <img src="/scc.png" alt="SCC Infotech logo" className="w-14 h-14 object-contain" />
                </div>
              </div>
              <div className="leading-tight">
                <div className="text-xs uppercase tracking-wider text-slate-400">Powered by</div>
                <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                SCC Infotech
                </div>
              </div>
              <Send className="w-4 h-4 text-slate-400 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
              </a>
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
            <h4 className="font-bold text-lg mb-6">Social Media</h4>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-slate-800 border border-slate-700 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label={`Social media ${index + 1}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-600 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 mb-4 md:mb-0">
            © 2025 AI Reviews. All rights reserved. Made with ❤️ for
            businesses worldwide.
          </p>
          <div className="flex gap-8 text-slate-400">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              to="/cookie-policy"
              className="hover:text-white transition-colors duration-300"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;