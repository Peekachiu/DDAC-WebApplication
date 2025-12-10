// peekachiu/ddac-webapplication/DDAC-WebApplication-jiayuan/client/src/app/admin/notifications/page.js
'use client'
import { useAuth } from '../../AuthContext';
import CommunicationManagement from '../../components/CommunicationManagement';

export default function Page() {
  const { currentUser } = useAuth();
  if (!currentUser) return <div>Loading...</div>;
  if (currentUser.role !== 'Admin') return <div>Access Denied.</div>;
  return <CommunicationManagement user={currentUser} />;
}