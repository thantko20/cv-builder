import React, { Component } from 'react';
import uniqid from 'uniqid';
import Input from './Input';
import DelBtn from './DelBtn';

class StudyInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeOfStudy: props.placeOfStudy,
      from: props.from,
      to: props.to,
      degree: props.degree,
      summary: props.summary,
      id: uniqid(),
    };
  }

  render() {
    return (
      <div>
        <DelBtn onClick={() => {}} />
        <Input
          placeHolder='Place of Study'
          type='text'
          value={this.state.placeOfStudy}
          onChange={() => {
            /* something */
          }}
        />
        <div>
          <Input
            placeHolder='To...'
            type='number'
            value={this.state.to}
            onChange={() => {
              /* something */
            }}
          />
          <Input
            placeHolder='From...'
            type='number'
            value={this.state.from}
            onChange={() => {
              /* something */
            }}
          />
        </div>
        <Input
          placeHolder='Degree'
          type='text'
          value={this.state.degree}
          onChange={() => {
            /* something */
          }}
        />
        <textarea placeholder='Summary' value={this.state.summary}></textarea>
      </div>
    );
  }
}

export default StudyInfo;
