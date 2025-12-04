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
import { DatePicker } from './ui/date-picker';
import { Plus, Building, AlertTriangle, Clock, CheckCircle, XCircle, Ban } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

const API_URL = '/api/Bookings';

function ResidentEventHallBooking({ user }) {
  const [bookings, setBookings] = useState([]);
  const [halls, setHalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState();
  const [blockedDates, setBlockedDates] = useState([]);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

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
            b.userId === user.id && b.facilityType === 'event'
          );
          setBookings(myBookings);
        }

        const blockResponse = await fetch(`${API_URL}/blocked-dates`);
        if (blockResponse.ok) setBlockedDates(await blockResponse.json());

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

    if (parseInt(newBooking.guests) > 90) {
      toast.error('Maximum guest limit is 90.');
      return;
    }

    const selectedHall = halls.find(h => h.name === newBooking.hall);
    if (selectedHall?.status === 'maintenance') {
      toast.error('This hall is under maintenance.');
      return;
    }

    const payload = {
      hallName: newBooking.hall,
      eventType: newBooking.event,
      date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '',
      startTime: newBooking.startTime,
      endTime: newBooking.endTime,
      guests: parseInt(newBooking.guests),
      description: newBooking.description,
      userId: user.id
    };

    const isBlocked = blockedDates.some(b =>
      b.facilityName === newBooking.hall &&
      new Date(b.date).toDateString() === new Date(selectedDate).toDateString()
    );

    if (isBlocked) {
      toast.error('This date is unavailable due to maintenance/blocking.');
      return;
    }

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

  // Helper for grid icon
  const getFacilityIcon = (name) => {
    return <Building className="h-6 w-6 text-blue-600" />;
  };

  // --- Helpers ---
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingBookings = bookings.filter((b) => {
    const bDate = new Date(b.date);
    return bDate >= today && b.status !== 'cancelled' && b.status !== 'rejected';
  });

  const pastBookings = bookings.filter((b) => {
    const bDate = new Date(b.date);
    return bDate < today || b.status === 'cancelled' || b.status === 'rejected';
  });

  const totalBookings = bookings.length;
  const pendingCount = bookings.filter(b => b.status === 'pending').length;
  const approvedCount = bookings.filter(b => b.status === 'approved').length;
  const rejectedCount = bookings.filter(b => b.status === 'rejected' || b.status === 'cancelled').length;

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
                <DatePicker
                  date={selectedDate}
                  setDate={setSelectedDate}
                  disabled={(date) => date < new Date().setHours(0, 0, 0, 0)}
                />
              </div>
              <div className="space-y-2">
                <Label>Event Type</Label>
                <Input value={newBooking.event} onChange={(e) => setNewBooking({ ...newBooking, event: e.target.value })} required placeholder="Wedding, Meeting..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Start Time</Label>
                  <Select onValueChange={(val) => setNewBooking({ ...newBooking, startTime: val })} required>
                    <SelectTrigger><SelectValue placeholder="Start" /></SelectTrigger>
                    <SelectContent>
                      {timeSlots.map(t => {
                        const now = new Date();
                        const localToday = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

                        const isToday = selectedDate && format(selectedDate, 'yyyy-MM-dd') === localToday;
                        const slotHour = parseInt(t.split(':')[0], 10);

                        // Disable if it's today and the time has passed
                        const isPastTime = isToday && slotHour <= now.getHours();

                        return (
                          <SelectItem key={t} value={t} disabled={isPastTime}>
                            {t}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>End Time</Label>
                  <Select onValueChange={(val) => setNewBooking({ ...newBooking, endTime: val })} required>
                    <SelectTrigger><SelectValue placeholder="End" /></SelectTrigger>
                    <SelectContent>
                      {timeSlots.map(t => {
                        const now = new Date();
                        const localToday = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

                        const isToday = selectedDate && format(selectedDate, 'yyyy-MM-dd') === localToday;
                        const slotHour = parseInt(t.split(':')[0], 10);

                        // Disable if past time OR if it's earlier than the selected Start Time
                        let isInvalid = false;

                        // 1. Check past time
                        if (isToday && slotHour <= now.getHours()) isInvalid = true;

                        // 2. Check logic: End time must be after Start time
                        if (newBooking.startTime) {
                          const startHour = parseInt(newBooking.startTime.split(':')[0], 10);
                          if (slotHour <= startHour) isInvalid = true;
                        }

                        return (
                          <SelectItem key={t} value={t} disabled={isInvalid}>
                            {t}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Guests</Label>
                <Input type="number" min="1" max="90" value={newBooking.guests} onChange={(e) => setNewBooking({ ...newBooking, guests: e.target.value })} required />
              </div>
              <Button type="submit" className="w-full">Submit Request</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>


      {/* Facilities Grid (Added as requested) */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {halls.map((facility) => (
          <div key={facility.id} className={`flex items-center gap-4 rounded-lg p-4 transition-all duration-300 glass !border-0 ${facility.status === 'maintenance' ? 'opacity-75' : 'hover:shadow-lg hover:-translate-y-1 cursor-pointer'}`}>
            <div className="rounded-full bg-gray-100 p-2">
              {facility.status === 'maintenance' ? <AlertTriangle className="h-6 w-6 text-yellow-600" /> : getFacilityIcon(facility.name)}
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

      <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="history">Event History</TabsTrigger>
        </TabsList>

        {['upcoming', 'history'].map((tabValue) => {
          const currentList = tabValue === 'upcoming' ? upcomingBookings : pastBookings;
          const totalPages = Math.ceil(currentList.length / itemsPerPage);
          const paginatedList = currentList.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
          );

          return (
            <TabsContent key={tabValue} value={tabValue}>
              <AnimatePresence mode="wait">
                {activeTab === tabValue && (
                  <motion.div
                    key={tabValue}
                    initial={{ x: tabValue === 'upcoming' ? -20 : 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: tabValue === 'upcoming' ? 20 : -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="glass !border-0">
                      <CardHeader><CardTitle>{tabValue === 'upcoming' ? 'Upcoming' : 'History'}</CardTitle></CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Hall</TableHead>
                              <TableHead>Event</TableHead>
                              <TableHead>Date</TableHead>
                              {tabValue === 'upcoming' && <TableHead>Time</TableHead>}
                              {tabValue === 'upcoming' && <TableHead>Guests</TableHead>}
                              <TableHead>Status</TableHead>
                              {tabValue === 'upcoming' && <TableHead>Action</TableHead>}
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {paginatedList.length === 0 ? (
                              <TableRow><TableCell colSpan={tabValue === 'upcoming' ? 7 : 4} className="text-center">No {tabValue === 'upcoming' ? 'upcoming events' : 'history'}</TableCell></TableRow>
                            ) : (
                              paginatedList.map((b) => (
                                <TableRow key={b.id} className={tabValue === 'history' ? "opacity-70" : ""}>
                                  <TableCell>{b.facilityName}</TableCell>
                                  <TableCell>{b.purpose}</TableCell>
                                  <TableCell>{format(new Date(b.date), 'MMM dd, yyyy')}</TableCell>
                                  {tabValue === 'upcoming' && <TableCell>{b.startTime} - {b.endTime}</TableCell>}
                                  {tabValue === 'upcoming' && <TableCell>{b.guests}</TableCell>}
                                  <TableCell>{getStatusBadge(b.status)}</TableCell>
                                  {tabValue === 'upcoming' && (
                                    <TableCell>
                                      {b.status === 'pending' && (
                                        <Button size="sm" variant="outline" onClick={() => handleCancelBooking(b.id)}>Cancel</Button>
                                      )}
                                    </TableCell>
                                  )}
                                </TableRow>
                              ))
                            )}
                          </TableBody>
                        </Table>

                        {totalPages > 1 && (
                          <div className="mt-4">
                            <Pagination>
                              <PaginationContent>
                                <PaginationItem>
                                  <PaginationPrevious
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                  />
                                </PaginationItem>

                                {[...Array(totalPages)].map((_, i) => (
                                  <PaginationItem key={i + 1}>
                                    <PaginationLink
                                      isActive={currentPage === i + 1}
                                      onClick={() => setCurrentPage(i + 1)}
                                      className="cursor-pointer"
                                    >
                                      {i + 1}
                                    </PaginationLink>
                                  </PaginationItem>
                                ))}

                                <PaginationItem>
                                  <PaginationNext
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                                  />
                                </PaginationItem>
                              </PaginationContent>
                            </Pagination>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}

export default ResidentEventHallBooking;