# ⚡ Tiny Machines Vibe Stack

**Ship your product from idea to production in hours, not weeks with AI-powered development.**

A complete Next.js 15 starter optimized for **vibe coding** - the fastest way to build with AI assistance. Works immediately with demo mode, scales to production with real backend.

Perfect for product managers who want to validate ideas with working prototypes before committing engineering resources.

---

## 🛠️ **AI Development Setup**

**Budget Setup: $40/month**
- VS Code (Free) + Claude Pro ($40/month)
- Perfect for learning and side projects

**Optimal Setup: $80/month** ⭐ **Recommended**
- Cursor ($40/month) + Claude Pro ($40/month)
- Best balance for product prototyping

**Power Setup: $240/month**
- Cursor ($40/month) + Claude Max ($200/month)
- For complex prototypes and heavy usage

> Pricing are in NZD and are as of July 2025 - check current rates at respective websites for local currencies

## 🚀 **Quick Start (2 minutes)**

### **Prerequisites**
- **Node.js 18+** ([Download here](https://nodejs.org/))
- **Git** ([Download here](https://git-scm.com/))
- **IDE** *Cursor* ([Download here](https://cursor.com)) or *VS Code* ([Download here](https://code.visualstudio.com/))
- **Claude Code** ([Install here](https://docs.anthropic.com/en/docs/claude-code/overview))

### **Setup**
```bash
# 1. Clone and disconnect from original repo
git clone https://github.com/david-tiny-machines/tiny-machines-vibe-stack.git my-project
cd my-project
rm -rf .git
git init
git add .
git commit -m "Initial commit from Tiny Machines Vibe Stack"

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

**That's it!** Open [http://localhost:3000](http://localhost:3000) and you'll see your app running.

### **Try the Demo**
- 📧 **Demo Login**: `demo@example.com` / `password`
- 🎮 **Interactive Demo**: Visit [State Management Demo](http://localhost:3000/state-demo)
- 🔐 **Protected Routes**: Try the [Dashboard](http://localhost:3000/dashboard)

---

## 🤖 **AI-Powered Development Workflow**

This stack includes a structured **Plan → Build → Ship** workflow for AI-assisted development.

### **Try Your First Prototype:**
```bash
# In your project directory, start Claude Code
claude

# Plan what you want to build
/plan "walking tour add-on prototype for travel booking flow to test if customers will book tours during hotel checkout vs planning separately later"

# Build it step by step with AI validation
/build walking-tour-addon  # Repeat until all tasks complete
/build walking-tour-addon
/build walking-tour-addon

# Ship when ready
/ship walking-tour-addon
```

### **What This Gives You**
- 🎯 **Smart Planning**: AI breaks features into actionable tasks (2-4 hours per prototype)
- ⚡ **Quality-First Building**: Every task includes validation (TypeScript, tests, lint)
- 🚀 **Production-Ready Output**: Deploy-ready code with comprehensive testing

---

## 📋 **Planning with Product Requirements Documents (PRDs)**

For complex projects or formal product development, you can create detailed Product Requirements Documents and use them directly with the vibe coding workflow.

### **Create a PRD**

**Option 1: Use External Template**
If you don't have a PRD format preference, we recommend this comprehensive template:
**[Professional PRD Template](https://vibecodx.dev/guides/requirements-template)**

**Option 2: Use an existing PRD**
Claude Code (and all LLMs) love markdown files - learn more about them here:
**[Markdown Guide](https://www.markdownguide.org/)**
```bash
# Convert your PRD into markdown format and then place in the docs/requirements folder
# Then plan directly from it
/plan docs/requirements/my-feature.md
```

### **PRD-to-Code Workflow**

```bash
# 1. Create detailed PRD
/plan docs/requirements/user-dashboard.md

# 2. Build incrementally from PRD
/build user-dashboard
/build user-dashboard  
/build user-dashboard

# 3. Ship when PRD requirements met
/ship user-dashboard
```

### **PRD Benefits**
- **Stakeholder Alignment**: Clear requirements before development
- **Scope Management**: Prevents feature creep during development  
- **Quality Validation**: Built-in acceptance criteria for testing
- **Documentation**: Permanent record of product decisions

---

## ✅ **What You Get Out of the Box**

### **Immediate Value**
- **Authentication system** (works instantly with demo mode)
- **Professional UI components** (shadcn/ui + Tailwind CSS 4)
- **Data management** (Zustand + TanStack Query patterns)
- **Testing infrastructure** (Vitest + Playwright)
- **TypeScript throughout** for better reliability

### **Business Benefits**
- **Rapid Validation**: Test ideas with real users in hours, not weeks
- **Cost Effective**: Validate before heavy engineering investment
- **Professional Quality**: UI and UX that looks production-ready
- **Scalable Foundation**: Grows from prototype to production

### **Technical Excellence**
- **Performance Optimized** (Lighthouse 95+ out of the box)
- **Mobile Responsive** (works on all devices)
- **SEO Friendly** (proper meta tags and structure)
- **Deploy Anywhere** (Vercel, Netlify, self-hosted)

---

## 🛠️ **Technology Stack**

Built on proven, enterprise-grade technologies:

| Technology | Purpose | Business Value |
|------------|---------|----------------|
| **Next.js 15** | React framework | Fast development, great SEO |
| **React 19** | UI library | Modern, performant interfaces |
| **TypeScript** | Type safety | Fewer bugs, better maintainability |
| **Tailwind CSS 4** | Styling | Professional design, fast iteration |
| **shadcn/ui** | UI components | Consistent, accessible components |
| **Supabase** | Backend | Real-time data, authentication |
| **Testing Suite** | Quality assurance | Reliable, bug-free prototypes |

---

## 🔐 **From Demo to Production**

### **Demo Mode (Default)**
Perfect for initial validation:
- Works immediately with no setup
- Try: `demo@example.com` / `password`
- Full functionality with mock data
- Share prototypes instantly

### **Production Mode (When Validated)**
Scale to real users:
1. Create free [Supabase project](https://supabase.com)
2. Add credentials to `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```
3. Restart: `npm run dev`

Seamless transition from prototype to production with real user accounts and data persistence.

---

## 🚀 **Deployment**

### **Share Your Prototype**
```bash
# Push to GitHub, then one-click deploy:
# 1. Connect at vercel.com/new
# 2. Add environment variables (if using production mode)
# 3. Share live link with stakeholders
```

**Works everywhere**: Vercel (recommended), Netlify, Railway, self-hosted

---

## 🎯 **Perfect For**

### **Product Managers**
- **Validate features** before engineering sprints
- **Test user flows** with real, clickable prototypes  
- **Present to stakeholders** with working demos
- **Bridge communication** between business and engineering

### **Founders & Entrepreneurs**
- **Test market fit** with functional MVPs
- **Pitch investors** with working products
- **Validate pricing** and user onboarding flows
- **Launch faster** than competitors

### **Side Project Builders**
- **Ship ideas quickly** without months of development
- **Professional quality** that impresses users
- **Learn modern development** with AI assistance
- **Build portfolio** of working projects

---

## 📊 **Expected Results**

Based on typical usage:

- **Prototype Speed**: 2-4 hours from idea to working demo
- **Quality Level**: Production-ready UI and functionality
- **User Testing**: Share live links immediately
- **Validation Cycle**: Days instead of sprints
- **Cost Efficiency**: Validate before major engineering investment

---

## 🎯 **Next Steps**

1. **Explore the App**: Navigate to [http://localhost:3000](http://localhost:3000)
2. **Try the Features**: Test authentication, state management, UI components
3. **Start Vibe Coding**: Install Claude Code and try your first `/plan`
4. **Reference Guide**: Check `CLAUDE.md` for detailed AI development patterns

---

## 📄 **License**

MIT License - Use for personal projects, client work, or commercial applications.

---

**Ready to validate your next big idea?**

This stack handles all the technical complexity so you can focus on solving real user problems.

*Built for product people who want to move fast and build things that matter.*