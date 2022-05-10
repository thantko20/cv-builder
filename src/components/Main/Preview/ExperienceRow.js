import React, { Component } from 'react';

class ExperienceRow extends Component {
  render() {
    const { from, to, jobTitle, company, summary } = this.props;
    return (
      <div>
        <div>
          {from} - {to}
        </div>
        <div>
          {jobTitle} | {company}
        </div>
        <div>{summary}</div>
      </div>
    );
  }
}

export default ExperienceRow;
