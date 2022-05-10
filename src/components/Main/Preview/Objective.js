import React, { Component } from 'react';

class Objective extends Component {
  render() {
    return (
      <div>
        <h3>Objective</h3>
        <p>{this.props.objective}</p>
      </div>
    );
  }
}

export default Objective;
