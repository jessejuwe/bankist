import React from 'react';

import { Section } from '../../exports/exports';
import { homeObjOne, homeObjTwo, homeObjThree } from '../../helpers/data';
import AppWrap from '../../components/HOC/AppWrap';
import MotionWrap from '../../components/HOC/MotionWrap';

const Features: React.FC = () => {
  return (
    <section className="section">
      <div className="section__title">
        <h2 className="section__description">Features</h2>
        <h3 className="section__header">
          Everything you need in a modern bank and more.
        </h3>
      </div>

      <div className="features">
        <Section {...homeObjOne} />
        <Section {...homeObjTwo} />
        <Section {...homeObjThree} />
      </div>
    </section>
  );
};

// prettier-ignore
export default AppWrap(MotionWrap(Features, 'app__features'), 'features', 'app__bg');
