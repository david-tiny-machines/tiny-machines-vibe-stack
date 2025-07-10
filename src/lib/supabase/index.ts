/**
 * Supabase utilities barrel export
 * 
 * This file exports all Supabase-related utilities for easy importing.
 * 
 * Usage:
 * import { createClient, isSupabaseConfigured } from '@/lib/supabase'
 */

// Client-side exports
export {
    createClient as createBrowserClient,
    getSupabaseClient as getBrowserSupabaseClient,
    isSupabaseConfigured as isBrowserSupabaseConfigured,
    resetClient,
  } from './client'
  
  // Server-side exports
  export {
    createClient as createServerClient,
    getSupabaseClient as getServerSupabaseClient,
    isSupabaseConfigured as isServerSupabaseConfigured,
    getCurrentUser,
  } from './server'
  
  // Types exports
  export type {
    Database,
    Tables,
    TablesInsert,
    TablesUpdate,
    Profile,
    User,
    Json,
  } from '@/lib/supabase/types'
  
  /**
   * General utility to check if Supabase is configured
   * Works in both client and server environments
   */
  export function isSupabaseConfigured(): boolean {
    return !!(
      process.env.NEXT_PUBLIC_SUPABASE_URL && 
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    )
  }
  
  /**
   * Get Supabase configuration info (useful for debugging)
   */
  export function getSupabaseConfig() {
    return {
      url: process.env.NEXT_PUBLIC_SUPABASE_URL || null,
      hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      isConfigured: isSupabaseConfigured(),
    }
  }