# Dinesh Suthar Portfolio 

A modern, high-performance, and fully customizable portfolio template built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Designed for developers to showcase their projects, skills, and services with a unique developer-centric aesthetic.

## 🚀 Features

- **Next.js 14 (App Router):** Utilizing the latest features of Next.js for optimal performance and SEO.
- **TypeScript:** Type-safe code for better maintainability and developer experience.
- **Tailwind CSS:** Utility-first CSS framework for rapid and responsive UI development.
- **Theming System:** Built-in theme switcher with multiple color presets (Dark/Light modes supported via data attributes).
- **Responsive Design:** Fully responsive layout that works seamlessly on mobile, tablet, and desktop.
- **Custom Icons:** Lightweight, custom SVG icons without heavy icon library dependencies.
- **SEO Optimized:** Includes dynamic Open Graph images and metadata configuration.
- **Server Actions:** Built-in contact form handling using Next.js Server Actions.
- **Animations:** Smooth CSS-based animations and transitions.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Font:** [Fira Code](https://fonts.google.com/specimen/Fira+Code) (via `next/font`)
- **Deployment:** Vercel (Recommended)

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed:
- Node.js (v18.17.0 or later)
- npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/DINESHSUTHAR427/nextjs-portfolio-template.git
    cd nextjs-portfolio-template
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

4.  **Open your browser:**
    Navigate to http://localhost:3000 to see the application.

## 📂 Project Structure

```text
src/
├── actions/        # Server actions (e.g., contact form submission)
├── app/            # Next.js App Router pages and layouts
├── appData/        # Static data files (projects, skills, testimonials)
├── components/     # Reusable UI components
│   ├── Contact/    # Contact section components
│   ├── Footer/     # Footer component
│   ├── Hero/       # Hero section components
│   ├── Navbar/     # Navigation bar
│   ├── Projects/   # Project showcase components
│   ├── Services/   # Services section components
│   ├── Skills/     # Skills section components
│   ├── Testimonials/ # Testimonial components
│   ├── Theme/      # Theme switcher components
│   └── UI/         # Generic UI elements (Buttons, Inputs)
├── hooks/          # Custom React hooks
├── lib/            # Utility types and libraries
├── services/       # Data fetching services
└── utils/          # Helper functions and icons
```

## 🎨 Customization

This template is designed to be easily customizable. Most of the content is driven by data files located in `src/appData`.

### 1. Personal Information
Edit `src/appData/personal.tsx` to update your social media links and personal details.

### 2. Projects, Skills, & Services
Update the respective files in `src/appData/` to reflect your own portfolio items.

### 3. Themes
You can modify or add new themes in `src/appData/index.ts` (or wherever `themes` is exported). The `ThemeMenu` component automatically renders available themes.

### 4. SEO & Metadata
Update `src/app/layout.tsx` to change the site title, description, and other metadata.
Update `src/app/opengraph-image.tsx` to customize the generated social preview image.

## 🚀 Deployment

The easiest way to deploy your Next.js app is using the Vercel Platform.

## ✍️ Author

**Dinesh Suthar**

- LinkedIn: Dinesh Suthar
- GitHub: @DINESHSUTHAR427

## 📜 License

This project is licensed under the MIT License.
