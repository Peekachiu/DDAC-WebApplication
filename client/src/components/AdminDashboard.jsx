import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Users, Calendar, DollarSign, MessageSquare, TrendingUp, CheckCircle, Clock, AlertCircle, Building2, UserCheck } from 'lucide-react';
import { Badge } from './ui/badge';

export default function AdminDashboard({ user }) {
  const stats = [
    {
      title: 'Total Residents',
      value: '150',
      icon: Users,
      description: 'Active residents',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      change: '+5 this month',
    },
    {
      title: 'Active Visitors',
      value: '12',
      icon: UserCheck,
      description: 'Currently checked in',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      change: '8 today',
    },
    {
      title: 'Pending Requests',
      value: '8',
      icon: Clock,
      description: 'Awaiting response',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      change: '3 high priority',
    },
    {
      title: 'Monthly Revenue',
      value: '$67,500',
      icon: DollarSign,
      description: 'October 2025',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      change: '+12% vs last month',
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'resident',
      title: 'New Resident Registration',
      description: 'Emily Chen registered in Unit D-401',
      time: '1 hour ago',
      status: 'success',
    },
    {
      id: 2,
      type: 'complaint',
      title: 'High Priority Maintenance Request',
      description: 'Unit B-205: Elevator malfunction reported',
      time: '2 hours ago',
      status: 'urgent',
    },
    {
      id: 3,
      type: 'payment',
      title: 'Payment Received',
      description: 'Unit A-101: $450 maintenance fee paid',
      time: '3 hours ago',
      status: 'success',
    },
    {
      id: 4,
      type: 'booking',
      title: 'Event Hall Booking',
      description: 'Unit C-304: Main Hall booked for Nov 15',
      time: '4 hours ago',
      status: 'pending',
    },
    {
      id: 5,
      type: 'visitor',
      title: 'Multiple Visitor Check-ins',
      description: '8 visitors checked in across all units',
      time: '5 hours ago',
      status: 'info',
    },
  ];

  const buildingOccupancy = [
    { building: 'Tower A', total: 50, occupied: 48, occupancy: 96 },
    { building: 'Tower B', total: 50, occupied: 45, occupancy: 90 },
    { building: 'Tower C', total: 50, occupied: 47, occupancy: 94 },
    { building: 'Tower D', total: 50, occupied: 10, occupancy: 20 },
  ];

  const pendingApprovals = [
    {
      id: 1,
      type: 'Booking',
      item: 'Event Hall - Wedding Reception',
      requester: 'Sarah Johnson (Unit B-205)',
      date: 'Nov 20, 2025',
      priority: 'high',
    },
    {
      id: 2,
      type: 'Maintenance',
      item: 'AC Installation Request',
      requester: 'John Smith (Unit A-101)',
      date: 'Oct 25, 2025',
      priority: 'medium',
    },
    {
      id: 3,
      type: 'Complaint',
      item: 'Noise Complaint - Late Hours',
      requester: 'Mike Wilson (Unit C-304)',
      date: 'Oct 24, 2025',
      priority: 'low',
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'pending':
        return <Clock className="h-5 w-5 text-orange-600" />;
      case 'urgent':
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      case 'info':
        return <TrendingUp className="h-5 w-5 text-blue-600" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-600" />;
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'high':
        return <Badge className="bg-red-100 text-red-800">High Priority</Badge>;
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
      <div>
        <h2>Admin Dashboard</h2>
        <p className="text-gray-600">Manage and monitor the entire residential community</p>
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
                  <p className="mt-1 text-xs text-green-600">{stat.change}</p>
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

        {/* Building Occupancy */}
        <Card>
          <CardHeader>
            <CardTitle>Building Occupancy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {buildingOccupancy.map((building) => (
                <div key={building.building} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Building2 className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{building.building}</span>
                    </div>
                    <span className="text-sm">
                      {building.occupied}/{building.total} units ({building.occupancy}%)
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full bg-blue-600 transition-all"
                      style={{ width: `${building.occupancy}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Approvals */}
      <Card>
        <CardHeader>
          <CardTitle>Pending Approvals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {pendingApprovals.map((approval) => (
              <div
                key={approval.id}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline">{approval.type}</Badge>
                    <p className="text-sm">{approval.item}</p>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    {approval.requester} • {approval.date}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  {getPriorityBadge(approval.priority)}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <button className="rounded-lg border border-gray-200 p-4 text-left transition hover:border-blue-500 hover:bg-blue-50">
              <Users className="mb-2 h-5 w-5 text-blue-600" />
              <p className="text-sm">Manage Residents</p>
            </button>
            <button className="rounded-lg border border-gray-200 p-4 text-left transition hover:border-green-500 hover:bg-green-50">
              <MessageSquare className="mb-2 h-5 w-5 text-green-600" />
              <p className="text-sm">Review Requests</p>
            </button>
            <button className="rounded-lg border border-gray-200 p-4 text-left transition hover:border-purple-500 hover:bg-purple-50">
              <DollarSign className="mb-2 h-5 w-5 text-purple-600" />
              <p className="text-sm">Financial Reports</p>
            </button>
            <button className="rounded-lg border border-gray-200 p-4 text-left transition hover:border-orange-500 hover:bg-orange-50">
              <Calendar className="mb-2 h-5 w-5 text-orange-600" />
              <p className="text-sm">View All Bookings</p>
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
