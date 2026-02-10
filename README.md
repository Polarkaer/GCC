# GCC
A tool to make game cards

## Stack

### Core Framework
* **Next.js** - React framework with built-in routing, SSR, and optimizations
* **React & React Compiler** - UI library with performance optimization through automatic memoization

### Styling
* **Tailwind CSS** - Utility-first CSS framework
* **Sass** - CSS preprocessing for advanced styling capabilities

### State Management
* **Zustand** - Lightweight, flexible state management library

### Build & Development
* **Next.js Built-in Build System** - Primary build tool

## Setup Plan

### Phase 1: Project Initialization
- [ ] Create Next.js project with TypeScript
- [ ] Configure ESLint and Prettier
- [ ] Set up Git repository and .gitignore

### Phase 2: Styling Setup
- [ ] Install and configure Tailwind CSS
- [ ] Install and configure Sass/SCSS support
- [ ] Create CSS architecture and utility files
- [ ] Set up design tokens/theme system

### Phase 3: State Management
- [ ] Install Zustand
- [ ] Create store structure
- [ ] Set up store hooks and utilities
- [ ] Integrate with React components

### Phase 4: Testing Infrastructure
- [ ] Install Jest

### Phase 5: Development Optimization
- [ ] Configure Next.js optimizations
- [ ] Set up React Compiler (if using experimental features)
- [ ] Set up HMR and fast refresh

### Phase 6: Project Structure
- [ ] Create directory structure (components, pages, utils, stores, hooks, types)
- [ ] Set up barrel exports for cleaner imports
- [ ] Create component templates and patterns

### Phase 7: Documentation & Configuration
- [ ] Document setup instructions
- [ ] Create development workflow guide
- [ ] Document project structure
- [ ] Create contribution guidelines

## Getting Started

```bash
# Initialize the project (when ready)
npx create-next-app@latest gcc --typescript --tailwind

# Install additional dependencies
npm install zustand sass
```

## Development Commands

```bash
npm run dev      # Start Next.js dev server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
