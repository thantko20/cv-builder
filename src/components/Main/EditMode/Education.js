import React, { Component } from 'react';
import AddBtn from './AddBtn';
import StudyInfo from './StudyInfo';

class Education extends Component {
  render() {
    const { education, handleEducationChange, handleAdd, handleDel } =
      this.props;
    return (
      <div>
        <h3 className='font-semibold mb-1'>Education</h3>
        <div className='flex flex-col gap-4'>
          {education.map((item) => (
            <StudyInfo
              placeOfStudy={item.placeOfStudy}
              from={item.from}
              to={item.to}
              degree={item.degree}
              summary={item.summary}
              id={item.id}
              handleDel={handleDel}
              handleEducationChange={handleEducationChange}
              key={item.id}
            />
          ))}
        </div>
        <AddBtn onClick={handleAdd} />
      </div>
    );
  }
}

export default Education;
