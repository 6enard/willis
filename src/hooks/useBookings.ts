import { useState, useEffect } from 'react';
import { db } from '../config/firebase';
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  orderBy,
  Timestamp 
} from 'firebase/firestore';

export interface BookingData {
  guestName: string;
  email: string;
  phone: string;
  roomType: string;
  checkIn: Date;
  checkOut: Date;
  guests: number;
  specialRequests?: string;
  totalAmount: number;
}

export interface Booking extends BookingData {
  id: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}

export const useBookings = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load all bookings
  const loadBookings = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const bookingsRef = collection(db, 'bookings');
      const q = query(bookingsRef, orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      
      const loadedBookings: Booking[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        loadedBookings.push({
          id: doc.id,
          guestName: data.guestName,
          email: data.email,
          phone: data.phone,
          roomType: data.roomType,
          checkIn: data.checkIn.toDate(),
          checkOut: data.checkOut.toDate(),
          guests: data.guests,
          specialRequests: data.specialRequests,
          totalAmount: data.totalAmount,
          status: data.status,
          createdAt: data.createdAt.toDate()
        });
      });
      
      setBookings(loadedBookings);
    } catch (err) {
      console.error('Error loading bookings:', err);
      setError('Failed to load bookings');
    } finally {
      setLoading(false);
    }
  };

  // Create a new booking
  const createBooking = async (bookingData: BookingData): Promise<string | null> => {
    try {
      const docRef = await addDoc(collection(db, 'bookings'), {
        ...bookingData,
        checkIn: Timestamp.fromDate(bookingData.checkIn),
        checkOut: Timestamp.fromDate(bookingData.checkOut),
        status: 'pending',
        createdAt: Timestamp.now()
      });
      
      await loadBookings(); // Refresh the list
      return docRef.id;
    } catch (err) {
      console.error('Error creating booking:', err);
      setError('Failed to create booking');
      return null;
    }
  };

  // Update booking status
  const updateBookingStatus = async (bookingId: string, status: 'confirmed' | 'cancelled'): Promise<boolean> => {
    try {
      const bookingRef = doc(db, 'bookings', bookingId);
      await updateDoc(bookingRef, { status });
      await loadBookings(); // Refresh the list
      return true;
    } catch (err) {
      console.error('Error updating booking:', err);
      setError('Failed to update booking');
      return false;
    }
  };

  // Delete a booking
  const deleteBooking = async (bookingId: string): Promise<boolean> => {
    try {
      await deleteDoc(doc(db, 'bookings', bookingId));
      await loadBookings(); // Refresh the list
      return true;
    } catch (err) {
      console.error('Error deleting booking:', err);
      setError('Failed to delete booking');
      return false;
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  return {
    bookings,
    loading,
    error,
    createBooking,
    updateBookingStatus,
    deleteBooking,
    refreshBookings: loadBookings
  };
};