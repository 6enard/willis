import React from 'react';
import { Building, Utensils, Users, PartyPopper, Camera, Wine, Wifi, Car, Coffee, Shield, Headphones, Briefcase, Plane, ShoppingBag, Music, Clock } from 'lucide-react';

const Amenities = () => {
  const amenityCategories = [
    {
      title: "Conferencing & Business",
      icon: Building,
      color: "blue",
      amenities: [
        { icon: Building, name: "Conference Rooms", description: "Modern spaces designed for sharing and collaborating" },
        { icon: Wifi, name: "High-Speed WiFi", description: "Complimentary fiber-optic internet throughout" },
        { icon: Briefcase, name: "Business Center", description: "24/7 business center with printing facilities" },
        { icon: Headphones, name: "AV Equipment", description: "Professional audio-visual equipment for presentations" }
      ]
    },
    {
      title: "Dining & Entertainment",
      icon: Utensils,
      color: "amber",
      amenities: [
        { icon: Utensils, name: "Main Restaurant", description: "Sample the best of Bomet's finest cuisine" },
        { icon: Wine, name: "Bar & Drinks", description: "Spirited bars with vibrant atrium setting" },
        { icon: Coffee, name: "24/7 Room Service", description: "In-room dining available around the clock" },
        { icon: Music, name: "Live Entertainment", description: "Regular cultural performances and events" }
      ]
    },
    {
      title: "Accommodation & Comfort",
      icon: Users,
      color: "green",
      amenities: [
        { icon: Users, name: "Comfortable Rooms", description: "Regionally inspired artwork and spacious suites" },
        { icon: Clock, name: "24/7 Front Desk", description: "Round-the-clock reception and assistance" },
        { icon: Car, name: "Parking", description: "Secure parking facilities for guests" },
        { icon: ShoppingBag, name: "Concierge Service", description: "Personal assistance for all your needs" }
      ]
    },
    {
      title: "Events & Tours",
      icon: PartyPopper,
      color: "purple",
      amenities: [
        { icon: PartyPopper, name: "Event Venues", description: "Versatile venues with dedicated event planners" },
        { icon: Camera, name: "Tour Bomet", description: "Explore Bomet County's life and tourism attractions" },
        { icon: Shield, name: "24/7 Security", description: "Round-the-clock security and surveillance" },
        { icon: Plane, name: "Transportation", description: "Airport transfer and local transport services" }
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
            Discover Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience exceptional hospitality with our comprehensive range of services 
            designed to make your stay memorable and comfortable.
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
                Restaurant & Dining Experience
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Come dine at our main restaurant after your busy day and sample the best of 
                Bomet's finest cuisine. Our chefs prepare delicious meals using fresh, local 
                ingredients that celebrate the rich flavors of the region.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Local Cuisine</h4>
                    <p className="text-gray-600 text-sm">Authentic Bomet flavors and traditional dishes</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Fresh Ingredients</h4>
                    <p className="text-gray-600 text-sm">Locally sourced, fresh ingredients daily</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Comfortable Atmosphere</h4>
                    <p className="text-gray-600 text-sm">Relaxing dining environment for all occasions</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold">
                  Make Reservation
                </button>
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold">
                  View Menu
                </button>
              </div>
            </div>
            
            <div className="relative h-96 lg:h-auto">
              <img 
                src="/willis7.jpg"
                alt="Restaurant dining area"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Conference & Events */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="/willis6.jpg"
              alt="Conference room"
              className="rounded-2xl shadow-lg w-full h-80 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500 mb-1">50+</div>
                <div className="text-gray-600 text-sm">Event Capacity</div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Conference & Event Facilities
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Create meaningful connections in our modern conference spaces designed for 
              sharing, socializing, and collaborating. Perfect for business meetings, 
              events, and special celebrations.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-xl font-bold text-gray-900 mb-1">24/7</div>
                <div className="text-gray-600 text-sm">Available</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-xl font-bold text-gray-900 mb-1">AV</div>
                <div className="text-gray-600 text-sm">Equipment</div>
              </div>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                Professional audio-visual equipment
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                Flexible seating arrangements
              </li>
              <li className="flex items-center text-gray-700">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                Catering and refreshment services
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
              <div className="text-4xl font-bold text-amber-400 mb-2">48</div>
              <div className="text-gray-300">Bed Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">24/7</div>
              <div className="text-gray-300">Service Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">6</div>
              <div className="text-gray-300">Core Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">5★</div>
              <div className="text-gray-300">Guest Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;