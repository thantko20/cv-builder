import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

class App extends Component {
  render() {
    return (
      <div className='min-h-screen bg-zinc-900 font-varela'>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
