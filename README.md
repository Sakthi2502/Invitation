# Baby Birthday Invitation Website

A premium, modern, fully responsive baby birthday invitation website built with React.js, Framer Motion, and a beautiful purple theme.

## Features

- Animated opening screen with "Tap to Open Invitation"
- Hero section with baby photo and quote
- Live countdown timer
- Glassmorphism invitation card
- Event details with animated icons
- Add Reminder (.ics calendar download)
- Photo gallery with lightbox
- Google Maps integration
- Contact section with Call & WhatsApp buttons
- Fully responsive (mobile, tablet, desktop)
- Framer Motion animations throughout

## Tech Stack

- React 18
- Vite
- Framer Motion
- React Icons
- CSS3 (no Bootstrap)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Deploy — no additional configuration needed

## Customization

Edit `src/data/invitationData.js` to personalize:

- Baby name, age, and photos
- Event date, time, venue
- Parent names and contact details
- Countdown target date
- Google Maps embed URL

Replace placeholder images in `photos` with your own baby photos.

## Project Structure

```
src/
├── components/
│   ├── OpeningScreen/
│   ├── Hero/
│   ├── Countdown/
│   ├── InvitationCard/
│   ├── EventDetails/
│   ├── Reminder/
│   ├── Gallery/
│   ├── Location/
│   ├── Contact/
│   ├── Footer/
│   ├── FloatingParticles/
│   └── LoadingScreen/
├── data/
│   └── invitationData.js
├── styles/
│   └── global.css
├── utils/
│   └── generateICS.js
├── App.jsx
└── main.jsx
```

## Designed & Developed by

**Code Craft by Sakthi**

© 2026 Code Craft by Sakthi. All rights reserved.
