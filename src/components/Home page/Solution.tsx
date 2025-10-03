import React from 'react';
import { QrCode, Sparkles, CheckCircle, Star } from 'lucide-react';

const solutionSteps = [
  {
    icon: QrCode,
    title: "Scan QR Code",
    desc: "Customer scans your custom QR code with their smartphone",
    color: "from-blue-500 to-blue-600",
    step: "1",
  },
  {
    icon: Sparkles,
    title: "AI Suggestion",
    desc: "AI generates a personalized review based on their experience",
    color: "from-purple-500 to-purple-600",
    step: "2",
  },
  {
    icon: CheckCircle,
    title: "Customer Approves",
    desc: "Customer reviews and approves the AI-generated content",
    color: "from-green-500 to-green-600",
    step: "3",
  },
  {
    icon: Star,
    title: "Review Posted",
    desc: "Review is instantly published to your Google Business Profile",
    color: "from-orange-500 to-red-500",
    step: "4",
  },
];

export const Solution: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-transparent to-purple-50/50"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">The Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 animate-fade-in-up animation-delay-200">
            AI Makes Review Collection{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Effortless
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Transform the review process into a simple, engaging experience
            that customers actually enjoy.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 transform -translate-y-1/2 z-0"></div>

          {solutionSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`relative z-10 text-center group animate-fade-in-up animation-delay-${
                  (index + 1) * 200
                }`}
              >
                <div className="relative mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-slate-700 shadow-lg border-2 border-slate-100">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solution;