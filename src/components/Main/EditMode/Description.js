import React, { Component } from 'react';

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
        <textarea
          placeholder='Tell a bit about yourself'
          value={this.state.description}
          onChange={this.handleDesChange}
          className='w-full outline-none border text-xs block focus:border-gray-500 rounded-sm'
        ></textarea>
      </div>
    );
  }
}

export default Description;
