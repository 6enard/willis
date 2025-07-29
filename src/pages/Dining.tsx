import React, { useState } from 'react';
import { Clock, Star, MapPin, ChefHat, Wine, Utensils, Coffee } from 'lucide-react';

const Dining = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<number | null>(null);

  const restaurants = [
    {
      id: 1,
      name: "The Grand Terrace",
      cuisine: "International Fine Dining",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Elegant rooftop dining with panoramic city views and contemporary international cuisine crafted by our award-winning chef.",
      longDescription: "Experience culinary artistry at its finest in our flagship restaurant. The Grand Terrace offers an sophisticated atmosphere with floor-to-ceiling windows showcasing breathtaking city views. Our menu features seasonal ingredients sourced from local farms, prepared with innovative techniques that honor both tradition and creativity.",
      hours: "6:00 PM - 11:00 PM",
      rating: 4.9,
      priceRange: "$$$",
      features: ["Rooftop Terrace", "Wine Pairing", "Live Music", "Private Dining"],
      specialties: ["Wagyu Beef Tenderloin", "Lobster Thermidor", "Truffle Risotto", "Chocolate Soufflé"],
      chef: "Chef Marcus Johnson",
      reservations: "Recommended",
      dressCode: "Smart Casual"
    },
    {
      id: 2,
      name: "Savannah Grill",
      cuisine: "African & Continental",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Authentic African flavors meet continental classics in a warm, inviting atmosphere celebrating local culinary traditions.",
      longDescription: "Discover the rich flavors of East African cuisine alongside international favorites. Our chefs blend traditional spices and cooking methods with modern presentation, creating dishes that tell the story of Kenya's diverse culinary heritage.",
      hours: "12:00 PM - 10:00 PM",
      rating: 4.8,
      priceRange: "$$",
      features: ["Local Cuisine", "Outdoor Seating", "Family Friendly", "Cultural Shows"],
      specialties: ["Nyama Choma", "Ugali & Sukuma Wiki", "Samaki wa Kupaka", "Mandazi"],
      chef: "Chef Amina Wanjiku",
      reservations: "Walk-ins Welcome",
      dressCode: "Casual"
    },
    {
      id: 3,
      name: "Azure Lounge",
      cuisine: "Cocktails & Light Bites",
      image: "https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Sophisticated cocktail lounge with artisanal drinks and gourmet small plates, perfect for evening socializing.",
      longDescription: "Unwind in our chic lounge featuring handcrafted cocktails made with premium spirits and fresh ingredients. Our mixologists create both classic cocktails and innovative signature drinks, paired perfectly with our selection of gourmet appetizers and small plates.",
      hours: "4:00 PM - 2:00 AM",
      rating: 4.7,
      priceRange: "$$",
      features: ["Craft Cocktails", "Late Night", "DJ Sets", "Happy Hour"],
      specialties: ["Signature Martinis", "Craft Beer Selection", "Artisan Cheese Board", "Sushi Rolls"],
      chef: "Mixologist David Chen",
      reservations: "Not Required",
      dressCode: "Smart Casual"
    },
    {
      id: 4,
      name: "Garden Café",
      cuisine: "Breakfast & Light Meals",
      image: "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Casual all-day dining in a beautiful garden setting, serving fresh breakfast, lunch, and healthy options.",
      longDescription: "Start your day in our serene garden café surrounded by lush greenery. We serve everything from hearty breakfast buffets to light, healthy meals throughout the day. Perfect for business meetings or casual dining with family.",
      hours: "6:00 AM - 6:00 PM",
      rating: 4.6,
      priceRange: "$",
      features: ["Garden Setting", "Breakfast Buffet", "Healthy Options", "Business Friendly"],
      specialties: ["Continental Breakfast", "Fresh Salads", "Smoothie Bowls", "Artisan Sandwiches"],
      chef: "Chef Sarah Mitchell",
      reservations: "Not Required",
      dressCode: "Casual"
    }
  ];

  const specialExperiences = [
    {
      title: "Chef's Table Experience",
      description: "Intimate 7-course tasting menu with wine pairings",
      price: "$150 per person",
      duration: "3 hours",
      availability: "Friday & Saturday, 7:00 PM",
      maxGuests: "12 guests",
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      title: "Wine Tasting Dinner",
      description: "Curated wine selection paired with gourmet dishes",
      price: "$85 per person",
      duration: "2.5 hours",
      availability: "Every Wednesday, 7:30 PM",
      maxGuests: "20 guests",
      image: "https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      title: "Cooking Masterclass",
      description: "Learn signature dishes from our executive chef",
      price: "$120 per person",
      duration: "4 hours",
      availability: "Saturdays, 2:00 PM",
      maxGuests: "8 guests",
      image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Culinary Excellence
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Embark on a gastronomic journey through our diverse dining venues, 
            each offering unique flavors and exceptional culinary experiences.
          </p>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center">
                  <Star className="w-4 h-4 text-amber-500 mr-1" />
                  <span className="font-semibold text-gray-900">{restaurant.rating}</span>
                </div>
                <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {restaurant.priceRange}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{restaurant.name}</h3>
                <p className="text-amber-600 font-medium mb-3">{restaurant.cuisine}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{restaurant.description}</p>
                
                <div className="flex items-center text-gray-500 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{restaurant.hours}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {restaurant.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <button 
                    onClick={() => setSelectedRestaurant(restaurant.id)}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
                  >
                    View Details
                  </button>
                  <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg transition-colors font-semibold">
                    Make Reservation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Restaurant Details Modal */}
        {selectedRestaurant && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                {(() => {
                  const restaurant = restaurants.find(r => r.id === selectedRestaurant);
                  if (!restaurant) return null;
                  
                  return (
                    <>
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 mb-2">{restaurant.name}</h2>
                          <p className="text-amber-600 font-medium text-lg">{restaurant.cuisine}</p>
                        </div>
                        <button 
                          onClick={() => setSelectedRestaurant(null)}
                          className="text-gray-400 hover:text-gray-600 text-2xl"
                        >
                          ✕
                        </button>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <img 
                            src={restaurant.image} 
                            alt={restaurant.name}
                            className="w-full h-64 object-cover rounded-xl mb-6"
                          />
                          
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-gray-900">Hours:</span>
                              <span className="text-gray-600">{restaurant.hours}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-gray-900">Price Range:</span>
                              <span className="text-gray-600">{restaurant.priceRange}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-gray-900">Dress Code:</span>
                              <span className="text-gray-600">{restaurant.dressCode}</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-gray-900">Reservations:</span>
                              <span className="text-gray-600">{restaurant.reservations}</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="text-gray-600 mb-6 leading-relaxed">{restaurant.longDescription}</p>
                          
                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Signature Dishes</h4>
                            <div className="space-y-2">
                              {restaurant.specialties.map((dish, index) => (
                                <div key={index} className="flex items-center text-gray-600">
                                  <ChefHat className="w-4 h-4 text-amber-500 mr-3" />
                                  {dish}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">Features</h4>
                            <div className="flex flex-wrap gap-2">
                              {restaurant.features.map((feature, index) => (
                                <span key={index} className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>

                          <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg transition-colors font-semibold">
                            Make Reservation
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Special Dining Experiences */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Special Dining Experiences</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Elevate your dining experience with our exclusive culinary events and masterclasses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialExperiences.map((experience, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{experience.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{experience.description}</p>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Price:</span>
                      <span className="font-semibold text-amber-600">{experience.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Duration:</span>
                      <span className="text-gray-700">{experience.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Max Guests:</span>
                      <span className="text-gray-700">{experience.maxGuests}</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500 mb-4">{experience.availability}</div>
                  
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-white py-2 rounded-lg transition-colors font-semibold">
                    Book Experience
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Highlights */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Today's Menu Highlights</h2>
            <p className="text-gray-300">Fresh, seasonal ingredients crafted into extraordinary dishes</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Appetizers</h3>
              <p className="text-gray-300 text-sm mb-3">Truffle Arancini, Tuna Tartare, Burrata</p>
              <div className="text-amber-400 font-semibold">From $18</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Main Courses</h3>
              <p className="text-gray-300 text-sm mb-3">Wagyu Steak, Lobster Risotto, Duck Confit</p>
              <div className="text-amber-400 font-semibold">From $45</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wine className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Wine Selection</h3>
              <p className="text-gray-300 text-sm mb-3">Premium wines from around the world</p>
              <div className="text-amber-400 font-semibold">From $12/glass</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dining;