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
import { Plus, Eye, X } from 'lucide-react';
import { toast } from 'sonner';

function ResidentComplaintRequest({ user }) {
  const [complaints, setComplaints] = useState([
    {
      id: '1',
      type: 'maintenance',
      category: 'Plumbing',
      subject: 'Leaking Faucet',
      description: 'Kitchen faucet is leaking continuously. Water is dripping from the base of the faucet.',
      photos: [],
      status: 'in-progress',
      date: '2025-10-20',
    },
    {
      id: '2',
      type: 'complaint',
      category: 'Noise',
      subject: 'Loud Music',
      description: 'Neighbor playing loud music at night after 11 PM. This has been happening for the past 3 days.',
      photos: [],
      status: 'pending',
      date: '2025-10-22',
    },
    {
      id: '3',
      type: 'maintenance',
      category: 'Electrical',
      subject: 'Power Outlet',
      description: 'Bedroom outlet not working. Tried different devices but none are getting power.',
      photos: [],
      status: 'resolved',
      date: '2025-10-15',
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [newComplaint, setNewComplaint] = useState({
    type: 'maintenance',
    category: '',
    subject: '',
    description: '',
    photos: [],
  });

  const categories = {
    maintenance: ['Plumbing', 'Electrical', 'HVAC', 'Appliances', 'General'],
    complaint: ['Noise', 'Parking', 'Cleanliness', 'Security', 'Other'],
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const complaint = {
      id: Date.now().toString(),
      type: newComplaint.type,
      category: newComplaint.category,
      subject: newComplaint.subject,
      description: newComplaint.description,
      photos: newComplaint.photos,
      status: 'pending',
      date: new Date().toISOString().split('T')[0],
    };

    setComplaints([complaint, ...complaints]);
    setNewComplaint({ type: 'maintenance', category: '', subject: '', description: '', photos: [] });
    setIsDialogOpen(false);
    toast.success('Request submitted successfully!');
  };

  const handlePhotoUpload = (e) => {
    const files = e.target.files;
    if (files) {
      const newPhotos = [];
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newPhotos.push(reader.result);
          if (newPhotos.length === files.length) {
            setNewComplaint({ ...newComplaint, photos: [...newComplaint.photos, ...newPhotos] });
          }
        };
        reader.readAsDataURL(file);
      });
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
      default:
        return null;
    }
  };

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
                <Label htmlFor="photos">Upload Photos (Optional)</Label>
                <Input
                  id="photos"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handlePhotoUpload}
                />
                {newComplaint.photos.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {newComplaint.photos.map((photo, index) => (
                      <div key={index} className="relative">
                        <img
                          src={photo}
                          alt={`Upload ${index + 1}`}
                          className="h-20 w-20 rounded-lg object-cover"
                        />
                        <button
                          type="button"
                          className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
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

      <Card>
        <CardHeader>
          <CardTitle>My Requests</CardTitle>
        </CardHeader>
        <CardContent>
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
              {complaints.map((complaint) => (
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
              ))}
            </TableBody>
          </Table>
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
                  <p className="text-sm">{selectedComplaint.id}</p>
                </div>
                <div>
                  <Label>Type</Label>
                  <p className="text-sm">
                    <Badge variant="outline">
                      {selectedComplaint.type === 'maintenance' ? 'Maintenance' : 'Complaint'}
                    </Badge>
                  </p>
                </div>
                <div>
                  <Label>Category</Label>
                  <p className="text-sm">{selectedComplaint.category}</p>
                </div>
                <div>
                  <Label>Date Submitted</Label>
                  <p className="text-sm">{new Date(selectedComplaint.date).toLocaleDateString()}</p>
                </div>
              </div>
              
              <div>
                <Label>Subject</Label>
                <p className="text-sm">{selectedComplaint.subject}</p>
              </div>

              <div>
                <Label>Description</Label>
                <p className="text-sm text-gray-600">{selectedComplaint.description}</p>
              </div>

              <div>
                <Label>Status</Label>
                <div className="mt-1">{getStatusBadge(selectedComplaint.status)}</div>
              </div>

              {selectedComplaint.photos.length > 0 && (
                <div>
                  <Label className="mb-2 block">Photos ({selectedComplaint.photos.length})</Label>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedComplaint.photos.map((photo, index) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`Photo ${index + 1}`}
                        className="h-32 w-full rounded-lg object-cover"
                      />
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
