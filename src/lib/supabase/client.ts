/**
 * Supabase Client-Side Utility
 * 
 * This client is used in Client Components that run in the browser.
 * It handles authentication state and real-time subscriptions.
 * 
 * Usage:
 * import { createClient } from '@/lib/supabase/client'
 * const supabase = createClient()
 */

import { createBrowserClient } from '@supabase/ssr'
import type { Database } from '@/lib/supabase/types'

let client: ReturnType<typeof createBrowserClient<Database>> | null = null

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
 * Create a Supabase client for Client Components
 * 
 * This function creates a singleton Supabase client that uses cookies
 * for authentication state management in the browser.
 * 
 * @returns Supabase client instance or throws if not configured
 */
export function createClient() {
  // Check if Supabase is configured
  if (!isSupabaseConfigured()) {
    throw new Error(
      'Supabase is not configured. Please add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to your environment variables.'
    )
  }

  // Return existing client if already created (singleton pattern)
  if (client) {
    return client
  }

  // Create new client
  client = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  return client
}

/**
 * Get Supabase client safely (returns null if not configured)
 * 
 * Use this when you want to conditionally use Supabase features
 * without throwing errors if it's not configured.
 * 
 * @returns Supabase client or null
 */
export function getSupabaseClient() {
  if (!isSupabaseConfigured()) {
    return null
  }

  try {
    return createClient()
  } catch {
    return null
  }
}

/**
 * Reset the client singleton (useful for testing)
 */
export function resetClient() {
  client = null
}