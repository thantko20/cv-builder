import { faFile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className='bg-blue-600 py-3 px-3 flex justify-center text-slate-50 items-center gap-2'>
        <FontAwesomeIcon icon={faFile} className='text-lg' />
        <h1 className='text-2xl font-bold font-oswald hover:text-blue-300'>
          <a href='/'>CV Creator</a>
        </h1>
      </header>
    );
  }
}

export default Header;
