import React from 'react';
import poems from './poems.js'

export default class Lines extends React.Component {

  componentDidMount() {
    this.timer = setInterval(this.props.timeDown, 1000)
  }

  render() {
    const lines = this.props.lines.map((line, i) =>
      <h4 key={i}>{line}</h4>
    );
    return (
      <div class='row'>
        <div class='col s8 offset-s2'>
          {lines}
        </div>
      </div>
    )
  }
}
