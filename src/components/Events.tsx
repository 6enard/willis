import React from 'react';
import { Users, Calendar, MapPin, Star } from 'lucide-react';

const Events = () => {
  const eventSpaces = [
    {
      name: "Grand Ballroom",
      capacity: "500 guests",
      size: "800 sqm",
      image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Crystal Chandeliers", "Dance Floor", "Stage", "Audio/Visual Equipment"],
      ideal: "Weddings, Galas, Large Conferences"
    },
    {
      name: "Executive Boardroom",
      capacity: "20 guests",
      size: "60 sqm",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Video Conferencing", "Presentation Screen", "High-Speed WiFi", "Catering Service"],
      ideal: "Board Meetings, Executive Sessions"
    },
    {
      name: "Garden Pavilion",
      capacity: "150 guests",
      size: "200 sqm",
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Outdoor Setting", "Garden Views", "Weather Protection", "Natural Lighting"],
      ideal: "Garden Parties, Cocktail Receptions"
    }
  ];

  const upcomingEvents = [
    {
      title: "Wine Tasting Evening",
      date: "March 15, 2024",
      time: "7:00 PM",
      price: "$85 per person",
      description: "Join our sommelier for an exclusive wine tasting featuring premium selections."
    },
    {
      title: "Jazz Night",
      date: "March 22, 2024",
      time: "8:30 PM",
      price: "Free for guests",
      description: "Live jazz performance in our Azure Lounge with complimentary appetizers."
    },
    {
      title: "Culinary Workshop",
      date: "March 29, 2024",
      time: "2:00 PM",
      price: "$120 per person",
      description: "Learn to cook signature dishes with our executive chef in this hands-on class."
    }
  ];

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Events & Celebrations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create unforgettable moments in our elegant event spaces, perfect for 
            weddings, corporate meetings, and special celebrations.
          </p>
        </div>

        {/* Event Spaces */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Event Spaces</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {eventSpaces.map((space, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img 
                  src={space.image} 
                  alt={space.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{space.name}</h4>
                  <div className="flex items-center justify-between mb-4 text-gray-600">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {space.capacity}
                    </span>
                    <span>{space.size}</span>
                  </div>
                  <p className="text-amber-600 font-medium mb-3">{space.ideal}</p>
                  <ul className="space-y-2 mb-4">
                    {space.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center text-sm">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <Calendar className="w-5 h-5 text-amber-500 mr-2" />
                  <span className="font-semibold text-gray-900">{event.date}</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{event.description}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-500 text-sm">{event.time}</span>
                  <span className="font-semibold text-amber-600">{event.price}</span>
                </div>
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg transition-colors font-semibold">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Wedding Services */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Dream Weddings
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Let us help you create the wedding of your dreams. Our dedicated wedding 
              planners will work with you to ensure every detail is perfect, from the 
              ceremony to the reception.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-amber-500 mr-3" />
                <span className="text-gray-700">Dedicated wedding coordinator</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-amber-500 mr-3" />
                <span className="text-gray-700">Customizable menu options</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-amber-500 mr-3" />
                <span className="text-gray-700">Bridal suite accommodation</span>
              </div>
              <div className="flex items-center">
                <Star className="w-5 h-5 text-amber-500 mr-3" />
                <span className="text-gray-700">Photography and videography services</span>
              </div>
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg transition-colors font-semibold">
              Schedule Consultation
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Wedding setup"
              className="rounded-2xl shadow-lg w-full h-96 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;