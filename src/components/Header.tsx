import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, userProfile, logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  const handleBookNow = () => {
    if (user && userProfile) {
      navigate('/rooms');
    } else {
      navigate('/login');
    }
    setIsMenuOpen(false);
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

      {/* Main nav */}
      <nav className="relative max-w-7xl mx-auto px-4 py-2 sm:py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-90 transition-opacity">
            <img src="/logo.png" alt="The Willis Hotel" className="h-10 sm:h-12 md:h-14 w-auto" />
            <span className="text-xl sm:text-2xl md:text-3xl font-playfair font-bold text-slate-900">
              The Willis Hotel
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8 font-poppins">
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
                className={`transition-colors text-sm xl:text-base ${
                  isActive(item.to)
                    ? 'text-slate-900 font-semibold'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-slate-700 text-sm">
                  Welcome, {userProfile?.fullName || user.email}
                </span>
                {userProfile?.isAdmin && (
                  <Link to="/admin/dashboard" className="text-slate-700 hover:text-slate-900 text-sm xl:text-base">
                    Dashboard
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="bg-red-600 text-white px-3 xl:px-4 2xl:px-6 py-2 rounded-lg hover:bg-red-700 text-sm xl:text-base font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/admin/login"
                className="text-slate-700 hover:text-slate-900 text-sm xl:text-base mr-4"
              >
                Admin
              </Link>
            )}

            <button
              onClick={handleBookNow}
              className="bg-slate-900 text-white px-3 xl:px-4 2xl:px-6 py-2 rounded-lg hover:bg-slate-800 text-sm xl:text-base font-medium"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="xl:hidden z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-slate-800 hover:bg-slate-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 top-[120px] bottom-0 bg-white shadow-xl z-[60] overflow-y-auto">
            <div className="flex flex-col p-6 space-y-3 font-poppins min-h-full">
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
                  className={`py-3 px-4 rounded-lg transition-colors text-base ${
                    isActive(item.to)
                      ? 'text-slate-900 font-semibold bg-amber-50 border-l-4 border-amber-500'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {user ? (
                <>
                  <div className="py-4 px-4 border-t border-gray-200 mt-4 pt-6">
                    <span className="text-slate-700 font-medium text-base">
                      Welcome, {userProfile?.fullName?.split(' ')[0] || user.email}
                    </span>
                  </div>
                  {userProfile?.isAdmin && (
                    <Link
                      to="/admin/dashboard"
                      onClick={() => setIsMenuOpen(false)}
                      className="py-3 px-4 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-gray-50 text-base"
                    >
                      Admin Dashboard
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="bg-red-600 text-white px-4 py-3 rounded-lg hover:bg-red-700 font-medium transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      navigate('/login');
                      setIsMenuOpen(false);
                    }}
                    className="py-3 px-4 text-slate-700 hover:text-slate-900 hover:bg-gray-50 rounded-lg text-base transition-colors"
                  >
                    Sign In
                  </button>
                  <Link
                    to="/admin/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="py-3 px-4 text-slate-700 hover:text-slate-900 hover:bg-gray-50 rounded-lg text-base transition-colors"
                  >
                    Admin Login
                  </Link>
                </>
              )}

              <button
                onClick={handleBookNow}
                className="bg-slate-900 text-white px-4 py-3 rounded-lg hover:bg-slate-800 font-medium mt-4 transition-colors"
              >
                Book Now
              </button>
              
              {/* Bottom spacing for better scrolling */}
              <div className="pb-8"></div>
            </div>
            
            {/* Close overlay when clicking outside */}
            <div className="fixed inset-0 bg-black/20 -z-10" onClick={() => setIsMenuOpen(false)}></div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
