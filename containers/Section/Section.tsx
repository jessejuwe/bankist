import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  lightBg: Boolean;
  lightText: Boolean;
  lightTextDesc: Boolean;
  icon: any;
  headline: string;
  description: string;
  img: any;
  imgSrc: any;
  alt: string;
  imgStart: string;
};

const Section: React.FC<Props> = props => {
  useEffect(() => {
    const imgTargets = document.querySelectorAll('img[data-src]');

    // Lazy Loading Images
    const loadImg = (entries: any, observer: any) => {
      const [entry] = entries;

      // Guard Clause
      if (!entry.isIntersecting) return;

      // Replace src attribute with data-src attribute
      entry.target.src = entry.target.dataset.src;

      // Remove the blurry filter class
      entry.target.addEventListener('load', () =>
        entry.target.classList.remove('lazy-img')
      );

      observer.unobserve(entry.target);
    };

    const imgObserver = new IntersectionObserver(loadImg, {
      root: null,
      threshold: 0,
      rootMargin: '200px',
    });

    imgTargets.forEach(img => imgObserver.observe(img));

    return () => {};
  }, []);

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.85, ease: 'easeInOut' }}
      className={props.lightBg ? 'home__section' : 'home__section darkBg'}
    >
      <div className="containers">
        <div
          className={`row home__section-row flex ${
            props.imgStart === 'start' ? 'flex-row-reverse' : 'flex-row'
          }`}
        >
          <div className="col">
            <div className="text-wrapper">
              <div className="icon app__flex">
                <props.icon />
              </div>
              <h3 className={props.lightText ? 'heading' : 'heading dark'}>
                {props.headline}
              </h3>
              <p className={props.lightTextDesc ? 'subtitle' : 'subtitle dark'}>
                {props.description}
              </p>
            </div>
          </div>

          <div className="col">
            <div className="img-wrapper">
              <Image
                src={props.img}
                data-src={props.imgSrc}
                alt={props.alt}
                className="img lazy-img"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Section;
