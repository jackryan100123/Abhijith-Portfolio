# Abhijith R — Portfolio Project Plan
> Minimalist · Architecture-first · Infographic-driven
> Built with: Next.js 14 · TypeScript · Tailwind CSS · Framer Motion

---

## Quick Start in Cursor

```bash
npx create-next-app@latest abhijith-portfolio \
  --typescript --tailwind --app --src-dir --import-alias "@/*"
cd abhijith-portfolio
npm install framer-motion @tabler/icons-react chart.js react-chartjs-2
```

### Google Fonts — add to `app/layout.tsx`
```
JetBrains Mono (weights: 400, 500)
Instrument Serif (weights: 400, italic)
```

---

## Color Palette

```css
/* globals.css */
:root {
  --bg:         #0d0d0d;
  --bg-card:    #111111;
  --bg-surface: #161616;
  --border:     #222222;
  --text-dim:   #555555;
  --text-muted: #888888;
  --text-base:  #cccccc;
  --text-hi:    #f0f0f0;
  --accent:     #4ade80;   /* green — your "system online" color */
  --accent-2:   #a78bfa;   /* purple — for AI/LLM sections */
  --accent-3:   #fb923c;   /* orange — for infra/DevOps sections */
}
```

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx          # fonts, meta, globals
│   ├── page.tsx            # assembles all sections
│   └── globals.css
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Infrastructure.tsx
│   │   └── Contact.tsx
│   ├── diagrams/
│   │   ├── ETLPipeline.tsx       # SVG diagram component
│   │   ├── RAGPipeline.tsx       # SVG diagram component
│   │   ├── CICDPipeline.tsx      # SVG diagram component
│   │   └── AWSInfraMap.tsx       # SVG diagram component
│   ├── ui/
│   │   ├── MetricCounter.tsx     # animated number on scroll
│   │   ├── SkillsRadar.tsx       # chart.js radar chart
│   │   ├── TerminalCursor.tsx    # blinking cursor effect
│   │   └── TimelineEntry.tsx     # expandable work entry
│   └── Nav.tsx
public/
├── assets/
│   ├── abhijith.jpg         # ← YOUR PHOTO HERE
│   └── Abhijith_CV.pdf      # ← YOUR CV HERE
```

---

## Section 01 — Hero

**Prompt for Cursor:**
> "Create a full-viewport Hero component. Dark background (#0d0d0d). Large name 'Abhijith R' in Instrument Serif italic, ~72px. Below it, a typing animation that cycles through: 'Software Engineer', 'Backend Systems Architect', 'AWS Cloud Practitioner', 'DevOps Engineer'. Use setInterval to cycle every 2.5s with a fade transition. Add a blinking green cursor (|). Bottom of viewport: two buttons — 'View Work' (scrolls to #projects) and 'Download CV' (links to /assets/Abhijith_CV.pdf). Background: subtle SVG dot grid, 24px spacing, #222 dots."

**Key details:**
- Awarded by DG of Chandigarh Police — mention in a small badge/strip in hero or just below it
- AWS Certified badge — small pill near name

---

## Section 02 — About + Skills Radar

**Prompt for Cursor:**
> "Create an About section. Left side: 3-line bio. Right side: Chart.js radar chart with 6 axes. Use react-chartjs-2. Axes: Backend (95), Cloud/AWS (85), DevOps/CI-CD (88), Security (80), AI/ML (75), Observability (82). Dark theme: grid lines #222, point labels in #888, filled area in rgba(74,222,128,0.15) with #4ade80 border. Animate on scroll using Framer Motion (animate from 0 to values when section enters viewport)."

**Stack grid below chart:**
```
Languages: Python, C, C++
Backend: Django, DRF, Celery, REST APIs
Cloud: EC2, S3, RDS, Lambda, VPC, Route 53, CloudWatch
DevOps: Docker, Kubernetes, Helm, Jenkins
Security: SonarQube, Trivy, OWASP
DB/Search: PostgreSQL, Redis, Elasticsearch
Observability: Prometheus, Grafana
AI/ML: LangChain, RAG, ChromaDB
```

---

## Section 03 — Experience

### Innefu Labs (Feb 2024 – Present)
**Client: CENCOPS, Chandigarh Police**

Animated metric counters (trigger on scroll):
- `1M+` API responses processed daily
- `60%` reduction in manual deployment effort
- Multi-TB file upload system with chunking

**Expandable: ETLPipeline.tsx diagram** (see diagram components below)

Awards callout:
> "🏆 Awarded by the Director General of Chandigarh Police for delivering a secure case management system ahead of schedule."

### Samsung Prism (Sept 2022 – Feb 2023)
- Multilingual RASA chatbot
- 20% NLP accuracy improvement
- 4/5 user satisfaction

---

## Section 04 — Projects

### KanoonSarthi.AI
**Card layout:**
- What: Legal AI assistant — real-time document Q&A
- Stack badges: LangChain · RAG · Gemini · ChromaDB · FastAPI · K8s · Prometheus
- Architecture: RAGPipeline.tsx (SVG diagram, expandable)
- GitHub link: https://github.com/jackryan100123/KanoonSaarthi-AI

### DevSecOps CI/CD Pipeline
- What: Zero-touch security-enforced deployment pipeline
- Stack badges: Jenkins · SonarQube · Trivy · OWASP · Docker · Kubernetes · Helm
- Architecture: CICDPipeline.tsx diagram
- GitHub link: (iplogger / cyber_chatbot_backend repos)

### Cyber Chatbot
- GitHub: https://github.com/jackryan100123/cyber_chatbot_backend
- Stack: Node.js backend · TypeScript frontend · RAG

### RAG Implementation (open source)
- GitHub: https://github.com/jackryan100123/Rag-Implementation
- Python · LangChain · vector stores

---

## Section 05 — Infrastructure Philosophy

**Unique differentiator — no other portfolio does this.**

**Prompt for Cursor:**
> "Create an 'Infrastructure Philosophy' section with a dark card grid. Three philosophy cards, each with a heading, 2-line principle, and a small SVG icon. Card 1: 'Observability first' — ship Prometheus + Grafana before shipping features. Card 2: 'Security in the pipeline' — SonarQube, Trivy, OWASP as gates, not afterthoughts. Card 3: 'Async by default' — Celery + Redis for anything that doesn't need to block the request cycle. Below: AWSInfraMap.tsx — a structural diagram of your production stack: EC2 → RDS/PostgreSQL, S3, Nginx reverse proxy, Route 53, Certbot SSL, CloudWatch."

---

## Section 06 — Contact

**Prompt for Cursor:**
> "Minimal contact section. Large text: 'Let's build something.' in Instrument Serif. Below: three links as monospaced list items — Email (abhijithr962@gmail.com), GitHub (github.com/jackryan100123), LinkedIn (linkedin.com/in/abhijith962). A subtle green dot (pulsing) next to 'Open to opportunities'. No form library — just a mailto link."

---

## Diagram Components — What to Build

### `ETLPipeline.tsx`
SVG component, dark themed. Nodes:
`Streaming APIs` → `Django REST` → `Celery Workers` → `Elasticsearch` → `Dashboard`
Also: `File Uploads` feeding into Django, `Redis` as broker, `Jenkins CI/CD` and `Nginx/Route53` as infra footnotes.

### `RAGPipeline.tsx`
`User Query` → `LangChain Embedding` → `ChromaDB` → `Gemini LLM` → `Legal Answer`
Legal corpus feeds into ChromaDB. Infra bar: K8s · Helm · Prometheus · Grafana.

### `CICDPipeline.tsx`
`Git Push` → `Jenkins` → `Security Gates [SonarQube + Trivy + OWASP]` → `Docker Build` → `K8s + Helm`
Gate block highlighted in red/warning. Pass path in green.

### `AWSInfraMap.tsx`
Structural diagram:
- Outer: VPC container
- Inside: EC2 instance (Django + Nginx), RDS (PostgreSQL), ElastiCache (Redis)
- External: Route 53 DNS → Nginx → EC2, S3 bucket, CloudWatch monitoring

---

## Animations Checklist

- [ ] Hero: typing cycle animation (JS setInterval)
- [ ] Hero: dot grid background (SVG pattern)
- [ ] Skills: radar chart animates in on scroll (Framer Motion)
- [ ] Experience: metric counters animate 0→value on scroll
- [ ] Projects: cards slide up on scroll (Framer Motion staggerChildren)
- [ ] Nav: transparent → blur + border on scroll (window scroll event)
- [ ] All diagrams: fade in on scroll

---

## Assets to Drop In

| File | Path | Notes |
|------|------|-------|
| Your photo | `/public/assets/abhijith.jpg` | Square crop, min 400×400px |
| CV PDF | `/public/assets/Abhijith_CV.pdf` | Linked from hero CTA |
| Award photo (optional) | `/public/assets/award.jpg` | DG recognition moment |

---

## Deploy

```bash
# Vercel (recommended)
npm install -g vercel
vercel --prod

# Or push to GitHub and connect Vercel dashboard
```

**Recommended domain:** `abhijithr.dev` or `abhijith.engineer`

---

## Cursor Tips

1. Open the project, then give Cursor each section prompt above one at a time
2. Build section by section — don't prompt all at once
3. For SVG diagrams, paste the diagram code from Claude directly into the component files and make them React components
4. Use `useInView` from `framer-motion` for all scroll-triggered animations
5. Test on mobile — most traffic will be mobile recruiters

---

*Plan generated by Claude · May 2026*
