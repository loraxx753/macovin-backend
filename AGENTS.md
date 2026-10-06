# AGENTS

Scope: this file applies to all work under macovin-backend/.

## Repo Identity
- Canonical role: thin API for the Macovin company site ([macovin-frontend](https://github.com/loraxx753/macovin-frontend)). No auth, CMS, or payments.
- Stack: Node 20+, TypeScript, Express, Zod.

## Fast Start
- Install: `npm install`
- Dev: `npm run dev` (port 3001)
- Typecheck: `npm run typecheck`
- Build: `npm run build`

## Architecture Notes
- Routes: `GET /health` and `POST /api/contact`.
- Contact submissions append one JSON object per line to `data/contacts.json` (gitignored). On Railway that file is lost on redeploy unless a volume is attached.
- Allowed site origins come from `CORS_ORIGINS`.
- The Work page examples live in the frontend, not here.

## Jira
- Site: https://macovin.atlassian.net
- Project: `MAC`
- Default issue type: Task
- Create and update tickets in `MAC` unless the user names another project. Factory work goes in `MNWL` (Meanwhile), Shimmering Stars work in `SS`.
- Pair frontend work with `macovin-frontend` under the same `MAC` ticket.
- Loop: create a ticket when the work starts, do it on a branch, open a PR, merge, then mark the ticket **Done** with a short comment of what landed (PR link, what changed, what's not included). Tracking is a byproduct of shipping, not a ceremony before code.
- Do not hold a feature open for tests or docs. File those as housekeeping on their own tickets.

## Working Rules for Agents
- Keep it boring. Validate input with Zod, keep routes small.
- Changes to `/api/contact` need a matching check in the frontend contact form.
