import React, { useEffect, Suspense, lazy } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Home from './components/Home';
import Motivation from './components/Motivation';
import Program from './components/Program';
import Equipment from './components/Equipment';
import Choose from './components/Choose';
import Calculate from './components/Calculate';
import Footer from './components/Footer';
import ScrollUp from './components/ScrollUp';
import './styles/Global.css';

// Import scroll hooks
import {
  useScrollReveal,
  useScrollHeader,
  useScrollActive,
  useScrollUp,
} from './hooks/useScroll';

// Import ScrollReveal library
import ScrollReveal from 'scrollreveal';

// Lazy-load heavier components to reduce initial bundle
const Logos = lazy(() => import('./components/Logos'));
const Gallery = lazy(() => import('./components/Gallery'));
const Pricing = lazy(() => import('./components/Pricing'));
const Testimonials = lazy(() => import('./components/Testimonials'));

function App() {
  // Initialize window.ScrollReveal for the hook
  useEffect(() => {
    window.ScrollReveal = ScrollReveal;
  }, []);

  // Use scroll hooks
  useScrollReveal();
  useScrollHeader();
  useScrollActive();
  useScrollUp();

  return (
    <HelmetProvider>
      <Helmet>
        <title>MFZ - My Fitness Zone | Expert Gym & Fitness Training</title>
        <meta
          name="description"
          content="Transform your body with MFZ - My Fitness Zone. Expert trainers, proven fitness programs, and 200+ active members. Join now and achieve your fitness goals!"
        />
        <meta
          name="keywords"
          content="gym, fitness, training, bodybuilding, weight loss, personal trainer, workout"
        />
        <meta property="og:title" content="MFZ - My Fitness Zone | Expert Gym & Fitness Training" />
        <meta
          property="og:description"
          content="Transform your body with expert trainers and proven fitness programs. Join 200+ active members and 500+ success stories."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MFZ - My Fitness Zone" />
        <meta name="twitter:description" content="Expert gym training and fitness programs" />
        <meta name="theme-color" content="#FF0000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'GymFitnessCenter',
            name: 'MFZ - My Fitness Zone',
            description: 'Expert gym and fitness training center',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '4th Floor, ABC-1, Near Sudama Chowk',
              addressLocality: 'Mota Varachha',
              addressRegion: 'Gujarat',
              postalCode: 'Surat',
              addressCountry: 'IN',
            },
            telephone: '+91-9925826698',
            url: 'https://mfzgym.com',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '500',
            },
          })}
        </script>
      </Helmet>

      <div className="app">
        <Header />

        <main className="main">
          <Home />
          <Motivation />
          <Suspense fallback={null}>
            <Logos />
          </Suspense>
          <Program />
          <Equipment />
          <Suspense fallback={null}>
            <Gallery />
          </Suspense>
          <Choose />
          <Suspense fallback={null}>
            <Pricing />
            <Testimonials />
          </Suspense>
          <Calculate />
        </main>

        <Footer />
        <ScrollUp />
      </div>
    </HelmetProvider>
  );
}

export default App;
