import React from 'react';
import BlogCard from './common/blogCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { blogData } from '../utlits/blogData';
import { Link } from 'react-router-dom';

const BlogsComponent = () => {
  const pagination = {
    el: '.containerForBullets',
    type: 'bullets',
    bulletClass: 'swiper-custom-bullet',
    bulletActiveClass: 'swiper-custom-bullet-active',
    clickable: true,
  };
  return (
    <div className='article-area ptb-100'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='section-title'>
              <div className='width'>
                <div className='banner-area no-background pt-0'>
                  <span className='banner-top-title'>Our Latest News</span>
                </div>
                <h2>Latest News & Articles</h2>
                <Link className='btn btn-primary' to='/blog'>
                  <span class='btn-text'>See More</span>
                </Link>
              </div>
            </div>
          </div>
          <div className='col-lg-8'>
            <div className='article-content'>
              <Swiper
                spaceBetween={30}
                // slidesPerView={2}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  576: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 1,
                  },
                  1200: {
                    slidesPerView: 2,
                  },
                }}
                pagination={pagination}
                loop
                className=''
                modules={[Pagination]}
              >
                {blogData
                  .slice(0, 4)
                  .map(({ id, date, link, title, thumb, commentCount }) => {
                    return (
                      <SwiperSlide key={id}>
                        <BlogCard
                          date={date}
                          link={link}
                          title={title}
                          thumb={thumb}
                          commentCount={commentCount}
                        />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
              <div className='containerForBullets'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsComponent;
