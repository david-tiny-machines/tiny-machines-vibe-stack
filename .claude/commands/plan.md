# Plan

Create implementation plan for: $ARGUMENTS

## Instructions:
Create a planning document at `planning/{project-name}.md` with this structure:

```markdown
# Project Name

## Overview
- **What**: Clear description of what we're building
- **Why**: Business value and user impact  
- **Type**: [Prototype/MVP/Feature]
- **Success Criteria**: How we'll know it's working

## Task Breakdown
- [ ] **Task 1**: Clear, actionable description (1-2 hours)
- [ ] **Task 2**: Clear, actionable description (1-2 hours)
- [ ] **Task 3**: Clear, actionable description (1-2 hours)

## Technical Notes
- Key architectural decisions
- Patterns to follow from vibe stack
- Dependencies and integrations needed
```

## Key Guidelines:
- **Use checkboxes** (required for `/build` command)
- **For prototypes**: Focus on concept validation, avoid A/B testing or analytics
- **For complex projects**: Use phases to organize many tasks
- **Keep tasks atomic**: Each task should be completable in 1-2 hours

## Phase Structure (for complex projects):
```markdown
### Phase 1: Foundation
- [ ] **Task 1**: Setup work
- [ ] **Task 2**: Basic structure

### Phase 2: Core Features
- [ ] **Task 3**: Main functionality
- [ ] **Task 4**: Integration work
```

Update CLAUDE.md with project-specific context when plan is complete.