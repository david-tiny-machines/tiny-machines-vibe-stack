import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">🧱 Tiny Machines Vibe Stack</h1>
        <p className="text-lg text-muted-foreground">
          Next.js 15 + React 19 + Tailwind CSS 4.0 + shadcn/ui
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Component Showcase */}
        <Card>
          <CardHeader>
            <CardTitle>Component Showcase</CardTitle>
            <CardDescription>
              Testing shadcn/ui components with Tailwind CSS 4.0
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="test-input">Test Input</Label>
              <Input 
                id="test-input" 
                placeholder="Type something..." 
                className="w-full"
              />
            </div>
            
            <div className="flex gap-2">
              <Button>Primary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="secondary">Secondary</Button>
            </div>
          </CardContent>
        </Card>

        {/* Stack Information */}
        <Card>
          <CardHeader>
            <CardTitle>Stack Details</CardTitle>
            <CardDescription>
              Modern web development technologies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Next.js</span>
                <span className="text-muted-foreground">15.3.5</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">React</span>
                <span className="text-muted-foreground">19.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Tailwind CSS</span>
                <span className="text-muted-foreground">4.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">shadcn/ui</span>
                <span className="text-green-600">✅ Working</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Supabase</span>
                <span className="text-muted-foreground">Optional</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Common development tasks for your vibe stack
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
              <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                <span className="text-lg">📚</span>
                <span>Add Components</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                <span className="text-lg">🔐</span>
                <span>Setup Auth</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                <span className="text-lg">🎨</span>
                <span>Customize Theme</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                <span className="text-lg">🚀</span>
                <span>Deploy</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="text-center mt-8 pt-8 border-t">
        <p className="text-sm text-muted-foreground">
          Built with ❤️ for modern web development
        </p>
      </div>
    </main>
  )
}