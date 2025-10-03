import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import React, { useState } from 'react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const initial: FormState = { name: '', email: '', message: '' };

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>(initial);
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill all fields.');
      return;
    }
    setSubmitting(true);
    try {
      // Replace with real API call
      await new Promise(r => setTimeout(r, 900));
      setSent(true);
      setForm(initial);
    } catch (e) {
      setError('Something went wrong. Try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" tabIndex={-1} className="py-24 px-4 bg-gradient-to-br from-slate-900 to-purple-900 text-white relative overflow-hidden scroll-mt-24">
        {/* Decorative background elements */}
        <div className="pointer-events-none absolute -top-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full px-4 py-2 mb-6 animate-fade-in-up backdrop-blur-sm">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Contact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200">
              Ready to Get More <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Reviews?</span>
            </h2>
            <p className="text-xl text-slate-300 animate-fade-in-up animation-delay-400">
              Contact us on WhatsApp or Live Chat to get started today.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left animation-delay-300">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600 text-white placeholder-slate-400 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-slate-500 backdrop-blur-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600 text-white placeholder-slate-400 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-slate-500 backdrop-blur-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600 text-white placeholder-slate-400 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-slate-500 backdrop-blur-sm"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-4 bg-slate-800/50 border border-slate-600 text-white placeholder-slate-400 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-slate-500 backdrop-blur-sm resize-none"
                    placeholder="Tell us about your business and how we can help..."
                  ></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8 animate-slide-in-right animation-delay-300">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      text: "support@aireviews.com",
                      color: "text-blue-400",
                      bgColor: "bg-blue-500/10",
                      hoverBg: "hover:bg-blue-500/20",
                    },
                    {
                      icon: MessageCircle,
                      text: "WhatsApp: +91 94264 79677",
                      color: "text-green-400",
                      bgColor: "bg-green-500/10",
                      hoverBg: "hover:bg-green-500/20",
                    },
                    {
                      icon: Phone,
                      text: "Phone: +91 94264 79677",
                      color: "text-purple-400",
                      bgColor: "bg-purple-500/10",
                      hoverBg: "hover:bg-purple-500/20",
                    },
                    {
                      icon: MapPin,
                      text: "Office: Surat, Gujarat, India",
                      color: "text-red-400",
                      bgColor: "bg-red-500/10",
                      hoverBg: "hover:bg-red-500/20",
                    },
                  ].map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-4 p-4 bg-slate-800/30 border border-slate-700/50 ${contact.hoverBg} rounded-2xl hover:shadow-lg hover:shadow-slate-900/20 transition-all duration-300 hover:scale-105 cursor-pointer group backdrop-blur-sm`}
                      >
                        <div
                          className={`w-12 h-12 ${contact.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
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

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-slate-600/50 p-8 rounded-3xl hover:shadow-lg hover:shadow-slate-900/20 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-white mb-3">
                  Quick Start Support
                </h4>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Get your first QR code and start collecting reviews in under 5
                  minutes with our dedicated onboarding team.
                </p>
                <button 
                  onClick={() => window.open('https://wa.me/9426479677', '_blank')}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-3 transform hover:scale-105 hover:shadow-xl shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ContactForm;