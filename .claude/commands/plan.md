# Plan

Create implementation plan for: $ARGUMENTS

## What This Creates:
1. **High-level overview** of what we're building and why
2. **Task breakdown** with 5-8 concrete tasks
3. **Simple project document** to guide development
4. **Updated CLAUDE.md** to reflect the new project context

## Planning Document Structure:

### Overview
- **What**: Clear description of what we're building
- **Why**: Business value and user impact
- **Success Criteria**: How we'll know it's working

### Task Breakdown
Break the work into concrete, actionable tasks. Typical range:
- **Simple features**: 3-5 tasks
- **Standard features**: 5-8 tasks  
- **Complex features**: 8-15 tasks
- **Large projects**: 15+ tasks (consider breaking into phases)

Example structures:

**Simple Project:**
- [ ] **Task 1**: Setup and foundation work
- [ ] **Task 2**: Core functionality implementation  
- [ ] **Task 3**: User interface and experience
- [ ] **Task 4**: Integration and data handling
- [ ] **Task 5**: Testing and polish

**Complex Project (use phases):**
### Phase 1: Foundation
- [ ] **Task 1**: Database schema and models
- [ ] **Task 2**: Authentication system
- [ ] **Task 3**: Basic API structure

### Phase 2: Core Features  
- [ ] **Task 4**: User management interface
- [ ] **Task 5**: Main feature implementation
- [ ] **Task 6**: Data processing logic

### Phase 3: Polish & Deploy
- [ ] **Task 7**: Testing and validation
- [ ] **Task 8**: Performance optimization
- [ ] **Task 9**: Deployment setup

### Technical Notes
- Key architectural decisions
- Patterns to follow from vibe stack
- Dependencies and integrations needed

## CLAUDE.md Updates:
When creating the plan, update CLAUDE.md to reflect the specific project:

### Replace generic vibe stack description with:
- **Project purpose** and business context
- **Key architecture decisions** for this specific prototype
- **Project-specific constraints** and requirements
- **Custom workflows** if any established
- **Domain-specific patterns** to follow

### Keep existing sections:
- Available planning commands (`/plan`, `/build`, `/ship`)
- Quality gates and validation requirements
- Core development patterns from vibe stack

## Task Structure:
Each task should be:
- **Clear and actionable** - developer knows what to do
- **Testable** - can verify when it's complete
- **Atomic** - can be completed in 1-2 hours
- **Progressive** - builds on previous tasks

## Process:
1. **Understand the project** from the description
2. **Create planning document** at `planning/{project-name}.md`
3. **Update CLAUDE.md** with project-specific context
4. **Commit the plan** with clear message

Save as `planning/{project-name}.md`

Always start with a plan. No exceptions.