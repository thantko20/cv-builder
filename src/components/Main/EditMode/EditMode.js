import React, { Component } from 'react';
import Description from './Description';
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
    this.handleDes = this.handleDes.bind(this);
  }

  handleGenInfo(data) {
    this.setState({ generalInfo: data }, () =>
      this.props.handleData(this.state),
    );
  }

  handleDes(data) {
    this.setState({ description: data }, () => {
      this.props.handleData(this.state);
    });
  }

  render() {
    const { generalInfo, description, education, experience } = this.state;
    return (
      <div className='p-5 bg-white w-[760px] flex-shrink-0 flex flex-col gap-10'>
        <GeneralInfo
          name={generalInfo.name}
          jobTitle={generalInfo.jobTitle}
          address={generalInfo.address}
          phone={generalInfo.phone}
          email={generalInfo.email}
          website={generalInfo.website}
          handleGenInfo={this.handleGenInfo}
        />
        <Description description={description} handleDes={this.handleDes} />
      </div>
    );
  }
}

export default EditMode;
