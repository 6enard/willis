import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../config/firebase';
import { collection, getDocs, doc, updateDoc, deleteDoc, query, orderBy, where } from 'firebase/firestore';
import { 
  Users, 
  Calendar, 
  DollarSign, 
  TrendingUp, 
  Eye, 
  Check, 
  X, 
  Trash2,
  Filter,
  Search,
  Plus,
  Mail,
  Phone,
  CreditCard,
  Download,
  RefreshCw,
  AlertCircle,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react';
import { Booking } from '../types/booking';

const AdminDashboard = () => {
  const { user, userProfile } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [bulkAction, setBulkAction] = useState('');
  const [selectedBookings, setSelectedBookings] = useState<string[]>([]);

  // Fetch bookings from Firestore
  const fetchBookings = async () => {
    try {
      setRefreshing(true);
      const bookingsQuery = query(
        collection(db, 'bookings'),
        orderBy('createdAt', 'desc')
      );
      const querySnapshot = await getDocs(bookingsQuery);
      const bookingsData: Booking[] = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        checkInDate: doc.data().checkInDate?.toDate(),
        checkOutDate: doc.data().checkOutDate?.toDate(),
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate()
      })) as Booking[];
      setBookings(bookingsData);
      setFilteredBookings(bookingsData);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // Fetch users from Firestore
  const fetchUsers = async () => {
    try {
      const usersQuery = query(collection(db, 'users'));
      const querySnapshot = await getDocs(usersQuery);
      const usersData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate()
      }));
      setUsers(usersData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  // Update booking status in Firestore
  const updateBookingStatus = async (bookingId: string, newStatus: 'pending' | 'confirmed' | 'cancelled' | 'completed') => {
    try {
      const bookingRef = doc(db, 'bookings', bookingId);
      await updateDoc(bookingRef, { 
        bookingStatus: newStatus,
        updatedAt: new Date()
      });
      
      // Update local state
      setBookings(bookings.map(booking => 
        booking.id === bookingId 
          ? { ...booking, bookingStatus: newStatus, updatedAt: new Date() }
          : booking
      ));
      setFilteredBookings(filteredBookings.map(booking => 
        booking.id === bookingId 
          ? { ...booking, bookingStatus: newStatus, updatedAt: new Date() }
          : booking
      ));
    } catch (error) {
      console.error('Error updating booking status:', error);
    }
  };

  // Update payment status
  const updatePaymentStatus = async (bookingId: string, newStatus: 'pending' | 'paid' | 'failed' | 'refunded') => {
    try {
      const bookingRef = doc(db, 'bookings', bookingId);
      await updateDoc(bookingRef, { 
        paymentStatus: newStatus,
        updatedAt: new Date()
      });
      
      // Update local state
      setBookings(bookings.map(booking => 
        booking.id === bookingId 
          ? { ...booking, paymentStatus: newStatus, updatedAt: new Date() }
          : booking
      ));
      setFilteredBookings(filteredBookings.map(booking => 
        booking.id === bookingId 
          ? { ...booking, paymentStatus: newStatus, updatedAt: new Date() }
          : booking
      ));
    } catch (error) {
      console.error('Error updating payment status:', error);
    }
  };
  // Delete booking from Firestore
  const deleteBooking = async (bookingId: string) => {
    try {
      await deleteDoc(doc(db, 'bookings', bookingId));
      
      // Update local state
      setBookings(bookings.filter(booking => booking.id !== bookingId));
      setFilteredBookings(filteredBookings.filter(booking => booking.id !== bookingId));
    } catch (error) {
      console.error('Error deleting booking:', error);
    }
  };

  // Handle bulk actions
  const handleBulkAction = async () => {
    if (!bulkAction || selectedBookings.length === 0) return;
    
    try {
      const promises = selectedBookings.map(bookingId => {
        const bookingRef = doc(db, 'bookings', bookingId);
        return updateDoc(bookingRef, { 
          bookingStatus: bulkAction,
          updatedAt: new Date()
        });
      });
      
      await Promise.all(promises);
      await fetchBookings();
      setSelectedBookings([]);
      setBulkAction('');
    } catch (error) {
      console.error('Error performing bulk action:', error);
    }
  };

  // Toggle booking selection
  const toggleBookingSelection = (bookingId: string) => {
    setSelectedBookings(prev => 
      prev.includes(bookingId) 
        ? prev.filter(id => id !== bookingId)
        : [...prev, bookingId]
    );
  };

  // Export bookings to CSV
  const exportBookings = () => {
    const csvContent = [
      ['Guest Name', 'Email', 'Phone', 'Room', 'Check In', 'Check Out', 'Guests', 'Total Amount', 'Status', 'Payment Status', 'Created Date'].join(','),
      ...filteredBookings.map(booking => [
        booking.fullName,
        booking.userEmail,
        booking.phone,
        booking.roomName,
        booking.checkInDate?.toLocaleDateString(),
        booking.checkOutDate?.toLocaleDateString(),
        booking.numberOfGuests,
        booking.totalAmount,
        booking.bookingStatus,
        booking.paymentStatus,
        booking.createdAt?.toLocaleDateString()
      ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bookings-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  useEffect(() => {
    fetchBookings();
    fetchUsers();
  }, []);

  useEffect(() => {
    let filtered = bookings;

    // Filter by status
    if (statusFilter !== 'all') {
      filtered = filtered.filter(booking => booking.bookingStatus === statusFilter);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(booking =>
        booking.fullName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.userEmail?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.roomName?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBookings(filtered);
  }, [bookings, statusFilter, searchTerm]);

  const handleStatusUpdate = async (bookingId: string, newStatus: 'pending' | 'confirmed' | 'cancelled' | 'completed') => {
    await updateBookingStatus(bookingId, newStatus);
  };

  const handlePaymentUpdate = async (bookingId: string, newStatus: 'pending' | 'paid' | 'failed' | 'refunded') => {
    await updatePaymentStatus(bookingId, newStatus);
  };
  const handleDeleteBooking = async (bookingId: string) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      await deleteBooking(bookingId);
    }
  };

  // Calculate statistics
  const totalBookings = bookings.length;
  const confirmedBookings = bookings.filter(b => b.bookingStatus === 'confirmed').length;
  const pendingBookings = bookings.filter(b => b.bookingStatus === 'pending').length;
  const totalRevenue = bookings
    .filter(b => b.paymentStatus === 'paid')
    .reduce((sum, booking) => sum + (booking.totalAmount || 0), 0);
  const todayBookings = bookings.filter(b => {
    const today = new Date();
    const bookingDate = b.createdAt;
    return bookingDate && 
           bookingDate.toDateString() === today.toDateString();
  }).length;

  // Check if current user is admin
  if (!user || user.email !== '6enard@gmail.com') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600">You don't have permission to access this page. Only the authorized administrator (6enard@gmail.com) can view this dashboard.</p>
        </div>
      </div>
    );
  }
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600">Welcome back, {userProfile?.fullName || user?.email}</p>
            </div>
            <div className="flex items-center space-x-3 mt-4 sm:mt-0">
              <button
                onClick={fetchBookings}
                disabled={refreshing}
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 mr-2 ${refreshing ? 'animate-spin' : ''}`} />
                Refresh
              </button>
              <button
                onClick={exportBookings}
                className="flex items-center px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Bookings</p>
                <p className="text-2xl font-bold text-gray-900">{totalBookings}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Confirmed</p>
                <p className="text-2xl font-bold text-gray-900">{confirmedBookings}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Users className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Pending</p>
                <p className="text-2xl font-bold text-gray-900">{pendingBookings}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Revenue</p>
                <p className="text-2xl font-bold text-gray-900">KSh {totalRevenue.toLocaleString()}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Today's Bookings</p>
                <p className="text-2xl font-bold text-gray-900">{todayBookings}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <h2 className="text-lg font-semibold text-gray-900">Recent Bookings</h2>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search bookings..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Status Filter */}
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
              
              {/* Bulk Actions */}
              {selectedBookings.length > 0 && (
                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <span className="text-sm text-blue-700">
                    {selectedBookings.length} booking{selectedBookings.length > 1 ? 's' : ''} selected
                  </span>
                  <select
                    value={bulkAction}
                    onChange={(e) => setBulkAction(e.target.value)}
                    className="px-3 py-1 border border-blue-300 rounded text-sm"
                  >
                    <option value="">Select action...</option>
                    <option value="confirmed">Confirm</option>
                    <option value="cancelled">Cancel</option>
                  </select>
                  <button
                    onClick={handleBulkAction}
                    disabled={!bulkAction}
                    className="px-4 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:opacity-50"
                  >
                    Apply
                  </button>
                  <button
                    onClick={() => setSelectedBookings([])}
                    className="px-4 py-1 bg-gray-500 text-white rounded text-sm hover:bg-gray-600"
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Bookings Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectedBookings.length === filteredBookings.length && filteredBookings.length > 0}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedBookings(filteredBookings.map(b => b.id));
                        } else {
                          setSelectedBookings([]);
                        }
                      }}
                      className="rounded"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Guest Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Room & Dates
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Guests & Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Booking Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={selectedBookings.includes(booking.id)}
                        onChange={() => toggleBookingSelection(booking.id)}
                        className="rounded"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {booking.fullName}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Mail className="w-3 h-3 mr-1" />
                          {booking.userEmail}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Phone className="w-3 h-3 mr-1" />
                          {booking.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div>
                        <div className="font-medium">{booking.roomName}</div>
                        <div className="text-gray-500">{booking.roomType}</div>
                        <div className="text-xs text-gray-400">
                          {booking.checkInDate?.toLocaleDateString()} - {booking.checkOutDate?.toLocaleDateString()}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div>
                        <div className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {booking.numberOfGuests} Guest{booking.numberOfGuests > 1 ? 's' : ''}
                        </div>
                        <div className="font-semibold text-amber-600">
                          KSh {booking.totalAmount?.toLocaleString()}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {booking.bookingStatus === 'confirmed' && <CheckCircle className="w-4 h-4 text-green-500 mr-2" />}
                        {booking.bookingStatus === 'pending' && <Clock className="w-4 h-4 text-yellow-500 mr-2" />}
                        {booking.bookingStatus === 'cancelled' && <XCircle className="w-4 h-4 text-red-500 mr-2" />}
                        {booking.bookingStatus === 'completed' && <CheckCircle className="w-4 h-4 text-blue-500 mr-2" />}
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        booking.bookingStatus === 'confirmed' 
                          ? 'bg-green-100 text-green-800'
                          : booking.bookingStatus === 'cancelled'
                          ? 'bg-red-100 text-red-800'
                          : booking.bookingStatus === 'completed'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.bookingStatus}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      <div className="flex items-center">
                        {booking.paymentStatus === 'paid' && <CheckCircle className="w-4 h-4 text-green-500 mr-2" />}
                        {booking.paymentStatus === 'pending' && <Clock className="w-4 h-4 text-yellow-500 mr-2" />}
                        {booking.paymentStatus === 'failed' && <XCircle className="w-4 h-4 text-red-500 mr-2" />}
                        {booking.paymentStatus === 'refunded' && <AlertCircle className="w-4 h-4 text-gray-500 mr-2" />}
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        booking.paymentStatus === 'paid' 
                          ? 'bg-green-100 text-green-800'
                          : booking.paymentStatus === 'failed'
                          ? 'bg-red-100 text-red-800'
                          : booking.paymentStatus === 'refunded'
                          ? 'bg-gray-100 text-gray-800'
                          : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.paymentStatus}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => setSelectedBooking(booking)}
                          className="text-blue-600 hover:text-blue-900"
                          title="View details"
                        >
                          <Eye className="h-4 w-4" />
                        </button>
                        {booking.bookingStatus === 'pending' && (
                          <>
                            <button
                              onClick={() => handleStatusUpdate(booking.id, 'confirmed')}
                              className="text-green-600 hover:text-green-900"
                              title="Confirm booking"
                            >
                              <Check className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => handleStatusUpdate(booking.id, 'cancelled')}
                              className="text-red-600 hover:text-red-900"
                              title="Cancel booking"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </>
                        )}
                        {booking.bookingStatus === 'confirmed' && booking.paymentStatus === 'pending' && (
                          <button
                            onClick={() => handlePaymentUpdate(booking.id, 'paid')}
                            className="text-green-600 hover:text-green-900"
                            title="Mark as paid"
                          >
                            <CreditCard className="h-4 w-4" />
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteBooking(booking.id)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete booking"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredBookings.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">No bookings found</h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm || statusFilter !== 'all' 
                  ? 'Try adjusting your search or filter criteria.'
                  : 'No bookings have been made yet.'
                }
              </p>
            </div>
          )}
        </div>

        {/* User Management Section */}
        <div className="bg-white rounded-lg shadow mb-6">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Registered Users</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User Details
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Registration Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Bookings
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((user) => {
                  const userBookings = bookings.filter(b => b.userId === user.id);
                  return (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {user.fullName}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <Mail className="w-3 h-3 mr-1" />
                            {user.email}
                          </div>
                          <div className="text-sm text-gray-500 flex items-center">
                            <Phone className="w-3 h-3 mr-1" />
                            {user.phone}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {user.createdAt?.toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {userBookings.length}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          user.isAdmin 
                            ? 'bg-purple-100 text-purple-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {user.isAdmin ? 'Admin' : 'Guest'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Booking Details Modal */}
        {selectedBooking && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Booking Details</h2>
                  <button 
                    onClick={() => setSelectedBooking(null)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Guest Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Guest Information</h3>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <div><strong>Name:</strong> {selectedBooking.fullName}</div>
                      <div><strong>Email:</strong> {selectedBooking.userEmail}</div>
                      <div><strong>Phone:</strong> {selectedBooking.phone}</div>
                    </div>
                  </div>

                  {/* Booking Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Booking Information</h3>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <div><strong>Room:</strong> {selectedBooking.roomName} ({selectedBooking.roomType})</div>
                      <div><strong>Check-in:</strong> {selectedBooking.checkInDate?.toLocaleDateString()}</div>
                      <div><strong>Check-out:</strong> {selectedBooking.checkOutDate?.toLocaleDateString()}</div>
                      <div><strong>Guests:</strong> {selectedBooking.numberOfGuests}</div>
                      <div><strong>Total Amount:</strong> KSh {selectedBooking.totalAmount?.toLocaleString()}</div>
                      {selectedBooking.specialRequests && (
                        <div><strong>Special Requests:</strong> {selectedBooking.specialRequests}</div>
                      )}
                    </div>
                  </div>

                  {/* Status Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Status</h3>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <div>
                        <strong>Booking Status:</strong> 
                        <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          selectedBooking.bookingStatus === 'confirmed' 
                            ? 'bg-green-100 text-green-800'
                            : selectedBooking.bookingStatus === 'cancelled'
                            ? 'bg-red-100 text-red-800'
                            : selectedBooking.bookingStatus === 'completed'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {selectedBooking.bookingStatus}
                        </span>
                      </div>
                      <div>
                        <strong>Payment Status:</strong> 
                        <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          selectedBooking.paymentStatus === 'paid' 
                            ? 'bg-green-100 text-green-800'
                            : selectedBooking.paymentStatus === 'failed'
                            ? 'bg-red-100 text-red-800'
                            : selectedBooking.paymentStatus === 'refunded'
                            ? 'bg-gray-100 text-gray-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {selectedBooking.paymentStatus}
                        </span>
                      </div>
                      <div><strong>Created:</strong> {selectedBooking.createdAt?.toLocaleString()}</div>
                      <div><strong>Last Updated:</strong> {selectedBooking.updatedAt?.toLocaleString()}</div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {selectedBooking.bookingStatus === 'pending' && (
                      <>
                        <button
                          onClick={() => {
                            handleStatusUpdate(selectedBooking.id, 'confirmed');
                            setSelectedBooking(null);
                          }}
                          className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition-colors font-semibold"
                        >
                          Confirm Booking
                        </button>
                        <button
                          onClick={() => {
                            handleStatusUpdate(selectedBooking.id, 'cancelled');
                            setSelectedBooking(null);
                          }}
                          className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition-colors font-semibold"
                        >
                          Cancel Booking
                        </button>
                      </>
                    )}
                    {selectedBooking.bookingStatus === 'confirmed' && selectedBooking.paymentStatus === 'pending' && (
                      <button
                        onClick={() => {
                          handlePaymentUpdate(selectedBooking.id, 'paid');
                          setSelectedBooking(null);
                        }}
                        className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors font-semibold"
                      >
                        Mark as Paid
                      </button>
                    )}
                    {selectedBooking.bookingStatus === 'confirmed' && selectedBooking.paymentStatus === 'paid' && (
                      <button
                        onClick={() => {
                          handleStatusUpdate(selectedBooking.id, 'completed');
                          setSelectedBooking(null);
                        }}
                        className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-lg transition-colors font-semibold"
                      >
                        Mark as Completed
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;