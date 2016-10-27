import React from 'react';
import poems from './poems.js'

export default class Lines extends React.Component {

  render() {
    const lines = this.props.lines.map((line, i) =>
      <h4 key={i} class='white-box lines'>{line}</h4>
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
