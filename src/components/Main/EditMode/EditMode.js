import React, { Component } from 'react';
import Description from './Description';
import Education from './Education';
import Experience from './Experience';
import GeneralInfo from './GeneralInfo';

class EditMode extends Component {
  render() {
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
          handleGeneralInfoChange={this.props.handleGeneralInfoChange}
        />
        <Description
          description={description}
          handleDescriptionChange={this.props.handleDescriptionChange}
        />
        <Education
          education={education}
          handleEducationChange={this.props.handleEducationChange}
          handleAdd={this.props.handleAddEdu}
          handleDel={this.props.handleDelEdu}
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
