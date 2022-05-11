import React, { Component } from 'react';
import Input from './Input';
import DelBtn from './DelBtn';
import TextBox from './TextBox';

class StudyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeOfStudy: props.placeOfStudy,
      from: props.from,
      to: props.to,
      degree: props.degree,
      summary: props.summary,
      id: props.id,
    };
    this.handlePlaceChange = this.handlePlaceChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleDegreeChange = this.handleDegreeChange.bind(this);
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
  }

  handlePlaceChange(e) {
    this.setState({ placeOfStudy: e.target.value }, () => {
      this.props.handleStudyInfo(this.state);
    });
  }

  handleFromChange(e) {
    this.setState({ from: e.target.value }, () => {
      this.props.handleStudyInfo(this.state);
    });
  }

  handleToChange(e) {
    this.setState({ to: e.target.value }, () => {
      this.props.handleStudyInfo(this.state);
    });
  }

  handleDegreeChange(e) {
    this.setState({ degree: e.target.value }, () => {
      this.props.handleStudyInfo(this.state);
    });
  }

  handleSummaryChange(e) {
    this.setState({ summary: e.target.value }, () => {
      this.props.handleStudyInfo(this.state);
    });
  }

  render() {
    return (
      <div className='flex flex-col gap-2 shadow-md p-2'>
        <Input
          placeHolder='Place of Study'
          type='text'
          value={this.state.placeOfStudy}
          onChange={this.handlePlaceChange}
        />
        <div className='flex gap-4'>
          <Input
            placeHolder='From...'
            type='text'
            value={this.state.from}
            onChange={this.handleFromChange}
          />
          <Input
            placeHolder='To...'
            type='text'
            value={this.state.to}
            onChange={this.handleToChange}
          />
        </div>
        <Input
          placeHolder='Degree'
          type='text'
          value={this.state.degree}
          onChange={this.handleDegreeChange}
        />
        <TextBox
          placeHolder='Summary'
          text={this.state.summary}
          onChange={this.handleSummaryChange}
        />
        <DelBtn onClick={() => this.props.handleDel(this.props.id)} />
      </div>
    );
  }
}

export default StudyInfo;
