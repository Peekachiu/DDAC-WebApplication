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
import { Plus, Send, Bell, Megaphone, Calendar, AlertCircle, Info, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

export default function CommunicationManagement({ user }) {
  const isAdmin = user.role === 'Admin';

  const [announcements, setAnnouncements] = useState([
    {
      id: 'ANN-001',
      title: 'Scheduled Water Maintenance',
      message: 'Water supply will be temporarily suspended on November 1st from 9 AM to 3 PM for maintenance work. Please plan accordingly.',
      type: 'warning',
      audience: 'all',
      scheduledDate: '2025-10-25',
      createdBy: 'Admin',
      status: 'sent',
      sentDate: '2025-10-25',
      recipients: 150,
    },
    {
      id: 'ANN-002',
      title: 'Community Diwali Celebration',
      message: 'Join us for our annual Diwali celebration on November 10th at 6 PM in the Main Event Hall. All residents are welcome!',
      type: 'event',
      audience: 'all',
      scheduledDate: '2025-10-28',
      createdBy: 'Admin',
      status: 'scheduled',
      recipients: 150,
    },
    {
      id: 'ANN-003',
      title: 'Elevator Maintenance - Tower A',
      message: 'Elevator #1 in Tower A will be under maintenance from Oct 30 to Nov 2. Please use the alternate elevator. We apologize for any inconvenience.',
      type: 'info',
      audience: 'building-a',
      scheduledDate: '2025-10-29',
      createdBy: 'Admin',
      status: 'scheduled',
      recipients: 48,
    },
    {
      id: 'ANN-004',
      title: 'Security Alert - Package Thefts',
      message: 'Please be vigilant about package deliveries. Report any suspicious activity to security immediately.',
      type: 'urgent',
      audience: 'all',
      scheduledDate: '2025-10-22',
      createdBy: 'Admin',
      status: 'sent',
      sentDate: '2025-10-22',
      recipients: 150,
    },
    {
      id: 'ANN-005',
      title: 'Parking Policy Update',
      message: 'New parking policy will be effective from November 15th. All vehicles must display parking permits. Please collect your permits from the office.',
      type: 'info',
      audience: 'all',
      scheduledDate: '2025-10-20',
      createdBy: 'Admin',
      status: 'sent',
      sentDate: '2025-10-20',
      recipients: 150,
    },
  ]);

  const [isAnnouncementDialogOpen, setIsAnnouncementDialogOpen] = useState(false);
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);

  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    message: '',
    type: 'info',
    audience: 'all',
    scheduledDate: '',
  });

  const handleCreateAnnouncement = (e) => {
    e.preventDefault();

    const recipientCount = newAnnouncement.audience === 'all' ? 150 : 48;

    if (editingAnnouncement) {
      setAnnouncements(
        announcements.map((a) =>
          a.id === editingAnnouncement.id
            ? {
                ...a,
                title: newAnnouncement.title,
                message: newAnnouncement.message,
                type: newAnnouncement.type,
                audience: newAnnouncement.audience,
                scheduledDate: newAnnouncement.scheduledDate,
                recipients: recipientCount,
              }
            : a
        )
      );
      toast.success('Announcement updated successfully!');
    } else {
      const announcement = {
        id: `ANN-${(announcements.length + 1).toString().padStart(3, '0')}`,
        title: newAnnouncement.title,
        message: newAnnouncement.message,
        type: newAnnouncement.type,
        audience: newAnnouncement.audience,
        scheduledDate: newAnnouncement.scheduledDate,
        createdBy: user.name,
        status: new Date(newAnnouncement.scheduledDate) <= new Date() ? 'sent' : 'scheduled',
        recipients: recipientCount,
        ...(new Date(newAnnouncement.scheduledDate) <= new Date() && { sentDate: new Date().toISOString().split('T')[0] }),
      };

      setAnnouncements([announcement, ...announcements]);
      toast.success('Announcement created successfully!');
    }

    setNewAnnouncement({ title: '', message: '', type: 'info', audience: 'all', scheduledDate: '' });
    setEditingAnnouncement(null);
    setIsAnnouncementDialogOpen(false);
  };

  const handleEditAnnouncement = (announcement) => {
    setEditingAnnouncement(announcement);
    setNewAnnouncement({
      title: announcement.title,
      message: announcement.message,
      type: announcement.type,
      audience: announcement.audience,
      scheduledDate: announcement.scheduledDate,
    });
    setIsAnnouncementDialogOpen(true);
  };

  const handleSendNow = (id) => {
    setAnnouncements(
      announcements.map((a) =>
        a.id === id
          ? {
              ...a,
              status: 'sent',
              sentDate: new Date().toISOString().split('T')[0],
            }
          : a
      )
    );
    toast.success('Announcement sent to all residents!');
  };

  const handleDeleteAnnouncement = (id) => {
    if (window.confirm('Are you sure you want to delete this announcement?')) {
      setAnnouncements(announcements.filter((a) => a.id !== id));
      toast.success('Announcement deleted!');
    }
  };

  const getTypeBadge = (type) => {
    switch (type) {
      case 'info':
        return (
          <Badge className="bg-blue-100 text-blue-800">
            <Info className="mr-1 h-3 w-3" />
            Info
          </Badge>
        );
      case 'warning':
        return (
          <Badge className="bg-orange-100 text-orange-800">
            <AlertCircle className="mr-1 h-3 w-3" />
            Warning
          </Badge>
        );
      case 'urgent':
        return (
          <Badge className="bg-red-100 text-red-800">
            <Bell className="mr-1 h-3 w-3" />
            Urgent
          </Badge>
        );
      case 'event':
        return (
          <Badge className="bg-purple-100 text-purple-800">
            <Calendar className="mr-1 h-3 w-3" />
            Event
          </Badge>
        );
      default:
        return null;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'draft':
        return <Badge className="bg-gray-100 text-gray-800">Draft</Badge>;
      case 'scheduled':
        return <Badge className="bg-yellow-100 text-yellow-800">Scheduled</Badge>;
      case 'sent':
        return <Badge className="bg-green-100 text-green-800">Sent</Badge>;
      default:
        return null;
    }
  };

  const getAudienceText = (audience) => {
    switch (audience) {
      case 'all':
        return 'All Residents';
      case 'building-a':
        return 'Tower A Only';
      case 'building-b':
        return 'Tower B Only';
      case 'building-c':
        return 'Tower C Only';
      case 'building-d':
        return 'Tower D Only';
      default:
        return audience;
    }
  };

  const sentCount = announcements.filter((a) => a.status === 'sent').length;
  const scheduledCount = announcements.filter((a) => a.status === 'scheduled').length;
  const totalRecipients = announcements.filter((a) => a.status === 'sent').reduce((sum, a) => sum + a.recipients, 0);

  // For residents - show only sent announcements
  if (!isAdmin) {
    const residentAnnouncements = announcements.filter((a) => a.status === 'sent' && (a.audience === 'all' || a.audience === 'building-a'));

    return (
      <div className="space-y-6">
        <div>
          <h2>Notifications & Announcements</h2>
          <p className="text-sm text-gray-600">View important announcements and updates from management</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Announcements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {residentAnnouncements.map((announcement) => (
                <div key={announcement.id} className="rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {getTypeBadge(announcement.type)}
                        <span className="text-xs text-gray-500">
                          {announcement.sentDate && new Date(announcement.sentDate).toLocaleDateString()}
                        </span>
                      </div>
                      <h3 className="text-lg mb-2">{announcement.title}</h3>
                      <p className="text-sm text-gray-600">{announcement.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Admin view
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Communication & Notifications</h2>
          <p className="text-sm text-gray-600">Create and manage system-wide announcements and notifications</p>
        </div>
        <Dialog open={isAnnouncementDialogOpen} onOpenChange={setIsAnnouncementDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Announcement
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle>{editingAnnouncement ? 'Edit Announcement' : 'Create New Announcement'}</DialogTitle>
              <DialogDescription>
                {editingAnnouncement ? 'Update announcement details' : 'Create an announcement to send to residents'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateAnnouncement} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="type">Type</Label>
                <Select
                  value={newAnnouncement.type}
                  onValueChange={(value) => setNewAnnouncement({ ...newAnnouncement, type: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="info">Information</SelectItem>
                    <SelectItem value="warning">Warning</SelectItem>
                    <SelectItem value="urgent">Urgent Alert</SelectItem>
                    <SelectItem value="event">Event</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="audience">Audience</Label>
                <Select
                  value={newAnnouncement.audience}
                  onValueChange={(value) =>
                    setNewAnnouncement({ ...newAnnouncement, audience: value })
                  }
                  required
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Residents (150 people)</SelectItem>
                    <SelectItem value="building-a">Tower A Only (48 people)</SelectItem>
                    <SelectItem value="building-b">Tower B Only (45 people)</SelectItem>
                    <SelectItem value="building-c">Tower C Only (47 people)</SelectItem>
                    <SelectItem value="building-d">Tower D Only (10 people)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={newAnnouncement.title}
                  onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
                  placeholder="Announcement title"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  value={newAnnouncement.message}
                  onChange={(e) => setNewAnnouncement({ ...newAnnouncement, message: e.target.value })}
                  placeholder="Enter your announcement message"
                  rows={5}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="scheduledDate">Schedule Date</Label>
                <Input
                  id="scheduledDate"
                  type="date"
                  value={newAnnouncement.scheduledDate}
                  onChange={(e) => setNewAnnouncement({ ...newAnnouncement, scheduledDate: e.target.value })}
                  required
                />
                <p className="text-xs text-gray-500">
                  Announcements with today's date or earlier will be sent immediately
                </p>
              </div>

              <Button type="submit" className="w-full">
                <Megaphone className="mr-2 h-4 w-4" />
                {editingAnnouncement ? 'Update Announcement' : 'Create Announcement'}
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
                <p className="text-sm text-gray-600">Total Sent</p>
                <p className="mt-1 text-2xl text-green-600">{sentCount}</p>
                <p className="mt-1 text-xs text-gray-500">Announcements</p>
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
                <p className="text-sm text-gray-600">Scheduled</p>
                <p className="mt-1 text-2xl text-yellow-600">{scheduledCount}</p>
                <p className="mt-1 text-xs text-gray-500">Upcoming</p>
              </div>
              <div className="rounded-lg bg-yellow-50 p-3">
                <Calendar className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Recipients</p>
                <p className="mt-1 text-2xl text-blue-600">{totalRecipients}</p>
                <p className="mt-1 text-xs text-gray-500">Messages delivered</p>
              </div>
              <div className="rounded-lg bg-blue-50 p-3">
                <Send className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Announcements</p>
                <p className="mt-1 text-2xl">{announcements.length}</p>
                <p className="mt-1 text-xs text-gray-500">All time</p>
              </div>
              <div className="rounded-lg bg-purple-50 p-3">
                <Megaphone className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Announcements Management */}
      <Card>
        <CardHeader>
          <CardTitle>Announcement Management</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All ({announcements.length})</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled ({scheduledCount})</TabsTrigger>
              <TabsTrigger value="sent">Sent ({sentCount})</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Audience</TableHead>
                    <TableHead>Scheduled</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Recipients</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {announcements.map((announcement) => (
                    <TableRow key={announcement.id}>
                      <TableCell>{announcement.id}</TableCell>
                      <TableCell className="max-w-xs truncate">{announcement.title}</TableCell>
                      <TableCell>{getTypeBadge(announcement.type)}</TableCell>
                      <TableCell>{getAudienceText(announcement.audience)}</TableCell>
                      <TableCell>{new Date(announcement.scheduledDate).toLocaleDateString()}</TableCell>
                      <TableCell>{getStatusBadge(announcement.status)}</TableCell>
                      <TableCell>{announcement.recipients}</TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          {announcement.status === 'scheduled' && (
                            <>
                              <Button size="sm" onClick={() => handleSendNow(announcement.id)}>
                                <Send className="mr-1 h-3 w-3" />
                                Send Now
                              </Button>
                              <Button size="sm" variant="outline" onClick={() => handleEditAnnouncement(announcement)}>
                                Edit
                              </Button>
                            </>
                          )}
                          <Button size="sm" variant="outline" onClick={() => handleDeleteAnnouncement(announcement.id)}>
                            Delete
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="scheduled" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Audience</TableHead>
                    <TableHead>Scheduled Date</TableHead>
                    <TableHead>Recipients</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {announcements
                    .filter((a) => a.status === 'scheduled')
                    .map((announcement) => (
                      <TableRow key={announcement.id}>
                        <TableCell>{announcement.title}</TableCell>
                        <TableCell>{getTypeBadge(announcement.type)}</TableCell>
                        <TableCell>{getAudienceText(announcement.audience)}</TableCell>
                        <TableCell>{new Date(announcement.scheduledDate).toLocaleDateString()}</TableCell>
                        <TableCell>{announcement.recipients}</TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" onClick={() => handleSendNow(announcement.id)}>
                              <Send className="mr-1 h-3 w-3" />
                              Send Now
                            </Button>
                            <Button size="sm" variant="outline" onClick={() => handleEditAnnouncement(announcement)}>
                              Edit
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TabsContent>

            <TabsContent value="sent" className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Audience</TableHead>
                    <TableHead>Sent Date</TableHead>
                    <TableHead>Recipients</TableHead>
                    <TableHead>Message</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {announcements
                    .filter((a) => a.status === 'sent')
                    .map((announcement) => (
                      <TableRow key={announcement.id}>
                        <TableCell>{announcement.title}</TableCell>
                        <TableCell>{getTypeBadge(announcement.type)}</TableCell>
                        <TableCell>{getAudienceText(announcement.audience)}</TableCell>
                        <TableCell>{announcement.sentDate && new Date(announcement.sentDate).toLocaleDateString()}</TableCell>
                        <TableCell>{announcement.recipients}</TableCell>
                        <TableCell className="max-w-xs truncate">{announcement.message}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
