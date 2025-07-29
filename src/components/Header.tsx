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
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>0758 000 010</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>hotelthewillis@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-1 sm:mt-0">
            <MapPin className="w-4 h-4" />
            <span className="hidden sm:inline">P.O Box 669-20400 Bomet, Kenya</span>
            <span className="sm:hidden">Bomet, Kenya</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-slate-900 hover:text-slate-700 transition-colors">
            The Willis Hotel
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
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
            <button className="bg-slate-900 text-white px-4 xl:px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm xl:text-base">
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
          <div className="lg:hidden mt-4 py-4 border-t">
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
              <button className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors w-full">
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