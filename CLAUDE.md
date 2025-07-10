# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Tiny Machines Vibe Stack** - a Next.js 15 + React 19 + Tailwind CSS 4.0 + Supabase starter designed for rapid product development and AI-assisted coding. The stack includes authentication, UI components, state management, and is optimized for working with AI coding assistants.

## Development Commands

### Core Development
- `npm run dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

### Demo Authentication
- **Demo Login**: `demo@example.com` / `password`
- The app works in demo mode without Supabase configuration
- Real Supabase auth requires `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Architecture Overview

### Route Structure
- **App Router**: Uses Next.js 15 app directory structure
- **Route Groups**: 
  - `(auth)/` - Login/signup pages
  - `(protected)/` - Protected dashboard and user areas
- **TypeScript Path Mapping**: `@/*` maps to `./src/*`

### State Management Architecture
The project uses a hybrid state management approach:

1. **Authentication State**: Custom React Context (`useAuth`) handles user sessions
2. **Server State**: TanStack Query for API data fetching and caching
3. **Client State**: Zustand stores for local application state
4. **Demo Mode**: Falls back to localStorage when Supabase isn't configured

### Authentication Flow
- **Dual Mode**: Works with either Supabase auth or demo mode
- **Context Provider**: `AuthProvider` wraps the entire app in `layout.tsx`
- **Auto-Detection**: Checks for Supabase env vars and falls back to demo mode
- **Session Management**: Handles both real auth sessions and demo localStorage

### UI Component System
- **shadcn/ui**: Component library built on Radix UI primitives
- **Tailwind CSS 4.0**: Latest version with improved performance
- **Design Tokens**: Uses CSS variables for theming
- **Component Location**: `/src/components/ui/` for base components

### Data Layer Structure
```
src/lib/
├── supabase/          # Supabase client configuration
│   ├── client.ts      # Browser client
│   ├── server.ts      # Server-side client
│   └── types.ts       # Database type definitions
├── react-query/       # TanStack Query setup
│   ├── client.ts      # Query client configuration
│   └── provider.tsx   # Query provider wrapper
└── utils.ts           # Utility functions (cn, etc.)
```

### Hook Organization
```
src/hooks/
├── useAuth.ts         # Authentication context and provider
├── useCounter.ts      # Demo counter hook
└── queries/           # TanStack Query hooks
    ├── usePosts.ts    # Example API query hook
    └── index.ts       # Query hook exports
```

## Key Implementation Patterns

### Environment-Aware Authentication
The auth system automatically detects if Supabase is configured and falls back to demo mode. This allows the app to work immediately without any setup.

### Component Import Strategy
- Base UI components from `/src/components/ui/`
- Business components from `/src/components/`
- Always use the barrel exports from `/src/components/index.ts`

### State Management Guidelines
- Use `useAuth()` for authentication state
- Use TanStack Query hooks for server data
- Use Zustand stores for complex client state
- Use React's built-in state for simple component state

### Styling Approach
- Tailwind CSS classes for all styling
- Use `cn()` utility for conditional classes
- CSS variables in `globals.css` for design tokens
- Component variants with `class-variance-authority`

## Testing and Quality

### Available Scripts
- Lint checks: `npm run lint`
- No test framework is currently configured
- ESLint configuration includes TanStack Query rules

### Code Quality Tools
- **ESLint**: Configured with Next.js and TanStack Query rules
- **TypeScript**: Strict mode enabled
- **Prettier**: Not configured (consider adding)

## Deployment Notes

### Environment Variables
Required for production Supabase auth:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Build Configuration
- Next.js 15 with Turbopack for development
- Static export compatible
- Optimized for Vercel deployment

## AI Development Guidelines

### When Adding Features
1. Check existing patterns in similar components
2. Use the established authentication flow
3. Follow the component organization structure
4. Maintain the dual-mode (demo/production) approach

### Common Tasks
- **Adding protected routes**: Place in `(protected)` route group
- **Adding UI components**: Use shadcn/ui patterns in `/src/components/ui/`
- **Adding API calls**: Create TanStack Query hooks in `/src/hooks/queries/`
- **Adding client state**: Create Zustand stores in `/src/stores/`

### File Naming Conventions
- React components: PascalCase (e.g., `UserProfile.tsx`)
- Hooks: camelCase starting with "use" (e.g., `useUserData.ts`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Stores: kebab-case with "-store" suffix (e.g., `user-store.ts`)