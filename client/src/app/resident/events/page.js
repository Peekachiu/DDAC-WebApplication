// peekachiu/ddac-webapplication/DDAC-WebApplication-jiayuan/client/src/app/events/page.js
'use client'

import { useAuth } from '../../layout';
import ResidentEventHallBooking from '../../components/ResidentEventHallBooking';

export default function EventsPage() {
  const { currentUser } = useAuth();
  if (!currentUser) return <div>Loading...</div>;

  if (currentUser.role === 'Admin') {
    return <div>Access Denied. This page is for residents only.</div>;
  }

  return <ResidentEventHallBooking user={currentUser} />;
}