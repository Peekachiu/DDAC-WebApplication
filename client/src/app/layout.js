// peekachiu/ddac-webapplication/DDAC-WebApplication-jiayuan/client/src/app/layout.js
'use client'

import { useState, createContext, useContext } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './globals.css';
import { Geist, Geist_Mono } from "next/font/google";

// Import your components
import LoginPage from './components/LoginPage';
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import { LayoutDashboard, Users, Calendar, Building2, DollarSign, FileText, MessageSquare, Bell, LogOut, Menu, UserCog } from 'lucide-react';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 1. Create an Auth Context
const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);

export default function RootLayout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const pathname = usePathname(); // Hook to get current URL path

  const handleLogin = (user) => {
    setCurrentUser(user);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  // --- UPDATED ADMIN MENU ITEMS ---
  const adminMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/' },
    { id: 'residents', label: 'Resident Management', icon: UserCog, href: '/admin/residents' },
    { id: 'financial', label: 'Financial Management', icon: DollarSign, href: '/admin/financial' },
    { id: 'bookings', label: 'Booking Management', icon: Calendar, href: '/admin/bookings' },
    { id: 'visitors', label: 'Visitor Register', icon: Users, href: '/admin/visitors' },
    { id: 'complaints', label: 'Complaints & Maintenance', icon: MessageSquare, href: '/admin/complaints' },
    { id: 'notifications', label: 'Communication', icon: Bell, href: '/admin/notifications' },
  ];

  // --- UPDATED RESIDENT MENU ITEMS ---
  const residentMenuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '/' },
    { id: 'visitors', label: 'Visitor Register', icon: Users, href: '/resident/visitors' },
    { id: 'sports', label: 'Sports Facility', icon: Calendar, href: '/resident/sports' },
    { id: 'events', label: 'Event Hall', icon: Building2, href: '/resident/events' },
    { id: 'management', label: 'Management Fee', icon: DollarSign, href: '/resident/management' },
    { id: 'invoices', label: 'Invoices & Receipts', icon: FileText, href: '/resident/invoices' },
    { id: 'complaints', label: 'Complaints & Requests', icon: MessageSquare, href: '/resident/complaints' },
    { id: 'notifications', label: 'Notifications', icon: Bell, href: '/resident/notifications' },
  ];

  const menuItems = currentUser?.role === 'Admin' ? adminMenuItems : residentMenuItems;
  const currentPageLabel = menuItems.find((item) => item.href === pathname)?.label || 'Dashboard';

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthContext.Provider value={{ currentUser }}>
          {!isLoggedIn ? (
            <LoginPage onLogin={handleLogin} />
          ) : (
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
                          <Link href={item.href} passHref>
                            <SidebarMenuButton
                              isActive={pathname === item.href}
                              className="w-full"
                            >
                              <item.icon className="h-4 w-4" />
                              <span>{item.label}</span>
                            </SidebarMenuButton>
                          </Link>
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
                        <h1 className="text-xl">{currentPageLabel}</h1>
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
                    {children}
                  </div>
                </main>
              </div>
            </SidebarProvider>
          )}
        </AuthContext.Provider>
      </body>
    </html>
  );
}