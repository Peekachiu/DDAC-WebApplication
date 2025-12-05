'use client'

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image'; // Added for optimization
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Badge } from './ui/badge';
import { Plus, Eye, X, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

const API_URL = 'http://localhost:5016/api/Reports';

function ResidentComplaintRequest({ user }) {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dialog & Selection States
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Form State
  const [newComplaint, setNewComplaint] = useState({
    type: 'maintenance',
    category: '',
    subject: '',
    description: '',
    priority: 'medium',
    photos: [],
  });

  const categories = {
    maintenance: ['Plumbing', 'Electrical', 'HVAC', 'Appliances', 'General'],
    complaint: ['Noise', 'Parking', 'Cleanliness', 'Security', 'Other'],
  };

  // --- 1. Fetch Data on Load ---
  // Wrapped in useCallback to fix the dependency warning
  const fetchComplaints = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/user/${user.id}`);
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();

      const mappedData = data.map(item => ({
        id: item.id,
        type: item.type,
        category: item.category,
        subject: item.subject,
        description: item.description,
        status: item.status,
        priority: item.priority,
        date: item.submittedDate,
        assignedTo: item.assignedTo,
        resolutionNotes: item.resolutionNotes,
        photos: item.photo ? [item.photo] : []
      }));

      setComplaints(mappedData);
    } catch (error) {
      console.error("Fetch error:", error);
      toast.error("Could not load your requests.");
    } finally {
      setLoading(false);
    }
  }, [user.id]);

  useEffect(() => {
    if (user?.id) {
      fetchComplaints();
    }
  }, [user?.id, fetchComplaints]); // Dependency array is now correct

  // --- 2. Handle Form Submission ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      type: newComplaint.type,
      category: newComplaint.category,
      subject: newComplaint.subject,
      description: newComplaint.description,
      priority: newComplaint.priority,
      userId: user.id,
      photo: newComplaint.photos.length > 0 ? newComplaint.photos[0] : null
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Failed to submit request');

      toast.success('Request submitted successfully!');

      setNewComplaint({
        type: 'maintenance',
        category: '',
        subject: '',
        description: '',
        priority: 'medium',
        photos: []
      });
      setIsDialogOpen(false);

      fetchComplaints();
    } catch (error) {
      toast.error(error.message);
    }
  };

  // --- 3. Helper Functions ---
  const handlePhotoUpload = (e) => {
    const files = e.target.files;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewComplaint({ ...newComplaint, photos: [reader.result] });
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const handleRemovePhoto = (index) => {
    setNewComplaint({
      ...newComplaint,
      photos: newComplaint.photos.filter((_, i) => i !== index),
    });
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
      case 'resolved':
        return <Badge className="bg-green-100 text-green-800">Resolved</Badge>;
      case 'rejected':
        return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const pendingComplaints = complaints.filter(c => c.status === 'pending');
  const resolvedComplaints = complaints.filter(c => c.status === 'resolved');

  if (loading) return <div className="p-8 text-center">Loading your requests...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Complaints & Requests</h2>
          <p className="text-sm text-gray-600">Submit and track your complaints and maintenance requests</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Request
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Submit New Request</DialogTitle>
              <DialogDescription>
                Submit a complaint or maintenance request
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="type">Request Type</Label>
                <Select
                  value={newComplaint.type}
                  onValueChange={(value) =>
                    setNewComplaint({ ...newComplaint, type: value, category: '' })
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maintenance">Maintenance Request</SelectItem>
                    <SelectItem value="complaint">Complaint</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select
                  value={newComplaint.category}
                  onValueChange={(value) =>
                    setNewComplaint({ ...newComplaint, category: value })
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories[newComplaint.type].map((cat) => (
                      <SelectItem key={cat} value={cat}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select
                  value={newComplaint.priority}
                  onValueChange={(value) => setNewComplaint({ ...newComplaint, priority: value })}
                  required
                >
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  value={newComplaint.subject}
                  onChange={(e) =>
                    setNewComplaint({ ...newComplaint, subject: e.target.value })
                  }
                  placeholder="Brief description"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newComplaint.description}
                  onChange={(e) =>
                    setNewComplaint({ ...newComplaint, description: e.target.value })
                  }
                  placeholder="Provide details about your request"
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="photos">Upload Photo (Optional)</Label>
                <Input
                  id="photos"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                />
                {newComplaint.photos.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {newComplaint.photos.map((photo, index) => (
                      <div key={index} className="relative h-20 w-20">
                        <Image
                          src={photo}
                          alt={`Upload ${index + 1}`}
                          className="rounded-lg object-cover"
                          fill
                          unoptimized // Needed for Base64 blobs in some Next.js configs
                        />
                        <button
                          type="button"
                          className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600 z-10"
                          onClick={() => handleRemovePhoto(index)}
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button type="submit" className="w-full">
                Submit Request
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="glass border-0!">
        <CardHeader>
          <CardTitle>My Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">All ({complaints.length})</TabsTrigger>
              <TabsTrigger value="pending">Pending ({pendingComplaints.length})</TabsTrigger>
              <TabsTrigger value="resolved">Resolved ({resolvedComplaints.length})</TabsTrigger>
            </TabsList>

            {['all', 'pending', 'resolved'].map((tabValue) => (
              <TabsContent key={tabValue} value={tabValue} className="mt-4">
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Type</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {(tabValue === 'all' ? complaints : tabValue === 'pending' ? pendingComplaints : resolvedComplaints).length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-4 text-gray-500">
                            No requests found.
                          </TableCell>
                        </TableRow>
                      ) : (
                        (tabValue === 'all' ? complaints : tabValue === 'pending' ? pendingComplaints : resolvedComplaints).map((complaint) => (
                          <TableRow key={complaint.id}>
                            <TableCell>
                              <Badge variant="outline">
                                {complaint.type === 'maintenance' ? 'Maintenance' : 'Complaint'}
                              </Badge>
                            </TableCell>
                            <TableCell>{complaint.category}</TableCell>
                            <TableCell>{complaint.subject}</TableCell>
                            <TableCell>{new Date(complaint.date).toLocaleDateString()}</TableCell>
                            <TableCell>{getStatusBadge(complaint.status)}</TableCell>
                            <TableCell>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => {
                                  setSelectedComplaint(complaint);
                                  setIsViewDialogOpen(true);
                                }}
                              >
                                <Eye className="mr-1 h-3 w-3" />
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* View Details Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Request Details</DialogTitle>
          </DialogHeader>
          {selectedComplaint && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Request ID</Label>
                  <p className="text-sm font-mono">#{selectedComplaint.id}</p>
                </div>
                <div>
                  <Label>Type</Label>
                  <div className="mt-1">
                    <Badge variant="outline">
                      {selectedComplaint.type === 'maintenance' ? 'Maintenance' : 'Complaint'}
                    </Badge>
                  </div>
                </div>
                <div>
                  <Label>Category</Label>
                  <p className="text-sm">{selectedComplaint.category}</p>
                </div>
                <div>
                  <Label>Date Submitted</Label>
                  <p className="text-sm">{new Date(selectedComplaint.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</p>
                </div>
              </div>

              <div>
                <Label>Subject</Label>
                <p className="text-sm font-medium">{selectedComplaint.subject}</p>
              </div>

              <div className="rounded-md bg-gray-50 p-3">
                <Label className="mb-1 block text-xs text-gray-500">Description</Label>
                <p className="text-sm text-gray-700 whitespace-pre-wrap">{selectedComplaint.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t pt-4">
                <div>
                  <Label>Status</Label>
                  <div className="mt-1">{getStatusBadge(selectedComplaint.status)}</div>
                </div>
                <div>
                  <Label>Assigned To</Label>
                  <p className="text-sm text-gray-600">{selectedComplaint.assignedTo || 'Not assigned yet'}</p>
                </div>
              </div>

              {selectedComplaint.status === 'resolved' && selectedComplaint.resolutionNotes && (
                <div className="rounded-md bg-green-50 p-3 border border-green-100">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <Label className="text-green-800">Resolution Notes</Label>
                  </div>
                  <p className="text-sm text-green-700">{selectedComplaint.resolutionNotes}</p>
                </div>
              )}

              {selectedComplaint.photos.length > 0 && (
                <div>
                  <Label className="mb-2 block">Attached Photo</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedComplaint.photos.map((photo, index) => (
                      <div key={index} className="relative h-40 w-full">
                        <Image
                          src={photo}
                          alt={`Evidence ${index + 1}`}
                          className="rounded-lg object-cover border"
                          fill
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default ResidentComplaintRequest;