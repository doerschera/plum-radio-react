import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <div class='col offset-s1'>
        <button>{this.props.text}</button>
      </div>
    )
  }
}
