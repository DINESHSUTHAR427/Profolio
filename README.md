# Profolio - Developer Portfolio Template

A modern, high-performance portfolio template built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Perfect for developers to showcase projects, skills, and services with a sleek, professional aesthetic.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38bdf8?style=flat&logo=tailwind-css)
![MIT License](https://img.shields.io/badge/License-MIT-green)

## Features

- **Next.js 16** - App Router with Server Actions
- **TypeScript** - Type-safe code for maintainability
- **Tailwind CSS 4** - Utility-first styling
- **Theme System** - Multiple color presets with dark/light mode support
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Custom Icons** - Lightweight SVG icons
- **SEO Optimized** - Open Graph images, metadata, sitemap, robots.txt
- **Animations** - Smooth CSS-based transitions
- **Contact Form** - Server-side form handling with validation

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Font:** [Fira Code](https://fonts.google.com/specimen/Fira+Code)
- **Deployment:** Vercel (Recommended)

## Getting Started

### Prerequisites

- Node.js (v18.17.0 or later)
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd Profolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── actions/           # Server actions (contact form)
├── app/               # App Router pages and layouts
├── appData/           # Static data (personal info, config)
├── components/        # Reusable components
│   ├── Contact/       # Contact section
│   ├── Footer/        # Footer
│   ├── Hero/          # Hero section
│   ├── Navbar/        # Navigation
│   ├── Projects/      # Project showcase
│   ├── Services/      # Services section
│   ├── Skills/        # Skills section
│   ├── Theme/         # Theme switcher
│   └── UI/            # Buttons, inputs, etc.
├── hooks/             # Custom React hooks
├── lib/               # Type definitions
└── utils/             # Helpers and icons
```

## Customization

### Personal Information

Edit `src/appData/personal.tsx` to update your name, bio, and social links.

### Content

- Projects: `src/appData/` or `content/projects/`
- Skills: Update in corresponding data files
- Services: Edit service configurations

### Theme

Modify `src/appData/index.ts` to add or adjust themes.

### SEO

Update metadata in `src/app/layout.tsx` and social images in `src/app/opengraph-image.tsx`.

## Available Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start development server |
| `npm run build` | Build for production     |
| `npm run start` | Start production server  |
| `npm run lint`  | Run ESLint               |

## Deployment

Deploy to Vercel with zero configuration:

```bash
# Push to GitHub and import in Vercel
# Or use Vercel CLI
npm i -g vercel
vercel
```

## License

MIT License - feel free to use this template for personal and commercial projects.

## Author

**Dinesh Suthar**

- GitHub: [@DINESHSUTHAR427](https://github.com/DINESHSUTHAR427)
