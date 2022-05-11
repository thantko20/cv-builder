import React, { Component } from 'react';

class TextBox extends Component {
  render() {
    return (
      <textarea
        placeholder={this.props.placeHolder}
        value={this.props.text}
        onChange={this.props.onChange}
        className='w-full outline-none border text-xs block focus:border-gray-500 rounded-sm'
      ></textarea>
    );
  }
}

export default TextBox;
