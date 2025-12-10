// peekachiu/ddac-webapplication/DDAC-WebApplication-jiayuan/client/src/app/management/page.js
'use client'

import { useAuth } from '../../AuthContext';
import ResidentManagementFee from '../../components/ResidentManagementFee';

export default function ManagementFeePage() {
  const { currentUser } = useAuth();
  if (!currentUser) return <div>Loading...</div>;

  if (currentUser.role === 'Admin') {
    return <div>Access Denied. This page is for residents only.</div>;
  }

  return <ResidentManagementFee user={currentUser} />;
}