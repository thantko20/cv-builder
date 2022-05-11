import React, { Component } from 'react';
import ExperienceRow from './ExperienceRow';
import uniqid from 'uniqid';

class Experience extends Component {
  render() {
    const { experience } = this.props;

    return (
      <div>
        <h3 className='text-lg font-semibold mb-2'>Experience</h3>
        <div className='flex flex-col items-start gap-4'>
          {experience.map((info) => (
            <ExperienceRow
              from={info.from}
              to={info.to}
              jobTitle={info.jobTitle}
              company={info.company}
              summary={info.summary}
              key={uniqid()}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Experience;
