# KH Clinical Home Visit Care

A premium, modern React website for KH Clinical Home Visit Care - a healthcare service company providing professional home healthcare services in Puducherry.

## Features

- **Premium Design** - Apple-level clean design with glassmorphism effects
- **Fully Responsive** - Mobile-first design optimized for all devices
- **Dark/Light Mode** - Toggle between themes with persistent preference
- **Smooth Animations** - Framer Motion animations throughout
- **Scroll Progress** - Animated progress indicator at top
- **Back to Top** - Smooth scroll to top button
- **Floating Emergency Button** - Quick access emergency call
- **WhatsApp Integration** - Direct WhatsApp contact button
- **Cursor Glow** - Interactive cursor glow effect (desktop)
- **Loading Screen** - Animated loading animation
- **Sticky Navbar** - Blur effect navbar on scroll
- **Mobile Menu** - Animated hamburger menu
- **Animated Counters** - Number count-up animations
- **Testimonial Carousel** - Smooth sliding testimonials
- **Contact Form** - Glassmorphism form with floating labels
- **SEO Optimized** - Proper meta tags and semantic HTML

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone or download the project
2. Navigate to the project directory:
   ```bash
   cd kh-clinical-care
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
kh-clinical-care/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── StatsSection.jsx
│   │   │   ├── AboutSection.jsx
│   │   │   ├── ServicesSection.jsx
│   │   │   ├── WhyChooseSection.jsx
│   │   │   ├── ProcessSection.jsx
│   │   │   ├── TestimonialsSection.jsx
│   │   │   ├── ServiceAreaSection.jsx
│   │   │   └── ContactSection.jsx
│   │   └── ui/
│   │       ├── ScrollProgress.jsx
│   │       ├── BackToTop.jsx
│   │       ├── FloatingEmergency.jsx
│   │       ├── WhatsAppButton.jsx
│   │       └── CursorGlow.jsx
│   ├── hooks/
│   │   ├── useScrollAnimation.js
│   │   └── useTheme.js
│   ├── lib/
│   │   └── utils.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
- `medical` - Medical blue shades
- `teal` - Teal accent colors
- `cyan` - Cyan accent colors

### Contact Information
Update contact details in:
- `src/components/sections/ContactSection.jsx`
- `src/components/Footer.jsx`
- `src/components/ui/FloatingEmergency.jsx`
- `src/components/ui/WhatsAppButton.jsx`

### Content
All section content can be easily modified in the respective section files under `src/components/sections/`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for KH Clinical Home Visit Care.
