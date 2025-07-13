# Plan

Create implementation plan for: $ARGUMENTS

## What This Creates:
1. **High-level overview** of what we're building and why
2. **Task breakdown** with appropriate complexity for project type
3. **Simple project document** to guide development
4. **Updated CLAUDE.md** to reflect the new project context

## Project Type Detection:
First, identify what type of project this is:

### **Prototype** (Keywords: prototype, test, validate, concept, proof-of-concept, demo)
- **Purpose**: Validate concepts and gather feedback
- **Users**: Internal stakeholders, limited user testing (5-10 people)
- **Timeline**: Hours to days
- **Success**: Answers "Should we build this?" and "How should it work?"

### **MVP** (Keywords: launch, ship, customers, market, users, beta)
- **Purpose**: Ship to real users for market validation
- **Users**: Real customers (dozens to hundreds)
- **Timeline**: Days to weeks
- **Success**: Product-market fit signals and user adoption

### **Feature** (Keywords: add, improve, optimize, enhance existing)
- **Purpose**: Enhance existing product
- **Users**: Existing user base
- **Timeline**: Varies
- **Success**: Improved metrics and user satisfaction

## Planning Document Structure:

### Overview
- **What**: Clear description of what we're building
- **Why**: Business value and user impact
- **Type**: [Prototype/MVP/Feature] - determines complexity level
- **Success Criteria**: Appropriate for project type

### Task Breakdown
Break the work into concrete, actionable tasks based on project type:

**For Prototypes (3-5 tasks, focus on validation):**
- [ ] **Task 1**: Core user flow implementation with mock data
- [ ] **Task 2**: Basic UI/UX for concept demonstration
- [ ] **Task 3**: Demo scenarios and user testing setup
- [ ] **Task 4**: Stakeholder presentation materials
- [ ] **Task 5**: Feedback collection and iteration plan

**For MVPs (5-8 tasks, focus on shipping):**
- [ ] **Task 1**: Authentication and user management
- [ ] **Task 2**: Core feature implementation
- [ ] **Task 3**: Data persistence and basic API
- [ ] **Task 4**: Payment/billing integration (if applicable)
- [ ] **Task 5**: Error handling and edge cases
- [ ] **Task 6**: Basic analytics and monitoring
- [ ] **Task 7**: Testing and deployment
- [ ] **Task 8**: User onboarding and support

**For Features (4-6 tasks, focus on integration):**
- [ ] **Task 1**: Requirements analysis and design
- [ ] **Task 2**: Backend API implementation
- [ ] **Task 3**: Frontend integration with existing system
- [ ] **Task 4**: Testing and A/B test setup
- [ ] **Task 5**: Gradual rollout and monitoring
- [ ] **Task 6**: Documentation and training

**General Task Range Guidelines:**
- **Simple projects**: 3-5 tasks
- **Standard projects**: 5-8 tasks  
- **Complex projects**: 8-15 tasks
- **Large projects**: 15+ tasks (consider breaking into phases)

**Complex Project Structure (use phases):**
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

### Project-Specific Guidelines:

#### **Prototype Guidelines:**
**AVOID:**
- A/B testing frameworks
- Complex analytics/tracking
- Performance optimization
- Scalability architecture
- Production deployment pipelines
- User authentication (unless core to concept)
- Payment processing (use mock/demo)
- Complex error handling
- SEO optimization
- Production monitoring

**FOCUS ON:**
- Core user experience
- Concept validation
- Stakeholder demos
- Simple user testing (5-10 people)
- Technical feasibility proof
- Working demo with mock data
- Clear user flows
- Visual design that communicates the concept

#### **MVP Guidelines:**
**AVOID:**
- Complex integrations (start simple)
- Advanced features (ship core value first)
- Performance premature optimization
- Complex admin interfaces
- Multiple user roles initially
- Advanced analytics (basic metrics only)
- Over-engineered architecture

**FOCUS ON:**
- Core value proposition delivery
- Real user authentication
- Basic payment processing (if revenue model)
- Essential error handling
- Simple analytics (sign-ups, usage, revenue)
- Production deployment and monitoring
- Customer support basics
- User onboarding flow
- Data persistence and backup

#### **Feature Guidelines:**
**AVOID:**
- Breaking existing functionality
- Major architectural changes (unless necessary)
- Disrupting current user workflows
- Complex migrations (phase if needed)
- Feature bloat (solve one problem well)

**FOCUS ON:**
- Integration with existing systems
- Backward compatibility
- A/B testing for optimization
- Performance impact assessment
- User adoption and engagement metrics
- Gradual rollout strategy
- Documentation updates
- Migration planning (if needed)
- Cross-feature interaction testing

## Task Structure:
Each task should be:
- **Clear and actionable** - developer knows what to do
- **Testable** - can verify when it's complete
- **Atomic** - can be completed in 1-2 hours
- **Progressive** - builds on previous tasks
- **Appropriate to project type** - no over-engineering

## CLAUDE.md Updates:
When creating the plan, update CLAUDE.md to reflect the specific project:

### Replace generic vibe stack description with:
- **Project purpose** and business context
- **Key architecture decisions** for this specific project
- **Project-specific constraints** and requirements
- **Custom workflows** if any established
- **Domain-specific patterns** to follow

### Keep existing sections:
- Available planning commands (`/plan`, `/build`, `/ship`)
- Quality gates and validation requirements
- Core development patterns from vibe stack

### Technical Notes
- Key architectural decisions
- Patterns to follow from vibe stack
- Dependencies and integrations needed
- **Complexity Level**: [Simple/Standard/Complex] based on project type

## Process:
1. **Understand the project type** from the description
2. **Create planning document** at `planning/{project-name}.md`
3. **Update CLAUDE.md** with project-specific context
4. **Commit the plan** with clear message

Save as `planning/{project-name}.md`

Always start with a plan. Match complexity to project type.