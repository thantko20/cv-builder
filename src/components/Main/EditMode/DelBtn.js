import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DelBtn = (props) => {
  return (
    <button
      onClick={props.onClick}
      className='text-red-700 bg-red-100 self-start transition-colors duration-200 py-1 px-2 text-sm font-semibold hover:bg-red-200 rounded'
    >
      <FontAwesomeIcon icon={faTrashCan} className='mr-1 text-xs' />
      <span>Delete</span>
    </button>
  );
};

export default DelBtn;
