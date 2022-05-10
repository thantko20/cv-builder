import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';

class Preview extends Component {
  render() {
    const { generalInfo, objective, education, experience } = this.props;

    return (
      <div className='flex flex-col gap-6 bg-white w-[600px] py-12 px-10'>
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
