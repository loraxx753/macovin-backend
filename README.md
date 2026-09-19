# macovin-backend

Thin API for the [Macovin](https://github.com/loraxx753/macovin) company website ([macovin-frontend](https://github.com/loraxx753/macovin-frontend)).

People-facing company site support only. No auth, CMS, payments, or buffet domain.

## Stack

Node 20+, TypeScript, Express, Zod. Boring on purpose.

## Quick start

```bash
npm install
cp .env.example .env
npm run dev
```

Server defaults to `http://localhost:3001`.

Production-style:

```bash
npm run build
npm start
```

## Environment

| Variable | Default | Notes |
| --- | --- | --- |
| `PORT` | `3001` | HTTP port |
| `CORS_ORIGINS` | local ports + `https://macovin.com` + `https://www.macovin.com` | Comma-separated allowed origins. If you set this on Railway, list every origin you need (defaults are replaced, not merged). |
| `CONTACT_DATA_DIR` | `./data` | Where contact submissions are appended |

Copy `.env.example` to `.env` and edit as needed.

**Production CORS (Railway):** prefer an explicit list so cutover URLs are covered:

```bash
CORS_ORIGINS=https://macovin.com,https://www.macovin.com,https://YOUR-FRONTEND.up.railway.app
```

If `CORS_ORIGINS` is unset, the API already allows local ports plus the two company custom domains.

Local defaults also allow `http://localhost:3000`, `http://localhost:5173`, and the matching `127.0.0.1` hosts.

## Endpoints

### `GET /health`

Liveness check.

```bash
curl http://localhost:3001/health
```

### `POST /api/contact`

Contact form intake. Validates, logs, and appends one JSON line to `data/contacts.json`.

Body:

```json
{
  "name": "Ada",
  "email": "ada@example.com",
  "message": "Hello from the site.",
  "company": "optional"
}
```

```bash
curl -X POST http://localhost:3001/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"name":"Ada","email":"ada@example.com","message":"Hello"}'
```

Success: `201 { "ok": true }`. Validation errors: `400` with field details.

### `GET /api/examples`

Optional static blurbs for site examples (elder care, Texas workers’ rights). Frontend may also hardcode from macovin `project-ideas`.

### `GET /api/examples/:id`

One example by id (`elder-care` or `texas-workers-rights`).

## Out of scope (for now)

Auth, CMS, payments, buffet product domain, inventing prices or fundraising details.
