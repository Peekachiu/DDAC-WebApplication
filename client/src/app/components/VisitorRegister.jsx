'use client'

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Plus, Search, UserCheck, UserX, Clock } from 'lucide-react';
import { toast } from 'sonner';

export default function VisitorRegister({ user }) {
  const isAdmin = user.role === 'Admin';
  
  const [visitors, setVisitors] = useState([
    {
      id: '1',
      name: 'John Doe',
      phone: '+1-555-0101',
      purpose: 'Personal Visit',
      checkIn: '2025-10-24 10:30 AM',
      checkOut: null,
      status: 'checked-in',
      unit: 'Unit A-101',
    },
    {
      id: '2',
      name: 'Jane Smith',
      phone: '+1-555-0102',
      purpose: 'Delivery',
      checkIn: '2025-10-24 09:15 AM',
      checkOut: '2025-10-24 09:30 AM',
      status: 'checked-out',
      unit: 'Unit B-205',
    },
    {
      id: '3',
      name: 'Mike Wilson',
      phone: '+1-555-0103',
      purpose: 'Maintenance',
      checkIn: '2025-10-23 02:00 PM',
      checkOut: '2025-10-23 04:30 PM',
      status: 'checked-out',
      unit: 'Unit A-101',
    },
    {
      id: '4',
      name: 'Sarah Brown',
      phone: '+1-555-0104',
      purpose: 'Personal Visit',
      checkIn: '2025-10-22 06:00 PM',
      checkOut: '2025-10-22 08:30 PM',
      status: 'checked-out',
      unit: 'Unit C-304',
    },
    {
      id: '5',
      name: 'Tom Anderson',
      phone: '+1-555-0105',
      purpose: 'Personal Visit',
      checkIn: '2025-10-24 02:15 PM',
      checkOut: null,
      status: 'checked-in',
      unit: 'Unit B-205',
    },
    {
      id: '6',
      name: 'Emily Davis',
      phone: '+1-555-0106',
      purpose: 'Contractor',
      checkIn: '2025-10-24 11:00 AM',
      checkOut: null,
      status: 'checked-in',
      unit: 'Unit D-401',
    },
    {
      id: '7',
      name: 'Robert Lee',
      phone: '+1-555-0107',
      purpose: 'Package Delivery',
      checkIn: '2025-10-24 08:45 AM',
      checkOut: '2025-10-24 08:50 AM',
      status: 'checked-out',
      unit: 'Unit C-304',
    },
    {
      id: '8',
      name: 'Lisa Martinez',
      phone: '+1-555-0108',
      purpose: 'Personal Visit',
      checkIn: '2025-10-23 03:30 PM',
      checkOut: '2025-10-23 05:00 PM',
      status: 'checked-out',
      unit: 'Unit A-203',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newVisitor, setNewVisitor] = useState({
    name: '',
    phone: '',
    purpose: '',
  });

  const handleRegisterVisitor = (e) => {
    e.preventDefault();
    
    const visitor = {
      id: Date.now().toString(),
      name: newVisitor.name,
      phone: newVisitor.phone,
      purpose: newVisitor.purpose,
      checkIn: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }),
      checkOut: null,
      status: 'checked-in',
      unit: user.unit,
    };

    setVisitors([visitor, ...visitors]);
    setNewVisitor({ name: '', phone: '', purpose: '' });
    setIsDialogOpen(false);
    toast.success('Visitor registered successfully!');
  };

  const handleCheckOut = (id) => {
    setVisitors(
      visitors.map((v) =>
        v.id === id
          ? {
              ...v,
              checkOut: new Date().toLocaleString('en-US', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true,
              }),
              status: 'checked-out',
            }
          : v
      )
    );
    toast.success('Visitor checked out successfully!');
  };

  const displayVisitors = isAdmin 
    ? visitors 
    : visitors.filter((v) => v.unit === user.unit);

  const activeVisitors = displayVisitors.filter((v) => v.status === 'checked-in');
  const historicalVisitors = displayVisitors.filter((v) => v.status === 'checked-out');

  const filteredVisitors = (list) =>
    list.filter(
      (v) =>
        v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.phone.includes(searchTerm) ||
        v.purpose.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Visitor & Security Management</h2>
          <p className="text-sm text-gray-600">
            {isAdmin 
              ? 'View and search the full history of visitor registrations' 
              : `Register and track visitors to ${user.unit}`}
          </p>
        </div>
        {!isAdmin && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Register Visitor
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Register New Visitor</DialogTitle>
              <DialogDescription>
                Enter visitor details to register their entry
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleRegisterVisitor} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Visitor Name</Label>
                <Input
                  id="name"
                  value={newVisitor.name}
                  onChange={(e) =>
                    setNewVisitor({ ...newVisitor, name: e.target.value })
                  }
                  placeholder="Enter visitor name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={newVisitor.phone}
                  onChange={(e) =>
                    setNewVisitor({ ...newVisitor, phone: e.target.value })
                  }
                  placeholder="+1-555-0100"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="purpose">Purpose of Visit</Label>
                <Input
                  id="purpose"
                  value={newVisitor.purpose}
                  onChange={(e) =>
                    setNewVisitor({ ...newVisitor, purpose: e.target.value })
                  }
                  placeholder="e.g., Personal Visit, Delivery"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Register Visitor
              </Button>
            </form>
          </DialogContent>
        </Dialog>
        )}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Visitor Records</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search visitors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="active">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="active">
                Active Visitors ({activeVisitors.length})
              </TabsTrigger>
              <TabsTrigger value="history">
                History ({historicalVisitors.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="mt-4">
              {filteredVisitors(activeVisitors).length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Clock className="mb-4 h-12 w-12 text-gray-400" />
                  <p className="text-gray-600">No active visitors</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      {isAdmin && <TableHead>Unit</TableHead>}
                      <TableHead>Phone</TableHead>
                      <TableHead>Purpose</TableHead>
                      <TableHead>Check-in Time</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredVisitors(activeVisitors).map((visitor) => (
                      <TableRow key={visitor.id}>
                        <TableCell>{visitor.name}</TableCell>
                        {isAdmin && <TableCell>{visitor.unit}</TableCell>}
                        <TableCell>{visitor.phone}</TableCell>
                        <TableCell>{visitor.purpose}</TableCell>
                        <TableCell>{visitor.checkIn}</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800">
                            <UserCheck className="mr-1 h-3 w-3" />
                            Checked In
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleCheckOut(visitor.id)}
                          >
                            Check Out
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </TabsContent>

            <TabsContent value="history" className="mt-4">
              {filteredVisitors(historicalVisitors).length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Clock className="mb-4 h-12 w-12 text-gray-400" />
                  <p className="text-gray-600">No visitor history</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      {isAdmin && <TableHead>Unit</TableHead>}
                      <TableHead>Phone</TableHead>
                      <TableHead>Purpose</TableHead>
                      <TableHead>Check-in Time</TableHead>
                      <TableHead>Check-out Time</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredVisitors(historicalVisitors).map((visitor) => (
                      <TableRow key={visitor.id}>
                        <TableCell>{visitor.name}</TableCell>
                        {isAdmin && <TableCell>{visitor.unit}</TableCell>}
                        <TableCell>{visitor.phone}</TableCell>
                        <TableCell>{visitor.purpose}</TableCell>
                        <TableCell>{visitor.checkIn}</TableCell>
                        <TableCell>{visitor.checkOut}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-gray-600">
                            <UserX className="mr-1 h-3 w-3" />
                            Checked Out
                          </Badge>
                        </TableCell>
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
