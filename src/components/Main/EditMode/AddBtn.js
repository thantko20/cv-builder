import React from 'react';

const AddBtn = (props) => {
  return (
    <button
      onClick={props.onClick}
      className='bg-blue-300 px-5 py-1 text-sm font-semibold text-blue-900 rounded hover:bg-blue-400 mt-2 transition-colors'
    >
      Add
    </button>
  );
};

export default AddBtn;
