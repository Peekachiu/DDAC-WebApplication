// peekachiu/ddac-webapplication/DDAC-WebApplication-jiayuan/client/src/app/admin/complaints/page.js
'use client'
import { useAuth } from '../../AuthContext';
import ComplaintMaintenanceManagement from '../../components/ComplaintMaintenanceManagement';

export default function CompaintsPage() {
  const { currentUser } = useAuth();
  if (!currentUser) return <div>Loading...</div>;
  if (currentUser.role !== 'Admin') {
    return <div>Access Denied.</div>;
  }
  return <ComplaintMaintenanceManagement user={currentUser} />;
}