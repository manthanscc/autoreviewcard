import React, { useState } from "react";
import { Building, Star, TrendingUp, Heart, ArrowLeft, ArrowRight } from "lucide-react";

const CustomerSuccessSection: React.FC = () => {
  const [caseIndex, setCaseIndex] = useState(0);

  const caseStudies = [
    {
      industry: "Healthcare",
      rating: 5,
      quote:
        "ReviewBoost AI transformed our patient feedback process completely. We went from 2-3 reviews per month to 45+ reviews monthly. The AI timing is incredible - it knows exactly when patients are happiest with our service.",
      author: "Dr. Priya Mehta",
      title: "Dental Clinic Owner",
      business: "Smile Care Dental",
      location: "Mumbai, Maharashtra",
      avatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      before: { rating: "2.8★", reviews: 12 },
      after: { rating: "4.9★", reviews: 247 },
      growthPct: "+1,958% reviews",
      months: "4-6 months",
    },
    {
      industry: "Restaurant",
      rating: 5,
      quote:
        "We scaled from scattered feedback to a steady stream of glowing reviews. Staff no longer push manually; guests just scan and approve. Our local ranking jumped significantly.",
      author: "Raj Patel",
      title: "Franchise Owner",
      business: "Urban Spice Kitchens",
      location: "Ahmedabad, Gujarat",
      avatar:
        "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150",
      before: { rating: "3.1★", reviews: 34 },
      after: { rating: "4.8★", reviews: 410 },
      growthPct: "+1,106% reviews",
      months: "3-5 months",
    },
    {
      industry: "Fitness",
      rating: 5,
      quote:
        "Members love the seamless flow. Check-in + session finish triggers perfect timing. We now average 60+ new reviews every month across locations.",
      author: "Ankit Verma",
      title: "Co-Founder",
      business: "Pulse Fitness",
      location: "Bengaluru, Karnataka",
      avatar:
        "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg?auto=compress&cs=tinysrgb&w=150",
      before: { rating: "3.5★", reviews: 51 },
      after: { rating: "4.9★", reviews: 566 },
      growthPct: "+1,009% reviews",
      months: "5-7 months",
    },
  ];

  const successStats = [
    { icon: Building, label: "Active Businesses", value: "2,500+" },
    { icon: Star, label: "Reviews Generated", value: "50,000+" },
    { icon: TrendingUp, label: "Average Rating Boost", value: "+1.3★" },
    { icon: Heart, label: "Customer Satisfaction", value: "98%" },
  ];

  const nextCase = () => setCaseIndex((i) => (i + 1) % caseStudies.length);
  const prevCase = () =>
    setCaseIndex((i) => (i - 1 + caseStudies.length) % caseStudies.length);
  const activeCase = caseStudies[caseIndex];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-blue-50 to-indigo-100 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-600 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 animate-fade-in-up animation-delay-200">
            Real Businesses,{" "}
            <span className="text-indigo-600">Real Growth</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            See how businesses across India are using our AI platform to
            transform their online reputation and drive growth.
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {successStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`text-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 animate-slide-in-up animation-delay-${
                  (index + 1) * 100
                }`}
              >
                <Icon className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Case Study Carousel */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
                  {activeCase.industry}
                </div>

                <div className="flex items-center gap-1 mb-6">
                  {[...Array(activeCase.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 text-yellow-500 fill-current"
                    />
                  ))}
                </div>

                <blockquote className="text-xl text-slate-700 mb-8 leading-relaxed">
                  "{activeCase.quote}"
                </blockquote>

                <div className="flex items-center gap-4 mb-8">
                  <img
                    src={activeCase.avatar}
                    alt={activeCase.author}
                    className="w-16 h-16 rounded-full object-cover border-4 border-slate-100"
                  />
                  <div>
                    <div className="font-bold text-slate-900 text-lg">
                      {activeCase.author}
                    </div>
                    <div className="text-slate-600">{activeCase.title}</div>
                    <div className="text-slate-500 text-sm">
                      {activeCase.business} • {activeCase.location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    Results in {activeCase.months}
                  </div>
                  <div className="text-green-600 font-bold text-xl">
                    {activeCase.growthPct}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-2xl p-6 text-center">
                    <div className="text-sm text-red-600 font-medium mb-2">
                      BEFORE
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      {activeCase.before.rating}
                    </div>
                    <div className="text-slate-600">
                      {activeCase.before.reviews} reviews
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-2xl p-6 text-center">
                    <div className="text-sm text-green-600 font-medium mb-2">
                      AFTER
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">
                      {activeCase.after.rating}
                    </div>
                    <div className="text-slate-600">
                      {activeCase.after.reviews} reviews
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevCase}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous</span>
              </button>

              <div className="flex gap-2">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCaseIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === caseIndex ? "bg-indigo-600" : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextCase}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                <span className="hidden sm:inline">Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSuccessSection;