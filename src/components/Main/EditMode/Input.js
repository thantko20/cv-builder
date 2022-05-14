import React from 'react';

const Input = (props) => {
  const { name, placeHolder, type, value, onChange } = props;

  return (
    <input
      name={name}
      placeholder={placeHolder}
      type={type}
      value={value}
      onChange={onChange}
      className='bg-gray-50 px-1 py-1 text-sm font-medium appearance-none placeholder:text-gray-400 outline-none border rounded focus:border-gray-500'
    />
  );
};

export default Input;
