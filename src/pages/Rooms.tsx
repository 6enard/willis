import React, { useState } from 'react';
import { Wifi, Car, Coffee, Tv, Bath, Users, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import RoomBooking from '../components/RoomBooking';
import { Room } from '../types/booking';

const Rooms = () => {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [bookingRoom, setBookingRoom] = useState<Room | null>(null);
  const { user, userProfile } = useAuth();

  const rooms: Room[] = [
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
      available: true
    }
  ];

  const handleBookRoom = (room: Room) => {
    if (user && userProfile) {
      setBookingRoom(room);
    } else {
      navigate('/login');
    }
  };
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Luxurious Accommodations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our collection of elegantly appointed rooms and suites, 
            each designed to provide the ultimate comfort and luxury experience.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          <button className="bg-amber-500 text-white px-6 py-2 rounded-full font-semibold">
            All Rooms
          </button>
          <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
            Standard
          </button>
          <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
            Suites
          </button>
          <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
            Family
          </button>
          <button className="bg-gray-100 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-200 transition-colors">
            Premium
          </button>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center">
                    <span className="text-gray-500 line-through text-sm mr-2">{room.originalPrice}</span>
                    <span className="font-bold text-amber-600">{room.price}/night</span>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Available
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {room.guests}
                  </div>
                  <div>{room.size}</div>
                  <div>{room.bed}</div>
                  <div>{room.view}</div>
                </div>

                <div className="flex space-x-3 mb-4">
                  {room.features.map((Icon, index) => (
                    <div key={index} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <Icon className="w-4 h-4 text-gray-600" />
                    </div>
                  ))}
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{room.description}</p>

                <div className="flex space-x-2 mb-4">
                  <button 
                    onClick={() => setSelectedRoom(typeof room.id === 'string' ? parseInt(room.id.split('-')[0]) : room.id)}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-semibold text-sm"
                  >
                    View Details
                  </button>
                  <button 
                    onClick={() => handleBookRoom(room)}
                    className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 px-4 rounded-lg transition-colors font-semibold text-sm"
                  >
                    Book Now
                  </button>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-amber-400 fill-current mr-1" />
                    <span>4.8 (124 reviews)</span>
                  </div>
                  <span>Free cancellation</span>
                  <span>
                    {room.available ? 'Available' : 'Booked'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Room Details Modal */}
        {selectedRoom && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {(() => {
                  const room = rooms.find(r => (typeof r.id === 'string' ? parseInt(r.id.split('-')[0]) : r.id) === selectedRoom);
                  if (!room) return null;
                  
                  return (
                    <>
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 mb-2">{room.name}</h2>
                          <div className="flex items-center">
                            <span className="text-gray-500 line-through text-lg mr-2">KSh {(room.price * 1.15).toLocaleString()}</span>
                            <span className="text-2xl font-bold text-amber-600">KSh {room.price.toLocaleString()}/night</span>
                          </div>
                        </div>
                        <button 
                          onClick={() => setSelectedRoom(null)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          ✕
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
                          <p className="text-gray-600 mb-6 leading-relaxed">{room.description}</p>
                          
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
                            <h4 className="font-semibold text-gray-900 mb-3">Amenities</h4>
                            <div className="grid grid-cols-2 gap-2">
                              {room.amenities.map((amenity, index) => (
                                <div key={index} className="flex items-center text-gray-600 text-sm">
                                  <span>• {amenity}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <button 
                            onClick={() => {
                              setSelectedRoom(null);
                              handleBookRoom(room);
                            }}
                            className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg transition-colors font-semibold"
                          >
                            Book This Room
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

        {/* Room Booking Modal */}
        <RoomBooking 
          isOpen={!!bookingRoom}
          onClose={() => setBookingRoom(null)}
          selectedRoom={bookingRoom}
        />
        {/* Special Offers */}
        <div className="mt-20 bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Special Offers</h2>
            <p className="text-gray-600">Take advantage of our exclusive deals and packages</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Early Bird Special</h3>
              <p className="text-gray-600 text-sm mb-3">Book 30 days in advance and save 20%</p>
              <div className="text-amber-600 font-semibold">Save up to $200</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Extended Stay</h3>
              <p className="text-gray-600 text-sm mb-3">Stay 7+ nights and get the 8th night free</p>
              <div className="text-amber-600 font-semibold">Free night included</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Weekend Getaway</h3>
              <p className="text-gray-600 text-sm mb-3">Friday-Sunday package with breakfast</p>
              <div className="text-amber-600 font-semibold">Starting at $399</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;