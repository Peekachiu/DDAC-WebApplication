// peekachiu/ddac-webapplication/DDAC-WebApplication-jiayuan/client/src/app/resident/complaints/page.js
'use client'
import { useAuth } from '../../AuthContext';
import ResidentComplaintRequest from '../../components/ResidentComplaintRequest';

export default function Page() {
  const { currentUser } = useAuth();
  if (!currentUser) return <div>Loading...</div>;
  if (currentUser.role === 'Admin') return <div>Access Denied.</div>;
  return <ResidentComplaintRequest user={currentUser} />;
}