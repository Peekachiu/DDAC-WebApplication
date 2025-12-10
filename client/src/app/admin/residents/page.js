// peekachiu/ddac-webapplication/DDAC-WebApplication-jiayuan/client/src/app/residents/page.js
'use client'

import { useAuth } from '../../AuthContext';
import ResidentManagement from '../../components/ResidentManagement';

export default function ResidentsPage() {
  const { currentUser } = useAuth();
  if (!currentUser) return <div>Loading...</div>;

  // You could add a check here to redirect if not admin
  if (currentUser.role !== 'Admin') {
    // Or return a simple "Access Denied" message
    return <div>Access Denied. This page is for admins only.</div>;
  }

  return <ResidentManagement user={currentUser} />;
}