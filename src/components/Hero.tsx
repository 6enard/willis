import React from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 sm:pt-32">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url(/willis1.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          Welcome to
          <span className="block text-amber-400">The Willis Hotel</span>
          <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal mt-2">South Rift's Finest</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Conveniently located along Sotik - Narok Highway with easy access to Maasai Mara Game Reserve 
          and the culture-filled Kalenjin and Maasai communities. Perfect for both business and leisure travelers.
        </p>
        
        {/* Booking form */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 max-w-4xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 items-end">
            <div className="text-left">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Check In</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input 
                  type="date" 
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 text-sm sm:text-base"
                />
              </div>
            </div>
            
            <div className="text-left">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Check Out</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <input 
                  type="date" 
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 text-sm sm:text-base"
                />
              </div>
            </div>
            
            <div className="text-left">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">Guests</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                <select className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 appearance-none text-sm sm:text-base">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
            </div>
            
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base lg:col-span-4 xl:col-span-1 mt-2 sm:mt-0">
              Check Availability
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;