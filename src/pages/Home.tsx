import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';
import RoomBooking from '../components/RoomBooking';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Calendar, Wifi, Car, Coffee, Tv, Bath, X, MapPin, Utensils, Building, PartyPopper, Camera, Wine } from 'lucide-react';
import { Room } from '../types/booking';

const Home = () => {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [bookingRoom, setBookingRoom] = useState<Room | null>(null);
  const { user, userProfile } = useAuth();

  const featuredRooms: Room[] = [
    {
      id: 'single-room',
      name: "Single Room",
      type: "Standard",
      price: 3500,
      capacity: 2,
      originalPrice: "KSh 4,000",
      image: "/willis2.jpg",
      gallery: [
        "/willis2.jpg",
        "/willis6.jpg",
        "/willis7.jpg"
      ],
      images: ["/willis2.jpg", "/willis6.jpg", "/willis7.jpg"],
      size: "32 sqm",
      guests: "2 Guests",
      bed: "Single Bed",
      view: "City View",
      amenities: ["Free WiFi", "Television", "Bathroom", "Air Conditioning", "Work Desk", "Daily Housekeeping"],
      features: [Wifi, Car, Coffee, Tv],
      description: "Comfortable single room perfect for solo travelers. Features modern amenities with easy access to Maasai Mara and local attractions.",
      longDescription: "Our Single Room offers the perfect blend of comfort and functionality for the discerning solo traveler. Located in the heart of Bomet County, this well-appointed room features contemporary furnishings, modern amenities, and thoughtful touches that ensure a memorable stay. With easy access to the Maasai Mara Game Reserve and local cultural attractions, it's the ideal base for exploring the South Rift region.",
      available: true
    },
    {
      id: 'deluxe-room',
      name: "Deluxe Room",
      type: "Deluxe",
      price: 4500,
      capacity: 2,
      originalPrice: "KSh 5,000",
      image: "/willis3.jpg",
      gallery: [
        "/willis3.jpg",
        "/willis8.jpg",
        "/willis9.jpg"
      ],
      images: ["/willis3.jpg", "/willis8.jpg", "/willis9.jpg"],
      size: "45 sqm",
      guests: "2 Guests",
      bed: "Double Bed",
      view: "City View",
      amenities: ["Double Bed", "Free WiFi", "Television", "Bathroom", "Work Desk", "Premium Toiletries"],
      features: [Wifi, Car, Coffee, Tv],
      description: "Spacious deluxe room with double bed, premium amenities, and comfortable furnishings. Perfect for couples or business travelers.",
      longDescription: "Experience enhanced comfort in our Deluxe Room, featuring a spacious layout with premium furnishings and upgraded amenities. The room includes a comfortable double bed, modern work area, and elegant bathroom with premium toiletries. Perfect for couples on a romantic getaway or business travelers seeking extra comfort and space.",
      available: true
    },
    {
      id: 'superior-room',
      name: "Superior Room",
      type: "Superior",
      price: 5500,
      capacity: 2,
      originalPrice: "KSh 6,000",
      image: "/willis4.jpg",
      gallery: [
        "/willis4.jpg",
        "/willis10.jpg",
        "/willis5.jpg"
      ],
      images: ["/willis4.jpg", "/willis10.jpg", "/willis5.jpg"],
      size: "65 sqm",
      guests: "2 Guests",
      bed: "Double Bed",
      view: "Garden View",
      amenities: ["Double Bed", "Free WiFi", "Television", "Bathroom", "Living Area", "Premium Amenities"],
      features: [Wifi, Car, Coffee, Tv, Bath],
      description: "Our finest room with superior amenities, spacious layout, and garden views. Perfect for guests seeking extra comfort and luxury.",
      longDescription: "Indulge in the ultimate comfort of our Superior Room, the pinnacle of luxury accommodation at The Willis Hotel. This spacious room features a separate living area, premium furnishings, and stunning garden views. With superior amenities and thoughtful design elements, it provides an exceptional experience for guests who appreciate the finer things in life.",
      available: true
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

  const handleBookRoom = (room: Room) => {
    if (user && userProfile) {
      setBookingRoom(room);
    } else {
      navigate('/login');
    }
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
                      <div className="text-gray-400 line-through text-xs">KSh {(room.price * 1.15).toLocaleString()}</div>
                      <span className="font-poppins text-amber-500 font-bold text-base sm:text-lg">KSh {room.price.toLocaleString()}/night</span>
                    </div>
                  </div>
                  <p className="font-poppins text-gray-600 mb-4 text-sm sm:text-base">{room.description}</p>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setSelectedRoom(typeof room.id === 'string' ? parseInt(room.id.split('-')[0]) : room.id)}
                      className="font-poppins flex-1 bg-gray-100 text-gray-700 py-2 sm:py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold text-sm sm:text-base"
                    >
                      View Details
                    </button>
                    <button 
                      onClick={() => handleBookRoom(room)}
                      className="font-poppins flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg transition-colors font-semibold text-sm sm:text-base"
                    >
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
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-playfair text-2xl font-bold text-gray-900">Room Details</h3>
                <button 
                  onClick={() => setSelectedRoom(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              {/* Room details content would go here */}
            </div>
          </div>
        </div>
      )}

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="font-poppins text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Experience exceptional hospitality with our comprehensive range of services 
              designed to make your stay unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className={`bg-gradient-to-br ${getColorClasses(service.color)} p-6 rounded-xl hover:shadow-lg transition-shadow duration-300`}>
                  <div className="mb-4">
                    <IconComponent className="w-12 h-12" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold mb-3">{service.title}</h3>
                  <p className="font-poppins text-sm leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Booking Modal */}
      {bookingRoom && user && userProfile && (
        <RoomBooking 
          isOpen={!!bookingRoom}
          onClose={() => setBookingRoom(null)} 
          selectedRoom={bookingRoom}
        />
      )}
    </div>
  );
};

export default Home;