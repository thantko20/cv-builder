import React, { Component } from 'react';
import uniqid from 'uniqid';
import AddBtn from './AddBtn';
import StudyInfo from './StudyInfo';

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = { education: props.education };
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.handleStudyInfo = this.handleStudyInfo.bind(this);
  }

  handleClickAdd() {
    this.setState((state) => {
      const newStudyInfo = {
        placeOfStudy: '',
        from: '',
        to: '',
        degree: '',
        summary: '',
        id: uniqid(),
      };

      const education = [...state.education, newStudyInfo];

      return {
        education,
      };
    });
  }

  handleStudyInfo(data) {
    this.setState((state) => {
      const education = [...state.education];
      const id = education.indexOf(
        education.find((info) => info.id === data.id),
      );
      education[id] = data;

      this.props.handleEducation(education);

      return {
        education,
      };
    });
  }

  handleDel(id) {
    this.setState((state) => {
      const education = state.education.filter((info) => info.id !== id);

      this.props.handleEducation(education);

      return {
        education,
      };
    });
  }

  render() {
    const numberOfEdu = this.state.education;
    return (
      <div>
        <h3 className='font-semibold mb-1'>Education</h3>
        <div className='flex flex-col gap-4'>
          {numberOfEdu.map((edu) => (
            <StudyInfo
              placeOfStudy={edu.placeOfStudy}
              from={edu.from}
              to={edu.to}
              degree={edu.degree}
              summary={edu.summary}
              id={edu.id}
              handleDel={this.handleDel}
              handleStudyInfo={this.handleStudyInfo}
              key={edu.id}
            />
          ))}
        </div>
        <AddBtn onClick={this.handleClickAdd} />
      </div>
    );
  }
}

export default Education;
