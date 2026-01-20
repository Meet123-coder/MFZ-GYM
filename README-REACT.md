# MFZ - My Fitness Zone React App

A modern, responsive gym website built with React, featuring expert training programs, equipment showcases, and member transformations.

## Features

- ✅ **React 18** with Hooks for state management
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **SEO Optimized** - React Helmet for meta tags and structured data
- ✅ **CSS Modules** - Scoped styling for maintainability
- ✅ **Email Integration** - EmailJS for form submissions
- ✅ **BMI Calculator** - Interactive fitness tools
- ✅ **Scroll Animations** - ScrollReveal library
- ✅ **Performance Optimized** - Optimized images and lazy loading
- ✅ **Accessibility** - Semantic HTML and ARIA labels

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.jsx
│   ├── Home.jsx
│   ├── Program.jsx
│   ├── Equipment.jsx
│   ├── Gallery.jsx
│   ├── Motivation.jsx
│   ├── Logos.jsx
│   ├── Choose.jsx
│   ├── Pricing.jsx
│   ├── Testimonials.jsx
│   ├── Calculate.jsx
│   ├── Footer.jsx
│   └── ScrollUp.jsx
├── styles/              # CSS modules
│   ├── Global.css
│   ├── Header.module.css
│   ├── Home.module.css
│   └── ... (other component styles)
├── hooks/               # Custom React hooks
│   └── useScroll.js
├── utils/               # Utility functions
│   ├── constants.js
│   └── validation.js
├── assets/              # Images and static files
├── App.jsx              # Main app component
└── index.jsx            # Entry point
```

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm build
```

## Environment Variables

Create a `.env` file in the root directory:

```
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

## Technologies Used

- **React 18** - UI library
- **React Helmet Async** - SEO management
- **EmailJS** - Email sending service
- **ScrollReveal** - Scroll animations
- **Remixicon** - Icon library
- **CSS Modules** - Component-scoped styling

## Components Overview

### Header
- Responsive navigation with mobile menu
- Sticky header on scroll
- Active link highlighting

### Home
- Hero section with statistics
- Call-to-action buttons
- Animated background

### Program
- Fitness program cards
- Interactive hover effects
- Program descriptions

### Equipment
- Equipment showcase grid
- Image galleries
- Responsive grid layout

### Gallery
- Member transformation stories
- Image overlays with info
- Smooth animations

### Pricing
- Three pricing tiers
- Feature lists
- Highlighted premium plan

### Calculate
- BMI calculator form
- Real-time calculations
- Result messaging

### Footer
- Contact information
- Newsletter subscription
- Social media links

## SEO Optimization

- ✅ React Helmet for meta tags
- ✅ Structured data (JSON-LD)
- ✅ Semantic HTML
- ✅ Open Graph tags
- ✅ Mobile-friendly viewport
- ✅ Performance optimization

## Custom Hooks

### useScrollReveal
Initializes scroll animations for elements

### useScrollHeader
Adds background to header on scroll

### useScrollActive
Highlights active navigation links based on scroll position

### useScrollUp
Shows/hides scroll-to-top button

## Accessibility Features

- Semantic HTML elements
- Proper heading hierarchy
- Alt text for images
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance

## Performance

- Code splitting
- Lazy loading images
- CSS module imports
- Optimized bundle size
- Hardware acceleration for animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2026 MFZ Gym - Built with Passion & Strength

## Support

For issues or questions, contact: +91 9925826698

---

**Built with React for better performance, maintainability, and scalability.**
