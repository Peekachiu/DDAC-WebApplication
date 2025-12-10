// peekachiu/ddac-webapplication/DDAC-WebApplication-jiayuan/client/src/app/sports/page.js
'use client'

import { useAuth } from '../../AuthContext';
import ResidentSportFacilityBooking from '../../components/ResidentSportFacilityBooking';

export default function SportsPage() {
  const { currentUser } = useAuth();
  if (!currentUser) return <div>Loading...</div>;

  if (currentUser.role === 'Admin') {
    return <div>Access Denied. This page is for residents only.</div>;
  }

  return <ResidentSportFacilityBooking user={currentUser} />;
}