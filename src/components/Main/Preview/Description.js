import React from 'react';

const Description = (props) => {
  return (
    <div>
      <h3 className='text-lg font-semibold mb-2'>Description</h3>
      <p className='text-gray-700 text-sm'>{props.description}</p>
    </div>
  );
};

export default Description;
