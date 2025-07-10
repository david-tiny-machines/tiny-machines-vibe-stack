'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
    <div className="container mx-auto px-4 py-8 max-w-4xl space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">State Management Demo</h1>
        <p className="text-muted-foreground">Phase 6: Data & State Management</p>
      </div>
      
      {/* Zustand Counter Test */}
      <Card>
        <CardHeader>
          <CardTitle>🐻 Zustand Counter Store</CardTitle>
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

      {/* Implementation Status */}
      <Card>
        <CardHeader>
          <CardTitle>🎯 Implementation Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <h4 className="font-medium mb-2">✅ Completed:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>✅ Zustand v5.0.6 integrated</li>
                <li>✅ TanStack Query v5.82.0 setup</li>
                <li>✅ SSR-safe patterns implemented</li>
                <li>✅ TypeScript types working</li>
                <li>✅ DevTools available in development</li>
                <li>✅ Consistent file structure</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">🔄 Working:</h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• State persistence (localStorage)</li>
                <li>• Query caching and invalidation</li>
                <li>• Optimistic updates</li>
                <li>• Error handling</li>
                <li>• Development experience</li>
                <li>• Production-ready patterns</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}