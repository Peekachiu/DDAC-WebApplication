// peekachiu/ddac-webapplication/DDAC-WebApplication-jiayuan/client/src/app/bookings/page.js
'use client'

import { useAuth } from '../../layout';
import FacilityBookingManagement from '../../components/FacilityBookingManagement';

export default function BookingsPage() {
  const { currentUser } = useAuth();
  if (!currentUser) return <div>Loading...</div>;

  if (currentUser.role !== 'Admin') {
    return <div>Access Denied. This page is for admins only.</div>;
  }

  return <FacilityBookingManagement user={currentUser} />;
}