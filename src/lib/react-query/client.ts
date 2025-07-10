import {
    isServer,
    QueryClient,
    defaultShouldDehydrateQuery,
  } from '@tanstack/react-query'
  
  let client: QueryClient | undefined = undefined
  
  /**
   * Create a QueryClient instance with optimal defaults for Next.js App Router
   * 
   * Features:
   * - SSR-compatible configuration
   * - Stale time for better SSR performance  
   * - Dehydration of pending queries for streaming
   * - Error handling optimized for Next.js
   */
  function makeQueryClient() {
    return new QueryClient({
      defaultOptions: {
        queries: {
          // With SSR, we usually want to set some default staleTime
          // above 0 to avoid refetching immediately on the client
          staleTime: 60 * 1000, // 1 minute
          // Retry configuration
          retry: (failureCount, error: any) => {
            // Don't retry on 4xx errors
            if (error?.status >= 400 && error?.status < 500) {
              return false
            }
            return failureCount < 3
          },
        },
        mutations: {
          retry: false, // Don't retry mutations by default
        },
        dehydrate: {
          // Include pending queries in dehydration for streaming
          shouldDehydrateQuery: (query) =>
            defaultShouldDehydrateQuery(query) ||
            query.state.status === 'pending',
        },
      },
    })
  }
  
  /**
   * Get or create a QueryClient instance
   * 
   * Server: Always creates a new instance per request
   * Browser: Reuses the same instance to maintain cache
   */
  export function createClient() {
    if (isServer) {
      // Server: always make a new query client
      return makeQueryClient()
    } else {
      // Browser: make a new query client if we don't already have one
      // This is very important, so we don't re-make a new client if React
      // suspends during the initial render
      if (!client) client = makeQueryClient()
      return client
    }
  }
  
  /**
   * Get QueryClient safely (similar to your Supabase pattern)
   */
  export function getQueryClient() {
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
    client = undefined
  }