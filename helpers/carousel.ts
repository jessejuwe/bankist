import { images } from '../constants';

interface Carousel {
  style: string;
  title: string;
  testimonial: string;
  image: any;
  alt: string;
  name: string;
  location: string;
  active: boolean;
}

export const SLIDES: Carousel[] = [
  {
    style: 'slide--1',
    title: 'Best financial decision ever!',
    testimonial:
      'This really was the best financial decision i ever made! Really great work guys.',
    image: images.user1,
    alt: 'user 1',
    name: 'Aarav Lynn',
    location: 'San Francisco, USA',
    active: true,
  },

  {
    style: 'slide--2',
    title: 'The last step to becoming a complete minimalist',
    testimonial:
      'Really looking forward to being a complete minimalist. Good things ahead.',
    image: images.user2,
    alt: 'user 2',
    name: 'Miyah Miles',
    location: 'London, UK',
    active: false,
  },

  {
    style: 'slide--3',
    title: 'Finally free from old-school banks',
    testimonial:
      "Thank God i don't have to deal with the tradional banking system anymore. Thank you Bankist!",
    image: images.user3,
    alt: 'user 3',
    name: 'Francisco Gomes',
    location: 'Lisbon, Portugal',
    active: false,
  },
];
