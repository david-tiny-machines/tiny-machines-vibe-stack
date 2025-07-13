# Build

Execute next task from: $ARGUMENTS

## Process:
1. **Read the plan** from `planning/{project-name}.md`
2. **Find next unchecked task** in the task breakdown (across all phases if using phases)
3. **Implement with full validation**:
   - Write code following vibe stack patterns
   - Create tests for functionality
   - Ensure TypeScript compliance
   - Test manually in browser
4. **Validation loop** (must pass all):
   - `npm run lint` - Fix linting issues
   - `npm run type-check` - TypeScript passes
   - `npm run test:run` - Unit tests pass
   - `npm run dev` - Manual verification
5. **Update the plan** with implementation details:
   - Check off completed task
   - Add "Implemented:" section with what was built
   - List files created/modified
   - Note any architectural decisions made
6. **Create documentation** (if new patterns established):
   - Add component docs to `/docs/components/` if new reusable components
   - Update README.md if major architectural changes
   - Create API docs in `/docs/api/` if new utilities/hooks
7. **Commit changes** with clear message

## Quality Gates (All Must Pass):
- ✅ TypeScript compiles without errors
- ✅ ESLint passes with zero warnings
- ✅ Tests pass with adequate coverage
- ✅ Feature works correctly in browser
- ✅ Follows vibe stack patterns
- ✅ Mobile responsive
- ✅ Proper error handling

## Implementation Guidelines:
- Use existing shadcn/ui components where possible
- Follow established file structure in `src/`
- Keep components under 200 lines
- Handle loading, error, and empty states
- Add proper TypeScript types
- Include JSDoc documentation for exports

## Enhanced Planning Document Updates:
When checking off tasks, add implementation details:

```markdown
- [x] **Task 1**: Create tour data models and mock tour database ✅
  **Implemented:**
  - Created `src/types/tour.ts` with comprehensive Tour interface
  - Built `src/stores/tour-store.ts` with Zustand store
  - Added 15 sample walking tours across 5 cities
  - Includes tour filtering and search functionality
  
  **Files Created:**
  - `src/types/tour.ts` - TypeScript interfaces
  - `src/stores/tour-store.ts` - State management
  - `src/lib/mock-tours.ts` - Sample data
  
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
- **CLAUDE.md**: Already updated by plan command - no further changes needed

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