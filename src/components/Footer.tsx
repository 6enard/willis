import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">The Luxury Hotel</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Experience unparalleled luxury and comfort in the heart of Nairobi. 
              Where every moment becomes a cherished memory.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#rooms" className="text-gray-300 hover:text-amber-400 transition-colors">Rooms & Suites</a></li>
              <li><a href="#amenities" className="text-gray-300 hover:text-amber-400 transition-colors">Amenities</a></li>
              <li><a href="#dining" className="text-gray-300 hover:text-amber-400 transition-colors">Dining</a></li>
              <li><a href="#events" className="text-gray-300 hover:text-amber-400 transition-colors">Events</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Room Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Spa & Wellness</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Airport Transfer</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Concierge</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Business Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Laundry Service</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Luxury Avenue</p>
                  <p className="text-gray-300">Westlands, Nairobi</p>
                  <p className="text-gray-300">Kenya, 00100</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-amber-400 mr-3" />
                <p className="text-gray-300">+254 700 123 456</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-amber-400 mr-3" />
                <p className="text-gray-300">info@luxuryhotel.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300">Subscribe to our newsletter for exclusive offers and updates.</p>
            </div>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-amber-500 text-white"
              />
              <button className="bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-r-lg transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 The Luxury Hotel. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;