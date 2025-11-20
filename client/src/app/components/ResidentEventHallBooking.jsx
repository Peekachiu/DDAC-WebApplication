'use client'

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Plus, CalendarIcon, Building } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const API_URL = 'http://localhost:5016/api/Bookings';

function ResidentEventHallBooking({ user }) {
  // --- State ---
  const [bookings, setBookings] = useState([]);
  const [halls, setHalls] = useState([]);
  const [loading, setLoading] = useState(true);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  
  // Form State
  const [newBooking, setNewBooking] = useState({
    hall: '',
    event: '',
    startTime: '',
    endTime: '',
    guests: '10',
    description: '',
  });

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00',
    '18:00', '19:00', '20:00', '21:00', '22:00',
  ];

  // --- Fetch Data from Backend ---
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // 1. Get Facilities (Filter for 'event' type)
        const facResponse = await fetch(`${API_URL}/facilities`);
        if (facResponse.ok) {
          const data = await facResponse.json();
          setHalls(data.filter(f => f.type === 'event'));
        }

        // 2. Get All Bookings (Client-side filter for now)
        const bookResponse = await fetch(`${API_URL}/all`);
        if (bookResponse.ok) {
          const data = await bookResponse.json();
          // Filter: Only 'event' type AND belongs to current user
          const myBookings = data.filter(b => 
            b.residentName === user.name && b.facilityType === 'event'
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

  const handleBookHall = async (e) => {
    e.preventDefault();

    if (!selectedDate) {
      toast.error('Please select a date');
      return;
    }

    // Construct Payload matches CreateEventBookingRequest in Controller
    const payload = {
      hallName: newBooking.hall,
      eventType: newBooking.event,
      date: format(selectedDate, 'yyyy-MM-dd'),
      startTime: newBooking.startTime,
      endTime: newBooking.endTime,
      guests: parseInt(newBooking.guests),
      description: newBooking.description,
      userId: user.id 
    };

    try {
      const response = await fetch(`${API_URL}/event`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || "Booking failed");
      }

      toast.success('Hall booking submitted successfully!');
      setIsDialogOpen(false);
      
      // Reset Form
      setNewBooking({ hall: '', event: '', startTime: '', endTime: '', guests: '10', description: '' });
      setSelectedDate(undefined);
      
      // Refresh page to show new booking (or re-fetch)
      window.location.reload(); 

    } catch (error) {
      toast.error(`Error: ${error.message}`);
    }
  };

  const handleCancelBooking = async (id) => {
    try {
      // Calls the UpdateStatus endpoint with 'cancelled' (mapped to Rejected in backend logic for now)
      const response = await fetch(`${API_URL}/update-status/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'cancelled' }),
      });

      if (!response.ok) throw new Error('Cancellation failed');

      // Optimistic Update
      setBookings(bookings.map((b) => (b.id === id ? { ...b, status: 'rejected' } : b)));
      toast.success('Booking cancelled successfully!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  // --- Helpers ---
  const upcomingBookings = bookings.filter(
    (b) => b.status !== 'rejected' && new Date(b.date) >= new Date()
  );

  const pastBookings = bookings.filter(
    (b) => new Date(b.date) < new Date() || b.status === 'rejected'
  );

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800">Confirmed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending Approval</Badge>;
      case 'rejected': // Maps to 'Cancelled' for user view if they initiated it
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800">Cancelled/Rejected</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">{status}</Badge>;
    }
  };

  if (loading) return <div className="p-6 text-center">Loading booking data...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Event Hall Booking</h2>
          <p className="text-sm text-gray-600">Book event halls for your celebrations</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Book Event Hall
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Book Event Hall</DialogTitle>
              <DialogDescription>
                Select a hall, date, and time for your event
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleBookHall} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="hall">Event Hall</Label>
                <Select
                  value={newBooking.hall}
                  onValueChange={(value) => setNewBooking({ ...newBooking, hall: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select hall" />
                  </SelectTrigger>
                  <SelectContent>
                    {halls.map((hall) => (
                      <SelectItem key={hall.id} value={hall.name}>
                        {hall.name} (Capacity: {hall.capacity})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="event">Event Type</Label>
                <Input
                  id="event"
                  value={newBooking.event}
                  onChange={(e) => setNewBooking({ ...newBooking, event: e.target.value })}
                  placeholder="e.g., Birthday, Wedding, Meeting"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Event Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
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

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="startTime">Start Time</Label>
                  <Select
                    value={newBooking.startTime}
                    onValueChange={(value) => setNewBooking({ ...newBooking, startTime: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Start" />
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
                  <Label htmlFor="endTime">End Time</Label>
                  <Select
                    value={newBooking.endTime}
                    onValueChange={(value) => setNewBooking({ ...newBooking, endTime: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="End" />
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
              </div>

              <div className="space-y-2">
                <Label htmlFor="guests">Expected Guests</Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="200"
                  value={newBooking.guests}
                  onChange={(e) => setNewBooking({ ...newBooking, guests: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Event Description</Label>
                <Textarea
                  id="description"
                  value={newBooking.description}
                  onChange={(e) => setNewBooking({ ...newBooking, description: e.target.value })}
                  placeholder="Brief description of your event"
                  rows={3}
                />
              </div>

              <Button type="submit" className="w-full">
                Submit Booking Request
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Available Halls Display */}
      <Card>
        <CardHeader>
          <CardTitle>Available Event Halls</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            {halls.length === 0 ? (
              <p className="text-sm text-gray-500">No event halls configured yet.</p>
            ) : (
              halls.map((hall) => (
                <div key={hall.id} className="flex items-center gap-4 rounded-lg border p-4">
                  <div className="rounded-lg bg-purple-50 p-3">
                    <Building className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm">{hall.name}</p>
                    <p className="text-xs text-gray-500">Capacity: {hall.capacity} guests</p>
                    <p className="text-xs text-gray-500">Rate: ${hall.hourlyRate}/hr</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* My Bookings List */}
      <Card>
        <CardHeader>
          <CardTitle>My Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="upcoming">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upcoming">
                Upcoming ({upcomingBookings.length})
              </TabsTrigger>
              <TabsTrigger value="history">
                History ({pastBookings.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="mt-4">
              {upcomingBookings.length === 0 ? (
                <p className="text-center text-sm text-gray-500 py-8">No upcoming bookings</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Hall</TableHead>
                      <TableHead>Event</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Guests</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell>{booking.facilityName}</TableCell>
                        <TableCell>{booking.purpose || 'Event'}</TableCell>
                        <TableCell>{format(new Date(booking.date), 'MMM dd, yyyy')}</TableCell>
                        <TableCell>
                          {booking.startTime} - {booking.endTime}
                        </TableCell>
                        <TableCell>{booking.guests}</TableCell>
                        <TableCell>{getStatusBadge(booking.status)}</TableCell>
                        <TableCell>
                          {booking.status === 'pending' && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleCancelBooking(booking.id)}
                            >
                              Cancel
                            </Button>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </TabsContent>

            <TabsContent value="history" className="mt-4">
              {pastBookings.length === 0 ? (
                <p className="text-center text-sm text-gray-500 py-8">No booking history</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Hall</TableHead>
                      <TableHead>Event</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Guests</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pastBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell>{booking.facilityName}</TableCell>
                        <TableCell>{booking.purpose || 'Event'}</TableCell>
                        <TableCell>{format(new Date(booking.date), 'MMM dd, yyyy')}</TableCell>
                        <TableCell>
                          {booking.startTime} - {booking.endTime}
                        </TableCell>
                        <TableCell>{booking.guests}</TableCell>
                        <TableCell>{getStatusBadge(booking.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

export default ResidentEventHallBooking;