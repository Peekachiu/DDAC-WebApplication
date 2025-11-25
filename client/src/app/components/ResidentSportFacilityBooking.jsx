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
import { Plus, CalendarIcon, Dumbbell, Users, Activity, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';

const API_URL = 'http://localhost:5016/api/Bookings';

export default function ResidentSportFacilityBooking({ user }) {
  const [facilities, setFacilities] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [blockedDates, setBlockedDates] = useState([]);
  
  const [newBooking, setNewBooking] = useState({
    facility: '',
    time: '',
    duration: '',
    guests: '1',
  });

  const timeSlots = [
    '07:00', '08:00', '09:00', '10:00', '11:00', '12:00',
    '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', 
    '19:00', '20:00', '21:00'
  ];
  const durations = ['1', '2', '3'];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const facResponse = await fetch(`${API_URL}/facilities`);
        if (facResponse.ok) {
          const data = await facResponse.json();
          setFacilities(data.filter(f => f.type === 'sport'));
        }

        const bookResponse = await fetch(`${API_URL}/all`);
        if (bookResponse.ok) {
          const data = await bookResponse.json();
          const myBookings = data.filter(b => 
            b.residentName === user.name && b.facilityType === 'sport'
          );
          setBookings(myBookings);
        }

        const blockResponse = await fetch(`${API_URL}/blocked-dates`);
        if (blockResponse.ok) setBlockedDates(await blockResponse.json());


      } catch (error) {
        console.error("Error fetching data:", error);
        toast.error("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };
    if (user) fetchData();
  }, [user]);
  

  const handleBookFacility = async (e) => {
    e.preventDefault();
    if (!selectedDate) {
      toast.error('Please select a date');
      return;
    }

    const selectedFac = facilities.find(f => f.name === newBooking.facility);
    if (selectedFac?.status === 'maintenance') {
      toast.error('This facility is under maintenance.');
      return;
    }

    const payload = {
      sportName: newBooking.facility,
      date: selectedDate,
      startTime: newBooking.time,
      duration: parseInt(newBooking.duration),
      userId: user.id,
      guests: parseInt(newBooking.guests) // [FIXED] Now sending guests
    };

    const isBlocked = blockedDates.some(b => 
      b.facilityName === newBooking.facility && 
      new Date(b.date).toDateString() === new Date(selectedDate).toDateString()
    );

    if (isBlocked) {
      toast.error('This date is unavailable due to maintenance/blocking.');
      return;
    }

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
      setNewBooking({ facility: '', time: '', duration: '', guests: '1' });
      setSelectedDate(undefined);
      window.location.reload(); 
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleCancelBooking = async (id) => {
    try {
      const response = await fetch(`${API_URL}/update-status/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'cancelled' }),
      });
      if (!response.ok) throw new Error('Cancellation failed');
      setBookings(bookings.map((b) => (b.id === id ? { ...b, status: 'cancelled' } : b)));
      toast.success('Booking cancelled!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getFacilityIcon = (name) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes('pool')) return <Users className="h-6 w-6 text-blue-600" />;
    if (lowerName.includes('gym')) return <Activity className="h-6 w-6 text-red-600" />;
    return <Dumbbell className="h-6 w-6 text-green-600" />;
  };

  const getStatusBadge = (status) => {
    switch (status?.toLowerCase()) {
      case 'approved': return <Badge className="bg-green-100 text-green-800">Confirmed</Badge>;
      case 'pending': return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'rejected': 
      case 'cancelled': return <Badge className="bg-red-100 text-red-800">Cancelled</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  const upcomingBookings = bookings.filter(
    (b) => b.status !== 'cancelled' && b.status !== 'rejected' && new Date(b.date) >= new Date()
  );

  if (loading) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Sports Facility Booking</h2>
          <p className="text-sm text-gray-600">Reserve sports facilities</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button><Plus className="mr-2 h-4 w-4" /> Book Facility</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Book Sports Facility</DialogTitle>
              <DialogDescription>Select a facility and time.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleBookFacility} className="space-y-4">
              <div className="space-y-2">
                <Label>Facility</Label>
                <Select 
                  value={newBooking.facility} 
                  onValueChange={(val) => setNewBooking({ ...newBooking, facility: val })}
                  required
                >
                  <SelectTrigger><SelectValue placeholder="Select facility" /></SelectTrigger>
                  <SelectContent>
                    {facilities.map((f) => (
                      <SelectItem key={f.id} value={f.name} disabled={f.status === 'maintenance'}>
                        {f.name} {f.status === 'maintenance' ? '(Maintenance)' : ''}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="space-y-2">
                <Label>Time</Label>
                <Select onValueChange={(val) => setNewBooking({ ...newBooking, time: val })} required>
                  <SelectTrigger><SelectValue placeholder="Select time" /></SelectTrigger>
                  <SelectContent>{timeSlots.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Duration</Label>
                <Select onValueChange={(val) => setNewBooking({ ...newBooking, duration: val })} required>
                  <SelectTrigger><SelectValue placeholder="Hours" /></SelectTrigger>
                  <SelectContent>{durations.map(d => <SelectItem key={d} value={d}>{d} Hour(s)</SelectItem>)}</SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Guests</Label>
                <Input 
                  type="number" 
                  min="1" 
                  max="10"
                  value={newBooking.guests}
                  onChange={(e) => setNewBooking({...newBooking, guests: e.target.value})}
                  required
                />
              </div>
              <Button type="submit" className="w-full">Confirm Booking</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {facilities.map((facility) => (
          <div key={facility.id} className={`flex items-center gap-4 rounded-lg border p-4 ${facility.status === 'maintenance' ? 'bg-gray-50 opacity-75' : 'bg-white'}`}>
            <div className="rounded-full bg-gray-100 p-2">
              {facility.status === 'maintenance' ? <AlertTriangle className="h-6 w-6 text-yellow-600"/> : getFacilityIcon(facility.name)}
            </div>
            <div>
              <p className="text-sm font-medium">{facility.name}</p>
              <p className="text-xs text-gray-500">Capacity: {facility.capacity}</p>
              {facility.status === 'maintenance' ? (
                <Badge variant="destructive" className="mt-1 text-xs">Maintenance</Badge>
              ) : (
                <p className="text-xs text-green-600 font-medium mt-1">Available</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <Card>
        <CardHeader><CardTitle>My Bookings</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Facility</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Guests</TableHead> {/* [ADDED] Guest Column */}
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {upcomingBookings.map((b) => (
                <TableRow key={b.id}>
                  <TableCell>{b.facilityName}</TableCell>
                  <TableCell>{format(new Date(b.date), 'MMM dd, yyyy')}</TableCell>
                  <TableCell>{b.startTime}</TableCell>
                  <TableCell>{b.guests}</TableCell> {/* [ADDED] Show Guests */}
                  <TableCell>{getStatusBadge(b.status)}</TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline" onClick={() => handleCancelBooking(b.id)}>Cancel</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}