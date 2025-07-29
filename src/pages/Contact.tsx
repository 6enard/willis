import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "123 Luxury Avenue",
        "Westlands, Nairobi",
        "Kenya, 00100"
      ],
      color: "amber"
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "Reservations: +254 700 123 456",
        "Concierge: +254 700 123 457",
        "Events: +254 700 123 458"
      ],
      color: "blue"
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@luxuryhotel.com",
        "reservations@luxuryhotel.com",
        "events@luxuryhotel.com"
      ],
      color: "green"
    },
    {
      icon: Clock,
      title: "Hours",
      details: [
        "Front Desk: 24/7",
        "Concierge: 6:00 AM - 12:00 AM",
        "Reservations: 8:00 AM - 10:00 PM"
      ],
      color: "purple"
    }
  ];

  const quickActions = [
    {
      icon: Calendar,
      title: "Make a Reservation",
      description: "Book your stay with us",
      action: "Book Now",
      color: "amber"
    },
    {
      icon: Users,
      title: "Plan an Event",
      description: "Host your special occasion",
      action: "Get Quote",
      color: "blue"
    },
    {
      icon: MessageCircle,
      title: "Concierge Services",
      description: "Get local recommendations",
      action: "Contact Concierge",
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      amber: "bg-amber-100 text-amber-600",
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600"
    };
    return colors[color as keyof typeof colors] || colors.amber;
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you plan your perfect stay. Contact us for reservations, 
            inquiries, or any assistance you may need.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {quickActions.map((action, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div className={`w-16 h-16 ${getColorClasses(action.color)} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <action.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{action.title}</h3>
              <p className="text-gray-600 mb-4">{action.description}</p>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-colors font-semibold">
                {action.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start">
                  <div className={`w-12 h-12 ${getColorClasses(info.color)} rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                    <info.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Location</h3>
              <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100"></div>
                <div className="relative text-center z-10">
                  <MapPin className="w-12 h-12 text-amber-600 mx-auto mb-2" />
                  <p className="text-gray-700 font-semibold">Interactive Map</p>
                  <p className="text-gray-600 text-sm">Westlands, Nairobi</p>
                  <button className="mt-3 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold">
                    View on Google Maps
                  </button>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <span className="text-sm font-bold">f</span>
                </a>
                <a href="#" className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <span className="text-sm font-bold">t</span>
                </a>
                <a href="#" className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                  <span className="text-sm font-bold">ig</span>
                </a>
                <a href="#" className="w-12 h-12 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors">
                  <span className="text-sm font-bold">in</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  placeholder="+254 700 000 000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select 
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Room Reservation">Room Reservation</option>
                  <option value="Event Planning">Event Planning</option>
                  <option value="Dining Reservation">Dining Reservation</option>
                  <option value="Spa Booking">Spa Booking</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Complaint">Complaint</option>
                  <option value="Partnership">Partnership Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea 
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none transition-colors"
                  placeholder="Please share your message or inquiry..."
                ></textarea>
              </div>

              <div className="flex items-start">
                <input 
                  type="checkbox" 
                  id="privacy"
                  required
                  className="mt-1 mr-3"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  I agree to the <a href="#" className="text-amber-600 hover:text-amber-700">Privacy Policy</a> and 
                  consent to being contacted regarding my inquiry. *
                </label>
              </div>

              <button 
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>

            {/* Response Time */}
            <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-green-800 font-semibold">Quick Response Guarantee</span>
              </div>
              <p className="text-green-700 text-sm mt-1">
                We typically respond to all inquiries within 2 hours during business hours.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">What are your check-in/check-out times?</h3>
              <p className="text-gray-600 text-sm">Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Do you offer airport transportation?</h3>
              <p className="text-gray-600 text-sm">Yes, we provide complimentary airport shuttle service. Please contact us 24 hours in advance to arrange pickup.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">Is parking available?</h3>
              <p className="text-gray-600 text-sm">We offer complimentary valet parking for all guests. Self-parking is also available in our secure garage.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="font-bold text-gray-900 mb-2">What is your cancellation policy?</h3>
              <p className="text-gray-600 text-sm">Cancellations must be made 24 hours before arrival to avoid charges. Some special rates may have different policies.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;