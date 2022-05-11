import React, { Component } from 'react';
import GeneralInfo from './GeneralInfo';

class EditMode extends Component {
  constructor(props) {
    super(props);

    this.state = {
      generalInfo: props.generalInfo,
      description: props.description,
      education: props.education,
      experience: props.experience,
    };

    this.handleGenInfo = this.handleGenInfo.bind(this);
  }

  handleGenInfo(data) {
    this.setState({ generalInfo: data }, () =>
      this.props.handleData(this.state),
    );
  }

  render() {
    const { generalInfo, des, edu, ex } = this.state;
    return (
      <div className='p-5 bg-white w-[760px] flex-shrink-0'>
        <GeneralInfo
          name={generalInfo.name}
          jobTitle={generalInfo.jobTitle}
          address={generalInfo.address}
          phone={generalInfo.phone}
          email={generalInfo.email}
          website={generalInfo.website}
          handleGenInfo={this.handleGenInfo}
        />
      </div>
    );
  }
}

export default EditMode;
