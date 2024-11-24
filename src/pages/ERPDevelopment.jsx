import React from 'react';
import PageHeader from '../components/common/pageHeader';
import { strings } from '../locales';
import WhyUs from '../components/whyUs';
import Services from '../components/services';

const ERPDevelopment = () => {
  const { subRoute } = strings.AISoftware;
  return (
    <>
      <PageHeader subRoute={subRoute} />

      <div>
        {/* Hero Section */}
        <section className='banner-area'>
          <div className='container-fluid'>
            <div className='content'>
              <span className='banner-top-title'>Expert ERP Development</span>
              <h1>Streamline Your Business with Odoo and ERPNext</h1>
              <p>
                Maximize efficiency and productivity with our tailored ERP
                solutions using Odoo, ERPNext, Zoho, and Microsoft Dynamics.
              </p>
              <a href='#contact' className='default-btn'>
                Get a Free Consultation <i className='icon-arrow-right'></i>
              </a>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className='about-area ptb-100'>
          <div className='container'>
            <div className='content'>
              <div className='tp-title'>What We Offer</div>
              <h2>Comprehensive ERP Development Services</h2>
              <p>
                Our ERP development services are designed to enhance your
                business processes through customized solutions. We specialize
                in Odoo and ERPNext to deliver robust and scalable systems that
                align with your business needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Offered */}
        <Services />

        {/* Case Studies */}
        <section className='about-area ptb-100'>
          <div className='container'>
            <div className='section-title'>
              <h2>Case Studies</h2>
            </div>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='content'>
                  <h3>Project Alpha</h3>
                  <p>
                    Implemented a comprehensive ERP system for a manufacturing
                    firm, resulting in a 25% increase in operational efficiency.
                  </p>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='content'>
                  <h3>Project Beta</h3>
                  <p>
                    Customized Odoo modules for a retail business, enhancing
                    inventory management and reducing stock discrepancies by
                    40%.
                  </p>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='content'>
                  <h3>Project Gamma</h3>
                  <p>
                    Developed a tailored ERPNext solution for a service company,
                    improving project management and client satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className='pricing-area ptb-100'>
          <div className='container'>
            <div className='section-title-center'>
              <h2>Technologies and Tools</h2>
            </div>
            <div className='row'>
              <div className='col-lg-3'>
                <div className='card'>
                  <div className='card_title'>Odoo</div>
                  <p>
                    A comprehensive suite of business applications designed to
                    streamline operations and boost productivity.
                  </p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='card'>
                  <div className='card_title'>ERPNext</div>
                  <p>
                    An open-source ERP system that offers flexibility and
                    customization for diverse business needs.
                  </p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='card'>
                  <div className='card_title'>Python</div>
                  <p>
                    Used extensively for developing custom modules and
                    integrations for Odoo and ERPNext.
                  </p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='card'>
                  <div className='card_title'>JavaScript</div>
                  <p>
                    Enabling dynamic and interactive features in our ERP
                    solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyUs />
        {/* Contact Us */}
        <section className='contact-area ptb-100'>
          <div className='container'>
            <div className='section-title-center'>
              <h2>Contact Us</h2>
            </div>
            <div className='contact-form'>
              <form id='contactForm'>
                <div className='row'>
                  <div className='col-lg-6 col-md-6'>
                    <div className='form-group'>
                      <input
                        type='text'
                        name='name'
                        className='form-control'
                        required
                        placeholder='Your Name'
                      />
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <div className='form-group'>
                      <input
                        type='email'
                        name='email'
                        className='form-control'
                        required
                        placeholder='Your Email'
                      />
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-12'>
                    <div className='form-group'>
                      <textarea
                        name='message'
                        className='form-control'
                        required
                        placeholder='Your Message'
                      ></textarea>
                    </div>
                  </div>
                  <div className='col-lg-12 col-md-12 text-center'>
                    <button type='submit' className='default-btn'>
                      Send Message <i className='icon-arrow-right'></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ERPDevelopment;
