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
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Calendar } from './ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Plus, Edit, Trash2, CheckCircle, XCircle, Calendar as CalendarIcon, Users, Clock, Ban } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';

export default function FacilityBookingManagement({ user }) {
  const isAdmin = user.role === 'Admin';

  const [facilities, setFacilities] = useState([
    {
      id: '1',
      name: 'Tennis Court',
      type: 'sport',
      description: 'Professional tennis court with lighting',
      capacity: 4,
      hourlyRate: 20,
      status: 'available',
    },
    {
      id: '2',
      name: 'Swimming Pool',
      type: 'sport',
      description: 'Olympic-size swimming pool',
      capacity: 30,
      hourlyRate: 15,
      status: 'available',
    },
    {
      id: '3',
      name: 'Basketball Court',
      type: 'sport',
      description: 'Full-size basketball court',
      capacity: 10,
      hourlyRate: 25,
      status: 'available',
    },
    {
      id: '4',
      name: 'Main Event Hall',
      type: 'event',
      description: 'Large event hall for celebrations',
      capacity: 200,
      hourlyRate: 100,
      status: 'available',
    },
    {
      id: '5',
      name: 'Banquet Hall',
      type: 'event',
      description: 'Elegant banquet hall with catering facilities',
      capacity: 150,
      hourlyRate: 80,
      status: 'available',
    },
  ]);

  const [bookings, setBookings] = useState([
    {
      id: '1',
      facilityName: 'Tennis Court',
      facilityType: 'sport',
      residentName: 'John Smith',
      unit: 'Unit A-101',
      date: '2025-10-25',
      startTime: '2:00 PM',
      endTime: '4:00 PM',
      guests: 2,
      status: 'approved',
    },
    {
      id: '2',
      facilityName: 'Main Event Hall',
      facilityType: 'event',
      residentName: 'Sarah Johnson',
      unit: 'Unit B-205',
      date: '2025-11-20',
      startTime: '5:00 PM',
      endTime: '11:00 PM',
      guests: 120,
      status: 'pending',
      purpose: 'Wedding Reception',
      notes: 'Need catering setup',
    },
    {
      id: '3',
      facilityName: 'Swimming Pool',
      facilityType: 'sport',
      residentName: 'Mike Wilson',
      unit: 'Unit C-304',
      date: '2025-10-28',
      startTime: '10:00 AM',
      endTime: '12:00 PM',
      guests: 5,
      status: 'approved',
    },
    {
      id: '4',
      facilityName: 'Basketball Court',
      facilityType: 'sport',
      residentName: 'Emily Chen',
      unit: 'Unit D-401',
      date: '2025-10-26',
      startTime: '4:00 PM',
      endTime: '6:00 PM',
      guests: 8,
      status: 'pending',
    },
  ]);

  const [blockedDates, setBlockedDates] = useState([
    {
      id: '1',
      facilityName: 'Tennis Court',
      date: '2025-11-15',
      reason: 'Court resurfacing maintenance',
    },
  ]);

  const [isFacilityDialogOpen, setIsFacilityDialogOpen] = useState(false);
  const [isBlockDateDialogOpen, setIsBlockDateDialogOpen] = useState(false);
  const [editingFacility, setEditingFacility] = useState(null);
  const [selectedDate, setSelectedDate] = useState();

  const [newFacility, setNewFacility] = useState({
    name: '',
    type: 'sport',
    description: '',
    capacity: '',
    hourlyRate: '',
  });

  const [blockDate, setBlockDate] = useState({
    facility: '',
    reason: '',
  });

  // Add/Edit Facility
  const handleSaveFacility = (e) => {
    e.preventDefault();

    if (editingFacility) {
      setFacilities(
        facilities.map((f) =>
          f.id === editingFacility.id
            ? {
                ...f,
                name: newFacility.name,
                type: newFacility.type,
                description: newFacility.description,
                capacity: parseInt(newFacility.capacity),
                hourlyRate: parseFloat(newFacility.hourlyRate),
              }
            : f
        )
      );
      toast.success('Facility updated successfully!');
    } else {
      const facility = {
        id: Date.now().toString(),
        name: newFacility.name,
        type: newFacility.type,
        description: newFacility.description,
        capacity: parseInt(newFacility.capacity),
        hourlyRate: parseFloat(newFacility.hourlyRate),
        status: 'available',
      };
      setFacilities([...facilities, facility]);
      toast.success('Facility added successfully!');
    }

    setNewFacility({ name: '', type: 'sport', description: '', capacity: '', hourlyRate: '' });
    setEditingFacility(null);
    setIsFacilityDialogOpen(false);
  };

  const handleEditFacility = (facility) => {
    setEditingFacility(facility);
    setNewFacility({
      name: facility.name,
      type: facility.type,
      description: facility.description,
      capacity: facility.capacity.toString(),
      hourlyRate: facility.hourlyRate.toString(),
    });
    setIsFacilityDialogOpen(true);
  };

  const handleDeleteFacility = (id) => {
    if (window.confirm('Are you sure you want to delete this facility?')) {
      setFacilities(facilities.filter((f) => f.id !== id));
      toast.success('Facility deleted successfully!');
    }
  };

  const handleToggleFacilityStatus = (id) => {
    setFacilities(
      facilities.map((f) =>
        f.id === id
          ? { ...f, status: f.status === 'available' ? ('maintenance') : ('available') }
          : f
      )
    );
    toast.success('Facility status updated!');
  };

  // Booking Actions
  const handleApproveBooking = (id) => {
    setBookings(bookings.map((b) => (b.id === id ? { ...b, status: 'approved' } : b)));
    toast.success('Booking approved successfully!');
  };

  const handleRejectBooking = (id) => {
    setBookings(bookings.map((b) => (b.id === id ? { ...b, status: 'rejected' } : b)));
    toast.success('Booking rejected!');
  };

  const handleCancelBooking = (id) => {
    setBookings(bookings.map((b) => (b.id === id ? { ...b, status: 'cancelled' } : b)));
    toast.success('Booking cancelled!');
  };

  // Block Date
  const handleBlockDate = (e) => {
    e.preventDefault();

    if (!selectedDate) {
      toast.error('Please select a date');
      return;
    }

    const blocked = {
      id: Date.now().toString(),
      facilityName: blockDate.facility,
      date: format(selectedDate, 'yyyy-MM-dd'),
      reason: blockDate.reason,
    };

    setBlockedDates([...blockedDates, blocked]);
    setBlockDate({ facility: '', reason: '' });
    setSelectedDate(undefined);
    setIsBlockDateDialogOpen(false);
    toast.success('Date blocked successfully!');
  };

  const handleUnblockDate = (id) => {
    setBlockedDates(blockedDates.filter((b) => b.id !== id));
    toast.success('Date unblocked!');
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800">Approved</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      case 'cancelled':
        return <Badge className="bg-gray-100 text-gray-800">Cancelled</Badge>;
      default:
        return null;
    }
  };

  const pendingBookings = bookings.filter((b) => b.status === 'pending');
  const approvedBookings = bookings.filter((b) => b.status === 'approved');

  if (!isAdmin) {
    // Resident view - simple booking list
    const residentBookings = bookings.filter((b) => b.unit === user.unit);
    return (
      <div className="space-y-6">
        <div>
          <h2>My Bookings</h2>
          <p className="text-sm text-gray-600">View your facility bookings</p>
        </div>
        <Card>
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
                {residentBookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>{booking.facilityName}</TableCell>
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
          <p className="text-sm text-gray-600">Manage facilities, bookings, and schedules</p>
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
                <div className="grid grid-cols-2 gap-4">
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
                  <div className="space-y-2">
                    <Label htmlFor="hourlyRate">Hourly Rate ($)</Label>
                    <Input
                      id="hourlyRate"
                      type="number"
                      step="0.01"
                      value={newFacility.hourlyRate}
                      onChange={(e) => setNewFacility({ ...newFacility, hourlyRate: e.target.value })}
                      placeholder="0.00"
                      required
                    />
                  </div>
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
                  <Label>Date to Block</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {selectedDate ? format(selectedDate, 'PPP') : 'Pick a date'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={selectedDate} onSelect={setSelectedDate} initialFocus />
                    </PopoverContent>
                  </Popover>
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

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Facilities</p>
                <p className="mt-1 text-2xl">{facilities.length}</p>
                <p className="mt-1 text-xs text-gray-500">{facilities.filter((f) => f.status === 'available').length} available</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-3">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Requests</p>
                <p className="mt-1 text-2xl">{pendingBookings.length}</p>
                <p className="mt-1 text-xs text-gray-500">Awaiting approval</p>
              </div>
              <div className="rounded-lg bg-yellow-50 p-3">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Approved Bookings</p>
                <p className="mt-1 text-2xl">{approvedBookings.length}</p>
                <p className="mt-1 text-xs text-gray-500">Upcoming</p>
              </div>
              <div className="rounded-lg bg-green-50 p-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Blocked Dates</p>
                <p className="mt-1 text-2xl">{blockedDates.length}</p>
                <p className="mt-1 text-xs text-gray-500">Maintenance/Events</p>
              </div>
              <div className="rounded-lg bg-red-50 p-3">
                <Ban className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="facilities">
        <TabsList>
          <TabsTrigger value="facilities">Facilities ({facilities.length})</TabsTrigger>
          <TabsTrigger value="bookings">Bookings ({bookings.length})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({pendingBookings.length})</TabsTrigger>
          <TabsTrigger value="blocked">Blocked Dates ({blockedDates.length})</TabsTrigger>
        </TabsList>

        {/* Facilities Tab */}
        <TabsContent value="facilities" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Facility Management</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Capacity</TableHead>
                    <TableHead>Hourly Rate</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {facilities.map((facility) => (
                    <TableRow key={facility.id}>
                      <TableCell>{facility.name}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{facility.type === 'sport' ? 'Sports' : 'Event Hall'}</Badge>
                      </TableCell>
                      <TableCell className="max-w-xs truncate">{facility.description}</TableCell>
                      <TableCell>{facility.capacity} people</TableCell>
                      <TableCell>${facility.hourlyRate}/hr</TableCell>
                      <TableCell>
                        {facility.status === 'available' ? (
                          <Badge className="bg-green-100 text-green-800">Available</Badge>
                        ) : (
                          <Badge className="bg-red-100 text-red-800">Maintenance</Badge>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => handleEditFacility(facility)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleToggleFacilityStatus(facility.id)}>
                            {facility.status === 'available' ? 'Set Maintenance' : 'Set Available'}
                          </Button>
                          <Button size="sm" variant="outline" onClick={() => handleDeleteFacility(facility.id)}>
                            <Trash2 className="h-4 w-4 text-red-600" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* All Bookings Tab */}
        <TabsContent value="bookings" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>All Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Facility</TableHead>
                    <TableHead>Resident</TableHead>
                    <TableHead>Unit</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Guests</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map((booking) => (
                    <TableRow key={booking.id}>
                      <TableCell>{booking.facilityName}</TableCell>
                      <TableCell>{booking.residentName}</TableCell>
                      <TableCell>{booking.unit}</TableCell>
                      <TableCell>{format(new Date(booking.date), 'MMM dd, yyyy')}</TableCell>
                      <TableCell>
                        {booking.startTime} - {booking.endTime}
                      </TableCell>
                      <TableCell>{booking.guests}</TableCell>
                      <TableCell>{getStatusBadge(booking.status)}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {booking.status === 'approved' && (
                            <Button size="sm" variant="outline" onClick={() => handleCancelBooking(booking.id)}>
                              Cancel
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pending Bookings Tab */}
        <TabsContent value="pending" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Approvals</CardTitle>
            </CardHeader>
            <CardContent>
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
                  {pendingBookings.map((booking) => (
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
            </CardContent>
          </Card>
        </TabsContent>

        {/* Blocked Dates Tab */}
        <TabsContent value="blocked" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Blocked Dates</CardTitle>
            </CardHeader>
            <CardContent>
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
                  {blockedDates.map((blocked) => (
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
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
