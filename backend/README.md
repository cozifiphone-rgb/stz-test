# STRATEZIC Backend

Express.js API for the STRATEZIC portfolio website. Contact form submissions are validated and stored in a JSON file.

## Stack

- Node.js
- Express.js
- CORS
- dotenv
- File System (`fs`) for JSON persistence

## Project Structure

```
backend/
├── src/
│   ├── controllers/     # Route handlers
│   ├── routes/          # API route definitions
│   ├── middleware/      # Validation & error handling
│   ├── utils/           # File storage & validators
│   ├── data/
│   │   └── contact-data.json
│   └── index.js         # App entry point
├── .env.example
└── package.json
```

## Setup

1. Install dependencies:

```bash
cd backend
npm install
```

2. Configure environment:

```bash
cp .env.example .env
```

Edit `.env` if needed:

```
PORT=5000
CORS_ORIGIN=http://localhost:3000
NODE_ENV=development
```

3. Start the server:

```bash
# Development (auto-reload on Node 18+)
npm run dev

# Production
npm start
```

The API listens at `http://localhost:5000`.

## API Endpoints

### Health Check

```
GET /api/health
```

### Create Contact Enquiry

```
POST /api/contact
Content-Type: application/json
```

**Body**

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "title": "Business Website",
  "description": "I need a modern business website with SEO and contact form."
}
```

**Success:** `201 Created`

**Validation errors:** `400 Bad Request`

### Fetch All Contact Enquiries

```
GET /api/contact
```

**Success:** `200 OK`

## Validation Rules

| Field       | Rules                                      |
|-------------|--------------------------------------------|
| fullName    | Required, 2–100 characters                 |
| email       | Required, valid email, max 150 characters  |
| phone       | Required, valid phone format               |
| title       | Required, 3–150 characters                 |
| description | Required, 20–2000 characters               |

## Data Storage

Submissions are appended to `src/data/contact-data.json` with auto-generated `id`, `createdAt`, `date`, and `time` fields.

## Status Codes

| Code | Meaning                |
|------|------------------------|
| 200  | Success                |
| 201  | Resource created       |
| 400  | Validation error       |
| 404  | Route not found        |
| 500  | Internal server error  |
