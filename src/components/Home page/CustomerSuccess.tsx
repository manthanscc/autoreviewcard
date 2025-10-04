import React, { useState } from "react";
import {
  Users,
  Star,
  TrendingUp,
  Clock,
  ArrowLeft,
  ArrowRight,
  Building,
  Heart,
  Award,
} from "lucide-react";

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

export const CustomerSuccess: React.FC = () => {
  const [caseIndex, setCaseIndex] = useState(0);

  const nextCase = () => setCaseIndex((i) => (i + 1) % caseStudies.length);
  const prevCase = () =>
    setCaseIndex((i) => (i - 1 + caseStudies.length) % caseStudies.length);
  const activeCase = caseStudies[caseIndex];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-emerald-200/30 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-40 -right-28 w-[30rem] h-[30rem] bg-indigo-200/30 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-5 py-2 mb-7 font-medium shadow-sm animate-fade-in-up">
            <Users className="w-4 h-4" />
            Customer Success
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 animate-fade-in-up animation-delay-200">
            Trusted by 2,500+{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent">
              Indian Businesses
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Real growth outcomes delivered through AI-powered review automation.
          </p>
        </div>

        {/* Main Card */}
        <div className="mb-16 animate-fade-in-up animation-delay-600">
          <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-emerald-300 via-indigo-300 to-sky-300 shadow-[0_12px_60px_-18px_rgba(16,185,129,0.35)]">
            <div className="grid lg:grid-cols-2 rounded-[inherit] bg-white/80 backdrop-blur-xl overflow-hidden">
              {/* LEFT PANEL */}
              <div
                key={caseIndex}
                className="relative p-10 flex flex-col transition-opacity duration-500"
              >
                {/* subtle top accent */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400/60 via-indigo-400/60 to-sky-400/60" />

                <div className="mb-6 flex items-center gap-3">
                  <span className="inline-flex px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide bg-emerald-50 text-emerald-600 border border-emerald-100">
                    {activeCase.industry}
                  </span>
                  <div className="flex items-center">
                    {Array.from({ length: activeCase.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400 drop-shadow-sm"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 text-lg leading-relaxed flex-1 italic">
                  "{activeCase.quote}"
                </p>

                <div className="mt-10 flex items-center gap-5">
                  <img
                    src={activeCase.avatar}
                    alt={activeCase.author}
                    className="w-16 h-16 rounded-2xl object-cover shadow-lg ring-4 ring-white"
                  />
                  <div>
                    <div className="font-semibold text-slate-900 text-lg">
                      {activeCase.author}
                    </div>
                    <div className="text-sm text-slate-500">
                      {activeCase.title} • {activeCase.business}
                    </div>
                    <div className="text-xs text-slate-400">
                      {activeCase.location}
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="mt-12 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {caseStudies.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCaseIndex(i)}
                        className={`h-2.5 rounded-full transition-all ${
                          i === caseIndex
                            ? "w-8 bg-gradient-to-r from-emerald-500 to-indigo-500 shadow"
                            : "w-2.5 bg-slate-300 hover:bg-slate-400"
                        }`}
                        aria-label={`Show case study ${i + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={prevCase}
                      aria-label="Previous case study"
                      className="group w-10 h-10 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-md transition-all flex items-center justify-center"
                    >
                      <ArrowLeft className="w-4 h-4 text-slate-600 group-hover:text-emerald-600 transition-colors" />
                    </button>
                    <button
                      onClick={nextCase}
                      aria-label="Next case study"
                      className="group w-10 h-10 rounded-xl border border-slate-200 bg-white hover:border-emerald-300 hover:shadow-md transition-all flex items-center justify-center"
                    >
                      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-600 transition-colors" />
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT PANEL */}
              <div className="relative p-10 bg-gradient-to-br from-slate-50 via-indigo-50 to-emerald-50 flex flex-col">
                {/* floating accent */}
                <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 bg-emerald-300/30 rounded-full blur-2xl" />
                <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                  <span className="relative">
                    Results Achieved
                    <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-400 via-indigo-400 to-sky-400 rounded-full"></span>
                  </span>
                </h3>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="relative rounded-2xl bg-white/90 backdrop-blur border border-slate-200 p-5 text-center shadow-sm">
                    <div className="text-[10px] tracking-widest font-semibold uppercase text-slate-500 mb-2">
                      Before
                    </div>
                    <div className="text-3xl font-bold text-slate-800">
                      {activeCase.before.rating}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      ({activeCase.before.reviews} reviews)
                    </div>
                  </div>
                  <div className="relative rounded-2xl bg-white/95 backdrop-blur border border-emerald-300/70 p-5 text-center shadow-sm">
                    <div className="text-[10px] tracking-widest font-semibold uppercase text-emerald-600 mb-2">
                      After
                    </div>
                    <div className="text-3xl font-extrabold bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent">
                      {activeCase.after.rating}
                    </div>
                    <div className="text-xs text-emerald-600 mt-1">
                      ({activeCase.after.reviews} reviews)
                    </div>
                  </div>
                </div>

                {/* Growth Highlight */}
                <div className="relative flex-1 flex flex-col items-center justify-center">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-emerald-100/40 via-white to-indigo-100/40 border border-emerald-200" />
                  <div className="relative text-center px-6 py-10">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-700 px-4 py-1.5 text-xs font-medium">
                      <TrendingUp className="w-4 h-4" />
                      Review Growth
                    </div>
                    <div className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
                      {activeCase.growthPct}
                    </div>
                    <div className="mt-3 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                      In {activeCase.months}
                    </div>
                    {/* progress bar */}
                    <div className="mt-6 h-2.5 w-full rounded-full bg-slate-200 overflow-hidden">
                      <div
                        key={caseIndex}
                        className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-500 animate-[grow_1.2s_ease]"
                        style={{
                          width: (() => {
                            const n = parseInt(
                              activeCase.growthPct.replace(/[^0-9]/g, ""),
                              10
                            );
                            return (
                              Math.min(100, Math.log10(n + 10) * 25 + 40) + "%"
                            );
                          })(),
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="w-4 h-4" />
                  <span>Typical timeframe: {activeCase.months}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {successStats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className={`group relative rounded-2xl p-6 bg-white/80 backdrop-blur border border-slate-200 hover:border-emerald-300 transition shadow-sm hover:shadow-lg animate-slide-in-up animation-delay-${
                  (i + 1) * 100
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-50 to-indigo-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex flex-col">
                  <div className="text-2xl font-bold text-slate-900">{s.value}</div>
                  <div className="text-sm font-medium text-slate-500 mt-1">
                    {s.label}
                  </div>
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400 rounded-b-2xl transition-opacity"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes grow { 
          from { width: 0; } 
          to { width: var(--final-width); } 
        }
      `}</style>
    </section>
  );
};

export default CustomerSuccess;