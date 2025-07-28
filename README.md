# Tiny Machines Vibe Stack
## Context Engineering Framework for AI-Powered Development

**Transform product ideas into working software in hours, not weeks**

A complete development framework that provides AI the right information, in the right structure, to produce predictable, prototype-ready applications.

---

## 🧠 What is Context Engineering?

**Context Engineering** is the craft of providing AI with structured information so it consistently brings your vision to life. It's a skill that applies far beyond software development—but software is the perfect place to learn it because code either works or it doesn't.

This isn't about becoming a developer. It's about mastering information architecture that bridges business strategy, customer needs, and AI capabilities.

## 🎯 The Three-Part Framework

### Part 1: Building Blocks
- **Technical foundation** and architecture patterns
- **UX patterns** and design principles
- **Quality standards** and testing protocols  
- **Component structure** and development guidelines
- **Brand voice** and content standards
- **Code style** and organizational principles

*This rarely changes. It's your persistent foundational DNA.*

### Part 2: Workflow
- **HOW you build** - methodology and iteration patterns
- **Quality gates** that must be passed
- **Planning and progress** tracking systems
- **Context management** across sessions

*This encodes your professional development methodology.*

### Part 3: Task Context
- **Customer pain points** and user research
- **Business model constraints** and success metrics
- **Market positioning** and competitive analysis
- **Revenue hypotheses** and validation criteria

*This provides the business intelligence that drives decisions.*

---

## 🚀 Quick Start

### System Requirements
- Node.js 18+ ([Download](https://nodejs.org/))
- Git ([Download](https://git-scm.com/))
- **Claude Code** ([Install here](https://docs.anthropic.com/en/docs/claude-code/overview))

### AI Setup Options
**Budget Setup: US$20/month**
- VS Code (Free) + Claude Pro ($20/month)
- Perfect for learning and smaller projects

**Optimal Setup: US$40/month** ⭐ **Recommended**
- Cursor IDE ($20/month) + Claude Pro ($20/month)
- Best balance for most developers

**Power Setup: US$200+/month**
- Cursor ($20/month) + Claude Max ($100/month)
- For complex projects and heavy usage

### Installation

```bash
# 1. Clone the repo - replace "my-project" with your project name
git clone https://github.com/david-tiny-machines/tiny-machines-vibe-stack.git my-project
cd my-project

# 2. Disconnect from original repo
rm -rf .git
git init
git add .
git commit -m "Initial commit from Tiny Machines Vibe Stack"

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

**That's it!** Open [http://localhost:3000](http://localhost:3000) and see your app running.

---

## 🎮 Try the Vibe Stack

### Demo Authentication
- Click "Sign Up" and create any account (works immediately)
- Or use demo login: `demo@example.com` / `password`
- Try the [State Demo](http://localhost:3000/state-demo) to see data persistence
- Explore [Protected Routes](http://localhost:3000/dashboard) to see authentication

### Start Context Engineering

```bash
# Start Claude Code (reads CLAUDE.md automatically)
claude

# Plan your first project (Part 3: Task Context)
/plan "customer dashboard with analytics and task management"

# Build incrementally (Part 2: Workflow)
/build customer-dashboard
/clear
/build customer-dashboard
/clear   # Repeat until all tasks complete

# Ship when ready (Parts 1-3 working together)
/ship customer-dashboard
```

---

## 🔄 Exploration vs Execution Modes

### Exploration Mode: Minimal Context Input
Perfect for early-stage discovery and rapid prototyping:

```bash
/plan "walking tour add-on prototype for travel booking flow to test if customers will book tours during hotel checkout vs planning separately later"
```

AI generates comprehensive possibilities because it understands customer behavior patterns and business model implications.

**Strategy**: Create 10 different prototypes → Test with users → Extract validated elements → Synthesise into comprehensive requirements

### Execution Mode: Rich Context Input
When you know exactly what to build, use detailed Product Requirements Documents (PRDs):

#### Create a PRD

**Option 1: Use External Template**
If you don't have a PRD format preference, we recommend this comprehensive template:
**[Professional PRD Template](https://vibecodx.dev/guides/requirements-template)**

**Option 2: Use an Existing PRD**
Claude Code works great with markdown files:
```bash
# Convert your PRD into markdown format and place in the docs/ folder
/plan "docs/detailed-product-requirements.md"
```

**Strategy**: Feed validated requirements → Get exact implementation → Deploy to production

---

## 🏗️ What's Included

### Technical Stack (Part 1: Building Blocks)
- **Frontend**: Next.js 15 + React 19 + TypeScript
- **UI**: Tailwind CSS 4 + shadcn/ui components
- **Backend**: Supabase (auth + database + storage)
- **State**: Zustand (client) + TanStack Query (server)
- **Testing**: Vitest + Playwright + Testing Library
- **Quality**: ESLint, TypeScript strict mode, automated validation

### AI-Optimized Features (Part 2: Workflow)
- **Dual Mode Operation**: Demo data → Real backend seamlessly
- **Quality Gates**: Built-in validation loops
- **Session Memory**: Persistent context across AI interactions
- **Structured Commands**: `/plan`, `/build`, `/ship` workflow

### Context Management (Part 3: Task Context)
- **Planning Documents**: Structured project breakdowns
- **Business Intelligence**: Customer needs + market context
- **Validation Criteria**: Clear success metrics
- **Progress Tracking**: Task-based development cycles

---

## 📁 Project Structure

```
my-project/
├── .claude/                    # AI assistant configuration
│   └── commands/               # Context Engineering commands
├── planning/                   # Project plans and task lists
│   ├── customer-dashboard.md   # Active project plan
│   └── completed/              # Finished projects
├── src/                        # Application code
│   ├── app/                    # Next.js 15 App Router
│   ├── components/             # Reusable components + tests
│   ├── hooks/                  # Custom hooks + TanStack Query
│   ├── stores/                 # Zustand state management
│   ├── lib/                    # Utilities & Supabase client
│   └── types/                  # TypeScript definitions
├── docs/                       # Generated documentation
├── tests/                      # End-to-end Playwright tests
└── Configuration files         # All tools pre-configured
```

---

## 🚫 Demo to Production

### Phase 1: Demo Mode (Immediate)
- Clone repo, run `npm run dev`
- Use demo authentication and mock data
- Build and test features without backend complexity
- Perfect for prototyping and validation

### Phase 2: Production Mode (When Ready)
Create a free Supabase project and add environment variables:

```bash
# Add to .env.local
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Restart - automatically switches to production mode
npm run dev
```

### Phase 3: Deploy Live
```bash
# Build production version
npm run build

# Deploy to Vercel (recommended)
npx vercel

# Or deploy to Netlify, Railway, etc.
```

---

## 🛠️ Available Commands

### Development
```bash
npm run dev          # Start development server (with Turbopack)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint checks
npm run type-check   # TypeScript validation
npm run test:run     # Unit tests
npm run test:e2e     # End-to-end tests
npm run validate     # All quality checks
```

### Context Engineering Workflow
```bash
# In Claude Code terminal
/plan [description]     # Create project plan with task breakdown
/build [project-name]   # Execute next task with validation
/ship [project-name]    # Complete and deploy project
```

---

## 🎯 Why Context Engineering Works

### For Product Development Teams
- **Validate ideas quickly** with working prototypes
- **Bridge the gap** between business requirements and working software
- **Test with real users** before committing engineering resources
- **Become information architects** who can turn ideas into software

### For Founders & Startups
- **Faster time-to-market** from idea to live product
- **Lower development costs** through AI assistance
- **Validated features** before heavy engineering investment
- **Scalable foundation** that grows with your business

### For Engineers
- **Receive validated requirements** with working reference implementation
- **Start with tested code** instead of building from specifications
- **Understand user needs** through prototype feedback
- **Focus on production concerns** rather than figuring out what to build

---

## 🌟 Success Stories

### Typical Results
- **Prototype to Working Demo**: 2-4 hours instead of days
- **MVP Development**: Days instead of weeks  
- **Feature Implementation**: Hours instead of sprints
- **Code Quality**: Production-ready with automated validation

### Real Use Cases
- **SaaS Dashboards**: User management, analytics, billing
- **E-commerce**: Product catalogs, checkout, admin panels
- **Content Management**: Blogs, documentation, portfolios
- **Internal Tools**: Admin interfaces, reporting, workflows

---

## 📖 Context Engineering Philosophy

**Traditional Development**: Write code → Test later → Hope it works

**Context Engineering**: Plan with business context → Build with AI assistance → Validate continuously → Ship working software

The key insight: **Master all three parts of the framework simultaneously**, and you become the bridge between business strategy and AI capabilities. You can turn ideas into working software reliably and repeatedly.

---

## 🤝 Contributing

This is an open-source framework designed to teach Context Engineering principles. Contributions welcome!

### Ways to Contribute
- **Share your success stories** - What did you build?
- **Improve the documentation** - Help others learn faster
- **Extend the framework** - Add new patterns and examples
- **Report issues** - Help us improve the developer experience

---

## 📄 License

MIT License - Use for personal projects, client work, or commercial applications.

---

**Ready to become a Context Engineer?**

The framework, tools, and examples are all here. The only question is: what will you build first?

*Master the three parts. Bridge business and AI. Ship working software.*