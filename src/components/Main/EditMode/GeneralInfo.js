import React, { Component } from 'react';
import Input from './Input';

class GeneralInfo extends Component {
  render() {
    return (
      <div>
        <h3>General Info</h3>
        <form className='flex flex-col border border-slate-500 justify-start p-2'>
          <Input placeHolder='Name' value='' onChange={() => null} />
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
