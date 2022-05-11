import React, { Component } from 'react';
import Input from './Input';
import DelBtn from './DelBtn';
import TextBox from './TextBox';

class JobInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: props.from,
      to: props.to,
      jobTitle: props.jobTitle,
      company: props.company,
      summary: props.summary,
      id: props.id,
    };
    this.handleCompanyChange = this.handleCompanyChange.bind(this);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.handleJobTitleChange = this.handleJobTitleChange.bind(this);
    this.handleSummaryChange = this.handleSummaryChange.bind(this);
  }

  handleFromChange(e) {
    this.setState({ from: e.target.value }, () => {
      this.props.handleJobInfo(this.state);
    });
  }

  handleToChange(e) {
    this.setState({ to: e.target.value }, () => {
      this.props.handleJobInfo(this.state);
    });
  }

  handleJobTitleChange(e) {
    this.setState({ jobTitle: e.target.value }, () => {
      this.props.handleJobInfo(this.state);
    });
  }

  handleCompanyChange(e) {
    this.setState({ company: e.target.value }, () => {
      this.props.handleJobInfo(this.state);
    });
  }

  handleSummaryChange(e) {
    this.setState({ summary: e.target.value }, () => {
      this.props.handleJobInfo(this.state);
    });
  }

  render() {
    return (
      <div className='flex flex-col gap-2 shadow-md p-2'>
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
          placeHolder='Job Title'
          type='text'
          value={this.state.jobTitle}
          onChange={this.handleJobTitleChange}
        />
        <Input
          placeHolder='Company'
          type='text'
          value={this.state.company}
          onChange={this.handleCompanyChange}
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

export default JobInfo;
