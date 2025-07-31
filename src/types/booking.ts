export interface User {
  id: string;
  email: string;
  fullName: string;
  phone: string;
  createdAt: Date;
  isAdmin?: boolean;
}

export interface Room {
  id: string;
  name: string;
  type: string;
  price: number;
  capacity: number;
  amenities: string[];
  images: string[];
  description: string;
  available: boolean;
}

export interface Booking {
  id: string;
  userId: string;
  userEmail: string;
  fullName: string;
  phone: string;
  roomId: string;
  roomName: string;
  roomType: string;
  checkInDate: Date;
  checkOutDate: Date;
  numberOfGuests: number;
  specialRequests?: string;
  totalAmount: number;
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  bookingStatus: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

export interface BookingFormData {
  roomId: string;
  checkInDate: string;
  checkOutDate: string;
  numberOfGuests: number;
  specialRequests?: string;
}