import React from 'react';

const TextBox = (props) => {
  const { name, placeHolder, text, onChange } = props;

  return (
    <textarea
      name={name}
      placeholder={placeHolder}
      value={text}
      onChange={onChange}
      className='w-full outline-none border text-xs block focus:border-gray-500 rounded-sm min-h-[4em]'
    ></textarea>
  );
};

export default TextBox;
