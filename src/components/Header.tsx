import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      {/* Top bar */}
      <div className="bg-slate-900 text-white py-1 sm:py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>0758 000 010</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>hotelthewillis@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-1 sm:mt-0">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">P.O Box 669-20400 Bomet, Kenya</span>
            <span className="sm:hidden">Bomet, Kenya</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-2 sm:py-3 md:py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-90 transition-opacity">
            <img 
              src="/logo.png" 
              alt="The Willis Hotel" 
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-playfair font-bold text-slate-900">
              The Willis Hotel
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8 font-poppins">
            <Link 
              to="/" 
              className={`transition-colors text-sm xl:text-base ${isActive('/') ? 'text-slate-900 font-semibold' : 'text-slate-700 hover:text-slate-900'}`}
            >
              Home
            </Link>
            <Link 
              to="/rooms" 
              className={`transition-colors text-sm xl:text-base ${isActive('/rooms') ? 'text-slate-900 font-semibold' : 'text-slate-700 hover:text-slate-900'}`}
            >
              Rooms
            </Link>
            <Link 
              to="/amenities" 
              className={`transition-colors text-sm xl:text-base ${isActive('/amenities') ? 'text-slate-900 font-semibold' : 'text-slate-700 hover:text-slate-900'}`}
            >
              Amenities
            </Link>
            <Link 
              to="/dining" 
              className={`transition-colors text-sm xl:text-base ${isActive('/dining') ? 'text-slate-900 font-semibold' : 'text-slate-700 hover:text-slate-900'}`}
            >
              Dining
            </Link>
            <Link 
              to="/events" 
              className={`transition-colors text-sm xl:text-base ${isActive('/events') ? 'text-slate-900 font-semibold' : 'text-slate-700 hover:text-slate-900'}`}
            >
              Events
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors text-sm xl:text-base ${isActive('/contact') ? 'text-slate-900 font-semibold' : 'text-slate-700 hover:text-slate-900'}`}
            >
              Contact
            </Link>
            <button className="bg-slate-900 text-white px-3 xl:px-4 2xl:px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm xl:text-base font-medium">
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 py-3 border-t font-poppins">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-colors ${isActive('/') ? 'text-slate-900 font-semibold' : 'text-slate-700 hover:text-slate-900'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/rooms" 
                className={`transition-colors ${isActive('/rooms') ? 'text-slate-900 font-semibold' : 'text-slate-700 hover:text-slate-900'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Rooms
              </Link>
              <Link 
                to="/amenities" 
                className={`transition-colors ${isActive('/amenities') ? 'text-slate-900 font-semibold' : 'text-slate-700 hover:text-slate-900'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Amenities
              </Link>
              <Link 
                to="/dining" 
                className={`transition-colors ${isActive('/dining') ? 'text-slate-900 font-semibold' : 'text-slate-700 hover:text-slate-900'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Dining
              </Link>
              <Link 
                to="/events" 
                className={`transition-colors ${isActive('/events') ? 'text-slate-900 font-semibold' : 'text-slate-700 hover:text-slate-900'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Events
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors ${isActive('/contact') ? 'text-slate-900 font-semibold' : 'text-slate-700 hover:text-slate-900'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors w-full">
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