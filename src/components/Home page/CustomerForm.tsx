import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Star,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Gift,
  ArrowLeft, // Add this import
} from "lucide-react";
import Footer from "./Footer";

type FormState = {
  fullName: string;
  mobileNumber: string;
  email: string;
  businessName: string;
  slogan?: string;
  category: string;
  details: string;
  address: string;
};

const initial: FormState = {
  fullName: "",
  mobileNumber: "",
  email: "",
  businessName: "",
  slogan: "",
  category: "",
  details: "",
  address: "",
};

const categories = [
  "Healthcare",
  "Salon & Spa",
  "Restaurant",
  "Retail",
  "Gym/Fitness",
  "IT/Software",
  "Education",
  "Real Estate",
  "Automobile",
  "Manufacturing",
  "Other",
];

const WHATSAPP_NUMBER = "9426479677";

const benefits = [
  {
    icon: Star,
    title: "Boost Your Ratings",
    desc: "Get more 5-star reviews automatically",
    color: "text-yellow-400",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/30",
  },
  {
    icon: Users,
    title: "Build Trust",
    desc: "Increase customer confidence instantly",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
  },
  {
    icon: TrendingUp,
    title: "Grow Revenue",
    desc: "More reviews = more customers",
    color: "text-green-400",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
  },
  {
    icon: Shield,
    title: "Easy & Secure",
    desc: "Simple QR codes, protected data",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
  },
];

export const CustomerForm: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [otherCategory, setOtherCategory] = useState("");

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (name === "category" && value !== "Other") setOtherCategory("");
  };

  const validate = () => {
    if (!form.fullName.trim()) return "Please enter full name.";
    if (!form.mobileNumber.trim()) return "Please enter mobile number.";
    if (!/^\+?\d[\d\s-]{7,}$/.test(form.mobileNumber.trim()))
      return "Enter a valid mobile number.";
    if (!form.email.trim()) return "Please enter email.";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim()))
      return "Enter a valid email.";
    if (!form.businessName.trim()) return "Please enter business name.";
    if (!(form.category || "").trim())
      return "Please select business category.";
    if (form.category === "Other" && !otherCategory.trim())
      return "Please specify your business category.";
    if (!form.details.trim()) return "Please enter business details.";
    if (!form.address.trim()) return "Please enter business address.";
    return null;
  };

  const buildWhatsAppText = (data: FormState) => {
    const category = data.category === "Other" ? otherCategory : data.category;
    const lines = [
      "🎯 *New Business Inquiry*",
      "",
      "👤 *Contact Information*",
      `• Full Name: ${data.fullName}`,
      `• Mobile: ${data.mobileNumber}`,
      `• Email: ${data.email}`,
      "",
      "🏢 *Business Details*",
      `• Business Name: ${data.businessName}`,
      `• Slogan: ${data.slogan?.trim() ? data.slogan : "—"}`,
      `• Category: ${category || "—"}`,
      `• Details: ${data.details}`,
      `• Address: ${data.address}`,
      "",
      "📅 Submitted: " + new Date().toLocaleString(),
    ];
    return lines.join("\n");
  };

  const saveToDatabase = async (data: FormState) => {
    // Replace with your real API endpoint
    await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        category: data.category === "Other" ? otherCategory : data.category,
        createdAt: new Date().toISOString(),
      }),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const err = validate();
    if (err) {
      setError(err);
      return;
    }
    setSubmitting(true);
    try {
      // 1) Save to DB
      await saveToDatabase(form);

      // 2) Send to WhatsApp
      const msg = buildWhatsAppText(form);
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        msg
      )}`;
      window.open(url, "_blank", "noopener,noreferrer");

      setSent(true);
      setForm(initial);
      setOtherCategory("");
      setTimeout(() => setSent(false), 4000);
    } catch (e) {
      setError("Could not submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div
        tabIndex={-1}
        className="py-24 px-4 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden scroll-mt-24"
      >
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="fixed top-8 left-8 z-50 group flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 transition-all duration-300 hover:scale-105 shadow-xl"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold">Back to Home</span>
        </button>

        {/* Enhanced Background Design */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Multiple Gradient Orbs */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/3 left-1/3 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>

          {/* Floating Icons */}
          <div className="absolute top-20 right-32 opacity-10 animate-float">
            <Star className="w-16 h-16 text-yellow-400 fill-yellow-400" />
          </div>
          <div className="absolute bottom-32 left-24 opacity-10 animate-float-delayed">
            <Users className="w-14 h-14 text-blue-400" />
          </div>
          <div
            className="absolute top-1/2 right-20 opacity-10 animate-pulse"
            style={{ animationDuration: "3s" }}
          >
            <TrendingUp className="w-18 h-18 text-green-400" />
          </div>
          <div className="absolute top-1/4 left-20 opacity-10 animate-float">
            <Sparkles className="w-12 h-12 text-purple-400" />
          </div>

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          {/* Diagonal Lines */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"
              style={{ left: "20%" }}
            ></div>
            <div
              className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent"
              style={{ left: "80%" }}
            ></div>
          </div>

          {/* Animated Shimmer Lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-[shimmer_3s_ease-in-out_infinite]"></div>
          <div
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent animate-[shimmer_3s_ease-in-out_infinite]"
            style={{ animationDelay: "1.5s" }}
          ></div>

          {/* Floating Dots */}
          <div
            className="absolute top-24 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-50 animate-bounce"
            style={{ animationDuration: "3s" }}
          ></div>
          <div
            className="absolute top-40 right-1/3 w-2 h-2 bg-purple-400 rounded-full opacity-50 animate-bounce"
            style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute bottom-32 left-1/3 w-2 h-2 bg-pink-400 rounded-full opacity-50 animate-bounce"
            style={{ animationDuration: "4s", animationDelay: "1s" }}
          ></div>

          {/* Radial Gradient Spotlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] bg-gradient-radial from-indigo-600/20 via-transparent to-transparent"></div>

          {/* Vignette Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-slate-900/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/40"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30 rounded-full px-6 py-3 mb-8 animate-fade-in-up backdrop-blur-sm shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/20 to-green-400/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <MessageCircle className="w-5 h-5 relative z-10 animate-pulse" />
              <span className="text-sm font-bold relative z-10">
                Get Started Today
              </span>
              <Zap className="w-4 h-4 relative z-10 text-yellow-400" />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200">
              Ready to Get More{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  5-Star Reviews?
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></span>
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
              Join 2,500+ businesses already growing with AI-powered review
              cards.
              <br />
              <span className="text-emerald-400 font-semibold">
                Your details are saved & sent to WhatsApp instantly.
              </span>
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12">
            {/* Form Section */}
            <div className="animate-slide-in-left animation-delay-800">
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl overflow-hidden">
                {/* Card Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50"></div>

                {/* Form Header */}
                <div className="relative mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                      <Gift className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      Claim Your Free Setup
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm">
                    Fill in your details below. We'll contact you on WhatsApp
                    within minutes.
                  </p>
                </div>

                <form className="space-y-6 relative" onSubmit={handleSubmit}>
                  {error && (
                    <div className="flex items-center gap-2 text-red-300 bg-red-500/20 border border-red-500/40 rounded-xl px-4 py-3 backdrop-blur-sm animate-shake">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm font-medium">{error}</span>
                    </div>
                  )}
                  {sent && (
                    <div className="flex items-center gap-2 text-emerald-300 bg-emerald-500/20 border border-emerald-500/40 rounded-xl px-4 py-3 backdrop-blur-sm animate-bounce">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm font-medium">
                        Success! Opening WhatsApp now...
                      </span>
                    </div>
                  )}

                  {/* Name + Mobile */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="fullName"
                        value={form.fullName}
                        onChange={onChange}
                        type="text"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 text-white placeholder-slate-500 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 hover:border-slate-500 backdrop-blur-sm"
                        placeholder="John Doe"
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Mobile Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="mobileNumber"
                        value={form.mobileNumber}
                        onChange={onChange}
                        type="tel"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 text-white placeholder-slate-500 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 hover:border-slate-500 backdrop-blur-sm"
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  {/* Email + Business Name */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="email"
                        value={form.email}
                        onChange={onChange}
                        type="email"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 text-white placeholder-slate-500 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 hover:border-slate-500 backdrop-blur-sm"
                        placeholder="john@company.com"
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-300 mb-2">
                        Business Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="businessName"
                        value={form.businessName}
                        onChange={onChange}
                        type="text"
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 text-white placeholder-slate-500 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 hover:border-slate-500 backdrop-blur-sm"
                        placeholder="ABC Company"
                      />
                    </div>
                  </div>

                  {/* Slogan */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Business Slogan{" "}
                      <span className="text-slate-500 font-normal">
                        (Optional)
                      </span>
                    </label>
                    <input
                      name="slogan"
                      value={form.slogan}
                      onChange={onChange}
                      type="text"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 text-white placeholder-slate-500 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 hover:border-slate-500 backdrop-blur-sm"
                      placeholder="We build trust with every review"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Business Category <span className="text-red-400">*</span>
                    </label>
                    <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                      <select
                        name="category"
                        value={form.category}
                        onChange={onChange}
                        className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 text-white rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 hover:border-slate-500 backdrop-blur-sm"
                      >
                        <option value="" disabled>
                          Select a category
                        </option>
                        {categories.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                      {form.category === "Other" && (
                        <input
                          value={otherCategory}
                          onChange={(e) => setOtherCategory(e.target.value)}
                          type="text"
                          className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 text-white placeholder-slate-500 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 hover:border-slate-500 backdrop-blur-sm"
                          placeholder="Specify your category"
                        />
                      )}
                    </div>
                  </div>

                  {/* Details */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Business Details <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="details"
                      value={form.details}
                      onChange={onChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 text-white placeholder-slate-500 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 hover:border-slate-500 backdrop-blur-sm resize-none"
                      placeholder="What products/services do you offer? Any specialties or goals?"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Business Address <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="address"
                      value={form.address}
                      onChange={onChange}
                      rows={2}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600/50 text-white placeholder-slate-500 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 hover:border-slate-500 backdrop-blur-sm resize-none"
                      placeholder="123 Main St, City, State, Country - 123456"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group relative w-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:to-teal-700 disabled:opacity-60 disabled:cursor-not-allowed text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl flex items-center justify-center gap-3 overflow-hidden"
                  >
                    {/* Button Shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                    {submitting ? (
                      <>
                        <span className="inline-block w-5 h-5 border-2 border-white/50 border-t-white rounded-full animate-spin"></span>
                        <span className="relative">Processing...</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="w-5 h-5 relative group-hover:rotate-12 transition-transform" />
                        <span className="relative">Send to WhatsApp</span>
                        <Sparkles className="w-5 h-5 relative group-hover:scale-110 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-xs text-slate-400 text-center">
                    🔒 Your information is secure and will only be used to
                    contact you.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6 animate-slide-in-right animation-delay-800">
              {/* Contact Cards */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Phone className="w-6 h-6 text-green-400" />
                  Contact Us
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      text: "support@aireviews.com",
                      color: "text-blue-400",
                      bgColor: "bg-blue-500/10",
                      borderColor: "border-blue-500/30",
                    },
                    {
                      icon: Phone,
                      text: "Call: +91 94264 79677",
                      color: "text-purple-400",
                      bgColor: "bg-purple-500/10",
                      borderColor: "border-purple-500/30",
                    },
                    {
                      icon: MapPin,
                      text: "Surat, Gujarat, India",
                      color: "text-red-400",
                      bgColor: "bg-red-500/10",
                      borderColor: "border-red-500/30",
                    },
                  ].map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <div
                        key={index}
                        className={`group flex items-center gap-4 p-4 ${contact.bgColor} border ${contact.borderColor} rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-sm`}
                      >
                        <div
                          className={`w-12 h-12 ${contact.bgColor} border ${contact.borderColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                        >
                          <Icon className={`w-6 h-6 ${contact.color}`} />
                        </div>
                        <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                          {contact.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Support Card */}
              <div className="relative bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl border border-green-500/30 rounded-3xl p-8 shadow-xl overflow-hidden group hover:scale-105 transition-all duration-300">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-green-500/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-green-500/20 border border-green-500/40 rounded-xl flex items-center justify-center">
                      <Zap className="w-7 h-7 text-green-400 animate-pulse" />
                    </div>
                    <h4 className="text-xl font-bold text-white">
                      Instant Support
                    </h4>
                  </div>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Get your QR code and start collecting reviews in under{" "}
                    <span className="text-green-400 font-bold">5 minutes</span>!
                  </p>
                  <button
                    onClick={() =>
                      window.open("https://wa.me/9426479677", "_blank")
                    }
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 hover:shadow-xl shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-1">
                      2,500+
                    </div>
                    <div className="text-xs text-slate-400">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-400 mb-1">
                      50K+
                    </div>
                    <div className="text-xs text-slate-400">
                      Reviews Generated
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-400 mb-1">
                      4.9
                    </div>
                    <div className="text-xs text-slate-400">Average Rating</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-400 mb-1">
                      24/7
                    </div>
                    <div className="text-xs text-slate-400">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 animate-fade-in-up animation-delay-600">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={`group relative ${benefit.bgColor} border ${benefit.borderColor} rounded-2xl p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300 overflow-hidden`}
                >
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <Icon
                    className={`${benefit.color} w-8 h-8 mb-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}
                  />
                  <h4 className="text-white font-bold text-sm mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-slate-400 text-xs">{benefit.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
        <Footer />
    </section>
  );
};

export default CustomerForm;
