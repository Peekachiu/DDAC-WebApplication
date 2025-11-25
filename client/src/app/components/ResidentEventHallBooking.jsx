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
import { Plus, CalendarIcon, Building, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const API_URL = 'http://localhost:5016/api/Bookings';

function ResidentEventHallBooking({ user }) {
  const [bookings, setBookings] = useState([]);
  const [halls, setHalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  
  const [newBooking, setNewBooking] = useState({
    hall: '', event: '', startTime: '', endTime: '', guests: '10', description: '',
  });

  const timeSlots = ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const facResponse = await fetch(`${API_URL}/facilities`);
        if (facResponse.ok) {
          const data = await facResponse.json();
          setHalls(data.filter(f => f.type === 'event'));
        }
        const bookResponse = await fetch(`${API_URL}/all`);
        if (bookResponse.ok) {
          const data = await bookResponse.json();
          const myBookings = data.filter(b => 
            b.residentName === user.name && b.facilityType === 'event'
          );
          setBookings(myBookings);
        }
      } catch (error) {
        toast.error("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };
    if (user) fetchData();
  }, [user]);

  const handleBookHall = async (e) => {
    e.preventDefault();
    if (!selectedDate) { toast.error('Please select a date'); return; }

    const selectedHall = halls.find(h => h.name === newBooking.hall);
    if (selectedHall?.status === 'maintenance') {
      toast.error('This hall is under maintenance.');
      return;
    }

    const payload = {
      hallName: newBooking.hall,
      eventType: newBooking.event, // [FIXED] Backend will now map this to 'Purpose' column
      date: selectedDate,
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

      toast.success('Booking submitted!');
      setIsDialogOpen(false);
      setNewBooking({ hall: '', event: '', startTime: '', endTime: '', guests: '10', description: '' });
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
      setBookings(bookings.map((b) => (b.id === id ? { ...b, status: 'rejected' } : b)));
      toast.success('Booking cancelled!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'approved': return <Badge className="bg-green-100 text-green-800">Confirmed</Badge>;
      case 'pending': return <Badge className="bg-yellow-100 text-yellow-800">Pending Approval</Badge>;
      case 'rejected': 
      case 'cancelled': return <Badge className="bg-red-100 text-red-800">Cancelled/Rejected</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  // --- Helpers ---
  const upcomingBookings = bookings.filter(
    (b) => b.status !== 'rejected' && new Date(b.date) >= new Date()
  );

  const pastBookings = bookings.filter(
    (b) => new Date(b.date) < new Date() || b.status === 'rejected'
  );

  if (loading) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Event Hall Booking</h2>
          <p className="text-sm text-gray-600">Book event halls</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button><Plus className="mr-2 h-4 w-4" /> Book Hall</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader><DialogTitle>Book Event Hall</DialogTitle></DialogHeader>
            <form onSubmit={handleBookHall} className="space-y-4">
              <div className="space-y-2">
                <Label>Event Hall</Label>
                <Select onValueChange={(val) => setNewBooking({ ...newBooking, hall: val })} required>
                  <SelectTrigger><SelectValue placeholder="Select hall" /></SelectTrigger>
                  <SelectContent>
                    {halls.map((h) => (
                      <SelectItem key={h.id} value={h.name} disabled={h.status === 'maintenance'}>
                        {h.name} {h.status === 'maintenance' ? '(Maintenance)' : ''}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="eventDate">Event Date</Label>
                <Input
                  id="eventDate"
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  required
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="space-y-2">
                <Label>Event Type</Label>
                <Input value={newBooking.event} onChange={(e) => setNewBooking({...newBooking, event: e.target.value})} required placeholder="Wedding, Meeting..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Start Time</Label>
                  <Select onValueChange={(val) => setNewBooking({ ...newBooking, startTime: val })} required>
                    <SelectTrigger><SelectValue placeholder="Start" /></SelectTrigger>
                    <SelectContent>{timeSlots.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>End Time</Label>
                  <Select onValueChange={(val) => setNewBooking({ ...newBooking, endTime: val })} required>
                    <SelectTrigger><SelectValue placeholder="End" /></SelectTrigger>
                    <SelectContent>{timeSlots.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}</SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Guests</Label>
                <Input type="number" value={newBooking.guests} onChange={(e) => setNewBooking({...newBooking, guests: e.target.value})} required />
              </div>
              <Button type="submit" className="w-full">Submit Request</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardHeader><CardTitle>My Bookings</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hall</TableHead>
                <TableHead>Event</TableHead> {/* [ADDED] Event Type (Purpose) */}
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Guests</TableHead> {/* [ADDED] Guests */}
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {upcomingBookings.map((b) => (
                <TableRow key={b.id}>
                  <TableCell>{b.facilityName}</TableCell>
                  <TableCell>{b.purpose}</TableCell> {/* [ADDED] Show Event Type */}
                  <TableCell>{format(new Date(b.date), 'MMM dd, yyyy')}</TableCell>
                  <TableCell>{b.startTime} - {b.endTime}</TableCell>
                  <TableCell>{b.guests}</TableCell> {/* [ADDED] Show Guests */}
                  <TableCell>{getStatusBadge(b.status)}</TableCell>
                  <TableCell>
                    {b.status === 'pending' && <Button size="sm" variant="outline" onClick={() => handleCancelBooking(b.id)}>Cancel</Button>}
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

export default ResidentEventHallBooking;