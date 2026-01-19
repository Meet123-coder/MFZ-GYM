import { useEffect } from 'react';

export const useScrollReveal = (selectorAll) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ScrollReveal) {
      const sr = window.ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
      });

      sr.reveal('.home__data', { origin: 'left' });
      sr.reveal('.home__img', { origin: 'right' });
      sr.reveal('.home__buttons', { origin: 'bottom' });
      sr.reveal('.home__stats', { origin: 'bottom' });
      sr.reveal('.motivation__content', { origin: 'bottom', delay: 200 });
      sr.reveal('.gallery__card', { interval: 100 });
      sr.reveal('.logos__img', { interval: 100 });
      sr.reveal('.program__card', { interval: 100 });
      sr.reveal('.choose__content', { origin: 'left' });
      sr.reveal('.choose__img, .calculate__img', { origin: 'right' });
      sr.reveal('.testimonials__card', { interval: 100 });
      sr.reveal('.pricing__card', { interval: 100 });
      sr.reveal('.footer__content', { interval: 100 });
    }
  }, []);
};

export const useScrollHeader = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      if (window.scrollY >= 50) {
        header?.classList.add('scroll-header');
      } else {
        header?.classList.remove('scroll-header');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export const useScrollActive = () => {
  useEffect(() => {
    const handleScrollActive = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollDown = window.scrollY;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector(
          `.nav__list a[href*="${sectionId}"]`
        );

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
          sectionsClass?.classList.add('active-link');
        } else {
          sectionsClass?.classList.remove('active-link');
        }
      });
    };

    window.addEventListener('scroll', handleScrollActive);
    return () => window.removeEventListener('scroll', handleScrollActive);
  }, []);
};

export const useScrollUp = () => {
  useEffect(() => {
    const handleScrollUp = () => {
      const scrollUp = document.getElementById('scroll-up');
      if (window.scrollY >= 350) {
        scrollUp?.classList.add('show-scroll');
      } else {
        scrollUp?.classList.remove('show-scroll');
      }
    };

    window.addEventListener('scroll', handleScrollUp);
    return () => window.removeEventListener('scroll', handleScrollUp);
  }, []);
};
