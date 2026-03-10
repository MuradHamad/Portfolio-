# Portfolio Website PRD — Murad Hamad

## Overview

Build a personal developer portfolio website for Murad Hamad, a Software Engineering student and junior full-stack developer from Amman, Jordan (originally from Jerusalem, Palestine). The site should feel trustworthy, focused, and human — communicating that Murad is a serious developer who builds real things and understands what he's doing, not just someone who relies on AI tools.

The primary reference is Brittany Chiang's portfolio (brittanychiang.com) — use it as structural and layout inspiration. Do NOT copy it. Use it as a guide for the layout pattern: fixed left sidebar with nav, right scrollable content, sticky section highlighting.

---

## Tech Stack

- **Framework**: TanStack Router (client-side only — NO TanStack Start, no server needed)
- **Base**: React + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Cloudflare Pages (free forever, no cold starts, custom domain support)
- **Icons**: Lucide React or React Icons
- **Build tool**: Vite

---

## Design System

### Theme
Dark background. Professional, minimal, trustworthy. No gimmicks. The design should feel like a real engineer built it.

### Color Palette
Use exactly these colors as CSS variables:

```css
--color-bg:         #1a1a1a       /* near black background */
--color-surface:    #3C3C3B       /* Gunmetal — cards, panels */
--color-accent:     #1446A0       /* Cobalt Blue — primary accent, links, highlights */
--color-hot:        #DB3069       /* Razzmatazz — hover states, active nav, special highlights */
--color-gold:       #F5D547       /* Royal Gold — small badge accents, tags */
--color-text:       #EBEBD3       /* Beige — all body text */
--color-muted:      rgba(235,235,211,0.5)  /* muted text, descriptions */
```

### Typography
- **Display/Headings**: `DM Serif Display` (Google Fonts) — gives gravitas
- **Body**: `DM Sans` — clean and readable
- **Code/labels/tags**: `DM Mono` — for tech stack tags, section labels

### Spacing & Layout
- Follow Brittany Chiang's two-panel layout:
  - **Left panel** (fixed, ~40% width on desktop): Name, title, tagline, nav links, social icons
  - **Right panel** (scrollable, ~60% width): All sections
- On mobile: single column, top-to-bottom
- Generous padding. Never cramped.

---

## Page Structure & Content

### Left Panel (Fixed Sidebar)

```
Murad Hamad
Junior Developer

Building things that work.
Understanding why they work.

[ Nav links — scroll-spy active state ]
  · About
  · Education
  · Projects
  · Skills

[ Social links at bottom ]
  GitHub   LinkedIn   Email
```

- Active nav item: highlight with `--color-hot` (#DB3069)
- Social icons: subtle, only fill with `--color-accent` on hover

---

### Section 1: About

**Content:**
> I'm a Software Engineering student based in Amman, Jordan, originally from Jerusalem, Palestine. I got into programming because I saw it as a world with infinite things to learn — and I'm someone who genuinely loves learning. What keeps me going is building things and understanding the architecture beneath them: not just that something works, but *why* it works.
>
> I love full-stack development and working at the intersection of good engineering and practical AI tools. I'm still early in my career, but I take the craft seriously.

**Design note:** Include Murad's profile photo here, circular, styled with a `--color-accent` border ring. Photo is to be provided by user.

---

### Section 2: Education

**Title:** Education

**Card content:**

```
University of Petra (UOP)            Oct 2022 – June 2026 (Expected)
Bachelor's in Software Engineering
Amman, Jordan
```

**Notable coursework (display as tag pills):**
- Data Structures & Algorithms
- Algorithm Analysis & Design
- Software Engineering (UML, OOP Design)
- Databases (Relational & SQL)
- Logic & Digital Circuits

**Design note:** Single clean card with a left border in `--color-accent`. Tags in `--color-gold` with dark background. This section replaces "Experience" for now — it should feel weighty and intentional, not like a placeholder.

---

### Section 3: Projects

**Title:** Projects

Display as cards. Each card has:
- Project name (large)
- Short description
- Tech stack tags
- GitHub link button
- Live demo button (if available)
- Hover: card lifts slightly, accent border glows

---

#### Project 1: Shop — E-Commerce Application

**Description:**
A full-stack e-commerce application built from scratch during university, without AI assistance and without React. This was a deliberate choice to deeply understand how server-side web applications work. Implements full CRUD operations, MVC architecture, routing and controllers from first principles.

**What it does:**
- Product listing, creation, editing, and deletion
- Server-side rendering using EJS templates
- RESTful routing with Express.js
- NoSQL data persistence with MongoDB

**Tech stack tags:** `Node.js` `Express.js` `MongoDB` `EJS` `Bootstrap` `MVC`

**Links:**
- GitHub: https://github.com/MuradHamad/shop
- Live: *(not deployed)*

---

#### Project 2: World Cup 2026 Predictions

**Description:**
A fully-featured prediction platform for the FIFA World Cup 2026, built end-to-end using AI-assisted (vibe coded) development. Despite using AI tooling, this project involved real engineering decisions: integrating Google OAuth, deploying to a cloud platform, and managing real-time competition between users.

**What it does:**
- Predict winners from group stage through knockout rounds
- Pick best 8 third-placed teams from 12 groups
- Visual bracket interface for all stages
- Create rooms with unique codes — invite friends and compete
- Google account login via Google Cloud OAuth

**Tech stack tags:** `Next.js` `React` `TypeScript` `Google OAuth` `Google Cloud` `Render`

**Links:**
- GitHub: https://github.com/MuradHamad/worldCupPredictions
- Live: https://worldcuppredictions.onrender.com/

---

### Section 4: Skills

**Title:** Skills

Display in grouped categories. Use tag pills styled with `--color-surface` background and `--color-text` text. On hover: border becomes `--color-accent`.

**Languages**
`JavaScript (Advanced)` `TypeScript` `SQL` `HTML` `CSS`

**Runtime & Frameworks**
`Node.js` `Express.js` `Next.js` `React` `Bootstrap` `EJS`

**Databases**
`MongoDB` `Relational Databases`

**Tools & Concepts**
`Git` `GitHub` `Postman` `REST APIs` `HTTP/HTTPS` `MVC Architecture` `Google Cloud Console` `Google OAuth`

**Currently Learning**
`React (deepening)` `Full-stack architecture` `AI-integrated development`

---

## Interactions & Animations

- **Page load**: Staggered fade-in of left panel elements (name → title → tagline → nav), then right panel slides in
- **Scroll spy**: Nav items highlight as user scrolls to each section
- **Project cards**: Subtle `translateY(-4px)` lift + box-shadow glow on hover
- **Skill tags**: Border color transition on hover
- **Section headings**: Appear with a short upward slide as they enter viewport (Framer Motion `whileInView`)
- **Cursor**: Default (no custom cursor needed — keep it clean)

---

## Header / Meta

```html
<title>Murad Hamad — Junior Developer</title>
<meta name="description" content="Software Engineering student and junior full-stack developer from Amman, Jordan. Building things that work and understanding why they work.">
<meta property="og:title" content="Murad Hamad — Junior Developer">
```

Favicon: Use initials "MH" on a `--color-accent` square background (generate as SVG favicon).

---

## Footer

Simple. One line, centered:

```
Designed & Built by Murad Hamad · 2025
```

Text in `--color-muted`. No other clutter.

---

## File Structure (Suggested)

```
/
├── src/
│   ├── routes/
│   │   ├── __root.tsx         ← root layout
│   │   └── index.tsx          ← main portfolio page
│   ├── components/
│   │   ├── Sidebar.tsx
│   │   ├── About.tsx
│   │   ├── Education.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Footer.tsx
│   ├── routeTree.gen.ts       ← auto-generated by TanStack Router
│   ├── router.tsx
│   ├── main.tsx
│   └── index.css
├── public/
│   └── murad.jpg              ← profile photo goes here
├── index.html
├── vite.config.ts
└── tailwind.config.ts
```

---

## Important Notes for the AI Agent

1. **Framework is TanStack Router (client-side only)** — React + Vite + TanStack Router. No server, no SSR, no TanStack Start. Use `createFileRoute` and file-based routing under `src/routes/`. Fetch TanStack Router docs via Context7 before writing any code.
2. **Deployment target is Cloudflare Pages** — output is static files from `vite build`. Build output goes to `/dist`. No Node.js server config needed.
3. **No Vercel config files** — user does not use Vercel
4. **Profile photo**: Use a placeholder for now (`/public/murad.jpg`), circular with accent border
5. **All content is real** — do not invent placeholder text. Use the exact descriptions above
6. **Single page** — one route `src/routes/index.tsx`, no other routes needed
7. **Mobile responsive** — sidebar collapses to top header on mobile, all sections stack vertically
8. **No database, no backend** — all content hardcoded in components

---

