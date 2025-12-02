// peekachiu/ddac-webapplication/DDAC-WebApplication-jiayuan/client/src/app/layout.js
'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './globals.css';
import { Geist, Geist_Mono } from "next/font/google";

// Import components
import LoginPage from './components/LoginPage';
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import { LayoutDashboard, Users, Calendar, Building2, DollarSign, FileText, MessageSquare, Bell, LogOut, Menu, UserCog } from 'lucide-react';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Toaster } from './components/ui/sonner';

// Import AuthProvider
import { AuthProvider, useAuth } from './AuthContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Separate component to use the hook inside the provider
function AppContent({ children }) {
  const { currentUser, handleLogout, isLoading } = useAuth();
  const pathname = usePathname();

  if (!currentUser) {
    return <LoginPage />;
  }

  // --- MENU ITEMS ---
  const adminMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/' },
    { id: 'residents', label: 'Resident Management', icon: UserCog, href: '/admin/residents' },
    { id: 'financial', label: 'Financial Management', icon: DollarSign, href: '/admin/financial' },
    { id: 'bookings', label: 'Booking Management', icon: Calendar, href: '/admin/bookings' },
    { id: 'visitors', label: 'Visitor Register', icon: Users, href: '/admin/visitors' },
    { id: 'complaints', label: 'Complaints & Maintenance', icon: MessageSquare, href: '/admin/complaints' },
    { id: 'notifications', label: 'Communication', icon: Bell, href: '/admin/notifications' },
  ];

  const residentMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/' },
    { id: 'visitors', label: 'Visitor Register', icon: Users, href: '/resident/visitors' },
    { id: 'sports', label: 'Sports Facility', icon: Calendar, href: '/resident/sports' },
    { id: 'events', label: 'Event Hall', icon: Building2, href: '/resident/events' },
    { id: 'management', label: 'Management Fee', icon: DollarSign, href: '/resident/management' },
    { id: 'invoices', label: 'Invoices & Receipts', icon: FileText, href: '/resident/invoices' },
    { id: 'complaints', label: 'Complaints & Requests', icon: MessageSquare, href: '/resident/complaints' },
    { id: 'notifications', label: 'Notifications', icon: Bell, href: '/resident/notifications' },
    { id: 'profile', label: 'Profile Settings', icon: UserCog, href: '/resident/profile' },
  ];

  const menuItems = currentUser.role === 'Admin' ? adminMenuItems : residentMenuItems;
  const currentPageLabel = menuItems.find((item) => item.href === pathname)?.label || 'Dashboard';

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gradient-to-br from-primary/20 via-secondary to-primary/20">
        <Sidebar variant="floating" className="border-r-0">
          <SidebarHeader className="border-b border-white/20 p-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-6 w-6 text-primary" />
              <div>
                <h2 className="font-semibold">ResidentPro</h2>
                <p className="text-xs text-muted-foreground">{currentUser.unit}</p>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <Link href={item.href} passHref>
                    <SidebarMenuButton
                      isActive={pathname === item.href}
                      className="w-full hover:bg-primary/10 hover:text-primary data-[active=true]:bg-primary/20 data-[active=true]:text-primary"
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <div className="mt-auto border-t border-white/20 p-4">
            <Button
              variant="ghost"
              className="w-full justify-start hover:bg-destructive/10 hover:text-destructive"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </Sidebar>

        <main className="flex-1 overflow-auto">
          <div className="glass sticky top-0 z-10 border-b border-white/20 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <SidebarTrigger>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SidebarTrigger>
                <h1 className="text-xl font-semibold text-foreground">{currentPageLabel}</h1>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">Welcome, {currentUser.name}</p>
                <Badge variant={currentUser.role === 'Admin' ? 'default' : 'secondary'} className="glass">
                  {currentUser.role}
                </Badge>
              </div>
            </div>
          </div>
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <AppContent>{children}</AppContent>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}

// Re-export useAuth for other components to use
export { useAuth };