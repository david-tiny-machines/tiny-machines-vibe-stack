/**
 * Custom React hooks barrel export file
 * 
 * This file exports all custom hooks for easy importing throughout the app.
 * 
 * Example usage:
 * import { useAuth, useCounter } from '@/hooks'
 */

// Auth hooks
export { useAuth } from './useAuth'
export type { User, AuthContextType } from './useAuth'

// Store hooks
export { useCounter } from './useCounter'

// Query hooks
export { usePosts, useCreatePost, usePost } from './queries/usePosts'
export type { Post } from './queries/usePosts'

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
    handleChange: (field: keyof T, value: unknown) => void
    handleSubmit: (onSubmit: (values: T) => void) => (e: React.FormEvent) => void
    reset: () => void
}

export {}; // Prevent TypeScript from treating this as a script