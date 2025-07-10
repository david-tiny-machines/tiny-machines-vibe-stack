'use client'

import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from '@/hooks/useAuth'

export default function DashboardPage() {
  const { user, logout, loading } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    await logout()
    router.push('/')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    )
  }
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back, {user?.fullName || user?.email || 'User'}!
          </p>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      </div>

      {/* Content Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Welcome Card */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>🎉 Authentication Working!</CardTitle>
            <CardDescription>
              You&apos;ve successfully accessed a protected route
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm">
                This page demonstrates protected route functionality in your vibe stack.
                In a real app, this would only be accessible after authentication.
              </p>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-green-800">
                  ✅ <strong>Route Protection:</strong> This page is in the (protected) route group
                </p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-800">
                  🚧 <strong>Next Steps:</strong> Add middleware or layout authentication checks
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Projects</span>
                <span className="font-medium">3</span>
              </div>
              <div className="flex justify-between">
                <span>Tasks</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex justify-between">
                <span>Team Members</span>
                <span className="font-medium">8</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Created new project</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Updated profile</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Joined team call</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                📝 Create Project
              </Button>
              <Button variant="outline" className="w-full justify-start">
                👥 Invite Team
              </Button>
              <Button variant="outline" className="w-full justify-start">
                ⚙️ Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Implementation Notes */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>🛠️ Implementation Notes</CardTitle>
          <CardDescription>For developers using this starter</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">Current Status:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>✅ Route groups set up ((auth) and (protected))</li>
                <li>✅ Login and signup pages created</li>
                <li>✅ Protected dashboard page</li>
                <li>🚧 Session management (next step)</li>
                <li>🚧 Route protection middleware</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Next Steps:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Add authentication context/hooks</li>
                <li>• Implement Supabase auth flows</li>
                <li>• Add middleware for route protection</li>
                <li>• Create user profile management</li>
                <li>• Add proper logout functionality</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}