'use client'

import React, { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { toast } from 'sonner';

// Mock user database
const mockUsers = [
  { id: '1', email: 'john@example.com', password: 'password', name: 'John Smith', unit: 'Unit A-101', role: 'Resident' },
  { id: '2', email: 'sarah@example.com', password: 'password', name: 'Sarah Johnson', unit: 'Unit B-205', role: 'Resident' },
  { id: '3', email: 'admin@example.com', password: 'admin', name: 'Admin User', unit: 'Management Office', role: 'Admin' },
];

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (email, password) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      const user = mockUsers.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        toast.success('Login successful!');
        setCurrentUser({
          id: user.id,
          name: user.name,
          email: user.email,
          unit: user.unit,
          role: user.role,
        });
        // Redirect to dashboard on successful login
        router.push('/dashboard');
      } else {
        toast.error('Invalid email or password');
      }
      setIsLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    router.push('/login'); // Redirect to login page
  };

  const value = {
    currentUser,
    isLoading,
    handleLogin,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}