import React, { useState } from "react";
import { Play, ArrowRight, Camera, Languages } from "lucide-react";
import { Quote } from "lucide-react";
import { Calendar } from "lucide-react";
import { QrCode, MessageCircle, Sparkles, Share2, Mobile } from "lucide-react";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  Utensils,
  Building2,
  Scissors,
  ShoppingBag,
  Laptop,
  Settings,
  ChevronDown,
} from "lucide-react";
import { Check, Star } from "lucide-react";
import {
  Zap,
  Globe,
  Copy,
  Shield,
  BarChart3,
  HeadphonesIcon,
} from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Open Camera",
    description: "Customers open their phone camera",
    color: "blue",
  },
  {
    icon: QrCode,
    title: "Scan QR Code",
    description: "Customers scan your business review QR code.",
    color: "yellow",
  },
  {
    icon: Languages,
    title: "Select Language",
    description: "Customers choose their preferred language.",
    color: "purple",
  },
  {
    icon: Sparkles,
    title: "Select Service",
    description: "Customers choose service they want to review.",
    color: "green",
  },
  {
    icon: Share2,
    title: "Leave Review",
    description: "Customers submit their review.",
    color: "orange",
  },
];

const colorClasses = {
  yellow:
    "bg-yellow-100 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white",
  blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-500 group-hover:text-white",
  purple:
    "bg-purple-100 text-purple-600 group-hover:bg-purple-500 group-hover:text-white",
  green:
    "bg-green-100 text-green-600 group-hover:bg-green-500 group-hover:text-white",
  red: "bg-red-100 text-red-600 group-hover:bg-red-500 group-hover:text-white",
  indigo:
    "bg-indigo-100 text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white",
  orange:
    "bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white",
  pink: "bg-pink-100 text-pink-600 group-hover:bg-pink-500 group-hover:text-white",
};

const industries = [
  {
    icon: ShoppingBag,
    name: "Retail & Shopping",
    description: "Boost sales and reputation with real customer reviews.",
    color: "purple",
  },
  {
    icon: Utensils,
    name: "Food & Beverage",
    description: "Collect genuine food & service reviews for restaurants, cafes, and more.",
    color: "orange",
  },
  {
    icon: Settings,
    name: "Services",
    description: "Perfect for agencies, consultants, and all service providers.",
    color: "gray",
  },
  {
    icon: Laptop,
    name: "Professional Businesses",
    description: "Build trust for legal, finance, IT, and other professional firms.",
    color: "green",
  },
  {
    icon: Shield,
    name: "Health & Medical",
    description: "Grow your clinic, hospital, or practice with patient feedback.",
    color: "red",
  },
  {
    icon: BarChart3,
    name: "Education",
    description: "Showcase your school, college, or coaching center's impact.",
    color: "indigo",
  },
  {
    icon: Building2,
    name: "Hotels & Travel",
    description: "Showcase guest experiences and travel services.",
    color: "blue",
  },
  {
    icon: Sparkles,
    name: "Entertainment & Recreation",
    description: "Collect reviews for gyms, clubs, events, and more.",
    color: "pink",
  },
  {
    icon: Scissors,
    name: "Salons & Spas",
    description: "Build trust through real customer stories for salons and spas.",
    color: "pink",
  },
  {
    icon: HeadphonesIcon,
    name: "Fitness Centers",
    description: "Motivate new members with authentic fitness success stories.",
    color: "yellow",
  },
];

const features = [
  {
    icon: Zap,
    title: "Instant Review Generation",
    description: "Generate authentic reviews in seconds with AI power",
    color: "yellow",
  },
  {
    icon: Globe,
    title: "Multiple Languages",
    description: "Support for English, Hindi, and Gujarati",
    color: "blue",
  },
  {
    icon: QrCode,
    title: "QR Code Ready",
    description: "Generate QR codes instantly for easy customer access",
    color: "purple",
  },
  {
    icon: Copy,
    title: "Copy & Share Anywhere",
    description: "One-click sharing across all platforms",
    color: "green",
  },
  {
    icon: Shield,
    title: "Secure & Cloud Synced",
    description: "Your data is encrypted and safely stored in the cloud",
    color: "red",
  },
  {
    icon: BarChart3,
    title: "Smart Business Dashboard",
    description: "Track performance with detailed analytics",
    color: "indigo",
  },
  {
    icon: Settings,
    title: "Easy Setup in Minutes",
    description: "Get started with our simple onboarding process",
    color: "orange",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "24/7 customer support to help you succeed",
    color: "pink",
  },
];

// const colorClasses = {
//   orange: "bg-orange-500 hover:bg-orange-600",
//   blue: "bg-blue-500 hover:bg-blue-600",
//   pink: "bg-pink-500 hover:bg-pink-600",
//   purple: "bg-purple-500 hover:bg-purple-600",
//   green: "bg-green-500 hover:bg-green-600",
//   gray: "bg-gray-500 hover:bg-gray-600",
// };

const testimonials = [
  {
    quote: "We received 3x more reviews in just one month!",
    author: "Priya Sharma",
    role: "Restaurant Owner",
    business: "Spice Garden Mumbai",
    avatar: "PS",
  },
  {
    quote: "Finally a tool that makes reviews authentic, not fake.",
    author: "Rajesh Kumar",
    role: "Hotel Manager",
    business: "Royal Stay Hotels",
    avatar: "RK",
  },
  {
    quote: "Setup took 5 minutes, results were instant.",
    author: "Meera Patel",
    role: "Salon Owner",
    business: "Glamour Studio",
    avatar: "MP",
  },
];

const Homepage = () => {
  // FAQ state and logic moved inside component
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: "Does it work for all types of businesses?",
      answer:
        "Yes! Our AI review system works for any business that serves customers - restaurants, hotels, salons, shops, freelancers, service providers, and more. The AI adapts to your industry context to generate relevant and authentic reviews.",
    },
    {
      question: "Can I customize the review tone?",
      answer:
        "Absolutely. You can set preferences for tone, formality level, and specific keywords that align with your brand voice. The AI learns from your preferences and applies them consistently across all generated reviews.",
    },
    {
      question: "How easy is the setup?",
      answer:
        "Setup takes less than 5 minutes! Simply create your account, add your business details, customize your QR code, and you're ready to start collecting reviews. We provide step-by-step guidance throughout the process.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, security is our top priority. All data is encrypted in transit and at rest using industry-standard encryption. We comply with data protection regulations and never share your customer information with third parties.",
    },
    {
      question: "Can reviews be shared directly on social media?",
      answer:
        "Yes! Once a review is generated and approved, you can share it directly to Google Reviews, Facebook, Instagram, Twitter, and other social platforms with one click. We also provide shareable links and formatted content.",
    },
  ];
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="min-h-screen">
      {/* home page - Redesigned */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-tr from-[#0f2027] via-[#2c5364] to-[#f7971e] animate-gradient-move">
        {/* Animated background shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-400 opacity-30 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 opacity-30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-yellow-300 opacity-20 rounded-full blur-2xl animate-pulse-slow"></div>
        </div>
        <div className="relative z-10 w-full">
          <div className="max-w-5xl mx-auto text-center px-4 py-24">
            <div className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-yellow-200 via-pink-200 to-blue-200 text-blue-900 rounded-full text-base font-semibold mb-8 shadow-lg animate-fade-in">
              <span className="animate-bounce mr-2">✨</span> Now Available in Multiple Languages
            </div>

            <h1 className="font-extrabold text-transparent text-6xl md:text-8xl bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-600 drop-shadow-lg tracking-tight animate-text-pop">
              Grow Your <span className="underline decoration-wavy decoration-4 decoration-blue-400">Google Reviews</span> Smarter
            </h1>

            <p className="text-2xl md:text-3xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up mt-8">
              Turn customer feedback into <span className="font-semibold text-yellow-200">powerful</span> Google reviews in multiple languages — <span className="text-pink-200 font-semibold">faster</span>, <span className="text-blue-200 font-semibold">easier</span>, and more <span className="text-green-200 font-semibold">authentic</span> than ever.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
              <button className="group bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-600 text-white px-10 py-5 rounded-2xl text-2xl font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 flex items-center gap-3 tracking-wide animate-bounce-slow">
                Start Free Trial
                <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="group bg-white/90 text-blue-700 px-10 py-5 rounded-2xl text-2xl font-bold border-2 border-blue-200 hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 animate-fade-in">
                <Play className="w-7 h-7" />
                Explore Features
              </button>
            </div>

            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 max-w-3xl mx-auto animate-fade-in-up">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-blue-300 animate-pulse">3x</div>
                <div className="text-lg text-white/80 font-medium">More Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-pink-300 animate-pulse">3</div>
                <div className="text-lg text-white/80 font-medium">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-green-300 animate-pulse">5min</div>
                <div className="text-lg text-white/80 font-medium">Setup Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold text-yellow-300 animate-pulse">24/7</div>
                <div className="text-lg text-white/80 font-medium">Support</div>
              </div>
            </div>
          </div>
        </div>
        {/* Custom Animations */}
        <style>{`
          @keyframes gradient-move {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-move {
            background-size: 200% 200%;
            animation: gradient-move 10s ease-in-out infinite;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(40px); }
          }
          .animate-float-slow {
            animation: float-slow 12s ease-in-out infinite;
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fade-in 1.2s ease-in;
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 1.4s cubic-bezier(0.23, 1, 0.32, 1);
          }
          @keyframes text-pop {
            0% { letter-spacing: -0.1em; opacity: 0; transform: scale(0.95); }
            100% { letter-spacing: 0.02em; opacity: 1; transform: scale(1); }
          }
          .animate-text-pop {
            animation: text-pop 1.2s cubic-bezier(0.23, 1, 0.32, 1);
          }
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 2.5s infinite;
          }
        `}</style>
      </section>

      {/* How It Works */}
      <section className="relative py-24 bg-gradient-to-br from-[#f5f7fa] via-[#c3cfe2] to-[#e2eafc] overflow-hidden">
        {/* Subtle animated background shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 opacity-30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200 opacity-20 rounded-full blur-2xl animate-float-slow"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 mb-4 tracking-tight animate-text-pop">How It Works</h2>
            <p className="text-2xl text-gray-700 max-w-2xl mx-auto font-light animate-fade-in-up">
              Get more authentic Google reviews in just 4 simple steps
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="relative flex-1 flex flex-col items-center group px-4 animate-fade-in-up">
                    <div className={`w-20 h-20 ${colorClasses[step.color as keyof typeof colorClasses]} rounded-3xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-10 h-10" />
                    </div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-2 border-blue-200 text-blue-700 rounded-full flex items-center justify-center text-lg font-bold shadow-md">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2 text-center">{step.title}</h3>
                    <p className="text-gray-700 text-lg text-center font-light mb-2">{step.description}</p>
                    {/* Step connector line - always visible and perfectly aligned below icons */}
                    {/* Step connector line - perfectly horizontal between icons */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:flex w-full justify-center items-center absolute left-1/2 top-10 -translate-y-1/2 z-0">
                        <div className="w-20 h-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70 shadow-md"></div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
          }
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(40px); }
          }
          .animate-float-slow {
            animation: float-slow 16s ease-in-out infinite;
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 1.2s cubic-bezier(0.23, 1, 0.32, 1);
          }
          @keyframes text-pop {
            0% { letter-spacing: -0.1em; opacity: 0; transform: scale(0.95); }
            100% { letter-spacing: 0.02em; opacity: 1; transform: scale(1); }
          }
          .animate-text-pop {
            animation: text-pop 1.2s cubic-bezier(0.23, 1, 0.32, 1);
          }
        `}</style>
      </section>

      {/* Who Can Use It? */}
      <section className="relative py-24 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ef] to-[#f3e8ff] overflow-hidden">
        {/* Subtle background shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-200 opacity-20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 opacity-10 rounded-full blur-2xl animate-float-slow"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-blue-600 to-purple-600 mb-4 tracking-tight animate-text-pop">
              Who Can Use It?
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-light animate-fade-in-up">
              Perfect for any business that values customer feedback and wants to grow their online reputation
            </p>
          </div>

          <div className="">
            <div className="relative w-full overflow-hidden py-4 px-2">
              <div className="auto-scroll flex gap-0" style={{ width: 'max-content', animation: 'scroll-x 30s linear infinite' }}>
                {[...industries, ...industries].map((industry, index) => {
                  const IconComponent = industry.icon;
                  // Only show divider for the first set, not after the last duplicate
                  const isLast = index === industries.length - 1 || index === (2 * industries.length) - 1;
                  return (
                    <React.Fragment key={index}>
                      <div
                        className="relative group flex-shrink-0 flex flex-col items-center mx-2"
                        style={{ minWidth: 100, height: 240 }}
                      >
                        <div className={`w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg cursor-pointer transition-transform duration-300 ${colorClasses[industry.color as keyof typeof colorClasses]} group-hover:scale-110`}
                          tabIndex={0}
                        >
                          <IconComponent className="w-7 h-7" />
                        </div>
                        {/* Tooltip on hover - improved positioning and style */}
                        <div className="pointer-events-none opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 absolute left-1/2 -translate-x-1/2 top-[80px] z-30 min-w-[220px] max-w-xs bg-white shadow-2xl rounded-xl p-5 border border-blue-100 text-center animate-fade-in-up whitespace-normal overflow-visible"
                          style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)' }}
                        >
                          <div className="text-base font-bold text-blue-700 mb-1 break-words">{industry.name}</div>
                          <div className="text-gray-600 text-sm break-words">{industry.description}</div>
                          <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-white border-l border-t border-blue-100 rotate-45 shadow-sm"></div>
                        </div>
                      </div>
                      {/* Divider between icons, except after last in each set */}
                      {!isLast && (
                        <div className="flex items-center h-12 mx-1">
                          <div className="w-px h-8 bg-gradient-to-b from-blue-200 via-gray-200 to-purple-200 opacity-60"></div>
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
              <style>{`
                @keyframes scroll-x {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
              `}</style>
            </div>
          </div>
        </div>
  <style>{`
          /* Custom scrollbar for horizontal icon row */
          .scrollbar-thin {
            scrollbar-width: thin;
          }
          .scrollbar-thumb-blue-200::-webkit-scrollbar-thumb {
            background: #bfdbfe;
            border-radius: 8px;
          }
          .scrollbar-track-blue-50::-webkit-scrollbar-track {
            background: #eff6ff;
          }
          .scrollbar-thin::-webkit-scrollbar {
            height: 8px;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
          }
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(40px); }
          }
          .animate-float-slow {
            animation: float-slow 16s ease-in-out infinite;
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in-up {
            animation: fade-in-up 1.2s cubic-bezier(0.23, 1, 0.32, 1);
          }
          @keyframes text-pop {
            0% { letter-spacing: -0.1em; opacity: 0; transform: scale(0.95); }
            100% { letter-spacing: 0.02em; opacity: 1; transform: scale(1); }
          }
          .animate-text-pop {
            animation: text-pop 1.2s cubic-bezier(0.23, 1, 0.32, 1);
          }
        `}</style>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Start building your reputation today with our affordable plans
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Starter Plan */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Popular
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Starter Launch Plan
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-blue-600">
                    ₹9,999
                  </span>
                  <span className="text-lg text-gray-600 ml-2">first year</span>
                </div>
                <p className="text-gray-600">
                  Best for new businesses building online reputation.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "Unlimited QR code generation",
                  "AI-powered review refinement",
                  "Multi-language support (EN, HI, GUJ)",
                  "Cloud sync & secure storage",
                  "Basic analytics dashboard",
                  "Email support",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Renewal Plan */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Annual Renewal
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-green-600">
                    ₹2,000
                  </span>
                  <span className="text-lg text-gray-600 ml-2">per year</span>
                </div>
                <p className="text-gray-600">
                  Continue growing your Google reviews effortlessly.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  "All Starter Plan features",
                  "Priority customer support",
                  "Advanced analytics & insights",
                  "Custom branding options",
                  "Bulk review management",
                  "API access for integrations",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-green-600 text-white py-4 rounded-xl font-semibold hover:bg-green-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                Renew Plan
              </button>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex items-center justify-center gap-2 text-yellow-600 mb-2">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
            <p className="text-gray-600">
              Trusted by 1000+ businesses across India
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us? */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help you collect and manage
              authentic Google reviews
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div
                    className={`w-12 h-12 ${
                      colorClasses[feature.color as keyof typeof colorClasses]
                    } rounded-lg flex items-center justify-center mb-4 transition-all duration-300`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* See It In Action */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200 opacity-20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200 opacity-10 rounded-full blur-2xl animate-float-slow"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-text-pop">
              See It In Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up">
              Watch how our AI transforms simple feedback into compelling Google reviews
            </p>
          </div>
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 animate-fade-in-up">
            {/* From This... */}
            <div className="flex-1 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">From This...</h3>
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-md w-full max-w-xs animate-fade-in-up">
                <p className="text-gray-600 italic text-lg mb-4">"good service team was helpful"</p>
                <div className="text-sm text-gray-500">Original customer feedback</div>
              </div>
            </div>
            {/* Arrow Centered */}
            <div className="flex flex-col items-center justify-center">
              <div className="relative flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 shadow-lg animate-bounce-slow">
                  <ArrowRight className="w-10 h-10 text-white drop-shadow-lg animate-pulse" />
                </div>
              </div>
            </div>
            {/* To This! */}
            <div className="flex-1 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">To This!</h3>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-200 shadow-md w-full max-w-xs animate-fade-in-up">
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-xl">{star}</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-800 leading-relaxed mb-3">
                  "Amazing service! The team was super helpful and friendly. They went above and beyond to ensure I had a great experience. Highly recommend this business to anyone looking for quality service and professional support."
                </p>
                <div className="text-sm text-gray-600">AI-enhanced review</div>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center mt-12 animate-fade-in-up">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 text-lg animate-bounce-slow">
              Try It Yourself
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </div> */}
        </div>
        <style>{`
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow {
            animation: bounce-slow 2.5s infinite;
          }
        `}</style>
      </section>

      {/* What Our Customers Say */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 text-yellow-500 mb-4">
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
              <Star className="w-6 h-6 fill-current" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of businesses already growing with our AI review
              system
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
              >
                <Quote className="w-8 h-8 text-blue-200 mb-6" />

                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-lg text-gray-800 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-600 text-sm">
                      {testimonial.role} • {testimonial.business}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg">
              <span className="text-gray-700 font-medium">
                Join 1000+ happy customers
              </span>
              <div className="flex -space-x-2 ml-4">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold ${
                      i === 0
                        ? "bg-blue-500"
                        : i === 1
                        ? "bg-purple-500"
                        : i === 2
                        ? "bg-green-500"
                        : i === 3
                        ? "bg-orange-500"
                        : "bg-pink-500"
                    }`}
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Collect Reviews That Matter? */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%227%22 cy=%227%22 r=%227%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>

        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Collect Reviews That
              <span className="block text-yellow-300">Matter?</span>
            </h2>

            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of businesses already transforming their online
              reputation with AI-powered reviews.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Book Your Free Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-transparent text-white border-2 border-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center gap-2">
                Start Free Trial
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 text-blue-100">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Setup in 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about our AI-powered review system
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">Still have questions?</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Star className="w-8 h-8 text-blue-400" />
                <span className="text-2xl font-bold">ReviewAI</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transform customer feedback into authentic Google reviews with
                AI-powered technology.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
                <div className="w-10 h-10 bg-pink-600 rounded-lg flex items-center justify-center hover:bg-pink-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">ig</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  "Features",
                  "Pricing",
                  "How It Works",
                  "Industries",
                  "Demo",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(" ", "-")}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                {[
                  "Help Center",
                  "FAQ",
                  "Contact Us",
                  "Documentation",
                  "API",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">support@reviewai.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-400">Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-800 my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 ReviewAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
