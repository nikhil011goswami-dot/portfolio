# Nikhil Goswami — Developer Portfolio

A premium, animated personal portfolio website built with React, Vite, and Tailwind CSS.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** — fast dev server and build tool
- **Tailwind CSS** — utility-first styling
- **Lucide React** — icons
- **Google Fonts** — Inter, Space Grotesk, JetBrains Mono

## Project Structure

```
├── index.html
├── src/
│   ├── App.tsx                 # Root — assembles all sections
│   ├── main.tsx                # Entry point
│   ├── index.css               # Global styles, animations, cursor
│   ├── components/
│   │   ├── CustomCursor.tsx     # Custom cursor (dot + ring)
│   │   ├── Navbar.tsx           # Fixed nav with mobile menu + scroll progress
│   │   ├── Hero.tsx             # Hero with typewriter effect + portrait
│   │   ├── About.tsx            # About + stats
│   │   ├── Projects.tsx         # Featured project cards
│   │   ├── Skills.tsx           # Skill categories
│   │   ├── Achievements.tsx     # Achievement cards
│   │   ├── Contact.tsx          # Contact section with copy-to-clipboard
│   │   ├── Footer.tsx           # Footer with social links
│   │   └── Reveal.tsx           # Scroll-reveal wrapper component
│   ├── data/
│   │   └── portfolio.ts         # All personal data, projects, skills, etc.
│   └── hooks/
│       └── useScrollReveal.ts   # Scroll reveal, progress, active section hooks
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Local Development

```bash
npm install
npm run dev
```

The dev server starts automatically — no manual command needed.

## Personal Assets

The hero portrait is connected to the latest uploaded professional photo at `public/images/WhatsApp_Image_2026-10-11_at_18.38.36.jpeg` and is cropped into the circular profile frame automatically.

A downloadable `public/resume.pdf` is included and connected to the hero button. The resume content uses the verified project descriptions, technology lists, education, bootcamp, hackathon, and Webnova details you provided.

## Deployment

### Vercel (recommended for Vite)

1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com), import the repo.
3. Vercel auto-detects Vite — no config needed.
4. Click Deploy.

### Netlify

1. Push your code to GitHub.
2. Go to [netlify.com](https://netlify.com), import the repo.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click Deploy.

### GitHub Pages

1. Run `npm run build` — this creates a `dist/` folder.
2. Push the contents of `dist/` to a `gh-pages` branch, or use the `gh-pages` npm package:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add to `package.json`:
   ```json
   "homepage": "https://<username>.github.io/<repo-name>",
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.

## Testing Checklist

- [ ] **Responsive**: Check on mobile (375px), tablet (768px), desktop (1440px)
- [ ] **Animations**: Scroll through — sections should animate in smoothly
- [ ] **Accessibility**: Test with keyboard navigation (Tab, Enter)
- [ ] **Reduced motion**: Enable "reduce motion" in OS settings — animations should be minimal
- [ ] **Navigation**: All nav links scroll to correct sections
- [ ] **Active section**: Navbar highlights the section currently in view
- [ ] **Portrait**: `/portrait.jpg` loads in the hero (or placeholder shows)
- [ ] **Resume**: `/resume.pdf` downloads when clicking "Download Resume"
- [ ] **Social links**: GitHub and LinkedIn open correct profiles in new tabs
- [ ] **Email**: "Start a Conversation" opens email client with correct address
- [ ] **Copy email**: Click copy icon — email copies to clipboard
- [ ] **Mobile menu**: Hamburger opens/closes, links work, body scroll locks
- [ ] **Custom cursor**: Dot + ring follow mouse on desktop; hidden on touch devices
- [ ] **No broken images**: All images load or show fallback
- [ ] **No console errors**: Check browser dev console for errors
