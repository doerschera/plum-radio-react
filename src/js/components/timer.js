import React from 'react';

export default class Timer extends React.Component {
  render() {
    return (
      <div class='no-padding col s1 offset-s6'>
        <div id='timer'>{this.props.time}</div>
      </div>
    )
  }
}
