import React, { Component } from 'react';
import TextBox from './TextBox';

class Description extends Component {
  render() {
    const { description, handleDescriptionChange: handleChange } = this.props;
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
  }
}

export default Description;
