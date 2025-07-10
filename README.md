# 🧱 Tiny Machines Vibe Stack

A modern, modular base stack designed for **agent-supported** or **vibe-driven coding**, with **optional Supabase integration**, using **Next.js 15**, **React 19**, and **Tailwind CSS 4**.

[![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com)

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/tiny-machines-vibe-stack.git
cd tiny-machines-vibe-stack

# Install dependencies
npm install

# Start developing
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start building! 🚀

## 🎯 Philosophy

This stack is built for developers who want to:
- **Move fast** without sacrificing code quality
- **Work with AI assistants** like Claude Code or GitHub Copilot
- **Start simple** and add complexity as needed
- **Build modern apps** with the latest web technologies

### Why This Stack?
- **Cutting-edge but stable** - Latest versions of proven technologies
- **Optional complexity** - Supabase and advanced features are opt-in
- **AI-optimized** - Clear structure and patterns that work well with AI tools
- **Production-ready** - Built with best practices from day one

## 🛠️ Tech Stack

### Core Framework
- **[Next.js 15.3.5](https://nextjs.org/)** - React framework with App Router *(✅ Implemented)*
- **[React 19.0.0](https://react.dev/)** - Latest stable release with new features *(✅ Implemented)*
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better DX *(✅ Implemented)*

### Styling & UI
- **[Tailwind CSS 4.0](https://tailwindcss.com/)** - Utility-first CSS framework *(✅ Implemented)*
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful, accessible components *(✅ Implemented)*
- **[Lucide Icons](https://lucide.dev/)** - Consistent icon library *(✅ Implemented)*

### State & Data Management
- **[Zustand 5.0.6](https://zustand-demo.pmnd.rs/)** - Lightweight state management *(✅ Implemented)*
- **[TanStack Query 5.82.0](https://tanstack.com/query)** - Server state management *(✅ Implemented)*
- **[Supabase](https://supabase.com/)** - Optional backend (auth, database, storage) *(✅ Implemented)*

### Authentication
- **Demo Mode** - Immediate development with `demo@example.com` / `password` *(✅ Working)*
- **Supabase Auth** - Production-ready authentication when configured *(✅ Ready)*
- **Protected Routes** - Route groups and middleware patterns *(✅ Implemented)*

### Developer Experience
- **[ESLint](https://eslint.org/)** - Code linting *(✅ Configured)*
- **[Turbopack](https://turbo.build/pack)** - Fast development server *(✅ Active)*
- **Path aliases** - Clean imports with `@/` *(✅ Working)*
- **DevTools** - React Query DevTools in development *(✅ Available)*

## 📂 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Public authentication pages
│   │   ├── login/         # Login page with demo mode
│   │   └── signup/        # User registration
│   ├── (protected)/       # Protected route group
│   │   ├── dashboard/     # User dashboard
│   │   └── state-demo/    # State management demo
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Homepage
├── components/
│   ├── ui/                # shadcn/ui components
│   │   ├── button.tsx     # Button variants
│   │   ├── card.tsx       # Card components
│   │   ├── input.tsx      # Form inputs
│   │   └── label.tsx      # Form labels
│   └── index.ts           # Component exports
├── hooks/
│   ├── queries/           # TanStack Query hooks
│   │   ├── usePosts.ts    # Posts API hooks
│   │   └── index.ts       # Query hook exports
│   ├── useAuth.ts         # Authentication hook
│   ├── useCounter.ts      # Counter store hook
│   └── index.ts           # Hook exports
├── lib/
│   ├── react-query/       # TanStack Query configuration
│   │   ├── client.ts      # SSR-safe QueryClient
│   │   ├── provider.tsx   # QueryProvider component
│   │   └── index.ts       # Query utilities
│   ├── supabase/          # Supabase configuration
│   │   ├── client.ts      # Browser client
│   │   ├── server.ts      # Server client
│   │   ├── types.ts       # Database types
│   │   └── index.ts       # Supabase utilities
│   └── utils.ts           # Utility functions
└── stores/
    ├── counter-store.ts   # Zustand counter example
    └── index.ts           # Store exports
```

## 🚀 Features & Demo Pages

### 🏠 Homepage (`/`)
- Component showcase with shadcn/ui
- Stack information and versions
- Quick action buttons for common tasks

### 🔐 Authentication (`/login`, `/signup`)
- **Demo Mode**: Use `demo@example.com` / `password` for immediate testing
- **Supabase Ready**: Automatically switches when environment variables are configured
- Beautiful forms with validation and error handling

### 🛡️ Protected Dashboard (`/dashboard`)
- Session-based access control
- User information display
- Logout functionality

### 🧪 State Management Demo (`/state-demo`)
- **Zustand Counter**: Persistent state with localStorage
- **TanStack Query**: Live API data fetching from JSONPlaceholder
- **Optimistic Updates**: Real-time UI updates
- **Caching**: 5-minute cache with visual indicators

## ⚙️ Configuration

### Environment Variables

Create a `.env.local` file for optional Supabase integration:

```bash
# Optional: Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# The app works perfectly without these - they're optional!
```

### Supabase Setup (Optional)

1. **Create a Supabase project** at [supabase.com](https://supabase.com)
2. **Copy your project URL and anon key** to `.env.local`
3. **Restart your dev server**: `npm run dev`
4. **Authentication automatically switches** from demo mode to Supabase

The stack gracefully handles missing Supabase configuration and provides clear demo mode functionality.

## 🔧 Development

### Available Scripts

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Key Development Features

- **Hot Reload**: Instant updates with Turbopack
- **TypeScript**: Full type safety with strict mode
- **Auto-imports**: Barrel exports for clean imports
- **DevTools**: React Query DevTools in development
- **State Persistence**: Zustand stores persist across reloads

### AI/Agent-Friendly Development

This stack is optimized for AI-assisted development:

- **Clear file organization** with descriptive names
- **Comprehensive TypeScript types** for better AI understanding  
- **Modular architecture** with single responsibility
- **Consistent patterns** throughout the codebase
- **Barrel exports** for clean import statements

#### Working with Claude Code

```bash
# Example Claude Code prompts:
"Add a new Zustand store for user preferences"
"Create a TanStack Query hook for the GitHub API"
"Add a new protected route with authentication"
```

## 🏗️ Building & Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard if using Supabase
```

### Build Verification

```bash
# Ensure clean build
npm run build

# Check for TypeScript errors
npx tsc --noEmit

# Verify Next.js build
npm start
```

## 🧪 Testing the Stack

### Quick Verification

1. **Homepage**: Visit `/` - should show component showcase
2. **Authentication**: Go to `/login` - use `demo@example.com` / `password`
3. **Protected Route**: Access `/dashboard` after login
4. **State Management**: Try `/state-demo` - test counter persistence and API calls

### State Management Testing

```bash
# Test Zustand persistence:
# 1. Visit /state-demo
# 2. Increment counter to any number
# 3. Refresh page - number should persist

# Test TanStack Query:
# 1. Visit /state-demo  
# 2. Click "Create Test Post"
# 3. Watch optimistic updates and caching
```

## 📦 Package Versions

Current versions (as of implementation):

```json
{
  "dependencies": {
    "next": "15.3.5",
    "react": "19.0.0",
    "zustand": "5.0.6",
    "@tanstack/react-query": "5.82.0",
    "@supabase/supabase-js": "2.50.4",
    "tailwindcss": "4.0.0"
  }
}
```

All packages are maintained at their latest stable versions for optimal performance and security.

## 🤝 Contributing

### Development Workflow

1. **Clone and setup**: Follow the Quick Start guide
2. **Create feature branch**: `git checkout -b feature/amazing-feature`
3. **Develop with AI assistance**: Use Claude Code or similar tools
4. **Test thoroughly**: Verify all demo pages work
5. **Submit PR**: With clear description and examples

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended rules
- **Imports**: Use barrel exports (`@/hooks`, `@/lib`, etc.)
- **Components**: Functional components with hooks
- **State**: Zustand for client state, TanStack Query for server state

## 📋 Roadmap

### ✅ Completed Phases
- **Phase 1**: Core App Scaffold (Next.js 15 + React 19 + Tailwind 4.0)
- **Phase 2**: Project Structure & Organization
- **Phase 3**: Optional Supabase Integration
- **Phase 4**: UI/UX Foundation (shadcn/ui + Tailwind)
- **Phase 5**: Authentication & Protected Routes
- **Phase 6**: Data & State Management (Zustand + TanStack Query)

### 🚧 Future Phases
- **Phase 8**: Testing Setup (Vitest + Playwright)
- **Phase 9**: Deployment & Bonus Features

## 📖 Documentation

### Learning Resources

- **[Next.js 15 Docs](https://nextjs.org/docs)** - App Router and React 19 features
- **[Tailwind CSS 4.0](https://tailwindcss.com/docs)** - Latest utility classes
- **[shadcn/ui](https://ui.shadcn.com/)** - Component library documentation
- **[Zustand Guide](https://zustand-demo.pmnd.rs/)** - State management patterns
- **[TanStack Query](https://tanstack.com/query/latest)** - Server state documentation

### Example Patterns

```typescript
// Zustand store pattern
export const useFeatureStore = create<FeatureState>()(
  devtools(
    persist(
      (set) => ({
        // state and actions
      }),
      { name: 'feature-storage' }
    )
  )
)

// TanStack Query pattern
export function useFeatureData() {
  return useQuery({
    queryKey: ['feature'],
    queryFn: fetchFeatureData,
    staleTime: 5 * 60 * 1000,
  })
}
```

## 🐛 Troubleshooting

### Common Issues

**Build Errors**: Ensure all TypeScript types are properly defined
**Hydration Warnings**: Check for client/server state mismatches
**Import Errors**: Verify barrel exports and path aliases
**State Not Persisting**: Check localStorage permissions and store configuration

### Getting Help

1. **Check the demo pages** - `/state-demo` shows working examples
2. **Review the file structure** - Follow established patterns
3. **Use TypeScript errors** - They guide you to solutions
4. **Leverage AI assistance** - Claude Code works great with this stack

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**Built with ❤️ for modern web development**

*This stack represents the state of the art in React development as of 2025, combining the latest stable versions of industry-leading tools with patterns optimized for AI-assisted development.*