import React from 'react';
import { Star, TrendingUp } from 'lucide-react';

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

export const Testimonials: React.FC = () => {
  return (
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
  );
};

export default Testimonials;