'use client'

import { useState } from 'react';
import './globals.css';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import ResidentManagement from './components/ResidentManagement';
import VisitorRegister from './components/VisitorRegister';
import ResidentVisitorRegister from './components/ResidentVisitorRegister';
import ResidentSportFacilityBooking from './components/ResidentSportFacilityBooking';
import ResidentEventHallBooking from './components/ResidentEventHallBooking';
import ResidentManagementFee from './components/ResidentManagementFee';
import ResidentInvoiceReceipt from './components/ResidentInvoiceReceipt';
import ResidentComplaintRequest from './components/ResidentComplaintRequest';
import ResidentNotifications from './components/ResidentNotifications';
import FacilityBookingManagement from './components/FacilityBookingManagement';
import FinancialManagement from './components/FinancialManagement';
import ComplaintMaintenanceManagement from './components/ComplaintMaintenanceManagement';
import CommunicationManagement from './components/CommunicationManagement';
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import { LayoutDashboard, Users, Calendar, Building2, DollarSign, FileText, MessageSquare, Bell, LogOut, Menu, UserCog } from 'lucide-react';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setCurrentPage('dashboard');
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const isAdmin = currentUser?.role === 'Admin';

  // Different menu items for Admin and Resident
  const adminMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'residents', label: 'Resident Management', icon: UserCog },
    { id: 'financial', label: 'Financial Management', icon: DollarSign },
    { id: 'bookings', label: 'Booking Management', icon: Calendar },
    { id: 'visitors', label: 'Visitor Register', icon: Users },
    { id: 'complaints', label: 'Complaints & Maintenance', icon: MessageSquare },
    { id: 'notifications', label: 'Communication', icon: Bell },
  ];

  const residentMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'visitors', label: 'Visitor Register', icon: Users },
    { id: 'sports', label: 'Sports Facility', icon: Calendar },
    { id: 'events', label: 'Event Hall', icon: Building2 },
    { id: 'management', label: 'Management Fee', icon: DollarSign },
    { id: 'invoices', label: 'Invoices & Receipts', icon: FileText },
    { id: 'complaints', label: 'Complaints & Requests', icon: MessageSquare },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  const menuItems = isAdmin ? adminMenuItems : residentMenuItems;

  const renderPage = () => {
    if (isAdmin) {
      // Admin routing
      switch (currentPage) {
        case 'dashboard':
          return <AdminDashboard user={currentUser} />;
        case 'residents':
          return <ResidentManagement user={currentUser} />;
        case 'financial':
          return <FinancialManagement user={currentUser} />;
        case 'bookings':
          return <FacilityBookingManagement user={currentUser} />;
        case 'visitors':
          return <VisitorRegister user={currentUser} />;
        case 'complaints':
          return <ComplaintMaintenanceManagement user={currentUser} />;
        case 'notifications':
          return <CommunicationManagement user={currentUser} />;
        default:
          return <AdminDashboard user={currentUser} />;
      }
    } else {
      // Resident routing
      switch (currentPage) {
        case 'dashboard':
          return <Dashboard user={currentUser} />;
        case 'visitors':
          return <ResidentVisitorRegister user={currentUser} />;
        case 'sports':
          return <ResidentSportFacilityBooking user={currentUser} />;
        case 'events':
          return <ResidentEventHallBooking user={currentUser} />;
        case 'management':
          return <ResidentManagementFee user={currentUser} />;
        case 'invoices':
          return <ResidentInvoiceReceipt user={currentUser} />;
        case 'complaints':
          return <ResidentComplaintRequest user={currentUser} />;
        case 'notifications':
          return <ResidentNotifications user={currentUser} />;
        default:
          return <Dashboard user={currentUser} />;
      }
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarHeader className="border-b p-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-blue-600" />
              <div>
                <h2 className="font-semibold">ResidentPro</h2>
                <p className="text-xs text-gray-500">{currentUser?.unit}</p>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => setCurrentPage(item.id)}
                    isActive={currentPage === item.id}
                    className="w-full"
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <div className="mt-auto border-t p-4">
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </Sidebar>

        <main className="flex-1 overflow-auto bg-gray-50">
          <div className="border-b bg-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SidebarTrigger>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SidebarTrigger>
                <h1 className="text-xl">
                  {menuItems.find((item) => item.id === currentPage)?.label || 'Dashboard'}
                </h1>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-sm text-gray-600">Welcome, {currentUser?.name}</p>
                <Badge variant={currentUser?.role === 'Admin' ? 'default' : 'secondary'}>
                  {currentUser?.role}
                </Badge>
              </div>
            </div>
          </div>
          <div className="p-6">
            {renderPage()}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
