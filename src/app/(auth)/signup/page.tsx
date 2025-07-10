'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from '@/hooks/useAuth'

// Client-safe version of Supabase configuration check
function isSupabaseEnabledClient(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL && 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}

export default function SignupPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [error, setError] = useState('')
  const { signup, loading } = useAuth()
  const router = useRouter()

  const supabaseEnabled = isSupabaseEnabledClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validation
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    const result = await signup(email, password, fullName)
    
    if (result.success) {
      if (supabaseEnabled) {
        // With Supabase, might need email confirmation
        alert('Account created! Check your email for confirmation.')
        router.push('/login')
      } else {
        // Demo mode - auto logged in
        router.push('/dashboard')
      }
    } else {
      setError(result.error || 'Signup failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">🧱 Tiny Machines</h1>
          <h2 className="mt-2 text-2xl font-semibold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Or{' '}
            <Link 
              href="/login" 
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              sign in to existing account
            </Link>
          </p>
        </div>

        {/* Auth Status */}
        <div className="text-center">
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
            supabaseEnabled 
              ? 'bg-green-100 text-green-800' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            {supabaseEnabled ? '🔐 Supabase Auth Enabled' : '🎭 Demo Mode'}
          </div>
        </div>

        {/* Signup Form */}
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              {supabaseEnabled 
                ? 'Create your Supabase account'
                : 'Demo: Create a mock account to test the flow'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Choose a password (min. 6 characters)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>

              {error && (
                <div className="text-sm text-red-600 bg-red-50 p-3 rounded">
                  {error}
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full" 
                disabled={loading}
              >
                {loading ? 'Creating account...' : 'Create Account'}
              </Button>
            </form>

            {/* Demo Instructions */}
            {!supabaseEnabled && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Demo Mode:</strong> Create any account to test the signup flow.
                  Configure Supabase in .env.local for real user registration.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center">
          <Link 
            href="/" 
            className="text-sm text-gray-600 hover:text-gray-500"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}