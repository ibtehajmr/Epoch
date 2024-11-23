import React from 'react'
import PageHeader from '../components/common/pageHeader'
import About from '../components/about'
import Testimonial from '../components/testimonial'
import Brands from '../components/brands'
import InstagramGallery from '../components/instagramGallery'
import { ScrollRestoration } from 'react-router-dom'
import { strings } from '../locales';
import AboutCard from '../assets/img/aboutCard.png';

const AboutUs = () => {
  const {
    title,
    desc,
    imageCard: { heading, desc: cardDesc, subHeading },
  } = strings.aboutUs;
  return (
    <>
      <PageHeader title={title} desc={desc} />
      <About
        heading={heading}
        subHeading={subHeading}
        description={cardDesc}
        image={AboutCard}
        direction='ltr'
        showButton
      />
      <Testimonial />
      <Brands />
      <InstagramGallery />
      <ScrollRestoration />
    </>
  );
};

export default AboutUs