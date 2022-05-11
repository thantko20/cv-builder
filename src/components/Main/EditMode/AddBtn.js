import React, { Component } from 'react';

class AddBtn extends Component {
  render() {
    return <button onClick={this.props.onClick}>Add</button>;
  }
}

export default AddBtn;
