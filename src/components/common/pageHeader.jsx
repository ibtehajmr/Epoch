import React from 'react';

const PageHeader = ({ title, desc, subRoute = '' }) => {
  return (
    <div className='container section-banner d-flex flex-column justify-content-center align-items-center text-center'>
      {!!subRoute ? (
        <div class='banner-area' style={{ backgroundImage: 'none' }}>
          <span class='banner-top-title'>{subRoute}</span>
        </div>
      ) : null}
      <h1 className='grd-color-1'>{title}</h1>
      <p>{desc}</p>
      {/* // Add button and image */}
    </div>
  );
};

export default PageHeader;
