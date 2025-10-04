import React, { useState, useEffect } from "react";
import {
  Star,
  Sparkles,
  CheckCircle,
  QrCode,
  ArrowLeft,
  ArrowRight,
  Languages,
} from "lucide-react";

const businessCards = [
  {
    name: "SCC INFOTECH LLP",
    type: "Information Technology and Services",
    location: "Surat",
    logo: "https://via.placeholder.com/120x120.png?text=SCC",
    colorFrom: "from-indigo-900",
    colorTo: "to-purple-900",
    services: ["Website", "Application", "iOS", "Developer", "Environment"],
    image: "/cards/SCC-INFOTECH-LLP-review-card.png",
  },
  {
    name: "Raaji na Red",
    type: "Food manufacturer",
    location: "Uttran, Surat, Gujarat",
    logo: "https://via.placeholder.com/120x120.png?text=RNR",
    colorFrom: "from-rose-900",
    colorTo: "to-orange-900",
    services: ["Taste", "Quality", "Packaging", "Service", "Delivery"],
    image: "/cards/Raaji-na-Red-review-card.png",
  },
  {
    name: "Jay Khodiyar Selection",
    type: "Clothing store",
    location: "148, Vikas Shoppers, Surat, Gujarat 395006",
    logo: "https://via.placeholder.com/120x120.png?text=JKS",
    colorFrom: "from-fuchsia-900",
    colorTo: "to-violet-900",
    services: ["Fabric", "Design", "Fitting", "Pricing", "Support"],
    image: "/cards/Jay-Khodiyar-Selection-review-card.png",
  },
  {
    name: "Stickwell Papers Pvt.Ltd",
    type: "Corporate office",
    location: "Surat",
    logo: "https://via.placeholder.com/120x120.png?text=SWP",
    colorFrom: "from-sky-900",
    colorTo: "to-blue-900",
    services: ["Quality", "Service", "Logistics", "Pricing", "Reliability"],
    image: "/cards/Stickwell-Papers-Pvt-Ltd-review-card.png",
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
    const picked = selectedServices.slice(0, 3).join(", ") || "service";

    if (selectedLanguage === "Gujarati") {
      const adjectivesGuj: Record<number, string> = {
        5: "ઉત્કૃષ્ટ, સરળ અને ખરેખર પ્રભાવશાળી",
        4: "ખૂબ જ સારી અને વિશ્વસનીય",
        3: "એકંદરે સારી છે પરંતુ સુધારણાની જરૂર છે",
        2: "આ વખતે અપેક્ષા કરતાં ઓછું",
        1: "નિરાશાજનક",
      };

      const base = `${biz.name} સાથેનો અમારો અનુભવ ${adjectivesGuj[rating]} હતો. તેમની ${picked} ખરેખર અલગ હતી. ${biz.location} માં ટીમે સમગ્ર પ્રક્રિયાને સરળ અને વ્યાવસાયિક બનાવી.`;
      const tail =
        rating >= 4
          ? " ગુણવત્તા અને વિશ્વાસની શોધમાં કોઈપણને ખૂબ ભલામણ કરું છું."
          : rating === 3
          ? " અમે માનીએ છીએ કે ભવિષ્યમાં સુધારાઓ તેને વધુ સારું બનાવશે."
          : " આશા રાખું છું કે તેઓ ટૂંક સમયમાં આ મુદ્દાઓનું નિરાકરણ કરશે.";
      setReviewText(`"${base}${tail}"`);
    } else if (selectedLanguage === "Hindi") {
      const adjectivesHin: Record<number, string> = {
        5: "उत्कृष्ट, निर्बाध और वास्तव में प्रभावशाली",
        4: "बहुत अच्छा और विश्वसनीय",
        3: "कुल मिलाकर अच्छा लेकिन सुधार की गुंजाइश है",
        2: "इस बार उम्मीद से कम",
        1: "निराशाजनक",
      };

      const base = `${biz.name} के साथ हमारा अनुभव ${adjectivesHin[rating]} था। उनकी ${picked} वास्तव में उत्कृष्ट थी। ${biz.location} में टीम ने पूरी प्रक्रिया को आसान और पेशेवर बना दिया।`;
      const tail =
        rating >= 4
          ? " गुणवत्ता और विश्वास की तलाश करने वाले किसी भी व्यक्ति को अत्यधिक अनुशंसा करते हैं।"
          : rating === 3
          ? " हम मानते हैं कि भविष्य में सुधार इसे और बेहतर बना देंगे।"
          : " आशा है कि वे जल्द ही इन मुद्दों का समाधान करेंगे।";
      setReviewText(`"${base}${tail}"`);
    } else {
      // English
      const adjectives: Record<number, string> = {
        5: "outstanding, seamless and truly impressive",
        4: "very good and reliable",
        3: "good overall with room for improvement",
        2: "below expectations this time",
        1: "disappointing",
      };

      const base = `Our experience with ${biz.name} was ${adjectives[rating]}. Their ${picked} really stood out. The team in ${biz.location} made the whole process easy and professional.`;
      const tail =
        rating >= 4
          ? " Highly recommend them to anyone looking for quality and trust."
          : rating === 3
          ? " We believe future enhancements will make it even better."
          : " Hoping they address these issues soon.";
      setReviewText(`"${base}${tail}"`);
    }

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
    <section className="py-16 bg-gradient-to-br from-purple-100 via-indigo-50 to-blue-100 relative overflow-hidden">
      {/* Enhanced Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Gradient Orbs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

        {/* Floating Dots Pattern */}
        <div
          className="absolute top-20 right-32 w-2 h-2 bg-purple-400 rounded-full opacity-80 animate-bounce shadow-[0_0_18px_8px_rgba(192,132,252,0.6)]"
          style={{ animationDelay: '0s', animationDuration: '3s' }}
        ></div>
        <div
          className="absolute top-40 right-48 w-2 h-2 bg-blue-400 rounded-full opacity-80 animate-bounce shadow-[0_0_18px_8px_rgba(96,165,250,0.55)]"
          style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}
        ></div>
        <div
          className="absolute top-60 right-40 w-2 h-2 bg-indigo-400 rounded-full opacity-80 animate-bounce shadow-[0_0_18px_8px_rgba(129,140,248,0.55)]"
          style={{ animationDelay: '1s', animationDuration: '4s' }}
        ></div>
        <div
          className="absolute bottom-32 left-24 w-2 h-2 bg-pink-400 rounded-full opacity-80 animate-bounce shadow-[0_0_18px_8px_rgba(244,114,182,0.6)]"
          style={{ animationDelay: '0.3s', animationDuration: '3.2s' }}
        ></div>
        <div
          className="absolute bottom-48 left-40 w-2 h-2 bg-purple-400 rounded-full opacity-80 animate-bounce shadow-[0_0_18px_8px_rgba(192,132,252,0.6)]"
          style={{ animationDelay: '0.8s', animationDuration: '3.8s' }}
        ></div>
        
        {/* QR Code Icons Pattern */}
        <div className="absolute top-24 left-16 opacity-10">
          <QrCode className="w-12 h-12 text-purple-600" />
        </div>
        <div className="absolute top-1/2 right-20 opacity-10">
          <QrCode className="w-16 h-16 text-blue-600" />
        </div>
        <div className="absolute bottom-24 left-1/4 opacity-10">
          <QrCode className="w-10 h-10 text-indigo-600" />
        </div>
        
        {/* Star Icons Pattern */}
        <div className="absolute top-32 right-1/4 opacity-15">
          <Star className="w-10 h-10 text-yellow-500 fill-yellow-400" />
        </div>
        <div className="absolute bottom-40 right-32 opacity-15">
          <Star className="w-10 h-10 text-yellow-500 fill-yellow-400" />
        </div>
        <div className="absolute top-1/3 left-20 opacity-15">
          <Star className="w-10 h-10 text-yellow-500 fill-yellow-400" />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Animated Gradient Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30 animate-[shimmer_3s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30 animate-[shimmer_3s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Diagonal Lines */}
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-purple-300/30 to-transparent" style={{ left: '20%' }}></div>
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-blue-300/30 to-transparent" style={{ left: '80%' }}></div>
        
        {/* Sparkles Effect */}
        <div className="absolute top-1/4 left-1/2 opacity-20">
          <Sparkles className="w-8 h-8 text-purple-500 animate-pulse" />
        </div>
        <div className="absolute bottom-1/3 right-1/3 opacity-20">
          <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        
        {/* Radial Gradient Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-gradient-radial from-white/40 via-transparent to-transparent rounded-full"></div>
      </div>

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
            <div className="grid lg:grid-cols-[minmax(300px,420px)_1fr] rounded-[inherit] bg-white/90 backdrop-blur-xl overflow-hidden">
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
                <p className="text-gray-600 mb-0">
                  Real business cards with QR codes for reviews
                </p>

                {/* Business Card Display */}
                <div className="flex-1 flex items-center justify-center animate-fade-in-up animation-delay-300">
                  <div className="group relative max-w-[258px] lg:h-[380px] h-[280px] rounded-3xl overflow-hidden shadow-2xl bg-transparent flex items-center justify-center transform transition-all duration-700 ease-out hover:scale-105 motion-reduce:transform-none">
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
                        className={`h-2.5 rounded-full transition-all ${
                          i === bizIndex
                            ? "w-8 bg-gradient-to-r from-blue-500 to-purple-500 shadow"
                            : "w-2.5 bg-slate-300 hover:bg-slate-400"
                        }`}
                        aria-label={`Show business ${i + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() =>
                        setBizIndex(
                          (bizIndex - 1 + businessCards.length) %
                            businessCards.length
                        )
                      }
                      aria-label="Previous business"
                      className="group w-10 h-10 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md flex items-center justify-center transition-all"
                    >
                      <ArrowLeft className="w-4 h-4 text-slate-600 group-hover:text-blue-600" />
                    </button>
                    <button
                      onClick={() =>
                        setBizIndex((bizIndex + 1) % businessCards.length)
                      }
                      aria-label="Next business"
                      className="group w-10 h-10 rounded-xl border border-slate-200 bg-white hover:border-blue-300 hover:shadow-md flex items-center justify-center transition-all"
                    >
                      <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-600" />
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT PANEL – Review Generator */}
              <div className=" relative p-10 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 flex flex-col">
                <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 bg-blue-300/30 rounded-full blur-2xl" />

                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  AI Review Generator
                </h3>

                {/* Rating + Language Row */}
                <div className="mb-6 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  {/* Rating Selector (Left) */}
                  <div>
                    <div className="text-xs font-semibold uppercase text-slate-500 mb-2">
                      Select Rating
                    </div>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((r) => (
                        <button
                          key={r}
                          onClick={() => {
                            setRating(r);
                            generateReview();
                          }}
                          className={`p-2 rounded-xl border transition ${
                            r <= rating
                              ? "bg-yellow-400/90 border-yellow-500 text-slate-800"
                              : "bg-white border-slate-200 hover:border-slate-300"
                          }`}
                          aria-label={`Set rating ${r}`}
                        >
                          <Star
                            className={`w-5 h-5 ${
                              r <= rating
                                ? "fill-yellow-500 text-yellow-500"
                                : "text-slate-400"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Language Selector (Right) */}
                  <div className="md:text-right">
                    <div className="flex items-center gap-2 mb-2">
                      <Languages className="w-4 h-4 text-orange-600" />
                      <div className="text-xs font-semibold uppercase text-slate-500">
                        Language
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {languages.map((l) => (
                        <button
                          key={l}
                          onClick={() => setSelectedLanguage(l)}
                          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                            selectedLanguage === l
                              ? "bg-blue-600 text-white border-blue-600"
                              : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          {l}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <div className="text-xs font-semibold uppercase text-slate-500">
                      Select Services to Highlight
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {biz.services.map((s) => {
                      const active = selectedServices.includes(s);
                      return (
                        <button
                          key={s}
                          onClick={() => {
                            toggleService(s);
                          }}
                          className={`px-3 py-1.5 rounded-full text-xs font-semibold transition border ${
                            active
                              ? "bg-purple-600 text-white border-purple-600"
                              : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
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
                    <span className="text-xs font-semibold uppercase text-slate-500">
                      Generated Review
                    </span>
                    <span className="text-[10px] text-slate-400">
                      {reviewText.length} chars
                    </span>
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

                <div className="mt-4 text-[13px] text-slate-400 flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-blue-500" />
                  AI generates contextual reviews based on rating & selected
                  services.
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
