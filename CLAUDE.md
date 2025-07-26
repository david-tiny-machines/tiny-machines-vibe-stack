# CLAUDE.md

## Project Overview

This is the **Tiny Machines Vibe Stack** - a Next.js 15 + React 19 + Tailwind CSS 4.0 + Supabase starter designed for rapid product development and AI-assisted coding. The stack includes authentication, UI components, state management, comprehensive testing, and is optimized for working with AI coding assistants.

## 🤖 Planning Workflow Commands
- `/plan [description]` - Create project plan with task breakdown
- `/build [project-name]` - Execute next task with validation
- `/ship [project-name]` - Complete and deploy project

## 🔄 Development Flow
```
Plan → Build → Ship
```

## Development Commands

### Core Development
- `npm run dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint checks

### Testing Commands
- `npm run test` - Run Vitest in watch mode
- `npm run test:run` - Run all unit tests once
- `npm run test:ui` - Open Vitest UI in browser
- `npx playwright test` - Run E2E tests
- `npx playwright test --headed` - Run E2E tests with browser visible
- `npx playwright show-report` - View E2E test results

### Quality Pipeline
- `npm run type-check` - TypeScript validation
- `npm run validate` - Run all checks (type-check + lint + test:run)

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

### Adding Protected Routes
- **Always use the `(protected)` route group** for authenticated pages
- **Example**: New dashboard page goes in `src/app/(protected)/my-feature/page.tsx`
- **Authentication**: The route group automatically applies auth checking via layout
- **Pattern**: Follow existing pages like `dashboard` and `state-demo`

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

### Testing Architecture
- **Unit/Component Tests**: Vitest + React Testing Library
- **E2E Tests**: Playwright with cross-browser support
- **Test Location**: Unit tests alongside components, E2E tests in `/tests/`
- **Quality Gates**: All tests must pass before task completion

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

### Testing Standards
- **Unit Tests**: Test components, hooks, and utilities in isolation
- **Integration Tests**: Test component interactions and data flow
- **E2E Tests**: Test complete user workflows across browsers
- **Test Coverage**: Aim for meaningful coverage, not just percentages

## Quality Standards

### Required for Every Task
- [ ] TypeScript compiles without errors
- [ ] ESLint passes with zero warnings
- [ ] Tests written and passing
- [ ] JSDoc documentation for exports
- [ ] Manual testing in browser
- [ ] Mobile responsive design

### Testing Requirements
- [ ] Unit tests for new components/hooks
- [ ] E2E tests for new user flows
- [ ] Error handling tested
- [ ] Loading states tested
- [ ] Edge cases covered

## 🚫 Forbidden Practices
- **NEVER use `any` type** - use proper TypeScript
- **NEVER skip tests** for new features  
- **NEVER trust external data** without Zod validation
- **NEVER exceed 200 lines** per component
- **NEVER ship without running quality pipeline**
- **NEVER use Jest** - use Vitest for all unit testing

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
5. Write tests for new functionality

### Planning Workflow
1. **Always start with `/plan`** - No exceptions
2. **Use `/build`** for incremental implementation
3. **Complete with `/ship`** when ready for users
4. **Update this CLAUDE.md** with new patterns discovered

### Common Tasks
- **Adding protected routes**: Place in `(protected)` route group
- **Adding UI components**: Use shadcn/ui patterns in `/src/components/ui/`
- **Adding API calls**: Create TanStack Query hooks in `/src/hooks/queries/`
- **Adding client state**: Create Zustand stores in `/src/stores/`
- **Adding tests**: Unit tests alongside components, E2E tests in `/tests/`

### File Naming Conventions
- React components: PascalCase (e.g., `UserProfile.tsx`)
- Hooks: camelCase starting with "use" (e.g., `useUserData.ts`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Stores: kebab-case with "-store" suffix (e.g., `user-store.ts`)
- Tests: Same as source file with `.test.tsx` or `.spec.ts` suffix

## Project Structure
```
├── .claude/commands/         # Claude Code slash commands
├── planning/                 # Project planning documents
│   └── completed/            # Archived completed projects
├── src/                      # Application source code
├── tests/                    # E2E Playwright tests
├── tests-examples/           # Playwright examples and reference
├── docs/                     # Generated documentation
└── Configuration files       # All tools pre-configured
```