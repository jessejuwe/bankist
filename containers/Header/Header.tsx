import React from 'react';
import Image from 'next/image';
import { ArrowDownOutlined } from '@ant-design/icons';

import { images } from '../../constants';
import AppWrap from '../../components/HOC/AppWrap';
import MotionWrap from '../../components/HOC/MotionWrap';

const Header: React.FC = () => {
  return (
    <div className="header__title">
      <div className="title--info">
        <h1 className="head-text">
          When<span className="highlight">banking</span>meets
          <span className="highlight">minimalist</span>
        </h1>
        <h4>A simpler banking experience for a simpler life.</h4>

        <div>
          <a href="#features" className="btn--text">
            Learn more
          </a>
          <ArrowDownOutlined />
        </div>
      </div>
      <Image src={images.hero} alt="Minimalist bank items" />
    </div>
  );
};

export default AppWrap(MotionWrap(Header, 'app__header'), 'header', 'app__bg');
