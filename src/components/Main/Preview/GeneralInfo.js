import React, { Component } from 'react';

class GeneralInfo extends Component {
  render() {
    const { name, address, phone, email, website } = this.props;
    return (
      <div>
        <h2>{name}</h2>
        <div>
          <div>{address}</div>
          <div>{phone}</div>
          <div>{email}</div>
          <div>{website}</div>
        </div>
      </div>
    );
  }
}

export default GeneralInfo;
