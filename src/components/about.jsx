import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = ({
  heading,
  subHeading,
  description,
  image,
  direction = 'rtl',
  showButton = false,
}) => {
  const contentStyle = {
    textAlign: direction === 'rtl' ? 'right' : 'left',
  };

  const flexDirectionStyle = {
    flexDirection: direction === 'rtl' ? 'row-reverse' : 'row',
  };

  return (
    <div className='about-area ptb-100 section-bg'>
      <div className='container'>
        <motion.div
          className='row align-items-center'
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
          style={flexDirectionStyle}
        >
          <div className='col-lg-6'>
            <div className='image'>
              <img src={image} alt='Page Heading' />
            </div>
          </div>
          <div className='col-lg-6'>
            <div
              className={`content ${showButton ? '' : 'vh-100 d-flex flex-column justify-content-around'}`}
            >
              <div>
                <div className='banner-area no-background'>
                  <span className='banner-top-title'>{subHeading}</span>
                </div>

                <h2 style={contentStyle}>{heading}</h2>
              </div>
              <p style={contentStyle}>{description}</p>
              {showButton ? (
                <Link className='btn btn-primary pt-3 pb-3' to='/about'>
                  Learn More
                </Link>
              ) : null}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
