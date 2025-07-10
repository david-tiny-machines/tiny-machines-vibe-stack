'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useCounter } from "@/hooks/useCounter"
import { usePosts, useCreatePost } from "@/hooks/queries/usePosts"

export default function StateDemoPage() {
  const { count, increment, decrement, reset } = useCounter()
  const { data: posts, isLoading, error } = usePosts()
  const createPostMutation = useCreatePost()

  const handleCreatePost = () => {
    createPostMutation.mutate({
      title: 'Test Post from Vibe Stack',
      body: 'This is a test post created from the Tiny Machines Vibe Stack!',
      userId: 1,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">State Management Demo</h1>
            <Button asChild variant="outline">
              <Link href="/">← Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-6xl space-y-8">
      
        {/* Zustand Counter Test */}
        <Card>
          <CardHeader>
            <CardTitle>🐻 Zustand Counter Store</CardTitle>
            <CardDescription>
              Client-side state management with persistence
            </CardDescription>
          </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <p className="text-4xl font-mono font-bold text-primary">
              {count}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Persisted in localStorage • Try refreshing the page
            </p>
          </div>
          <div className="flex gap-2 justify-center">
            <Button onClick={increment} size="lg">
              Increment
            </Button>
            <Button onClick={decrement} variant="outline" size="lg">
              Decrement
            </Button>
            <Button onClick={reset} variant="secondary" size="lg">
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>

        {/* TanStack Query Test */}
        <Card>
          <CardHeader>
            <CardTitle>⚡ TanStack Query Posts</CardTitle>
            <CardDescription>
              Server state management with caching and mutations
            </CardDescription>
          </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button 
              onClick={handleCreatePost}
              disabled={createPostMutation.isPending}
              variant="default"
            >
              {createPostMutation.isPending ? 'Creating...' : 'Create Test Post'}
            </Button>
            {createPostMutation.isSuccess && (
              <p className="text-green-600 text-sm self-center">
                ✅ Post created successfully!
              </p>
            )}
          </div>
          
          {isLoading && (
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary"></div>
              <p>Loading posts...</p>
            </div>
          )}
          
          {error && (
            <p className="text-red-500 text-sm">
              Error: {error.message}
            </p>
          )}
          
          {posts && (
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <p className="font-medium">
                  Posts ({posts.length})
                </p>
                <p className="text-xs text-muted-foreground">
                  Cached for 5 minutes
                </p>
              </div>
              <div className="max-h-64 overflow-y-auto space-y-2 border rounded-lg p-3">
                {posts.slice(0, 10).map((post, index) => (
                  <div 
                    key={`${post.id}-${index}`}
                    className="p-3 bg-muted/50 rounded-md text-sm space-y-1"
                  >
                    <p className="font-medium line-clamp-1">
                      {post.id}. {post.title}
                    </p>
                    <p className="text-muted-foreground line-clamp-2">
                      {post.body}
                    </p>
                  </div>
                ))}
                {posts.length > 10 && (
                  <p className="text-center text-xs text-muted-foreground py-2">
                    ... and {posts.length - 10} more posts
                  </p>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

        {/* Tech Stack Info */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>✅ What&apos;s Working</CardTitle>
              <CardDescription>
                Ready-to-use state management features
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Zustand for client state
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  TanStack Query for server state
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  Persistent storage
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  TypeScript support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  DevTools integration
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>🚀 Ready for Production</CardTitle>
              <CardDescription>
                Battle-tested patterns and optimizations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Query caching & invalidation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Optimistic updates
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Error handling
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  SSR-safe patterns
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Performance optimized
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}