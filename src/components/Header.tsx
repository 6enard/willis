import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-white/20'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
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

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-4 sm:py-5 md:py-6">
        <div className="flex justify-between items-center">
          {/* Logo + Name linking to /home */}
          <Link
            to="/home"
            className="flex items-center space-x-2 sm:space-x-3 hover:scale-105 transition-transform duration-300"
          >
            <img
              src="/logo.png"
              alt="The Willis Hotel"
              className="h-10 sm:h-12 md:h-14 w-auto"
            />
            <span className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-slate-900">
              The Willis Hotel
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8 font-poppins">
            {[
              { to: '/home', label: 'Home' },
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
                className={`transition-colors text-sm xl:text-base ${
                  isActive(item.to)
                    ? 'text-slate-900 font-semibold'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-slate-900 text-white px-3 xl:px-4 2xl:px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm xl:text-base font-medium">
              Book Now
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-slate-800 hover:bg-slate-200'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 py-4 px-2 border-t font-poppins bg-white shadow-md rounded-md">
            <div className="flex flex-col space-y-4">
              {[
                { to: '/home', label: 'Home' },
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
                  className={`transition-colors ${
                    isActive(item.to)
                      ? 'text-slate-900 font-semibold'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
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
