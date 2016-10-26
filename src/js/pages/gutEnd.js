import React from 'react';

export default class GutEnd extends React.Component {
  render() {
    const pastLines = this.props.pastLines.map((lines, i) => <p key={i}>{lines}</p>)

    return (
      <div class='row'>
        <div class='col s10 offset-s1'>
          {pastLines}
        </div>
      </div>
    )
  }
}
