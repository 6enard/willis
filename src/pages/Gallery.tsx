import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Camera, Play, Pause } from 'lucide-react';

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // All images from the public folder
  const images = [
    {
      src: '/willis1.jpg',
      title: 'Hotel Exterior',
      description: 'The Willis Hotel main building with beautiful architecture'
    },
    {
      src: '/willis2.jpg',
      title: 'Elegant Room',
      description: 'Comfortable and stylish guest room with modern amenities'
    },
    {
      src: '/willis3.jpg',
      title: 'Deluxe Suite',
      description: 'Spacious deluxe suite with premium furnishings'
    },
    {
      src: '/willis4.jpg',
      title: 'Superior Room',
      description: 'Our finest room with garden views and luxury amenities'
    },
    {
      src: '/willis5.jpg',
      title: 'Hotel Lobby',
      description: 'Welcoming lobby area with elegant decor'
    },
    {
      src: '/willis6.jpg',
      title: 'Event Space',
      description: 'Grand ballroom perfect for weddings and events'
    },
    {
      src: '/willis7.jpg',
      title: 'Spa & Wellness',
      description: 'Relaxing spa facilities for ultimate rejuvenation'
    },
    {
      src: '/willis8.jpg',
      title: 'Fine Dining',
      description: 'Elegant restaurant with international cuisine'
    },
    {
      src: '/willis9.jpg',
      title: 'Conference Room',
      description: 'Modern meeting facilities for business events'
    },
    {
      src: '/willis10.jpg',
      title: 'Lounge Area',
      description: 'Comfortable lounge space for relaxation'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay && !isModalOpen) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, isModalOpen, images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const openModal = (index: number) => {
    setCurrentImage(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Camera className="w-12 h-12 text-amber-500 mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Photo Gallery
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore The Willis Hotel through our stunning collection of photographs 
            showcasing our rooms, amenities, and beautiful surroundings.
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative mb-16">
          <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            
            {/* Overlay with image info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {images[currentImage].title}
              </h3>
              <p className="text-white/90 text-base md:text-lg">
                {images[currentImage].description}
              </p>
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Auto-play control */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
              {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage ? 'bg-amber-500 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse All Photos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openModal(index)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-semibold truncate">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hotel Stats */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience The Willis Hotel</h2>
            <p className="text-gray-600">Discover what makes us special</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">48</div>
              <div className="text-gray-700">Bed Capacity</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">2013</div>
              <div className="text-gray-700">Established</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">24/7</div>
              <div className="text-gray-700">Service</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-500 mb-2">5★</div>
              <div className="text-gray-700">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-2 rounded-full transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation in modal */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image info in modal */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4">
              <h3 className="text-xl font-bold text-white mb-1">
                {images[currentImage].title}
              </h3>
              <p className="text-white/90">
                {images[currentImage].description}
              </p>
              <div className="text-white/70 text-sm mt-2">
                {currentImage + 1} of {images.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;