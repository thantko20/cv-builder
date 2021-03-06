import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faWindowMaximize,
} from '@fortawesome/free-solid-svg-icons';

const GeneralInfo = (props) => {
  const { name, jobTitle, address, phone, email, website } = props;
  return (
    <div>
      <h2 className='text-6xl font-extrabold'>{name}</h2>
      <p className='text-sm mb-3 text-gray-700'>{jobTitle}</p>
      <div className='flex flex-col gap-2 text-gray-500 font-medium text-sm'>
        <div>
          <FontAwesomeIcon icon={faLocationDot} className='mr-2' />
          {address}
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} className='mr-2' />
          {phone}
        </div>
        <div className='italic'>
          <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
          {email}
        </div>
        <div>
          <FontAwesomeIcon icon={faWindowMaximize} className='mr-2' />
          <a
            href={`https://${website}`}
            target='_blank'
            rel='noreferrer'
            className='underline text-blue-500 hover:text-inherit'
          >
            {website}
          </a>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
