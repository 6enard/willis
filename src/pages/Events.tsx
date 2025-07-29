import React, { useState } from 'react';
import { Users, Calendar, MapPin, Star, Clock, Award, Heart, Briefcase } from 'lucide-react';

const Events = () => {
  const [selectedSpace, setSelectedSpace] = useState<number | null>(null);

  const eventSpaces = [
    {
      id: 1,
      name: "Grand Ballroom",
      capacity: "500 guests",
      size: "800 sqm",
      image: "/willis6.jpg",
      gallery: [
        "/willis6.jpg",
        "/willis7.jpg",
        "/willis8.jpg"
      ],
      features: ["Crystal Chandeliers", "Dance Floor", "Stage", "Audio/Visual Equipment", "Climate Control", "Valet Parking"],
      ideal: "Weddings, Galas, Large Conferences",
      description: "Our magnificent Grand Ballroom is the crown jewel of our event spaces, featuring soaring ceilings, elegant crystal chandeliers, and a spacious dance floor.",
      pricing: "From $5,000",
      setup: ["Theater: 500", "Banquet: 350", "Cocktail: 600", "U-Shape: 80"]
    },
    {
      id: 2,
      name: "Executive Boardroom",
      capacity: "20 guests",
      size: "60 sqm",
      image: "/willis9.jpg",
      gallery: [
        "/willis9.jpg",
        "/willis10.jpg",
        "/willis5.jpg"
      ],
      features: ["Video Conferencing", "Presentation Screen", "High-Speed WiFi", "Catering Service", "Natural Light", "Executive Seating"],
      ideal: "Board Meetings, Executive Sessions",
      description: "A sophisticated boardroom designed for high-level meetings with state-of-the-art technology and elegant furnishings.",
      pricing: "From $500",
      setup: ["Boardroom: 20", "U-Shape: 16", "Theater: 30", "Classroom: 18"]
    },
    {
      id: 3,
      name: "Garden Pavilion",
      capacity: "150 guests",
      size: "200 sqm",
      image: "/willis2.jpg",
      gallery: [
        "/willis2.jpg",
        "/willis3.jpg",
        "/willis4.jpg"
      ],
      features: ["Outdoor Setting", "Garden Views", "Weather Protection", "Natural Lighting", "Sound System", "Bar Setup"],
      ideal: "Garden Parties, Cocktail Receptions",
      description: "An enchanting outdoor venue surrounded by lush gardens, perfect for intimate celebrations and cocktail events.",
      pricing: "From $2,500",
      setup: ["Cocktail: 150", "Banquet: 100", "Theater: 120", "Reception: 180"]
    },
    {
      id: 4,
      name: "Skyline Conference Room",
      capacity: "80 guests",
      size: "120 sqm",
      image: "/willis7.jpg",
      gallery: [
        "/willis7.jpg",
        "/willis8.jpg",
        "/willis9.jpg"
      ],
      features: ["City Views", "Modern AV Equipment", "Flexible Layout", "Break-out Areas", "Coffee Station", "Natural Light"],
      ideal: "Corporate Training, Seminars, Workshops",
      description: "A modern conference room with stunning city views, perfect for corporate events and training sessions.",
      pricing: "From $1,200",
      setup: ["Theater: 80", "Classroom: 50", "U-Shape: 30", "Banquet: 60"]
    }
  ];

  const upcomingEvents = [
    {
      title: "Wine Tasting Evening",
      date: "March 15, 2024",
      time: "7:00 PM",
      price: "$85 per person",
      description: "Join our sommelier for an exclusive wine tasting featuring premium selections from around the world.",
      image: "/willis8.jpg",
      category: "Wine & Dine"
    },
    {
      title: "Jazz Night",
      date: "March 22, 2024",
      time: "8:30 PM",
      price: "Free for guests",
      description: "Live jazz performance in our Azure Lounge with complimentary appetizers and signature cocktails.",
      image: "/willis9.jpg",
      category: "Entertainment"
    },
    {
      title: "Culinary Workshop",
      date: "March 29, 2024",
      time: "2:00 PM",
      price: "$120 per person",
      description: "Learn to cook signature dishes with our executive chef in this hands-on culinary masterclass.",
      image: "/willis10.jpg",
      category: "Workshop"
    },
    {
      title: "Business Networking Mixer",
      date: "April 5, 2024",
      time: "6:00 PM",
      price: "$45 per person",
      description: "Connect with local business leaders and entrepreneurs in an elegant networking environment.",
      image: "/willis5.jpg",
      category: "Business"
    }
  ];

  const weddingPackages = [
    {
      name: "Intimate Ceremony",
      guests: "Up to 50 guests",
      price: "From $8,000",
      features: ["Garden Pavilion", "Bridal Suite", "Photography", "Floral Arrangements", "Wedding Cake", "Champagne Toast"]
    },
    {
      name: "Grand Celebration",
      guests: "Up to 200 guests",
      price: "From $18,000",
      features: ["Grand Ballroom", "Bridal Suite", "Full Photography", "Luxury Floral Design", "Multi-tier Cake", "Open Bar", "Live Music"]
    },
    {
      name: "Luxury Experience",
      guests: "Up to 350 guests",
      price: "From $35,000",
      features: ["Grand Ballroom + Garden", "Presidential Suite", "Professional Photography & Video", "Designer Florals", "Gourmet Menu", "Premium Bar", "Live Band", "Wedding Coordinator"]
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Events & Celebrations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create unforgettable moments in our elegant event spaces, perfect for 
            weddings, corporate meetings, and special celebrations.
          </p>
        </div>

        {/* Event Spaces */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Event Spaces</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {eventSpaces.map((space) => (
              <div key={space.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={space.image} 
                  alt={space.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{space.name}</h3>
                    <span className="text-amber-600 font-bold">{space.pricing}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4 text-gray-600">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {space.capacity}
                    </span>
                    <span>{space.size}</span>
                  </div>
                  
                  <p className="text-amber-600 font-medium mb-3">{space.ideal}</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{space.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {space.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                    {space.features.length > 3 && (
                      <span className="text-gray-500 text-xs">+{space.features.length - 3} more</span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <button 
                      onClick={() => setSelectedSpace(space.id)}
                      className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors font-semibold text-sm"
                    >
                      View Details
                    </button>
                    <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg transition-colors font-semibold text-sm">
                      Request Quote
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Space Details Modal */}
        {selectedSpace && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {(() => {
                  const space = eventSpaces.find(s => s.id === selectedSpace);
                  if (!space) return null;
                  
                  return (
                    <>
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 mb-2">{space.name}</h2>
                          <p className="text-amber-600 font-medium">{space.ideal}</p>
                        </div>
                        <button 
                          onClick={() => setSelectedSpace(null)}
                          className="text-gray-400 hover:text-gray-600 text-2xl"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <img 
                            src={space.image} 
                            alt={space.name}
                            className="w-full h-64 object-cover rounded-xl mb-4"
                          />
                          <div className="grid grid-cols-3 gap-2">
                            {space.gallery.slice(0, 3).map((img, index) => (
                              <img 
                                key={index}
                                src={img} 
                                alt={`${space.name} ${index + 1}`}
                                className="w-full h-20 object-cover rounded-lg"
                              />
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-gray-600 mb-6 leading-relaxed">{space.description}</p>
                          
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                              <span className="font-semibold text-gray-900">Capacity:</span>
                              <span className="text-gray-600 ml-2">{space.capacity}</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-900">Size:</span>
                              <span className="text-gray-600 ml-2">{space.size}</span>
                            </div>
                            <div>
                              <span className="font-semibold text-gray-900">Pricing:</span>
                              <span className="text-amber-600 ml-2 font-semibold">{space.pricing}</span>
                            </div>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Setup Options</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {space.setup.map((setup, index) => (
                                <div key={index} className="text-gray-600 text-sm">
                                  {setup}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Features & Amenities</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {space.features.map((feature, index) => (
                                <div key={index} className="flex items-center text-gray-600 text-sm">
                                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                                  {feature}
                                </div>
                              ))}
                            </div>
                          </div>

                          <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg transition-colors font-semibold">
                            Request Detailed Quote
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Wedding Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <Heart className="w-8 h-8 text-red-500 inline-block mr-2" />
              Dream Weddings
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Let us help you create the wedding of your dreams with our comprehensive packages 
              and dedicated wedding planning team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {weddingPackages.map((pkg, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="text-gray-600 mb-2">{pkg.guests}</div>
                <div className="text-2xl font-bold text-amber-600 mb-4">{pkg.price}</div>
                
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center text-sm">
                      <Star className="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg transition-colors font-semibold">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Complete Wedding Planning
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our experienced wedding coordinators will work with you every step of the way 
                  to ensure your special day is perfect. From initial planning to the final dance, 
                  we handle every detail.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-rose-500 mr-3" />
                    <span className="text-gray-700">Award-winning wedding coordination team</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-rose-500 mr-3" />
                    <span className="text-gray-700">Customizable packages to fit your vision</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-5 h-5 text-rose-500 mr-3" />
                    <span className="text-gray-700">Complimentary bridal suite for the night</span>
                  </div>
                </div>
                <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-3 rounded-lg transition-colors font-semibold">
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
        </div>

        {/* Upcoming Events */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-gray-600">Join us for these special events and experiences</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-amber-500 mr-2" />
                    <span className="font-semibold text-gray-900 text-sm">{event.date}</span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h4>
                  <p className="text-gray-600 mb-3 text-xs leading-relaxed">{event.description}</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-500 text-xs">{event.time}</span>
                    <span className="font-semibold text-amber-600 text-sm">{event.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{event.category}</span>
                    <button className="bg-amber-500 hover:bg-amber-600 text-white py-1 px-3 rounded text-xs transition-colors font-semibold">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Events */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <Briefcase className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Corporate Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Host successful business events with our professional facilities and dedicated support team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold text-gray-900 mb-2">Conference Packages</h3>
              <p className="text-gray-600 text-sm mb-3">Full-day packages with AV equipment, catering, and break areas</p>
              <div className="text-blue-600 font-semibold">From $150/person</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold text-gray-900 mb-2">Team Building</h3>
              <p className="text-gray-600 text-sm mb-3">Customized activities and workshops for team development</p>
              <div className="text-blue-600 font-semibold">From $85/person</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <h3 className="font-bold text-gray-900 mb-2">Product Launches</h3>
              <p className="text-gray-600 text-sm mb-3">Impressive venues with full event production support</p>
              <div className="text-blue-600 font-semibold">Custom pricing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;