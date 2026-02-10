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
* **Next.js Built-in Build System** - Primary build tool (Webpack-based)
* **Vite** - Fast build tool for Vitest and development utilities
* **Vitest** - Unit and integration testing framework (Vite-native)

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
- [ ] Install Vitest and testing utilities
- [ ] Configure Vitest (vitest.config.ts)
- [ ] Set up test environment (jsdom/happy-dom)
- [ ] Create test utilities and helpers
- [ ] Add React Testing Library for component tests

### Phase 5: Development Optimization
- [ ] Configure Next.js optimizations
- [ ] Set up React Compiler (if using experimental features)
- [ ] Configure Vite for dev tools if needed
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
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

## Development Commands

```bash
npm run dev      # Start Next.js dev server
npm run build    # Build for production
npm run start    # Start production server
npm test         # Run Vitest tests
npm run lint     # Run ESLint
```