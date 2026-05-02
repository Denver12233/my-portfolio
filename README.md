# Denver Tandingan — Internship Portfolio

A premium, production-grade portfolio built with Next.js 16 (App Router), TypeScript, and Tailwind CSS. Designed with Atomic Design principles and a focus on performance, accessibility, and clean architecture.

- **Developer**: Denver Tandingan
- **Role**: Frontend Developer & UI/UX Designer (Intern)
- **Tech Stack**: Next.js 16, React 19, TypeScript, Tailwind CSS, Framer Motion, Next Themes
- **Deployment**: [https://denver.vercel.app](https://denver.vercel.app) (Configured in `.env.local`)

## 📂 Folder Structure

```text
denver-portfolio/
├── app/                         # App Router root
│   ├── layout.tsx               # Root layout, ThemeProvider, Navbar, Footer
│   ├── page.tsx                 # Home: Hero + Featured + Timeline
│   ├── loading.tsx              # Global skeleton loading state
│   ├── not-found.tsx            # Custom 404 page
│   ├── robots.ts                # SEO: robots.txt
│   ├── sitemap.ts               # SEO: dynamic sitemap.xml
│   ├── work/
│   │   └── page.tsx             # /work — filterable project gallery
│   └── logs/
│       ├── page.tsx             # /logs — index of all log entries
│       └── [slug]/
│           ├── page.tsx         # generateStaticParams + generateMetadata
│           └── loading.tsx      # Log-specific skeleton
├── components/                  # Atomic design system
│   ├── ui/                      # ATOMS
│   │   ├── Badge.tsx            # Multi-variant status labels
│   │   ├── Button.tsx           # Reusable CTA component
│   │   ├── SkillBar.tsx         # Animated proficiency bar
│   │   ├── SectionLabel.tsx     # Eyebrow + Heading pattern
│   │   └── ThemeToggle.tsx      # Animated theme switcher
│   ├── cards/                   # MOLECULES
│   │   ├── ProjectCard.tsx      # Hover-lift project display
│   │   ├── LogCard.tsx          # Weekly log preview
│   │   └── TimelineItem.tsx     # Vertical timeline entry
│   ├── sections/                # ORGANISMS
│   │   ├── HeroSection.tsx      # Dynamic landing area
│   │   ├── FeaturedProjects.tsx # Auto-filtered featured work
│   │   ├── FilterableGallery.tsx# Client-side gallery with logic
│   │   ├── SkillsSection.tsx    # Skills grid with animations
│   │   └── InternshipTimeline.tsx # Career journey overview
│   └── layout/                  # LAYOUT
│       ├── Navbar.tsx           # Glassmorphism navigation
│       └── Footer.tsx           # Site footer
├── content/                     # Markdown content
│   └── logs/                    # Weekly markdown files
├── data/                        # Structured JSON data
│   ├── projects.json            # Project database
│   └── skills.json              # Skills database
├── lib/                         # Pure utility functions
│   ├── getProjects.ts           # Data fetching: Projects
│   ├── getLogs.ts               # Data fetching: Logs
│   ├── getSkills.ts             # Data fetching: Skills
│   └── filterProjects.ts        # Pure filtering logic
├── types/
│   └── index.ts                 # Centralized TS interfaces
├── public/                      # Static assets
└── tailwind.config.ts           # Design system configuration
```

## 📑 Data Schema Compliance

All data structures are strictly typed and mapped to JSON/Markdown files:

| Interface | Status | Fields Confirmed |
| :--- | :---: | :--- |
| **Project** | ✅ | `id`, `title`, `description`, `techStack`, `category`, `completionDate`, `featured`, `githubUrl`, `liveUrl`, `imageUrl` |
| **Log** | ✅ | `slug`, `title`, `date`, `excerpt`, `tags` (Parsed from MD frontmatter) |
| **Skill** | ✅ | `name`, `proficiency` (0-100), `icon` |
| **TimelineItem** | ✅ | `period`, `title`, `description` |

## 🗺️ Pages Checklist

| Route | Status | Features |
| :--- | :---: | :--- |
| `/` | ✅ | Hero Section, Featured Projects (featured: true), Skills, and Timeline. |
| `/work` | ✅ | Full Filterable Gallery with category and tech stack filters. |
| `/logs` | ✅ | Grid of weekly internship logs sorted by date descending. |
| `/logs/[slug]` | ✅ | Static rendering, Dynamic SEO Metadata, Markdown to HTML conversion. |

## 🧩 Component Inventory

### UI (Atoms)
- **Badge**: Tiny uppercase labels with status colors (green, gray, amber).
- **Button**: Full-rounded CTAs with hover lift and variant support.
- **SkillBar**: Progressive bar that animates from 0 to target proficiency on mount.
- **SectionLabel**: Standardized heading pattern with accented eyebrow text.
- **ThemeToggle**: Animated sliding knob for switching light/dark modes.

### Cards (Molecules)
- **ProjectCard**: Glass-tinted card with image scaling and tech tags.
- **LogCard**: Compact preview for internship entries with date and tags.
- **TimelineItem**: Bulleted vertical item showing period and role description.

### Sections (Organisms)
- **HeroSection**: Visual landing with abstract blobs and profile image.
- **FeaturedProjects**: Server-side section fetching only featured data.
- **FilterableGallery**: Client component managing category and tech state.
- **SkillsSection**: Responsive grid of animated skill bars.
- **InternshipTimeline**: Full vertical layout of the career journey.

### Layout
- **Navbar**: Sticky glassmorphism bar with backdrop blur and frosted border.
- **Footer**: Multi-column site map and copyright information.

## ⚖️ PRD Compliance Table

| Requirement | Status | File/Location | Notes |
| :--- | :---: | :--- | :--- |
| TypeScript strict mode enabled | ✅ | `tsconfig.json` | `strict: true` verified. |
| No hardcoded content in JSX | ✅ | `data/`, `content/` | All content pulled from JSON/MD files. |
| Glassmorphism navbar | ✅ | `Navbar.tsx` | `backdrop-blur-xl`, `bg-white/60` implemented. |
| Dark mode toggle | ✅ | `ThemeToggle.tsx` | Powered by `next-themes`. |
| generateStaticParams | ✅ | `logs/[slug]/page.tsx` | Pre-renders all log slugs at build time. |
| generateMetadata | ✅ | `logs/[slug]/page.tsx` | Dynamic SEO per log entry. |
| Filter logic in lib/ | ✅ | `lib/filterProjects.ts` | Pure function; component only handles state. |
| loading.tsx skeleton | ✅ | `app/loading.tsx` | Pulse-animated skeletons for routes. |
| All images use next/image | ✅ | Multiple | Optimized with sizes and priority where needed. |
| Mobile responsive | ✅ | Global | 1-col mobile to 3-col desktop grid logic. |
| 44x44px touch targets | ✅ | UI Components | Buttons and links meet accessibility standards. |
| Atomic Design followed | ✅ | `components/` | Strict atoms -> molecules -> organisms. |
| SOLID principles | ✅ | `lib/` | Single Responsibility for data fetchers. |

## ⚠️ Known Issues / Missing Items
- **Local Assets**: The `public/projects/` directory is created but images currently use Unsplash URLs for demonstration purposes. ❌ (Manual replacement needed for personal photos).
- **Social Icons**: Social links in the footer are placeholders without specific brand icons. ❌ (Awaiting specific profile URLs).
- **MDX support**: Currently using standard Markdown (`remark`/`html`) instead of full MDX for simplicity. ✅ (Sufficient for requirements).

## 🆕 How to Add a New Project

The workflow is 100% data-driven. No code changes are required:
1. Open `data/projects.json`.
2. Append a new object following the `Project` interface:
   ```json
   {
     "id": "project-id",
     "title": "New Awesome Project",
     "description": "Short description...",
     "techStack": ["Next.js", "Tailwind"],
     "category": "Frontend",
     "completionDate": "2025-06-01",
     "featured": true
   }
   ```
3. Save the file. The `/work` page and home page "Featured" section will update automatically.

## 🚀 Deployment Steps

To deploy this portfolio on Vercel:

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   # ... add remote and push
   ```
2. **Connect to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard).
   - Click "Add New" -> "Project".
   - Import your repository.
3. **Configure Environment**:
   - Add `NEXT_PUBLIC_SITE_URL` (e.g., `https://yourname.vercel.app`).
4. **Deploy**:
   - Vercel will auto-detect Next.js and run `npm run build`.
