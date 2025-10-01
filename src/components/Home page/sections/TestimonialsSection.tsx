import React from "react";
import { Star, Quote } from "lucide-react";

const TestimonialsSection: React.FC = () => {
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

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-white to-purple-50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-600 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 animate-fade-in-up animation-delay-200">
            What Our{" "}
            <span className="text-purple-600">Customers Say</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400">
            Real businesses, real results. See how our AI-powered review
            system is transforming businesses across India.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 animate-slide-in-up animation-delay-${
                (index + 1) * 200
              } relative border border-slate-100`}
            >
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-4 h-4 text-white" />
              </div>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-current"
                  />
                ))}
              </div>

              <p className="text-slate-700 mb-6 text-lg leading-relaxed group-hover:text-slate-800 transition-colors">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-200"
                />
                <div className="flex-1">
                  <div className="font-bold text-slate-900">
                    {testimonial.name}
                  </div>
                  <div className="text-slate-600 text-sm">
                    {testimonial.business}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-green-600 font-bold text-sm">
                    {testimonial.growth}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;