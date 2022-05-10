import React, { Component } from 'react';

class ExperienceRow extends Component {
  render() {
    const { from, to, jobTitle, company, summary } = this.props;
    return (
      <div className='text-sm font-semibold'>
        <div className='text-blue-800'>
          {from} - {to}
        </div>
        <div>
          {jobTitle} at {company}
        </div>
        <div className='text-sm text-gray-700 font-normal mt-2'>{summary}</div>
      </div>
    );
  }
}

export default ExperienceRow;
