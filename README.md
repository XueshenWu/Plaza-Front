# Plaza - Open Reddit Clone

A modern, full-featured Reddit-like social platform built with Next.js 15, featuring communities, posts, comments, voting system, and real-time interactions. Designed for open discussions and community building.

## 🚀 Features

### 👥 Community System
- **Create Communities**: Build topic-based communities with custom icons and banners
- **Community Management**: Owner, moderator, and member roles
- **Visibility Controls**: Public, restricted, or private communities
- **Custom Rules**: Define community guidelines
- **Topics & Tags**: Organize content with topics and hashtags
- **Pinned Posts**: Feature important content

### 📝 Content Management
- **Rich Posts**: Create text posts with titles and multi-paragraph content
- **Media Support**: Upload images, videos, and external links
- **Upvote/Downvote**: Reddit-style voting system
- **Comments**: Nested threaded comments with unlimited depth
- **Comment Voting**: Vote on individual comments
- **Hashtags**: Tag posts for discoverability

### 🔐 User Features
- **User Profiles**: Customizable avatars, bio, display name, location
- **Authentication**: Secure sign-in/sign-up with Supabase
- **Password Reset**: Email-based password recovery
- **Block System**: Block users and communities
- **Saved Posts**: Save posts for later
- **Vote History**: Track upvoted and downvoted posts
- **User Permissions**: Default, read-only, or suspended states

### 🎨 User Experience
- **Dark/Light Theme**: Complete theme switching
- **Responsive Design**: Mobile-first with Tailwind CSS
- **Infinite Scroll**: Seamless content loading
- **Feed Sorting**: Sort by time, popularity, etc.
- **Search**: Find posts and communities
- **Notifications**: Customizable notification preferences
- **Bot Protection**: hCaptcha and Cloudflare Turnstile integration

## 🛠️ Tech Stack

### Core Framework
- **Next.js 15.1** - React framework with App Router and Turbopack
- **React 19** - Latest React with server components
- **TypeScript 5.7** - Full type safety

### Database & ORM
- **PostgreSQL** - Relational database via Supabase
- **Drizzle ORM 0.39** - Type-safe SQL ORM
- **Supabase** - Backend-as-a-Service (BaaS) with Row Level Security

### Styling & UI
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component primitives
- **shadcn/ui** - Beautiful, customizable components
- **Lucide Icons** - Modern icon library
- **next-themes** - Theme management
- **Motion (Framer Motion)** - Animation library
- **Vaul** - Drawer component
- **Embla Carousel** - Carousel component

### Forms & Validation
- **React Hook Form 7.54** - Performant form management
- **Zod 3.24** - TypeScript-first schema validation
- **@hookform/resolvers** - Form validation integration

### State Management
- **Zustand 5.0** - Lightweight state management
- **SWR 2.3** - Data fetching and caching
- **usehooks-ts** - Custom React hooks collection

### Media & Files
- **react-dropzone** - Drag-and-drop file upload
- **browser-image-compression** - Client-side image compression
- **UUID** - Unique identifier generation

### Testing & Quality
- **Vitest 3.0** - Fast unit testing
- **Playwright 1.49** - End-to-end testing
- **Testing Library** - React component testing
- **Storybook 8.6** - Component development environment
- **MSW (Mock Service Worker)** - API mocking
- **ESLint** - Code linting

### Development Tools
- **Turbopack** - Fast bundler by Vercel
- **dotenv-cli** - Environment variable management
- **Drizzle Kit** - Database migrations
- **pnpm** - Fast, efficient package manager

## 📋 Prerequisites

Before you begin, ensure you have:
- Node.js 20 or higher
- pnpm (recommended) or npm
- PostgreSQL database (via Supabase or local)
- Supabase account (for authentication and storage)

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Plaza-Front-main
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Database
DATABASE_URL=your-postgres-connection-string

# Captcha (optional)
NEXT_PUBLIC_HCAPTCHA_SITE_KEY=your-hcaptcha-site-key
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-turnstile-site-key
```

4. Set up the database:
```bash
# Push schema to database
pnpm dbpush

# Or generate migrations
pnpm generate
```

## 🚦 Running the Application

### Development Mode
```bash
# With Turbopack (recommended)
pnpm dev

# Windows users
pnpm dev:win
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
# Build the application
pnpm build

# Start production server
pnpm start
```

### Testing
```bash
# Run unit tests
pnpm test

# Run tests with UI
pnpm test:ui

# Run E2E tests
npx playwright test
```

### Storybook
```bash
# Run Storybook
pnpm storybook

# Build Storybook
pnpm build-storybook
```

### Linting
```bash
pnpm lint
```

## 📁 Project Structure

```
Plaza-Front-main/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   ├── auth/                     # Authentication pages
│   │   ├── signin/               # Sign-in page
│   │   ├── signon/               # Sign-up page
│   │   ├── reset/                # Password reset
│   │   └── whoami/               # User info
│   ├── community/                # Community pages
│   ├── feed/                     # Main feed
│   ├── post/                     # Post detail pages
│   ├── message/                  # Messaging (planned)
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── form/                     # Form components
│   ├── segment/                  # Page segments (Header, SideNav, etc.)
│   ├── ui/                       # UI components (shadcn/ui)
│   └── theme-provider.tsx        # Theme context
├── actions/
│   ├── client/                   # Client-side actions
│   └── server/                   # Server actions
├── storage/
│   ├── client/                   # Client storage utilities
│   ├── server/                   # Server storage utilities
│   └── supabase/                 # Supabase client setup
├── hooks/
│   ├── auth/                     # Authentication hooks
│   ├── form/                     # Form hooks
│   ├── use-mobile.tsx            # Mobile detection
│   └── useScreenMatch.tsx        # Screen size matching
├── schemas/                      # Zod validation schemas
│   ├── createCommunityFormSchema.ts
│   ├── createPostFormSchema.ts
│   ├── registerSchema.ts
│   └── ...
├── drizzle/                      # Database schema and migrations
│   ├── schema.ts                 # Database schema
│   └── migrations/               # Migration files
├── utils/                        # Utility functions
│   ├── compress-file.ts          # Image compression
│   ├── fromNow.ts                # Time formatting
│   └── videoclip.ts              # Video processing
├── stories/                      # Storybook stories
├── __tests__/                    # Test files
├── e2e/                          # E2E tests
├── public/                       # Static assets
└── package.json                  # Dependencies and scripts
```

## 💾 Database Schema

### Core Tables

**profiles**
- User profile information
- Avatar, bio, display name, location, gender
- Blocked users and communities
- Saved posts and voting history
- User permissions

**communities**
- Community metadata (name, description)
- Icon and banner images
- Visibility settings
- Community rules (JSON)
- Pinned posts
- Topics/tags

**posts**
- Post content (title, text, media)
- Author and community references
- Upvote/downvote counts
- Hashtags
- Timestamps
- Comment count

**comments**
- Nested comment structure
- Parent and root references
- Upvote/downvote counts
- Child comments array
- Author reference

**community_user**
- User-community relationships
- User roles (Owner, Moderator, Member)
- Notification preferences
- Community credit
- Favorite status

**comment_reviews**
- User comment votes
- Review type (UP, DOWN, NONE)

### Enums
- **Permission**: DEFAULT, READONLY, SUSPENDED
- **MediaType**: IMAGE, VIDEO, EXTERNAL_LINK
- **Visibility**: PUBLIC, RESTRICTED, PRIVATE, CACHED
- **Role**: OWNER, MODERATOR, MEMBER
- **NotificationPreference**: OFF, LOW, FREQUENT
- **Review**: UP, DOWN, NONE

## 🎯 Key Features Explained

### Community System
Communities are the core organizational unit, similar to subreddits. Each community can have:
- Custom branding (icon, banner)
- Multiple moderators with role-based permissions
- Public, restricted, or private visibility
- Custom rules and guidelines
- Topic categorization

### Voting System
Reddit-style karma system with:
- Upvotes/downvotes on posts and comments
- Vote tracking per user
- Aggregate vote counts
- Vote history for personalization

### Comment Threading
Nested comment system supporting:
- Unlimited depth
- Parent-child relationships
- Vote counts per comment
- Efficient query structure

### Content Organization
- Time-based indexing for fast sorting
- Hashtag support for discoverability
- Community-based organization
- Saved posts for bookmarking

## 🔐 Authentication & Security

### Supabase Authentication
- Email/password authentication
- Password reset flow
- Row Level Security (RLS) on all tables
- Secure session management

### Bot Protection
- hCaptcha integration
- Cloudflare Turnstile
- Rate limiting (configurable)

### Privacy Controls
- Block users and communities
- Private communities
- Content visibility settings

