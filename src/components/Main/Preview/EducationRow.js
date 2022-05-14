import React from 'react';

const EducationRow = (props) => {
  const { placeOfStudy, from, to, degree, summary } = props;
  return (
    <div className='text-sm font-semibold'>
      <div>
        <span>{placeOfStudy}</span> |{' '}
        <span className='italic text-blue-800'>
          {from} - {to}
        </span>
      </div>
      <div className='text-blue-600'>{degree}</div>
      <div className='text-sm text-gray-700 font-normal'>{summary}</div>
    </div>
  );
};

export default EducationRow;
