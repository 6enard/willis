import React from 'react';
import { Clock, Star, MapPin } from 'lucide-react';

const Dining = () => {
  const restaurants = [
    {
      name: "The Grand Terrace",
      cuisine: "International Fine Dining",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Elegant rooftop dining with panoramic city views and contemporary international cuisine.",
      hours: "6:00 PM - 11:00 PM",
      rating: 4.9,
      features: ["Rooftop Terrace", "Wine Pairing", "Live Music"]
    },
    {
      name: "Savannah Grill",
      cuisine: "African & Continental",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Authentic African flavors meet continental classics in a warm, inviting atmosphere.",
      hours: "12:00 PM - 10:00 PM",
      rating: 4.8,
      features: ["Local Cuisine", "Outdoor Seating", "Family Friendly"]
    },
    {
      name: "Azure Lounge",
      cuisine: "Cocktails & Light Bites",
      image: "https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Sophisticated cocktail lounge with artisanal drinks and gourmet small plates.",
      hours: "4:00 PM - 2:00 AM",
      rating: 4.7,
      features: ["Craft Cocktails", "Late Night", "DJ Sets"]
    }
  ];

  return (
    <section id="dining" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Culinary Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Embark on a gastronomic journey with our diverse dining options, 
            each offering unique flavors and exceptional service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                  <Star className="w-4 h-4 text-amber-500 mr-1" />
                  <span className="font-semibold text-gray-900">{restaurant.rating}</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{restaurant.name}</h3>
                <p className="text-amber-600 font-medium mb-3">{restaurant.cuisine}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{restaurant.description}</p>
                
                <div className="flex items-center text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{restaurant.hours}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {restaurant.features.map((feature, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>

                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg transition-colors font-semibold">
                  Make Reservation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special dining experience */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Chef's Table Experience
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Join our executive chef for an intimate culinary journey featuring a 
                7-course tasting menu with wine pairings. Limited to 12 guests per evening.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-amber-400 mr-3" />
                  <span>Private dining room with kitchen view</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-amber-400 mr-3" />
                  <span>Every Friday & Saturday, 7:00 PM</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-amber-400 mr-3" />
                  <span>$150 per person (wine pairing included)</span>
                </div>
              </div>
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg transition-colors font-semibold">
                Reserve Your Spot
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Chef's table"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dining;