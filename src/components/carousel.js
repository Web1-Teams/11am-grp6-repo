import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import './Carousel.css';
import Card from './Card';

const Carousel = ({ places, updatePlaceState }) => {
  return (
    <div className="globalStyle">
      <div className="container swiper">
        <div className="slider-wrapper">
          <div className="card-list swiper-wrapper">
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              spaceBetween={-10}
              slidesPerView={3}
              slidesPerGroup={1} // Move one card at a time
              loop={false}
              grabCursor={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
             
            >
              {places.map((place) => (
                <SwiperSlide key={place.id}>
                  <Card  {...place} updatePlaceState={updatePlaceState} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Carousel;
