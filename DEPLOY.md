# Deploy to Vercel — step by step

## Before you deploy

1. Push the latest code to GitHub (including `public/assets/k8s.png`):

```powershell
cd C:\Users\MSI\Desktop\Portfolio
git add .
git commit -m "Add KubeMemory screenshot and Vercel config"
git push
```

2. Test the production build locally (optional but recommended):

```powershell
npm run build
npm run start
```

Open http://localhost:3000 — scroll all sections, confirm CV download and images load.

---

## Step 1 — Create a Vercel account

1. Go to [https://vercel.com](https://vercel.com)
2. Click **Sign Up**
3. Choose **Continue with GitHub**
4. Authorize Vercel to access your GitHub account

---

## Step 2 — Import your repository

1. On the Vercel dashboard, click **Add New…** → **Project**
2. Find **Abhijith-Portfolio** (`jackryan100123/Abhijith-Portfolio`)
3. Click **Import**

---

## Step 3 — Configure the project (usually auto-filled)

| Setting | Value |
|--------|--------|
| Framework Preset | **Next.js** |
| Root Directory | `./` (leave default) |
| Build Command | `next build` |
| Output Directory | *(leave empty — Next.js default)* |
| Install Command | `npm install` |

**Environment variables:** none required for this portfolio.

Click **Deploy**.

---

## Step 4 — Wait for the build

- First deploy takes ~2–4 minutes
- Vercel runs `npm install` → `next build` → deploys to a URL like:
  - `https://abhijith-portfolio-xxx.vercel.app`

When status is **Ready**, open the URL.

---

## Step 5 — Verify after deploy

Checklist:

- [ ] Hero: name, photo, typing roles, Framer Motion transitions
- [ ] Scroll animations trigger once per section
- [ ] KubeMemory screenshot (`k8s.png`) visible
- [ ] **Download CV** works (Nav + Hero)
- [ ] Diagrams expand/collapse
- [ ] Infrastructure topology tabs switch
- [ ] Mobile layout looks correct

---

## Step 6 — Custom domain (optional)

1. Project → **Settings** → **Domains**
2. Add your domain (e.g. `abhijithmenon.dev`)
3. Follow DNS instructions at your registrar (A/CNAME records Vercel provides)

---

## Framer Motion & performance on Vercel

Already optimized in this project:

- Animations use `useInView({ once: true })` — run once, not on every scroll
- `loading.tsx` shows a fast shell while the page hydrates
- `next/image` optimizes photos on Vercel’s CDN
- Client components only where needed (Hero, sections, diagrams)

No extra Vercel config required for Framer Motion.

---

## Automatic deploys

Every `git push` to **main** triggers a new production deploy on the free Hobby plan.

---

## CLI deploy (alternative)

```powershell
npm i -g vercel
cd C:\Users\MSI\Desktop\Portfolio
vercel login
vercel
vercel --prod
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Build fails on `npm run build` | Run locally, fix TypeScript/ESLint errors, push again |
| CV 404 | Ensure `public/assets/Abhijith_cv.pdf` is committed and pushed |
| Images missing | Ensure files are under `public/assets/`, not only `assets/` |
| Slow first load | Normal on cold start; Vercel caches after first visit |
| Wrong region latency | `vercel.json` uses `bom1` (Mumbai) — change in Vercel dashboard if needed |
