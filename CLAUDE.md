# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Technology Stack

This is a Gatsby.js portfolio website built with:
- **Gatsby 5.13.2** - Static site generator
- **React 18** - UI framework  
- **TypeScript** - Type checking (though many files use .jsx)
- **Sass** - CSS preprocessing
- **GSAP 2.0.1** - Animation library (TimelineMax)
- **gatsby-plugin-s3** - AWS S3 deployment

## Development Commands

- `npm run develop` or `npm start` - Start development server (localhost:8000)
- `npm run build` - Build for production
- `npm run deploy` - Deploy to S3 bucket (www.paul-barnes.me.uk)
- `npm run serve` - Serve production build locally
- `npm run clean` - Clean Gatsby cache
- `npm run typecheck` - Run TypeScript checking

## Project Architecture

### Pages Structure
- `/src/pages/` - Gatsby pages using file-based routing
- `/src/pages/my-work/` - Project detail pages organized by client/company
- Each project page imports data from `/src/data/pages/js/`

### Components Structure
- `/src/components/` - Reusable React components
- `/src/components/home/` - Homepage-specific components
- Most components are class-based React components using GSAP for animations

### Data Management
- `/src/data/` - Static data files
- `projects.js` - Main projects array with metadata, tags, and featured flags
- `home.json` - Homepage content via GraphQL
- `/src/data/pages/js/` - Individual project page data organized by client

### Styling
- `/src/assets/scss/` - Sass files with Bootstrap integration
- `style.scss` - Main stylesheet import
- Components organized in `/src/assets/scss/components/`
- Custom Bootstrap configuration and variables

### Images & Assets
- `/src/assets/images/` - Source images
- `/src/assets/images/svg/` - SVG icons and logos
- `/static/` - Static assets (favicon, manifest, etc.)

## Key Patterns

### Animation System
- Uses GSAP TimelineMax for page animations
- Common pattern: `setupAnimation()` checks if images are loaded before running `animate()`
- `.fade-in` class applied to elements that animate on page load
- Animation triggers in `componentDidMount()` lifecycle

### Project Data Structure
Each project in `projects.js` includes:
- `id`, `name`, `copy`, `cta` (call-to-action)
- `logo`, `image`, `tile` (styling)
- `tags` (for filtering/similarity)
- `featured` (boolean for homepage display)

### GraphQL Integration
- `gatsby-transformer-json` processes data files
- GraphQL queries in page components (see `src/pages/index.jsx:94`)
- Type generation enabled in `gatsby-config.ts`

## Configuration Files

- `gatsby-config.ts` - Gatsby configuration with plugins
- `tsconfig.json` - TypeScript configuration (strict mode enabled)
- No ESLint or Prettier config files present
- Google Analytics tracking ID: UA-119929763-1

## Deployment

The site deploys to AWS S3 bucket `www.paul-barnes.me.uk` using `gatsby-plugin-s3`.