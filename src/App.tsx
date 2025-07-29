import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Rooms from './components/Rooms';
import Amenities from './components/Amenities';
import Dining from './components/Dining';
import Events from './components/Events';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Rooms />
      <Amenities />
      <Dining />
      <Events />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;