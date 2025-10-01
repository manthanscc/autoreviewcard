import React from "react";
import { Globe, Stethoscope, Scissors, Hotel, Dumbbell, Utensils, Car, Building, Coffee } from "lucide-react";

const IndustriesSection: React.FC = () => {
  const industries = [
    {
      name: "Healthcare",
      icon: Stethoscope,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      name: "Salons & Spas",
      icon: Scissors,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
    },
    {
      name: "Hotels",
      icon: Hotel,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      name: "Gyms",
      icon: Dumbbell,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      name: "Restaurants",
      icon: Utensils,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      name: "Auto Shops",
      icon: Car,
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
    },
    {
      name: "Offices",
      icon: Building,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
    },
    {
      name: "Cafes",
      icon: Coffee,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-blue-50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <Globe className="w-4 h-4" />
            <span className="text-sm font-medium">Industries</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 animate-fade-in-up animation-delay-200">
            Trusted by Businesses{" "}
            <span className="text-blue-600">Across Industries</span>
          </h2>
          <p className="text-xl text-slate-600 animate-fade-in-up animation-delay-400">
            Our AI-powered review system works perfectly for any business that
            values customer feedback.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className={`group ${
                  industry.bgColor
                } rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-slide-in-up animation-delay-${
                  (index + 1) * 100
                }`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3
                  className={`font-bold text-center ${industry.textColor} group-hover:scale-105 transition-transform`}
                >
                  {industry.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;