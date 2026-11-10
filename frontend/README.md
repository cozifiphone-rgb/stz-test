# STRATEZIC Frontend

Next.js 16 App Router frontend for the STRATEZIC company portfolio website.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React

## Features

- Responsive pages: Home, Services, Pricing, FAQ, Contact
- Sticky glassmorphism navbar with mobile slide menu
- SEO metadata, Open Graph, Twitter cards, JSON-LD, sitemap, robots.txt
- Contact form with client validation and Express API integration
- Reusable UI components and constants-driven content

## Setup

1. Install dependencies:

```bash
cd frontend
npm install
```

2. Configure environment:

```bash
cp .env.example .env.local
```

Default values:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:5000
```

3. Start the backend first (from `/backend`), then run the frontend:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command       | Description              |
|---------------|--------------------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build       |
| `npm start`   | Start production server  |
| `npm run lint` | Run ESLint              |

## Project Structure

```
frontend/
├── app/                 # App Router pages & SEO routes
├── components/          # UI, layout, page sections
├── constants/           # Site content & config
├── styles/              # Global CSS
├── utils/               # API helpers & SEO utilities
└── public/              # Static assets
```

## Contact Form API

The contact form posts to:

```
POST {NEXT_PUBLIC_API_URL}/api/contact
```

Ensure the Express backend is running before testing form submissions.

## Production Notes

- Set `NEXT_PUBLIC_SITE_URL` to your live domain for correct canonical URLs, sitemap, and Open Graph tags.
- Set `NEXT_PUBLIC_API_URL` to your deployed backend URL.
- Run `npm run build` and verify Core Web Vitals before deploying.
