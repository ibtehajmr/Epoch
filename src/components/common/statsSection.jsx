import React from 'react';

const StatsSection = () => {
  const stats = [
    { value: '1.5M', description: 'New visitors every month.' },
    { value: '49%', description: 'Extra conversion on any niche.' },
    { value: '$2M', description: 'Extra saved by customers.' },
    { value: '93%', description: 'Success rate on last 05 years.' },
  ];

  return (
    <div className='stats-area ptb-100'>
      <div className='container py-5'>
        <div className='row text-center'>
          {stats.map((stat, index) => (
            <div key={index} className='col-lg-3 col-md-6 mb-4'>
              <h6 className='grd-color-1 stat-value'>{stat.value}</h6>
              <p className='stat-description'>{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
