import React from "react";
import {
  Globe,
  Stethoscope,
  Scissors,
  Hotel,
  Dumbbell,
  Utensils,
  Car,
  Building,
  Coffee,
  Sparkles,
} from "lucide-react";

const industries = [
  {
    name: "Healthcare",
    icon: Stethoscope,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
  },
  {
    name: "Salons & Spas",
    icon: Scissors,
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    textColor: "text-pink-600",
    borderColor: "border-pink-200",
  },
  {
    name: "Hotels",
    icon: Hotel,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    borderColor: "border-purple-200",
  },
  {
    name: "Gyms",
    icon: Dumbbell,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    borderColor: "border-green-200",
  },
  {
    name: "Restaurants",
    icon: Utensils,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    borderColor: "border-orange-200",
  },
  {
    name: "Auto Shops",
    icon: Car,
    color: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    borderColor: "border-red-200",
  },
  {
    name: "Offices",
    icon: Building,
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-600",
    borderColor: "border-indigo-200",
  },
  {
    name: "Cafes",
    icon: Coffee,
    color: "from-amber-500 to-amber-600",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
    borderColor: "border-amber-200",
  },
];

export const Industries: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Gradient Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-80 h-80 bg-purple-300/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-cyan-300/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Floating Dots Pattern */}
        <div
          className="absolute top-24 right-32 w-3 h-3 bg-blue-400 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-40 right-48 w-2 h-2 bg-indigo-400 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "3.5s" }}
        ></div>
        <div
          className="absolute top-60 right-24 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-32 left-32 w-3 h-3 bg-pink-400 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "0.3s", animationDuration: "3.2s" }}
        ></div>
        <div
          className="absolute bottom-48 left-24 w-2 h-2 bg-cyan-400 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "0.8s", animationDuration: "3.8s" }}
        ></div>
        <div
          className="absolute top-1/3 left-40 w-2 h-2 bg-green-400 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "0.2s", animationDuration: "3.6s" }}
        ></div>

        {/* Industry Icons Pattern - Scattered */}
        {/* <div className="absolute top-32 left-20 opacity-5 rotate-12">
          <Stethoscope className="w-16 h-16 text-blue-600" />
        </div>
        <div className="absolute top-1/4 right-24 opacity-5 -rotate-12">
          <Utensils className="w-20 h-20 text-orange-600" />
        </div>
        <div className="absolute bottom-40 left-1/4 opacity-5 rotate-6">
          <Coffee className="w-14 h-14 text-amber-600" />
        </div>
        <div className="absolute bottom-32 right-1/3 opacity-5 -rotate-6">
          <Building className="w-18 h-18 text-indigo-600" />
        </div>
        <div className="absolute top-1/2 right-16 opacity-5 rotate-45">
          <Scissors className="w-12 h-12 text-pink-600" />
        </div> */}

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

        {/* Animated Gradient Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20 animate-[shimmer_3s_ease-in-out_infinite]"></div>
        <div
          className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-20 animate-[shimmer_3s_ease-in-out_infinite]"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Vertical Lines */}
        <div
          className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-blue-300/20 to-transparent"
          style={{ left: "15%" }}
        ></div>
        <div
          className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-indigo-300/20 to-transparent"
          style={{ left: "85%" }}
        ></div>

        {/* Diagonal Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="absolute top-0 left-0 w-px h-full bg-gradient-to-br from-blue-300/30 via-transparent to-transparent rotate-45 origin-top-left"
            style={{ width: "141%" }}
          ></div>
          <div
            className="absolute top-0 right-0 w-px h-full bg-gradient-to-bl from-indigo-400/20 via-transparent to-transparent -rotate-45 origin-top-right"
            style={{ width: "141%" }}
          ></div>
        </div>

        {/* Globe Icons Pattern */}
        {/* <div className="absolute top-20 left-1/3 opacity-10">
          <Globe
            className="w-24 h-24 text-blue-500 animate-spin"
            style={{ animationDuration: "20s" }}
          />
        </div>
        <div className="absolute bottom-24 right-1/4 opacity-10">
          <Globe
            className="w-20 h-20 text-indigo-500 animate-spin"
            style={{ animationDuration: "25s", animationDirection: "reverse" }}
          />
        </div> */}

        {/* Radial Gradient Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] bg-gradient-radial from-white/50 via-transparent to-transparent rounded-full"></div>

        {/* Spotlight Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-blue-200/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-indigo-200/20 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
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
                className={`group relative overflow-hidden ${
                  industry.bgColor
                } rounded-3xl p-8 border-2 ${
                  industry.borderColor
                } hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-slide-in-up animation-delay-${
                  (index + 1) * 100
                }`}
              >
                {/* Gradient Glow Effect on Hover */}
                <div
                  className={`absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r ${industry.color} transition duration-700 -z-10`}
                ></div>

                {/* Top Right Accent Shine */}
                <span className="pointer-events-none absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-white/60 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition duration-700"></span>

                {/* Decorative Corner Lines */}
                <div
                  className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 rounded-tl-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ borderColor: "currentColor" }}
                ></div>
                <div
                  className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 rounded-br-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                  style={{ borderColor: "currentColor" }}
                ></div>

                {/* Icon Container with Enhanced Design */}
                <div className="relative">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg relative overflow-hidden`}
                  >
                    {/* Icon Background Glow */}
                    <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <Icon className="w-8 h-8 text-white relative z-10" />

                    {/* Sparkle Effect */}
                    <Sparkles className="absolute top-1 right-1 w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Title with Underline Effect */}
                <div className="relative">
                    <h3
                    className={`font-bold text-center ${industry.textColor} group-hover:text-white group-hover:scale-105 transition-transform transition-colors relative inline-block w-full`}
                    >
                    {industry.name}
                    {/* Animated Underline */}
                    <span
                      className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r ${industry.color} group-hover:from-white group-hover:to-white w-0 group-hover:w-3/4 transition-all duration-500 rounded-full`}
                    ></span>
                    </h3>
                </div>

                {/* Hover Stats Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                  <div
                    className={`bg-white rounded-full px-2 py-1 text-[10px] font-bold ${industry.textColor} shadow-md`}
                  >
                    Popular
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
