/**
 * Supabase Server-Side Utility
 * 
 * This client is used in Server Components, Server Actions, and API Routes.
 * It handles server-side authentication using cookies.
 * 
 * Usage:
 * import { createClient } from '@/lib/supabase/server'
 * const supabase = await createClient()
 */

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import type { Database } from '@/lib/supabase/types'

/**
 * Check if Supabase is properly configured
 */
export function isSupabaseConfigured(): boolean {
  return !!(
    process.env.NEXT_PUBLIC_SUPABASE_URL && 
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}

/**
 * Create a Supabase client for Server Components
 * 
 * This function creates a Supabase client that uses cookies for
 * authentication state management on the server side.
 * 
 * @returns Promise<Supabase client instance> or throws if not configured
 */
export async function createClient() {
  // Check if Supabase is configured
  if (!isSupabaseConfigured()) {
    throw new Error(
      'Supabase is not configured. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your environment variables.'
    )
  }

  const cookieStore = await cookies()

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}

/**
 * Get Supabase client safely (returns null if not configured)
 * 
 * Use this when you want to conditionally use Supabase features
 * without throwing errors if it's not configured.
 * 
 * @returns Promise<Supabase client | null>
 */
export async function getSupabaseClient() {
  if (!isSupabaseConfigured()) {
    return null
  }

  try {
    return await createClient()
  } catch {
    return null
  }
}

/**
 * Get the current user from the server-side session
 * 
 * @returns Promise<User | null>
 */
export async function getCurrentUser() {
  const supabase = await getSupabaseClient()
  
  if (!supabase) {
    return null
  }

  try {
    const { data: { user }, error } = await supabase.auth.getUser()
    
    if (error) {
      console.error('Error getting user:', error.message)
      return null
    }
    
    return user
  } catch (error) {
    console.error('Error in getCurrentUser:', error)
    return null
  }
}