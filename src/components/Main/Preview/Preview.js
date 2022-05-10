import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';

class Preview extends Component {
  render() {
    const { generalInfo, objective, education, experience } = this.props;

    return (
      <div>
        <GeneralInfo
          name={generalInfo.name}
          address={generalInfo.address}
          phone={generalInfo.phone}
          email={generalInfo.email}
          website={generalInfo.website}
        />
      </div>
    );
  }
}

export default Preview;
