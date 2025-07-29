import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "James Kipkoech",
      location: "Nairobi, Kenya",
      rating: 5,
      text: "Stayed at The Willis Hotel during my business trip to Bomet. The service was exceptional and the location is perfect for accessing Maasai Mara. The staff made me feel at home.",
      image: "/willis2.jpg"
    },
    {
      name: "Mary Wanjiku",
      location: "Mombasa, Kenya",
      rating: 5,
      text: "Perfect location for our family safari trip. The hotel provided excellent service and the rooms were clean and comfortable. Easy access to Maasai Mara made our trip memorable.",
      image: "/willis3.jpg"
    },
    {
      name: "Peter Mutua",
      location: "Kisumu, Kenya",
      rating: 5,
      text: "Hosted our company retreat at The Willis Hotel. The conference facilities were excellent and the team was very professional. The food was outstanding and everyone enjoyed their stay.",
      image: "/willis4.jpg"
    },
    {
      name: "Grace Achieng",
      location: "Eldoret, Kenya",
      rating: 5,
      text: "Celebrated our anniversary at The Willis Hotel. The romantic atmosphere, excellent dining, and beautiful rooms made it a perfect getaway. Highly recommend for special occasions.",
      image: "/willis5.jpg"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Guest Experiences
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what our guests say about their unforgettable stays and experiences 
            at The Willis Hotel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl lg:rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-amber-200" />
                <p className="text-gray-700 leading-relaxed pl-6 italic text-sm sm:text-base">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-4"
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
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">Awards & Recognition</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">5-Star Rating</h4>
              <p className="text-gray-600 text-xs sm:text-sm">TripAdvisor Excellence</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Best Hotel</h4>
              <p className="text-gray-600 text-xs sm:text-sm">South Rift Region</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Top Service</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Hospitality Excellence</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mb-3">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Eco-Friendly</h4>
              <p className="text-gray-600 text-xs sm:text-sm">Sustainability Award</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;