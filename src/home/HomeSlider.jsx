import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useState, useLayoutEffect } from 'react';
import sliderData from '../data/sliderData';

import 'swiper/css';
import 'swiper/css/pagination';

function HomeSlider() {
  const [slidesPerViewAmount, setSlidesPerViewAmount] = useState(() => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1024;
    if (width >= 480) return 6;
    return 4;
  });

  const updateSlidesPerView = () => {
    const width = window.innerWidth;
    if (width >= 480) {
      setSlidesPerViewAmount(6);
    } else {
      setSlidesPerViewAmount(5);
    }
  };
  useLayoutEffect(() => {
    updateSlidesPerView();
    const resizeObserver = new ResizeObserver(() => {
      updateSlidesPerView();
    });
    resizeObserver.observe(document.body);
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const slides = sliderData.map((slideInfo, index) => {
    const { source, alt, url } = slideInfo;
    return (
      <SwiperSlide key={index}>
        <a href={url} rel="noreferrer" target="_blank" className='max-h-2vh'>
          <img
            className={`w-10 transition-transform duration-300 hover:scale-105`}
            src={source}
            alt={alt}
          />
        </a>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      slidesPerView={slidesPerViewAmount}
      speed={2000}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      spaceBetween={20}
      centeredSlides={false}
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true }}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 5
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 20
        }
      }}
      className="h-20 mx-auto mt-4"
    >
      {slides}
    </Swiper>
  );
}

export default HomeSlider;