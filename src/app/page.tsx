import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">⚡ Tiny Machines Vibe Stack</h1>
            <div className="flex gap-2">
              <Button asChild variant="outline">
                <Link href="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Build faster with modern web technologies</h2>
          <p className="text-xl text-muted-foreground mb-6">
            Next.js 15 + React 19 + Tailwind CSS 4.0 + shadcn/ui
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/dashboard">Protected Route Demo</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/state-demo">State Management Demo</Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Authentication */}
          <Card>
            <CardHeader>
              <CardTitle>🔐 Authentication Ready</CardTitle>
              <CardDescription>
                Demo mode included, Supabase production ready
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Demo mode works immediately
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Protected routes configured
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Easy Supabase integration
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* UI Components */}
          <Card>
            <CardHeader>
              <CardTitle>🎨 Modern UI</CardTitle>
              <CardDescription>
                shadcn/ui components with Tailwind CSS 4.0
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <Input placeholder="Beautiful form inputs" />
                <div className="flex gap-2">
                  <Button size="sm">Primary</Button>
                  <Button variant="outline" size="sm">Outline</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* State Management */}
          <Card>
            <CardHeader>
              <CardTitle>⚡ State Management</CardTitle>
              <CardDescription>
                Zustand + TanStack Query for optimal performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Client state with Zustand
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Server state with TanStack Query
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  TypeScript throughout
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-24">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-sm text-muted-foreground">
            Built with ❤️ for product people who want to move fast and build things.
          </p>
        </div>
      </footer>
    </div>
  )
}