import React, { useEffect } from 'react'
import Banner from './components/banner'
import Services from './components/services';
import About from './components/about';
import Brands from './components/brands';
import TeamComponent from './components/teamComponent';
import Gallery from './components/gallery';
import Testimonial from './components/testimonial';
import PricingComponent from './components/pricingComponent';
import BlogsComponent from './components/blogsComponent';
import InstagramGallery from './components/instagramGallery';
import { ScrollRestoration } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <About direction='ltr' showButton />
      <Brands />
      <TeamComponent />
      <Testimonial />
      <BlogsComponent />
      <ScrollRestoration />
    </>
  );
};

export default Home