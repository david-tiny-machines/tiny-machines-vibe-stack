'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"

export default function Home() {
  const { isAuthenticated, logout, user } = useAuth()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-medium text-slate-300">⚡ Tiny Machines Vibe Stack</h1>
            <div className="flex gap-3 items-center">
              {isAuthenticated ? (
                <>
                  <span className="text-sm text-slate-400">
                    Welcome back, {user?.fullName || user?.email || 'User'}!
                  </span>
                  <Button variant="outline" onClick={logout} className="border-slate-600 text-slate-300 hover:bg-slate-700">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild className="bg-slate-700 hover:bg-slate-600 text-white border-0">
                    <Link href="/login">Sign In</Link>
                  </Button>
                  <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Centered Slide */}
      <div className="flex items-center justify-center min-h-screen px-8 pt-32 pb-20">
        <div className="max-w-6xl mx-auto text-center space-y-20">
          
          {/* Main Heading */}
          <div className="space-y-10">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              Master Context Engineering
            </h1>
          </div>

          {/* Context Engineering Framework */}
          <div className="space-y-16">
            <div className="flex items-center justify-center gap-4">
              <span className="text-4xl">🧠</span>
              <h2 className="text-3xl font-semibold text-white">Three-Part Context Engineering Framework</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-16 max-w-5xl mx-auto">
              <div className="space-y-6 p-8 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800/40 transition-all duration-300">
                <div className="text-6xl">🧱</div>
                <h3 className="text-2xl font-semibold text-white">Building Blocks</h3>
                <p className="text-slate-300 text-lg">(Tech stack, quality gates)</p>
              </div>
              
              <div className="space-y-6 p-8 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800/40 transition-all duration-300">
                <div className="text-6xl">🌊</div>
                <h3 className="text-2xl font-semibold text-white">Workflow</h3>
                <p className="text-slate-300 text-lg">(How to build, session memory)</p>
              </div>
              
              <div className="space-y-6 p-8 rounded-2xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:bg-slate-800/40 transition-all duration-300">
                <div className="text-6xl">🎯</div>
                <h3 className="text-2xl font-semibold text-white">Task Context</h3>
                <p className="text-slate-300 text-lg">(Customer + business need)</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-12">
            <p className="text-2xl text-slate-200">
              👇 Try it live or follow along during the demo.
            </p>
            
            <div className="flex gap-6 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                <Link href="/dashboard">📝 Protected Route Demo</Link>
              </Button>
              <Button asChild size="lg" className="bg-slate-700 hover:bg-slate-600 text-white border-0 px-12 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                <Link href="/state-demo">📦 State Management Demo</Link>
              </Button>
              <Button asChild size="lg" className="bg-slate-700 hover:bg-slate-600 text-white border-0 px-12 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                <Link href="https://github.com/david-tiny-machines/tiny-machines-vibe-stack" target="_blank">📚 Repo on GitHub</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Footer */}
      <footer className="bg-slate-900/80 border-t border-slate-700/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="text-center space-y-12">
            <h3 className="text-3xl font-semibold text-white">✅ What's Included</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:border-blue-500/50 hover:from-slate-800/80 hover:to-slate-800/50 transition-all duration-300 hover:scale-105">
                <div className="space-y-2">
                  <div className="text-blue-400 font-semibold text-sm uppercase tracking-wider">Frontend</div>
                  <div className="text-white font-medium text-lg leading-tight">Next.js 15 + React 19</div>
                </div>
              </div>
              
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:border-purple-500/50 hover:from-slate-800/80 hover:to-slate-800/50 transition-all duration-300 hover:scale-105">
                <div className="space-y-2">
                  <div className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Backend</div>
                  <div className="text-white font-medium text-lg leading-tight">Authentication<br/><span className="text-slate-300 text-base">(demo + Supabase)</span></div>
                </div>
              </div>
              
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:border-amber-500/50 hover:from-slate-800/80 hover:to-slate-800/50 transition-all duration-300 hover:scale-105">
                <div className="space-y-2">
                  <div className="text-amber-400 font-semibold text-sm uppercase tracking-wider">UI</div>
                  <div className="text-white font-medium text-lg leading-tight">shadcn/ui +<br/>Tailwind CSS 4</div>
                </div>
              </div>
              
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:border-emerald-500/50 hover:from-slate-800/80 hover:to-slate-800/50 transition-all duration-300 hover:scale-105">
                <div className="space-y-2">
                  <div className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">State Management</div>
                  <div className="text-white font-medium text-lg leading-tight">Zustand +<br/>TanStack Query</div>
                </div>
              </div>
              
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:border-rose-500/50 hover:from-slate-800/80 hover:to-slate-800/50 transition-all duration-300 hover:scale-105">
                <div className="space-y-2">
                  <div className="text-rose-400 font-semibold text-sm uppercase tracking-wider">Testing</div>
                  <div className="text-white font-medium text-lg leading-tight">Vitest +<br/>Playwright Testing</div>
                </div>
              </div>
              
              <div className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/50 hover:from-slate-800/80 hover:to-slate-800/50 transition-all duration-300 hover:scale-105">
                <div className="space-y-2">
                  <div className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Language</div>
                  <div className="text-white font-medium text-lg leading-tight">TypeScript<br/>throughout</div>
                </div>
              </div>
            </div>
            
            <div className="pt-8 border-t border-slate-700/30">
              <p className="text-slate-400 text-lg italic">
                Built for product people who want to move fast and build things that matter.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}