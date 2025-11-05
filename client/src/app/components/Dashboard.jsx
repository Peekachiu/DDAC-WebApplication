'use client'

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Users, Calendar, DollarSign, MessageSquare, TrendingUp, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Badge } from './ui/badge';

export default function Dashboard({ user }) {
  const isAdmin = user.role === 'Admin';

  // Different stats based on role
  const stats = isAdmin ? [
    {
      title: 'Total Residents',
      value: '150',
      icon: Users,
      description: 'Active residents',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Pending Approvals',
      value: '8',
      icon: Clock,
      description: 'Bookings & requests',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      title: 'Active Visitors',
      value: '12',
      icon: Users,
      description: 'Currently checked in',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Total Revenue',
      value: '$67,500',
      icon: DollarSign,
      description: 'This month',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
  ] : [
    {
      title: 'Upcoming Bookings',
      value: '3',
      icon: Calendar,
      description: 'Next 7 days',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Pending Payments',
      value: '$450',
      icon: DollarSign,
      description: 'Maintenance fee due',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      title: 'Active Visitors',
      value: '2',
      icon: Users,
      description: 'Registered today',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Open Requests',
      value: '1',
      icon: MessageSquare,
      description: 'Pending response',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'booking',
      title: 'Tennis Court Booking Confirmed',
      description: 'October 25, 2025 at 2:00 PM',
      time: '2 hours ago',
      status: 'success',
    },
    {
      id: 2,
      type: 'payment',
      title: 'Maintenance Fee Payment Due',
      description: 'Amount: $450 - Due: October 31, 2025',
      time: '1 day ago',
      status: 'pending',
    },
    {
      id: 3,
      type: 'complaint',
      title: 'Maintenance Request Updated',
      description: 'Air conditioning repair in progress',
      time: '2 days ago',
      status: 'progress',
    },
    {
      id: 4,
      type: 'visitor',
      title: 'Visitor Check-in',
      description: 'John Doe checked in at main entrance',
      time: '3 days ago',
      status: 'success',
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Community BBQ Event',
      date: 'October 28, 2025',
      time: '6:00 PM - 9:00 PM',
      location: 'Event Hall',
    },
    {
      id: 2,
      title: 'Yoga Class',
      date: 'October 26, 2025',
      time: '7:00 AM - 8:00 AM',
      location: 'Sports Center',
    },
    {
      id: 3,
      title: 'Building Maintenance',
      date: 'October 30, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Tower A',
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-orange-600" />;
      case 'progress':
        return <TrendingUp className="h-5 w-5 text-blue-600" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-1">Welcome back, {user.name}!</h2>
        <p className="text-gray-600">Here's what's happening with your residence</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="mt-1 text-2xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-gray-500">{stat.description}</p>
                </div>
                <div className={`${stat.bgColor} rounded-lg p-3`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-4">
                  <div className="mt-1">{getStatusIcon(activity.status)}</div>
                  <div className="flex-1">
                    <p className="text-sm">{activity.title}</p>
                    <p className="text-xs text-gray-500">{activity.description}</p>
                  </div>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="rounded-lg border p-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm">{event.title}</p>
                      <p className="mt-1 text-xs text-gray-500">
                        <Calendar className="mr-1 inline h-3 w-3" />
                        {event.date}
                      </p>
                      <p className="mt-1 text-xs text-gray-500">
                        <Clock className="mr-1 inline h-3 w-3" />
                        {event.time}
                      </p>
                    </div>
                    <Badge variant="outline">{event.location}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <button className="rounded-lg border border-gray-200 p-4 text-left transition hover:border-blue-500 hover:bg-blue-50">
              <Users className="mb-2 h-5 w-5 text-blue-600" />
              <p className="text-sm">Register Visitor</p>
            </button>
            <button className="rounded-lg border border-gray-200 p-4 text-left transition hover:border-green-500 hover:bg-green-50">
              <Calendar className="mb-2 h-5 w-5 text-green-600" />
              <p className="text-sm">Book Facility</p>
            </button>
            <button className="rounded-lg border border-gray-200 p-4 text-left transition hover:border-purple-500 hover:bg-purple-50">
              <DollarSign className="mb-2 h-5 w-5 text-purple-600" />
              <p className="text-sm">Pay Fees</p>
            </button>
            <button className="rounded-lg border border-gray-200 p-4 text-left transition hover:border-orange-500 hover:bg-orange-50">
              <MessageSquare className="mb-2 h-5 w-5 text-orange-600" />
              <p className="text-sm">Submit Request</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
