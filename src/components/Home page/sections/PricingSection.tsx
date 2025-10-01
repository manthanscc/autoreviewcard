import React from "react";
import { Check, Star, Crown, Zap } from "lucide-react";

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: "Starter",
      price: "₹999",
      period: "/month",
      icon: Star,
      popular: false,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      features: [
        "Up to 100 review requests/month",
        "Basic QR code design",
        "Email support",
        "Basic analytics",
        "Mobile optimization",
      ],
    },
    {
      name: "Professional",
      price: "₹1,999",
      period: "/month",
      icon: Crown,
      popular: true,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      features: [
        "Up to 500 review requests/month",
        "Custom QR code design",
        "Priority support",
        "Advanced analytics",
        "AI review optimization",
        "Multiple locations",
      ],
    },
    {
      name: "Enterprise",
      price: "₹3,999",
      period: "/month",
      icon: Zap,
      popular: false,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      features: [
        "Unlimited review requests",
        "White-label solution",
        "24/7 phone support",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced reporting",
      ],
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-blue-50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <Crown className="w-4 h-4" />
            <span className="text-sm font-medium">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 animate-fade-in-up animation-delay-200">
            Simple, Transparent{" "}
            <span className="text-green-600">Pricing</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Choose the perfect plan for your business size and needs.
            All plans include our core AI features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative ${
                  plan.popular
                    ? "scale-105 border-2 border-purple-200 shadow-2xl"
                    : "border border-slate-200"
                } ${
                  plan.bgColor
                } rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-slide-in-up animation-delay-${
                  (index + 1) * 200
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-slate-900">
                      {plan.price}
                    </span>
                    <span className="text-slate-600">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-2xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                      : "bg-white border-2 border-slate-200 hover:border-slate-300 text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
          <div className="flex justify-center gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-500" />
              <span>Free migration support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;