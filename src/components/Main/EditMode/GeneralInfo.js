import React, { Component } from 'react';
import Input from './Input';

class GeneralInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      jobTitle: props.jobTitle,
      address: props.address,
      phone: props.phone,
      email: props.email,
      website: props.website,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleJobChange = this.handleJobChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value }, () =>
      this.props.handleGenInfo(this.state),
    );
  }

  handleJobChange(e) {
    this.setState({ jobTitle: e.target.value }, () =>
      this.props.handleGenInfo(this.state),
    );
  }

  handleAddressChange(e) {
    this.setState({ address: e.target.value }, () =>
      this.props.handleGenInfo(this.state),
    );
  }

  handlePhoneChange(e) {
    this.setState({ phone: e.target.value }, () => {
      this.props.handleGenInfo(this.state);
    });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value }, () =>
      this.props.handleGenInfo(this.state),
    );
  }

  handleWebsiteChange(e) {
    this.setState({ website: e.target.value }, () =>
      this.props.handleGenInfo(this.state),
    );
  }

  render() {
    return (
      <div>
        <h3 className='mb-1 font-semibold'>General Info</h3>
        <form className='flex flex-col justify-start  gap-1'>
          <Input
            placeHolder='Name'
            value={this.state.name}
            type='text'
            onChange={this.handleNameChange}
          />
          <Input
            placeHolder='Job Title'
            type='text'
            value={this.state.jobTitle}
            onChange={this.handleJobChange}
          />
          <Input
            placeHolder='Address'
            type='text'
            value={this.state.address}
            onChange={this.handleAddressChange}
          />
          <Input
            placeHolder='Phone'
            type='tel'
            value={this.state.phone}
            onChange={this.handlePhoneChange}
          />
          <Input
            placeHolder='Email'
            type='email'
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
          <Input
            placeHolder='Website'
            type='text'
            value={this.state.website}
            onChange={this.handleWebsiteChange}
          />
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
