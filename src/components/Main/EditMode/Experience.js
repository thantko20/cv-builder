import React, { Component } from 'react';
import uniqid from 'uniqid';
import AddBtn from './AddBtn';
import JobInfo from './JobInfo';

class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = { experience: props.experience };
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleDel = this.handleDel.bind(this);
    this.handleJobInfo = this.handleJobInfo.bind(this);
  }

  handleClickAdd() {
    this.setState((state) => {
      const newJobInfo = {
        from: '',
        to: '',
        jobTitle: '',
        company: '',
        summary: '',
        id: uniqid(),
      };

      const education = [...state.experience, newJobInfo];

      return {
        education,
      };
    });
  }

  handleJobInfo(data) {
    this.setState((state) => {
      const experience = [...state.experience];
      const id = experience.indexOf(
        experience.find((info) => info.id === data.id),
      );
      experience[id] = data;

      this.props.handleExperience(experience);

      return {
        experience,
      };
    });
  }

  handleDel(id) {
    this.setState((state) => {
      const experience = state.experience.filter((info) => info.id !== id);

      this.props.handleExperience(experience);

      return {
        experience,
      };
    });
  }

  render() {
    const numberOfExp = this.state.experience;
    return (
      <div>
        <h3 className='font-semibold mb-1'>Experience</h3>
        <div className='flex flex-col gap-4'>
          {numberOfExp.map((exp) => (
            <JobInfo
              from={exp.from}
              to={exp.to}
              jobTitle={exp.jobTitle}
              company={exp.company}
              summary={exp.summary}
              id={exp.id}
              handleDel={this.handleDel}
              handleJobInfo={this.handleJobInfo}
              key={exp.id}
            />
          ))}
        </div>
        <AddBtn onClick={this.handleClickAdd} />
      </div>
    );
  }
}

export default Experience;
