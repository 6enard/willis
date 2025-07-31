import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import UserAuth from './UserAuth';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const location = useLocation();
  const { user, userProfile, logout } = useAuth();

  const isActive = (path: string) => location.pathname === path; 

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
              <span>hotelthewillis@gmail.com .</span>
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
      <nav className="max-w-7xl mx-auto px-4 py-2 sm:py-3 md:py-4">
        <div className="flex justify-between items-center">
          {/* Logo + Name linking to /home */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-90 transition-opacity">
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
                <Link
                  to="/admin/dashboard"
                  className="text-slate-700 hover:text-slate-900 transition-colors text-sm xl:text-base"
                >
                  Dashboard
                </Link>
                )}
                <button
                  onClick={logout}
                  className="bg-red-600 text-white px-3 xl:px-4 2xl:px-6 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm xl:text-base font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/admin/login"
                className="text-slate-700 hover:text-slate-900 transition-colors text-sm xl:text-base mr-4"
              >
                Admin
              </Link>
            )}
            <button className="bg-slate-900 text-white px-3 xl:px-4 2xl:px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors text-sm xl:text-base font-medium">
              Book Now
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-slate-800 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-3 py-4 px-2 border-t font-poppins bg-white shadow-md rounded-md">
            <div className="flex flex-col space-y-4">
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
                  className={`transition-colors ${
                    isActive(item.to)
                      ? 'text-slate-900 font-semibold'
                      : 'text-slate-700 hover:text-slate-900' 
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              {user ? (
                <>
                  <span className="text-slate-700 font-medium">
                    Welcome, {userProfile?.fullName || user.email}
                  </span>
                  {userProfile?.isAdmin && (
                  <Link
                    to="/admin/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    Dashboard
                  </Link>
                  )}
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors w-full text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setAuthMode('login');
                      setIsAuthOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      setAuthMode('register');
                      setIsAuthOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    Sign Up
                  </button>
                  <Link
                    to="/admin/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-700 hover:text-slate-900 transition-colors"
                  >
                    Admin Login
                  </Link>
                </>
              )}
              <button 
                onClick={() => {
                  if (user && userProfile) {
                    // Open booking for logged in users
                    // You can add booking modal logic here
                  } else {
                    setAuthMode('login');
                    setIsAuthOpen(true);
                  }
                  setIsMenuOpen(false);
                }}
                className="bg-slate-900 text-white px-6 py-2 rounded-lg hover:bg-slate-800 transition-colors w-full"
              >
                Book Now
              </button>
            </div>
          </div>
        )}

      </nav>
      
      {/* User Authentication Modal */}
      <UserAuth 
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
      />
    </header>
  );
};

export default Header;