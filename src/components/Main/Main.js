import React, { Component } from 'react';
import Preview from './Preview/Preview';
import EditMode from './EditMode/EditMode';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: this.props.generalInfo,
      description: this.props.description,
      education: this.props.education,
      experience: this.props.experience,
    };

    this.handleData = this.handleData.bind(this);
    this.handleGeneralInfoChange = this.handleGeneralInfoChange.bind(this);
  }

  handleGeneralInfoChange(e) {
    const { name, value } = e.target;

    this.setState((state) => {
      const generalInfo = { ...state.generalInfo };
      generalInfo[name] = value;

      return { generalInfo };
    });
  }

  handleData(data) {
    this.setState({
      generalInfo: data.generalInfo,
      description: data.description,
      education: data.education,
      experience: data.experience,
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
          handleData={this.handleData}
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
