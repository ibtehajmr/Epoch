import React from 'react';

const Services = () => {
  return (
    <section className='fetuses-area ptb-100 section-bg'>
      <div className='container'>
        <div className='section-title-center'>
          <h2>Our Services</h2>
        </div>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='single-fetuses-box'>
              <div className='icon'>
                <i className='icon-consultation'></i>
              </div>
              <h3>Consultation</h3>
              <p>
                We start with an in-depth consultation to understand your
                business processes and ERP requirements.
              </p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='single-fetuses-box'>
              <div className='icon'>
                <i className='icon-development'></i>
              </div>
              <h3>Custom Development</h3>
              <p>
                We develop and customize Odoo and ERPNext solutions to fit your
                unique business needs, ensuring seamless integration with your
                existing systems.
              </p>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='single-fetuses-box'>
              <div className='icon'>
                <i className='icon-deployment'></i>
              </div>
              <h3>Deployment & Support</h3>
              <p>
                We provide end-to-end deployment Services and continuous support
                to ensure the smooth functioning of your ERP systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
