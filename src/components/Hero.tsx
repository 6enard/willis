import React from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-end sm:items-center justify-center pt-20 sm:pt-24 md:pt-32 pb-8 sm:pb-0">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/willis1.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-black/40 sm:bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 w-full">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
          Welcome to
          <span className="block text-amber-400">The Willis Hotel</span>
          <span className="block text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal mt-1 sm:mt-2">South Rift's Finest</span>
        </h1>
        <p className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
          Conveniently located along Sotik - Narok Highway with easy access to Maasai Mara Game Reserve 
          and the culture-filled Kalenjin and Maasai communities. Perfect for both business and leisure travelers.
        </p>
        
        {/* Booking form */}
        <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-8 max-w-5xl mx-auto shadow-2xl mt-4 sm:mt-6 md:mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-3 md:gap-4 items-end">
            <div className="text-left">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Check In</label>
              <div className="relative">
                <Calendar className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="date" 
                  className="w-full pl-8 sm:pl-10 pr-2 sm:pr-3 py-2 sm:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 text-xs sm:text-sm md:text-base"
                />
              </div>
            </div>
            
            <div className="text-left">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Check Out</label>
              <div className="relative">
                <Calendar className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="date" 
                  className="w-full pl-8 sm:pl-10 pr-2 sm:pr-3 py-2 sm:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 text-xs sm:text-sm md:text-base"
                />
              </div>
            </div>
            
            <div className="text-left">
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Guests</label>
              <div className="relative">
                <Users className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <select className="w-full pl-8 sm:pl-10 pr-2 sm:pr-3 py-2 sm:py-3 border border-gray-300 rounded-md sm:rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-gray-900 appearance-none text-xs sm:text-sm md:text-base">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
            </div>
            
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 sm:py-3 px-3 sm:px-4 md:px-6 lg:px-8 rounded-md sm:rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm md:text-base sm:col-span-2 xl:col-span-1 mt-2 sm:mt-3 xl:mt-0">
              Check Availability
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;