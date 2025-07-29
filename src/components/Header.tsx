import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      {/* Top bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+254 700 123 456</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@luxuryhotel.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-900">
            The Luxury Hotel
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-700 hover:text-slate-900 transition-colors">Home</a>
            <a href="#rooms" className="text-slate-700 hover:text-slate-900 transition-colors">Rooms</a>
            <a href="#amenities" className="text-slate-700 hover:text-slate-900 transition-colors">Amenities</a>
            <a href="#dining" className="text-slate-700 hover:text-slate-900 transition-colors">Dining</a>
            <a href="#events" className="text-slate-700 hover:text-slate-900 transition-colors">Events</a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900 transition-colors">Contact</a>
            <button className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-slate-700 hover:text-slate-900 transition-colors">Home</a>
              <a href="#rooms" className="text-slate-700 hover:text-slate-900 transition-colors">Rooms</a>
              <a href="#amenities" className="text-slate-700 hover:text-slate-900 transition-colors">Amenities</a>
              <a href="#dining" className="text-slate-700 hover:text-slate-900 transition-colors">Dining</a>
              <a href="#events" className="text-slate-700 hover:text-slate-900 transition-colors">Events</a>
              <a href="#contact" className="text-slate-700 hover:text-slate-900 transition-colors">Contact</a>
              <button className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors w-fit">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;