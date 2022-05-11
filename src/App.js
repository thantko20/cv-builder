import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import uniqid from 'uniqid';

const person = {
  generalInfo: {
    name: 'John Doe',
    jobTitle: 'Front-End Developer',
    address: '13th Street, New York, US.',
    phone: '12345678',
    email: 'example@mail.com',
    website: 'www.github.com/thantko20',
  },
  description:
    "I'm an aspiring front-end web developer based in New York. I have created websites with elegant UI and UX for several clients. I do freelance but would be happy to join a team of talented developers. I spend free time with my loved oens.",
  education: [
    {
      placeOfStudy: 'Massachusetts Institute of Technology',
      from: '2017',
      to: '2021',
      degree: 'BSc Computer Science',
      summary:
        'I did not go to MIT. I included this just to impress recruiters and employers. No need to go to MIT because I have a brain of Einstein and am better than an average MIT student.',
      id: uniqid(),
    },
  ],
  experience: [
    {
      from: '2021',
      to: 'Present',
      jobTitle: 'React Developer',
      company: 'Facebook',
      summary:
        "Mark Zuckerberg is begging me not to resign. But I want to work for your company so I'm going to quit Facebook and join yours.",
      id: uniqid(),
    },
  ],
};

class App extends Component {
  render() {
    return (
      <div className='min-h-screen bg-zinc-900 font-varela'>
        <Header />
        <Main
          generalInfo={person.generalInfo}
          description={person.description}
          education={person.education}
          experience={person.experience}
        />
      </div>
    );
  }
}

export default App;
