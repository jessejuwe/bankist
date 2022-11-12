import React from 'react';
import { NAV_DOTS } from '../../helpers/helpers';

type Props = { active: string };

const NavigationDots: React.FC<Props> = props => {
  return (
    <div className="app__navigation">
      {NAV_DOTS.map((item, index) => (
        <a
          href={`#${item.title}`}
          key={`item-${index}`}
          className="app__navigation-dot"
          style={
            props.active === item.title ? { backgroundColor: '#4bbb7d' } : {}
          }
        />
      ))}
    </div>
  );
};

export default NavigationDots;
