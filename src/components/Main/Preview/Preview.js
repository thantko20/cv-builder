import React from 'react';
import Education from './Education';
import Experience from './Experience';
import GeneralInfo from './GeneralInfo';
import Description from './Description';

const Preview = (props) => {
  const { generalInfo, description, education, experience } = props;

  return (
    <div className='flex flex-col gap-10 bg-slate-50 w-[760px] py-12 px-10 flex-shrink-0'>
      <GeneralInfo
        name={generalInfo.name}
        jobTitle={generalInfo.jobTitle}
        address={generalInfo.address}
        phone={generalInfo.phone}
        email={generalInfo.email}
        website={generalInfo.website}
      />
      <Description description={description} />
      <Education education={education} />
      <Experience experience={experience} />
    </div>
  );
};

export default Preview;
