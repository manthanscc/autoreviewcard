import React, { useState, useEffect } from 'react';
import { Star, Sparkles, CheckCircle, QrCode, ArrowLeft, ArrowRight } from 'lucide-react';

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

export const Reviewcards: React.FC = () => {
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
    }, 50000); // Auto-rotate every 50 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-100 via-indigo-50 to-blue-100 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute -top-20 -left-20 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-purple-200 text-purple-600 rounded-full px-4 py-2 mb-4 animate-fade-in-up">
            <QrCode className="w-6 h-6" />
            <span className="text-sm font-medium">Review Cards</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            QR Codes That Drive{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Google Reviews
            </span>
          </h2>
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

                {/* Business Card Display */}
                <div className="flex-1 flex items-center justify-center animate-fade-in-up animation-delay-300">
                  <div className="group relative max-w-[238px] lg:h-[350px] h-[280px] rounded-3xl overflow-hidden shadow-2xl bg-transparent flex items-center justify-center transform transition-all duration-700 ease-out hover:scale-105 motion-reduce:transform-none">
                    <div className="pointer-events-none absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-purple-200/20 rounded-full blur-3xl animate-float opacity-70" />
                    <img 
                      src={biz.image} 
                      alt={`${biz.name} review card`}
                      className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2 will-change-transform motion-reduce:transform-none"
                    />
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
  );
};

export default Reviewcards;