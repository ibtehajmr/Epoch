import React from 'react'
import brand_1 from '../assets/img/brand1.png';
import brand_2 from '../assets/img/brand2.png';
import brand_3 from '../assets/img/brand3.png';
import Marquee from 'react-fast-marquee';
const brandsData = [
  {
    id: 1,
    brand_logo: brand_1,
  },
  {
    id: 2,
    brand_logo: brand_2,
  },
  {
    id: 3,
    brand_logo: brand_3,
  },
];

const Brands = () => {
  return (
    <div className='brands-area ptb-100'>
      <div className='container'>
        <p>Our Partner By Logo</p>
        <div className='marquee-wrapper'>
          <Marquee
            autoFill
            pauseOnHover
            speed={40}
            gradient
            gradientColor='rgba(0, 6, 16, 1)'
          >
            <div className='row justify-content-between align-items-center'>
              {brandsData.map(({ id, brand_logo }) => {
                return (
                  <div key={id} className='col-lg-2 col-md-2 col-6'>
                    <div className='image'>
                      <img src={brand_logo} alt='image' />
                    </div>
                  </div>
                );
              })}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Brands