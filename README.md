# High Tide Aviation Website

[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-BC52EE.svg)](https://astro.build/)
[![Deployed on Netlify](https://img.shields.io/badge/Deployed%20on-Netlify-00C7B7.svg)](https://netlify.com/)
[![Styled with Tailwind CSS](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC.svg)](https://tailwindcss.com/)

> The official website for High Tide Aviation - Southeast Coast's premier flight training center offering airplane and helicopter training across North Carolina and Georgia.

## 🚁 About High Tide Aviation

High Tide Aviation is the Southeast Coast's leading flight training center, specializing in both fixed-wing and rotary-wing aircraft training. Founded in 2013 as High Tide Helicopters, we've grown to operate multiple aircraft across strategic coastal locations.

### Our Locations

- **Southport, NC** - Cape Fear Regional Jetport (KSUT) - _Flagship Location_
- **St. Simons Island, GA** - McKinnon-St. Simons Airport (KSSI)
- **Wilmington, NC** - Wilmington International Airport (ILM)

### Training Programs

- **Private Pilot License (PPL)** - Fixed-wing and helicopter
- **Instrument Rating (IR)** - Advanced weather flying
- **Commercial Pilot License (CPL)** - Professional certification
- **Multi-Engine Rating (ME)** - Twin-engine aircraft
- **Certified Flight Instructor (CFI/CFII/MEI)** - Instructor certification
- **Zero-to-Hero Programs** - Complete career training paths
- **Ground School** - Comprehensive theoretical training
- **University Programs** - Collegiate aviation partnerships

### Our Fleet

- **Cessna 172 Skyhawks** - Primary training aircraft with modern avionics
- **Beechcraft Baron B55s** - Multi-engine training
- **Robinson R44 Helicopters** - Rotary-wing training
- **Redbird FMX Simulator** - Advanced flight simulation

## 🛠️ Technical Stack

This website is built with modern web technologies for optimal performance and maintainability:

### Core Technologies

- **[Astro](https://astro.build/)** - Static site generator with island architecture
- **[React](https://reactjs.org/)** - Interactive components and UI
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[MDX](https://mdxjs.com/)** - Markdown with JSX for blog content

### UI Components & Libraries

- **[@headlessui/react](https://headlessui.com/)** - Accessible UI components
- **[@heroicons/react](https://heroicons.com/)** - Beautiful SVG icons
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library
- **[React CountUp](https://github.com/glennreyes/react-countup)** - Animated counters
- **[Swiper](https://swiperjs.com/)** - Touch slider/carousel

### Build & Deployment

- **[Netlify](https://netlify.com/)** - Deployment platform
- **[Bun](https://bun.sh/)** - Fast JavaScript runtime & package manager
- **[Prettier](https://prettier.io/)** - Code formatting

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) (recommended) or [Node.js](https://nodejs.org/) 18+
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/high-tide-aviation.git
   cd high-tide-aviation
   ```

2. **Install dependencies**

   ```bash
   bun install
   # or
   npm install
   ```

3. **Start the development server**

   ```bash
   bun run dev
   # or
   npm run dev
   ```

4. **Open your browser**

   ```url
   http://localhost:4321
   ```

### Available Scripts

```bash
# Development
bun run dev          # Start development server
bun run start        # Alias for dev

# Production
bun run build        # Build for production
bun run preview      # Preview production build

# Utilities
bun run astro        # Run Astro CLI commands
```

## 📁 Project Structure

```text
high-tide-aviation/
├── src/
│   ├── assets/          # Images, icons, and static assets
│   ├── components/      # Reusable React components
│   ├── content/         # Blog posts and content collections
│   │   └── blog/        # MDX blog posts
│   ├── data/            # Static data and configurations
│   ├── layouts/         # Page layouts and templates
│   ├── pages/           # File-based routing
│   ├── scripts/         # Utility scripts
│   ├── styles/          # Global styles and CSS
│   ├── consts.ts        # Global constants
│   └── env.d.ts         # TypeScript environment definitions
├── public/              # Static assets served directly
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## 🎨 Key Features

### Flight Training Programs

- Comprehensive training program pages with detailed curricula
- Interactive enrollment forms and contact systems
- Location-specific training information
- Instructor profiles and testimonials

### Content Management

- Blog system with MDX for rich content
- Aviation news and training resources
- SEO-optimized content with proper meta tags
- RSS feed generation

### User Experience

- Responsive design for all devices
- Fast loading with Astro's static generation
- Smooth animations and transitions
- Accessibility-first approach

### Business Features

- Multi-location support
- Service offerings (tours, aerial photography, aircraft brokerage)
- Fleet showcase and rental information
- University program partnerships

## 🌐 Deployment

The site is configured for deployment on Netlify:

1. **Connect your repository** to Netlify
2. **Build settings** are automatically detected:
   - Build command: `bun run build`
   - Publish directory: `dist`
3. **Environment variables** (if needed) can be set in Netlify dashboard

### Manual Deployment

```bash
# Build the project
bun run build

# The `dist` folder contains the production-ready files
# Upload the contents to your hosting provider
```

## 📝 Content Management

### Adding Blog Posts

Create new MDX files in `src/content/blog/`:

```markdown
---
pubDate: "2024-01-01"
author: "Author Name"
title: "Post Title"
description: "Post description"
heroImage: "/src/assets/hero-image.jpg"
category: "Category"
tags: ["tag1", "tag2"]
---

Your blog content here...
```

### Updating Training Programs

Program data is stored in `src/data/` directory:

- `privatePilotData.js` - Private pilot training
- `commercialPilotData.js` - Commercial pilot training
- `helicopterData.js` - Helicopter training
- `groundSchoolData.js` - Ground school information

## 🔧 Configuration

### Site Configuration

Update `src/consts.ts` for site-wide settings:

- Contact information
- Social media links
- Business addresses
- Phone numbers

### SEO Configuration

- Site title and description in `astro.config.mjs`
- Meta tags in page frontmatter
- Sitemap automatically generated

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📞 Support

For technical support or questions about the website:

- **Email**: <trainingsupport@flyhightide.com>
- **Phone**: (910) 294-5871
- **Website**: [hightideaviation.com](https://hightideaviation.com)

## 📄 License

This project is proprietary software owned by High Tide Aviation. All rights reserved.

---

Built with ❤️ by the High Tide Aviation team | _Where cutting-edge technology meets exceptional instruction on the beautiful Atlantic coast._
