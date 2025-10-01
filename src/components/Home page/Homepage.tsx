import React, { useState, useEffect } from "react";
import {
  Star,
  Users,
  Shield,
  Clock,
  QrCode,
  Sparkles,
  CheckCircle,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Heart,
  Target,
  Zap,
  BarChart3,
  Smartphone,
  Settings,
  Play,
  Building,
  Car,
  Utensils,
  Dumbbell,
  Hotel,
  Stethoscope,
  Scissors,
  Coffee,
  TrendingUp,
  Award,
  Globe,
  Rocket,
  ArrowLeft,
} from "lucide-react";


function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [caseIndex, setCaseIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Will it work with my Google Business account?",
      answer:
        "Yes, our platform seamlessly integrates with any Google Business Profile. We comply with all Google policies and guidelines to ensure your reviews are legitimate and safe.",
    },
    {
      question: "How does the AI write review prompts?",
      answer:
        "Our AI analyzes your business type, customer interaction, and industry best practices to generate personalized, natural-sounding review requests that feel authentic to your customers.",
    },
    {
      question: "Is this compliant with Google's review policies?",
      answer:
        "Absolutely. We strictly follow Google's review policies. We never incentivize reviews or violate terms of service. Our system simply makes it easier for satisfied customers to leave genuine feedback.",
    },
    {
      question: "How quickly can I get started?",
      answer:
        "Setup takes less than 5 minutes. Once you sign up, you'll get your custom QR code immediately and can start collecting reviews right away.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer 24/7 customer support via WhatsApp, email, and live chat. Our team is always ready to help you maximize your review collection success.",
    },
  ];

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

  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Review Writing",
      description:
        "Smart AI crafts personalized review prompts for each customer interaction",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Optimized for mobile devices where your customers spend most of their time",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Shield,
      title: "Safe & Compliant",
      description: "100% compliant with Google policies and review guidelines",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      icon: BarChart3,
      title: "Performance Dashboard",
      description:
        "Track review requests, response rates, and business growth metrics",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support via WhatsApp, email, and live chat",
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50",
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description:
        "Get your QR code and start collecting reviews in under 5 minutes",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      business: "Wellness Spa Owner",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Increased our Google reviews from 12 to 180+ in just 3 months. The AI makes it so easy!",
      growth: "+1400% reviews",
    },
    {
      name: "Raj Patel",
      business: "Restaurant Chain",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Our customers love how simple it is. We've seen a 300% increase in positive reviews across all locations.",
      growth: "+300% reviews",
    },
    {
      name: "Dr. Meera Singh",
      business: "Dental Practice",
      image:
        "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "The QR code system is perfect for our waiting room. Patients actually enjoy leaving reviews now!",
      growth: "+250% reviews",
    },
  ];

  const stats = [
    {
      icon: Star,
      value: "50,000+",
      label: "Reviews Generated",
      color: "text-yellow-500",
    },
    {
      icon: Users,
      value: "2,500+",
      label: "Active Users",
      color: "text-blue-500",
    },
    {
      icon: Award,
      value: "4.9",
      label: "Average Rating",
      color: "text-green-500",
    },
    { icon: Clock, value: "24/7", label: "Support", color: "text-purple-500" },
  ];

  // ---- Customer Success Data (added) ----
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
  // ---- end added ----

  // ---- New Business Card + Review Generator Data ----
  const businessCards = [
    {
      name: "SCC INFOTECH LLP",
      type: "Information Technology and Services",
      location: "Surat",
      logo: "https://via.placeholder.com/120x120.png?text=SCC",
      colorFrom: "from-indigo-900",
      colorTo: "to-purple-900",
      services: ["Website", "Application", "iOS", "Developer", "Environment"],
      image: "/SCC-INFOTECH-LLP-review-qr-card.png",
    },
    {
      name: "Raaji na Red",
      type: "Food manufacturer",
      location: "Uttran, Surat, Gujarat",
      logo: "https://via.placeholder.com/120x120.png?text=RNR",
      colorFrom: "from-rose-900",
      colorTo: "to-orange-900",
      services: ["Taste", "Quality", "Packaging", "Service", "Delivery"],
      image: "/Raaji-na-Red-review-qr-card.png",
    },
    {
      name: "Jay Khodiyar Selection",
      type: "Clothing store",
      location: "148, Vikas Shoppers, Surat, Gujarat 395006",
      logo: "https://via.placeholder.com/120x120.png?text=JKS",
      colorFrom: "from-fuchsia-900",
      colorTo: "to-violet-900",
      services: ["Fabric", "Design", "Fitting", "Pricing", "Support"],
      image: "/Jay-Khodiyar-Selection-review-qr-card (1).png",
    },
    {
      name: "Stickwell Papers Pvt.Ltd",
      type: "Corporate office",
      location: "Surat",
      logo: "https://via.placeholder.com/120x120.png?text=SWP",
      colorFrom: "from-sky-900",
      colorTo: "to-blue-900",
      services: ["Quality", "Service", "Logistics", "Pricing", "Reliability"],
      image: "/Stickwell-Papers-Pvt-Ltd-review-qr-card.png",
    },
  ];

  const languages = ["English", "Gujarati", "Hindi"];

  const [bizIndex, setBizIndex] = useState(0);
  const biz = businessCards[bizIndex];
  const [rating, setRating] = useState(5);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [reviewText, setReviewText] = useState("");
  const [copied, setCopied] = useState(false);

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const generateReview = () => {
    const adjectives: Record<number, string> = {
      5: "outstanding, seamless and truly impressive",
      4: "very good and reliable",
      3: "good overall with room for improvement",
      2: "below expectations this time",
      1: "disappointing",
    };

    const picked = selectedServices.slice(0, 3).join(", ") || "service";
    const base = `Our experience with ${biz.name} was ${adjectives[rating]}. Their ${picked} really stood out. The team in ${biz.location} made the whole process easy and professional.`;
    const tail =
      rating >= 4
        ? " Highly recommend them to anyone looking for quality and trust."
        : rating === 3
        ? " We believe future enhancements will make it even better."
        : " Hoping they address these issues soon.";
    setReviewText(`"${base}${tail}"`);
    setCopied(false);
  };

  useEffect(() => {
    generateReview();
    setSelectedServices([]);
    setRating(5);
  }, [bizIndex, selectedLanguage]);

  const copyReview = () => {
    navigator.clipboard.writeText(reviewText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setBizIndex((prev) => (prev + 1) % businessCards.length);
    }, 50000); // Auto-rotate every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="group relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 animate-bounce-gentle"
          onClick={() => window.open('https://wa.me/919876543210', '_blank')}
          aria-label="Contact us on WhatsApp"
        >
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping"></div>
          
          {/* Main glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-green-500 opacity-60 blur-sm animate-pulse"></div>
          
          {/* Secondary glow */}
          <div className="absolute inset-[-8px] rounded-full bg-green-300/30 blur-md animate-pulse-slow"></div>
          
          {/* WhatsApp icon */}
          <MessageCircle className="relative w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
          
          {/* Notification dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-xs font-bold text-white">!</span>
          </div>
        </button>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-slate-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
            Chat with us on WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes bounce-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s infinite;
        }
        
        /* Glow keyframes */
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(34, 197, 94, 0.4), 0 0 40px rgba(34, 197, 94, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(34, 197, 94, 0.6), 0 0 60px rgba(34, 197, 94, 0.3);
          }
        }
        
        .animate-glow {
          animation: glow-pulse 2s infinite;
        }
        
        /* Hover effects */
        .group:hover .animate-ping {
          animation-duration: 0.5s;
        }
      `}</style>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-x"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-8 animate-fade-in-up">
              <Rocket className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium">
                Trusted by 2,500+ businesses worldwide
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in-up animation-delay-200">
              Get More 5-Star Google Reviews
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent animate-gradient-x">
                Effortlessly with AI
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Boost credibility, attract new customers, and grow your business
              reputation without asking customers manually. Our AI-powered QR
              codes make it effortless.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up animation-delay-600">
              <button className="group relative bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <span className="relative flex items-center gap-2">
                  Start Getting Reviews Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group border-2 border-white/30 hover:bg-white/10 hover:border-white/50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 flex items-center gap-3 hover:scale-105 backdrop-blur-sm">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                See Demo
              </button>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in-up animation-delay-800">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <Icon
                      className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`}
                    />
                    <div className="text-3xl font-bold mb-1">{stat.value}</div>
                    <div className="text-slate-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-blue-50/30 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <Target className="w-4 h-4" />
              <span className="text-sm font-medium">The Problem</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 animate-fade-in-up animation-delay-200">
              Why Asking for Reviews{" "}
              <span className="text-red-500">Manually Fails</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              Traditional methods create barriers that prevent satisfied
              customers from sharing their positive experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Too Awkward",
                desc: "Asking customers directly feels pushy and uncomfortable",
                color: "from-red-500 to-pink-500",
                bg: "bg-red-50",
              },
              {
                icon: Clock,
                title: "Takes Time",
                desc: "Staff waste time explaining instead of serving customers",
                color: "from-orange-500 to-yellow-500",
                bg: "bg-orange-50",
              },
              {
                icon: Target,
                title: "Customers Forget",
                desc: "Even willing customers forget by the time they get home",
                color: "from-purple-500 to-indigo-500",
                bg: "bg-purple-50",
              },
              {
                icon: Settings,
                title: "Complex Process",
                desc: "Finding and reviewing on Google is more complicated than it should be",
                color: "from-blue-500 to-cyan-500",
                bg: "bg-blue-50",
              },
            ].map((problem, index) => {
              const Icon = problem.icon;
              return (
                <div
                  key={index}
                  className={`group ${
                    problem.bg
                  } rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-slide-in-up animation-delay-${
                    (index + 1) * 200
                  }`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${problem.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                    {problem.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Section */}
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

            {[
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
            ].map((step, index) => {
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

      {/* Industries Section */}
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

       {/* QR Codes & Review Cards Showcase Section */}
      <section className="py-20 bg-gradient-to-br from-purple-100 via-indigo-50 to-blue-100 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute -top-20 -left-20 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-purple-200 text-purple-600 rounded-full px-4 py-2 mb-4 animate-fade-in-up">
          <QrCode className="w-6 h-6 " />

              <span className="text-sm font-medium">Review Cards</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              QR Codes That Drive{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Google Reviews
              </span>
            </h2>
            {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI-powered QR codes and review cards work for
              businesses across all industries
            </p> */}
          </div>

          {/* Main Card */}
          <div className="mb-6">
            <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 shadow-[0_12px_60px_-18px_rgba(59,130,246,0.35)]">
              <div className="grid lg:grid-cols-2 rounded-[inherit] bg-white/90 backdrop-blur-xl overflow-hidden">

                {/* LEFT PANEL – Animated Business Cards */}
                <div
                  key={bizIndex}
                  className="relative p-10 flex flex-col gap-6 transition-all duration-500"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500/60 via-purple-500/60 to-indigo-600/60" />
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="relative">
                      Business Review Cards
                      <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 rounded-full"></span>
                    </span>
                  </h3>
                  <p className="text-gray-600 mb-6">Real business cards with QR codes for reviews</p>

                    {/* Business Card Display (fixed perfect size & responsive) */}
                    <div className="flex-1 flex items-center justify-center animate-fade-in-up animation-delay-300">
                      <div className="group relative max-w-[238px] lg:h-[350px] h-[280px] rounded-3xl overflow-hidden shadow-2xl bg-transparent flex items-center justify-center transform transition-all duration-700 ease-out hover:scale-105 motion-reduce:transform-none">
                      {/* subtle animated background blob */}
                      <div className="pointer-events-none absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-purple-200/20 rounded-full blur-3xl animate-float opacity-70" />
                      {/* card image */}
                      <img 
                        src={biz.image} 
                        alt={`${biz.name} review card`}
                        className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2 will-change-transform motion-reduce:transform-none"
                      />
                      {/* subtle shine on hover */}
                      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
                      </div>
                    </div>

                  {/* Card Switch Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {businessCards.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setBizIndex(i)}
                          className={`h-2.5 rounded-full transition-all ${i === bizIndex ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-500 shadow' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`}
                          aria-label={`Show business ${i + 1}`}
                        />
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setBizIndex((bizIndex - 1 + businessCards.length) % businessCards.length)}
                        aria-label="Previous business"
                        className="group w-10 h-10 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md flex items-center justify-center transition-all"
                      >
                        <ArrowLeft className="w-4 h-4 text-slate-600 group-hover:text-blue-600" />
                      </button>
                      <button
                        onClick={() => setBizIndex((bizIndex + 1) % businessCards.length)}
                        aria-label="Next business"
                        className="group w-10 h-10 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md flex items-center justify-center transition-all"
                      >
                        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-600" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* RIGHT PANEL – Review Generator */}
                <div className="relative p-10 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 flex flex-col">
                  <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 bg-blue-300/30 rounded-full blur-2xl" />
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-600" />
                    AI Review Generator
                  </h3>

                  {/* Rating Selector */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold uppercase text-slate-500 mb-2">Select Rating</div>
                    <div className="flex gap-2">
                      {[1,2,3,4,5].map(r => (
                        <button
                          key={r}
                          onClick={() => { setRating(r); generateReview(); }}
                          className={`p-2 rounded-xl border transition ${
                            r <= rating
                              ? 'bg-yellow-400/90 border-yellow-500 text-slate-800'
                              : 'bg-white border-slate-200 hover:border-slate-300'
                          }`}
                          aria-label={`Set rating ${r}`}
                        >
                          <Star className={`w-5 h-5 ${r <= rating ? 'fill-yellow-500 text-yellow-500' : 'text-slate-400'}`} />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Language Selector */}
                  <div className="mb-6">
                    <div className="text-xs font-semibold uppercase text-slate-500 mb-2">Language</div>
                    <div className="flex flex-wrap gap-2">
                      {languages.map(l => (
                        <button
                          key={l}
                          onClick={() => setSelectedLanguage(l)}
                          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                            selectedLanguage === l
                              ? 'bg-blue-600 text-white border-blue-600'
                              : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {l}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <div className="text-xs font-semibold uppercase text-slate-500">Select Services to Highlight</div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {biz.services.map(s => {
                        const active = selectedServices.includes(s);
                        return (
                          <button
                            key={s}
                            onClick={() => { toggleService(s); }}
                            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition border ${
                              active
                                ? 'bg-purple-600 text-white border-purple-600'
                                : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Review Text */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold uppercase text-slate-500">Generated Review</span>
                      <span className="text-[10px] text-slate-400">{reviewText.length} chars</span>
                    </div>
                    <div className="rounded-2xl bg-white/90 border border-slate-200 p-4 text-slate-700 text-sm leading-relaxed min-h-[120px] whitespace-pre-line">
                      {reviewText}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={copyReview}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-2xl font-semibold text-sm transition flex items-center justify-center gap-2"
                    >
                      {copied ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Star className="w-4 h-4" />
                          Copy & Review
                        </>
                      )}
                    </button>
                    <button
                      onClick={generateReview}
                      className="flex-1 bg-slate-800 hover:bg-slate-900 text-white py-3 rounded-2xl font-semibold text-sm transition flex items-center justify-center gap-2"
                    >
                      <Sparkles className="w-4 h-4" />
                      Generate New Review
                    </button>
                  </div>

                  <div className="mt-4 text-[10px] text-slate-400 flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-blue-500" />
                    AI generates contextual reviews based on rating & selected services.
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Features</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 animate-fade-in-up animation-delay-200">
              Powerful Features That{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Drive Results
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
              Everything you need to build a stellar online reputation and
              attract more customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`group ${
                    feature.bgColor
                  } rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-slide-in-up animation-delay-${
                    (index + 1) * 100
                  }`}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-slate-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
            {/* Starter Plan */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 animate-slide-in-left animation-delay-200">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Starter Plan</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold">₹1,499</span>
                  <span className="text-slate-400">/year</span>
                </div>
                <div className="text-sm text-slate-400">Renewal: ₹499/year</div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Up to 100 review requests/month",
                  "AI-powered review writing",
                  "Custom QR code",
                  "Basic analytics dashboard",
                  "Email support",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Choose Starter Plan
              </button>
            </div>

            {/* Business Plan */}
            <div className="group relative bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-purple-400/30 rounded-3xl p-8 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 animate-slide-in-right animation-delay-200">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm px-6 py-2 rounded-full font-semibold animate-pulse">
                  MOST POPULAR
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Business Plan</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold">₹6,500</span>
                  <span className="text-slate-400">/year</span>
                </div>
                <div className="text-sm text-slate-400">
                  Renewal: ₹2,000/year
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited review requests",
                  "Advanced AI review writing",
                  "Multiple custom QR codes",
                  "Advanced analytics & reporting",
                  "Priority 24/7 support",
                  "WhatsApp integration",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Choose Business Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-yellow-50 to-orange-50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-600 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <Star className="w-4 h-4" />
              <span className="text-sm font-medium">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 animate-fade-in-up animation-delay-200">
              What Our <span className="text-yellow-600">Customers Say</span>
            </h2>
            <p className="text-xl text-slate-600 animate-fade-in-up animation-delay-400">
              Join thousands of businesses already growing their reputation with
              our platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-slide-in-up animation-delay-${
                  (index + 1) * 200
                }`}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <div className="mb-4">
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 rounded-full px-3 py-1 text-sm font-semibold mb-4">
                    <TrendingUp className="w-4 h-4" />
                    {testimonial.growth}
                  </div>
                </div>

                <p className="text-slate-600 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover group-hover:scale-110 transition-transform duration-300 ring-4 ring-white shadow-lg"
                  />
                  <div>
                    <div className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600">
                      {testimonial.business}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Customer Success Section (improved) ===== */}
      <section className="py-28 px-4 bg-gradient-to-br from-slate-50 via-white to-emerald-50 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 w-[32rem] h-[32rem] bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-40 -right-28 w-[30rem] h-[30rem] bg-indigo-200/30 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-5 py-2 mb-7 font-medium shadow-sm">
              <Users className="w-4 h-4" />
              Customer Success
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Trusted by 2,500+{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-indigo-600 bg-clip-text text-transparent">
                Indian Businesses
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Real growth outcomes delivered through AI‑powered review
              automation.
            </p>
          </div>

          {/* Main Card */}
          <div className="mb-16">
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
                    “{activeCase.quote}”
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
                              // Map rough growth percent string to width
                              const n = parseInt(
                                activeCase.growthPct.replace(/[^0-9]/g, ""),
                                10
                              );
                              return (
                                Math.min(100, Math.log10(n + 10) * 25 + 40) +
                                "%"
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
                  className="group relative rounded-2xl p-6 bg-white/80 backdrop-blur border border-slate-200 hover:border-emerald-300 transition shadow-sm hover:shadow-lg"
                >
                  <div className="w-12 h-12 mb-5 rounded-xl bg-gradient-to-br from-emerald-50 to-indigo-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-bold text-slate-900">
                    {s.value}
                  </div>
                  <div className="text-sm font-medium text-slate-500 mt-1">
                    {s.label}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-400 rounded-b-2xl transition-opacity"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* simple keyframes (if not already in global) */}
        <style>{`
          @keyframes grow { from { width:0 } to { } }
        `}</style>
      </section>
      {/* ===== end Customer Success Section (improved) ===== */}

      {/* FAQ Section */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 animate-fade-in-up animation-delay-200">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-xl text-slate-600 animate-fade-in-up animation-delay-400">
              Everything you need to know about our AI-powered review system.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`group bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 animate-slide-in-up animation-delay-${
                  (index + 1) * 100
                }`}
              >
                <button
                  className="w-full text-left p-6 flex justify-between items-center hover:bg-slate-100 transition-all duration-300"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-semibold text-slate-900 text-lg pr-4">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openFaq === index ? (
                      <ChevronUp className="w-6 h-6 text-slate-500 group-hover:text-blue-600 transition-colors" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-slate-500 group-hover:text-blue-600 transition-colors" />
                    )}
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-slate-50 to-blue-50 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Contact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 animate-fade-in-up animation-delay-200">
              Ready to Get More <span className="text-green-600">Reviews?</span>
            </h2>
            <p className="text-xl text-slate-600 animate-fade-in-up animation-delay-400">
              Contact us on WhatsApp or Live Chat to get started today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left animation-delay-300">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-4 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-slate-400 bg-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-4 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-slate-400 bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-4 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-slate-400 bg-white"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-4 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-slate-400 bg-white resize-none"
                    placeholder="Tell us about your business and how we can help..."
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8 animate-slide-in-right animation-delay-300">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      text: "support@aireviews.com",
                      color: "text-blue-600",
                    },
                    {
                      icon: MessageCircle,
                      text: "WhatsApp: +91 98765 43210",
                      color: "text-green-600",
                    },
                    {
                      icon: Phone,
                      text: "Phone: +91 11-4567-8900",
                      color: "text-purple-600",
                    },
                    {
                      icon: MapPin,
                      text: "Office: Delhi, Mumbai, Bangalore",
                      color: "text-red-600",
                    },
                  ].map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
                      >
                        <div
                          className={`w-12 h-12 ${contact.color
                            .replace("text-", "bg-")
                            .replace(
                              "-600",
                              "-100"
                            )} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <Icon className={`w-6 h-6 ${contact.color}`} />
                        </div>
                        <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                          {contact.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-3xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h4 className="text-xl font-bold text-slate-900 mb-3">
                  Quick Start Support
                </h4>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Get your first QR code and start collecting reviews in under 5
                  minutes with our dedicated onboarding team.
                </p>
                <button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 transform hover:scale-105 hover:shadow-xl">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="animate-fade-in-up animation-delay-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <QrCode className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">AI Reviews</h3>
              </div>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Helping businesses get more 5-star Google reviews with
                AI-powered QR codes. Trusted by 2,500+ businesses worldwide.
              </p>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                  >
                    <Icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-up animation-delay-200">
              <h4 className="font-bold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "Features", "Pricing", "Industries", "About Us"].map(
                  (link, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-slate-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="animate-fade-in-up animation-delay-300">
              <h4 className="font-bold text-lg mb-6">Support</h4>
              <ul className="space-y-3">
                {[
                  "Help Center",
                  "Contact Us",
                  "WhatsApp Support",
                  "Live Chat",
                  "Documentation",
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-in-up animation-delay-400">
              <h4 className="font-bold text-lg mb-6">Newsletter</h4>
              <p className="text-slate-400 mb-6">
                Get tips on building your online reputation and growing your
                business.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-slate-600 text-white placeholder-slate-400"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 mb-4 md:mb-0">
              © 2025 AI Reviews. All rights reserved. Made with ❤️ for
              businesses worldwide.
            </p>
            <div className="flex gap-8 text-slate-400">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (link, index) => (
                  <a
                    key={index}
                    href="#"
                    className="hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    {link}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
