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
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Plus, Search, Filter, MessageSquare, Wrench, CheckCircle, Clock, XCircle } from 'lucide-react';
import { toast } from 'sonner';

const API_URL = 'http://localhost:5016/api/Reports';

export default function ComplaintMaintenanceManagement({ user }) {
  const isAdmin = user.role === 'Admin';

  // Original categories and contractors list preserved
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
  
  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');

  // Dialog State
  const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false);
  const [isAssignDialogOpen, setIsAssignDialogOpen] = useState(false);
  const [isResolveDialogOpen, setIsResolveDialogOpen] = useState(false);
  
  // Selected Item State
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [assignedContractor, setAssignedContractor] = useState('');
  const [resolutionNotes, setResolutionNotes] = useState('');

  // New Request Form State
  const [newRequest, setNewRequest] = useState({
    type: 'maintenance',
    category: '',
    subject: '',
    description: '',
    priority: 'medium',
  });

  // --- API: Fetch Data ---
  const fetchRequests = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch requests');
      const data = await response.json();
      setRequests(data);
    } catch (error) {
      console.error(error);
      toast.error('Failed to load requests');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  // --- API: Submit Request ---
  const handleSubmitRequest = async (e) => {
    e.preventDefault();
    
    const payload = {
      ...newRequest,
      userId: user.id 
    };

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Failed to submit request');

      toast.success('Request submitted successfully!');
      setNewRequest({ type: 'maintenance', category: '', subject: '', description: '', priority: 'medium' });
      setIsRequestDialogOpen(false);
      fetchRequests(); // Refresh list
    } catch (error) {
      toast.error(error.message);
    }
  };

  // --- API: Assign Request ---
  const handleAssignRequest = async (e) => {
    e.preventDefault();
    if (!selectedRequest) return;

    try {
      const response = await fetch(`${API_URL}/${selectedRequest.id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
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

  // --- API: Resolve Request ---
  const handleResolveRequest = async (e) => {
    e.preventDefault();
    if (!selectedRequest) return;

    try {
      const response = await fetch(`${API_URL}/${selectedRequest.id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
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

  // --- API: Reject Request ---
  const handleRejectRequest = async (request) => {
    if(!window.confirm("Are you sure you want to reject this request?")) return;

    try {
      const response = await fetch(`${API_URL}/${request.id}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'rejected' }),
      });

      if (!response.ok) throw new Error('Failed to reject request');

      toast.success('Request rejected!');
      fetchRequests();
    } catch (error) {
      toast.error(error.message);
    }
  };

  // --- Filtering Logic (Original Logic Preserved) ---
  const filteredRequests = requests.filter((req) => {
    // For residents, only show their own requests
    if (!isAdmin && req.unit !== user.unit) return false;

    const matchesSearch =
      req.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.residentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.unit.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || req.status === filterStatus;
    const matchesType = filterType === 'all' || req.type === filterType;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  // --- Stats Calculations ---
  // Note: For residents, we might want to show stats for THEIR requests only, 
  // but usually admins see global stats. The logic below filters based on the *filteredRequests* // logic or global requests depending on requirement. Let's use the viewable requests.
  const viewableRequests = isAdmin ? requests : requests.filter(r => r.unit === user.unit);

  const pendingCount = viewableRequests.filter((r) => r.status === 'pending').length;
  const inProgressCount = viewableRequests.filter((r) => r.status === 'in-progress').length;
  const resolvedCount = viewableRequests.filter((r) => r.status === 'resolved').length;
  const highPriorityCount = viewableRequests.filter((r) => r.priority === 'high' && r.status !== 'resolved').length;

  const getStatusBadge = (status) => {
    switch (status) {
      case 'pending': return <Badge className="bg-yellow-100 text-yellow-800">Pending</Badge>;
      case 'in-progress': return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
      case 'resolved': return <Badge className="bg-green-100 text-green-800">Resolved</Badge>;
      case 'rejected': return <Badge className="bg-red-100 text-red-800">Rejected</Badge>;
      default: return null;
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'high': return <Badge className="bg-red-100 text-red-800">High</Badge>;
      case 'medium': return <Badge className="bg-orange-100 text-orange-800">Medium</Badge>;
      case 'low': return <Badge className="bg-gray-100 text-gray-800">Low</Badge>;
      default: return null;
    }
  };

  if (loading) return <div className="p-8 text-center">Loading requests...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>{isAdmin ? 'Complaint & Maintenance Management' : 'Complaints & Requests'}</h2>
          <p className="text-sm text-gray-600">
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
          <DialogContent>
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
              <Button type="submit" className="w-full">Submit Request</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Statistics Cards (Preserved) */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending</p>
                <p className="mt-1 text-2xl text-yellow-600">{pendingCount}</p>
                <p className="mt-1 text-xs text-gray-500">Awaiting action</p>
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
                <p className="text-sm text-gray-600">In Progress</p>
                <p className="mt-1 text-2xl text-blue-600">{inProgressCount}</p>
                <p className="mt-1 text-xs text-gray-500">Being handled</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-3">
                <Wrench className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Resolved</p>
                <p className="mt-1 text-2xl text-green-600">{resolvedCount}</p>
                <p className="mt-1 text-xs text-gray-500">Completed</p>
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
                <p className="text-sm text-gray-600">High Priority</p>
                <p className="mt-1 text-2xl text-red-600">{highPriorityCount}</p>
                <p className="mt-1 text-xs text-gray-500">Urgent attention</p>
              </div>
              <div className="rounded-lg bg-red-50 p-3">
                <MessageSquare className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Request Management Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Request Management</CardTitle>
            <div className="flex gap-2">
              <div className="relative w-64">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
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

            {/* Renders the table based on the tab selection */}
            {['all', 'pending', 'inprogress', 'resolved'].map((tabValue) => (
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
                      {isAdmin && <TableHead>Actions</TableHead>}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRequests
                      .filter(req => tabValue === 'all' || req.status === (tabValue === 'inprogress' ? 'in-progress' : tabValue))
                      .map((request) => (
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
                        <TableCell>{new Date(request.submittedDate).toLocaleDateString()}</TableCell>
                        {isAdmin && <TableCell>{request.assignedTo || '-'}</TableCell>}
                        {isAdmin && (
                          <TableCell>
                            <div className="flex gap-2">
                              {request.status === 'pending' && (
                                <>
                                  <Button size="sm" onClick={() => { setSelectedRequest(request); setIsAssignDialogOpen(true); }}>Assign</Button>
                                  <Button size="sm" variant="outline" onClick={() => handleRejectRequest(request)}><XCircle className="h-4 w-4" /></Button>
                                </>
                              )}
                              {request.status === 'in-progress' && (
                                <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => { setSelectedRequest(request); setIsResolveDialogOpen(true); }}>
                                  <CheckCircle className="mr-1 h-3 w-3" /> Resolve
                                </Button>
                              )}
                            </div>
                          </TableCell>
                        )}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Assign Request Dialog */}
      <Dialog open={isAssignDialogOpen} onOpenChange={setIsAssignDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Assign Request</DialogTitle>
            <DialogDescription>Assign this request to a contractor or staff member</DialogDescription>
          </DialogHeader>
          {selectedRequest && (
            <div className="mb-4 rounded-lg bg-blue-50 p-4">
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

      {/* Resolve Request Dialog */}
      <Dialog open={isResolveDialogOpen} onOpenChange={setIsResolveDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Resolve Request</DialogTitle>
            <DialogDescription>Mark this request as resolved and provide resolution details</DialogDescription>
          </DialogHeader>
          {selectedRequest && (
            <div className="mb-4 rounded-lg bg-green-50 p-4">
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