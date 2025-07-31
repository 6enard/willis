import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../config/firebase';
import { collection, addDoc, getDocs, query, where, Timestamp } from 'firebase/firestore';
import { Calendar, Users, CreditCard, Check } from 'lucide-react';
import { Room, BookingFormData } from '../types/booking';

interface RoomBookingProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoom?: Room;
}

const RoomBooking: React.FC<RoomBookingProps> = ({ isOpen, onClose, selectedRoom }) => {
  const navigate = useNavigate();
  const { user, userProfile } = useAuth();
  const [formData, setFormData] = useState<BookingFormData>({
    roomId: selectedRoom?.id || '',
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: 1,
    specialRequests: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (selectedRoom) {
      setFormData(prev => ({ ...prev, roomId: selectedRoom.id }));
    }
  }, [selectedRoom]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateNights = () => {
    if (formData.checkInDate && formData.checkOutDate) {
      const checkIn = new Date(formData.checkInDate);
      const checkOut = new Date(formData.checkOutDate);
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    }
    return 1;
  };

  const calculateTotal = () => {
    if (!selectedRoom) return 0;
    return calculateNights() * selectedRoom.price;
  };

  const checkRoomAvailability = async () => {
    if (!formData.checkInDate || !formData.checkOutDate || !formData.roomId) {
      return true;
    }

    try {
      const bookingsRef = collection(db, 'bookings');
      const q = query(
        bookingsRef,
        where('roomId', '==', formData.roomId),
        where('bookingStatus', 'in', ['pending', 'confirmed'])
      );
      
      const querySnapshot = await getDocs(q);
      const checkIn = new Date(formData.checkInDate);
      const checkOut = new Date(formData.checkOutDate);

      for (const doc of querySnapshot.docs) {
        const booking = doc.data();
        const existingCheckIn = booking.checkInDate.toDate();
        const existingCheckOut = booking.checkOutDate.toDate();

        // Check for date overlap
        if (
          (checkIn >= existingCheckIn && checkIn < existingCheckOut) ||
          (checkOut > existingCheckIn && checkOut <= existingCheckOut) ||
          (checkIn <= existingCheckIn && checkOut >= existingCheckOut)
        ) {
          return false;
        }
      }
      return true;
    } catch (error) {
      console.error('Error checking availability:', error);
      return true;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !userProfile || !selectedRoom) {
      setError('Please sign in to complete your booking');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Check room availability
      const isAvailable = await checkRoomAvailability();
      if (!isAvailable) {
        throw new Error('Room is not available for the selected dates');
      }

      // Create booking
      const bookingData = {
        userId: user.uid,
        userEmail: user.email,
        fullName: userProfile.fullName,
        phone: userProfile.phone,
        roomId: selectedRoom.id,
        roomName: selectedRoom.name,
        roomType: selectedRoom.type,
        checkInDate: Timestamp.fromDate(new Date(formData.checkInDate)),
        checkOutDate: Timestamp.fromDate(new Date(formData.checkOutDate)),
        numberOfGuests: formData.numberOfGuests,
        specialRequests: formData.specialRequests,
        totalAmount: calculateTotal(),
        paymentStatus: 'pending',
        bookingStatus: 'pending',
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      };

      await addDoc(collection(db, 'bookings'), bookingData);
      setSuccess(true);

      // Reset form after success
      setTimeout(() => {
        setSuccess(false);
        onClose();
        setFormData({
          roomId: '',
          checkInDate: '',
          checkOutDate: '',
          numberOfGuests: 1,
          specialRequests: ''
        });
      }, 2000);

    } catch (error: any) {
      setError(error.message || 'Failed to create booking');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !selectedRoom) return null;

  if (!user || !userProfile) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Sign In Required</h3>
          <p className="text-gray-600 mb-6">Please sign in to your account to make a booking.</p>
          <div className="flex space-x-4">
            <button 
              onClick={onClose}
              className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
            >
              Close
            </button>
            <button 
              onClick={() => {
                onClose();
                navigate('/login', { state: { from: { pathname: window.location.pathname } } });
              }}
              className="flex-1 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg transition-colors font-semibold"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (success) {
    return (
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
          <p className="text-gray-600">Your booking request has been submitted successfully. Our admin team will review and confirm your booking shortly. You'll receive a confirmation email once processed.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Book Your Room</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          {/* Room Info */}
          <div className="mb-6 p-4 bg-amber-50 rounded-lg">
            <h3 className="font-semibold text-gray-900">{selectedRoom.name}</h3>
            <p className="text-amber-600 font-bold">KSh {selectedRoom.price.toLocaleString()}/night</p>
            <p className="text-gray-600 text-sm">{selectedRoom.description}</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Check In Date *
                </label>
                <input 
                  type="date" 
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Check Out Date *
                </label>
                <input 
                  type="date" 
                  name="checkOutDate"
                  value={formData.checkOutDate}
                  onChange={handleInputChange}
                  required
                  min={formData.checkInDate || new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users className="w-4 h-4 inline mr-2" />
                Number of Guests *
              </label>
              <select 
                name="numberOfGuests"
                value={formData.numberOfGuests}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                {[...Array(selectedRoom.capacity)].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1} Guest{i > 0 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requests
              </label>
              <textarea 
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                placeholder="Any special requests or requirements..."
              />
            </div>

            {/* Booking Summary */}
            {formData.checkInDate && formData.checkOutDate && (
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Booking Summary</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Room:</span>
                    <span className="font-semibold">{selectedRoom.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Nights:</span>
                    <span className="font-semibold">{calculateNights()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rate per night:</span>
                    <span className="font-semibold">KSh {selectedRoom.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Guests:</span>
                    <span className="font-semibold">{formData.numberOfGuests}</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between">
                    <span className="text-lg font-bold text-gray-900">Total:</span>
                    <span className="text-lg font-bold text-amber-600">KSh {calculateTotal().toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}

            <div className="flex space-x-4">
              <button 
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
              >
                Cancel
              </button>
              <button 
                type="submit"
                disabled={loading}
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-lg transition-colors font-semibold disabled:opacity-50 flex items-center justify-center"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                {loading ? 'Processing...' : 'Book Now'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RoomBooking;