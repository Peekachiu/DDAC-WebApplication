'use client'

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Plus, CalendarIcon, Dumbbell, Users, Activity } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';

const API_URL = 'http://localhost:5016/api/Bookings';

export default function ResidentSportFacilityBooking({ user }) {
  // --- State ---
  const [facilities, setFacilities] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  
  // Form State
  const [newBooking, setNewBooking] = useState({
    facility: '',
    time: '',
    duration: '',
    guests: '1',
  });

  // Constants
  const timeSlots = [
    '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', 
    '19:00', '20:00', '21:00'
  ];
  
  const durations = ['1', '2', '3'];

  // --- Fetch Data from Backend ---
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // 1. Get Facilities (Filter for 'sport' type)
        const facResponse = await fetch(`${API_URL}/facilities`);
        if (facResponse.ok) {
          const data = await facResponse.json();
          setFacilities(data.filter(f => f.type === 'sport'));
        }

        // 2. Get All Bookings (Client-side filter for current user & sport type)
        // Note: In a production app, you'd likely use a specific endpoint like /my-bookings/{id}
        const bookResponse = await fetch(`${API_URL}/all`);
        if (bookResponse.ok) {
          const data = await bookResponse.json();
          const myBookings = data.filter(b => 
            b.residentName === user.name && b.facilityType === 'sport'
          );
          setBookings(myBookings);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to load data. Is the server running?");
      } finally {
        setLoading(false);
      }
    };

    if (user) fetchData();
  }, [user]);

  // --- Handlers ---

  const handleBookFacility = async (e) => {
    e.preventDefault();

    if (!selectedDate) {
      toast.error('Please select a date');
      return;
    }

    // Construct Payload matches CreateSportBookingRequest in Controller
    const payload = {
      sportName: newBooking.facility,
      date: format(selectedDate, 'yyyy-MM-dd'),
      startTime: newBooking.time, // Expected format "HH:mm"
      duration: parseInt(newBooking.duration),
      userId: user.id 
    };

    try {
      const response = await fetch(`${API_URL}/sport`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || "Booking failed");
      }

      toast.success('Facility booked successfully!');
      setIsDialogOpen(false);
      
      // Reset Form
      setNewBooking({ facility: '', time: '', duration: '', guests: '1' });
      setSelectedDate(undefined);
      
      // Refresh page to show new booking
      window.location.reload(); 

    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleCancelBooking = async (id) => {
    try {
      // Calls the UpdateStatus endpoint with 'cancelled'
      const response = await fetch(`${API_URL}/update-status/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'cancelled' }),
      });

      if (!response.ok) throw new Error('Cancellation failed');

      // Optimistic Update
      setBookings(bookings.map((b) => (b.id === id ? { ...b, status: 'cancelled' } : b)));
      toast.success('Booking cancelled successfully!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  // --- Helpers & UI ---

  const getFacilityIcon = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('pool') || lowerName.includes('swim')) return <Users className="h-6 w-6 text-blue-600" />;
    if (lowerName.includes('gym') || lowerName.includes('fitness')) return <Activity className="h-6 w-6 text-red-600" />;
    return <Dumbbell className="h-6 w-6 text-green-600" />;
  };

  const getStatusBadge = (status) => {
    // Normalize status string from backend (could be lowercase or title case)
    const s = status?.toLowerCase() || 'pending';
    
    switch (s) {
      case 'approved':
      case 'confirmed': // Handle both terms if backend varies
        return <Badge className="bg-green-100 text-green-800">Confirmed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'rejected':
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800">Cancelled</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };

  // Filter bookings for display
  const upcomingBookings = bookings.filter(
    (b) => b.status !== 'cancelled' && b.status !== 'rejected' && new Date(b.date) >= new Date()
  );

  // Only loading state for initial fetch
  if (loading) return <div className="p-6 text-center">Loading facility data...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Sports Facility Booking</h2>
          <p className="text-sm text-gray-600">Reserve sports facilities and amenities</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Book Facility
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Book Sports Facility</DialogTitle>
              <DialogDescription>
                Select a facility, date, and time for your booking
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleBookFacility} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="facility">Facility</Label>
                <Select
                  value={newBooking.facility}
                  onValueChange={(value) =>
                    setNewBooking({ ...newBooking, facility: value })
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select facility" />
                  </SelectTrigger>
                  <SelectContent>
                    {facilities.length === 0 ? (
                      <SelectItem value="none" disabled>No facilities available</SelectItem>
                    ) : (
                      facilities.map((facility) => (
                        <SelectItem key={facility.id} value={facility.name}>
                           {facility.name}
                        </SelectItem>
                      ))
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, 'PPP') : 'Pick a date'}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Select
                  value={newBooking.time}
                  onValueChange={(value) =>
                    setNewBooking({ ...newBooking, time: value })
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="duration">Duration (Hours)</Label>
                <Select
                  value={newBooking.duration}
                  onValueChange={(value) =>
                    setNewBooking({ ...newBooking, duration: value })
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    {durations.map((duration) => (
                      <SelectItem key={duration} value={duration}>
                        {duration} Hour(s)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests</Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="10"
                  value={newBooking.guests}
                  onChange={(e) =>
                    setNewBooking({ ...newBooking, guests: e.target.value })
                  }
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Confirm Booking
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Available Facilities Display */}
      <Card>
        <CardHeader>
          <CardTitle>Available Facilities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.length === 0 ? (
              <p className="text-sm text-gray-500 col-span-3 text-center py-4">No sports facilities found.</p>
            ) : (
              facilities.map((facility) => (
                <div
                  key={facility.id}
                  className="flex items-center gap-4 rounded-lg border p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="rounded-full bg-gray-100 p-2">
                    {getFacilityIcon(facility.name)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{facility.name}</p>
                    <p className="text-xs text-gray-500">Capacity: {facility.capacity}</p>
                    <p className="text-xs text-green-600 font-medium">Available</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* My Bookings Table */}
      <Card>
        <CardHeader>
          <CardTitle>My Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingBookings.length === 0 ? (
              <p className="text-center text-sm text-gray-500 py-8">No upcoming bookings</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Facility</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {upcomingBookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell className="font-medium">{booking.facilityName}</TableCell>
                      <TableCell>{format(new Date(booking.date), 'MMM dd, yyyy')}</TableCell>
                      <TableCell>{booking.startTime}</TableCell>
                      <TableCell>{booking.duration ? `${booking.duration}h` : '-'}</TableCell>
                      <TableCell>{getStatusBadge(booking.status)}</TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-600 hover:bg-red-50"
                          onClick={() => handleCancelBooking(booking.id)}
                        >
                          Cancel
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}