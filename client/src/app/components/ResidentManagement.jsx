'use client'

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Badge } from './ui/badge';
import { Search, Plus, UserCheck, Home, Edit, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Label } from './ui/label';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

const API_URL = '';

export default function ResidentManagement({ user }) {
  const [residents, setResidents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingResident, setEditingResident] = useState(null);

  // [CHANGED] State now tracks Block, Floor, and Unit separately
  const [newResident, setNewResident] = useState({
    name: '',
    email: '',
    block: '',
    floor: '',
    unit: '',
    role: 'Resident',
  });

  useEffect(() => {
    fetchResidents();
  }, []);

  async function fetchResidents() {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/residents`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setResidents(data);
    } catch (e) {
      setError(e.message);
      toast.error(`Failed to load residents: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  const handleOpenChange = (open) => {
    setIsDialogOpen(open);
    if (!open) {
      setEditingResident(null);
      // [CHANGED] Reset separate fields
      setNewResident({ name: '', email: '', block: '', floor: '', unit: '', role: 'Resident' });
    }
  };

  const handleAddResident = async (e) => {
    e.preventDefault();

    const defaultPassword = "Resident123!";

    // [CHANGED] Payload matches new DTO structure
    const residentToAdd = {
      name: newResident.name,
      email: newResident.email,
      block: newResident.block,
      floor: newResident.floor,
      unit: newResident.unit,
      password: defaultPassword,
    };

    try {
      const response = await fetch(`${API_URL}/api/residents`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(residentToAdd),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add resident');
      }

      const addedResident = await response.json();
      setResidents((prev) => [...prev, addedResident]);

      handleOpenChange(false);
      toast.success(`Resident added! Default password is: ${defaultPassword}`);
    } catch (e) {
      toast.error(e.message);
    }
  };

  const handleEditResident = (resident) => {
    setEditingResident(resident);
    // [CHANGED] Populate separate fields from the selected resident
    setNewResident({
      name: resident.name,
      email: resident.email,
      block: resident.block,
      floor: resident.floor,
      unit: resident.unit,
      role: resident.role,
    });
    setIsDialogOpen(true);
  };

  const handleUpdateResident = async (e) => {
    e.preventDefault();
    // [CHANGED] Payload matches new DTO structure
    const updatedResidentData = {
      id: editingResident.id,
      name: newResident.name,
      email: newResident.email,
      block: newResident.block,
      floor: newResident.floor,
      unit: newResident.unit,
    };

    try {
      const response = await fetch(`${API_URL}/api/residents/${editingResident.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedResidentData),
      });

      if (!response.ok) throw new Error('Update failed');

      // Update local state immediately
      setResidents(residents.map((r) => r.id === editingResident.id ? { ...r, ...updatedResidentData } : r));
      handleOpenChange(false);
      toast.success('Resident updated successfully!');
    } catch (e) {
      toast.error(`Failed to update resident: ${e.message}`);
    }
  };

  const handleDeleteResident = async (id) => {
    if (window.confirm('Are you sure you want to delete this resident?')) {
      try {
        const response = await fetch(`${API_URL}/api/residents/${id}`, { method: 'DELETE' });
        if (!response.ok) throw new Error('Delete failed');
        setResidents(residents.filter((r) => r.id !== id));
        toast.success('Resident deleted successfully!');
      } catch (e) {
        toast.error(`Failed to delete resident: ${e.message}`);
      }
    }
  };

  const filteredResidents = residents.filter(r =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    r.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Helper for Gradient Cards
  const GradientCard = ({ children, className }) => (
    <div className={`relative rounded-xl p-[1px] bg-gradient-to-br from-blue-300/50 via-purple-300/50 to-blue-300/50 shadow-sm ${className}`}>
      <div className="relative h-full rounded-[calc(0.75rem-1px)] bg-white/80 backdrop-blur-sm p-6 shadow-inner">
        {children}
      </div>
    </div>
  );

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">Error: {error}</div>;

  const totalPages = Math.ceil(filteredResidents.length / itemsPerPage);
  const paginatedResidents = filteredResidents.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Resident Management</h2>
          <p className="text-sm text-gray-600">Manage all residents in the community</p>
        </div>

        <Dialog open={isDialogOpen} onOpenChange={handleOpenChange}>
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
                {!editingResident && "A default password (Resident123!) will be assigned."}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={editingResident ? handleUpdateResident : handleAddResident} className="space-y-4">
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

              {/* [CHANGED] 3 Separate Inputs for Block, Floor, Unit */}
              <div className="grid grid-cols-3 gap-2">
                <div className="space-y-2">
                  <Label htmlFor="block">Block</Label>
                  <Input
                    id="block"
                    value={newResident.block}
                    onChange={(e) => setNewResident({ ...newResident, block: e.target.value })}
                    placeholder="e.g. A"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="floor">Floor</Label>
                  <Input
                    id="floor"
                    value={newResident.floor}
                    onChange={(e) => setNewResident({ ...newResident, floor: e.target.value })}
                    placeholder="e.g. 10"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="unit">Unit</Label>
                  <Input
                    id="unit"
                    value={newResident.unit}
                    onChange={(e) => setNewResident({ ...newResident, unit: e.target.value })}
                    placeholder="e.g. 05"
                    required
                  />
                </div>
              </div>

              <Button type="submit" className="w-full">
                {editingResident ? 'Update Resident' : 'Add Resident'}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <GradientCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Residents</p>
              <p className="mt-1 text-2xl font-bold">{residents.length}</p>
            </div>
            <div className="rounded-lg bg-blue-50 p-3">
              <UserCheck className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </GradientCard>
        <GradientCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Occupied Units</p>
              {/* [CHANGED] Calculate unique units based on combo of block-floor-unit */}
              <p className="mt-1 text-2xl font-bold">
                {new Set(residents.map(r => `${r.block}-${r.floor}-${r.unit}`)).size}
              </p>
            </div>
            <div className="rounded-lg bg-orange-50 p-3">
              <Home className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </GradientCard>
      </div>

      <Card className="glass !border-0">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>All Residents</CardTitle>
            <div className="relative w-64">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Search residents..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Unit (Block-Floor-Unit)</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedResidents.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-4 text-gray-500">
                    No residents found.
                  </TableCell>
                </TableRow>
              ) : (
                paginatedResidents.map((resident, index) => (
                  <TableRow key={resident.id || index}>
                    <TableCell>{resident.name}</TableCell>
                    <TableCell>{resident.email}</TableCell>
                    {/* [CHANGED] Display formatted unit string */}
                    <TableCell>{`${resident.block}-${resident.floor}-${resident.unit}`}</TableCell>
                    <TableCell><Badge variant="secondary">{resident.role}</Badge></TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleEditResident(resident)}><Edit className="h-4 w-4" /></Button>
                        <Button size="sm" variant="outline" onClick={() => handleDeleteResident(resident.id)}><Trash2 className="h-4 w-4 text-red-600" /></Button>
                      </div>
                    </TableCell>
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
    </div>
  );
}