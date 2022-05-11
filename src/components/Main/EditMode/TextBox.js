import React, { Component } from 'react';

class TextBox extends Component {
  render() {
    return (
      <textarea
        placeholder={this.props.placeHolder}
        value={this.props.text}
        onChange={this.props.onChange}
      ></textarea>
    );
  }
}

export default TextBox;
