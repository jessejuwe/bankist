import React from 'react';
import Image from 'next/image';

import { FOOTERS } from '../../helpers/helpers';
import { images } from '../../constants';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        {FOOTERS.map((item, index) => (
          <li key={`${item.title}-${index}`} className="footer__item">
            <a className="footer__link" href="#">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <Image src={images.icon} alt="Logo" className="footer__logo" />
      <p className="footer__copyright">
        &copy; Copyright by{' '}
        <a className="footer__link" href="#">
          Bankist Group
        </a>
      </p>
    </footer>
  );
};

export default Footer;
