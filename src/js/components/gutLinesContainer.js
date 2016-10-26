import React from 'react';
import Lines from './lines.js';

export default class GutContainer extends React.Component {

  componentDidMount() {
    this.timer = setInterval(this.props.timeDown, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return(<Lines lines={this.props.lines}/>)

  }
}
