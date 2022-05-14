import React from 'react';
import AddBtn from './AddBtn';
import JobInfo from './JobInfo';

const Experience = (props) => {
  const {
    experience,
    handleExpChange: handleChange,
    handleDelExp: handleDel,
    handleAddExp: handleAdd,
  } = props;
  return (
    <div>
      <h3 className='font-semibold mb-1'>Experience</h3>
      <div className='flex flex-col gap-4'>
        {experience.map((item) => (
          <JobInfo
            from={item.from}
            to={item.to}
            jobTitle={item.jobTitle}
            company={item.company}
            summary={item.summary}
            id={item.id}
            handleChange={handleChange}
            handleDel={handleDel}
            key={item.id}
          />
        ))}
      </div>
      <AddBtn onClick={handleAdd} />
    </div>
  );
};

export default Experience;
