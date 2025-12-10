'use client'

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { User, Lock, ShieldCheck, KeyRound, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const API_URL = 'http://localhost:5016/api/Profile';

export default function ResidentProfile({ user }) {
  const [passwords, setPasswords] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleMouseDown = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: true }));
  };

  const handleMouseUp = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: false }));
  };

  const handleChange = (e) => {
    setPasswords({ ...passwords, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwords.newPassword !== passwords.confirmPassword) {
      toast.error("New passwords do not match.");
      return;
    }

    if (passwords.newPassword === passwords.oldPassword) {
      toast.error("New password cannot be the same as the old password.");
      return;
    }

    // Password Complexity Validation
    const hasUpperCase = /[A-Z]/.test(passwords.newPassword);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwords.newPassword);
    const hasNumber = /\d/.test(passwords.newPassword);
    const hasLetter = /[a-zA-Z]/.test(passwords.newPassword);
    const isLengthValid = passwords.newPassword.length >= 10;

    if (!isLengthValid) {
      toast.error("Password must be at least 10 characters long.");
      return;
    }
    if (!hasUpperCase) {
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }
    if (!hasSpecialChar) {
      toast.error("Password must contain at least one special symbol.");
      return;
    }
    if (!hasNumber || !hasLetter) {
      toast.error("Password must contain a mixture of alphabets and numbers.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/change-password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({
          userId: user.id,
          oldPassword: passwords.oldPassword,
          newPassword: passwords.newPassword
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to change password');
      }

      toast.success("Password updated successfully!");
      setPasswords({ oldPassword: '', newPassword: '', confirmPassword: '' });

    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Helper component for Gradient Border Input Display
  const GradientBorderDisplay = ({ children, className }) => (
    <div className={`relative rounded-lg p-px bg-linear-to-br from-blue-300/50 via-purple-300/50 to-blue-300/50 shadow-sm ${className}`}>
      <div className="relative rounded-[calc(0.5rem-1px)] bg-[var(--card)] backdrop-blur-sm p-2.5 text-sm text-foreground shadow-inner">
        {children}
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h2>Profile Settings</h2>
        <p className="text-muted-foreground">Manage your account details and security</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* User Details Card */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="glass border-0! h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                Personal Information
              </CardTitle>
              <CardDescription>Your registered details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <GradientBorderDisplay>
                  {user.name}
                </GradientBorderDisplay>
              </div>
              <div className="space-y-2">
                <Label>Email Address</Label>
                <GradientBorderDisplay>
                  {user.email}
                </GradientBorderDisplay>
              </div>
              <div className="space-y-2">
                <Label>Unit Number</Label>
                <GradientBorderDisplay className="font-semibold">
                  {user.unit}
                </GradientBorderDisplay>
              </div>
              <div className="space-y-2">
                <Label>Role</Label>
                <GradientBorderDisplay>
                  {user.role}
                </GradientBorderDisplay>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Change Password Card */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card className="glass border-0! h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                Security
              </CardTitle>
              <CardDescription>Update your password</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="oldPassword">Current Password</Label>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-linear-to-r from-blue-300 to-purple-300 rounded-lg blur opacity-0 group-focus-within:opacity-30 transition duration-200"></div>
                    <div className="relative">
                      <KeyRound className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="oldPassword"
                        type={showPassword.oldPassword ? "text" : "password"}
                        placeholder="Enter current password"
                        className="pl-9 pr-10 bg-white/50 dark:bg-black/20 border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100 dark:placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                        value={passwords.oldPassword}
                        onChange={handleChange}
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground focus:outline-none"
                        onMouseDown={() => handleMouseDown('oldPassword')}
                        onMouseUp={() => handleMouseUp('oldPassword')}
                        onMouseLeave={() => handleMouseUp('oldPassword')}
                        onTouchStart={() => handleMouseDown('oldPassword')}
                        onTouchEnd={() => handleMouseUp('oldPassword')}
                      >
                        {showPassword.oldPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-linear-to-r from-blue-300 to-purple-300 rounded-lg blur opacity-0 group-focus-within:opacity-30 transition duration-200"></div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="newPassword"
                        type={showPassword.newPassword ? "text" : "password"}
                        placeholder="Enter new password"
                        className="pl-9 pr-10 bg-white/50 dark:bg-black/20 border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100 dark:placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                        value={passwords.newPassword}
                        onChange={handleChange}
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground focus:outline-none"
                        onMouseDown={() => handleMouseDown('newPassword')}
                        onMouseUp={() => handleMouseUp('newPassword')}
                        onMouseLeave={() => handleMouseUp('newPassword')}
                        onTouchStart={() => handleMouseDown('newPassword')}
                        onTouchEnd={() => handleMouseUp('newPassword')}
                      >
                        {showPassword.newPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-linear-to-r from-blue-300 to-purple-300 rounded-lg blur opacity-0 group-focus-within:opacity-30 transition duration-200"></div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type={showPassword.confirmPassword ? "text" : "password"}
                        placeholder="Confirm new password"
                        className="pl-9 pr-10 bg-white/50 dark:bg-black/20 border-gray-200 dark:border-white/10 text-gray-900 dark:text-gray-100 dark:placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400/20"
                        value={passwords.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground focus:outline-none"
                        onMouseDown={() => handleMouseDown('confirmPassword')}
                        onMouseUp={() => handleMouseUp('confirmPassword')}
                        onMouseLeave={() => handleMouseUp('confirmPassword')}
                        onTouchStart={() => handleMouseDown('confirmPassword')}
                        onTouchEnd={() => handleMouseUp('confirmPassword')}
                      >
                        {showPassword.confirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Updating...' : 'Change Password'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}