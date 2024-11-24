import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules"
import 'swiper/css';

import user_1 from '../assets/img/user-1.jpg'
import user_2 from '../assets/img/user-2.jpg'
import user_3 from '../assets/img/user-3.jpg'
import user_4 from '../assets/img/user-4.jpg'
import TestimonialCard from './common/testimonialCard';
import TeamComponent from './teamComponent';

const testimonialData = [
  {
    id: 1,
    name: 'Aloin Lden',
    position: 'Web Developer',
    img: user_1,
    rating: 5,
    review:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
    socal_link: [
      {
        id: 1,
        link: '#',
        icon: 'ri-facebook-fill',
      },
      {
        id: 2,
        link: '#',
        icon: 'ri-instagram-line',
      },
      {
        id: 3,
        link: '#',
        icon: 'ri-linkedin-fill',
      },
    ],
  },
  {
    id: 2,
    name: 'Jacob Daniels',
    position: 'Engineer',
    img: user_3,
    rating: 5,
    review:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
    socal_link: [
      {
        id: 1,
        link: '#',
        icon: 'ri-facebook-fill',
      },
      {
        id: 2,
        link: '#',
        icon: 'ri-instagram-line',
      },
      {
        id: 3,
        link: '#',
        icon: 'ri-linkedin-fill',
      },
    ],
  },
  {
    id: 3,
    name: 'Aloin Lden',
    position: 'Web Developer',
    img: user_4,
    rating: 5,
    review:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
    socal_link: [
      {
        id: 1,
        link: '#',
        icon: 'ri-facebook-fill',
      },
      {
        id: 2,
        link: '#',
        icon: 'ri-instagram-line',
      },
      {
        id: 3,
        link: '#',
        icon: 'ri-linkedin-fill',
      },
    ],
  },
  {
    id: 4,
    name: 'Jacob Daniels',
    position: 'Engineer',
    img: user_2,
    rating: 5,
    review:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using',
    socal_link: [
      {
        id: 1,
        link: '#',
        icon: 'ri-facebook-fill',
      },
      {
        id: 2,
        link: '#',
        icon: 'ri-instagram-line',
      },
      {
        id: 3,
        link: '#',
        icon: 'ri-linkedin-fill',
      },
    ],
  },
];

const Testimonial = () => {
  const swiperRef = useRef();

  return (
    <div className='ptb-100'>
      <div className='container'>
        <TeamComponent parentClass={'pt-0 pb-100'} data={testimonialData} />
        <div className='testimonial-area ptb-100'>
          <div>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              className='image-courser'
              modules={[Navigation]}
            >
              {testimonialData.map(
                ({ id, img, position, rating, review, name }) => {
                  return (
                    <SwiperSlide key={id}>
                      <TestimonialCard
                        img={img}
                        position={position}
                        name={name}
                        rating={rating}
                        review={review}
                      />
                    </SwiperSlide>
                  );
                },
              )}
            </Swiper>

            {testimonialData.map(({ id, img }) => {
              return (
                <div key={id} className='user'>
                  <img src={img} alt='image' />
                </div>
              );
            })}
          </div>
        </div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
      </div>
    </div>
  );
};

export default Testimonial