import React from 'react';

import { OP_CONTENT, BUTTONS } from '../../helpers/operations';
import AppWrap from '../../components/HOC/AppWrap';
import MotionWrap from '../../components/HOC/MotionWrap';

const Operations: React.FC = () => {
  // Tabbed component
  const activateHandler = (e: any) => {
    e.preventDefault();

    const tabs = document.querySelectorAll('.operations__tab');
    const tabsContent = document.querySelectorAll('.operations__content');

    const clicked = e.target.closest('.operations__tab');

    const opContent = document.querySelector(
      `.operations__content--${clicked.dataset.tab}`
    );

    // Guard clause
    if (!clicked) return;

    // Active tab
    tabs.forEach(t => t.classList.remove('operations__tab--active'));
    clicked.classList.add('operations__tab--active');

    // Active Content Area
    tabsContent.forEach(t => t.classList.remove('operations__content--active'));
    opContent && opContent.classList.add('operations__content--active');
  };

  return (
    <section className="section">
      <div className="section__title">
        <h2 className="section__description">Operations</h2>
        <h3 className="section__header">
          Everything as simple as possible, but no simpler.
        </h3>
      </div>

      <div className="operations">
        <div className="operations__tab-container" onClick={activateHandler}>
          {BUTTONS.map((item, index) => (
            <button
              key={item.style}
              data-tab={`${index + 1}`}
              className={`app__btn operations__tab ${item.style}`}
            >
              <span>0{index + 1}</span>
              {item.title}
            </button>
          ))}
        </div>
        {OP_CONTENT.map(item => (
          <div
            key={item.style1}
            className={`operations__content ${item.style1}`}
          >
            <div className={`operations__icon ${item.style2}`}>
              <item.icon />
            </div>
            <h5 className="operations__header">{item.title}</h5>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// prettier-ignore
export default AppWrap(MotionWrap(Operations, 'app__operations'), 'operations', 'app__bg');
