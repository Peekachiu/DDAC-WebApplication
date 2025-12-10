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
import { Plus, Search, Filter, MessageSquare, Wrench, CheckCircle, Clock, XCircle, Eye } from 'lucide-react';
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

const API_URL = 'http://localhost:5016/api/Reports';

export default function ComplaintMaintenanceManagement({ user }) {
  const isAdmin = user.role === 'Admin';

  const maintenanceCategories = ['Plumbing', 'Electrical', 'HVAC', 'Carpentry', 'Painting', 'General'];
  const complaintCategories = ['Noise Complaint', 'Parking Issue', 'Neighbor Dispute', 'Security', 'Garbage', 'Other'];
  const contractors = [
    'John Plumber - Plumbing',
    'Mike Electric - Electrical',
    'HVAC Team - HVAC',
    'Carpentry Crew - Carpentry',
    'Painting Service - Painting',
    'General Maintenance Staff'
  ];

  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false);
  const [isAssignDialogOpen, setIsAssignDialogOpen] = useState(false);
  const [isResolveDialogOpen, setIsResolveDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);

  const [selectedRequest, setSelectedRequest] = useState(null);
  const [assignedContractor, setAssignedContractor] = useState('');
  const [resolutionNotes, setResolutionNotes] = useState('');

  const [newRequest, setNewRequest] = useState({
    type: 'maintenance',
    category: '',
    subject: '',
    description: '',
    priority: 'medium',
    photo: '',
  });

  // [FIX 1] Wrap fetchRequests in useCallback to fix exhaustive-deps warning
  const fetchRequests = useCallback(async () => {
    setLoading(true);
    try {
      const url = isAdmin ? API_URL : `${API_URL}/user/${user.id}`;
      const response = await fetch(url, {
        headers: { 'Authorization': `Bearer ${user.token}` }
      });

      if (!response.ok) throw new Error('Failed to fetch requests');
      const data = await response.json();
      setRequests(data);
    } catch (error) {
      console.error(error);
      toast.error('Failed to load requests');
    } finally {
      setLoading(false);
    }
  }, [isAdmin, user.id]); // Dependencies: isAdmin and user.id

  // [FIX 1] Add fetchRequests to dependency array
  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast.error("File size too large (Max 2MB)");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewRequest({ ...newRequest, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitRequest = async (e) => {
    e.preventDefault();

    const payload = {
      ...newRequest,
      userId: user.id
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Failed to submit request');

      toast.success('Request submitted successfully!');
      setNewRequest({ type: 'maintenance', category: '', subject: '', description: '', priority: 'medium', photo: '' });
      setIsRequestDialogOpen(false);
      fetchRequests();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleAssignRequest = async (e) => {
    e.preventDefault();
    if (!selectedRequest) return;

    try {
      const response = await fetch(`${API_URL}/${selectedRequest.id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({
          status: 'in-progress',
          assignedTo: assignedContractor
        }),
      });

      if (!response.ok) throw new Error('Failed to assign request');

      toast.success('Request assigned successfully!');
      setIsAssignDialogOpen(false);
      setSelectedRequest(null);
      setAssignedContractor('');
      fetchRequests();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleResolveRequest = async (e) => {
    e.preventDefault();
    if (!selectedRequest) return;

    try {
      const response = await fetch(`${API_URL}/${selectedRequest.id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({
          status: 'resolved',
          resolutionNotes: resolutionNotes
        }),
      });

      if (!response.ok) throw new Error('Failed to resolve request');

      toast.success('Request marked as resolved!');
      setIsResolveDialogOpen(false);
      setSelectedRequest(null);
      setResolutionNotes('');
      fetchRequests();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleRejectRequest = async (request) => {
    if (!window.confirm("Are you sure you want to reject this request?")) return;

    try {
      const response = await fetch(`${API_URL}/${request.id}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({ status: 'rejected' }),
      });

      if (!response.ok) throw new Error('Failed to reject request');

      toast.success('Request rejected!');
      fetchRequests();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const filteredRequests = requests.filter((req) => {
    if (!isAdmin && req.unit !== user.unit) return false;

    const matchesSearch =
      req.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (req.residentName && req.residentName.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (req.unit && req.unit.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesStatus = filterStatus === 'all' || req.status === filterStatus;
    const matchesType = filterType === 'all' || req.type === filterType;

    return matchesSearch && matchesStatus && matchesType;
  });

  const pendingCount = requests.filter((r) => r.status === 'pending').length;
  const inProgressCount = requests.filter((r) => r.status === 'in-progress').length;
  const resolvedCount = requests.filter((r) => r.status === 'resolved').length;
  const highPriorityCount = requests.filter((r) => r.priority === 'high' && r.status !== 'resolved').length;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'pending': return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">Pending</Badge>;
      case 'in-progress': return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">In Progress</Badge>;
      case 'resolved': return <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Resolved</Badge>;
      case 'rejected': return <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">Rejected</Badge>;
      default: return null;
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'high': return <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">High</Badge>;
      case 'medium': return <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300">Medium</Badge>;
      case 'low': return <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300">Low</Badge>;
      default: return null;
    }
  };

  // Helper for Gradient Cards
  const GradientCard = ({ children, className }) => (
    <div className={`relative rounded-xl p-px bg-linear-to-br from-blue-300/50 via-purple-300/50 to-blue-300/50 shadow-sm ${className}`}>
      <div className="relative h-full rounded-[calc(0.75rem-1px)] bg-white/80 dark:bg-black/40 backdrop-blur-sm p-6 shadow-inner">
        {children}
      </div>
    </div>
  );

  if (loading) return <div className="p-8 text-center">Loading requests...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>{isAdmin ? 'Complaint & Maintenance Management' : 'Complaints & Requests'}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {isAdmin
              ? 'Receive, assign, and track all complaints and maintenance requests'
              : 'Submit and track your complaints and maintenance requests'}
          </p>
        </div>
        <Dialog open={isRequestDialogOpen} onOpenChange={setIsRequestDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Request
            </Button>
          </DialogTrigger>
          <DialogContent className="max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Submit New Request</DialogTitle>
              <DialogDescription>Create a complaint or maintenance request</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmitRequest} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="type">Request Type</Label>
                <Select
                  value={newRequest.type}
                  onValueChange={(value) => setNewRequest({ ...newRequest, type: value, category: '' })}
                  required
                >
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maintenance">Maintenance Request</SelectItem>
                    <SelectItem value="complaint">Complaint</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select value={newRequest.category} onValueChange={(value) => setNewRequest({ ...newRequest, category: value })} required>
                  <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                  <SelectContent>
                    {(newRequest.type === 'maintenance' ? maintenanceCategories : complaintCategories).map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select
                  value={newRequest.priority}
                  onValueChange={(value) => setNewRequest({ ...newRequest, priority: value })}
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
                  value={newRequest.subject}
                  onChange={(e) => setNewRequest({ ...newRequest, subject: e.target.value })}
                  placeholder="Brief description"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={newRequest.description}
                  onChange={(e) => setNewRequest({ ...newRequest, description: e.target.value })}
                  placeholder="Provide details..."
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="photo">Attach Photo (Optional)</Label>
                <Input
                  id="photo"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {newRequest.photo && (
                  <p className="text-xs text-green-600">Photo attached</p>
                )}
              </div>

              <Button type="submit" className="w-full">Submit Request</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <GradientCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Pending</p>
              <p className="mt-1 text-2xl text-yellow-600 dark:text-yellow-400 font-bold">{pendingCount}</p>
              <p className="mt-1 text-xs text-gray-500">Awaiting action</p>
            </div>
            <div className="rounded-lg bg-yellow-50 dark:bg-yellow-900/20 p-3"><Clock className="h-6 w-6 text-yellow-600 dark:text-yellow-400" /></div>
          </div>
        </GradientCard>
        <GradientCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">In Progress</p>
              <p className="mt-1 text-2xl text-blue-600 dark:text-blue-400 font-bold">{inProgressCount}</p>
              <p className="mt-1 text-xs text-gray-500">Being handled</p>
            </div>
            <div className="rounded-lg bg-blue-50 dark:bg-blue-900/20 p-3"><Wrench className="h-6 w-6 text-blue-600 dark:text-blue-400" /></div>
          </div>
        </GradientCard>
        <GradientCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Resolved</p>
              <p className="mt-1 text-2xl text-green-600 dark:text-green-400 font-bold">{resolvedCount}</p>
              <p className="mt-1 text-xs text-gray-500">Completed</p>
            </div>
            <div className="rounded-lg bg-green-50 dark:bg-green-900/20 p-3"><CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" /></div>
          </div>
        </GradientCard>
        <GradientCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-300">High Priority</p>
              <p className="mt-1 text-2xl text-red-600 dark:text-red-400 font-bold">{highPriorityCount}</p>
              <p className="mt-1 text-xs text-gray-500">Urgent attention</p>
            </div>
            <div className="rounded-lg bg-red-50 dark:bg-red-900/20 p-3"><MessageSquare className="h-6 w-6 text-red-600 dark:text-red-400" /></div>
          </div>
        </GradientCard>
      </div>

      <Card className="glass border-0!">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Request Management</CardTitle>
            <div className="flex gap-2">
              <div className="relative w-64">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400 dark:text-gray-500" />
                <Input placeholder="Search requests..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-40"><Filter className="mr-2 h-4 w-4" /><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="complaint">Complaint</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40"><Filter className="mr-2 h-4 w-4" /><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All ({filteredRequests.length})</TabsTrigger>
              <TabsTrigger value="pending">Pending ({filteredRequests.filter(r => r.status === 'pending').length})</TabsTrigger>
              <TabsTrigger value="inprogress">In Progress ({filteredRequests.filter(r => r.status === 'in-progress').length})</TabsTrigger>
              <TabsTrigger value="resolved">Resolved ({filteredRequests.filter(r => r.status === 'resolved').length})</TabsTrigger>
            </TabsList>

            {['all', 'pending', 'inprogress', 'resolved'].map((tabValue) => {
              const currentList = filteredRequests
                .filter(req => tabValue === 'all' || req.status === (tabValue === 'inprogress' ? 'in-progress' : tabValue));
              const totalPages = Math.ceil(currentList.length / itemsPerPage);
              const paginatedList = currentList.slice(
                (currentPage - 1) * itemsPerPage,
                currentPage * itemsPerPage
              );

              return (
                <TabsContent key={tabValue} value={tabValue} className="mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Type</TableHead>
                        {isAdmin && <TableHead>Resident</TableHead>}
                        {isAdmin && <TableHead>Unit</TableHead>}
                        <TableHead>Category</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        {isAdmin && <TableHead>Assigned To</TableHead>}
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {paginatedList.map((request) => (
                        <TableRow key={request.id}>
                          <TableCell>{request.id}</TableCell>
                          <TableCell>
                            <Badge variant="outline">
                              {request.type === 'maintenance' ? <Wrench className="mr-1 h-3 w-3" /> : <MessageSquare className="mr-1 h-3 w-3" />}
                              {request.type === 'maintenance' ? 'Maintenance' : 'Complaint'}
                            </Badge>
                          </TableCell>
                          {isAdmin && <TableCell>{request.residentName}</TableCell>}
                          {isAdmin && <TableCell>{request.unit}</TableCell>}
                          <TableCell>{request.category}</TableCell>
                          <TableCell>{request.subject}</TableCell>
                          <TableCell>{getPriorityBadge(request.priority)}</TableCell>
                          <TableCell>{getStatusBadge(request.status)}</TableCell>
                          <TableCell>{formatDate(request.submittedDate)}</TableCell>
                          {isAdmin && <TableCell>{request.assignedTo || '-'}</TableCell>}
                          <TableCell>
                            <div className="flex gap-2">
                              <Button size="sm" variant="outline" onClick={() => { setSelectedRequest(request); setIsViewDialogOpen(true); }} title="View Details">
                                <Eye className="h-4 w-4" />
                              </Button>

                              {isAdmin && request.status === 'pending' && (
                                <>
                                  <Button size="sm" onClick={() => { setSelectedRequest(request); setIsAssignDialogOpen(true); }}>Assign</Button>
                                  <Button size="sm" variant="outline" onClick={() => handleRejectRequest(request)}><XCircle className="h-4 w-4" /></Button>
                                </>
                              )}
                              {isAdmin && request.status === 'in-progress' && (
                                <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => { setSelectedRequest(request); setIsResolveDialogOpen(true); }}>
                                  <CheckCircle className="mr-1 h-3 w-3" /> Resolve
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
                </TabsContent>
              );
            })}
          </Tabs>
        </CardContent>
      </Card>

      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Request Details</DialogTitle>
            <DialogDescription>Full details of the request</DialogDescription>
          </DialogHeader>
          {selectedRequest && (
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-2">
                <h3 className="text-lg font-semibold">{selectedRequest.subject}</h3>
                <div className="space-x-2">
                  {getStatusBadge(selectedRequest.status)}
                  {getPriorityBadge(selectedRequest.priority)}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><span className="font-semibold">Type:</span> {selectedRequest.type}</div>
                <div><span className="font-semibold">Category:</span> {selectedRequest.category}</div>
                <div><span className="font-semibold">Submitted By:</span> {selectedRequest.residentName || 'N/A'}</div>
                <div><span className="font-semibold">Unit:</span> {selectedRequest.unit || 'N/A'}</div>
                <div><span className="font-semibold">Date:</span> {formatDate(selectedRequest.submittedDate)}</div>
                <div><span className="font-semibold">Assigned To:</span> {selectedRequest.assignedTo || '-'}</div>
              </div>

              <div>
                <h4 className="font-semibold mb-1">Description:</h4>
                <div className="p-3 bg-gray-50 dark:bg-zinc-900 rounded-md whitespace-pre-wrap">
                  {selectedRequest.description}
                </div>
              </div>

              {selectedRequest.photo && (
                <div>
                  <h4 className="font-semibold mb-2">Attached Photo:</h4>
                  <div className="relative border rounded-lg overflow-hidden">
                    {/* [FIX 2] Disabled ESLint warning for img tag to allow dynamic photos without layout issues */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={selectedRequest.photo} alt="Request attachment" className="w-full max-h-[400px] object-contain bg-black/5" />
                  </div>
                </div>
              )}

              {selectedRequest.resolutionNotes && (
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-1 text-green-700 dark:text-green-400">Resolution Notes:</h4>
                  <p className="p-3 bg-green-50 dark:bg-green-900/20 rounded-md">{selectedRequest.resolutionNotes}</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={isAssignDialogOpen} onOpenChange={setIsAssignDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Assign Request</DialogTitle>
            <DialogDescription>Assign this request to a contractor or staff member</DialogDescription>
          </DialogHeader>
          {selectedRequest && (
            <div className="mb-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 p-4">
              <p className="text-sm"><strong>Request:</strong> {selectedRequest.subject}</p>
              <p className="text-xs text-gray-600">{selectedRequest.residentName} - {selectedRequest.unit}</p>
            </div>
          )}
          <form onSubmit={handleAssignRequest} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contractor">Assign To</Label>
              <Select value={assignedContractor} onValueChange={setAssignedContractor} required>
                <SelectTrigger><SelectValue placeholder="Select contractor/staff" /></SelectTrigger>
                <SelectContent>
                  {contractors.map((contractor) => (
                    <SelectItem key={contractor} value={contractor}>{contractor}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">Assign Request</Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={isResolveDialogOpen} onOpenChange={setIsResolveDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Resolve Request</DialogTitle>
            <DialogDescription>Mark this request as resolved and provide resolution details</DialogDescription>
          </DialogHeader>
          {selectedRequest && (
            <div className="mb-4 rounded-lg bg-green-50 dark:bg-green-900/20 p-4">
              <p className="text-sm"><strong>Request:</strong> {selectedRequest.subject}</p>
              <p className="text-xs text-gray-600">Assigned to: {selectedRequest.assignedTo}</p>
            </div>
          )}
          <form onSubmit={handleResolveRequest} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="resolutionNotes">Resolution Details</Label>
              <Textarea
                id="resolutionNotes"
                value={resolutionNotes}
                onChange={(e) => setResolutionNotes(e.target.value)}
                placeholder="Describe the resolution and actions taken"
                rows={4}
                required
              />
            </div>
            <Button type="submit" className="w-full">Mark as Resolved</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}