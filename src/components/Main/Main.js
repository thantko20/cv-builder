import React, { Component } from 'react';
import Preview from './Preview/Preview';

class Main extends Component {
  constructor(props) {
    super(props);
    this.person = {
      generalInfo: {
        name: 'John Doe',
        address: '13th Street, New York, US.',
        phone: '12345678',
        email: 'example@mail.com',
        website: 'www.me.com',
      },
      objective:
        "I'm an aspiring front-end web developer based in Burma. I have created several websites with smooth UI and UX for several clients. I mainly develop in MERN stack. I spend my free time with my loved ones.",
      education: [
        {
          placeOfStudy: 'University Of Medicine(1), Yangon',
          from: '2017',
          to: 'present',
          degree: 'MBBS',
          summary: 'I did not do too well lmao',
        },
        {
          placeOfStudy: 'University Of Medicine(1), Yangon',
          from: '2017',
          to: 'present',
          degree: 'MBBS',
          summary: 'I did not do too well lmao',
        },
      ],
      experience: [
        {
          from: '2020',
          to: '2022',
          jobTitle: 'React Developer',
          company: 'Facebook',
          summary:
            'Mark Zuckerberg begged me not to resign. But I wanted to work for your company so I chose to quit and join yours.',
        },
      ],
    };
  }

  render() {
    return (
      <main>
        <Preview
          generalInfo={this.person.generalInfo}
          objective={this.person.objective}
          education={this.person.education}
          experience={this.person.experience}
        />
      </main>
    );
  }
}

export default Main;
