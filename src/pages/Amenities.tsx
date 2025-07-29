import React from 'react';
import { Waves, Dumbbell, Wifi, Car, Coffee, Utensils, Shield, Headphones, Space as Spa, Gamepad2, Baby, Briefcase, Plane, ShoppingBag, Music, Camera } from 'lucide-react';

const Amenities = () => {
  const amenityCategories = [
    {
      title: "Recreation & Wellness",
      icon: Waves,
      color: "blue",
      amenities: [
        { icon: Waves, name: "Infinity Pool", description: "Rooftop infinity pool with city views" },
        { icon: Dumbbell, name: "Fitness Center", description: "24/7 state-of-the-art gym with personal trainers" },
        { icon: Spa, name: "Luxury Spa", description: "Full-service spa with massage and beauty treatments" },
        { icon: Gamepad2, name: "Game Room", description: "Entertainment center with pool table and arcade games" }
      ]
    },
    {
      title: "Business & Connectivity",
      icon: Briefcase,
      color: "green",
      amenities: [
        { icon: Wifi, name: "High-Speed WiFi", description: "Complimentary fiber-optic internet throughout" },
        { icon: Briefcase, name: "Business Center", description: "24/7 business center with printing and meeting rooms" },
        { icon: Headphones, name: "Concierge Service", description: "Personal concierge for all your needs" },
        { icon: Camera, name: "Conference Facilities", description: "Modern meeting rooms with AV equipment" }
      ]
    },
    {
      title: "Dining & Entertainment",
      icon: Utensils,
      color: "amber",
      amenities: [
        { icon: Utensils, name: "Fine Dining", description: "Multiple restaurants with international cuisine" },
        { icon: Coffee, name: "24/7 Room Service", description: "Gourmet in-room dining available around the clock" },
        { icon: Music, name: "Live Entertainment", description: "Regular live music and cultural performances" },
        { icon: ShoppingBag, name: "Gift Shop", description: "Curated selection of local crafts and essentials" }
      ]
    },
    {
      title: "Services & Convenience",
      icon: Shield,
      color: "purple",
      amenities: [
        { icon: Car, name: "Valet Parking", description: "Complimentary valet parking and car wash" },
        { icon: Plane, name: "Airport Transfer", description: "Luxury airport shuttle service" },
        { icon: Shield, name: "24/7 Security", description: "Round-the-clock security and surveillance" },
        { icon: Baby, name: "Family Services", description: "Babysitting, kids' club, and family amenities" }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-50 to-cyan-50 border-blue-200",
      green: "from-green-50 to-emerald-50 border-green-200",
      amber: "from-amber-50 to-orange-50 border-amber-200",
      purple: "from-purple-50 to-pink-50 border-purple-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getIconColor = (color: string) => {
    const colors = {
      blue: "text-blue-600",
      green: "text-green-600",
      amber: "text-amber-600",
      purple: "text-purple-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            World-Class Amenities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience luxury at every turn with our comprehensive collection of premium 
            amenities and services designed to exceed your expectations.
          </p>
        </div>

        {/* Amenity Categories */}
        <div className="space-y-16">
          {amenityCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`bg-gradient-to-r ${getColorClasses(category.color)} rounded-3xl p-8 md:p-12 border`}>
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4 shadow-lg`}>
                  <category.icon className={`w-8 h-8 ${getIconColor(category.color)}`} />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.amenities.map((amenity, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                      <amenity.icon className="w-6 h-6 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{amenity.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{amenity.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Amenity - Spa */}
        <div className="mt-20 bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Award-Winning Spa & Wellness Center
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Escape to our tranquil spa sanctuary where ancient healing traditions meet 
                modern wellness techniques. Our expert therapists provide personalized treatments 
                in luxurious private suites.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Signature Treatments</h4>
                    <p className="text-gray-600 text-sm">Exclusive massages and beauty therapies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Wellness Programs</h4>
                    <p className="text-gray-600 text-sm">Yoga, meditation, and fitness classes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Couples Suites</h4>
                    <p className="text-gray-600 text-sm">Private treatment rooms for two</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold">
                  Book Treatment
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
                  View Menu
                </button>
              </div>
            </div>
            
            <div className="relative h-96 lg:h-auto">
              <img 
                src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Spa treatment room"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Pool & Recreation */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Infinity pool"
              className="rounded-2xl shadow-lg w-full h-80 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500 mb-1">25m</div>
                <div className="text-gray-600 text-sm">Infinity Pool</div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rooftop Pool & Recreation
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Take a refreshing dip in our stunning infinity pool while enjoying panoramic 
              views of the city skyline. Our pool deck features comfortable loungers, 
              cabanas, and poolside service.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-xl font-bold text-gray-900 mb-1">6AM - 11PM</div>
                <div className="text-gray-600 text-sm">Pool Hours</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-xl font-bold text-gray-900 mb-1">28°C</div>
                <div className="text-gray-600 text-sm">Water Temp</div>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                Poolside bar and restaurant service
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                Private cabanas available for rent
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                Children's pool area with safety features
              </li>
            </ul>
          </div>
        </div>

        {/* Amenities Stats */}
        <div className="mt-20 bg-gray-900 text-white rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">By the Numbers</h2>
            <p className="text-gray-300">Our commitment to excellence in every detail</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">50+</div>
              <div className="text-gray-300">Premium Amenities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-gray-300">Concierge Service</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">3</div>
              <div className="text-gray-300">Restaurants & Bars</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">100%</div>
              <div className="text-gray-300">Guest Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;