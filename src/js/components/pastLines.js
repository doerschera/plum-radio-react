import React from 'react';

export default class PastLines extends React.Component {

  render() {
    const pastLines = this.props.pastLines.map((lines, i) => <p key={i}>{lines}</p>);

    return(
      <div class='col s8 offset-s2'>
        <div class='content-area'>
          {pastLines}
        </div>
      </div>
    )
  }
}
