import React from 'react';
import TextBox from './TextBox';

const Description = (props) => {
  const { description, handleDescriptionChange: handleChange } = props;
  return (
    <div>
      <h3 className='font-semibold mb-1'>Description</h3>
      <TextBox
        name='description'
        placeHolder='Tell a bit about yourself'
        text={description}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
};

export default Description;
