'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext(null);
const API_URL = 'http://localhost:5016'; // Check that this matches your dotnet run port

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Default to true to wait for hydration
  const router = useRouter();

  // Helper to safely decode token
  const isTokenExpired = (token) => {
    try {
      const decoded = jwtDecode(token);
      return decoded.exp * 1000 < Date.now();
    } catch (error) {
      return true;
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem('currentUser');
    router.push('/');
    toast.error("Session expired. Please login again.");
  };

  // Check for existing session on load and set up interceptors
  useEffect(() => {
    const storedUserStr = sessionStorage.getItem('currentUser');
    if (storedUserStr) {
      try {
        const userData = JSON.parse(storedUserStr);
        if (userData.token && !isTokenExpired(userData.token)) {
          setCurrentUser(userData);
        } else {
          // Token expired while away
          sessionStorage.removeItem('currentUser');
        }
      } catch (e) {
        sessionStorage.removeItem('currentUser');
      }
    }
    setIsLoading(false);

    // --- FETCH INTERCEPTOR ---
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      try {
        const response = await originalFetch(...args);
        if (response.status === 401) {
          handleLogout();
        }
        return response;
      } catch (error) {
        throw error;
      }
    };

    return () => {
      window.fetch = originalFetch;
    };
  }, []);

  // Idle Timeout Logic
  useEffect(() => {
    if (!currentUser) return;

    const IDLE_TIMEOUT = 10 * 60 * 1000;
    let idleTimer;

    const resetTimer = () => {
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        handleLogout();
        toast.error("Logged out due to inactivity.");
      }, IDLE_TIMEOUT);
    };

    // Events to track activity
    const activityEvents = [
      'mousedown',
      'mousemove',
      'keydown',
      'scroll',
      'touchstart'
    ];

    // Attach listeners
    activityEvents.forEach(event => {
      window.addEventListener(event, resetTimer);
    });

    // Start initial timer
    resetTimer();

    // Cleanup
    return () => {
      if (idleTimer) clearTimeout(idleTimer);
      activityEvents.forEach(event => {
        window.removeEventListener(event, resetTimer);
      });
    };
  }, [currentUser]);


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
        token: data.token
      };

      setCurrentUser(userData);
      sessionStorage.setItem('currentUser', JSON.stringify(userData));

      router.push('/');

    } catch (error) {
      console.error("Login Error:", error);
      toast.error(error.message || 'Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  // Manual logout (without session expired message)
  const manualLogout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem('currentUser');
    router.push('/');
  };

  const value = {
    currentUser,
    isLoading,
    handleLogin,
    handleLogout: manualLogout, // Expose manual logout for button
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
