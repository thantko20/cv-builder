import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';
import Objective from './Objective';

class Preview extends Component {
  render() {
    const { generalInfo, objective, education, experience } = this.props;

    return (
      <div className='flex flex-col gap-10 bg-white w-[700px] py-12 px-10'>
        <GeneralInfo
          name={generalInfo.name}
          address={generalInfo.address}
          phone={generalInfo.phone}
          email={generalInfo.email}
          website={generalInfo.website}
        />
        <Objective objective={objective} />
      </div>
    );
  }
}

export default Preview;
