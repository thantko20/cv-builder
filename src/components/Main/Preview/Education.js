import React, { Component } from 'react';
import EducationRow from './EducationRow';

class Education extends Component {
  render() {
    const { education } = this.props;
    return (
      <div>
        <h3 className='text-lg font-semibold mb-2'>Education</h3>
        <div className='flex flex-col items-start gap-4'>
          {education.map((info) => {
            return (
              <EducationRow
                placeOfStudy={info.placeOfStudy}
                from={info.from}
                to={info.to}
                degree={info.degree}
                summary={info.summary}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Education;
