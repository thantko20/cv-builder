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
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value }, () =>
      this.props.handleGenInfo(this.state),
    );
  }

  render() {
    return (
      <div>
        <h3>General Info</h3>
        <form className='flex flex-col border border-slate-500 justify-start p-2'>
          <Input
            placeHolder='Name'
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </form>
      </div>
    );
  }
}

export default GeneralInfo;
