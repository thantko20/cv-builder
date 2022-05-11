import React, { Component } from 'react';
import { uniqid } from 'uniqid';

class Study extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeOfStudy: props.placeOfStudy,
      from: props.from,
      to: props.to,
      degree: props.degree,
      summary: props.summar,
    };
  }
}
