import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      {/* Top bar */}
      <div className="bg-slate-900 text-white py-1 sm:py-2 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="truncate">0758 000 010</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="truncate">hotelthewillis@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 mt-1 sm:mt-0">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="hidden sm:inline truncate">P.O Box 669-20400 Bomet, Kenya</span>
            <span className="sm:hidden truncate">Bomet, Kenya</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-2 sm:py-3 md:py-4">
        <div className="flex justify-between items-center min-h-[48px]">
          {/* Logo + Name - Responsive sizing */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity flex-shrink-0 max-w-[calc(100vw-80px)] lg:max-w-none">
            <img
              src="/logo.png"
              alt="The Willis Hotel"
              className="h-8 sm:h-10 md:h-12 w-auto flex-shrink-0"
            />
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-playfair font-bold text-slate-900 truncate">
              The Willis Hotel
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8 font-poppins flex-shrink-0">
            {[
              { to: '/', label: 'Home' },
              { to: '/rooms', label: 'Rooms' },
              { to: '/amenities', label: 'Amenities' },
              { to: '/dining', label: 'Dining' },
              { to: '/events', label: 'Events' },
              { to: '/gallery', label: 'Gallery' },
              { to: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`transition-colors text-sm xl:text-base whitespace-nowrap ${
                  isActive(item.to)
                    ? 'text-slate-900 font-semibold'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-slate-900 text-white px-3 xl:px-4 2xl:px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm xl:text-base font-medium whitespace-nowrap">
              Book Now
            </button>
          </div>

          {/* Mobile menu toggle - Always visible */}
          <div className="lg:hidden flex-shrink-0">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative z-50 p-2 rounded-md text-slate-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu - Full width overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="lg:hidden fixed inset-0 bg-black/20 z-30"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu */}
            <div className="lg:hidden fixed top-full left-0 right-0 py-4 px-4 font-poppins bg-white shadow-lg z-40 max-h-[calc(100vh-120px)] overflow-y-auto">
              <div className="flex flex-col space-y-3 max-w-7xl mx-auto">
                {[
                  { to: '/', label: 'Home' },
                  { to: '/rooms', label: 'Rooms' },
                  { to: '/amenities', label: 'Amenities' },
                  { to: '/dining', label: 'Dining' },
                  { to: '/events', label: 'Events' },
                  { to: '/gallery', label: 'Gallery' },
                  { to: '/contact', label: 'Contact' },
                ].map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block py-3 px-4 rounded-md transition-colors touch-manipulation text-center ${
                      isActive(item.to)
                        ? 'text-slate-900 font-semibold bg-slate-100'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <button 
                  className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors w-full touch-manipulation font-medium mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;