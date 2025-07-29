import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "Absolutely exceptional service and accommodations. The staff went above and beyond to make our anniversary celebration unforgettable. The attention to detail was remarkable.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "David Chen",
      location: "Singapore",
      rating: 5,
      text: "The business facilities are world-class. Conducted a successful board meeting here and the technology, service, and ambiance were perfect. Highly recommend for corporate events.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Emma Thompson",
      location: "London, UK",
      rating: 5,
      text: "Our wedding at The Luxury Hotel was a dream come true. The wedding coordinator was amazing, and every guest commented on the beautiful venue and exceptional food.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Michael Rodriguez",
      location: "Madrid, Spain",
      rating: 5,
      text: "The spa treatments were incredibly relaxing, and the dining experiences were outstanding. This hotel truly understands luxury hospitality. Will definitely return.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Guest Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what our guests say about their unforgettable stays and experiences 
            at The Luxury Hotel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-amber-200" />
                <p className="text-gray-700 leading-relaxed pl-6 italic">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Awards & Recognition</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">5-Star Rating</h4>
              <p className="text-gray-600 text-sm">TripAdvisor Excellence</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Best Hotel</h4>
              <p className="text-gray-600 text-sm">Luxury Travel Awards</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Top Service</h4>
              <p className="text-gray-600 text-sm">Hospitality Excellence</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                <Star className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Green Hotel</h4>
              <p className="text-gray-600 text-sm">Sustainability Award</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;