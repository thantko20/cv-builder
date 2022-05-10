import React, { Component } from 'react';
import EducationRow from './EducationRow';

class Education extends Component {
  render() {
    const { education } = this.props;
    return (
      <ul>
        {education.map((info) => {
          return (
            <EducationRow
              placeOfStudy={info.placeOfStudy}
              degree={info.degree}
              from={info.from}
              to={info.to}
            />
          );
        })}
      </ul>
    );
  }
}

export default Education;
