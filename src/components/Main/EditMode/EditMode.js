import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';

class EditMode extends Component {
  render() {
    return (
      <div className='p-5 bg-white w-[760px] flex-shrink-0'>
        <GeneralInfo />
      </div>
    );
  }
}

export default EditMode;
