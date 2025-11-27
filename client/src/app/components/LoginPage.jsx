// peekachiu/ddac-webapplication/DDAC-WebApplication-jiayuan/client/src/app/components/LoginPage.jsx
'use client'

import { useState } from 'react';
import { useAuth } from '../AuthContext'; // Import from layout or AuthContext
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { Building2, Lock, Mail } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin, isLoading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(email, password);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md glass border-white/40 shadow-xl">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-[#f37021]/10 ring-1 ring-[#f37021]/20">
              <Building2 className="h-8 w-8 text-[#f37021]" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">ResidentPro</CardTitle>
          <CardDescription className="text-gray-500">
            Enter your email to sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-[#f37021] focus:ring-[#f37021]/20"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/50 border-gray-200 text-gray-800 placeholder:text-gray-400 focus:border-[#f37021] focus:ring-[#f37021]/20"
            />
          </div>
          <Button
            className="w-full bg-[#f37021] hover:bg-[#d95d15] text-white shadow-lg shadow-[#f37021]/20"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}