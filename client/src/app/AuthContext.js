'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const AuthContext = createContext(null);
const API_URL = ''; // Check that this matches your dotnet run port

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Check for existing session on load
  useEffect(() => {
    const storedUser = sessionStorage.getItem('currentUser'); // [CHANGED] sessionStorage
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}/api/Login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Success
      toast.success('Login successful!');

      const userData = {
        id: data.id,
        name: data.name,
        email: data.email,
        unit: data.unit,
        role: data.role,
        token: data.token // [ADDED]
      };

      setCurrentUser(userData);
      sessionStorage.setItem('currentUser', JSON.stringify(userData)); // [CHANGED] sessionStorage

      router.push('/');

    } catch (error) {
      console.error("Login Error:", error);
      toast.error(error.message || 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem('currentUser'); // [CHANGED] sessionStorage
    router.push('/');
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