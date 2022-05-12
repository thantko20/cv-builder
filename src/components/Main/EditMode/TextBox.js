import React, { Component } from 'react';

class TextBox extends Component {
  render() {
    return (
      <textarea
        name={this.props.name}
        placeholder={this.props.placeHolder}
        value={this.props.text}
        onChange={this.props.onChange}
        className='w-full outline-none border text-xs block focus:border-gray-500 rounded-sm min-h-[4em]'
      ></textarea>
    );
  }
}

export default TextBox;
