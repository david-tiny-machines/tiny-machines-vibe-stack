/**
 * Custom React hooks barrel export file
 * 
 * This file exports all custom hooks for easy importing throughout the app.
 * 
 * Example usage:
 * import { useAuth, useLocalStorage } from '@/hooks'
 */

// Auth hooks (will be implemented in Phase 5)
// export { useAuth } from './use-auth'
// export { useUser } from './use-user'

// UI/UX hooks
// export { useTheme } from './use-theme'
// export { useLocalStorage } from './use-local-storage'

// Data fetching hooks (will be implemented in Phase 6)
// export { useQuery } from '@tanstack/react-query' // Re-export for convenience

/**
 * Common hook utilities and types
 */

/**
 * Hook return type helper for async operations
 */
export type AsyncHookReturn<T> = {
    data: T | null
    loading: boolean
    error: Error | null
    refetch: () => void
  }
  
  /**
   * Hook return type for form handling
   */
  export type FormHookReturn<T> = {
    values: T
    errors: Partial<Record<keyof T, string>>
    touched: Partial<Record<keyof T, boolean>>
    handleChange: (field: keyof T, value: any) => void
    handleSubmit: (onSubmit: (values: T) => void) => (e: React.FormEvent) => void
    reset: () => void
  }
  
  export {}; // Prevent TypeScript from treating this as a script