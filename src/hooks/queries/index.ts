/**
 * TanStack Query hooks barrel export
 * 
 * This file exports all query hooks for data fetching.
 * 
 * Example usage:
 * import { usePosts } from '@/hooks/queries'
 */

export { usePosts, useCreatePost, usePost } from './usePosts'
export type { Post } from './usePosts'

// Export commonly used TanStack Query utilities for convenience
export {
  useQuery,
  useMutation,
  useQueryClient,
  useInfiniteQuery,
  useSuspenseQuery,
} from '@tanstack/react-query'