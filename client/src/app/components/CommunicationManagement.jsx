'use client'

import { useState, useEffect, useCallback } from 'react'; // Added useCallback
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
import { DatePicker } from './ui/date-picker';
import { Plus, Send, Bell, Megaphone, Calendar, AlertCircle, Info, CheckCircle, Trash2, Edit } from 'lucide-react';
import { toast } from 'sonner';
import { format } from 'date-fns';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";

const API_URL = '/api/Announcements';

export default function CommunicationManagement({ user }) {
  const isAdmin = user.role === 'Admin';

  const [announcements, setAnnouncements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Dialog & Form State
  const [isAnnouncementDialogOpen, setIsAnnouncementDialogOpen] = useState(false);
  const [editingAnnouncement, setEditingAnnouncement] = useState(null);
  const [newAnnouncement, setNewAnnouncement] = useState({
    title: '',
    message: '',
    type: 'info',
    audience: 'all',
    scheduledDate: '',
  });

  // --- 1. Fetch Data (Fixed with useCallback) ---
  const fetchAnnouncements = useCallback(async () => {
    setIsLoading(true);
    try {
      // If resident, use the specific endpoint to only see "sent" items
      const endpoint = isAdmin ? API_URL : `${API_URL}/resident`;
      const response = await fetch(endpoint, {
        headers: { 'Authorization': `Bearer ${user.token}` }
      });
      if (!response.ok) throw new Error('Failed to fetch announcements');
      const data = await response.json();
      setAnnouncements(data);
    } catch (error) {
      console.error(error);
      toast.error('Failed to load announcements');
    } finally {
      setIsLoading(false);
    }
  }, [isAdmin, user.token]); // Re-create function only if isAdmin changes

  useEffect(() => {
    fetchAnnouncements();
  }, [fetchAnnouncements]); // Now safe to include in dependencies

  // --- 2. Create / Update ---
  const handleSaveAnnouncement = async (e) => {
    e.preventDefault();

    const payload = {
      title: newAnnouncement.title,
      message: newAnnouncement.message,
      type: newAnnouncement.type,
      audience: newAnnouncement.audience,
      scheduledDate: newAnnouncement.scheduledDate ? format(newAnnouncement.scheduledDate, 'yyyy-MM-dd') : new Date().toISOString(),
      createdBy: user.name
    };

    try {
      let response;
      if (editingAnnouncement) {
        // Update
        response = await fetch(`${API_URL}/${editingAnnouncement.announcementID}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          },
          body: JSON.stringify({ ...payload, announcementID: editingAnnouncement.announcementID, status: editingAnnouncement.status }),
        });
      } else {
        // Create
        response = await fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`
          },
          body: JSON.stringify(payload),
        });
      }

      if (!response.ok) throw new Error('Failed to save announcement');

      toast.success(editingAnnouncement ? 'Updated successfully!' : 'Created successfully!');
      fetchAnnouncements(); // Refresh list
      setIsAnnouncementDialogOpen(false);
      resetForm();
    } catch (error) {
      toast.error(error.message);
    }
  };

  // --- 3. Send Now (Force Status Update) ---
  const handleSendNow = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}/send`, {
        method: 'PUT',
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${user.token}` }
      });
      if (!response.ok) throw new Error('Failed to send');
      toast.success('Announcement sent immediately!');
      fetchAnnouncements();
    } catch (error) {
      toast.error(error.message);
    }
  };

  // --- 4. Delete ---
  const handleDeleteAnnouncement = async (id) => {
    if (!window.confirm('Are you sure you want to delete this announcement?')) return;

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${user.token}` }
      });
      if (!response.ok) throw new Error('Failed to delete');
      toast.success('Announcement deleted!');
      fetchAnnouncements();
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Helpers
  const openEditDialog = (announcement) => {
    setEditingAnnouncement(announcement);
    setNewAnnouncement({
      title: announcement.title,
      message: announcement.message,
      type: announcement.type,
      audience: announcement.audience,
      scheduledDate: new Date(announcement.scheduledDate), // Format for DatePicker
    });
    setIsAnnouncementDialogOpen(true);
  };

  const resetForm = () => {
    setEditingAnnouncement(null);
    setNewAnnouncement({ title: '', message: '', type: 'info', audience: 'all', scheduledDate: '' });
  };

  const getTypeBadge = (type) => {
    switch (type) {
      case 'info': return <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"><Info className="mr-1 h-3 w-3" />Info</Badge>;
      case 'warning': return <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300"><AlertCircle className="mr-1 h-3 w-3" />Warning</Badge>;
      case 'urgent': return <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"><Bell className="mr-1 h-3 w-3" />Urgent</Badge>;
      case 'event': return <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"><Calendar className="mr-1 h-3 w-3" />Event</Badge>;
      default: return <Badge variant="secondary">{type}</Badge>;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'scheduled': return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">Scheduled</Badge>;
      case 'sent': return <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">Sent</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
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

  // --- UI RENDER ---

  if (isLoading) return <div className="p-8 text-center">Loading announcements...</div>;

  // Resident View
  if (!isAdmin) {
    return (
      <div className="space-y-6">
        <div>
          <h2>Notifications & Announcements</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">Latest updates from management</p>
        </div>
        <Card className="glass border-0!">
          <CardHeader><CardTitle>Recent Announcements</CardTitle></CardHeader>
          <CardContent>
            <div className="space-y-4">
              {announcements.length === 0 ? <p className="text-center text-gray-500 dark:text-gray-400">No announcements yet.</p> : null}
              {announcements.map((announcement) => (
                <div key={announcement.announcementID} className="rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {getTypeBadge(announcement.type)}
                        <span className="text-xs text-gray-500">
                          {new Date(announcement.sentDate || announcement.scheduledDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{announcement.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap">{announcement.message}</p>
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

  // Admin View
  const sentCount = announcements.filter(a => a.status === 'sent').length;
  const scheduledCount = announcements.filter(a => a.status === 'scheduled').length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Communication Management</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">Manage system-wide announcements</p>
        </div>
        <Dialog open={isAnnouncementDialogOpen} onOpenChange={(open) => { setIsAnnouncementDialogOpen(open); if (!open) resetForm(); }}>
          <DialogTrigger asChild>
            <Button><Plus className="mr-2 h-4 w-4" /> Create Announcement</Button>
          </DialogTrigger>
          <DialogContent className="max-w-xl max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editingAnnouncement ? 'Edit Announcement' : 'Create New Announcement'}</DialogTitle>
              <DialogDescription>Notify residents about events, maintenance, or alerts.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSaveAnnouncement} className="space-y-4">
              <div className="space-y-2">
                <Label>Type</Label>
                <Select value={newAnnouncement.type} onValueChange={(val) => setNewAnnouncement({ ...newAnnouncement, type: val })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="info">Information</SelectItem>
                    <SelectItem value="warning">Warning</SelectItem>
                    <SelectItem value="urgent">Urgent Alert</SelectItem>
                    <SelectItem value="event">Event</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Audience</Label>
                <Select value={newAnnouncement.audience} onValueChange={(val) => setNewAnnouncement({ ...newAnnouncement, audience: val })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Residents</SelectItem>
                    <SelectItem value="building-a">Tower A</SelectItem>
                    <SelectItem value="building-b">Tower B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Title</Label>
                <Input value={newAnnouncement.title} onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })} required />
              </div>
              <div className="space-y-2">
                <Label>Message</Label>
                <Textarea value={newAnnouncement.message} onChange={(e) => setNewAnnouncement({ ...newAnnouncement, message: e.target.value })} required rows={5} />
              </div>
              <div className="space-y-2">
                <Label>Scheduled Date</Label>
                <DatePicker
                  date={newAnnouncement.scheduledDate}
                  setDate={(date) => setNewAnnouncement({ ...newAnnouncement, scheduledDate: date })}
                  fromDate={new Date()}
                />
                <p className="text-xs text-gray-500">If date is today or earlier, it sends immediately.</p>
              </div>
              <Button type="submit" className="w-full">
                <Megaphone className="mr-2 h-4 w-4" /> {editingAnnouncement ? 'Update' : 'Create'}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <GradientCard>
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-600 dark:text-gray-300">Sent</p><p className="text-2xl font-bold text-green-600 dark:text-green-400">{sentCount}</p></div>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded"><CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" /></div>
          </div>
        </GradientCard>
        <GradientCard>
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-600 dark:text-gray-300">Scheduled</p><p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{scheduledCount}</p></div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded"><Calendar className="h-6 w-6 text-yellow-600 dark:text-yellow-400" /></div>
          </div>
        </GradientCard>
        <GradientCard>
          <div className="flex items-center justify-between">
            <div><p className="text-sm text-gray-600 dark:text-gray-300">Total</p><p className="text-2xl font-bold text-purple-600 dark:text-purple-400">{announcements.length}</p></div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded"><Megaphone className="h-6 w-6 text-purple-600 dark:text-purple-400" /></div>
          </div>
        </GradientCard>
      </div>

      {/* Table */}
      <Card className="glass border-0!">
        <CardHeader><CardTitle>Announcements</CardTitle></CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
              <TabsTrigger value="sent">Sent</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="mt-4">
              <AnnouncementTable
                data={announcements}
                onSend={handleSendNow}
                onEdit={openEditDialog}
                onDelete={handleDeleteAnnouncement}
                getTypeBadge={getTypeBadge}
                getStatusBadge={getStatusBadge}
              />
            </TabsContent>
            <TabsContent value="scheduled" className="mt-4">
              <AnnouncementTable
                data={announcements.filter(a => a.status === 'scheduled')}
                onSend={handleSendNow}
                onEdit={openEditDialog}
                onDelete={handleDeleteAnnouncement}
                getTypeBadge={getTypeBadge}
                getStatusBadge={getStatusBadge}
              />
            </TabsContent>
            <TabsContent value="sent" className="mt-4">
              <AnnouncementTable
                data={announcements.filter(a => a.status === 'sent')}
                onSend={handleSendNow}
                onEdit={openEditDialog}
                onDelete={handleDeleteAnnouncement}
                getTypeBadge={getTypeBadge}
                getStatusBadge={getStatusBadge}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

function AnnouncementTable({ data, onSend, onEdit, onDelete, getTypeBadge, getStatusBadge }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Audience</TableHead>
          <TableHead>Schedule Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((announcement) => (
          <TableRow key={announcement.announcementID}>
            <TableCell className="font-medium">{announcement.title}</TableCell>
            <TableCell>{getTypeBadge(announcement.type)}</TableCell>
            <TableCell className="capitalize">{announcement.audience}</TableCell>
            <TableCell>{format(new Date(announcement.scheduledDate), 'dd MMM yyyy')}</TableCell>
            <TableCell>{getStatusBadge(announcement.status)}</TableCell>
            <TableCell>
              <div className="flex gap-2">
                {announcement.status === 'scheduled' && (
                  <Button size="sm" onClick={() => onSend(announcement.announcementID)}>
                    <Send className="mr-1 h-3 w-3" /> Send
                  </Button>
                )}
                <Button size="sm" variant="outline" onClick={() => onEdit(announcement)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="text-red-600" onClick={() => onDelete(announcement.announcementID)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}