'use client'

import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Bell, AlertCircle, Info, Calendar, Trash2, Check } from 'lucide-react';
import { toast } from 'sonner';

// Ensure this matches your backend port
const API_URL = 'http://localhost:5016/api/Announcements';

function ResidentNotifications({ user }) {
  const [notifications, setNotifications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // --- 1. Fetch Data from Backend ---
  const fetchNotifications = useCallback(async () => {
    setIsLoading(true);
    try {
      // Fetch only 'sent' announcements for residents
      const response = await fetch(`${API_URL}/resident`);
      if (!response.ok) throw new Error('Failed to fetch notifications');
      
      const data = await response.json();
      
      // Transform backend data to frontend structure
      // Note: DB doesn't persist 'read' status per user yet, so we default to false
      const formattedData = data.map(item => ({
        id: item.announcementID,
        title: item.title,
        message: item.message,
        type: item.type.toLowerCase(),
        date: item.sentDate || item.scheduledDate,
        read: false 
      }));

      setNotifications(formattedData);
    } catch (error) {
      console.error("Error fetching notifications:", error);
      toast.error('Failed to load notifications');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  // --- 2. Local Handlers ---
  const handleMarkAsRead = (id) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)));
    toast.success('Notification marked as read');
  };

  const handleMarkAsUnread = (id) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: false } : n)));
    toast.success('Notification marked as unread');
  };

  // Removes notification from the current view (refreshing page will restore it unless we add DB logic)
  const handleDelete = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
    toast.success('Notification removed');
  };

  const handleMarkAllAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
    toast.success('All notifications marked as read');
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'info': return <Info className="h-5 w-5 text-blue-600" />;
      case 'warning': return <AlertCircle className="h-5 w-5 text-orange-600" />;
      case 'urgent': return <Bell className="h-5 w-5 text-red-600" />;
      case 'event': return <Calendar className="h-5 w-5 text-purple-600" />;
      default: return <Info className="h-5 w-5 text-blue-600" />;
    }
  };

  const getTypeBadge = (type) => {
    switch (type) {
      case 'info': return <Badge className="bg-blue-100 text-blue-800">Info</Badge>;
      case 'warning': return <Badge className="bg-orange-100 text-orange-800">Warning</Badge>;
      case 'urgent': return <Badge className="bg-red-100 text-red-800">Urgent</Badge>;
      case 'event': return <Badge className="bg-purple-100 text-purple-800">Event</Badge>;
      default: return <Badge variant="secondary">{type}</Badge>;
    }
  };

  const unreadNotifications = notifications.filter((n) => !n.read);
  const readNotifications = notifications.filter((n) => n.read);

  const renderNotification = (notification) => (
    <Card key={notification.id} className={!notification.read ? 'border-l-4 border-l-blue-500' : ''}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="mt-1 rounded-lg bg-gray-50 p-3">
            {getTypeIcon(notification.type)}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <h3 className="text-sm font-medium">{notification.title}</h3>
                  {getTypeBadge(notification.type)}
                  {!notification.read && (
                    <Badge className="bg-blue-100 text-blue-800 text-xs">New</Badge>
                  )}
                </div>
                <p className="mb-2 text-sm text-gray-600 whitespace-pre-wrap">{notification.message}</p>
                <p className="text-xs text-gray-500">
                  {new Date(notification.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
            </div>
            <div className="mt-3 flex gap-2">
              {!notification.read ? (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleMarkAsRead(notification.id)}
                >
                  <Check className="mr-1 h-3 w-3" />
                  Mark as Read
                </Button>
              ) : (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleMarkAsUnread(notification.id)}
                >
                  Mark as Unread
                </Button>
              )}
              <Button
                size="sm"
                variant="outline"
                className="text-red-600 hover:bg-red-50"
                onClick={() => handleDelete(notification.id)}
              >
                <Trash2 className="mr-1 h-3 w-3" />
                Dismiss
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  if (isLoading) return <div className="p-12 text-center">Loading notifications...</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2>Notifications</h2>
          <p className="text-sm text-gray-600">
            View important announcements and updates from management
          </p>
        </div>
        <div className="flex gap-2">
          {unreadNotifications.length > 0 && (
            <>
              <Badge className="bg-red-100 text-red-800">
                {unreadNotifications.length} Unread
              </Badge>
              <Button size="sm" onClick={handleMarkAllAsRead}>
                Mark All as Read
              </Button>
            </>
          )}
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All ({notifications.length})</TabsTrigger>
          <TabsTrigger value="unread">Unread ({unreadNotifications.length})</TabsTrigger>
          <TabsTrigger value="read">Read ({readNotifications.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-4 space-y-4">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Bell className="mb-4 h-12 w-12 text-gray-400" />
              <p className="text-gray-600">No notifications found</p>
            </div>
          ) : (
            notifications.map((notification) => renderNotification(notification))
          )}
        </TabsContent>

        <TabsContent value="unread" className="mt-4 space-y-4">
          {unreadNotifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Bell className="mb-4 h-12 w-12 text-gray-400" />
              <p className="text-gray-600">No unread notifications</p>
            </div>
          ) : (
            unreadNotifications.map((notification) => renderNotification(notification))
          )}
        </TabsContent>

        <TabsContent value="read" className="mt-4 space-y-4">
          {readNotifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Bell className="mb-4 h-12 w-12 text-gray-400" />
              <p className="text-gray-600">No read notifications</p>
            </div>
          ) : (
            readNotifications.map((notification) => renderNotification(notification))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default ResidentNotifications;