'use client'

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Users, Calendar, DollarSign, MessageSquare, TrendingUp, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Badge } from './ui/badge';
import { toast } from 'sonner';
import { formatDistanceToNow } from 'date-fns';

// Assuming your backend is on port 5016
const API_URL = '/api/Dashboard/resident-stats';

export default function Dashboard({ user }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResidentData = async () => {
      try {
        // Append user ID to the endpoint
        const response = await fetch(`${API_URL}/${user.id}`, {
          headers: { 'Authorization': `Bearer ${user.token}` }
        });

        if (!response.ok) {
          throw new Error(`Server Error: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Fetch Error:", error);
        setError(error.message);
        toast.error("Failed to load dashboard");
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      fetchResidentData();
    }
  }, [user]);

  if (loading) return <div className="p-8 text-center text-muted-foreground">Loading dashboard...</div>;
  if (error) return <div className="p-8 text-center text-destructive">Error loading dashboard data.</div>;
  if (!data) return <div className="p-8 text-center text-muted-foreground">No data found.</div>;

  const stats = [
    {
      title: 'Upcoming Bookings',
      value: data.upcomingBookings,
      icon: Calendar,
      description: 'Reserved facilities',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Pending Payments',
      value: `RM ${data.pendingPayments}`,
      icon: DollarSign,
      description: 'Management fee due',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Active Visitors',
      value: data.activeVisitors,
      icon: Users,
      description: 'Currently checked in',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Open Requests',
      value: data.openRequests,
      icon: MessageSquare,
      description: 'Pending response',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const getStatusIcon = (status) => {
    switch (status?.toLowerCase()) {
      case 'success': return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'progress': return <TrendingUp className="h-5 w-5 text-blue-600" />;
      case 'info': return <Users className="h-5 w-5 text-purple-600" />;
      default: return <Clock className="h-5 w-5 text-gray-400" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-1 text-2xl font-semibold tracking-tight text-foreground">Welcome back, {user.name}!</h2>
        <p className="text-muted-foreground">Here is whats happening with your residence</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="glass border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="mt-1 text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.description}</p>
                </div>
                <div className={`${stat.bgColor} rounded-lg p-3 bg-opacity-50`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activities */}
        <Card className="glass border-0">
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.recentActivities.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">No recent activity found.</p>
              ) : (
                data.recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 border-b border-white/10 pb-3 last:border-0">
                    <div className="mt-1">{getStatusIcon(activity.status)}</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.description}</p>
                    </div>
                    <p className="text-xs text-muted-foreground whitespace-nowrap">
                      {formatDistanceToNow(new Date(activity.time), { addSuffix: true })}
                    </p>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card className="glass border-0">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.upcomingEvents.length === 0 ? (
                <p className="text-sm text-muted-foreground text-center py-4">No upcoming bookings or events.</p>
              ) : (
                data.upcomingEvents.map((event, index) => (
                  <div key={index} className="rounded-lg border border-white/20 bg-white/5 p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm font-medium text-foreground">{event.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="inline h-3 w-3" /> {event.date}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="inline h-3 w-3" /> {event.time}
                        </p>
                      </div>
                      <Badge variant="outline" className="border-white/20 text-foreground">{event.location}</Badge>
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="glass border-0">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <button onClick={() => window.location.href = '/resident/visitors'} className="rounded-lg border border-white/20 bg-white/5 p-4 text-left transition hover:bg-white/10 hover:border-blue-500/50">
              <Users className="mb-2 h-5 w-5 text-blue-500" />
              <p className="text-sm font-medium text-foreground">Register Visitor</p>
            </button>
            <button onClick={() => window.location.href = '/resident/sports'} className="rounded-lg border border-white/20 bg-white/5 p-4 text-left transition hover:bg-white/10 hover:border-green-500/50">
              <Calendar className="mb-2 h-5 w-5 text-green-500" />
              <p className="text-sm font-medium text-foreground">Book Facility</p>
            </button>
            <button onClick={() => window.location.href = '/resident/management'} className="rounded-lg border border-white/20 bg-white/5 p-4 text-left transition hover:bg-white/10 hover:border-purple-500/50">
              <DollarSign className="mb-2 h-5 w-5 text-purple-500" />
              <p className="text-sm font-medium text-foreground">Pay Fees</p>
            </button>
            <button onClick={() => window.location.href = '/resident/complaints'} className="rounded-lg border border-white/20 bg-white/5 p-4 text-left transition hover:bg-white/10 hover:border-orange-500/50">
              <MessageSquare className="mb-2 h-5 w-5 text-orange-500" />
              <p className="text-sm font-medium text-foreground">Submit Request</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}