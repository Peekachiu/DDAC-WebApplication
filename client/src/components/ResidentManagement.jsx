import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Search, Plus, UserCheck, UserX, Home, Mail, Phone, Edit, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Label } from './ui/label';

function ResidentManagement({ user }) {
  const [residents, setResidents] = useState([
    {
      id: '1',
      name: 'John Smith',
      email: 'john@example.com',
      phone: '+1-555-0101',
      unit: 'Unit A-101',
      moveInDate: '2023-01-15',
      status: 'active',
      paymentStatus: 'current',
      balance: 0,
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+1-555-0102',
      unit: 'Unit B-205',
      moveInDate: '2023-03-20',
      status: 'active',
      paymentStatus: 'current',
      balance: 0,
    },
    {
      id: '3',
      name: 'Mike Wilson',
      email: 'mike@example.com',
      phone: '+1-555-0103',
      unit: 'Unit C-304',
      moveInDate: '2022-11-10',
      status: 'active',
      paymentStatus: 'overdue',
      balance: 450,
    },
    {
      id: '4',
      name: 'Emily Chen',
      email: 'emily@example.com',
      phone: '+1-555-0104',
      unit: 'Unit D-401',
      moveInDate: '2025-10-01',
      status: 'active',
      paymentStatus: 'current',
      balance: 0,
    },
    {
      id: '5',
      name: 'David Brown',
      email: 'david@example.com',
      phone: '+1-555-0105',
      unit: 'Unit A-203',
      moveInDate: '2024-05-15',
      status: 'inactive',
      paymentStatus: 'current',
      balance: 0,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingResident, setEditingResident] = useState(null);
  const [newResident, setNewResident] = useState({
    name: '',
    email: '',
    phone: '',
    unit: '',
    moveInDate: '',
  });

  const handleAddResident = (e) => {
    e.preventDefault();

    const resident = {
      id: Date.now().toString(),
      name: newResident.name,
      email: newResident.email,
      phone: newResident.phone,
      unit: newResident.unit,
      moveInDate: newResident.moveInDate,
      status: 'active',
      paymentStatus: 'current',
      balance: 0,
    };

    setResidents([...residents, resident]);
    setNewResident({ name: '', email: '', phone: '', unit: '', moveInDate: '' });
    setIsDialogOpen(false);
    toast.success('Resident added successfully!');
  };

  const handleEditResident = (resident) => {
    setEditingResident(resident);
    setNewResident({
      name: resident.name,
      email: resident.email,
      phone: resident.phone,
      unit: resident.unit,
      moveInDate: resident.moveInDate,
    });
    setIsDialogOpen(true);
  };

  const handleUpdateResident = (e) => {
    e.preventDefault();

    if (editingResident) {
      setResidents(
        residents.map((r) =>
          r.id === editingResident.id
            ? {
                ...r,
                name: newResident.name,
                email: newResident.email,
                phone: newResident.phone,
                unit: newResident.unit,
                moveInDate: newResident.moveInDate,
              }
            : r
        )
      );
      setEditingResident(null);
      setNewResident({ name: '', email: '', phone: '', unit: '', moveInDate: '' });
      setIsDialogOpen(false);
      toast.success('Resident updated successfully!');
    }
  };

  const handleDeleteResident = (id) => {
    if (window.confirm('Are you sure you want to delete this resident?')) {
      setResidents(residents.filter((r) => r.id !== id));
      toast.success('Resident deleted successfully!');
    }
  };

  const handleToggleStatus = (id) => {
    setResidents(
      residents.map((r) =>
        r.id === id
          ? { ...r, status: r.status === 'active' ? 'inactive' : 'active' }
          : r
      )
    );
    toast.success('Resident status updated!');
  };

  const filteredResidents = residents.filter(
    (r) =>
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.unit.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeResidents = residents.filter((r) => r.status === 'active').length;
  const overduePayments = residents.filter((r) => r.paymentStatus === 'overdue').length;
  const totalBalance = residents.reduce((sum, r) => sum + r.balance, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Resident Management</h2>
          <p className="text-sm text-gray-600">Manage all residents in the community</p>
        </div>
        <Dialog
          open={isDialogOpen}
          onOpenChange={(open) => {
            setIsDialogOpen(open);
            if (!open) {
              setEditingResident(null);
              setNewResident({ name: '', email: '', phone: '', unit: '', moveInDate: '' });
            }
          }}
        >
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Resident
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingResident ? 'Edit Resident' : 'Add New Resident'}</DialogTitle>
              <DialogDescription>
                {editingResident
                  ? 'Update resident information'
                  : 'Enter details to add a new resident'}
              </DialogDescription>
            </DialogHeader>
            <form
              onSubmit={editingResident ? handleUpdateResident : handleAddResident}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={newResident.name}
                  onChange={(e) => setNewResident({ ...newResident, name: e.target.value })}
                  placeholder="Enter full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={newResident.email}
                  onChange={(e) => setNewResident({ ...newResident, email: e.target.value })}
                  placeholder="email@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={newResident.phone}
                  onChange={(e) => setNewResident({ ...newResident, phone: e.target.value })}
                  placeholder="+1-555-0100"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="unit">Unit Number</Label>
                <Input
                  id="unit"
                  value={newResident.unit}
                  onChange={(e) => setNewResident({ ...newResident, unit: e.target.value })}
                  placeholder="e.g., Unit A-101"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="moveInDate">Move-in Date</Label>
                <Input
                  id="moveInDate"
                  type="date"
                  value={newResident.moveInDate}
                  onChange={(e) => setNewResident({ ...newResident, moveInDate: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                {editingResident ? 'Update Resident' : 'Add Resident'}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Residents</p>
                <p className="mt-1 text-2xl">{residents.length}</p>
                <p className="mt-1 text-xs text-gray-500">{activeResidents} active</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-3">
                <UserCheck className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Overdue Payments</p>
                <p className="mt-1 text-2xl">{overduePayments}</p>
                <p className="mt-1 text-xs text-gray-500">Require attention</p>
              </div>
              <div className="rounded-lg bg-red-50 p-3">
                <UserX className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Balance</p>
                <p className="mt-1 text-2xl text-red-600">${totalBalance}</p>
                <p className="mt-1 text-xs text-gray-500">Outstanding</p>
              </div>
              <div className="rounded-lg bg-orange-50 p-3">
                <Home className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Residents Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Residents</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search residents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Move-in Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Balance</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredResidents.map((resident) => (
                <TableRow key={resident.id}>
                  <TableCell>{resident.name}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-xs">
                        <Mail className="h-3 w-3" />
                        {resident.email}
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        <Phone className="h-3 w-3" />
                        {resident.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{resident.unit}</TableCell>
                  <TableCell>{new Date(resident.moveInDate).toLocaleDateString()}</TableCell>
                  <TableCell>
                    {resident.status === 'active' ? (
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    ) : (
                      <Badge className="bg-gray-100 text-gray-800">Inactive</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    {resident.paymentStatus === 'current' ? (
                      <Badge className="bg-green-100 text-green-800">Current</Badge>
                    ) : (
                      <Badge className="bg-red-100 text-red-800">Overdue</Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    {resident.balance > 0 ? (
                      <span className="text-red-600">${resident.balance}</span>
                    ) : (
                      <span className="text-green-600">$0</span>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEditResident(resident)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleToggleStatus(resident.id)}
                      >
                        {resident.status === 'active' ? (
                          <UserX className="h-4 w-4" />
                        ) : (
                          <UserCheck className="h-4 w-4" />
                        )}
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDeleteResident(resident.id)}
                      >
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
    </div>
  );
}

export default ResidentManagement;
