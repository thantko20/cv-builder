import React, { Component } from 'react';
import StudyInfo from './StudyInfo';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = { education: props.education };
  }

  render() {
    const numberOfEdu = this.state.education;
    return (
      <div>
        {numberOfEdu.map((edu) => (
          <StudyInfo
            placeOfStudy={edu.placeOfStudy}
            from={edu.from}
            to={edu.to}
            degree={edu.degree}
            summary={edu.summary}
          />
        ))}
      </div>
    );
  }
}

export default Education;
