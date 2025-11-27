// peekachiu/ddac-webapplication/DDAC-WebApplication-jiayuan/client/src/app/resident/visitors/page.js
'use client'
import { useAuth } from '../../layout';
import ResidentVisitorRegister from '../../components/ResidentVisitorRegister';

export default function Page() {
  const { currentUser } = useAuth();
  if (!currentUser) return <div>Loading...</div>;
  if (currentUser.role === 'Admin') return <div>Access Denied.</div>;
  return <ResidentVisitorRegister user={currentUser} />;
}