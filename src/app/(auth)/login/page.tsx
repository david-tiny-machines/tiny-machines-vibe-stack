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

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login, loading: isLoading } = useAuth()
  const router = useRouter()

  const supabaseEnabled = isSupabaseEnabledClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    console.log('Attempting login...')
    const result = await login(email, password)
    console.log('Login result:', result)
    
    if (result.success) {
      console.log('Login successful, redirecting...')
      router.push('/dashboard')
    } else {
      console.log('Login failed:', result.error)
      setError(result.error || 'Login failed')
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">⚡ Tiny Machines</h1>
            <Button asChild variant="outline">
              <Link href="/">← Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full space-y-8">
          {/* Form Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Or{' '}
              <Link 
                href="/signup" 
                className="font-medium text-primary hover:underline"
              >
                create a new account
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

        {/* Login Form */}
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              {supabaseEnabled 
                ? 'Enter your Supabase credentials'
                : 'Demo: demo@example.com / password'
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            {/* Demo Instructions */}
            {!supabaseEnabled && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Demo Mode:</strong> Use demo@example.com / password to test the login flow.
                  Configure Supabase in .env.local for real authentication.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        </div>
      </main>
    </div>
  )
}