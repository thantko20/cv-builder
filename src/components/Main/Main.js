import React, { Component } from 'react';
import Preview from './Preview/Preview';
import EditMode from './EditMode/EditMode';
import uniqid from 'uniqid';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: this.props.generalInfo,
      description: this.props.description,
      education: this.props.education,
      experience: this.props.experience,
    };

    this.handleGeneralInfoChange = this.handleGeneralInfoChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleAddEdu = this.handleAddEdu.bind(this);
    this.handleDelEdu = this.handleDelEdu.bind(this);
  }

  handleGeneralInfoChange(e) {
    const { name, value } = e.target;

    this.setState((state) => {
      const generalInfo = { ...state.generalInfo };
      generalInfo[name] = value;

      return { generalInfo };
    });
  }

  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }

  handleEducationChange(e, id) {
    this.setState((state) => {
      const { name, value } = e.target;
      const education = [...state.education];
      const index = education.indexOf(education.find((item) => item.id === id));
      education[index][name] = value;

      return { education };
    });
  }

  handleAddEdu() {
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
      return { education };
    });
  }

  handleDelEdu(id) {
    this.setState((state) => {
      const education = state.education.filter((item) => item.id !== id);

      return { education };
    });
  }

  render() {
    return (
      <main className='p-4 flex flex-col justify-start items-center gap-5 3xl:flex-row 3xl:items-start 3xl:justify-center'>
        <EditMode
          generalInfo={this.state.generalInfo}
          description={this.state.description}
          education={this.state.education}
          experience={this.state.experience}
          handleGeneralInfoChange={this.handleGeneralInfoChange}
          handleDescriptionChange={this.handleDescriptionChange}
          handleEducationChange={this.handleEducationChange}
          handleAddEdu={this.handleAddEdu}
          handleDelEdu={this.handleDelEdu}
        />
        <Preview
          generalInfo={this.state.generalInfo}
          description={this.state.description}
          education={this.state.education}
          experience={this.state.experience}
        />
      </main>
    );
  }
}

export default Main;
