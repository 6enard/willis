import React, { useState } from 'react';
import { Wifi, Car, Coffee, Tv, Bath, Users, Star, ArrowLeft, ArrowRight } from 'lucide-react';

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);

  const rooms = [
    {
      id: 1,
      name: "Standard Room",
      price: "$199",
      originalPrice: "$249",
      image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      gallery: [
        "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      ],
      size: "32 sqm",
      guests: "2 Guests",
      bed: "Queen Bed",
      view: "City View",
      amenities: ["Free WiFi", "Air Conditioning", "Mini Bar", "Work Desk", "Room Service", "Safe"],
      features: [Wifi, Car, Coffee, Tv],
      description: "Comfortable and elegantly appointed room perfect for business or leisure travelers. Features modern amenities and city views."
    },
    {
      id: 2,
      name: "Deluxe Suite",
      price: "$299",
      originalPrice: "$349",
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      gallery: [
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      ],
      size: "45 sqm",
      guests: "2 Guests",
      bed: "King Bed",
      view: "City View",
      amenities: ["King Bed", "City View", "Mini Bar", "Work Desk", "Marble Bathroom", "Premium Toiletries"],
      features: [Wifi, Car, Coffee, Tv],
      description: "Spacious suite with separate living area, premium amenities, and stunning city views. Perfect for extended stays."
    },
    {
      id: 3,
      name: "Executive Suite",
      price: "$459",
      originalPrice: "$529",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      gallery: [
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      ],
      size: "65 sqm",
      guests: "3 Guests",
      bed: "King Bed + Sofa Bed",
      view: "Ocean View",
      amenities: ["King Bed", "Ocean View", "Living Area", "Kitchenette", "Executive Lounge Access", "Butler Service"],
      features: [Wifi, Car, Coffee, Tv, Bath],
      description: "Luxurious suite with panoramic ocean views, separate living area, and exclusive access to executive lounge."
    },
    {
      id: 4,
      name: "Presidential Suite",
      price: "$799",
      originalPrice: "$899",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      gallery: [
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      ],
      size: "120 sqm",
      guests: "4 Guests",
      bed: "Master Bedroom + Guest Room",
      view: "Panoramic View",
      amenities: ["Master Bedroom", "Panoramic View", "Private Terrace", "Butler Service", "Jacuzzi", "Dining Room"],
      features: [Wifi, Car, Coffee, Tv, Bath, Users],
      description: "The ultimate luxury experience with private terrace, dedicated butler service, and breathtaking panoramic views."
    },
    {
      id: 5,
      name: "Family Suite",
      price: "$399",
      originalPrice: "$459",
      image: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      gallery: [
        "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      ],
      size: "80 sqm",
      guests: "6 Guests",
      bed: "2 Bedrooms",
      view: "Garden View",
      amenities: ["Two Bedrooms", "Garden View", "Kitchenette", "Living Area", "Kids Amenities", "Connecting Rooms"],
      features: [Wifi, Car, Coffee, Tv, Bath, Users],
      description: "Perfect for families with two separate bedrooms, living area, and special amenities for children."
    },
    {
      id: 6,
      name: "Penthouse Suite",
      price: "$1299",
      originalPrice: "$1499",
      image: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      gallery: [
        "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      ],
      size: "200 sqm",
      guests: "8 Guests",
      bed: "3 Bedrooms",
      view: "360° City View",
      amenities: ["Three Bedrooms", "360° Views", "Private Elevator", "Rooftop Terrace", "Personal Chef", "Spa Room"],
      features: [Wifi, Car, Coffee, Tv, Bath, Users],
      description: "The pinnacle of luxury living with three bedrooms, private elevator, rooftop terrace, and personal chef service."
    }
  ];

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
                    onClick={() => setSelectedRoom(room.id)}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-colors font-semibold text-sm"
                  >
                    View Details
                  </button>
                  <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-2 px-4 rounded-lg transition-colors font-semibold text-sm">
                    Book Now
                  </button>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-amber-400 fill-current mr-1" />
                    <span>4.8 (124 reviews)</span>
                  </div>
                  <span>Free cancellation</span>
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
                  const room = rooms.find(r => r.id === selectedRoom);
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
                                  <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                                  {amenity}
                                </div>
                              ))}
                            </div>
                          </div>

                          <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg transition-colors font-semibold">
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