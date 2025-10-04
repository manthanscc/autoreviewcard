import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Star,
  Users,
  Award,
  Clock,
  Rocket,
  ArrowRight,
  Play,
} from "lucide-react";

interface HeroPageProps {
  isVisible: boolean;
  scrollToContact: () => void;
}

const stats = [
  {
    icon: Star,
    value: "50,000+",
    label: "Reviews Generated",
    color: "text-yellow-500",
  },
  {
    icon: Users,
    value: "2,500+",
    label: "Active Users",
    color: "text-blue-500",
  },
  {
    icon: Award,
    value: "4.9",
    label: "Average Rating",
    color: "text-green-500",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Support",
    color: "text-purple-500",
  },
];

export const Heropage: React.FC<HeroPageProps> = ({
  isVisible,
}) => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact-form');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-x"></div>
        
        {/* Responsive Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-64 md:h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-10 md:py-12 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Badge - Responsive */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 animate-fade-in-up">
            <Rocket className="w-4 h-4 text-yellow-400" />
            <span className="text-xs sm:text-sm font-medium">
              Trusted by 2,500+ businesses worldwide
            </span>
          </div>

          {/* Heading - Responsive Text Sizes */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight animate-fade-in-up animation-delay-200 px-2">
            Get More 5-Star Google Reviews
            <br className="hidden sm:block" />
            <span className="block sm:inline"> </span>
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
              Effortlessly with AI
            </span>
          </h1>

          {/* Description - Responsive Text */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 md:mb-12 text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400 px-4">
            Boost credibility, attract new customers, and grow your business
            reputation without asking customers manually. Our AI-powered QR
            codes make it effortless.
          </p>

          {/* CTA Buttons - Fully Responsive */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-14 md:mb-16 animate-fade-in-up animation-delay-600 px-4">
            <button
              onClick={handleGetStarted}
              className="group relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg overflow-hidden focus:outline-none focus:ring-4 focus:ring-orange-400/40 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              <span className="relative flex items-center justify-center gap-2">
                <span className="hidden sm:inline">Start Getting Reviews Today</span>
                <span className="sm:hidden">Get Started</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            <button className="group border-2 border-white/30 hover:bg-white/10 hover:border-white/50 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 backdrop-blur-sm w-full sm:w-auto">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
              </div>
              See Demo
            </button>
          </div>

          {/* Trust Signals - Enhanced Responsive Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto animate-fade-in-up animation-delay-800 px-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  {/* Gradient Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    <Icon
                      className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ${stat.color} mx-auto mb-1 sm:mb-2 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                    />
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">
                      {stat.value}
                    </div>
                    <div className="text-slate-400 text-[10px] sm:text-xs md:text-sm">
                      {stat.label}
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div
                    className={`absolute bottom-0 left-0 h-0.5 ${stat.color.replace(
                      "text-",
                      "bg-"
                    )} w-0 group-hover:w-full transition-all duration-500 rounded-full`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on Mobile */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 animate-pulse">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-4 animate-bounce-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Heropage;
