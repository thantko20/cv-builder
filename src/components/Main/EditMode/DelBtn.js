import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';

class DelBtn extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    );
  }
}

export default DelBtn;
