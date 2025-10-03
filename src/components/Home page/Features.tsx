import React from "react";
import {
  Sparkles,
  Smartphone,
  Shield,
  BarChart3,
  Clock,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Review Writing",
    description:
      "Smart AI crafts personalized review prompts for each customer interaction",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-100",
    iconBg: "bg-purple-400",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Optimized for mobile devices where your customers spend most of their time",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-cyan-100",
    iconBg: "bg-cyan-400",
  },
  {
    icon: Shield,
    title: "Safe & Compliant",
    description: "100% compliant with Google policies and review guidelines",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-blue-100",
    iconBg: "bg-blue-400",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock customer support via WhatsApp, email, and live chat",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-cyan-100",
    iconBg: "bg-cyan-500",
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description:
      "Get your QR code and start collecting reviews in under 5 minutes",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-purple-100",
    iconBg: "bg-purple-500",
  },
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-300 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Dots Pattern */}
        <div className="absolute top-40 right-20 w-2 h-2 bg-purple-400 rounded-full opacity-40"></div>
        <div className="absolute top-60 right-32 w-2 h-2 bg-cyan-400 rounded-full opacity-40"></div>
        <div className="absolute top-80 right-24 w-2 h-2 bg-pink-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-blue-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-60 left-32 w-2 h-2 bg-green-400 rounded-full opacity-40"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Animated Gradient Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20 animate-[shimmer_3s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20 animate-[shimmer_3s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Radial Gradient Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-purple-100/30 via-transparent to-transparent rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        {/* Central Hub Circle */}
        <div className="relative">
          <div className="absolute -top-60 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full shadow-2xl flex items-center justify-center z-10">
            <div className="absolute bottom-36 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <span className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded"></span>
              <span className="h-1 w-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></span>
              <span className="h-1 w-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded"></span>
            </div>
            <div className="absolute inset-0 flex items-end justify-center pb-16">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-slate-900">
                  Powerful Features That
                </h4>
                <h4 className="text-2xl font-bold text-slate-900">
                  Drive Results
                </h4>
              </div>
            </div>
          </div>

          {/* Circular Connecting Dots */}
          <svg
            className="absolute -top-60 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] pointer-events-none z-0"
            viewBox="0 0 520 520"
          >
            {/* Outer Dashed Circle */}
            <circle
              cx="260"
              cy="260"
              r="200"
              stroke="#e5e7eb"
              strokeWidth="2"
              strokeDasharray="10 10"
              fill="none"
            />

            {/* Glow Circle */}
            <circle
              cx="260"
              cy="260"
              r="200"
              stroke="url(#grad)"
              strokeWidth="2"
              strokeDasharray="4 8"
              strokeLinecap="round"
              fill="none"
              className="animate-[spin_18s_linear_infinite]"
              style={{ transformOrigin: "260px 260px" }}
            />

            <defs>
              <linearGradient
                id="grad"
                x1="60"
                y1="260"
                x2="460"
                y2="260"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#c084fc" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>

            {/* Static Nodes - 5 evenly spaced along bottom semicircle (radius 200, center 260,260) */}
            <circle cx="72" cy="328" r="10" fill="#ef8bfaff" />
            <circle cx="140" cy="423" r="10" fill="#38bdf8" />
            <circle cx="260" cy="460" r="10" fill="#10b981" />
            <circle cx="380" cy="423" r="10" fill="#60a5fa" />
            <circle cx="448" cy="328" r="10" fill="#fbbf24" />

            {/* Animated Orbit Dot */}
            <g
              className="animate-[spin_10s_linear_infinite]"
              style={{ transformOrigin: "260px 260px" }}
            >
              <circle
                cx="460"
                cy="260"
                r="6"
                fill="#fff"
                stroke="#6366f1"
                strokeWidth="3"
              />
            </g>
          </svg>
        </div>

        {/* Feature Cards Grid */}
        <div className="relative min-h-[700px] mt-36">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            // Calculate positions for semicircle arrangement
            const angles = [-90, -46, 0, 46, 90]; // degrees from vertical
            const iconRadius = 280; // icon circle distance
            const cardRadius = 550; // card distance (increased from 480 for more space)
            const centerX = 50;
            const centerY = -10;

            // Icon position
            const iconAngle = angles[index];
            const iconRad = (iconAngle * Math.PI) / 180;
            const iconX = centerX + (iconRadius * Math.sin(iconRad)) / 12;
            const iconY = centerY + (iconRadius * Math.cos(iconRad)) / 10;

            // Card position
            const cardRad = (iconAngle * Math.PI) / 190;
            const cardX = centerX + (cardRadius * Math.sin(cardRad)) / 12;
            const cardY = centerY + (cardRadius * Math.cos(cardRad)) / 7;

            return (
              <React.Fragment key={index}>
                {/* Icon Circle */}
                                {/* Icon Circle */}
                <div
                  className="absolute animate-fade-in-up"
                  style={{
                    left: `${iconX}%`,
                    top: `${iconY}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex justify-center">
                    {/* Outer White Ring */}
                    <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-xl">
                      {/* Inner Colored Circle */}
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Content - Below Icon */}
                <div
                  className="absolute animate-fade-in-up"
                  style={{
                    left: `${cardX}%`,
                    top: `${cardY}%`,
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  

                    <div className="group relative w-72">
                    {/* Glow / Border Effect */}
                    <div
                      className={`absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r ${feature.color} transition duration-700`}
                    ></div>

                    <div className="relative rounded-2xl p-7 shadow-lg border border-gray-100 bg-white/90 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
                      {/* Accent Shine */}
                      <span className="pointer-events-none absolute -top-10 -right-10 w-28 h-28 bg-gradient-to-br from-white/40 to-transparent rounded-full opacity-40 group-hover:opacity-70 transition duration-700"></span>

                      {/* Animated Color Bar */}
                      <div
                      className={`h-1 w-24 origin-left scale-x-50 group-hover:scale-x-100 bg-gradient-to-r ${feature.color} rounded-full mb-6 mx-auto transition-all duration-500`}
                      ></div>

                      <h3
                      className={`text-2xl font-extrabold tracking-tight text-center bg-gradient-to-r ${feature.color} bg-clip-text text-transparent drop-shadow-sm transition-all duration-500 group-hover:tracking-wide`}
                      >
                      {feature.title}
                      </h3>

                      <p className="mt-4 text-slate-600 text-center leading-relaxed text-xl group-hover:text-slate-700 transition-colors duration-500">
                      {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
