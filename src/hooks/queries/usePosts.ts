'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

/**
 * Post type definition
 */
export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

/**
 * Fetch posts from JSONPlaceholder API
 */
async function fetchPosts(): Promise<Post[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  
  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }
  
  return response.json()
}

/**
 * Create a new post
 */
async function createPost(post: Omit<Post, 'id'>): Promise<Post> {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  })
  
  if (!response.ok) {
    throw new Error('Failed to create post')
  }
  
  return response.json()
}

/**
 * Hook to fetch posts
 * 
 * @returns Query result with posts data
 */
export function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

/**
 * Hook to create a new post
 * 
 * @returns Mutation for creating posts
 */
export function useCreatePost() {
  const queryClient = useQueryClient()
  
  return useMutation({
    mutationFn: createPost,
    onSuccess: (newPost) => {
      // Optimistically update the posts cache
      queryClient.setQueryData<Post[]>(['posts'], (old) => {
        return old ? [newPost, ...old] : [newPost]
      })
    },
    onError: () => {
      // Invalidate and refetch posts on error
      queryClient.invalidateQueries({ queryKey: ['posts'] })
    },
  })
}

/**
 * Hook to get a single post by ID
 * 
 * @param postId - The ID of the post to fetch
 * @returns Query result with post data
 */
export function usePost(postId: number) {
  return useQuery({
    queryKey: ['posts', postId],
    queryFn: async (): Promise<Post> => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      )
      
      if (!response.ok) {
        throw new Error('Failed to fetch post')
      }
      
      return response.json()
    },
    enabled: !!postId,
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}