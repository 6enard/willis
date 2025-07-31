import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Amenities from './pages/Amenities';
import Dining from './pages/Dining';
import Events from './pages/Events';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import AdminLogin from './components/AdminLogin';
import UserLogin from './components/UserLogin';
import AdminDashboard from './components/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './contexts/AuthContext';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen">
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/login" element={<UserLogin />} />
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;