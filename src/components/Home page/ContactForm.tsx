import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MessageCircle,
  Sparkles,
  Star,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Quick Setup",
    desc: "Get started in under 5 minutes",
  },
  {
    icon: Clock,
    title: "Save Time",
    desc: "Automate review collection",
  },
  {
    icon: Star,
    title: "More Reviews",
    desc: "Increase reviews by 10x",
  },
  {
    icon: Shield,
    title: "Fully Secure",
    desc: "Enterprise-level security",
  },
];

export const ContactForm: React.FC = () => {
  const navigate = useNavigate();

  const handleStartNow = () => {
    navigate("/contact-form");
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Design */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-purple-600/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.07]"></div>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_3s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" style={{ animationDelay: "1.5s" }}></div>
        <Sparkles className="absolute top-12 right-10 w-6 h-6 text-blue-300/40 animate-pulse" />
        <Sparkles
          className="absolute bottom-16 left-16 w-5 h-5 text-purple-300/40 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <Sparkles
          className="absolute top-1/3 left-1/4 w-4 h-4 text-pink-300/40 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30 rounded-full px-6 py-3 mb-8 backdrop-blur-sm shadow-lg relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/20 to-green-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <MessageCircle className="w-5 h-5 animate-pulse relative z-10" />
            <span className="text-sm font-bold relative z-10">Contact Us</span>
            <Zap className="w-4 h-4 text-yellow-400 relative z-10" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
            Ready to Get More{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                5-Star Reviews?
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></span>
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Join 2,500+ businesses growing with AI-powered review cards.
          </p>
        </div>

        {/* Main CTA Card - Centered */}
        <div className="max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10 md:p-12 shadow-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 opacity-50"></div>
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>

            <div className="relative">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Star className="w-10 h-10 text-white" />
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
                Start Collecting Reviews Today
              </h3>
              <p className="text-lg text-slate-300 mb-10 text-center max-w-2xl mx-auto">
                Fill out a quick form and we'll contact you on WhatsApp within
                minutes. Get your personalized QR review card instantly.
              </p>

              {/* Features Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-10">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl group/feature hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-12 h-12 bg-green-500/10 border border-green-500/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover/feature:scale-110 group-hover/feature:rotate-12 transition-all duration-300">
                        <Icon className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-slate-400 text-sm">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <button
                onClick={handleStartNow}
                className="group/btn relative w-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl flex items-center justify-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>
                <MessageCircle className="w-7 h-7 relative group-hover/btn:rotate-12 transition-transform" />
                <span className="relative">Fill the Form & Get Started</span>
                <ArrowRight className="w-7 h-7 relative group-hover/btn:translate-x-1 transition-transform" />
              </button>

              <p className="text-sm text-slate-400 text-center mt-5">
                🔒 We'll contact you on WhatsApp within 5 minutes
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section - Stats & WhatsApp */}
        <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up animation-delay-600">
          {/* WhatsApp CTA */}
          <div className="relative bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 rounded-3xl p-8 shadow-xl group hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-green-500/20 border border-green-500/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-green-400 animate-pulse" />
                </div>
                <h4 className="text-2xl font-bold text-white">
                  Instant Support
                </h4>
              </div>
              <p className="text-slate-300 mb-6 text-lg">
                Get your QR code in under{" "}
                <span className="text-green-400 font-bold">5 minutes</span>!
              </p>
              <button
                onClick={() =>
                  window.open("https://wa.me/9426479677", "_blank")
                }
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl hover:scale-105 transition-all duration-300">
            <h4 className="text-xl font-bold text-white mb-6 text-center">Trusted By Thousands</h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  value: "2,500+",
                  label: "Happy Clients",
                  color: "text-green-400",
                  bg: "bg-green-500/10",
                  border: "border-green-500/30"
                },
                {
                  value: "50K+",
                  label: "Reviews",
                  color: "text-blue-400",
                  bg: "bg-blue-500/10",
                  border: "border-blue-500/30"
                },
                {
                  value: "4.9",
                  label: "Rating",
                  color: "text-yellow-400",
                  bg: "bg-yellow-500/10",
                  border: "border-yellow-500/30"
                },
                {
                  value: "24/7",
                  label: "Support",
                  color: "text-purple-400",
                  bg: "bg-purple-500/10",
                  border: "border-purple-500/30"
                },
              ].map((badge, i) => (
                <div
                  key={i}
                  className={`p-4 ${badge.bg} border ${badge.border} rounded-xl hover:scale-110 transition-all duration-300 group/badge`}
                >
                  <div className={`text-3xl font-bold ${badge.color} mb-1 group-hover/badge:scale-110 transition-transform`}>
                    {badge.value}
                  </div>
                  <div className="text-xs text-slate-400">{badge.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;