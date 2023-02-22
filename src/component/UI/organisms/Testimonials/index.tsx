import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import { TestimonialCard } from '@/component/UI/molecules';
import { TestimonialCardTypes } from '@/types';

import 'swiper/css';
import 'swiper/css/pagination';
import '@/styles/swipper.css';

const Testimonials: React.FC<{ data: TestimonialCardTypes[] }> = ({ data }) => {
  return (
    <>
      <Swiper
        initialSlide={1}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        speed={1000}
      >
        {data.map((testimoni, index) => (
          <SwiperSlide key={index} className="mt-10">
            <TestimonialCard
              image={testimoni.image}
              name={testimoni.name}
              company={testimoni.company}
              description={testimoni.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonials;
