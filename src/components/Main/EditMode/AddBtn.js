import React, { Component } from 'react';

class AddBtn extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className='bg-blue-300 px-5 py-1 text-sm font-semibold text-blue-900 rounded hover:bg-blue-400 mt-2'
      >
        Add
      </button>
    );
  }
}

export default AddBtn;
