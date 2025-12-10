// peekachiu/ddac-webapplication/DDAC-WebApplication-jiayuan/client/src/app/admin/visitors/page.js
'use client'
import { useAuth } from '../../AuthContext';
import VisitorRegister from '../../components/VisitorRegister';

export default function VisitorsManagePage() {
  const { currentUser } = useAuth();
  if (!currentUser) return <div>Loading...</div>;
  if (currentUser.role !== 'Admin') {
    return <div>Access Denied.</div>;
  }
  return <VisitorRegister user={currentUser} />;
}