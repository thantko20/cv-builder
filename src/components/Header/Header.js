import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className='bg-blue-500 py-3 px-3 flex justify-center text-slate-50'>
        <h1 className='text-2xl font-bold font-oswald'>CV Creator</h1>
      </header>
    );
  }
}

export default Header;
