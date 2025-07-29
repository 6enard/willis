import React from 'react';
import { Waves, Dumbbell, Wifi, Car, Coffee, Utensils, Shield, Headphones } from 'lucide-react';

const Amenities = () => {
  const amenities = [
    {
      icon: Waves,
      title: "Swimming Pool",
      description: "Infinity pool with panoramic city views and poolside service"
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "State-of-the-art equipment and personal training services"
    },
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "High-speed internet access throughout the property"
    },
    {
      icon: Car,
      title: "Valet Parking",
      description: "Complimentary valet parking for all guests"
    },
    {
      icon: Coffee,
      title: "Room Service",
      description: "24/7 in-room dining with gourmet menu options"
    },
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "Multiple restaurants featuring international cuisine"
    },
    {
      icon: Shield,
      title: "Security",
      description: "24/7 security and surveillance for your peace of mind"
    },
    {
      icon: Headphones,
      title: "Concierge",
      description: "Personalized concierge services for all your needs"
    }
  ];

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            World-Class Amenities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Indulge in our comprehensive range of luxury amenities designed to enhance 
            your stay and create unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <amenity.icon className="w-10 h-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{amenity.title}</h3>
              <p className="text-gray-600 leading-relaxed">{amenity.description}</p>
            </div>
          ))}
        </div>

        {/* Feature highlight */}
        <div className="mt-20 bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Spa & Wellness Center
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Rejuvenate your body and mind at our award-winning spa. Experience traditional 
                and modern treatments in our serene wellness sanctuary, featuring private treatment 
                rooms, steam rooms, and relaxation lounges.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Full-service spa treatments
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Couples massage suites
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                  Yoga and meditation classes
                </li>
              </ul>
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg transition-colors font-semibold">
                Book Spa Treatment
              </button>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Spa treatment"
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;