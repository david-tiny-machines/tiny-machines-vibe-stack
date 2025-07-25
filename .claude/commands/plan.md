# Plan

Create implementation plan for: $ARGUMENTS

## Input Handling:
- **Direct Description**: `/plan "feature description"`
- **PRD File**: `/plan docs/requirements/{prd-name}.md`
- **Auto-detect**: Check if argument is a file path vs description

## PRD File Processing:
If argument is a PRD file path:
1. **Read the PRD** from the specified file
2. **Extract key information**:
   - Product name from title
   - Core features from Functional Requirements section
   - Acceptance criteria for task breakdown
   - Success metrics for validation
3. **Create implementation plan** based on PRD content
4. **Reference original PRD** in the planning document

## Instructions:
Create a planning document at `planning/{project-name}.md` with this structure:

```markdown
# Project Name

## Overview
- **What**: Clear description of what we're building
- **Why**: Business value and user impact  
- **Type**: [Prototype/MVP/Feature]
- **Source**: [Direct input / PRD: docs/requirements/{prd-name}.md]
- **Success Criteria**: How we'll know it's working

## Requirements Summary (if from PRD)
- **Original PRD**: [Link to source PRD file]
- **Key Features**: [Extracted from PRD functional requirements]
- **Acceptance Criteria**: [High-level acceptance criteria]

## Task Breakdown
- [ ] **Task 1**: Clear, actionable description
- [ ] **Task 2**: Clear, actionable description
- [ ] **Task 3**: Clear, actionable description

## Technical Notes
- Key architectural decisions
- Patterns to follow from vibe stack
- **Existing Components**: Use Button, Card, Input, Label from `/src/components/ui/`
- **Available Libraries**: Zustand, TanStack Query, shadcn/ui, Tailwind CSS
- Dependencies and integrations needed

## Implementation Guidelines
- **Component Strategy**: Use existing shadcn/ui components where possible
- **State Management**: Zustand for client state, TanStack Query for server state
- **Testing**: Unit tests with Vitest, E2E with Playwright
```

## PRD Integration Template:
When planning from a PRD, include this additional section:

```markdown
## PRD Mapping
- **Original Document**: [docs/requirements/{prd-name}.md]
- **Features Implemented**: 
  - [ ] [Feature 1 from PRD] → Task 1, Task 2
  - [ ] [Feature 2 from PRD] → Task 3, Task 4
  - [ ] [Feature 3 from PRD] → Task 5
- **Success Metrics**: [Extracted from PRD]
- **User Personas**: [Primary persona from PRD]
- **Validation Plan**: [How to test against PRD requirements]
```

## Key Guidelines:
- **Use checkboxes** (required for `/build` command)
- **For prototypes**: Focus on concept validation, avoid A/B testing or analytics
- **For complex projects**: Use phases to organize many tasks
- **Keep tasks atomic**: Each task should be achievable within one context window
- **Prioritize existing resources**: Don't install what's already available
- **Reference source**: Always link back to original PRD if applicable

## Component Availability Check:
Before planning, note existing components to avoid unnecessary installations:
- ✅ Button (`src/components/ui/button.tsx`)
- ✅ Card (`src/components/ui/card.tsx`)
- ✅ Input (`src/components/ui/input.tsx`)
- ✅ Label (`src/components/ui/label.tsx`)

## Phase Structure (for complex projects):
```markdown
### Phase 1: Foundation
- [ ] **Task 1**: Setup work (use existing components)
- [ ] **Task 2**: Basic structure

### Phase 2: Core Features
- [ ] **Task 3**: Main functionality
- [ ] **Task 4**: Integration work

### Phase 3: Polish & Testing
- [ ] **Task 5**: Testing and validation
- [ ] **Task 6**: Documentation and deployment
```

## Post-Planning Actions:
1. **Update CLAUDE.md** with project-specific context
2. **Create a PRD** using `docs/requirements/template.md` if starting from PRD workflow
3. **Note existing resources** to avoid redundant installations
4. **Set implementation strategy** based on available vibe stack components

Example PRD creation flow:
```bash
# 1. Create PRD from template
cp docs/requirements/template.md docs/requirements/kitchen-assistant.md
# 2. Fill out PRD with specific requirements
# 3. Plan from PRD
/plan docs/requirements/kitchen-assistant.md
```