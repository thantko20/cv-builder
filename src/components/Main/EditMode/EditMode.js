import React, { Component } from 'react';
import Description from './Description';
import Education from './Education';
import Experience from './Experience';
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
    this.handleEducation = this.handleEducation.bind(this);
    this.handleExperience = this.handleExperience.bind(this);
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

  handleEducation(data) {
    this.setState({ education: data }, () => {
      this.props.handleData(this.state);
    });
  }

  handleExperience(data) {
    this.setState({ experience: data }, () => {
      this.props.handleData(this.state);
    });
  }

  render() {
    // const { generalInfo, description, education, experience } = this.state;
    const { generalInfo, description, education, experience } = this.props;
    return (
      <div className='p-5 bg-slate-50 w-[760px] flex-shrink-0 flex flex-col gap-8'>
        <GeneralInfo
          name={generalInfo.name}
          jobTitle={generalInfo.jobTitle}
          address={generalInfo.address}
          phone={generalInfo.phone}
          email={generalInfo.email}
          website={generalInfo.website}
          handleGenInfo={this.handleGenInfo}
          handleGeneralInfoChange={this.props.handleGeneralInfoChange}
        />
        <Description description={description} handleDes={this.handleDes} />
        <Education
          education={education}
          handleEducation={this.handleEducation}
        />
        <Experience
          experience={experience}
          handleExperience={this.handleExperience}
        />
      </div>
    );
  }
}

export default EditMode;
