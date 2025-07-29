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
        <h1 className="font-playfair text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 sm:mb-8 md:mb-10 leading-tight drop-shadow-2xl">
          Welcome to
          <span className="block text-amber-400 mt-2 sm:mt-3">The Willis Hotel</span>
          <span className="block text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins font-medium mt-3 sm:mt-5 text-amber-100">South Rift's Finest</span>
        </h1>
        <p className="font-poppins text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 md:mb-14 text-white/90 max-w-5xl mx-auto leading-relaxed px-4 sm:px-0 drop-shadow-lg">
          Conveniently located along Sotik - Narok Highway with easy access to Maasai Mara Game Reserve 
          and the culture-filled Kalenjin and Maasai communities. Perfect for both business and leisure travelers.
        </p>
        
        {/* Booking form */}
        <div className="bg-white/98 backdrop-blur-md rounded-2xl sm:rounded-3xl md:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-6xl mx-auto shadow-2xl border border-white/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-6 items-end font-poppins">
            <div className="text-left">
              <label className="block text-base sm:text-lg font-semibold text-gray-800 mb-3">Check In</label>
              <div className="relative">
                <Calendar className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                <input 
                  type="date" 
                  className="w-full pl-12 sm:pl-14 pr-4 sm:pr-5 py-4 sm:py-5 border-2 border-gray-300 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-900 text-base sm:text-lg font-medium transition-all"
                />
              </div>
            </div>
            
            <div className="text-left">
              <label className="block text-base sm:text-lg font-semibold text-gray-800 mb-3">Check Out</label>
              <div className="relative">
                <Calendar className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                <input 
                  type="date" 
                  className="w-full pl-12 sm:pl-14 pr-4 sm:pr-5 py-4 sm:py-5 border-2 border-gray-300 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-900 text-base sm:text-lg font-medium transition-all"
                />
              </div>
            </div>
            
            <div className="text-left">
              <label className="block text-base sm:text-lg font-semibold text-gray-800 mb-3">Guests</label>
              <div className="relative">
                <Users className="absolute left-4 sm:left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                <select className="w-full pl-12 sm:pl-14 pr-4 sm:pr-5 py-4 sm:py-5 border-2 border-gray-300 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-gray-900 appearance-none text-base sm:text-lg font-medium transition-all">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4+ Guests</option>
                </select>
              </div>
            </div>
            
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 sm:py-5 px-6 sm:px-8 md:px-10 lg:px-12 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl text-base sm:text-lg md:text-xl sm:col-span-2 xl:col-span-1 mt-4 xl:mt-0 transform hover:scale-105">
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