<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know
Read `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Output Rules
- Code only. No explanations, no commentary, no summaries.
- No preamble ("Here's what I did..."), no postamble ("Let me know if...").
- If task is ambiguous, make reasonable assumptions and proceed — do not ask.
- If something is broken, fix it silently unless it requires a decision from the user.

## Quick Start
- **Dev:** `npm run dev` → http://localhost:3000
- **Build:** `npm run build` then `npm start`
- **Lint:** `npm run lint`

## Key Files
- Entry: `app/layout.tsx`, `app/page.tsx`
- Components: `src/components/`
- Sections: `src/sections/`
- Data: `src/data/portfolio.ts`
- Config: `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`

## Conventions
- Next.js App Router + TypeScript
- Tailwind CSS mobile-first, global styles in `app/globals.css`
- Path alias `@/*` → `src/*`
- `framer-motion` for animation, `@tanstack/react-query` for state
- Add `use client` only when required

## Rules
- No inline comments unless logic is genuinely non-obvious
- No unit tests unless explicitly requested
- Small targeted edits only — do not refactor unrelated code
- Check `src/components/` and `src/sections/` before adding new patterns
- When updating Tailwind, verify `tailwind.config.ts` matches usage