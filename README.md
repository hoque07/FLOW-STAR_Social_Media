# FLOW STAR

FLOW STAR is a frontend-only V1 social, career, chat, and gamification platform built with React, Vite, TypeScript, Tailwind CSS, React Router DOM, Framer Motion, and Zustand.

## Run locally

```bash
cd frontend
npm install
npm run dev
```

## Build

```bash
cd frontend
npm run build
```

The production output is generated in `frontend/dist` and is GitHub Pages ready. The GitHub Actions workflow lives in `.github/workflows/deploy.yml`.

## V1 behavior

- Fake localStorage auth
- Mock posts, stories, reels, chats, jobs, notifications, creators
- Zustand stores for auth, social, chat, coins, and theme
- Local coin rewards: like +1, follow +10, post +5
- Verification UI: 10K followers unlocks a blue badge
- No backend required
