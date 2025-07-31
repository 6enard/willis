import React from 'react';
import { useState } from 'react';
import { Calendar, Users } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import UserAuth from './UserAuth';
import RoomBooking from './RoomBooking';
import { Room } from '../types/booking';

const Hero = () => {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1
  });
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const { user } = useAuth();

  // Default room for booking when no specific room is selected
  const defaultRoom: Room = {
    id: 'deluxe-room',
    name: "Deluxe Room",
    type: "Deluxe",
    price: 4500,
    capacity: 2,
    amenities: ["Double Bed", "Free WiFi", "Television", "Bathroom", "Work Desk", "Premium Toiletries"],
    images: ["/willis3.jpg", "/willis8.jpg", "/willis9.jpg"],
    description: "Spacious deluxe room with double bed, premium amenities, and comfortable furnishings. Perfect for couples or business travelers.",
    available: true
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckAvailability = () => {
    if (!bookingData.checkIn || !bookingData.checkOut) {
      alert('Please select check-in and check-out dates');
      return;
    }
    
    if (user) {
      setSelectedRoom(defaultRoom);
      setIsBookingOpen(true);
    } else {
      setIsAuthOpen(true);
    }
  };

  const handleBookNow = () => {
    if (user) {
      setSelectedRoom(defaultRoom);
      setIsBookingOpen(true);
    } else {
      setIsAuthOpen(true);
    }
  };

  return (
    <>
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-24">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/willis7.jpg)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-black/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-7xl mx-auto px-4 w-full py-10 sm:py-16">
          <h1 className="font-playfair text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-xl">
            Welcome to
            <span className="block text-amber-400 mt-2">The Willis Hotel</span>
            <span className="block text-lg sm:text-xl md:text-2xl font-poppins font-medium mt-3 text-amber-100">South Rift's Finest</span>
          </h1>

          <p className="font-poppins text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
            Conveniently located along Sotik - Narok Highway with easy access to Maasai Mara Game Reserve
            and the culture-filled Kalenjin and Maasai communities. Perfect for both business and leisure travelers.
          </p>

          {/* Booking Form */}
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 md:p-10 max-w-5xl mx-auto shadow-xl border border-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
              {/* Check-in */}
              <div className="text-left">
                <label className="block text-sm sm:text-base font-semibold text-gray-800 mb-2">Check In</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input 
                    type="date" 
                    name="checkIn"
                    value={bookingData.checkIn}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm sm:text-base text-gray-900 font-medium"
                  />
                </div>
              </div>

              {/* Check-out */}
              <div className="text-left">
                <label className="block text-sm sm:text-base font-semibold text-gray-800 mb-2">Check Out</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input 
                    type="date" 
                    name="checkOut"
                    value={bookingData.checkOut}
                    onChange={handleInputChange}
                    min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm sm:text-base text-gray-900 font-medium"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="text-left">
                <label className="block text-sm sm:text-base font-semibold text-gray-800 mb-2">Guests</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <select 
                    name="guests"
                    value={bookingData.guests}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-sm sm:text-base text-gray-900 font-medium appearance-none"
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4+ Guests</option>
                  </select>
                </div>
              </div>

              {/* Button */}
              <button 
                onClick={handleCheckAvailability}
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base lg:mt-6"
              >
                Check Availability
              </button>
            </div>
            
            {/* Additional Book Now Button */}
            <div className="mt-6 text-center">
              <button 
                onClick={handleBookNow}
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:bg-white/20 text-sm sm:text-base"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start pt-2">
            <div className="w-1 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div> 
      </section>

      {/* User Authentication Modal */}
      <UserAuth 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode="login"
      />

      {/* Room Booking Modal */}
      <RoomBooking 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedRoom={selectedRoom}
      />
    </>
  );
};

export default Hero;