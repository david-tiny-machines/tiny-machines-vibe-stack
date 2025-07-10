# ⚡ Tiny Machines Vibe Stack

**A complete web application starter that gets your product from idea to production in hours, not weeks.**

Perfect for product managers who want to move fast, validate ideas quickly, and work seamlessly with AI coding assistants like Claude Code.

## 🎯 **Why This Stack?**

### **⚡ Ship Fast**
- **10-minute setup** - Clone, install, start building
- **Authentication built-in** - Users can sign up and log in immediately
- **Modern UI components** - Professional design out of the box
- **Deploy anywhere** - Vercel, Netlify, or your preferred platform

### **💰 Cost-Effective**
- **Free to start** - Works completely offline with demo data
- **Scale when ready** - Add real database/auth only when you need it
- **No vendor lock-in** - Standard technologies, easy to migrate

### **🤖 AI-Optimized**
- **Works perfectly with Claude Code** - Let AI build features for you
- **Clear structure** - AI understands the patterns and can extend them
- **Copy-paste friendly** - Easy to explain what you want to AI assistants

---

## 🚀 **Get Started in 3 Steps**

```bash
# 1. Clone and setup (replace "my-awesome-project" with your actual project name)
git clone https://github.com/david-tiny-machines/tiny-machines-vibe-stack.git my-awesome-project
cd my-awesome-project
npm install

# 2. Start developing
npm run dev

# 3. Open http://localhost:3000 and start building!
```

> **💡 Tip:** Replace `my-awesome-project` with your actual project name (e.g., `my-saas-app`, `company-dashboard`, `blog-platform`, etc.)

**That's it.** You now have a fully working web application with:
- ✅ User authentication (demo mode included)
- ✅ Protected user areas
- ✅ Professional UI components
- ✅ Mobile-responsive design
- ✅ Ready for AI-assisted development

---

## 🎪 **What You Get Out of the Box**

### **🏗️ Technology Stack (The Foundation)**

**Next.js 15 + React 19** - The core framework that powers everything. Think of this as the engine of your web app that handles page routing, performance optimization, and makes your site load lightning-fast.

**Tailwind CSS 4.0** - The design system that makes everything look professional. Instead of writing custom CSS, you use pre-built classes like "bg-blue-500" or "text-center" to style your app consistently.

**shadcn/ui** - Premium UI components (buttons, forms, modals) that look like they came from a top design agency. No need to design from scratch - just use these polished components.

**Zustand** - Simple state management that keeps your app's data organized. When a user logs in, updates their profile, or makes changes, Zustand ensures everything stays in sync across your entire app.

**TanStack Query** - Smart data fetching that makes your app feel instant. It caches data from your APIs so users don't see loading spinners every time they navigate.

**Supabase** - Your backend-as-a-service that handles user accounts, databases, and authentication. No need to build your own user management system from scratch.

### **🔐 User Authentication**
- **Demo Mode**: Test immediately with `demo@example.com` / `password`
- **Production Ready**: Add Supabase configuration when you're ready to go live
- **Protected Routes**: Dashboard and user areas work automatically

### **🎨 Professional Design**
- **Modern Components**: Buttons, forms, cards, navigation - all designed and ready
- **Mobile-First**: Built with responsive design principles using Tailwind CSS
- **Customizable**: Change colors, fonts, and styling without breaking anything

### **📊 Data Management**
- **Demo Data**: Works immediately with sample data
- **API Foundation**: Ready to connect to REST APIs (see `/state-demo` for example)
- **Caching**: Smart data loading that makes your app feel fast

### **🛠️ Developer Experience**
- **AI-Friendly**: Claude Code works great with this structure
- **Fast Refresh**: See changes instantly as you develop
- **TypeScript**: Catch errors before they reach users

---

## 🎯 **Perfect For**

### **Product Managers**
- Validate ideas quickly with working prototypes
- Show stakeholders real functionality, not wireframes
- Collaborate with AI to build features without waiting for developers

### **Founders & Entrepreneurs**
- Launch MVPs in days, not months
- Bootstrap without technical co-founder
- Scale from prototype to production seamlessly

### **Development Teams**
- Consistent starting point for all projects
- Modern best practices baked in
- Focus on business logic, not boilerplate

---

## 🔗 **Connect to Supabase Backend**

Switch from demo mode to a real backend with user accounts and data persistence:

### **Create Your Supabase Project**
1. Sign up at [supabase.com](https://supabase.com) (free tier available)
2. Create a new project
3. Wait 2-3 minutes for your database to spin up

### **Get Your Configuration**
In your Supabase dashboard:
1. Go to **Settings** → **API**
2. Copy your **Project URL** and **anon public key**

### **Add to Your App**
Create a `.env.local` file in your project root:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### **Enable Authentication**
In your Supabase dashboard:
1. Go to **Authentication** → **Settings**
2. Enable **Email** provider
3. Configure your site URL (e.g., `https://yourapp.vercel.app`)

**That's it!** Your app will automatically switch from demo mode to real user accounts.

**📖 Need more details?** Check out [Supabase's Next.js quickstart guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs) for advanced features like row-level security and real-time subscriptions.

---

## 🚀 **Deployment with Vercel**

Deploy your app in minutes with Vercel's seamless Next.js integration:

### **Quick Deploy**
```bash
# Install Vercel CLI (one-time setup)
npm install -g vercel

# Deploy from your project directory
npx vercel

# Follow the prompts:
# - Link to existing project or create new one
# - Confirm build settings (auto-detected for Next.js)
# - Deploy!
```

### **GitHub Integration (Recommended)**
1. Push your code to GitHub
2. Connect your repository at [vercel.com/new](https://vercel.com/new)
3. Automatic deployments on every push to main branch
4. Preview deployments for pull requests

### **Environment Variables**
For production features (like Supabase), add environment variables in your Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add your `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Redeploy to apply changes

**📖 Need more details?** Check out [Vercel's Next.js deployment guide](https://vercel.com/docs/frameworks/nextjs) for advanced configuration options.

---

## 🎨 **Customization Examples**

### **Branding**
- Change logo, colors, and fonts in `src/app/globals.css`
- Replace placeholder text throughout the app
- Add your company's design system

### **Features to Add**
- **User profiles**: Avatar upload, preferences, settings
- **Payment integration**: Stripe, PayPal, or other providers
- **Email notifications**: Welcome emails, password resets
- **Admin dashboard**: User management, analytics
- **API integration**: Connect to your existing services

---

## 🤖 **Working with AI Assistants**

This stack is specifically designed to work well with AI coding tools:

### **With Claude Code**
```bash
# Example prompts that work great:
"Add a user profile page with avatar upload"
"Create a subscription payment flow with Stripe"
"Build an admin dashboard showing user statistics"
"Add email notifications for user actions"
```

### **AI Development Tips**
- Clear file organization helps AI understand context
- Consistent patterns mean better code suggestions
- TypeScript provides hints for better completions

---

## 💡 **Common Use Cases**

### **SaaS Products**
- User dashboards and account management
- Subscription billing and payment flows
- Admin panels and user analytics

### **E-commerce**
- Product catalogs and shopping carts
- User accounts and order history
- Admin inventory management

### **Content Platforms**
- User-generated content systems
- Publishing and content management
- Community features and user profiles

### **Internal Tools**
- Employee dashboards and workflows
- Data visualization and reporting
- Team collaboration features

---

## 🧪 **Advanced Features (For Development Teams)**

When you're ready to add enterprise-grade features, here are the recommended next steps:

### **Testing & Quality**

Add automated testing to catch bugs and ensure reliability:

```bash
# Unit Testing with Vitest (2-5x faster than Jest)
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/dom vite-tsconfig-paths

# End-to-End Testing with Playwright
npm init playwright@latest

# Code Quality
npm install -D prettier eslint-config-prettier husky lint-staged
```

### **Integrations**

Connect with popular services your users expect:

```bash
# Email with Resend
npm install resend

# Payments with Stripe  
npm install stripe @stripe/stripe-js

# File Uploads with Uploadthing
npm install uploadthing @uploadthing/react

# Analytics with PostHog
npm install posthog-js
```

### **Performance & Monitoring**

Optimize for production scale:

```bash
# Bundle Analysis
npm install -D @next/bundle-analyzer

# Performance Tracking
npm install web-vitals

# Database Scaling
npm install @planetscale/database drizzle-orm

# Caching
npm install @upstash/redis
```

### **Perfect AI Prompts**

This stack's structure makes it easy to work with AI assistants:

```bash
# Feature Development
"Add a user profile page with avatar upload using uploadthing"
"Create a subscription payment flow with Stripe checkout"
"Build an admin dashboard showing user analytics"

# Testing
"Write Vitest tests for the authentication system"
"Create Playwright tests for the complete user signup flow"

# Performance
"Optimize the homepage for Core Web Vitals"
"Add React Suspense for better loading states"
```

---

## 📋 **Roadmap**

### ✅ **Current (Ready to Use)**
- Complete authentication system
- Modern UI component library
- Data fetching and state management
- Mobile-responsive design
- AI-assisted development ready

### 🚧 **Coming Soon**
- Video tutorials for common integrations
- Example AI prompts for specific industries
- Performance optimization case studies
- Advanced deployment configurations

---

## 🆘 **Need Help?**

### **Quick Start Issues**
1. **Node.js version**: Requires Node.js 18 or higher
2. **Port conflicts**: Change port with `npm run dev -- -p 3001`
3. **Installation problems**: Delete `node_modules` and `package-lock.json`, then `npm install`

### **Feature Development**
- Check the `/dashboard` page for authentication examples
- Look at `/state-demo` for data fetching patterns
- Use AI assistants with specific, clear prompts

### **Deployment Questions**
- Vercel is the easiest for beginners
- Environment variables go in your hosting platform's settings
- Static exports work for simple sites: `npm run build && npm run export`

---

## 📄 **License**

MIT License - Use this for personal projects, client work, or commercial applications.

---

**Ready to build something amazing?** 

This stack removes all the technical complexity so you can focus on what matters: building features your users will love.

*Built with ❤️ for product people who want to move fast and build things.*