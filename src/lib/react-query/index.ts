/**
 * TanStack Query utilities barrel export
 * 
 * This file exports all React Query-related utilities for easy importing.
 * 
 * Usage:
 * import { createClient, QueryProvider } from '@/lib/react-query'
 */

// Client-side exports
export {
    createClient,
    getQueryClient,
    resetClient,
  } from './client'
  
  // Provider exports
  export { QueryProvider } from './provider'
  
  // Re-export commonly used TanStack Query utilities for convenience
  export {
    useQuery,
    useMutation,
    useQueryClient,
    useInfiniteQuery,
    useSuspenseQuery,
    dehydrate,
    HydrationBoundary,
  } from '@tanstack/react-query'
  
  /**
   * Check if React Query is properly configured
   * Works in both client and server environments
   */
  export function isReactQueryConfigured(): boolean {
    // React Query doesn't need env vars, so it's always "configured"
    // This function exists for consistency with your Supabase pattern
    return true
  }
  
  /**
   * Get React Query configuration info (useful for debugging)
   */
  export function getReactQueryConfig() {
    return {
      devtools: process.env.NODE_ENV === 'development',
      isConfigured: isReactQueryConfigured(),
      environment: process.env.NODE_ENV,
    }
  }