'use client'

import { createContext, useContext, useEffect, useState, createElement } from 'react'

// Types
export interface User {
  id: string
  email: string
  fullName?: string
  avatarUrl?: string
}

export interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signup: (email: string, password: string, fullName?: string) => Promise<{ success: boolean; error?: string }>
  logout: () => Promise<void>
  isAuthenticated: boolean
}

// Create context
const AuthContext = createContext<AuthContextType | null>(null)

// Demo constants
const DEMO_EMAIL = 'demo@example.com'
const DEMO_PASSWORD = 'password'
const DEMO_USER_KEY = 'tiny-machines-demo-user'

// Helper functions
function isSupabaseConfigured() {
  return !!(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
}

function getBrowserSupabaseClient() {
  if (!isSupabaseConfigured()) return null
  
  try {
    // Use require for synchronous loading in client components
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { createBrowserClient } = require('@supabase/ssr')
    return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    )
  } catch {
    return null
  }
}

function getDemoUser(): User | null {
  if (typeof window === 'undefined') return null
  try {
    const stored = localStorage.getItem(DEMO_USER_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

function saveDemoUser(user: User | null) {
  if (typeof window === 'undefined') return
  if (user) {
    localStorage.setItem(DEMO_USER_KEY, JSON.stringify(user))
  } else {
    localStorage.removeItem(DEMO_USER_KEY)
  }
}

// Auth Provider using createElement
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  const supabaseEnabled = isSupabaseConfigured()

  useEffect(() => {
    async function init() {
      if (supabaseEnabled) {
        try {
          const supabase = getBrowserSupabaseClient()
          if (supabase) {
            const { data: { session } } = await supabase.auth.getSession()
            
            if (session?.user) {
              setUser({
                id: session.user.id,
                email: session.user.email || '',
                fullName: session.user.user_metadata?.full_name,
                avatarUrl: session.user.user_metadata?.avatar_url,
              })
            }

            // Listen for auth changes
            supabase.auth.onAuthStateChange((event, session) => {
              if (session?.user) {
                setUser({
                  id: session.user.id,
                  email: session.user.email || '',
                  fullName: session.user.user_metadata?.full_name,
                  avatarUrl: session.user.user_metadata?.avatar_url,
                })
              } else {
                setUser(null)
              }
            })
          }
        } catch (error) {
          console.error('Auth init error:', error)
        }
      } else {
        const demoUser = getDemoUser()
        if (demoUser) setUser(demoUser)
      }
      setLoading(false)
    }

    init()
  }, [supabaseEnabled])

  const login = async (email: string, password: string) => {
    setLoading(true)
    
    try {
      if (supabaseEnabled) {
        const supabase = getBrowserSupabaseClient()
        if (!supabase) {
          return { success: false, error: 'Supabase not available' }
        }

        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) return { success: false, error: error.message }
        return { success: true }
      } else {
        // Demo mode - no alerts, just return success/failure
        if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
          const demoUser: User = {
            id: 'demo-123',
            email: DEMO_EMAIL,
            fullName: 'Demo User',
          }
          setUser(demoUser)
          saveDemoUser(demoUser)
          return { success: true }
        } else {
          return { success: false, error: `Invalid credentials. Try: ${DEMO_EMAIL} / ${DEMO_PASSWORD}` }
        }
      }
    } catch {
      return { success: false, error: 'Login failed' }
    } finally {
      setLoading(false)
    }
  }

  const signup = async (email: string, password: string, fullName?: string) => {
    setLoading(true)
    
    try {
      if (supabaseEnabled) {
        const supabase = getBrowserSupabaseClient()
        if (!supabase) {
          return { success: false, error: 'Supabase not available' }
        }

        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { full_name: fullName } },
        })

        if (error) return { success: false, error: error.message }
        return { success: true }
      } else {
        const demoUser: User = {
          id: `demo-${Date.now()}`,
          email,
          fullName: fullName || 'Demo User',
        }
        setUser(demoUser)
        saveDemoUser(demoUser)
        return { success: true }
      }
    } catch {
      return { success: false, error: 'Signup failed' }
    } finally {
      setLoading(false)
    }
  }

  const logout = async () => {
    setLoading(true)
    try {
      if (supabaseEnabled) {
        const supabase = getBrowserSupabaseClient()
        if (supabase) await supabase.auth.signOut()
      } else {
        saveDemoUser(null)
      }
      setUser(null)
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setLoading(false)
    }
  }

  const value: AuthContextType = {
    user,
    loading,
    login,
    signup,
    logout,
    isAuthenticated: !!user,
  }

  // Use createElement to avoid JSX type issues
  return createElement(AuthContext.Provider, { value }, children)
}

// Hook
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}