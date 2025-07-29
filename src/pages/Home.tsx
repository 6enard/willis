import React from 'react';
import { useState } from 'react';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Calendar, Wifi, Car, Coffee, Tv, Bath, X, MapPin, Utensils, Building, PartyPopper, Camera, Wine } from 'lucide-react';

const Home = () => {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

  const featuredRooms = [
    {
      id: 1,
      name: "Single Room",
      price: "KSh 3,500",
      originalPrice: "KSh 4,000",
      image: "/willis2.jpg",
      gallery: [
        "/willis2.jpg",
        "/willis6.jpg",
        "/willis7.jpg"
      ],
      size: "32 sqm",
      guests: "2 Guests",
      bed: "Single Bed",
      view: "City View",
      amenities: ["Free WiFi", "Television", "Bathroom", "Air Conditioning", "Work Desk", "Daily Housekeeping"],
      features: [Wifi, Car, Coffee, Tv],
      description: "Comfortable single room perfect for solo travelers. Features modern amenities with easy access to Maasai Mara and local attractions.",
      longDescription: "Our Single Room offers the perfect blend of comfort and functionality for the discerning solo traveler. Located in the heart of Bomet County, this well-appointed room features contemporary furnishings, modern amenities, and thoughtful touches that ensure a memorable stay. With easy access to the Maasai Mara Game Reserve and local cultural attractions, it's the ideal base for exploring the South Rift region."
    },
    {
      id: 2,
      name: "Deluxe Room",
      price: "KSh 4,500",
      originalPrice: "KSh 5,000",
      image: "/willis3.jpg",
      gallery: [
        "/willis3.jpg",
        "/willis8.jpg",
        "/willis9.jpg"
      ],
      size: "45 sqm",
      guests: "2 Guests",
      bed: "Double Bed",
      view: "City View",
      amenities: ["Double Bed", "Free WiFi", "Television", "Bathroom", "Work Desk", "Premium Toiletries"],
      features: [Wifi, Car, Coffee, Tv],
      description: "Spacious deluxe room with double bed, premium amenities, and comfortable furnishings. Perfect for couples or business travelers.",
      longDescription: "Experience enhanced comfort in our Deluxe Room, featuring a spacious layout with premium furnishings and upgraded amenities. The room includes a comfortable double bed, modern work area, and elegant bathroom with premium toiletries. Perfect for couples on a romantic getaway or business travelers seeking extra comfort and space."
    },
    {
      id: 3,
      name: "Superior Room",
      price: "KSh 5,500",
      originalPrice: "KSh 6,000",
      image: "/willis4.jpg",
      gallery: [
        "/willis4.jpg",
        "/willis10.jpg",
        "/willis5.jpg"
      ],
      size: "65 sqm",
      guests: "2 Guests",
      bed: "Double Bed",
      view: "Garden View",
      amenities: ["Double Bed", "Free WiFi", "Television", "Bathroom", "Living Area", "Premium Amenities"],
      features: [Wifi, Car, Coffee, Tv, Bath],
      description: "Our finest room with superior amenities, spacious layout, and garden views. Perfect for guests seeking extra comfort and luxury.",
      longDescription: "Indulge in the ultimate comfort of our Superior Room, the pinnacle of luxury accommodation at The Willis Hotel. This spacious room features a separate living area, premium furnishings, and stunning garden views. With superior amenities and thoughtful design elements, it provides an exceptional experience for guests who appreciate the finer things in life."
    }
  ];

  const services = [
    {
      icon: Building,
      title: "Conferencing",
      description: "Create your own meaningful connections in modern spaces designed for sharing, socializing, and collaborating.",
      color: "blue"
    },
    {
      icon: Utensils,
      title: "Restaurant",
      description: "Come dine at our main restaurant after your busy day and sample the best of Bomet's finest cuisine",
      color: "amber"
    },
    {
      icon: Users,
      title: "Accommodation",
      description: "Enjoy comfortable rooms with regionally inspired artwork and spacious suites with residential features.",
      color: "green"
    },
    {
      icon: PartyPopper,
      title: "Events",
      description: "Versatile venues. Dedicated event planners. Customizable catering. Wedding packages. All of this and more...",
      color: "purple"
    },
    {
      icon: Camera,
      title: "Tour Bomet",
      description: "Bomet County bursts with a lot of life and tourism. Do not be left behind. Explore and discover",
      color: "red"
    },
    {
      icon: Wine,
      title: "Bar & Drink",
      description: "Think spirited restaurants and bars, vibrant event venues, and their trademark atrium setting—each one distinct from the next",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-50 to-cyan-50 text-blue-600",
      amber: "from-amber-50 to-orange-50 text-amber-600",
      green: "from-green-50 to-emerald-50 text-green-600",
      purple: "from-purple-50 to-pink-50 text-purple-600",
      red: "from-red-50 to-rose-50 text-red-600",
      indigo: "from-indigo-50 to-blue-50 text-indigo-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div>
      <Hero />
      
      {/* Welcome Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Welcome to
                <span className="block text-amber-500">The Willis Hotel</span>
              </h2>
              <p className="font-poppins text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Built in 2013 in Bomet County, we're strategically located in the South Rift region 
                with easy access to Maasai Mara Game Reserve and cultural communities. Our commitment 
                to excellence ensures every guest enjoys comfort, exceptional service, and memorable experiences.
              </p>
              <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="font-playfair text-2xl sm:text-3xl font-bold text-amber-500 mb-1 sm:mb-2">48</div>
                  <div className="font-poppins text-gray-600 text-sm sm:text-base">Bed Capacity</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair text-2xl sm:text-3xl font-bold text-amber-500 mb-1 sm:mb-2">24/7</div>
                  <div className="font-poppins text-gray-600 text-sm sm:text-base">Service</div>
                </div>
                <div className="text-center">
                  <div className="font-playfair text-2xl sm:text-3xl font-bold text-amber-500 mb-1 sm:mb-2">20%</div>
                  <div className="font-poppins text-gray-600 text-sm sm:text-base">First Stay Discount</div>
                </div>
              </div>
              <Link 
                to="/rooms" 
                className="font-poppins inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors font-semibold text-sm sm:text-base"
              >
                Explore Rooms
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/willis5.jpg"
                alt="Hotel lobby"
                className="rounded-xl sm:rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-2">
                  <Star className="w-5 h-5 text-amber-400 fill-current" />
                  <Star className="w-5 h-5 text-amber-400 fill-current" />
                  <Star className="w-5 h-5 text-amber-400 fill-current" />
                  <Star className="w-5 h-5 text-amber-400 fill-current" />
                  <Star className="w-5 h-5 text-amber-400 fill-current" />
                </div>
                <p className="text-gray-900 font-semibold text-sm sm:text-base">Exceptional Service</p>
                <p className="text-gray-600 text-xs sm:text-sm">Rated by 2,500+ guests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Accommodations
            </h2>
            <p className="font-poppins text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular rooms and suites, each designed to provide 
              the ultimate in comfort and luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 sm:mb-12">
            {featuredRooms.map((room, index) => (
              <div key={index} className="bg-white rounded-xl lg:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-40 sm:h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-playfair text-lg sm:text-xl font-bold text-gray-900">{room.name}</h3>
                    <div className="text-right">
                      <div className="text-gray-400 line-through text-xs">{room.originalPrice}</div>
                      <span className="font-poppins text-amber-500 font-bold text-base sm:text-lg">{room.price}/night</span>
                    </div>
                  </div>
                  <p className="font-poppins text-gray-600 mb-4 text-sm sm:text-base">{room.description}</p>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setSelectedRoom(room.id)}
                      className="font-poppins flex-1 bg-gray-100 text-gray-700 py-2 sm:py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold text-sm sm:text-base"
                    >
                      View Details
                    </button>
                    <button className="font-poppins flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 sm:py-3 rounded-lg transition-colors font-semibold text-sm sm:text-base">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/rooms" 
              className="font-poppins inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors font-semibold text-sm sm:text-base"
            >
              View All Rooms
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Room Details Modal */}
      {selectedRoom && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {(() => {
                const room = featuredRooms.find(r => r.id === selectedRoom);
                if (!room) return null;
                
                return (
                  <>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">{room.name}</h2>
                        <div className="flex items-center">
                          <span className="text-gray-500 line-through text-lg mr-2">{room.originalPrice}</span>
                          <span className="text-2xl font-bold text-amber-600">{room.price}/night</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => setSelectedRoom(null)}
                        className="text-gray-400 hover:text-gray-600 text-2xl"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <img 
                          src={room.image} 
                          alt={room.name}
                          className="w-full h-64 object-cover rounded-xl mb-4"
                        />
                        <div className="grid grid-cols-3 gap-2">
                          {room.gallery.slice(0, 3).map((img, index) => (
                            <img 
                              key={index}
                              src={img} 
                              alt={`${room.name} ${index + 1}`}
                              className="w-full h-20 object-cover rounded-lg"
                            />
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-gray-600 mb-6 leading-relaxed">{room.longDescription}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div>
                            <span className="font-semibold text-gray-900">Size:</span>
                            <span className="text-gray-600 ml-2">{room.size}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900">Guests:</span>
                            <span className="text-gray-600 ml-2">{room.guests}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900">Bed:</span>
                            <span className="text-gray-600 ml-2">{room.bed}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-900">View:</span>
                            <span className="text-gray-600 ml-2">{room.view}</span>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Room Amenities</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {room.amenities.map((amenity, index) => (
                              <div key={index} className="flex items-center text-gray-600 text-sm">
                                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                                {amenity}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-3">
                          <Link 
                            to="/rooms"
                            className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold text-center"
                          >
                            View All Rooms
                          </Link>
                          <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg transition-colors font-semibold">
                            Book This Room
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover Our Services
            </h2>
            <p className="font-poppins text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience exceptional hospitality with our comprehensive range of services 
              designed to make your stay memorable and comfortable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-gradient-to-br ${getColorClasses(service.color).split(' ').slice(0, 2).join(' ')} p-6 sm:p-8 rounded-xl lg:rounded-2xl hover:shadow-lg transition-all duration-300 group hover:scale-105`}>
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${getColorClasses(service.color).split(' ')[2]}`} />
                </div>
                <h3 className="font-playfair text-xl sm:text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="font-poppins text-gray-600 text-sm sm:text-base leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Link to="/dining" className="group">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 sm:p-8 rounded-xl lg:rounded-2xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Fine Dining</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">Experience culinary excellence at our award-winning restaurants.</p>
                <div className="flex items-center text-amber-600 font-semibold text-sm sm:text-base">
                  Explore Dining
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/events" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 sm:p-8 rounded-xl lg:rounded-2xl hover:shadow-lg transition-all duration-300 group-hover:scale-105 sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Events & Meetings</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">Host memorable events in our elegant venues and meeting spaces.</p>
                <div className="flex items-center text-blue-600 font-semibold text-sm sm:text-base">
                  Plan Your Event
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/contact" className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 sm:p-8 rounded-xl lg:rounded-2xl hover:shadow-lg transition-all duration-300 group-hover:scale-105 sm:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Tour Bomet</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">Explore Bomet County's rich culture and tourism attractions with our guidance.</p>
                <div className="flex items-center text-green-600 font-semibold text-sm sm:text-base">
                  Explore Tours
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
    </div>
  );
};

export default Home;