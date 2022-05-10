import React, { Component } from 'react';

class Objective extends Component {
  render() {
    return (
      <div>
        <h3 className='text-lg font-semibold mb-2'>Objective</h3>
        <p className='text-gray-700 text-sm'>{this.props.objective}</p>
      </div>
    );
  }
}

export default Objective;
