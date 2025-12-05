'use client'

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Users, Calendar, DollarSign, MessageSquare, TrendingUp, CheckCircle, Clock, AlertCircle, Building2, UserCheck } from 'lucide-react';
import { Badge } from './ui/badge';
import { toast } from 'sonner';
import { formatDistanceToNow } from 'date-fns';

const API_URL = 'http://localhost:5016/api/Dashboard/stats';

export default function AdminDashboard({ user }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch dashboard data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Dashboard Error:", error);
        toast.error("Failed to load live dashboard data");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-muted-foreground">Loading dashboard...</div>;
  }

  if (!data) {
    return <div className="p-8 text-center text-destructive">Error loading data.</div>;
  }

  const stats = [
    {
      title: 'Total Residents',
      value: data.totalResidents,
      icon: Users,
      description: 'Active residents',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      title: 'Active Visitors',
      value: data.activeVisitors,
      icon: UserCheck,
      description: 'Currently checked in',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      title: 'Pending Requests',
      value: data.pendingRequests,
      icon: Clock,
      description: 'Awaiting response',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      title: 'Monthly Revenue',
      value: `RM ${data.monthlyRevenue}`,
      icon: DollarSign,
      description: 'This month',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
  ];

  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case 'success': return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'pending': return <Clock className="h-5 w-5 text-orange-600" />;
      case 'urgent': return <AlertCircle className="h-5 w-5 text-red-600" />;
      case 'info': return <TrendingUp className="h-5 w-5 text-blue-600" />;
      default: return <AlertCircle className="h-5 w-5 text-gray-600" />;
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return <Badge className="bg-red-100 text-red-800 border-red-200">High Priority</Badge>;
      case 'medium': return <Badge className="bg-orange-100 text-orange-800 border-orange-200">Medium</Badge>;
      case 'low': return <Badge className="bg-gray-100 text-gray-800 border-gray-200">Low</Badge>;
      default: return <Badge variant="outline" className="border-white/20 text-foreground">{priority}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">Admin Dashboard</h2>
        <p className="text-muted-foreground">Overview of {new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
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
                <p className="text-sm text-muted-foreground">No recent activities.</p>
              ) : (
                data.recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 border-b border-white/10 pb-3 last:border-0">
                    <div className="mt-1">{getStatusIcon(activity.status)}</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.description}</p>
                    </div>
                    {/* If you get an invalid date error here, verify backend returns valid ISO string */}
                    <p className="text-xs text-muted-foreground whitespace-nowrap">
                      {formatDistanceToNow(new Date(activity.time), { addSuffix: true })}
                    </p>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>

        {/* Building Occupancy */}
        <Card className="glass border-0">
          <CardHeader>
            <CardTitle>Building Occupancy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.occupancy.length === 0 ? (
                <p className="text-sm text-muted-foreground">No building data available.</p>
              ) : (
                data.occupancy.map((building, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-foreground">{building.building}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {building.occupied}/{building.total} units ({building.percentage}%)
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-secondary/50">
                      <div
                        className="h-full bg-primary transition-all"
                        style={{ width: `${building.percentage}%` }}
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Approvals */}
      <Card className="glass border-0">
        <CardHeader>
          <CardTitle>Pending Approvals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {data.pendingApprovals.length === 0 ? (
              <p className="text-sm text-muted-foreground">No pending approvals.</p>
            ) : (
              data.pendingApprovals.map((approval, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border border-white/20 bg-white/5 p-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="border-white/20 text-foreground">{approval.type}</Badge>
                      <p className="text-sm font-medium text-foreground">{approval.item}</p>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {approval.requester} • {approval.date}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    {getPriorityBadge(approval.priority)}
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="glass border-0">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <button onClick={() => window.location.href = '/admin/residents'} className="rounded-lg border border-white/20 bg-white/5 p-4 text-left transition hover:bg-white/10 hover:border-blue-500/50">
              <Users className="mb-2 h-5 w-5 text-blue-500" />
              <p className="text-sm font-medium text-foreground">Manage Residents</p>
            </button>
            <button onClick={() => window.location.href = '/admin/complaints'} className="rounded-lg border border-white/20 bg-white/5 p-4 text-left transition hover:bg-white/10 hover:border-green-500/50">
              <MessageSquare className="mb-2 h-5 w-5 text-green-500" />
              <p className="text-sm font-medium text-foreground">Review Requests</p>
            </button>
            <button onClick={() => window.location.href = '/admin/financial'} className="rounded-lg border border-white/20 bg-white/5 p-4 text-left transition hover:bg-white/10 hover:border-purple-500/50">
              <DollarSign className="mb-2 h-5 w-5 text-purple-500" />
              <p className="text-sm font-medium text-foreground">Financial Reports</p>
            </button>
            <button onClick={() => window.location.href = '/admin/bookings'} className="rounded-lg border border-white/20 bg-white/5 p-4 text-left transition hover:bg-white/10 hover:border-orange-500/50">
              <Calendar className="mb-2 h-5 w-5 text-orange-500" />
              <p className="text-sm font-medium text-foreground">View All Bookings</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}