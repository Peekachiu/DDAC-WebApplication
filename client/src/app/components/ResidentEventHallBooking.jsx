'use client'

import { useState } from 'react';
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

function ResidentEventHallBooking({ user }) {
  const [bookings, setBookings] = useState([
    {
      id: '1',
      hall: 'Main Hall',
      event: 'Birthday Party',
      date: '2025-11-05',
      startTime: '6:00 PM',
      endTime: '10:00 PM',
      guests: 80,
      status: 'confirmed',
      description: 'Birthday celebration for family',
    },
    {
      id: '2',
      hall: 'Conference Room',
      event: 'Business Meeting',
      date: '2025-10-28',
      startTime: '2:00 PM',
      endTime: '5:00 PM',
      guests: 25,
      status: 'pending',
      description: 'Annual business review meeting',
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [newBooking, setNewBooking] = useState({
    hall: '',
    event: '',
    startTime: '',
    endTime: '',
    guests: '10',
    description: '',
  });

  const halls = [
    { id: 'main', name: 'Main Hall', capacity: 200 },
    { id: 'banquet', name: 'Banquet Hall', capacity: 150 },
    { id: 'conference', name: 'Conference Room', capacity: 50 },
    { id: 'party', name: 'Party Room', capacity: 30 },
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM',
  ];

  const handleBookHall = (e) => {
    e.preventDefault();

    if (!selectedDate) {
      toast.error('Please select a date');
      return;
    }

    const booking = {
      id: Date.now().toString(),
      hall: halls.find((h) => h.id === newBooking.hall)?.name || '',
      event: newBooking.event,
      date: format(selectedDate, 'yyyy-MM-dd'),
      startTime: newBooking.startTime,
      endTime: newBooking.endTime,
      guests: parseInt(newBooking.guests),
      status: 'pending',
      description: newBooking.description,
    };

    setBookings([booking, ...bookings]);
    setNewBooking({ hall: '', event: '', startTime: '', endTime: '', guests: '10', description: '' });
    setSelectedDate(undefined);
    setIsDialogOpen(false);
    toast.success('Hall booking submitted successfully!');
  };

  const handleCancelBooking = (id) => {
    setBookings(bookings.map((b) => (b.id === id ? { ...b, status: 'cancelled' } : b)));
    toast.success('Booking cancelled successfully!');
  };

  const upcomingBookings = bookings.filter(
    (b) => b.status !== 'cancelled' && new Date(b.date) >= new Date()
  );

  const pastBookings = bookings.filter(
    (b) => new Date(b.date) < new Date() || b.status === 'cancelled'
  );

  const getStatusBadge = (status) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-100 text-green-800">Confirmed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending Approval</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800">Cancelled</Badge>;
      default:
        return null;
    }
  };

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
                      <SelectItem key={hall.id} value={hall.id}>
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

      {/* Available Halls */}
      <Card>
        <CardHeader>
          <CardTitle>Available Event Halls</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2">
            {halls.map((hall) => (
              <div key={hall.id} className="flex items-center gap-4 rounded-lg border p-4">
                <div className="rounded-lg bg-purple-50 p-3">
                  <Building className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm">{hall.name}</p>
                  <p className="text-xs text-gray-500">Capacity: {hall.capacity} guests</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* My Bookings */}
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
                        <TableCell>{booking.hall}</TableCell>
                        <TableCell>{booking.event}</TableCell>
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
                        <TableCell>{booking.hall}</TableCell>
                        <TableCell>{booking.event}</TableCell>
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
