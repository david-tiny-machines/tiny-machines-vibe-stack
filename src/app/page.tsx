'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/hooks/useAuth"

export default function Home() {
  const { isAuthenticated, logout, user } = useAuth()
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">⚡ Tiny Machines Vibe Stack</h1>
            <div className="flex gap-2 items-center">
              {isAuthenticated ? (
                <>
                  <span className="text-sm text-muted-foreground">
                    Welcome back, {user?.fullName || user?.email || 'User'}!
                  </span>
                  <Button variant="outline" onClick={logout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild variant="outline">
                    <Link href="/login">Sign In</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <h2 className="text-4xl font-bold">Build faster with AI-assisted development</h2>
              <p className="text-xl text-muted-foreground">
                Plan → Build → Ship with Claude Code integration
              </p>
              
              {/* Demo Credentials Banner */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 inline-block">
                <p className="text-sm font-medium text-blue-800">
                  🎭 <strong>Try the Demo:</strong> demo@example.com / password
                </p>
              </div>
              
              {/* Quick Actions */}
              <div className="flex gap-4 justify-center flex-wrap">
                <Button asChild size="lg">
                  <Link href="/dashboard">Protected Route Demo</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/state-demo">State Management Demo</Link>
                </Button>
              </div>
            </div>

            {/* AI Workflow Section */}
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">🤖 AI-Powered Vibe Coding</CardTitle>
                <CardDescription className="text-base">
                  Structured Plan → Build → Ship workflow with Claude Code
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl mb-2">📋</div>
                    <h3 className="font-medium mb-1">/plan</h3>
                    <p className="text-sm text-muted-foreground">AI breaks features into tasks</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl mb-2">⚡</div>
                    <h3 className="font-medium mb-1">/build</h3>
                    <p className="text-sm text-muted-foreground">Execute with quality validation</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl mb-2">🚀</div>
                    <h3 className="font-medium mb-1">/ship</h3>
                    <p className="text-sm text-muted-foreground">Deploy production-ready code</p>
                  </div>
                </div>
                
                <div className="bg-slate-900 text-green-400 p-4 rounded-lg font-mono text-sm">
                  <div className="space-y-1">
                    <div><span className="text-blue-400">claude</span> <span className="text-gray-400"># Start Claude Code</span></div>
                    <div><span className="text-yellow-400">/plan</span> "invoice generator with PDF export"</div>
                    <div><span className="text-yellow-400">/build</span> invoice-generator</div>
                    <div><span className="text-yellow-400">/ship</span> invoice-generator</div>
                    <div className="text-gray-400 mt-2"># 🎉 Working invoice system in hours!</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">
                    Get started with Claude Code (requires Claude Pro/Max)
                  </p>
                  <div className="flex gap-2 justify-center">
                    <Button asChild variant="outline">
                      <Link href="https://claude.ai/code" target="_blank">
                        Install Claude Code →
                      </Link>
                    </Button>
                    <Button asChild variant="secondary" size="sm">
                      <Link href="/CLAUDE.md" target="_blank">
                        View CLAUDE.md
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Example Project */}
            <Card>
              <CardHeader>
                <CardTitle>🎯 Example: Build a User Dashboard</CardTitle>
                <CardDescription>
                  See how the vibe coding workflow transforms ideas into working software
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <p className="font-medium">Plan the Feature</p>
                      <p className="text-sm text-muted-foreground">AI analyzes "user dashboard with analytics" and creates 5-8 concrete tasks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <p className="font-medium">Build with Validation</p>
                      <p className="text-sm text-muted-foreground">Each task includes TypeScript, tests, and quality checks automatically</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <p className="font-medium">Ship Production Code</p>
                      <p className="text-sm text-muted-foreground">Deploy with confidence - comprehensive testing and documentation included</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* What's Included */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">✅ What's Included</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Next.js 15 + React 19
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Authentication (demo + Supabase)
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  shadcn/ui + Tailwind CSS 4
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Zustand + TanStack Query
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Vitest + Playwright Testing
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  TypeScript throughout
                </div>
              </CardContent>
            </Card>

            {/* Live Demo */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🎮 Try It Live</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button asChild variant="outline" className="w-full justify-start" size="sm">
                  <Link href="/login">🔐 Authentication</Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start" size="sm">
                  <Link href="/state-demo">⚡ State Management</Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-start" size="sm">
                  <Link href="/dashboard">👤 User Dashboard</Link>
                </Button>
              </CardContent>
            </Card>

            {/* UI Components Demo */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">🎨 UI Components</CardTitle>
                <CardDescription>shadcn/ui + Tailwind CSS 4</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input placeholder="Beautiful form inputs" />
                <div className="flex gap-2">
                  <Button size="sm">Primary</Button>
                  <Button variant="outline" size="sm">Outline</Button>
                </div>
                <div className="text-xs text-muted-foreground">
                  Professional, accessible, customizable
                </div>
              </CardContent>
            </Card>

            {/* Quick Setup */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">⚡ Quick Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-slate-900 text-green-400 p-3 rounded text-xs font-mono">
                  <div>git clone [repo] my-project</div>
                  <div>cd my-project</div>
                  <div>npm install</div>
                  <div>npm run dev</div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  2 minutes to working app
                </p>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </div>

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