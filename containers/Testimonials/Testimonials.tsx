import React from 'react';

import { Carousel } from '../../exports/exports';
import AppWrap from '../../components/HOC/AppWrap';
import MotionWrap from '../../components/HOC/MotionWrap';

const Testimonials: React.FC = () => {
  return (
    <section className="section">
      <div className="section__title section__title--testimonials">
        <h2 className="section__description">Not sure yet?</h2>
        <h3 className="section__header">
          Millions of Bankists are already making their lifes simpler.
        </h3>
      </div>

      <div className="slider">
        <Carousel />
      </div>
    </section>
  );
};

// prettier-ignore
export default AppWrap(MotionWrap(Testimonials, 'app__testimonials'), 'testimonials', 'app__bg');
