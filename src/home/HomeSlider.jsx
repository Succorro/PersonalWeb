import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import sliderData from '../data/sliderData';

import 'swiper/css';
import 'swiper/css/pagination';

function HomeSlider() {
  const slides = sliderData.map((slideInfo, index) => {
    const { source, style, alt, url } = slideInfo;
    return (
      <SwiperSlide key={index}>
        <a href={url} rel="noreferrer" target="_blank" className='max-h-2vh'>
          <img
            className={`${style} transition-transform duration-300 hover:scale-105`}
            src={source}
            alt={alt}
          />
        </a>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      slidesPerView={4}
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
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 5
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 4,
          spaceBetween: 20
        },
        // when window width is >= 1024px
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