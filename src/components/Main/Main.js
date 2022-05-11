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
      <main className='p-4 flex flex-col justify-center items-start gap-5 lg:flex-row'>
        <EditMode
          generalInfo={this.state.generalInfo}
          description={this.state.description}
          education={this.state.education}
          experience={this.state.experience}
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
