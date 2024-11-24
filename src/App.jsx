import React from 'react';
import Banner from './components/banner';
import Services from './components/services';
import About from './components/about';
import Brands from './components/brands';
import Testimonial from './components/testimonial';
import BlogsComponent from './components/blogsComponent';
import { ScrollRestoration } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Banner />
      <Services />
      <About direction='ltr' showButton />
      <Brands />
      <Testimonial />
      <BlogsComponent />
      <ScrollRestoration />
    </>
  );
};

export default Home;
