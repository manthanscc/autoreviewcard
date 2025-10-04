import React from 'react';
import { QrCode, Sparkles, CheckCircle, Star } from 'lucide-react';

const solutionSteps = [
  {
    icon: QrCode,
    title: "Scan QR Code",
    desc: "Customer scans your custom QR code with their smartphone",
    color: "bg-gradient-to-br from-cyan-400 to-blue-500",
    glowColor: "shadow-cyan-300/50",
    step: "1",
    position: "top-1/4 left-[10%]"
  },
  {
    icon: Sparkles,
    title: "AI Suggestion",
    desc: "AI generates a personalized review based on their experience",
    color: "bg-gradient-to-br from-orange-400 to-rose-500",
    glowColor: "shadow-orange-300/50",
    step: "2",
    position: "top-1/2 left-[30%]"
  },
  {
    icon: CheckCircle,
    title: "Customer Approves",
    desc: "Customer reviews and approves the AI-generated content",
    color: "bg-gradient-to-br from-pink-400 to-purple-500",
    glowColor: "shadow-pink-300/50",
    step: "3",
    position: "top-1/3 left-[55%]"
  },
  {
    icon: Star,
    title: "Review Posted",
    desc: "Review is instantly published to your Google Business Profile",
    color: "bg-gradient-to-br from-rose-400 to-pink-500",
    glowColor: "shadow-rose-300/50",
    step: "4",
    position: "top-[15%] right-[15%]"
  },
];

export const Solution: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/20 to-pink-50/30"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-8 md:mb-0">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 rounded-full px-4 md:px-5 py-2 mb-4 md:mb-6 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs md:text-sm font-semibold">The Solution</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6 px-4">
            AI Makes Review Collection{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Effortless
            </span>
          </h2>
          <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto px-4">
            Transform the review process into a simple, engaging experience
            that customers actually enjoy.
          </p>
        </div>

        {/* Mobile View - Vertical List */}
        <div className="md:hidden space-y-6">
          {solutionSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative"
                style={{
                  animation: `fadeInScale 0.6s ease-out ${index * 0.15}s both`
                }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200 relative overflow-hidden">
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 opacity-50"></div>
                  
                  <div className="relative z-10 flex items-start gap-4">
                    {/* Icon Box */}
                    <div className={`w-16 h-16 ${step.color} ${step.glowColor} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white drop-shadow" strokeWidth={2.5} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-slate-900">
                          {step.title}
                        </h3>
                        <span className="w-7 h-7 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md flex-shrink-0">
                          {step.step}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className={`absolute -top-2 -right-2 w-12 h-12 border-2 rounded-xl opacity-20 ${
                    index % 2 === 0 ? 'border-blue-400' : 'border-purple-400'
                  }`} />
                  <div className={`absolute -bottom-2 -left-2 w-10 h-10 border-2 rounded-lg opacity-20 ${
                    index % 2 === 0 ? 'border-pink-400' : 'border-orange-400'
                  }`} />
                </div>
                
                {/* Connecting line for mobile */}
                {index < solutionSteps.length - 1 && (
                  <div className="flex justify-center py-3">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 opacity-40"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop View - Flowchart Style Layout */}
        <div className="hidden md:block relative h-[500px] max-w-6xl mx-auto">
          {/* Connection Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.6" />
                <stop offset="33%" stopColor="#c084fc" stopOpacity="0.6" />
                <stop offset="66%" stopColor="#f472b6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#fb7185" stopOpacity="0.6" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Curved connecting lines with glow */}
            <path
              d="M 250 150 Q 350 250, 450 250"
              stroke="url(#lineGradient)"
              strokeWidth="4"
              fill="none"
              filter="url(#glow)"
            />
            <path
              d="M 450 250 Q 420 300, 650 200"
              stroke="url(#lineGradient)"
              strokeWidth="4"
              fill="none"
              filter="url(#glow)"
            />
            <path
              d="M 700 200 Q 800 150, 900 120"
              stroke="url(#lineGradient)"
              strokeWidth="4"
              fill="none"
              filter="url(#glow)"
            />
          </svg>

          {/* Decorative Background Boxes */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute border-2 rounded-2xl transition-all duration-700 hover:scale-110"
              style={{
                width: `${60 + Math.random() * 80}px`,
                height: `${60 + Math.random() * 80}px`,
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 90}%`,
                opacity: 0.30,
                borderColor: i % 3 === 0 ? '#93c5fd' : i % 3 === 1 ? '#c084fc' : '#f472b6',
              }}
            />
          ))}

          {/* Solution Steps */}
          {solutionSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`absolute ${step.position} group cursor-pointer transition-all duration-300 hover:z-50`}
                style={{
                  animation: `fadeInScale 0.6s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Main Card */}
                <div className="relative">
                  {/* Icon Box with Gradient */}
                  <div
                    className={`w-32 h-32 ${step.color} ${step.glowColor} rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:shadow-3xl transition-all duration-300 relative overflow-hidden`}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <Icon className="w-14 h-14 text-white drop-shadow-lg relative z-10" strokeWidth={2.5} />
                  </div>
                  
                  {/* Info Card (appears on hover) */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 w-72 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                    <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-200 relative backdrop-blur-sm">
                      {/* Gradient border effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 -z-10 blur-sm"></div>
                      
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-10 h-10 ${step.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {step.desc}
                      </p>
                      {/* Arrow pointer */}
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-t border-l border-slate-200 rotate-45" />
                    </div>
                  </div>
                </div>

                {/* Step Number Badge with gradient */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-white to-slate-50 rounded-full flex items-center justify-center text-lg font-bold text-slate-800 shadow-xl border-2 border-white group-hover:scale-125 transition-transform duration-300 z-10">
                  <span className="bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">{step.step}</span>
                </div>

                {/* Small decorative boxes with colors */}
                <div className={`absolute -top-8 -left-8 w-14 h-14 border-2 rounded-xl opacity-30 ${
                  index % 2 === 0 ? 'border-blue-300' : 'border-purple-300'
                }`} />
                <div className={`absolute -bottom-6 -right-6 w-12 h-12 border-2 rounded-lg opacity-30 ${
                  index % 2 === 0 ? 'border-pink-300' : 'border-orange-300'
                }`} />
              </div>
            );
          })}
        </div>
      </div>

      <style>
        {`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        `}
      </style>
    </section>
  );
};

export default Solution;