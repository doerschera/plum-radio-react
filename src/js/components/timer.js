import React from 'react';

export default class Timer extends React.Component {
  render() {
    return (
      <div class='no-padding' id='timer-wrapper'>
        <div id='timer'>{this.props.time}</div>
      </div>
    )
  }
}
