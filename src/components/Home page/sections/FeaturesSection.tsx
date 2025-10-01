import React from "react";
import { Sparkles, Smartphone, Shield, BarChart3, Clock, Zap } from "lucide-react";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Review Writing",
      description:
        "Smart AI crafts personalized review prompts for each customer interaction",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Optimized for mobile devices where your customers spend most of their time",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Shield,
      title: "Safe & Compliant",
      description: "100% compliant with Google policies and review guidelines",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      icon: BarChart3,
      title: "Performance Dashboard",
      description:
        "Track review requests, response rates, and business growth metrics",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support via WhatsApp, email, and live chat",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description:
        "Get your QR code and start collecting reviews in under 5 minutes",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-white to-slate-50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 animate-fade-in-up animation-delay-200">
            Everything You Need to{" "}
            <span className="text-blue-600">Collect Reviews</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Powerful features designed to make review collection effortless
            and effective for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group ${
                  feature.bgColor
                } rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-slide-in-up animation-delay-${
                  (index + 1) * 100
                }`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;