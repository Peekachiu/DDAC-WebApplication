// peekachiu/ddac-webapplication/DDAC-WebApplication-jiayuan/client/src/app/layout.js
'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import './globals.css';
import { Geist, Geist_Mono } from "next/font/google";

// Import components
import LoginPage from './components/LoginPage';
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarProvider, SidebarTrigger, useSidebar } from './components/ui/sidebar';
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
// Separate component to use the sidebar hook
function MainLayout({ children }) {
  const { state, toggleSidebar } = useSidebar();
  const { currentUser, handleLogout } = useAuth();
  const pathname = usePathname();

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
    <div className="flex min-h-screen w-full">
      <Sidebar collapsible="icon" variant="floating">
        <SidebarHeader className="p-4 mb-2">
          {state === 'expanded' ? (
            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-white/40 flex items-center gap-3 shadow-sm relative group">
              <div className="h-10 w-10 rounded-full bg-[#f37021] flex items-center justify-center text-white font-bold text-lg shadow-md shrink-0">
                {currentUser.name.charAt(0)}
              </div>
              <div className="overflow-hidden flex-1">
                <h2 className="font-semibold text-gray-800 text-sm truncate">{currentUser.name}</h2>
                <p className="text-xs text-gray-500 truncate">{currentUser.unit}</p>
              </div>
              <SidebarTrigger className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity text-gray-500 hover:bg-black/5" />
            </div>
          ) : (
            <button onClick={toggleSidebar} className="w-full flex justify-center hover:bg-transparent focus:outline-none">
              <div className="h-10 w-10 rounded-full bg-[#f37021] flex items-center justify-center text-white font-bold text-lg shadow-md cursor-pointer hover:ring-2 hover:ring-[#f37021]/50 transition-all">
                {currentUser.name.charAt(0)}
              </div>
            </button>
          )}
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {menuItems.map((item) => (
              <SidebarMenuItem key={item.id}>
                <Link href={item.href} passHref>
                  <SidebarMenuButton
                    isActive={pathname === item.href}
                    className={`w-full ${state === 'collapsed' ? 'justify-center px-2' : 'justify-start pl-4'}`}
                    tooltip={state === 'collapsed' ? item.label : undefined}
                  >
                    <item.icon className="h-5 w-5" />
                    {state === 'expanded' && <span>{item.label}</span>}
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
        <div className="mt-auto p-4">
          <Button
            variant="ghost"
            className={state === 'expanded' ? "w-full justify-start text-gray-600 hover:text-gray-900 hover:bg-black/5 rounded-xl" : "w-full justify-center text-gray-600 hover:text-gray-900 hover:bg-black/5 rounded-xl px-0"}
            onClick={state === 'expanded' ? handleLogout : () => { }} // Prevent accidental logout in collapsed mode if needed, or keep it
          >
            <LogOut className="h-5 w-5" />
            {state === 'expanded' && <span className="ml-2">Logout</span>}
          </Button>
          {state === 'collapsed' && (
            <div className="mt-2 flex justify-center">
              {/* Toggle removed as per request */}
            </div>
          )}
        </div>
      </Sidebar>

      <main className="flex-1 overflow-auto">
        <div className="h-20 flex items-center px-8 sticky top-4 z-10 bg-white/80 backdrop-blur-xl border border-white/40 shadow-sm transition-all duration-300 mx-4 rounded-3xl">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-gray-700 hover:bg-black/5 md:hidden" onClick={toggleSidebar}>
                <Menu className="h-6 w-6" />
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-800 tracking-tight">{currentPageLabel}</h1>
                <p className="text-sm text-gray-500 font-medium">Manage your {currentPageLabel.toLowerCase()} here</p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex flex-col items-end">
                <p className="text-sm font-semibold text-gray-800">{currentUser.name}</p>
                <p className="text-xs text-gray-500">{currentUser.unit}</p>
              </div>
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#f37021] to-[#d95d15] flex items-center justify-center text-white font-bold text-lg shadow-lg ring-2 ring-white/50">
                {currentUser.name.charAt(0)}
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
}

function AppContent({ children }) {
  const { currentUser, isLoading } = useAuth();

  if (isLoading) {
    return <div className="flex h-screen items-center justify-center text-white">Loading...</div>;
  }

  if (!currentUser) {
    return <LoginPage />;
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <MainLayout>{children}</MainLayout>
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