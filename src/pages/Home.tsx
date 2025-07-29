import React from 'react';
import Hero from '../components/Hero';
import Amenities from '../components/Amenities';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Calendar } from 'lucide-react';

const Home = () => {
  const featuredRooms = [
    {
      name: "Single Room",
      price: "KES 3,500",
      image: "/willis2.jpg",
      description: "Comfortable single room with modern amenities"
    },
    {
      name: "Deluxe Room",
      price: "KES 4,500",
      image: "/willis3.jpg",
      description: "Spacious room with double bed and premium amenities"
    },
    {
      name: "Superior Room",
      price: "KES 5,500",
      image: "/willis4.jpg",
      description: "Our finest room with superior amenities and garden views"
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Welcome to
                <span className="block text-amber-500">The Willis Hotel</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Built in 2013 in Bomet County, we're strategically located in the South Rift region 
                with easy access to Maasai Mara Game Reserve and cultural communities. Our commitment 
                to excellence ensures every guest enjoys comfort, exceptional service, and memorable experiences.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500 mb-2">48</div>
                  <div className="text-gray-600">Bed Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500 mb-2">24/7</div>
                  <div className="text-gray-600">Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500 mb-2">20%</div>
                  <div className="text-gray-600">First Stay Discount</div>
                </div>
              </div>
              <Link 
                to="/rooms" 
                className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg transition-colors font-semibold"
              >
                Explore Rooms
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative">
              <img 
                src="/willis5.jpg"
                alt="Hotel lobby"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-2">
                  <Star className="w-5 h-5 text-amber-400 fill-current" />
                  <Star className="w-5 h-5 text-amber-400 fill-current" />
                  <Star className="w-5 h-5 text-amber-400 fill-current" />
                  <Star className="w-5 h-5 text-amber-400 fill-current" />
                  <Star className="w-5 h-5 text-amber-400 fill-current" />
                </div>
                <p className="text-gray-900 font-semibold">Exceptional Service</p>
                <p className="text-gray-600 text-sm">Rated by 2,500+ guests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Accommodations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular rooms and suites, each designed to provide 
              the ultimate in comfort and luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredRooms.map((room, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <img 
                  src={room.image} 
                  alt={room.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{room.name}</h3>
                    <span className="text-amber-500 font-bold text-lg">{room.price}/night</span>
                  </div>
                  <p className="text-gray-600 mb-4">{room.description}</p>
                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/rooms" 
              className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg transition-colors font-semibold"
            >
              View All Rooms
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Amenities />

      {/* Quick Actions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/dining" className="group">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Fine Dining</h3>
                <p className="text-gray-600 mb-4">Experience culinary excellence at our award-winning restaurants.</p>
                <div className="flex items-center text-amber-600 font-semibold">
                  Explore Dining
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/events" className="group">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Events & Meetings</h3>
                <p className="text-gray-600 mb-4">Host memorable events in our elegant venues and meeting spaces.</p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Plan Your Event
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/contact" className="group">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Concierge Services</h3>
                <p className="text-gray-600 mb-4">Let our expert team help you plan the perfect stay in Nairobi.</p>
                <div className="flex items-center text-green-600 font-semibold">
                  Get Assistance
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