import React from 'react';
import Image from 'next/image';

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Lazy, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { SLIDES } from '../../helpers/carousel';

const Carousel: React.FC = () => {
  return (
    <Swiper
      // install Swiper modules
      id="main"
      modules={[Navigation, Pagination, A11y, Lazy, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      lazy={{ loadPrevNext: true, loadPrevNextAmount: 3000 }}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true, dynamicBullets: true }}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => {}}
    >
      {SLIDES.map((item, index) => (
        <SwiperSlide key={`item--${index}`} zoom>
          <div className={`slide ${item.style}`}>
            <div className="testimonial">
              <h5 className="testimonial__header">{item.title}</h5>
              <blockquote className="testimonial__text">
                {item.testimonial}
              </blockquote>
              <address className="testimonial__author">
                <Image
                  src={item.image}
                  alt={item.alt}
                  className="testimonial__photo"
                />
                <div className="testimonial__info">
                  <h6 className="testimonial__name">{item.name}</h6>
                  <p className="testimonial__location">{item.location}</p>
                </div>
              </address>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
