# STRATEZIC

Production-ready full-stack portfolio website for **STRATEZIC** — Building Strategic Digital Experiences.

## Project Structure

```
stz/
├── backend/     # Express.js API (JSON contact storage)
└── frontend/    # Next.js 16 portfolio website
```

## Quick Start

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

API: `http://localhost:5000`

### 2. Frontend

```bash
cd frontend
npm install
cp .env.example .env.local
npm run dev
```

Website: `http://localhost:3000`

## Tech Stack

| Layer    | Technologies                                      |
|----------|---------------------------------------------------|
| Frontend | Next.js 16, TypeScript, Tailwind CSS, Framer Motion, Lucide |
| Backend  | Node.js, Express, CORS, dotenv, fs JSON storage   |

## Pages

- `/` — Home
- `/services` — Services
- `/pricing` — Pricing
- `/faq` — FAQ
- `/contact` — Contact form

## API

- `POST /api/contact` — submit enquiry
- `GET /api/contact` — list enquiries
- `GET /api/health` — health check

See `backend/README.md` and `frontend/README.md` for detailed setup and configuration.
