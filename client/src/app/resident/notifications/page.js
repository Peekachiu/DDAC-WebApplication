// peekachiu/ddac-webapplication/DDAC-WebApplication-jiayuan/client/src/app/resident/notifications/page.js
'use client'
import { useAuth } from '../../layout';
import ResidentNotifications from '../../components/ResidentNotifications';

export default function Page() {
  const { currentUser } = useAuth();
  if (!currentUser) return <div>Loading...</div>;
  if (currentUser.role === 'Admin') return <div>Access Denied.</div>;
  return <ResidentNotifications user={currentUser} />;
}