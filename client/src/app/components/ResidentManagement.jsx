'use client'

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Search, Plus, UserCheck, Home, Mail, Edit, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Label } from './ui/label';

// Make sure this port (5123) matches your 'dotnet run' terminal
const API_URL = 'http://localhost:5016';

export default function ResidentManagement({ user }) {
  // --- STATE ---
  const [residents, setResidents] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingResident, setEditingResident] = useState(null);

  const [newResident, setNewResident] = useState({
    name: '',
    email: '',
    unitNumber: '',
    role: 'Resident',
  });

  // --- DATA FETCHING ---
  useEffect(() => {
    fetchResidents();
  }, []);

  async function fetchResidents() {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/residents`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setResidents(data);
    } catch (e) {
      setError(e.message);
      toast.error(`Failed to load residents: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  // --- CRUD FUNCTIONS ---

  const handleAddResident = async (e) => {
    e.preventDefault();
    
    const residentToAdd = {
      name: newResident.name,
      email: newResident.email,
      unitNumber: newResident.unitNumber,
      role: newResident.role,
      // You should add password handling on the server, not here
    };

    try {
      const response = await fetch(`${API_URL}/api/residents`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(residentToAdd),
      });

      if (!response.ok) throw new Error('Failed to add resident');

      const addedResident = await response.json();
      setResidents([...residents, addedResident]);
      
      closeDialog();
      toast.success('Resident added successfully!');
    } catch (e) {
      toast.error(`Failed to add resident: ${e.message}`);
    }
  };

  const handleEditResident = (resident) => {
    setEditingResident(resident);
    setNewResident({
      name: resident.name,
      email: resident.email,
      unitNumber: resident.unitNumber,
      role: resident.role,
    });
    setIsDialogOpen(true);
  };

  const handleUpdateResident = async (e) => {
    e.preventDefault();
    
    // This is the data we will send for the update
    const updatedResidentData = {
      id: editingResident.id,
      name: newResident.name,
      email: newResident.email,
      unitNumber: newResident.unitNumber,
      role: newResident.role,
      // Note: We're not sending PasswordHash, so it won't be changed
    };

    try {
      const response = await fetch(`${API_URL}/api/residents/${editingResident.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedResidentData),
      });

      if (!response.ok) { throw new Error('Update failed'); }

      // Update the resident in the local list
      setResidents(
        residents.map((r) =>
          r.id === editingResident.id ? { ...r, ...updatedResidentData } : r
        )
      );
      
      closeDialog();
      toast.success('Resident updated successfully!');
    } catch (e) {
      toast.error(`Failed to update resident: ${e.message}`);
    }
  };

  const handleDeleteResident = async (id) => {
    if (window.confirm('Are you sure you want to delete this resident?')) {
      try {
        const response = await fetch(`${API_URL}/api/residents/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) { throw new Error('Delete failed'); }

        // Remove the resident from the local list
        setResidents(residents.filter((r) => r.id !== id));
        toast.success('Resident deleted successfully!');
      } catch (e) {
        toast.error(`Failed to delete resident: ${e.message}`);
      }
    }
  };

  // --- RENDER LOGIC ---

  const closeDialog = () => {
    setIsDialogOpen(false);
    setEditingResident(null);
    setNewResident({ name: '', email: '', unitNumber: '', role: 'Resident' });
  };

  const filteredResidents = residents.filter(
    (r) =>
      r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.unitNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const activeResidents = residents.filter((r) => r.role === 'Resident').length;

  if (isLoading) {
    return <div>Loading residents...</div>;
  }

  if (error) {
    return <div>Error loading residents: {error}</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Resident Management</h2>
          <p className="text-sm text-gray-600">Manage all residents in the community</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={closeDialog}>
          <DialogTrigger asChild>
            <Button onClick={() => setIsDialogOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Resident
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingResident ? 'Edit Resident' : 'Add New Resident'}</DialogTitle>
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
                <Label htmlFor="unit">Unit Number</Label>
                <Input
                  id="unit"
                  value={newResident.unitNumber}
                  onChange={(e) => setNewResident({ ...newResident, unitNumber: e.target.value })}
                  placeholder="e.g., Unit A-101"
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

      {/* --- Summary Cards (Simplified) --- */}
      <div className="grid gap-4 sm:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Residents</p>
                <p className="mt-1 text-2xl">{residents.length}</p>
                <p className="mt-1 text-xs text-gray-500">{activeResidents} residents</p>
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
                <p className="text-sm text-gray-600">Total Units</p>
                <p className="mt-1 text-2xl">{residents.length}</p>
                <p className="mt-1 text-xs text-gray-500">Occupied</p>
              </div>
              <div className="rounded-lg bg-orange-50 p-3">
                <Home className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* --- Residents Table (Simplified) --- */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Residents</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by name, email, unit..."
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
                <TableHead>Email</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredResidents.map((resident) => (
                <TableRow key={resident.id}>
                  <TableCell>{resident.name}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-xs">
                      <Mail className="h-3 w-3" />
                      {resident.email}
                    </div>
                  </TableCell>
                  <TableCell>{resident.unitNumber}</TableCell>
                  <TableCell>
                    {resident.role === 'Admin' ? (
                      <Badge variant="default">Admin</Badge>
                    ) : (
                      <Badge variant="secondary">Resident</Badge>
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