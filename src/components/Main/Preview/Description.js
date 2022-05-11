import React, { Component } from 'react';

class Description extends Component {
  render() {
    return (
      <div>
        <h3 className='text-lg font-semibold mb-2'>Description</h3>
        <p className='text-gray-700 text-sm'>{this.props.objective}</p>
      </div>
    );
  }
}

export default Description;
