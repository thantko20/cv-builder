import React from 'react';
import Description from './Description';
import Education from './Education';
import Experience from './Experience';
import GeneralInfo from './GeneralInfo';

const EditMode = (props) => {
  const { generalInfo, description, education, experience } = props;
  return (
    <div className='p-5 bg-slate-50 w-[760px] flex-shrink-0 flex flex-col gap-8'>
      <GeneralInfo
        name={generalInfo.name}
        jobTitle={generalInfo.jobTitle}
        address={generalInfo.address}
        phone={generalInfo.phone}
        email={generalInfo.email}
        website={generalInfo.website}
        handleGeneralInfoChange={props.handleGeneralInfoChange}
      />
      <Description
        description={description}
        handleDescriptionChange={props.handleDescriptionChange}
      />
      <Education
        education={education}
        handleEducationChange={props.handleEducationChange}
        handleAdd={props.handleAddEdu}
        handleDel={props.handleDelEdu}
      />
      <Experience
        experience={experience}
        handleExpChange={props.handleExpChange}
        handleDelExp={props.handleDelExp}
        handleAddExp={props.handleAddExp}
      />
    </div>
  );
};

export default EditMode;
