// peekachiu/ddac-webapplication/DDAC-WebApplication-jiayuan/client/src/app/page.js
'use client'

import { useAuth } from './layout'; // Import the context from layout
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';

export default function DashboardPage() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // You can add a loading spinner here
    return <div>Loading...</div>;
  }

  const isAdmin = currentUser?.role === 'Admin';

  return isAdmin ? <AdminDashboard user={currentUser} /> : <Dashboard user={currentUser} />;
}