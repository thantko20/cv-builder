import React, { Component } from 'react';
import Preview from './Preview/Preview';

class Main extends Component {
  constructor(props) {
    super(props);
    this.cv = {
      generalInfo: {
        name: 'John Doe',
        address: '13th Street, New York, US.',
        phone: '12345678',
        email: 'example@mail.com',
        website: 'www.me.com',
      },
      objective: '',
      education: [],
      experience: [],
    };
  }

  render() {
    return (
      <main>
        <Preview
          generalInfo={this.cv.generalInfo}
          education={this.cv.education}
          experience={this.cv.experience}
        />
      </main>
    );
  }
}

export default Main;
