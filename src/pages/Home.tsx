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
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Welcome to
                <span className="block text-amber-500">The Willis Hotel</span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Built in 2013 in Bomet County, we're strategically located in the South Rift region 
                with easy access to Maasai Mara Game Reserve and cultural communities. Our commitment 
                to excellence ensures every guest enjoys comfort, exceptional service, and memorable experiences.
              </p>
              <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-500 mb-1 sm:mb-2">48</div>
                  <div className="text-gray-600 text-sm sm:text-base">Bed Capacity</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-500 mb-1 sm:mb-2">24/7</div>
                  <div className="text-gray-600 text-sm sm:text-base">Service</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-500 mb-1 sm:mb-2">20%</div>
                  <div className="text-gray-600 text-sm sm:text-base">First Stay Discount</div>
                </div>
              </div>
              <Link 
                to="/rooms" 
                className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors font-semibold text-sm sm:text-base"
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Featured Accommodations
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
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
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{room.name}</h3>
                    <span className="text-amber-500 font-bold text-base sm:text-lg">{room.price}/night</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{room.description}</p>
                  <button className="w-full bg-gray-900 text-white py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold text-sm sm:text-base">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/rooms" 
              className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg transition-colors font-semibold text-sm sm:text-base"
            >
              View All Rooms
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <Amenities />

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
                  <Star className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Concierge Services</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">Let our expert team help you plan the perfect stay in Bomet.</p>
                <div className="flex items-center text-green-600 font-semibold text-sm sm:text-base">
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