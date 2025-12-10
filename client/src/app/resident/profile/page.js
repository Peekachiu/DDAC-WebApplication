'use client'

import { useAuth } from '../../AuthContext';
import ResidentProfile from '../../components/ResidentProfile';

export default function ProfilePage() {
  const { currentUser } = useAuth();

  if (!currentUser) return <div>Loading...</div>;

  // Optional: Allow admins to view this too, or restrict to Residents only
  // if (currentUser.role === 'Admin') return <div>Access Denied.</div>;

  return <ResidentProfile user={currentUser} />;
}