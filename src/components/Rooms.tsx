import React from 'react';
import { Wifi, Car, Coffee, Tv, Bath, Users } from 'lucide-react';

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Suite",
      price: "$299",
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      size: "45 sqm",
      guests: "2 Guests",
      amenities: ["King Bed", "City View", "Mini Bar", "Work Desk"],
      features: [Wifi, Car, Coffee, Tv]
    },
    {
      id: 2,
      name: "Executive Suite",
      price: "$459",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      size: "65 sqm",
      guests: "3 Guests",
      amenities: ["King Bed", "Ocean View", "Living Area", "Kitchenette"],
      features: [Wifi, Car, Coffee, Tv, Bath]
    },
    {
      id: 3,
      name: "Presidential Suite",
      price: "$799",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      size: "120 sqm",
      guests: "4 Guests",
      amenities: ["Master Bedroom", "Panoramic View", "Private Terrace", "Butler Service"],
      features: [Wifi, Car, Coffee, Tv, Bath, Users]
    }
  ];

  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Luxurious Accommodations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each room is thoughtfully designed to provide the ultimate comfort and elegance, 
            featuring premium amenities and breathtaking views.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-full font-semibold">
                  {room.price}/night
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{room.name}</h3>
                
                <div className="flex items-center justify-between mb-4 text-gray-600">
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {room.guests}
                  </span>
                  <span>{room.size}</span>
                </div>

                <div className="flex space-x-3 mb-4">
                  {room.features.map((Icon, index) => (
                    <div key={index} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                      <Icon className="w-4 h-4 text-gray-600" />
                    </div>
                  ))}
                </div>

                <ul className="space-y-2 mb-6">
                  {room.amenities.map((amenity, index) => (
                    <li key={index} className="text-gray-600 flex items-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      {amenity}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;