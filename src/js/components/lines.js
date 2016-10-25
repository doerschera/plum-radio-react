import React from 'react';
import poems from './poems.js'

export default class Lines extends React.Component {

  render() {
    const lines = this.props.lines.map((line, i) =>
      <h2 key={i}>{line}</h2>
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
