import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { strings } from '../../locales';
import Button from '../../components/common/button';

const QuerySection = () => {
  const {
    getStarted,
    footer: { querySection },
  } = strings;

  return (
    <div className='container d-flex align-items-center justify-content-between text-light ptb-100'>
      <div className='container d-flex row' style={{ width: '40%' }}>
        <div className='text-start'>
          <h6 style={{ fontSize: '52px', fontWeight: 500 }}>
            {querySection.title}
          </h6>
          <p style={{ fontSize: '20px', color: '#ccc' }}>{querySection.desc}</p>
        </div>
        <div className='d-flex flex-column align-items-start mt-5'>
          <div className='d-flex gap-4'>
            <input
              type='email'
              className='form-control'
              placeholder='Enter Your Email'
              aria-label='Email'
              style={{
                borderRadius: '57px',
                border: '1px solid #fff',
                color: '#fff',
                padding: '5px 20px',
              }}
            />
            <button className='btn btn-primary'>{getStarted}</button>
          </div>
        </div>
      </div>
      <h1 style={{ fontSize: '96px', fontWeight: 700 }}>
        <span className='grd-color-1'>EPOCH</span> AI
      </h1>
    </div>
  );
};

export default QuerySection;
