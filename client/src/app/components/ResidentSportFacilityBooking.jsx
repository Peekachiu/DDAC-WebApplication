'use client'

import { useState } from 'react';
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
import { Plus, CalendarIcon, Dumbbell, Users } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';

function ResidentSportFacilityBooking({ user }) {
  // Define available facilities
  const facilities = [
    { id: 'tennis', name: 'Tennis Court', icon: <Dumbbell /> },
    { id: 'swimming', name: 'Swimming Pool', icon: <Users /> },
    { id: 'fitness', name: 'Fitness Center', icon: <Dumbbell /> },
  ];

  const [bookings, setBookings] = useState([
    {
      id: '1',
      facility: 'Tennis Court',
      date: '2025-10-25',
      time: '2:00 PM',
      duration: '2 hours',
      status: 'confirmed',
      guests: 2,
    },
    {
      id: '2',
      facility: 'Swimming Pool',
      date: '2025-10-28',
      time: '10:00 AM',
      duration: '1 hour',
      status: 'confirmed',
      guests: 3,
    },
    {
      id: '3',
      facility: 'Fitness Center',
      date: '2025-10-23',
      time: '6:00 AM',
      duration: '1 hour',
      status: 'confirmed',
      guests: 1,
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [newBooking, setNewBooking] = useState({
    facility: '',
    time: '',
    duration: '',
    guests: '1',
  });

  // Define available time slots
  const timeSlots = [
    '6:00 AM',
    '8:00 AM',
    '10:00 AM',
    '12:00 PM',
    '2:00 PM',
    '4:00 PM',
    '6:00 PM',
    '8:00 PM',
  ];

  // Define available durations
  const durations = [
    '30 minutes',
    '1 hour',
    '2 hours',
    '3 hours',
  ];

  const handleBookFacility = (e) => {
    e.preventDefault();

    if (!selectedDate) {
      toast.error('Please select a date');
      return;
    }

    const facilityName = facilities.find((f) => f.id === newBooking.facility)?.name || '';

    const booking = {
      id: Date.now().toString(),
      facility: facilityName,
      date: format(selectedDate, 'yyyy-MM-dd'),
      time: newBooking.time,
      duration: newBooking.duration,
      status: 'confirmed',
      guests: parseInt(newBooking.guests),
    };

    setBookings([booking, ...bookings]);
    setNewBooking({ facility: '', time: '', duration: '', guests: '1' });
    setSelectedDate(undefined);
    setIsDialogOpen(false);
    toast.success('Facility booked successfully!');
  };

  const handleCancelBooking = (id) => {
    setBookings(
      bookings.map((b) =>
        b.id === id ? { ...b, status: 'cancelled' } : b
      )
    );
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
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
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
                    {facilities.map((facility) => (
                      <SelectItem key={facility.id} value={facility.id}>
                        {facility.icon} {facility.name}
                      </SelectItem>
                    ))}
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
                <Label htmlFor="duration">Duration</Label>
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
                        {duration}
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

      {/* Available Facilities */}
      <Card>
        <CardHeader>
          <CardTitle>Available Facilities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility) => (
              <div
                key={facility.id}
                className="flex items-center gap-4 rounded-lg border p-4 hover:bg-gray-50"
              >
                <div className="text-3xl">{facility.icon}</div>
                <div>
                  <p className="text-sm">{facility.name}</p>
                  <p className="text-xs text-gray-500">Available for booking</p>
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
          <div className="space-y-4">
            <div>
              <h3 className="mb-3 text-sm">Upcoming Bookings</h3>
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
                      <TableHead>Guests</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell>{booking.facility}</TableCell>
                        <TableCell>{format(new Date(booking.date), 'MMM dd, yyyy')}</TableCell>
                        <TableCell>{booking.time}</TableCell>
                        <TableCell>{booking.duration}</TableCell>
                        <TableCell>{booking.guests}</TableCell>
                        <TableCell>{getStatusBadge(booking.status)}</TableCell>
                        <TableCell>
                          <Button
                            size="sm"
                            variant="outline"
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

            {pastBookings.length > 0 && (
              <div>
                <h3 className="mb-3 text-sm">Past Bookings</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Facility</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pastBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell>{booking.facility}</TableCell>
                        <TableCell>{format(new Date(booking.date), 'MMM dd, yyyy')}</TableCell>
                        <TableCell>{booking.time}</TableCell>
                        <TableCell>{booking.duration}</TableCell>
                        <TableCell>{getStatusBadge(booking.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default ResidentSportFacilityBooking;
