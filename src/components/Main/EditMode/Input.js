import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { placeHolder, value, onChange } = this.props;

    return (
      <input placeholder={placeHolder} value={value} onChange={onChange} />
    );
  }
}

export default Input;
