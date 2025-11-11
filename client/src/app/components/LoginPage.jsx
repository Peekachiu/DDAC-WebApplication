'use client'

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Building2, Lock, Mail } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const API_URL = 'http://localhost:5254/api/auth/login';

export default function LoginPage({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // 1. Send the login request to the C# backend
      const response = await axios.post(API_URL, {
        email: email,
        password: password,
      });

      // The backend returns the user data on success (200 OK)
      const user = response.data; // Expected: { id, name, email, unit, role, token }

      if (user && user.role) {
        toast.success('Login successful!');

        // 2. Store the user object in local storage for session persistence across page loads
        if (typeof window !== 'undefined') {
            localStorage.setItem('user', JSON.stringify(user));
        }

        // 3. Pass the authenticated user data up to the parent component (App)
        onLogin({
          id: user.id,
          name: user.name,
          email: user.email,
          unit: user.unit,
          role: user.role,
        });
      }

    } catch (error) {
      // Handle login error (e.g., 401 Unauthorized or network error)
      console.error('Login API Error:', error.response ? error.response.data : error.message);

      const errorMessage = error.response?.status === 401
        ? 'Invalid email or password. Please try again.'
        : 'A network error occurred. Please check the backend server.';

      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
            <Building2 className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-2xl">ResidentPro</CardTitle>
          <CardDescription>
            Smart Residential Management System
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
          <div className="mt-6 rounded-lg bg-blue-50 p-4">
            <p className="mb-2 text-sm">Demo Credentials:</p>
            <p className="text-xs text-gray-600">
              <strong>Resident:</strong> john@example.com / password
            </p>
            <p className="text-xs text-gray-600">
              <strong>Admin:</strong> admin@example.com / admin
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
