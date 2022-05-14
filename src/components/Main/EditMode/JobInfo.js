import React from 'react';
import Input from './Input';
import DelBtn from './DelBtn';
import TextBox from './TextBox';

const JobInfo = (props) => {
  const { from, to, jobTitle, company, summary, id, handleChange, handleDel } =
    props;
  return (
    <div className='flex flex-col gap-2 shadow-md p-2'>
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
        name='jobTitle'
        placeHolder='Job Title'
        type='text'
        value={jobTitle}
        onChange={(e) => handleChange(e, id)}
      />
      <Input
        name='company'
        placeHolder='Company'
        type='text'
        value={company}
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

export default JobInfo;
