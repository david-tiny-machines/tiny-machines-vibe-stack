# ⚡ Tiny Machines Vibe Stack

**Ship your product from idea to production in hours, not weeks with AI-powered development.**

A complete Next.js 15 starter optimized for **vibe coding** - the fastest way to build with AI assistance. Works immediately with demo mode, scales to production with real backend.

Perfect for founders and developers who want to leverage AI to build faster than ever before.

---

## 🚀 **Quick Start (2 minutes)**

### **What You Need for Vibe Coding**

**System Requirements (Free):**
- **Node.js 18+** ([Download here](https://nodejs.org/))
- **Git** ([Download here](https://git-scm.com/))

**Vibe Coding Setup (Pick Your Style):**

**Budget Vibe: $20/month**
- **VS Code** (Free) + **Claude Pro** ($20/month with Claude Code included)
- Perfect for smaller projects and learning

**Optimal Vibe: $40/month** ⭐ **Recommended**
- **Cursor** ($20/month) + **Claude Pro** ($20/month with Claude Code)
- Best balance of AI IDE + terminal AI for most developers

**Power Vibe: $120/month**
- **Cursor** ($20/month) + **Claude Max** ($100/month)
- For heavy coding on large codebases (1000+ lines)

> **Note:** Pricing as of July 2025. AI tool pricing changes frequently - check current rates at [cursor.com](https://cursor.com) and [claude.ai/pricing](https://claude.ai/pricing)

### **Setup**
```bash
# 1. Clone the repo (replace "my-project" with your actual project name)
git clone https://github.com/david-tiny-machines/tiny-machines-vibe-stack.git my-project
cd my-project

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

**That's it!** Open [http://localhost:3000](http://localhost:3000) and you'll see your app running.

### **Test the Demo**
- Click "Sign Up" and create any account (demo mode)
- Or use the demo login: `demo@example.com` / `password`
- Try the [State Demo](http://localhost:3000/state-demo) to see data management in action

---

## 🎯 **What You Get**

### **✅ Works Immediately**
- **Authentication system** with demo mode - no backend required
- **Protected routes** and user dashboard
- **Professional UI components** from shadcn/ui
- **State management** with Zustand + TanStack Query
- **TypeScript** throughout for better development

### **📱 Production Ready**
- **Mobile responsive** design
- **Performance optimized** with Next.js 15 + React 19
- **SEO friendly** with proper meta tags
- **Deployment ready** for Vercel, Netlify, etc.

### **🤖 Vibe Coding Ready**
- **AI-optimized architecture** - Claude/Copilot understands the patterns instantly
- **Clear file structure** for better AI context and suggestions
- **Consistent patterns** enable predictable AI code generation
- **Copy-paste friendly** - AI can extend features seamlessly

---

## 🛠️ **Development Commands**

```bash
npm run dev          # Start development server (with Turbopack)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint checks
```

### **Common Development Tasks**

**Adding a new page:**
```bash
# Create in src/app/your-page/page.tsx
# Protected routes go in src/app/(protected)/your-page/page.tsx
```

**Adding UI components:**
```bash
# Use shadcn/ui generator
npx shadcn@latest add [component]
```

**Environment setup:**
```bash
# Copy for your environment variables
cp .env.example .env.local
```

---

## 🔐 **Authentication Setup**

### **Demo Mode (Default)**
Works immediately with mock data:
- Email: `demo@example.com`
- Password: `password`
- Any signup creates a mock account

### **Production Mode (Supabase)**
For real user accounts and data persistence:

1. **Create Supabase project** at [supabase.com](https://supabase.com) (free tier available)
2. **Get your credentials** from Settings → API
3. **Add to `.env.local`:**
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   ```
4. **Restart your dev server:** `npm run dev`

The app automatically detects Supabase and switches from demo to production mode.

---

## 🚀 **Deployment**

### **Deploy to Vercel (Recommended)**
```bash
# Option 1: One-click deploy
# Push to GitHub, then connect at vercel.com/new

# Option 2: CLI deploy
npm install -g vercel
vercel
```

### **Environment Variables for Production**
In your hosting platform, add:
- `NEXT_PUBLIC_SUPABASE_URL` (if using Supabase)
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` (if using Supabase)

### **Other Platforms**
- **Netlify:** Works with `npm run build`
- **Railway:** Compatible with Next.js
- **Self-hosted:** Use `npm run build && npm run start`

---

## 📁 **Project Structure**

```
src/
├── app/                    # Next.js 15 App Router
│   ├── (auth)/            # Login/signup pages
│   ├── (protected)/       # Protected user areas
│   └── globals.css        # Global styles
├── components/
│   └── ui/                # shadcn/ui components
├── hooks/                 # Custom React hooks
│   ├── useAuth.ts         # Authentication
│   └── queries/           # TanStack Query hooks
├── lib/
│   ├── supabase/          # Database client
│   └── react-query/       # Query configuration
└── stores/                # Zustand state stores
```

---

## 🎨 **Customization**

### **Branding & Design**
```bash
# Colors and theme
src/app/globals.css

# UI components
src/components/ui/

# Logo and header
src/app/page.tsx
```

### **Adding Features**
```bash
# New API endpoints
src/app/api/your-endpoint/route.ts

# Database operations
src/lib/supabase/

# UI components
npx shadcn@latest add [component-name]
```

---

## 🤖 **AI-Assisted Development**

This stack is optimized for working with AI coding assistants like Claude Code:

### **Example Prompts That Work Great:**
```
"Add a user profile page with avatar upload"
"Create a subscription billing flow with Stripe"
"Build an admin dashboard with user analytics"
"Add email notifications using Resend"
```

### **AI Development Tips:**
- The file structure is designed to be self-explanatory to AI
- TypeScript provides context for better code suggestions
- Consistent patterns help AI understand and extend your code

---

## ⚡ **Technology Stack**

| Technology | Purpose | Why We Chose It |
|------------|---------|-----------------|
| **Next.js 15** | React framework | App router, performance, SEO |
| **React 19** | UI library | Latest features, concurrent rendering |
| **TypeScript** | Type safety | Better DX, fewer runtime errors |
| **Tailwind CSS 4** | Styling | Utility-first, fast development |
| **shadcn/ui** | UI components | Beautiful, accessible, customizable |
| **Zustand** | Client state | Simple, performant, TypeScript-first |
| **TanStack Query** | Server state | Smart caching, optimistic updates |
| **Supabase** | Backend | Auth, database, real-time features |

---

## 📊 **Performance**

- **Lighthouse Score:** 95+ out of the box
- **Core Web Vitals:** Optimized for all metrics
- **Bundle Size:** Minimal with automatic code splitting
- **Loading Speed:** Sub-second page loads with caching

---

## 🔧 **Troubleshooting**

### **Common Issues**

**"npm install" fails:**
```bash
# Try with legacy peer deps
npm install --legacy-peer-deps

# Or clear cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Port 3000 already in use:**
```bash
npm run dev -- -p 3001
```

**Build errors:**
```bash
# Check TypeScript
npm run lint
# Clear Next.js cache
rm -rf .next
npm run build
```

**Authentication not working:**
- Check your `.env.local` file exists and has correct values
- Verify Supabase project is active
- Check browser console for errors

### **Getting Help**
- Check the [CLAUDE.md](./CLAUDE.md) file for AI development guidance
- Review the working examples in `/state-demo` and `/dashboard`
- Use clear, specific prompts when working with AI assistants

---

## 🗺️ **Roadmap**

### **✅ Current Features**
- Complete authentication system
- Modern UI component library  
- State management patterns
- TypeScript throughout
- Production deployment ready

### **🚧 Coming Soon**
- Email integration examples
- Payment flow templates
- Advanced deployment guides
- More AI prompt examples

---

## 📄 **License**

MIT License - Use for personal projects, client work, or commercial applications.

---

**Ready to build something amazing?** 

This stack handles all the boring setup so you can focus on building features your users will love.

*Built with ❤️ for product people who want to move fast and build things.*