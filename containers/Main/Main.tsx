import React, { useEffect } from 'react';

import {
  Header,
  Features,
  Operations,
  Testimonials,
  OpenAccount,
} from '../../exports/exports';

const Main: React.FC = () => {
  // Revealing Elements on Scroll
  useEffect(() => {
    const allSections = document.querySelectorAll('.section');

    const revealSection = (entries: any, observer: any) => {
      const [entry] = entries;

      // Guard Clause
      if (!entry.isIntersecting) return;
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    };

    const sectionObserver = new IntersectionObserver(revealSection, {
      root: null,
      threshold: 0.15,
    });

    allSections.forEach(section => {
      sectionObserver.observe(section);
      section.classList.add('section--hidden');
    });

    return () => {};
  }, []);

  return (
    <main>
      <Header />
      <Features />
      <Operations />
      <Testimonials />
      <OpenAccount />
    </main>
  );
};

export default Main;
