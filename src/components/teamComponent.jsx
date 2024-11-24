import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import TeamCard from './common/teamCard';

const TeamComponent = ({ parentClass, data }) => {
  const swiperRef = useRef();
  return (
    <div className={`team-area pt-100 ${parentClass}`}>
      <div className='container'>
        <motion.div
          className='position-relative'
          initial={{
            opacity: 0,
            y: 200,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <Swiper
            spaceBetween={30}
            // slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop
            className='image-courser'
          >
            {data.map(({ id, img, name, position, social_link }) => {
              return (
                <SwiperSlide key={id}>
                  <TeamCard
                    img={img}
                    name={name}
                    position={position}
                    social_link={social_link}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className='d-flex align-items-center justify-content-between navigation mt-3'>
            <div onClick={() => swiperRef.current?.slidePrev()}>
              <i className='ri-arrow-left-line' />
            </div>
            <div onClick={() => swiperRef.current?.slideNext()}>
              <i className='ri-arrow-right-line' />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TeamComponent;
