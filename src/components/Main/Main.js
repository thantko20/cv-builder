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
      objective:
        "I'm an aspiring front-end web developer based in Burma. I have created several websites with smooth UI and UX. I'm eagered to learn new techonology in this field. I spend my free time with my loved ones",
      education: [],
      experience: [],
    };
  }

  render() {
    return (
      <main>
        <Preview
          generalInfo={this.cv.generalInfo}
          objective={this.cv.objective}
          education={this.cv.education}
          experience={this.cv.experience}
        />
      </main>
    );
  }
}

export default Main;
