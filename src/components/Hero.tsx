import React from 'react';
import { Calendar, Users, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 sm:pt-24 md:pt-32">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/willis1.jpg)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4 w-full py-8 sm:py-12">
        <h1 className="font-playfair text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 md:mb-8 leading-tight drop-shadow-2xl">
          Welcome to
          <span className="block text-amber-400 mt-2 sm:mt-3">The Willis Hotel</span>
          <span className="block text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-poppins font-medium mt-2 sm:mt-4 text-amber-100">South Rift's Finest</span>
        </h1>
        <p className="font-poppins text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-12 text-white/90 max-w-5xl mx-auto leading-relaxed px-2 sm:px-0 drop-shadow-lg">
          Conveniently located along Sotik - Narok Highway with easy access to Maasai Mara Game Reserve 
          and the culture-filled Kalenjin and Maasai communities. Perfect for both business and leisure travelers.
        </p>
        
        {/* Booking form */}
        <div className="bg-white/98 backdrop-blur-md rounded-xl sm:rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 max-w-6xl mx-auto shadow-2xl border border-white/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 items-end font-poppins">
            <div className="text-left">
              <label className="block text-sm sm:text-base font-semibold text-gray-800 mb-2">Check In</label>
              <div className="relative">
                <Calendar className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="date" 
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border-2 border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-900 text-sm sm:text-base font-medium transition-all"
                />
              </div>
            </div>
            
            <div className="text-left">
              <label className="block text-sm sm:text-base font-semibold text-gray-800 mb-2">Check Out</label>
              <div className="relative">
                <Calendar className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input 
                  type="date" 
                  className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border-2 border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-900 text-sm sm:text-base font-medium transition-all"
                />
              </div>
            </div>
            
            <div className="text-left">
              <label className="block text-sm sm:text-base font-semibold text-gray-800 mb-2">Guests</label>
              <div className="relative">
                <Users className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <select className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 border-2 border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-900 appearance-none text-sm sm:text-base font-medium transition-all">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
            </div>
            
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 md:px-8 lg:px-10 rounded-lg sm:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base md:text-lg sm:col-span-2 xl:col-span-1 mt-3 xl:mt-0 transform hover:scale-105">
              Check Availability
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;