import React from 'react';
import { TrendingUp, CheckCircle } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter Plan",
    price: "₹1,499",
    period: "/year",
    renewal: "Renewal: ₹499/year",
    features: [
      "Up to 100 review requests/month",
      "AI-powered review writing",
      "Custom QR code",
      "Basic analytics dashboard",
      "Email support",
    ],
    buttonText: "Choose Starter Plan",
    buttonColor: "from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
    bgClass: "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20",
    popular: false,
    animation: "animate-slide-in-left animation-delay-200",
  },
  {
    name: "Business Plan",
    price: "₹6,500",
    period: "/year",
    renewal: "Renewal: ₹2,000/year",
    features: [
      "Unlimited review requests",
      "Advanced AI review writing",
      "Multiple custom QR codes",
      "Advanced analytics & reporting",
      "Priority 24/7 support",
      "WhatsApp integration",
    ],
    buttonText: "Choose Business Plan",
    buttonColor: "from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600",
    bgClass: "bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-purple-400/30 hover:border-purple-400/50",
    popular: true,
    animation: "animate-slide-in-right animation-delay-200",
  },
];

export const Pricing: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-900 to-purple-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            Simple, Transparent{" "}
            <span className="text-yellow-400">Pricing</span>
          </h2>
          <p className="text-xl text-slate-300 mb-4 animate-fade-in-up animation-delay-400">
            Choose the plan that fits your business needs. No hidden charges.
          </p>
          <div className="flex items-center justify-center gap-2 text-green-400 animate-fade-in-up animation-delay-600">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm font-medium">
              30-Day Money Back Guarantee
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`group relative backdrop-blur-sm border rounded-3xl p-8 transition-all duration-500 hover:scale-105 ${plan.bgClass} ${plan.animation}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm px-6 py-2 rounded-full font-semibold animate-pulse">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                <div className="text-sm text-slate-400">{plan.renewal}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full bg-gradient-to-r ${plan.buttonColor} py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;