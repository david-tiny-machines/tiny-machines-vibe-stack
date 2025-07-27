'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"

export default function Home() {
  const { isAuthenticated, logout, user } = useAuth()
  
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10">
        <div className="container mx-auto px-8 py-6">
          <div className="flex justify-between items-center">
            <pre className="text-sm text-green-300">
{`⚡ TINY_MACHINES_VIBE_STACK v1.0`}
            </pre>
            <div className="flex gap-3 items-center">
              {isAuthenticated ? (
                <>
                  <span className="text-xs text-green-600 font-mono">
                    {`> user: ${user?.fullName || user?.email || 'guest'}`}
                  </span>
                  <Button variant="outline" onClick={logout} className="border-green-500 text-green-400 hover:bg-green-900 font-mono text-xs">
                    [LOGOUT]
                  </Button>
                </>
              ) : (
                <>
                  <Button asChild className="bg-green-800 hover:bg-green-700 text-green-100 border-0 font-mono text-xs">
                    <Link href="/login">[SIGN_IN]</Link>
                  </Button>
                  <Button asChild className="bg-green-600 hover:bg-green-500 text-black font-mono text-xs">
                    <Link href="/signup">[SIGN_UP]</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - ASCII Art Style */}
      <div className="flex items-center justify-center min-h-screen px-4 pt-32 pb-20">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          
          {/* ASCII Art Main Heading */}
          <div className="space-y-8">
            <pre className="text-sm md:text-base lg:text-lg text-green-400 leading-tight">
{`
███╗   ███╗ █████╗ ███████╗████████╗███████╗██████╗ 
████╗ ████║██╔══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗
██╔████╔██║███████║███████╗   ██║   █████╗  ██████╔╝
██║╚██╔╝██║██╔══██║╚════██║   ██║   ██╔══╝  ██╔══██╗
██║ ╚═╝ ██║██║  ██║███████║   ██║   ███████╗██║  ██║
╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝

 ██████╗ ██████╗ ███╗   ██╗████████╗███████╗██╗  ██╗████████╗
██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔════╝╚██╗██╔╝╚══██╔══╝
██║     ██║   ██║██╔██╗ ██║   ██║   █████╗   ╚███╔╝    ██║   
██║     ██║   ██║██║╚██╗██║   ██║   ██╔══╝   ██╔██╗    ██║   
╚██████╗╚██████╔╝██║ ╚████║   ██║   ███████╗██╔╝ ██╗   ██║   
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚══════╝╚═╝  ╚═╝   ╚═╝   

███████╗███╗   ██╗ ██████╗ ██╗███╗   ██╗███████╗███████╗██████╗ ██╗███╗   ██╗ ██████╗ 
██╔════╝████╗  ██║██╔════╝ ██║████╗  ██║██╔════╝██╔════╝██╔══██╗██║████╗  ██║██╔════╝ 
█████╗  ██╔██╗ ██║██║  ███╗██║██╔██╗ ██║█████╗  █████╗  ██████╔╝██║██╔██╗ ██║██║  ███╗
██╔══╝  ██║╚██╗██║██║   ██║██║██║╚██╗██║██╔══╝  ██╔══╝  ██╔══██╗██║██║╚██╗██║██║   ██║
███████╗██║ ╚████║╚██████╔╝██║██║ ╚████║███████╗███████╗██║  ██║██║██║ ╚████║╚██████╔╝
╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝╚══════╝╚══════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝ 
`}
            </pre>
            <div className="text-xl md:text-2xl text-green-400 tracking-wide font-semibold">
              From idea to working software in hours, not weeks
            </div>
          </div>

          {/* Three-Part Framework in ASCII */}
          <div className="space-y-12">
            <pre className="text-green-300 text-base md:text-lg">
{`
╔══════════════════════════════════════════════════════════════════════════════════════╗
║  🧠 THREE-PART CONTEXT ENGINEERING FRAMEWORK                                        ║
╚══════════════════════════════════════════════════════════════════════════════════════╝
`}
            </pre>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="space-y-4">
                <pre className="text-green-400 text-sm md:text-base leading-tight border border-green-600 p-6 bg-green-950/20 h-80 flex items-center justify-center">
{`
╔═══════════════════════╗
║    BUILDING BLOCKS    ║
╠═══════════════════════╣
║                       ║
║   ███  ███  ███       ║
║   ███  ███  ███       ║
║   ███  ███  ███       ║
║                       ║
║ Tech stack, quality   ║
║ gates & foundations   ║
║                       ║
║ [TypeScript][Next.js] ║
║ [Tailwind][Supabase]  ║
║                       ║
╚═══════════════════════╝
`}
                </pre>
              </div>
              
              <div className="space-y-4">
                <pre className="text-green-400 text-sm md:text-base leading-tight border border-green-600 p-6 bg-green-950/20 h-80 flex items-center justify-center">
{`
╔═══════════════════════╗
║      WORKFLOW         ║
╠═══════════════════════╣
║                       ║
║    ┌──────┐           ║
║    │ PLAN │           ║
║    └───┬──┘           ║
║        │              ║
║    ┌───▼──┐   ┌─────┐ ║
║    │BUILD │──▶│SHIP │ ║
║    └──────┘   └─────┘ ║
║                       ║
║ How to build, session ║
║ memory & processes    ║
║                       ║
╚═══════════════════════╝
`}
                </pre>
              </div>
              
              <div className="space-y-4">
                <pre className="text-green-400 text-sm md:text-base leading-tight border border-green-600 p-6 bg-green-950/20 h-80 flex items-center justify-center">
{`
╔═══════════════════════╗
║    TASK CONTEXT       ║
╠═══════════════════════╣
║                       ║
║        🎯             ║
║    ╔═══════════╗      ║
║    ║ CUSTOMER  ║      ║
║    ║   NEED    ║      ║
║    ╚═════╤═════╝      ║
║          │            ║
║    ╔═════▼═════╗      ║
║    ║ BUSINESS  ║      ║
║    ║   GOAL    ║      ║
║    ╚═══════════╝      ║
║                       ║
╚═══════════════════════╝
`}
                </pre>
              </div>
            </div>
          </div>

          {/* Call to Action in ASCII Style */}
          <div className="space-y-8">
            <div className="flex gap-4 justify-center flex-wrap">
              <Button asChild size="lg" className="bg-green-700 hover:bg-green-600 text-green-100 px-8 py-3 font-mono text-sm border border-green-500">
                <Link href="/dashboard">[PROTECTED_ROUTE_DEMO]</Link>
              </Button>
              <Button asChild size="lg" className="bg-green-800 hover:bg-green-700 text-green-100 border border-green-600 px-8 py-3 font-mono text-sm">
                <Link href="/state-demo">[STATE_MGMT_DEMO]</Link>
              </Button>
              <Button asChild size="lg" className="bg-green-800 hover:bg-green-700 text-green-100 border border-green-600 px-8 py-3 font-mono text-sm">
                <Link href="https://github.com/david-tiny-machines/tiny-machines-vibe-stack" target="_blank">[GITHUB_REPO]</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ASCII Tech Stack Footer */}
      <footer className="bg-black border-t border-green-600 font-mono">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center space-y-8">
            <pre className="text-green-300 text-base md:text-lg">
{`
╔════════════════════════════════════════════════════════════════════════════════════╗
║                              ✅ TECH_STACK_INCLUDED                               ║
╚════════════════════════════════════════════════════════════════════════════════════╝
`}
            </pre>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="border border-green-600 bg-green-950/10 p-6">
                <pre className="text-green-400 text-sm md:text-base leading-tight">
{`
┌─────────────────────┐
│    [FRONTEND]       │
├─────────────────────┤
│                     │
│  ┌─────┐  ┌─────┐   │
│  │NEXT │  │REACT│   │
│  │ 15  │  │ 19  │   │
│  └─────┘  └─────┘   │
│                     │
│  Modern web stack   │
│  with RSC support   │
└─────────────────────┘
`}
                </pre>
              </div>
              
              <div className="border border-green-600 bg-green-950/10 p-6">
                <pre className="text-green-400 text-sm md:text-base leading-tight">
{`
┌─────────────────────┐
│     [BACKEND]       │
├─────────────────────┤
│                     │
│    🔐 AUTH SYSTEM   │
│  ┌─────────────────┐│
│  │   SUPABASE     ││
│  │      +         ││
│  │   DEMO MODE    ││
│  └─────────────────┘│
│                     │
│  Dual auth strategy │
└─────────────────────┘
`}
                </pre>
              </div>
              
              <div className="border border-green-600 bg-green-950/10 p-6">
                <pre className="text-green-400 text-sm md:text-base leading-tight">
{`
┌─────────────────────┐
│       [UI]          │
├─────────────────────┤
│                     │
│  ╔═══════════════╗  │
│  ║   shadcn/ui   ║  │
│  ╚═══════════════╝  │
│         +           │
│  ╔═══════════════╗  │
│  ║ TAILWIND CSS4 ║  │
│  ╚═══════════════╝  │
│                     │
│  Component library  │
└─────────────────────┘
`}
                </pre>
              </div>
              
              <div className="border border-green-600 bg-green-950/10 p-6">
                <pre className="text-green-400 text-sm md:text-base leading-tight">
{`
┌─────────────────────┐
│   [STATE_MGMT]      │
├─────────────────────┤
│                     │
│   ZUSTAND STORE     │
│    ┌───────────┐    │
│    │   STATE   │    │
│    └─────┬─────┘    │
│          │          │
│   ┌──────▼──────┐   │
│   │TANSTACK QUERY│   │
│   └─────────────┘   │
│                     │
│  Client + Server    │
└─────────────────────┘
`}
                </pre>
              </div>
              
              <div className="border border-green-600 bg-green-950/10 p-6">
                <pre className="text-green-400 text-sm md:text-base leading-tight">
{`
┌─────────────────────┐
│     [TESTING]       │
├─────────────────────┤
│                     │
│    ┌─────────────┐  │
│    │   VITEST    │  │
│    │  (Unit/IT)  │  │
│    └─────────────┘  │
│          +          │
│    ┌─────────────┐  │
│    │ PLAYWRIGHT  │  │
│    │    (E2E)    │  │
│    └─────────────┘  │
│                     │
│  Full test coverage │
└─────────────────────┘
`}
                </pre>
              </div>
              
              <div className="border border-green-600 bg-green-950/10 p-6">
                <pre className="text-green-400 text-sm md:text-base leading-tight">
{`
┌─────────────────────┐
│    [LANGUAGE]       │
├─────────────────────┤
│                     │
│   ████████████████  │
│   █ TYPESCRIPT   █  │
│   █              █  │
│   █  End-to-End  █  │
│   █   Type Safe  █  │
│   █              █  │
│   ████████████████  │
│                     │
│  100% TypeScript    │
└─────────────────────┘
`}
                </pre>
              </div>
            </div>
            
            <div className="pt-8 border-t border-green-600">
              <pre className="text-green-500 text-base md:text-lg">
{`
┌─────────────────────────────────────────────────────────────────────────────────┐
│ > Built for product people who want to move fast and build things that matter  │
│ > Optimized for AI-assisted development and rapid prototyping                  │
└─────────────────────────────────────────────────────────────────────────────────┘
`}
              </pre>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}