'use client'

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { DatePicker } from './ui/date-picker';
import { Plus, Edit, Trash2, CheckCircle, XCircle, Users, Clock, Ban } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

const API_URL = '/api/Bookings';

export default function FacilityBookingManagement({ user }) {
  const isAdmin = user.role === 'Admin';

  // --- State Management ---
  const [facilities, setFacilities] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      // Fetch Facilities
      const facResponse = await fetch(`${API_URL}/facilities`, {
        headers: { 'Authorization': `Bearer ${user.token}` }
      });
      const facData = await facResponse.json();
      if (facResponse.ok) setFacilities(facData);

      // Fetch Bookings
      const bookResponse = await fetch(`${API_URL}/all`, {
        headers: { 'Authorization': `Bearer ${user.token}` }
      });
      const bookData = await bookResponse.json();
      if (bookResponse.ok) setBookings(bookData);

      const blockResponse = await fetch(`${API_URL}/blocked-dates`, {
        headers: { 'Authorization': `Bearer ${user.token}` }
      });
      if (blockResponse.ok) setBlockedDates(await blockResponse.json());

    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Failed to load data. Check backend connection.");
    } finally {
      setLoading(false);
    }
  }, [user.token]);

  // Fetch data on mount
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const [blockedDates, setBlockedDates] = useState([]);

  const [isFacilityDialogOpen, setIsFacilityDialogOpen] = useState(false);
  const [isBlockDateDialogOpen, setIsBlockDateDialogOpen] = useState(false);
  const [editingFacility, setEditingFacility] = useState(null);
  const [selectedDate, setSelectedDate] = useState();

  const [newFacility, setNewFacility] = useState({
    name: '',
    type: 'sport',
    description: '',
    capacity: '',
  });

  const [blockDate, setBlockDate] = useState({
    facility: '',
    reason: '',
  });

  // --- API HANDLERS ---

  // Add/Edit Facility
  const handleSaveFacility = async (e) => {
    e.preventDefault();

    const payload = {
      name: newFacility.name,
      type: newFacility.type,
      description: newFacility.description,
      capacity: parseInt(newFacility.capacity),
    };

    try {
      let response;
      if (editingFacility) {
        response = await fetch(`${API_URL}/facilities/${editingFacility.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          },
          body: JSON.stringify(payload),
        });
      } else {
        response = await fetch(`${API_URL}/facilities`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          },
          body: JSON.stringify(payload),
        });
      }

      if (response.ok) {
        toast.success(editingFacility ? 'Facility updated!' : 'Facility added!');
        fetchData(); // Refresh list
        setIsFacilityDialogOpen(false);
        setEditingFacility(null);
        setNewFacility({ name: '', type: 'sport', description: '', capacity: '' });
      } else {
        toast.error('Failed to save facility');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleEditFacility = (facility) => {
    setEditingFacility(facility);
    setNewFacility({
      name: facility.name,
      type: facility.type,
      description: facility.description,
      capacity: facility.capacity.toString(),
    });
    setIsFacilityDialogOpen(true);
  };

  const handleDeleteFacility = async (id) => {
    if (window.confirm('Are you sure you want to delete this facility?')) {
      try {
        await fetch(`${API_URL}/facilities/${id}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${user.token}` }
        });
        toast.success('Facility deleted successfully!');
        fetchData();
      } catch (error) {
        toast.error('Failed to delete facility');
      }
    }
  };

  const handleToggleFacilityStatus = async (id) => {
    try {
      await fetch(`${API_URL}/facilities/toggle/${id}`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${user.token}` }
      });
      toast.success('Facility status updated!');
      fetchData();
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  // Booking Status Updates
  const updateBookingStatus = async (id, status) => {
    try {
      const response = await fetch(`${API_URL}/update-status/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        toast.success(`Booking ${status} successfully!`);
        fetchData();
      } else {
        toast.error('Failed to update booking');
      }
    } catch (error) {
      toast.error('Error updating booking');
    }
  };

  const handleApproveBooking = (id) => updateBookingStatus(id, 'approved');
  const handleRejectBooking = (id) => updateBookingStatus(id, 'rejected');
  const handleCancelBooking = (id) => updateBookingStatus(id, 'cancelled');

  // Block Date
  const handleBlockDate = async (e) => {
    e.preventDefault();

    if (!selectedDate) {
      toast.error('Please select a date');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/block-date`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({
          facilityName: blockDate.facility,
          date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '',
          reason: blockDate.reason
        }),
      });

      if (response.ok) {
        toast.success('Date blocked successfully!');
        setBlockDate({ facility: '', reason: '' });
        setSelectedDate(undefined);
        setIsBlockDateDialogOpen(false);
        fetchData(); // Refresh list
      } else {
        const error = await response.text();
        toast.error(error || 'Failed to block date');
      }
    } catch (error) {
      toast.error('Error blocking date');
    }
  };

  const handleUnblockDate = async (id) => {
    try {
      await fetch(`${API_URL}/unblock-date/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${user.token}` }
      });
      toast.success('Date unblocked!');
      fetchData(); // Refresh
    } catch (error) {
      toast.error('Failed to unblock date');
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Approved</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">Pending</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">Rejected</Badge>;
      case 'cancelled':
        return <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">Cancelled</Badge>;
      default:
        return null;
    }
  };

  const pendingBookings = bookings.filter((b) => b.status === 'pending');
  const approvedBookings = bookings.filter((b) => b.status === 'approved');

  // Helper for Gradient Cards
  const GradientCard = ({ children, className }) => (
    <div className={`relative h-full rounded-xl glass border-0! p-6 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
      {children}
    </div>
  );

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  if (!isAdmin) {
    // Resident view - simple booking list
    const residentBookings = bookings.filter((b) => b.unit === user.unit);
    const totalPages = Math.ceil(residentBookings.length / itemsPerPage);
    const paginatedList = residentBookings.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    return (
      <div className="space-y-6">
        <div>
          <h2>My Bookings</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">View your facility bookings</p>
        </div>
        <Card className="glass border-0!">
          <CardHeader>
            <CardTitle>My Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Facility</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Guests</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedList.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>{booking.facilityName}</TableCell>
                    <TableCell>{new Date(booking.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</TableCell>
                    <TableCell>
                      {booking.startTime} - {booking.endTime}
                    </TableCell>
                    <TableCell>{booking.guests}</TableCell>
                    <TableCell>{getStatusBadge(booking.status)}</TableCell>
                  </TableRow>
                ))}
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
      </div>
    );
  }

  // Admin view
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Facility & Booking Management</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">Manage facilities, bookings, and schedules</p>
        </div>
        <div className="flex gap-2">
          <Dialog open={isFacilityDialogOpen} onOpenChange={setIsFacilityDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Add Facility
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingFacility ? 'Edit Facility' : 'Add New Facility'}</DialogTitle>
                <DialogDescription>
                  {editingFacility ? 'Update facility information' : 'Create a new facility'}
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSaveFacility} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Facility Name</Label>
                  <Input
                    id="name"
                    value={newFacility.name}
                    onChange={(e) => setNewFacility({ ...newFacility, name: e.target.value })}
                    placeholder="e.g., Tennis Court"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="type">Facility Type</Label>
                  <Select
                    value={newFacility.type}
                    onValueChange={(value) => setNewFacility({ ...newFacility, type: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sport">Sports Facility</SelectItem>
                      <SelectItem value="event">Event Hall</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={newFacility.description}
                    onChange={(e) => setNewFacility({ ...newFacility, description: e.target.value })}
                    placeholder="Brief description of the facility"
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="capacity">Capacity</Label>
                  <Input
                    id="capacity"
                    type="number"
                    value={newFacility.capacity}
                    onChange={(e) => setNewFacility({ ...newFacility, capacity: e.target.value })}
                    placeholder="Max people"
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  {editingFacility ? 'Update Facility' : 'Add Facility'}
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          <Dialog open={isBlockDateDialogOpen} onOpenChange={setIsBlockDateDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <Ban className="mr-2 h-4 w-4" />
                Block Date
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Block Facility Date</DialogTitle>
                <DialogDescription>Block a date for maintenance or special events</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleBlockDate} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="facility">Facility</Label>
                  <Select value={blockDate.facility} onValueChange={(value) => setBlockDate({ ...blockDate, facility: value })} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select facility" />
                    </SelectTrigger>
                    <SelectContent>
                      {facilities.map((facility) => (
                        <SelectItem key={facility.id} value={facility.name}>
                          {facility.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="blockDate">Date to Block</Label>
                  <DatePicker
                    date={selectedDate}
                    setDate={setSelectedDate}
                    disabled={(date) => date < new Date().setHours(0, 0, 0, 0)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reason">Reason</Label>
                  <Textarea
                    id="reason"
                    value={blockDate.reason}
                    onChange={(e) => setBlockDate({ ...blockDate, reason: e.target.value })}
                    placeholder="e.g., Maintenance, Special Event"
                    rows={3}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Block Date
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <GradientCard><div className="flex items-center justify-between"><div><p className="text-sm text-gray-600 dark:text-gray-300">Total Facilities</p><p className="mt-1 text-2xl font-bold dark:text-gray-100">{facilities.length}</p></div><div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3"><Users className="h-6 w-6 text-blue-600 dark:text-blue-400" /></div></div></GradientCard>
        <GradientCard><div className="flex items-center justify-between"><div><p className="text-sm text-gray-600 dark:text-gray-300">Pending Requests</p><p className="mt-1 text-2xl font-bold dark:text-gray-100">{pendingBookings.length}</p></div><div className="rounded-lg bg-yellow-50 dark:bg-yellow-900/20 p-3"><Clock className="h-6 w-6 text-yellow-600 dark:text-yellow-400" /></div></div></GradientCard>
        <GradientCard><div className="flex items-center justify-between"><div><p className="text-sm text-gray-600 dark:text-gray-300">Approved Bookings</p><p className="mt-1 text-2xl font-bold dark:text-gray-100">{approvedBookings.length}</p></div><div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-3"><CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" /></div></div></GradientCard>
        <GradientCard><div className="flex items-center justify-between"><div><p className="text-sm text-gray-600 dark:text-gray-300">Blocked Dates</p><p className="mt-1 text-2xl font-bold dark:text-gray-100">{blockedDates.length}</p></div><div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-3"><Ban className="h-6 w-6 text-red-600 dark:text-red-400" /></div></div></GradientCard>
      </div>

      <Tabs defaultValue="facilities">
        <TabsList>
          <TabsTrigger value="facilities">Facilities ({facilities.length})</TabsTrigger>
          <TabsTrigger value="bookings">Bookings ({bookings.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({pendingBookings.length})</TabsTrigger>
          <TabsTrigger value="blocked">Blocked Dates ({blockedDates.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="facilities" className="mt-4">
          <Card className="glass border-0!">
            <CardHeader>
              <CardTitle>Facility Management</CardTitle>
            </CardHeader>
            <CardContent>
              {(() => {
                const totalPages = Math.ceil(facilities.length / itemsPerPage);
                const paginatedList = facilities.slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                );

                return (
                  <>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Type</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Capacity</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {paginatedList.map((facility) => (
                          <TableRow key={facility.id}>
                            <TableCell>{facility.name}</TableCell>
                            <TableCell><Badge variant="outline">{facility.type}</Badge></TableCell>
                            <TableCell className="max-w-xs truncate">{facility.description}</TableCell>
                            <TableCell>{facility.capacity} people</TableCell>
                            <TableCell>{facility.status === 'available' ? <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Available</Badge> : <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">Maintenance</Badge>}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline" onClick={() => handleEditFacility(facility)}><Edit className="h-4 w-4" /></Button>
                                <Button size="sm" variant="outline" onClick={() => handleToggleFacilityStatus(facility.id)}>{facility.status === 'available' ? 'Set Maintenance' : 'Set Available'}</Button>
                                <Button size="sm" variant="outline" onClick={() => handleDeleteFacility(facility.id)}><Trash2 className="h-4 w-4 text-red-600" /></Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
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
                  </>
                );
              })()}
            </CardContent>
          </Card>
        </TabsContent>

        {/* All Bookings Tab */}
        <TabsContent value="bookings" className="mt-4">
          <Card className="glass border-0!">
            <CardHeader>
              <CardTitle>All Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              {(() => {
                const totalPages = Math.ceil(bookings.length / itemsPerPage);
                const paginatedList = bookings.slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                );

                return (
                  <>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Facility</TableHead>
                          <TableHead>Resident</TableHead>
                          <TableHead>Unit</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Time</TableHead>
                          <TableHead>Guests</TableHead>
                          <TableHead>Purpose</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {paginatedList.map((booking) => (
                          <TableRow key={booking.id}>
                            <TableCell>{booking.facilityName}</TableCell>
                            <TableCell>{booking.residentName}</TableCell>
                            <TableCell>{booking.unit}</TableCell>
                            <TableCell>{format(new Date(booking.date), 'MMM dd, yyyy')}</TableCell>
                            <TableCell>
                              {booking.startTime} - {booking.endTime}
                            </TableCell>
                            <TableCell>{booking.guests}</TableCell>
                            <TableCell>{booking.purpose || '-'}</TableCell>
                            <TableCell>{getStatusBadge(booking.status)}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                {booking.status === 'pending' && (
                                  <>
                                    <Button
                                      size="sm"
                                      className="bg-green-600 hover:bg-green-700 h-8 w-8 p-0"
                                      onClick={() => handleApproveBooking(booking.id)}
                                      title="Approve"
                                    >
                                      <CheckCircle className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="h-8 w-8 p-0 border-red-200 text-red-600 hover:bg-red-50"
                                      onClick={() => handleRejectBooking(booking.id)}
                                      title="Reject"
                                    >
                                      <XCircle className="h-4 w-4" />
                                    </Button>
                                  </>
                                )}
                                {booking.status === 'approved' && (
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="text-red-600 hover:bg-red-50"
                                    onClick={() => handleCancelBooking(booking.id)}
                                  >
                                    Cancel
                                  </Button>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
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
                  </>
                );
              })()}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pending Bookings Tab */}
        <TabsContent value="pending" className="mt-4">
          <Card className="glass border-0!">
            <CardHeader>
              <CardTitle>Pending Approvals</CardTitle>
            </CardHeader>
            <CardContent>
              {(() => {
                const totalPages = Math.ceil(pendingBookings.length / itemsPerPage);
                const paginatedList = pendingBookings.slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                );

                return (
                  <>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Facility</TableHead>
                          <TableHead>Resident</TableHead>
                          <TableHead>Unit</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Time</TableHead>
                          <TableHead>Guests</TableHead>
                          <TableHead>Purpose</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {paginatedList.map((booking) => (
                          <TableRow key={booking.id}>
                            <TableCell>{booking.facilityName}</TableCell>
                            <TableCell>{booking.residentName}</TableCell>
                            <TableCell>{booking.unit}</TableCell>
                            <TableCell>{format(new Date(booking.date), 'MMM dd, yyyy')}</TableCell>
                            <TableCell>
                              {booking.startTime} - {booking.endTime}
                            </TableCell>
                            <TableCell>{booking.guests}</TableCell>
                            <TableCell>{booking.purpose || '-'}</TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => handleApproveBooking(booking.id)}>
                                  <CheckCircle className="mr-1 h-3 w-3" />
                                  Approve
                                </Button>
                                <Button size="sm" variant="outline" onClick={() => handleRejectBooking(booking.id)}>
                                  <XCircle className="mr-1 h-3 w-3" />
                                  Reject
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
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
                  </>
                );
              })()}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Blocked Dates Tab */}
        <TabsContent value="blocked" className="mt-4">
          <Card className="glass border-0!">
            <CardHeader>
              <CardTitle>Blocked Dates</CardTitle>
            </CardHeader>
            <CardContent>
              {(() => {
                const totalPages = Math.ceil(blockedDates.length / itemsPerPage);
                const paginatedList = blockedDates.slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                );

                return (
                  <>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Facility</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Reason</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {paginatedList.map((blocked) => (
                          <TableRow key={blocked.id}>
                            <TableCell>{blocked.facilityName}</TableCell>
                            <TableCell>{format(new Date(blocked.date), 'MMM dd, yyyy')}</TableCell>
                            <TableCell>{blocked.reason}</TableCell>
                            <TableCell>
                              <Button size="sm" variant="outline" onClick={() => handleUnblockDate(blocked.id)}>
                                Unblock
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
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
                  </>
                );
              })()}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}