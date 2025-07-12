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
5. **Update the plan** - Check off completed task
6. **Update CLAUDE.md** - Document new patterns, components, or architectural decisions
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

## Task Completion:
Task is only marked complete when:
- All validation gates pass
- Functionality works as specified
- Code meets quality standards
- Plan is updated with progress
- If using phases: Phase completion noted when all phase tasks done

Focus: **One task at a time, done properly**

## Handling Phases:
- Work through tasks sequentially across phases
- Complete Phase 1 before moving to Phase 2
- Update plan to show phase progress
- Consider shipping/demo at end of each phase