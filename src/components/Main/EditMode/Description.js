import React, { Component } from 'react';
import TextBox from './TextBox';

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = { description: props.description };
    this.handleDesChange = this.handleDesChange.bind(this);
  }

  handleDesChange(e) {
    this.setState({ description: e.target.value }, () =>
      this.props.handleDes(this.state.description),
    );
  }

  render() {
    return (
      <div>
        <h3 className='font-semibold mb-1'>Description</h3>
        <TextBox
          placeHolder='Tell a bit about yourself'
          text={this.state.description}
          onChange={this.handleDesChange}
        />
      </div>
    );
  }
}

export default Description;
