import React from 'react';
import Input from './Input';
import DelBtn from './DelBtn';
import TextBox from './TextBox';

const StudyInfo = (props) => {
  const {
    placeOfStudy,
    from,
    to,
    degree,
    summary,
    id,
    handleDel,
    handleEducationChange: handleChange,
  } = props;
  return (
    <div className='flex flex-col gap-2 shadow-md p-2'>
      <Input
        name='placeOfStudy'
        placeHolder='Place of Study'
        type='text'
        value={placeOfStudy}
        onChange={(e) => handleChange(e, id)}
      />
      <div className='flex gap-4'>
        <Input
          name='from'
          placeHolder='From...'
          type='text'
          value={from}
          onChange={(e) => handleChange(e, id)}
        />
        <Input
          name='to'
          placeHolder='To...'
          type='text'
          value={to}
          onChange={(e) => handleChange(e, id)}
        />
      </div>
      <Input
        name='degree'
        placeHolder='Degree'
        type='text'
        value={degree}
        onChange={(e) => handleChange(e, id)}
      />
      <TextBox
        name='summary'
        placeHolder='Summary'
        text={summary}
        onChange={(e) => handleChange(e, id)}
      />
      <DelBtn onClick={() => handleDel(id)} />
    </div>
  );
};

export default StudyInfo;
