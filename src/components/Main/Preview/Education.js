import React from 'react';
import EducationRow from './EducationRow';
import uniqid from 'uniqid';

const Education = (props) => {
  const { education } = props;
  return (
    <div>
      <h3 className='text-lg font-semibold mb-2'>Education</h3>
      <div className='flex flex-col items-start gap-4'>
        {education.map((info) => {
          return (
            <EducationRow
              placeOfStudy={info.placeOfStudy}
              from={info.from}
              to={info.to}
              degree={info.degree}
              summary={info.summary}
              key={uniqid()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Education;
