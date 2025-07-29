import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', path: '/home' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Dining', path: '/dining' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo + Name */}
        <Link to="/home" className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="The Willis Hotel"
            className="h-10 w-auto"
          />
          <span className="text-xl sm:text-2xl font-bold text-gray-900 font-playfair">
            The Willis Hotel
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-base font-medium ${
                isActive(item.path) ? 'text-blue-600' : 'text-gray-700'
              } hover:text-blue-600 transition`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger menu (mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-800" />
            ) : (
              <Menu className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <nav className="flex flex-col space-y-3 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-base font-medium ${
                  isActive(item.path) ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600 transition`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
