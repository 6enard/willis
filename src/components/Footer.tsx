import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">The Willis Hotel</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Built in 2013 in Bomet County, located in the South Rift region of Kenya, 
              with easy access to tourist attractions and tastefully decorated rooms.
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
              <a 
                href="https://wa.me/254758000010" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/rooms" className="text-gray-300 hover:text-amber-400 transition-colors">Rooms & Suites</Link></li>
              <li><Link to="/amenities" className="text-gray-300 hover:text-amber-400 transition-colors">Amenities</Link></li>
              <li><Link to="/dining" className="text-gray-300 hover:text-amber-400 transition-colors">Dining</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-amber-400 transition-colors">Events</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">Contact</Link></li>
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
                  <p className="text-gray-300">P.O Box 669-20400</p>
                  <p className="text-gray-300">Bomet, Kenya</p>
                  <p className="text-gray-300">Sotik - Narok Highway</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-amber-400 mr-3" />
                <a href="tel:+254758000010" className="text-gray-300 hover:text-amber-400 transition-colors">0758 000 010</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-amber-400 mr-3" />
                <a href="mailto:hotelthewillis@gmail.com" className="text-gray-300 hover:text-amber-400 transition-colors">hotelthewillis@gmail.com</a>
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
            © 2024 The Willis Hotel. All rights reserved.
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