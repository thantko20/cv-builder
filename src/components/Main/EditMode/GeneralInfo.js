import React, { Component } from 'react';
import Input from './Input';

class GeneralInfo extends Component {
  render() {
    const {
      name,
      jobTitle,
      address,
      phone,
      email,
      website,
      handleGeneralInfoChange: handleChange,
    } = this.props;

    return (
      <div>
        <h3 className='mb-1 font-semibold'>General Info</h3>
        <form className='flex flex-col justify-start  gap-1'>
          <Input
            name='name'
            placeHolder='Name'
            value={name}
            type='text'
            onChange={(e) => handleChange(e)}
          />
          <Input
            name='jobTitle'
            placeHolder='Job Title'
            type='text'
            value={jobTitle}
            onChange={(e) => handleChange(e)}
          />
          <Input
            name='address'
            placeHolder='Address'
            type='text'
            value={address}
            onChange={(e) => handleChange(e)}
          />
          <Input
            name='phone'
            placeHolder='Phone'
            type='tel'
            value={phone}
            onChange={(e) => handleChange(e)}
          />
          <Input
            name='email'
            placeHolder='Email'
            type='email'
            value={email}
            onChange={(e) => handleChange(e)}
          />
          <Input
            name='website'
            placeHolder='Website'
            type='text'
            value={website}
            onChange={(e) => handleChange(e)}
          />
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
