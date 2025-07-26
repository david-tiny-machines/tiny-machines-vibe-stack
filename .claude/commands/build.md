# Build

Execute next task from: $ARGUMENTS

## Process:
1. **Read the plan** from `planning/$ARGUMENTS.md`
2. **Find next unchecked task** in the task breakdown (across all phases if using phases)
3. **Pre-implementation checks**:
   - Check if dev server is already running on port 3000
   - Verify existing shadcn/ui components before installing new ones
   - Check for existing dependencies before adding new packages
4. **Implement with full validation**:
   - Write code following vibe stack patterns
   - Use existing components from `/src/components/ui/`
   - Create tests for functionality
   - Ensure TypeScript compliance
   - Test manually in browser (skip dev server start if already running)
5. **Validation loop** (must pass all):
   - `npm run lint` - Fix linting issues
   - `npm run type-check` - TypeScript passes
   - `npm run test:run` - Unit tests pass
   - Manual verification (use existing dev server if running)
6. **Update the plan** with implementation details:
   - Check off completed task
   - Add "Implemented:" section with what was built
   - List files created/modified
   - Note any architectural decisions made
7. **Create documentation** (if new patterns established):
   - Add component docs to `/docs/components/` if new reusable components
   - Update README.md if major architectural changes
   - Create API docs in `/docs/api/` if new utilities/hooks
8. **Commit changes** with clear message

## Component Installation Guidelines:
- **ALWAYS check existing components first** in `/src/components/ui/`
- **Only install new shadcn/ui components if needed** and not already present
- **Use this command to check**: `ls src/components/ui/` before any `npx shadcn@latest add` commands
- **Examples of Existing components available**:
  - Button (`button.tsx`)
  - Card (`card.tsx`) 
  - Input (`input.tsx`)
  - Label (`label.tsx`)
- **Installation check pattern**:
  ```bash
  # Check if component exists
  if [ ! -f "src/components/ui/[component].tsx" ]; then
    npx shadcn@latest add [component]
  else
    echo "Component [component] already exists, using existing version"
  fi
  ```

## Dev Server Management:
- **Check if dev server is running** before starting:
  ```bash
  # Check if port 3000 is in use
  if ! lsof -i :3000 > /dev/null 2>&1; then
    echo "Starting dev server..."
    npm run dev &
    sleep 3
  else
    echo "Dev server already running on port 3000"
  fi
  ```
- **Use existing server** for manual testing if already running
- **Don't start multiple dev servers**

## Quality Gates (All Must Pass):
- ✅ TypeScript compiles without errors
- ✅ ESLint passes with zero warnings
- ✅ Tests pass with adequate coverage
- ✅ Feature works correctly in browser
- ✅ Follows vibe stack patterns
- ✅ Mobile responsive
- ✅ Proper error handling

## Implementation Guidelines:
- Follow established file structure in `src/`
- Keep components under 200 lines
- Handle loading, error, and empty states
- Add proper TypeScript types
- Include JSDoc documentation for exports

## Testing Requirements:
- **Unit Tests**: Use Vitest (NOT Jest) with React Testing Library
- **Test Files**: Place alongside components with `.test.tsx` suffix
- **Setup**: Import from `@/test/setup.ts` for test utilities
- **Commands**: Use `npm run test:run` for CI, `npm run test` for watch mode

## Enhanced Planning Document Updates:
When checking off tasks, add implementation details:

```markdown
- [x] **Task 1**: Create tour data models and mock tour database ✅
  **Implemented:**
  - Created `src/types/tour.ts` with comprehensive Tour interface
  - Built `src/stores/tour-store.ts` with Zustand store
  - Added 15 sample walking tours across 5 cities
  - Includes tour filtering and search functionality
  - **Components Used:** Existing Button, Card, Input components (no new installations)
  
  **Files Created:**
  - `src/types/tour.ts` - TypeScript interfaces
  - `src/stores/tour-store.ts` - State management
  - `src/lib/mock-tours.ts` - Sample data
  
  **Dependencies Added:** None (used existing stack)
  
  **Tests Added:**
  - `src/stores/__tests__/tour-store.test.ts` - Store functionality
  
  **Patterns Established:**
  - Zustand store pattern for entity management
  - Mock data structure for prototype testing
```

## Documentation Strategy:
- **Planning Document**: Update with implementation details and progress
- **Component Docs**: Create in `/docs/components/` for reusable components
- **API Docs**: Document new hooks/utilities in `/docs/api/`
- **README Updates**: Only for major architectural changes

## Task Completion:
Task is only marked complete when:
- All validation gates pass
- Functionality works as specified
- Code meets quality standards
- Plan is updated with implementation details
- Appropriate documentation created
- If using phases: Phase completion noted when all phase tasks done

## Handling Phases:
- Work through tasks sequentially across phases
- Complete Phase 1 before moving to Phase 2
- Update plan to show phase progress
- Consider shipping/demo at end of each phase

Focus: **One task at a time, done properly, documented clearly**