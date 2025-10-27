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
import { Plus, Search, Filter, MessageSquare, Wrench, CheckCircle, Clock, XCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function ComplaintMaintenanceManagement({ user }) {
  const isAdmin = user.role === 'Admin';

  const maintenanceCategories = ['Plumbing', 'Electrical', 'HVAC', 'Carpentry', 'Painting', 'General'];
  const complaintCategories = ['Noise Complaint', 'Parking Issue', 'Neighbor Dispute', 'Security', 'Garbage', 'Other'];

  const [requests, setRequests] = useState([
    {
      id: 'REQ-001',
      type: 'maintenance',
      category: 'Plumbing',
      subject: 'Leaking Faucet',
      description: 'Kitchen faucet is leaking continuously',
      residentName: 'John Smith',
      unit: 'Unit A-101',
      status: 'in-progress',
      priority: 'high',
      submittedDate: '2025-10-20',
      assignedTo: 'John Plumber - Plumbing',
    },
    {
      id: 'REQ-002',
      type: 'complaint',
      category: 'Noise Complaint',
      subject: 'Loud Music at Night',
      description: 'Neighbor playing loud music after 11 PM',
      residentName: 'Sarah Johnson',
      unit: 'Unit B-205',
      status: 'pending',
      priority: 'medium',
      submittedDate: '2025-10-22',
    },
    {
      id: 'REQ-003',
      type: 'maintenance',
      category: 'Electrical',
      subject: 'Power Outlet Not Working',
      description: 'Bedroom power outlet not functioning',
      residentName: 'Mike Wilson',
      unit: 'Unit C-304',
      status: 'resolved',
      priority: 'medium',
      submittedDate: '2025-10-15',
      assignedTo: 'Mike Electric - Electrical',
      resolvedDate: '2025-10-18',
      resolutionNotes: 'Replaced faulty outlet. Tested and working properly.',
    },
    {
      id: 'REQ-004',
      type: 'complaint',
      category: 'Parking Issue',
      subject: 'Unauthorized Parking',
      description: 'Unknown vehicle parking in my assigned spot',
      residentName: 'Emily Chen',
      unit: 'Unit D-401',
      status: 'pending',
      priority: 'low',
      submittedDate: '2025-10-23',
    },
    {
      id: 'REQ-005',
      type: 'maintenance',
      category: 'HVAC',
      subject: 'AC Not Cooling',
      description: 'Air conditioning unit not cooling properly',
      residentName: 'David Brown',
      unit: 'Unit A-203',
      status: 'pending',
      priority: 'high',
      submittedDate: '2025-10-24',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [isRequestDialogOpen, setIsRequestDialogOpen] = useState(false);
  const [isAssignDialogOpen, setIsAssignDialogOpen] = useState(false);
  const [isResolveDialogOpen, setIsResolveDialogOpen] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [assignedContractor, setAssignedContractor] = useState('');
  const [resolutionNotes, setResolutionNotes] = useState('');

  // Example contractors/staff list
  const contractors = [
    'John Plumber - Plumbing',
    'Mike Electric - Electrical',
    'HVAC Team - HVAC',
    'Carpentry Crew - Carpentry',
    'Painting Service - Painting',
    'General Maintenance Staff'
  ];

  const [newRequest, setNewRequest] = useState({
    type: 'maintenance',
    category: '',
    subject: '',
    description: '',
    priority: 'medium',
  });

  const handleSubmitRequest = (e) => {
    e.preventDefault();

    const request = {
      id: `REQ-${(requests.length + 1).toString().padStart(3, '0')}`,
      type: newRequest.type,
      category: newRequest.category,
      subject: newRequest.subject,
      description: newRequest.description,
      residentName: user.name,
      unit: user.unit,
      status: 'pending',
      priority: newRequest.priority,
      submittedDate: new Date().toISOString().split('T')[0],
    };

    setRequests([request, ...requests]);
    setNewRequest({ type: 'maintenance', category: '', subject: '', description: '', priority: 'medium' });
    setIsRequestDialogOpen(false);
    toast.success('Request submitted successfully!');
  };

  const handleAssignRequest = (e) => {
    e.preventDefault();

    if (!selectedRequest) return;

    setRequests(
      requests.map((r) =>
        r.id === selectedRequest.id
          ? {
              ...r,
              status: 'in-progress',
              assignedTo: assignedContractor,
            }
          : r
      )
    );

    setIsAssignDialogOpen(false);
    setSelectedRequest(null);
    setAssignedContractor('');
    toast.success('Request assigned successfully!');
  };

  const handleResolveRequest = (e) => {
    e.preventDefault();

    if (!selectedRequest) return;

    setRequests(
      requests.map((r) =>
        r.id === selectedRequest.id
          ? {
              ...r,
              status: 'resolved',
              resolvedDate: new Date().toISOString().split('T')[0],
              resolutionNotes: resolutionNotes,
            }
          : r
      )
    );

    setIsResolveDialogOpen(false);
    setSelectedRequest(null);
    setResolutionNotes('');
    toast.success('Request marked as resolved!');
  };

  const handleRejectRequest = (request) => {
    setRequests(requests.map((r) => (r.id === request.id ? { ...r, status: 'rejected' } : r)));
    toast.success('Request rejected!');
  };

  // Filter requests
  const filteredRequests = requests.filter((req) => {
    const matchesSearch =
      req.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.residentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.unit.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || req.status === filterStatus;
    const matchesType = filterType === 'all' || req.type === filterType;
    
    // For residents, only show their own requests
    const matchesResident = isAdmin || req.unit === user.unit;
    
    return matchesSearch && matchesStatus && matchesType && matchesResident;
  });

  const pendingCount = requests.filter((r) => r.status === 'pending').length;
  const inProgressCount = requests.filter((r) => r.status === 'in-progress').length;
  const resolvedCount = requests.filter((r) => r.status === 'resolved').length;
  const highPriorityCount = requests.filter((r) => r.priority === 'high' && r.status !== 'resolved').length;

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
        return null;
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-red-100 text-red-800">High</Badge>;
      case 'medium':
        return <Badge className="bg-orange-100 text-orange-800">Medium</Badge>;
      case 'low':
        return <Badge className="bg-gray-100 text-gray-800">Low</Badge>;
      default:
        return null;
    }
  };

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
                <Select value={newRequest.category} onValueChange={(value) => setNewRequest({ ...newRequest, category: value })} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {(newRequest.type === 'maintenance' ? maintenanceCategories : complaintCategories).map((cat) => (
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
                  value={newRequest.priority}
                  onValueChange={(value) => setNewRequest({ ...newRequest, priority: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
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
                  placeholder="Provide detailed information about your request"
                  rows={4}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Submit Request
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Statistics Cards */}
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

      {/* Requests Management */}
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
                <SelectTrigger className="w-40">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="complaint">Complaint</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue />
                </SelectTrigger>
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
              <TabsTrigger value="all">All Requests ({filteredRequests.length})</TabsTrigger>
              <TabsTrigger value="pending">Pending ({pendingCount})</TabsTrigger>
              <TabsTrigger value="inprogress">In Progress ({inProgressCount})</TabsTrigger>
              <TabsTrigger value="resolved">Resolved ({resolvedCount})</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-4">
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
                  {filteredRequests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell>{request.id}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{request.type === 'maintenance' ? <Wrench className="mr-1 h-3 w-3" /> : <MessageSquare className="mr-1 h-3 w-3" />}
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
                                <Button
                                  size="sm"
                                  onClick={() => {
                                    setSelectedRequest(request);
                                    setIsAssignDialogOpen(true);
                                  }}
                                >
                                  Assign
                                </Button>
                                <Button size="sm" variant="outline" onClick={() => handleRejectRequest(request)}>
                                  <XCircle className="h-4 w-4" />
                                </Button>
                              </>
                            )}
                            {request.status === 'in-progress' && (
                              <Button
                                size="sm"
                                className="bg-green-600 hover:bg-green-700"
                                onClick={() => {
                                  setSelectedRequest(request);
                                  setIsResolveDialogOpen(true);
                                }}
                              >
                                <CheckCircle className="mr-1 h-3 w-3" />
                                Resolve
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

            <TabsContent value="pending" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Type</TableHead>
                    {isAdmin && <TableHead>Resident</TableHead>}
                    {isAdmin && <TableHead>Unit</TableHead>}
                    <TableHead>Subject</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Date</TableHead>
                    {isAdmin && <TableHead>Actions</TableHead>}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requests
                    .filter((r) => r.status === 'pending' && (isAdmin || r.unit === user.unit))
                    .map((request) => (
                      <TableRow key={request.id}>
                        <TableCell>{request.id}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{request.type === 'maintenance' ? 'Maintenance' : 'Complaint'}</Badge>
                        </TableCell>
                        {isAdmin && <TableCell>{request.residentName}</TableCell>}
                        {isAdmin && <TableCell>{request.unit}</TableCell>}
                        <TableCell>{request.subject}</TableCell>
                        <TableCell>{getPriorityBadge(request.priority)}</TableCell>
                        <TableCell>{new Date(request.submittedDate).toLocaleDateString()}</TableCell>
                        {isAdmin && (
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                onClick={() => {
                                  setSelectedRequest(request);
                                  setIsAssignDialogOpen(true);
                                }}
                              >
                                Assign
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => handleRejectRequest(request)}>
                                Reject
                              </Button>
                            </div>
                          </TableCell>
                        )}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="inprogress" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    {isAdmin && <TableHead>Resident</TableHead>}
                    {isAdmin && <TableHead>Unit</TableHead>}
                    <TableHead>Subject</TableHead>
                    <TableHead>Priority</TableHead>
                    {isAdmin && <TableHead>Assigned To</TableHead>}
                    {isAdmin && <TableHead>Actions</TableHead>}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requests
                    .filter((r) => r.status === 'in-progress' && (isAdmin || r.unit === user.unit))
                    .map((request) => (
                      <TableRow key={request.id}>
                        <TableCell>{request.id}</TableCell>
                        {isAdmin && <TableCell>{request.residentName}</TableCell>}
                        {isAdmin && <TableCell>{request.unit}</TableCell>}
                        <TableCell>{request.subject}</TableCell>
                        <TableCell>{getPriorityBadge(request.priority)}</TableCell>
                        {isAdmin && <TableCell>{request.assignedTo}</TableCell>}
                        {isAdmin && (
                          <TableCell>
                            <Button
                              size="sm"
                              className="bg-green-600 hover:bg-green-700"
                              onClick={() => {
                                setSelectedRequest(request);
                                setIsResolveDialogOpen(true);
                              }}
                            >
                              Mark Resolved
                            </Button>
                          </TableCell>
                        )}
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="resolved" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    {isAdmin && <TableHead>Resident</TableHead>}
                    {isAdmin && <TableHead>Unit</TableHead>}
                    <TableHead>Subject</TableHead>
                    <TableHead>Submitted</TableHead>
                    <TableHead>Resolved</TableHead>
                    {isAdmin && <TableHead>Assigned To</TableHead>}
                    <TableHead>Resolution</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requests
                    .filter((r) => r.status === 'resolved' && (isAdmin || r.unit === user.unit))
                    .map((request) => (
                      <TableRow key={request.id}>
                        <TableCell>{request.id}</TableCell>
                        {isAdmin && <TableCell>{request.residentName}</TableCell>}
                        {isAdmin && <TableCell>{request.unit}</TableCell>}
                        <TableCell>{request.subject}</TableCell>
                        <TableCell>{new Date(request.submittedDate).toLocaleDateString()}</TableCell>
                        <TableCell>{request.resolvedDate ? new Date(request.resolvedDate).toLocaleDateString() : '-'}</TableCell>
                        {isAdmin && <TableCell>{request.assignedTo}</TableCell>}
                        <TableCell className="max-w-xs truncate">{request.resolutionNotes || '-'}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TabsContent>
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
              <p className="text-sm">
                <strong>Request:</strong> {selectedRequest.subject}
              </p>
              <p className="text-xs text-gray-600">
                {selectedRequest.residentName} - {selectedRequest.unit}
              </p>
            </div>
          )}
          <form onSubmit={handleAssignRequest} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="contractor">Assign To</Label>
              <Select value={assignedContractor} onValueChange={setAssignedContractor} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select contractor/staff" />
                </SelectTrigger>
                <SelectContent>
                  {contractors.map((contractor) => (
                    <SelectItem key={contractor} value={contractor}>
                      {contractor}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">
              Assign Request
            </Button>
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
              <p className="text-sm">
                <strong>Request:</strong> {selectedRequest.subject}
              </p>
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
            <Button type="submit" className="w-full">
              Mark as Resolved
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
