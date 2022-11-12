import { StaticImageData } from 'next/image';

import card from '../assets/card.jpg';
import cardLazy from '../assets/card-lazy.jpg';
import digital from '../assets/digital.jpg';
import digitalLazy from '../assets/digital-lazy.jpg';
import grow from '../assets/grow.jpg';
import growLazy from '../assets/grow-lazy.jpg';
import hero from '../assets/hero.png';
import icon from '../assets/icon.png';
import img1 from '../assets/img-1.jpg';
import img2 from '../assets/img-2.jpg';
import img3 from '../assets/img-3.jpg';
import img4 from '../assets/img-4.jpg';
import logo from '../assets/logo.png';
import user1 from '../assets/user-1.jpg';
import user2 from '../assets/user-2.jpg';
import user3 from '../assets/user-3.jpg';

type Images = {
  card: StaticImageData | any;
  cardLazy: StaticImageData | any;
  digital: StaticImageData | any;
  digitalLazy: StaticImageData | any;
  grow: StaticImageData | any;
  growLazy: StaticImageData | any;
  hero: StaticImageData | any;
  icon: StaticImageData | any;
  img1: StaticImageData | any;
  img2: StaticImageData | any;
  img3: StaticImageData | any;
  img4: StaticImageData | any;
  logo: StaticImageData | any;
  user1: StaticImageData | any;
  user2: StaticImageData | any;
  user3: StaticImageData | any;
};

export const Images: Images = {
  card,
  cardLazy,
  digital,
  digitalLazy,
  grow,
  growLazy,
  hero,
  icon,
  img1,
  img2,
  img3,
  img4,
  logo,
  user1,
  user2,
  user3,
};
