'use client'

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Plus, Search, UserCheck, UserX, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { formatDate } from '../../lib/dateUtils';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

const API_URL = '/api/Visitors';

export default function VisitorRegister({ user }) {
  const isAdmin = user.role === 'Admin';

  const [visitors, setVisitors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [newVisitor, setNewVisitor] = useState({
    name: '',
    phone: '',
    purpose: '',
  });
  const [activeTab, setActiveTab] = useState('active');

  // 1. Fetch Visitors from Backend
  useEffect(() => {
    const fetchVisitors = async () => {
      setIsLoading(true);
      try {
        // If Admin, fetch all. If Resident, fetch specific endpoint.
        const endpoint = isAdmin
          ? API_URL
          : `${API_URL}/my-visitors/${user.id}`;

        const response = await fetch(endpoint);
        if (!response.ok) throw new Error('Failed to fetch visitors');

        const data = await response.json();
        setVisitors(data);
      } catch (error) {
        console.error("Fetch Error:", error);
        toast.error('Failed to load visitor records.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchVisitors();
  }, [user.id, isAdmin]); // Added dependencies here

  // 2. Handle Registration (POST)
  const handleRegisterVisitor = async (e) => {
    e.preventDefault();

    const payload = {
      name: newVisitor.name,
      phone: newVisitor.phone,
      purpose: newVisitor.purpose,
      userId: user.id // Registers the visitor under the current user (or admin)
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Failed to register visitor');

      const addedVisitor = await response.json();

      // Update list
      setVisitors([addedVisitor, ...visitors]);

      // Reset form
      setNewVisitor({ name: '', phone: '', purpose: '' });
      setIsDialogOpen(false);
      toast.success('Visitor registered successfully!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  // 3. Handle Checkout (PUT)
  const handleCheckOut = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}/checkout`, {
        method: 'PUT',
      });

      if (!response.ok) throw new Error('Failed to check out visitor');

      // Update local state to reflect change immediately
      setVisitors(visitors.map((v) =>
        v.id === id
          ? { ...v, status: 'checked-out', checkOut: new Date().toLocaleString() }
          : v
      ));

      toast.success('Visitor checked out successfully!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Filtering logic
  const displayVisitors = visitors;

  const activeVisitors = displayVisitors.filter((v) => v.status === 'checked-in');
  const historicalVisitors = displayVisitors.filter((v) => v.status === 'checked-out');

  const filteredVisitors = (list) =>
    list.filter(
      (v) =>
        v.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        v.phone.includes(searchTerm) ||
        v.purpose.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if (isLoading) {
    return <div className="p-8 text-center">Loading visitor records...</div>;
  }

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
      </div>

      <Card className="glass !border-0">
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
          <Tabs defaultValue="active" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="active">
                Active Visitors ({activeVisitors.length})
              </TabsTrigger>
              <TabsTrigger value="history">
                History ({historicalVisitors.length})
              </TabsTrigger>
            </TabsList>

            {['active', 'history'].map((tabValue) => {
              const currentList = tabValue === 'active' ? filteredVisitors(activeVisitors) : filteredVisitors(historicalVisitors);
              const totalPages = Math.ceil(currentList.length / itemsPerPage);
              const paginatedList = currentList.slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              );

              return (
                <TabsContent key={tabValue} value={tabValue} className="mt-4">
                  <motion.div
                    initial={{ x: tabValue === 'active' ? -20 : 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {paginatedList.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-12 text-center">
                        <Clock className="mb-4 h-12 w-12 text-gray-400" />
                        <p className="text-gray-600">No {tabValue === 'active' ? 'active visitors' : 'visitor history'}</p>
                      </div>
                    ) : (
                      <>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Name</TableHead>
                              {isAdmin && <TableHead>Unit</TableHead>}
                              <TableHead>Phone</TableHead>
                              <TableHead>Purpose</TableHead>
                              <TableHead>Check-in Time</TableHead>
                              {tabValue === 'history' && <TableHead>Check-out Time</TableHead>}
                              <TableHead>Status</TableHead>
                              {tabValue === 'active' && <TableHead>Action</TableHead>}
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {paginatedList.map((visitor) => (
                              <TableRow key={visitor.id}>
                                <TableCell>{visitor.name}</TableCell>
                                {isAdmin && <TableCell>{visitor.unit}</TableCell>}
                                <TableCell>{visitor.phone}</TableCell>
                                <TableCell>{visitor.purpose}</TableCell>
                                <TableCell>{formatDate(visitor.checkIn)}</TableCell>
                                {tabValue === 'history' && <TableCell>{formatDate(visitor.checkOut)}</TableCell>}
                                <TableCell>
                                  {visitor.status === 'checked-in' ? (
                                    <Badge className="bg-green-100 text-green-800">
                                      <UserCheck className="mr-1 h-3 w-3" />
                                      Checked In
                                    </Badge>
                                  ) : (
                                    <Badge variant="outline" className="text-gray-600">
                                      <UserX className="mr-1 h-3 w-3" />
                                      Checked Out
                                    </Badge>
                                  )}
                                </TableCell>
                                {tabValue === 'active' && (
                                  <TableCell>
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      onClick={() => handleCheckOut(visitor.id)}
                                    >
                                      Check Out
                                    </Button>
                                  </TableCell>
                                )}
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
                    )}
                  </motion.div>
                </TabsContent>
              );
            })}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}