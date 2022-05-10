import React, { Component } from 'react';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className='min-h-screen bg-zinc-900 w-screen font-varela'>
        <Header />
      </div>
    );
  }
}

export default App;
